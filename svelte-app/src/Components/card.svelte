<script>
    export let IP = "";
    export let device = [];
    export let current_service = "";
    export let handleServiceClick;
</script>

<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Gerät {IP}</h5>
        <p class="card-text">
            Mögliche Beschreibung zum anderen Gerät, falls es so etwas braucht?
        </p>
    </div>

    <div class="accordion" id="accordionExample">
        <p class="d-inline-flex gap-1">
            <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse{IP}"
                aria-expanded="false"
                aria-controls="collapse{IP}"
                data-bs-parent="#accordionExample"
            >Services</button>
        </p>
    
        <div class="collapse" id="collapse{IP}" data-bs-parent="#accordionExample">
            <div class="d-flex">
                <div class="flex-shrink-1">
                    {#each device.services as service}
                        <button
                            class="btn btn-primary my-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse{current_service}"
                            aria-expanded="false"
                            aria-controls="collapse{current_service}"
                            on:click={() => handleServiceClick(service)}
                            data-bs-parent="#accordionExample"
                        >
                            {service}
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    </div>    
</div>

<style>
    .card {
        margin-top: 10px;
        margin: 30px;
    }
    .card-body {
        padding: 10px;
    }
    .btn {
        margin: 5px;
        background-color: white;
        color: black;
        white-space: normal;
        overflow-wrap: break-word; /* Add this line */
        word-break: break-word; /* Add this line */
    }

</style>
