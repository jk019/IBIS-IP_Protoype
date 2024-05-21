<script>
    export let customerInfo;
    export let StopIndex;

     //sets the titles of the sections on CustomerInformationService based on the button clicked
     let chosenButton = "";
    function handleClickAllStops() {
        if (chosenButton !== "All stops") {
            chosenButton = "All stops";
        } else {
            chosenButton = "";
        }
    }
    function handleClickNextStops() {
        if (chosenButton !== "Next stops") {
            chosenButton = "Next stops";
        } else {
            chosenButton = "";
        }
    }
    function handleClickPreviousStops() {
        if (chosenButton !== "Previous stops") {
            chosenButton = "Previous stops";
        } else {
            chosenButton = "";
        }
    }

    //Variable that indicates whether a stop was found on CustomerInformationService
    let noStopFound = true;
    function updateNoStopFound() {
        noStopFound = false;
        console.log("Stop gefunden: ", noStopFound);
    }
</script>

<div>
    <h1>CustomerInformationService</h1>
    <p>
        The CustomerInformationService describes basic information about a trip.
    </p>
    <div><b>Vehicleref: </b>{customerInfo.vehicleRef}</div>
    <br />

    <div class="card-header">
        <h3>Current stop</h3>
        {#if customerInfo && customerInfo.tripInformation && customerInfo.tripInformation.stopSequence}
            {#each customerInfo.tripInformation.stopSequence as stop}
                {#if Number(stop.StopIndex.StopIndex) == Number(StopIndex.currentStopIndex)}
                    <b>Stopname: </b>{stop.StopName.StopName}
                    <br />
                    <b>StopRef: </b>{stop.StopRef.StopRef}
                    <br />
                    <b>Index: </b>{stop.StopIndex.StopIndex}
                    <br />
                    <b>Distance to next stop: </b>{stop.DistanceToNextStop
                        .DistanceToNextStop}
                    <br /><br />
                    {updateNoStopFound() || ""}
                {/if}
            {/each}
        {/if}

        {#if noStopFound}
            <div class="warning">
                warning! There are no values for this service or there might be
                a problem with the service
            </div>
        {/if}
    </div>
    <br />

    <p class="d-inline-flex gap-1">
        <a
            class="btn rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
            data-bs-toggle="collapse"
            href="#collapseExampleScrollableAllStops"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExampleScrollableAllStops"
            on:click|preventDefault={handleClickAllStops}
        >
            show all stops
        </a>
        <a
            class="btn rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
            data-bs-toggle="collapse"
            href="#collapseExampleScrollableNextStops"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExampleScrollableNextStops"
            on:click|preventDefault={handleClickNextStops}
        >
            show next stops
        </a>
        <a
            class="btn rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
            data-bs-toggle="collapse"
            href="#collapseExampleScrollablePreviousStops"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExampleScrollablePreviousStops"
            on:click|preventDefault={handleClickPreviousStops}
        >
            show previous stops
        </a>
    </p>

    <h4>{chosenButton}</h4>

    <div class="accordion" id="accordionButtonsCIS">
        <!--show all stops-->
        <div
            class="collapse"
            id="collapseExampleScrollableAllStops"
            style="overflow-y: scroll"
            data-bs-parent="#accordionButtonsCIS"
        >
            {#if customerInfo && customerInfo.tripInformation && customerInfo.tripInformation.stopSequence}
                <ul>
                    {#each customerInfo.tripInformation.stopSequence as stop}
                        <b>Stopname: </b>{stop.StopName.StopName}
                        <br />
                        <b>StopRef: </b>{stop.StopRef.StopRef}
                        <br />
                        <b>Index: </b>
                        {stop.StopIndex.StopIndex}
                        <br />
                        <b>Distance to next stop: </b>{stop.DistanceToNextStop
                            .DistanceToNextStop}

                        <br /><br />
                    {/each}
                </ul>
            {/if}
        </div>

        <!--show next stops-->
        <div
            class="collapse"
            id="collapseExampleScrollableNextStops"
            style="overflow-y: scroll"
            data-bs-parent="#accordionButtonsCIS"
        >
            {#if customerInfo && customerInfo.tripInformation && customerInfo.tripInformation.stopSequence}
                <ul>
                    {#each customerInfo.tripInformation.stopSequence as stop}
                        {#if Number(stop.StopIndex.StopIndex) >= Number(StopIndex.currentStopIndex)}
                            <b>Stopname: </b>{stop.StopName.StopName}
                            <br />
                            <b>StopRef: </b>{stop.StopRef.StopRef}
                            <br />
                            <b>Index: </b>
                            {stop.StopIndex.StopIndex}
                            <br />
                            <b>Distance to next stop: </b>{stop
                                .DistanceToNextStop.DistanceToNextStop}

                            <br /><br />
                        {/if}
                    {/each}
                </ul>
            {/if}
        </div>

        <!--show previous stops-->
        <div
            class="collapse"
            id="collapseExampleScrollablePreviousStops"
            style="overflow-y: scroll"
            data-bs-parent="#accordionButtonsCIS"
        >
            {#if customerInfo && customerInfo.tripInformation && customerInfo.tripInformation.stopSequence}
                <ul>
                    {#each customerInfo.tripInformation.stopSequence.reverse() as stop}
                        {#if Number(stop.StopIndex.StopIndex) < Number(StopIndex.currentStopIndex)}
                            <b>Stopname: </b>{stop.StopName.StopName}
                            <br />
                            <b>StopRef: </b>{stop.StopRef.StopRef}
                            <br />
                            <b>Index: </b>
                            {stop.StopIndex.StopIndex}
                            <br />
                            <b>Distance to next stop: </b>{stop
                                .DistanceToNextStop.DistanceToNextStop}

                            <br /><br />
                        {/if}
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
</div>

<style>


    .btn {
        margin: 5px;
        background-color: white;
        color: black;
        white-space: normal;
        overflow-wrap: break-word;
        word-break: break-word;
        border: 1px solid gray;
        text-decoration: none;
    }

    .btn:hover {
        background-color: #e2e6ea;
    }

    #collapseExampleScrollableAllStops {
        height: 400px;
    }
    #collapseExampleScrollableNextStops {
        height: 400px;
    }
    #collapseExampleScrollablePreviousStops {
        height: 400px;
    }
    .warning {
        color: red;
    }
</style>
