<script>
    let services = [
        {
            id: 1,
            group_name: "Common V 1.0",
            options: [
                {
                    service_name: "Journey Information V 1.0",
                    methods: [
                        "GetAllDataResponse",
                        "GetCurrentBlockRefResponse",
                        "RetrievePartialTripSequenceRequest",
                        "RetrievePartialTripSequenceResponse",
                        "RetrieveSpecificBlockInformationRequest",
                        "RetrieveSpecificBlockInformationResponse",
                        "RetrieveSpecificStopInformationRequest",
                        "RetrieveSpecificStopInformationResponse",
                        "RetrieveSpecificTSPPointInformationRequest",
                        "RetrieveSpecificTSPPointInformationResponse",
                        "RetrieveSpecificTimingPointInformationRequest",
                        "RetrieveSpecificTimingPointInformationResponse",
                        "RetrieveSpecificGNSSPointInformationRequest",
                        "RetrieveSpecificGNSSPointInformationResponse",
                        "RetrieveSpecificBeaconPointInformationRequest",
                        "RetrieveSpecificBeaconPointInformationResponse",
                        "ListAllDisplayContentsResponse",
                        "ListAllLineInformationResponse",
                        "ListAllDestinationInformationResponse",
                        "ListAllViaPointResponse",
                        "ListAllAdditionalDisplayInformationResponse",
                        "ListAllRoutesResponse",
                        "RetrieveAllRoutesPerLineRequest",
                        "RetrieveAllRoutesPerLineResponse",
                        "SetBlockNumberRequest",
                        "SetTripRefRequest",
                        "SetDisplayContentRequest",
                        "SetCurrentTripIndexRequest",
                        "SetCurrentStopIndexRequest",
                        "SetAdditionalAnnouncementRequest",
                        "SetAdditionalTextMessageRequest",
                    ],
                },
                {
                    service_name: "Beacon Location V 1.0",
                    methods: ["Find Nearest Beacon", "Get Beacon Details"],
                },
                {
                    service_name: "Distance Location V 1.0",
                    methods: ["Calculate Distance", "Get Distance Logs"],
                },
            ],
        },
        {
            id: 2,
            group_name: "Common V 2.0",
            options: [
                {
                    service_name: "Video Display V 2.0",
                    methods: ["Display Video", "Configure Display Settings"],
                },
                {
                    service_name: "Video Recording V 2.0",
                    methods: ["Start Video Recording", "Stop Video Recording"],
                },
            ],
        },
        {
            id: 3,
            group_name: "Common V 2.1",
            options: [
                {
                    service_name: "Door State V 2.1",
                    methods: ["Query Door State", "Change Door State"],
                },
            ],
        },
        {
            id: 4,
            group_name: "Common V 2.2",
            options: [
                {
                    service_name: "Customer Information V 2.2",
                    methods: ["Retrieve Customer Info", "Update Customer Info"],
                },
                {
                    service_name: "Customer Feedback V 2.2",
                    methods: ["Collect Feedback", "Analyze Feedback"],
                },
            ],
        },
        {
            id: 5,
            group_name: "Common V 2.3",
            options: [
                {
                    service_name: "Customer Information V 2.3",
                    methods: [
                        "Access Customer Profile",
                        "Modify Customer Profile",
                    ],
                },
            ],
        },
    ];

    let httppath = "192.168.195.168:3085/services/ibis-ip/2.0/CustomerInformationService/GetAllData";

    let MDNSResponse = {
        addresses: ["192.168.0.108", "fe80::a3a:f2ff:fe56:ae04"],
        name: "Outlet 56AE04",
        fqdn: "Outlet 56AE04._hap._tcp.local",
        host: "WS2.local",
        referer: {
            address: "192.168.0.108",
            family: "IPv4",
            port: 5353,
            size: 255,
        },
        port: 80,
        type: "hap",
        protocol: "tcp",
        subtypes: [],
        txt: {
            sh: "74u2jw==",
            sf: "0",
            "s#": "276",
            pv: "1.1",
            md: "WS2",
            id: "73:42:15:77:36:F2",
        },
    };

    let selectedGroup = services[0];

    function selectService(serviceName) {
        const service = services.find((s) => s.group_name === serviceName);
        if (service) {
            selectedGroup = service; // Aktualisiere das komplette Objekt
        }
    }

    let selectedOption = { name: "", methods: [] };

    // damit die Gruppe rechts nur angezeigt wird, wenn ausgeklappt wird.
    let isCollapsed = true;
    function toggleCollapse() {
        isCollapsed = !isCollapsed;
    }


    import { onMount } from 'svelte';


    let xmlData = '';

async function fetchXML(url) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // CORS Proxy URL
    const targetUrl = proxyUrl + url; // Combine the proxy URL with the target URL
    try {
        const response = await fetch(targetUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        xmlData = await response.text();
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
}

const url = 'https://www.w3schools.com/xml/note.xml';

onMount(() => {
    fetchXML(url);
});





    
</script>

<h1>XML Data</h1>
    <pre>{xmlData}</pre> <!-- Display the XML data in a preformatted text element -->


<div class="row modern-row">
    <h1>Geräte</h1>
    <p>folgende Geräte befinden sich in diesem Fahrzeug</p>
    <div class="col-7 modern-col">
        <div class="content modern-content">
            <!-- Gerät 1 -->
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Gerät: {MDNSResponse.name}</h5>
                    <p class="card-text">
                        Mögliche Beschreibung zum Gerät, falls es so etwas
                        braucht?
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <p class="d-inline-flex gap-1">
                        <button
                            class="btn btn-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target=".multi-collapse"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample1 multiCollapseExample2"
                            >Services</button
                        >
                    </p>

                    <div class="row">
                        <div class="col">
                            <div
                                class="collapse multi-collapse"
                                id="multiCollapseExample1"
                            >
                                <div class="d-flex">
                                    <div class="flex-shrink-1">
                                        {#each services as services}
                                            {#each services.options as option, index}
                                                <button
                                                    class="btn btn-primary my-1"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseExample{index}"
                                                    aria-expanded="false"
                                                    aria-controls="collapseExample"
                                                    on:click={() =>
                                                        selectService(
                                                            services.group_name,
                                                        )}
                                                    on:click={toggleCollapse}
                                                >
                                                    {option.service_name}
                                                </button>
                                            {/each}
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

        </div>
    </div>

    <!-- Collapse-Inhalte auf der rechten Seite -->
    <div class="col-5 modern-col heightlimit">
        <div class="flex-grow-1 ms-3">
            {#each selectedGroup.options as option, index}
                <div class="collapse" id="collapseExample{index}">
                    <div class="card card-body">
                        <h2>{option.service_name}</h2>

                        {#if !isCollapsed}
                            <p>gehört zu: {selectedGroup.group_name}</p>

                            <p>Dienst ist erreichbar über:</p>
                            <ul>
                                <li>Protokoll: _ibisip_udp</li>
                                <li>Port: 8008</li>
                                <li>Zielhost: 192.0.9.86</li>
                            </ul>
                        {/if}

                        {#each option.methods as method}
                            <div class="card mb-2">
                                <div class="card-body">
                                    {method}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

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
    }

    .modern-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        background-color: #f5f5f5;
    }
</style>
