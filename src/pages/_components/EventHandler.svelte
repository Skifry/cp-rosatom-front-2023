<script>
    import { createEventDispatcher, setContext } from 'svelte'
    setContext('context-dispatch', createEventDispatcher())
</script>

<slot />