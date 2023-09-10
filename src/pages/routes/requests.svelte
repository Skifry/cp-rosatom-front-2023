<script>
    import {DataTable, Pagination, Link, Button,
        Toolbar, ToolbarContent, ToolbarSearch, DataTableSkeleton} from "carbon-components-svelte";
    import { page, url } from "@roxi/routify";
    import { Add, WarningFilled } from "carbon-icons-svelte";
    import { iceClasses } from "../_components/ships";
    import dayjs from 'dayjs'

    let pageSize = 10;
    let pageIndex = 1;
    let filteredRowIds = [];

	import {api} from "../api";
    import {params} from '@roxi/routify';
    let filterQuery = $params.search ?? '';

    import {ToolbarMenu, ToolbarMenuItem} from 'carbon-components-svelte';
    import {importCSV, exportJSON} from '../_components/datacommons';

    let rows = [];
    const requestsList = async () => {
        const response = await api.dataset.tankerRequestListList();
        rows = response.data.items;
    }
</script>

{#await requestsList()}
    <DataTableSkeleton showHeader={false} showToolbar={true} rowCount={pageSize} />
{:then _}
    <div class="w-full flex flex-col">
        <DataTable
            headers={[
                { key: "tanker.name", value: "Судно" },
                { key: "tanker.iceClass", value: "Ледяной класс"},
                { key: "tanker.speed", value: "Скорость судна" },
                { key: "startPoint", value: "Точка отправления" },
                { key: "endPoint", value: "Точка прибытия" },
                { key: "startTime", value: "Дата и время начала" },
                { key: "endTime", value: "Дата и время окончания" },
            ]}
            {pageSize}
            page={pageIndex}
            {rows}
        >
            <svelte:fragment slot="cell" let:row let:cell>
                {#if cell.key == "tanker.name"}
                    <Link href={$url("/ships/tankers", {search: row.tanker.imo}, false)}>
                        {cell.value}
                    </Link>
                {:else if cell.key == "status"}
                    status
                {:else if cell.key == "tanker.iceClass"}
                    {iceClasses[cell.value]}
                {:else if cell.key == "tanker.speed"}
                    {cell.value} уз.
                {:else if cell.key == "startTime" || cell.key == "endTime"}
                    {dayjs(cell.value*1000).format("DD.MM.YYYY HH:mm")}
                {:else}
                    {cell.value}
                {/if}
            </svelte:fragment>
            <Toolbar>
                <ToolbarContent>
                    <ToolbarSearch
                        persistent
                        placeholder="Поиск по заявкам"
                        bind:filteredRowIds
                        shouldFilterRows
                        value={filterQuery}
                    />
                    <ToolbarMenu kind="primary">
                        <ToolbarMenuItem hasDivider on:click={() => $page.reset()}>
                            Обновить таблицу
                        </ToolbarMenuItem>
                        <ToolbarMenuItem hasDivider on:click={() => importCSV(
                            api.dataset.tankerRequestImportCreate,
                            () => $page.reset()
                        )}>
                            Импорт данных
                        </ToolbarMenuItem>
                        <ToolbarMenuItem hasDivider on:click={() => exportJSON(
                            api.dataset.tankerRequestExportList
                        )}>
                            Экспорт данных
                        </ToolbarMenuItem>
                    </ToolbarMenu>
                </ToolbarContent>
            </Toolbar>
        </DataTable>
        <Pagination
            bind:pageSize
            bind:page={pageIndex}
            totalItems={rows.length}
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