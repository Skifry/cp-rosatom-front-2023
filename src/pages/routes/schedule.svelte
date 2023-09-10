<script>
    import {DataTable, Pagination, Link, Button,
        Toolbar, ToolbarContent, ToolbarSearch,
        DataTableSkeleton} from "carbon-components-svelte";
    import { goto, url, page } from "@roxi/routify";
    import { ArrowLeft } from "carbon-icons-svelte";
    import dayjs from 'dayjs'

    let pageSize = 10;
    let pageIndex = 1;
    let filteredRowIds = [];

	import {api} from "../api";
    import {params} from '@roxi/routify';
    let filterQuery = $params.search ?? '';

    import {ToolbarMenu, ToolbarMenuItem} from 'carbon-components-svelte';
    import {exportJSON} from '../_components/datacommons';

    let rows = [];
    const scheduleList = async () => {
        const response = await api.schedule.listList();
        rows = response.data.items;
    }
</script>

{#await scheduleList()}
    <DataTableSkeleton showHeader={false} showToolbar={true} rowCount={pageSize} />
{:then _}
    <div class="w-full flex flex-col">
        <DataTable
            headers={[
                { key: "tanker.name", value: "Судно" },
                { key: "iceBreaker.name", value: "Ледокол" },
                { key: "startLine", value: "Точка отправления" },
                { key: "endLine", value: "Точка прибытия" },
                { key: "startTime", value: "Дата и время начала" },
                { key: "endTime", value: "Дата и время окончания" }
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
                {:else if cell.key == "iceBreaker.name"}
                    <Link href={$url("/ships/icebreakers", {search: row.iceBreaker.imo}, false)}>
                        {cell.value}
                    </Link>
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
                        placeholder="Поиск по расписанию"
                        bind:filteredRowIds
                        shouldFilterRows
                        value={filterQuery}
                    />
                    <ToolbarMenu kind="primary">
                        <ToolbarMenuItem hasDivider on:click={() => $page.reset()}>
                            Обновить таблицу
                        </ToolbarMenuItem>
                        <ToolbarMenuItem hasDivider on:click={() => exportJSON(
                            api.dataset.tankerRequestExportList
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