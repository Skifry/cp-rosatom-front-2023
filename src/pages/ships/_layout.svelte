<script>
    import {ContentSwitcher, Switch} from "carbon-components-svelte";
    import { isActive, goto } from "@roxi/routify";

    let links = {
	    "Ледоколы": "/ships/icebreakers",
	    "Танкеры": "/ships/tankers",
    }

    const noFocusOnLoad = (event) => {
        if(!event.explicitOriginalTarget) {
            // костыль с точки зрения свелта
            setTimeout(() => document.activeElement.blur(), 1);
        }
    }
</script>

<h3>Управление суднами</h3>

<ContentSwitcher on:change={noFocusOnLoad}>
    {#each Object.entries(links) as [title, link]}
        <Switch
            text={title}
            selected={$isActive(link)}
            on:click={$goto(link, {}, false)}
        />
    {/each}
</ContentSwitcher>

<slot />