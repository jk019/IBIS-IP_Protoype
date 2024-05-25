<script>
    import Navigation from "./Components/navigation.svelte";
    import Router from "svelte-spa-router";
    import routes from "./routes.js";
</script>
<Navigation />
<div class="borders">
    <!-- Here I load the page depending on the current URL -->
    <Router {routes} />
</div>
<style>
    .borders {
        padding: 10px;
        margin: 10px;
    }
</style>
