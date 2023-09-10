<script>
    import {Select, SelectItem} from "carbon-components-svelte";
    import countries from "./countries.json";

    export let labelText;
    export let selected;
</script>

<Select bind:labelText bind:selected>
    {#each Object.entries(countries) as [code, country]}
        <SelectItem value={code} text={country} />
    {/each}
</Select>