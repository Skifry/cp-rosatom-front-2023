<script>
    import {DataTable, Pagination, Link, TooltipDefinition, Button,
        Toolbar, ToolbarContent, ToolbarSearch, DataTableSkeleton} from "carbon-components-svelte";
    import {iceClasses, getCountryByCode} from '../_components/ships';
    import Launch from "carbon-icons-svelte/lib/Launch.svelte";
    import { ArrowLeft, WarningFilled, Rotate } from "carbon-icons-svelte";
    import { goto, page } from "@roxi/routify";

	import {api} from "../api";

    import {ToolbarMenu, ToolbarMenuItem} from 'carbon-components-svelte';
    import {exportJSON} from '../_components/datacommons';

    let pageSize = 10;
    let pageIndex = 1;
    let filteredRowIds = [];

    import {params} from '@roxi/routify';
    let filterQuery = $params.search ?? '';

    let rows = [];
    const tankerList = async () => {
        const response = await api.dataset.tankerListList();
        rows = response.data.items.map((el, ix) => ({...el, id: ix}))
    }
</script>

{#await tankerList()}
    <DataTableSkeleton showHeader={false} showToolbar={true} rowCount={pageSize} />
{:then _}
    <div class="w-full flex flex-col">
        <DataTable
            expandable
            headers={[
                { key: "name", value: "Танкер" },
                { key: "imo", value: "Номер ИМО" },
                { key: "speed", value: "Скорость судна" },
                { key: "iceClass", value: "Ледовый класс судна" },
                { key: "flag", value: "Флаг"},
                { key: "shipType", value: "Тип судна"},
            ]}
            nonExpandableRowIds={rows
                .filter((row) => !row.metadata)
                .map((row) => row.id)}
            {pageSize}
            page={pageIndex}
            {rows}
        >
            <svelte:fragment slot="cell" let:row let:cell>
                {#if cell.key == "imo"}
                    <Link
                    href={"https://www.vesselfinder.com/vessels/details/" + cell.value}
                    target="_blank" icon={Launch}>
                        {cell.value}
                    </Link>
                {:else if cell.key == "flag"}
                    {#if !!row.metadata && !!row.metadata.flagCountryCode}
                        <div class="flex items-center">
                            <img class="h-3 mr-2"
                                src={"/static/flags/" + row.metadata.flagCountryCode + ".png"}
                                alt={row.metadata.flagCountryCode} />
                            <p class="text-sm">{getCountryByCode(row.metadata.flagCountryCode)}</p>
                        </div>
                    {:else}
                        <span class="text-gray-500">(не указан)</span>
                    {/if}
                {:else if cell.key == "speed"}
                    {cell.value} уз.
                {:else if cell.key == "iceClass"}
                    {iceClasses[cell.value]}
                {:else if cell.key == "shipType"}
                    {#if !!row.metadata && !!row.metadata.shipType}
                        { row.metadata.shipType }
                    {:else}
                        <span class="text-gray-500">(не указан)</span>
                    {/if}
                {:else}
                    {cell.value}
                {/if}
            </svelte:fragment>

            <svelte:fragment slot="expanded-row" let:row>
                <div class="flex py-3">
                    <div class="flex flex-col w-full">
                        <table class="metadata-table">
                            <thead>
                                <tr>
                                    <th>Дата выпуска</th>
                                    <th>Владелец корабля</th>
                                    <th>Валовая вместимость</th>
                                    <th>Предельная грузоподъёмность</th>
                                    <th>Габариты корабля</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{row.metadata.dateOfBuild}</td>
                                    <td>
                                        <div class="flex items-center">
                                            <img class="w-3 mr-1.5"
                                                src={"/static/flags/" + row.metadata.registeredOwner.countryCode + ".png"}
                                                alt={row.metadata.registeredOwner.countryCode} />
                                            <TooltipDefinition tooltipText={"Номер ИМО: " + row.metadata.registeredOwner.imo}>
                                                <p class="text-sm">
                                                    {row.metadata.registeredOwner.name}
                                                </p>
                                            </TooltipDefinition>
                                        </div>
                                    </td>
                                    <td>{row.metadata.grossTonnage} г.т.</td>
                                    <td>{row.metadata.summerDeadweight} т.</td>
                                    <td>{row.metadata.lengthOverall}х{row.metadata.beam} м.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </svelte:fragment>
            <Toolbar>
                <ToolbarContent>
                    <ToolbarSearch
                        persistent
                        value={filterQuery}
                        placeholder="Поиск танкера"
                        bind:filteredRowIds
                        shouldFilterRows
                    />
                    <ToolbarMenu>
                        <ToolbarMenuItem hasDivider on:click={() => $page.reset()}>
                            Обновить таблицу
                        </ToolbarMenuItem>
                        <ToolbarMenuItem hasDivider on:click={() => exportJSON(
                            api.dataset.tankerExportList
                        )}>
                            Экспорт данных
                        </ToolbarMenuItem>
                    </ToolbarMenu>
                    <Button kind="ghost" icon={ArrowLeft} on:click={() => $goto("/routes/requests")}>
                        Перейти к заявкам
                    </Button>
                </ToolbarContent>
            </Toolbar>
        </DataTable>
        <Pagination
            bind:pageSize
            bind:page={pageIndex}
            totalItems={filteredRowIds.length}
            pageSizeInputDisabled
            
            forwardText="Следующая станица"
            backwardText="Предыдущая страница"
            itemsPerPageText="Сущностей на странице"
            itemRangeText={(min, max, total) => `${min}–${max} из ${total} сущност${max % 100 === 1 ? "и" : "ей"}`}
            pageRangeText={(current, total) => `из ${total} страниц${total % 100 === 1 ? "ы" : ""}`}
        />
    </div>
{:catch e}
    <div class="flex items-center gap-x-3 mb-4 p-4 text-white bg-[#E4000D]">
        <WarningFilled />
        {e.response.data.message || e.message}
    </div>
    <DataTableSkeleton showHeader={false} showToolbar={true} rowCount={pageSize} />
{/await}

<style>
    .metadata-table {
        width: 100%;
        margin: 0 -24px;
    }

    .metadata-table tr,
    .metadata-table thead,
    .metadata-table thead th,
    .metadata-table tbody,
    .metadata-table tbody td {
        background-color: transparent;
    }

    .metadata-table tr
    .metadata-table thead,
    .metadata-table thead th,
    .metadata-table tbody,
    .metadata-table tbody td {
        border: 0 !important;
    }

    .metadata-table thead tr,
    .metadata-table tbody tr {
        height: inherit !important;
    }

    .metadata-table thead th {
        padding-bottom: 4px;
        vertical-align: top;
        color: #000 !important;
    }
    
    .metadata-table tbody td {
        vertical-align: top;
        padding-left: 1rem !important;
    }
</style>