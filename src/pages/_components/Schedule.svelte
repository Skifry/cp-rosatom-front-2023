<script>
    import {DataTable, Pagination, Link} from "carbon-components-svelte";

    let pageSize = 5;
    let page = 1;

    let rows = [
        {
            id: 1,
            ship: "Штурман Альбанов",
            request_id: undefined,
            icebreaker: "50 лет Победы",
            start_time: 1694208610957,
            end_time: 1694208622752,
            start_position: "Баренцево море",
            end_position: "Саббета 3"
        },
        {
            id: 2,
            ship: "Штурман Альбанов",
            request_id: undefined,
            icebreaker: "50 лет Победы",
            start_time: 1694208610957,
            end_time: 1694208622752,
            start_position: "Саббета 3",
            end_position: "Баренцево море"
        }
    ];
</script>

<DataTable
    headers={[
        { key: "ship", value: "Судно" },
        { key: "request_id", value: "Номер Заявки" },
        { key: "icebreaker", value: "Ледокол" },
        { key: "start_time", value: "Дата и время начала" },
        { key: "end_time", value: "Дата и время начала" },
        { key: "start_position", value: "Точка отправления" },
        { key: "end_position", value: "Точка прибытия" },
    ]}
    {pageSize}
    {page}
    {rows}
>
    <svelte:fragment slot="cell" let:row let:cell>
        {#if cell.key == "ship"}
            <Link href="https://en.wikipedia.org/wiki/Round-robin_DNS">
                {cell.value}
            </Link>
        {:else if cell.key == "request_id"}
            {cell.value}
        {:else if cell.key == "icebreaker"}
            {cell.value}
        {:else if cell.key == "start_time"}
            {cell.value}
        {:else if cell.key == "start_time"}
            {cell.value}
        {:else}
            {cell.value}
        {/if}
    </svelte:fragment>
</DataTable>
<Pagination
    bind:pageSize
    bind:page
    totalItems={rows.length}
    pageSizeInputDisabled
/>