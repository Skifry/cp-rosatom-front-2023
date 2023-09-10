<script>
    import {DataTable, DataTableSkeleton, Pagination, Link, TooltipDefinition, Button,
        Toolbar, ToolbarContent, ToolbarSearch,
        ComposedModal, ModalHeader, ModalBody, ModalFooter,
        TextInput, Form, InlineNotification} from "carbon-components-svelte";
    
    import {getCountryByCode} from '../_components/ships';

    import {Add, Launch, WarningFilled, TrashCan} from 'carbon-icons-svelte';
    import {page} from "@roxi/routify";

	import {api} from "../api";
    import {writable} from "svelte/store";

    import {ToolbarMenu, ToolbarMenuItem} from 'carbon-components-svelte';
    import {importCSV, exportJSON} from '../_components/datacommons';

    let pageSize = 10;
    let pageIndex = 1;
    let filteredRowIds = [];

    import {params} from '@roxi/routify';
    let filterQuery = $params.search ?? '';

    let rows = [];
    const icebreakerList = async () => {
        const response = await api.dataset.iceBreakerListList();
        rows = response.data.items.map((el, ix) => ({...el, id: ix}))
    }

    let addIcebreakerModalOpen = false;
    let addIcebreakerName = '';
    let addIcebreakerImo = '';
	$: error = writable("");
    $: ready = writable(true);

    const addIcebreakerSubmit = (event) => {
		event.preventDefault();

        $error = "";
        $ready = false;

		api.dataset.iceBreakerCreateCreate({
            imo: Number(addIcebreakerImo),
            name: addIcebreakerName
        })
			.then(async (_) => {
                addIcebreakerModalOpen = false;
                $page.reset();
			})
			.catch((e) => {
				$error = e.response.data.message ?? e.message;
			})
			.finally(() => {
				$ready = true;
			});
    }
</script>

<ComposedModal
    bind:open={addIcebreakerModalOpen}
    selectorPrimaryFocus="#add-icebreaker-name"
>
    <ModalHeader label="Ледоколы" title="Добавление ледокола" />
    <Form id="add-icebreaker-form" on:submit={addIcebreakerSubmit}>
        <ModalBody hasForm>
            <div class="w-full flex flex-col gap-y-4">
                {#if !!$error}
                    <InlineNotification hideCloseButton>
                        <strong slot="title">Ошибка: </strong>
                        <span slot="subtitle">{$error}</span>
                    </InlineNotification>
                {/if}
                <TextInput
                    type="text"
                    id="add-icebreaker-name"
                    labelText="Название ледокола"
                    placeholder="Введите название ледокола..."
                    bind:value={addIcebreakerName}
                    required />
                <TextInput
                    type="text"
                    id="add-icebreaker-imo"
                    labelText="Номер IMO ледокола"
                    placeholder="Введите номер IMO ледокола..."
                    bind:value={addIcebreakerImo}
                    required />
            </div>
        </ModalBody>
        <ModalFooter>
            <Button kind="secondary" on:click={() => addIcebreakerModalOpen = false}>Отменить</Button>
            <Button kind="primary" type="submit" skeleton={!$ready}>Добавить</Button>
        </ModalFooter>
    </Form>
</ComposedModal>
  
{#await icebreakerList()}
    <DataTableSkeleton showHeader={false} showToolbar={true} rowCount={pageSize} />
{:then _}
    <div class="w-full flex flex-col">
        <DataTable
            expandable
            headers={[
                { key: "name", value: "Ледокол" },
                { key: "imo", value: "Номер ИМО" },
                { key: "flag", value: "Флаг" },
                { key: "overflow", value: "Управление"}
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
                {:else if cell.key == "overflow"} 
                    <Button kind="danger" size="small" iconDescription="Удалить" icon={TrashCan}
                        on:click={async () => {
                            await api.dataset.iceBreakerDeleteDelete(row.imo)
                            $page.reset()
                        }}/>
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
                                    <th>Владелец судна</th>
                                    <th>Валовая вместимость</th>
                                    <th>Предельная грузоподъёмность</th>
                                    <th>Габариты судна</th>
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
                        placeholder="Поиск ледокола"
                        bind:filteredRowIds
                        shouldFilterRows
                    />
                    <ToolbarMenu>
                        <ToolbarMenuItem hasDivider on:click={() => $page.reset()}>
                            Обновить таблицу
                        </ToolbarMenuItem>
                        <ToolbarMenuItem hasDivider on:click={() => importCSV(
                            api.dataset.iceBreakerImportCreate,
                            () => $page.reset()
                        )}>
                            Импорт данных
                        </ToolbarMenuItem>
                        <ToolbarMenuItem hasDivider on:click={() => exportJSON(
                            api.dataset.iceBreakerExportList
                        )}>
                            Экспорт данных
                        </ToolbarMenuItem>
                    </ToolbarMenu>
                    <Button icon={Add} on:click={() => addIcebreakerModalOpen = true}>
                        Добавить ледокол
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