<script>
    import Navigation from "./Components/navigation.svelte";
	import Router from "svelte-spa-router";
	import routes from "./routes.js";



</script>

<Navigation />



<div class="container mt-3">
	<!-- Here we load the page depending on the current URL -->
	<Router {routes} />
  </div>


