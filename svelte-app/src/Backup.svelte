<script>
    import axios from "axios";
    import { each } from "svelte/internal";

    let realservices = [];
    function getServices() {
        axios.get("http://localhost:3001/api/services").then((response) => {
            realservices = response.data;
        });
    }
    getServices();

    //gibt aus geholten Daten die IP-Adressen aus und routet die Services auf die IP-Adressen
    function getIPsAndServices(data) {
        let ipServices = {};

        data.forEach((item) => {
            if (item.addresses && item.addresses.length > 0) {
                const firstAddress = item.addresses[0];
                if (!ipServices[firstAddress]) {
                    ipServices[firstAddress] = {
                        IP: firstAddress,
                        services: [],
                    };
                }
                ipServices[firstAddress].services.push(item.name);
            }
        });
        return ipServices;
    }

    let IPLevelServices = [];

    let checkInterval = setInterval(() => {
        if (realservices.length > 0) {
            clearInterval(checkInterval);
            console.log("realservices is not empty!");
            IPLevelServices = Object.entries(
                getIPsAndServices(realservices),
            ).map(([ip, details]) => {
                return { IP: ip, services: details.services };
            });
            console.log(IPLevelServices);
        }
    }, 1000); // Check every 1000 milliseconds (1 second)

    //ab Hier stand von Zuhause

    //array für offline-Entwicklung
    let realservices2 = [
        {
            addresses: ["192.168.10.32"],
            name: "DeviceManagementService_bitctrl_TFT--3200--32_1",
            fqdn: "DeviceManagementService_bitctrl_TFT--3200--32_1._ibisip_http._tcp.local",
            host: "TFT--3200--32.local",
            referer: {
                address: "192.168.10.32",
                family: "IPv4",
                port: 5353,
                size: 356,
            },
            port: 4999,
            type: "ibisip_http",
            protocol: "tcp",
            subtypes: [],
            rawTxt: {
                type: "Buffer",
                data: [7, 118, 101, 114, 61, 49, 46, 48],
            },
            txt: {
                ver: "1.0",
            },
        },
        {
            addresses: ["192.168.10.1", "192.168.10.2"],
            rawTxt: {
                type: "Buffer",
                data: [
                    16, 99, 111, 97, 99, 104, 110, 117, 109, 98, 101, 114, 61,
                    51, 50, 48, 48, 26, 112, 97, 116, 104, 61, 47, 115, 101,
                    114, 118, 105, 99, 101, 115, 47, 105, 98, 105, 115, 45, 105,
                    112, 47, 50, 46, 49, 7, 118, 101, 114, 61, 50, 46, 49,
                ],
            },
            txt: {
                coachnumber: "3200",
                path: "/services/ibis-ip/2.1",
                ver: "2.1",
            },
            name: "DeviceManagementService_Coach3200_TPZ_OnBoardUnit_1_i1_n1",
            fqdn: "DeviceManagementService_Coach3200_TPZ_OnBoardUnit_1_i1_n1._ibisip_http._tcp.local",
            host: "IBISPlus3200.local",
            referer: {
                address: "192.168.10.1",
                family: "IPv4",
                port: 5353,
                size: 807,
            },
            port: 3083,
            type: "ibisip_http",
            protocol: "tcp",
            subtypes: [],
        },
        {
            addresses: ["192.168.10.1", "192.168.10.2"],
            rawTxt: {
                type: "Buffer",
                data: [
                    16, 99, 111, 97, 99, 104, 110, 117, 109, 98, 101, 114, 61,
                    51, 50, 48, 48, 26, 112, 97, 116, 104, 61, 47, 115, 101,
                    114, 118, 105, 99, 101, 115, 47, 105, 98, 105, 115, 45, 105,
                    112, 47, 50, 46, 48, 7, 118, 101, 114, 61, 50, 46, 48,
                ],
            },
            txt: {
                coachnumber: "3200",
                path: "/services/ibis-ip/2.0",
                ver: "2.0",
            },
            name: "CustomerInformationService_Coach3200_TPZ_OnBoardUnit_1_i1_n1",
            fqdn: "CustomerInformationService_Coach3200_TPZ_OnBoardUnit_1_i1_n1._ibisip_http._tcp.local",
            host: "IBISPlus3200.local",
            referer: {
                address: "192.168.10.1",
                family: "IPv4",
                port: 5353,
                size: 807,
            },
            port: 3085,
            type: "ibisip_http",
            protocol: "tcp",
            subtypes: [],
        },
        {
            addresses: ["192.168.10.1", "192.168.10.2"],
            rawTxt: {
                type: "Buffer",
                data: [
                    16, 99, 111, 97, 99, 104, 110, 117, 109, 98, 101, 114, 61,
                    51, 50, 48, 48, 22, 112, 97, 116, 104, 61, 47, 115, 101,
                    114, 118, 105, 99, 101, 115, 47, 105, 98, 105, 115, 45, 105,
                    112, 7, 118, 101, 114, 61, 50, 46, 50,
                ],
            },
            txt: {
                coachnumber: "3200",
                path: "/services/ibis-ip",
                ver: "2.2",
            },
            name: "SystemMonitoringService_Coach3200_TPZ_OnBoardUnit_1_i1_n1",
            fqdn: "SystemMonitoringService_Coach3200_TPZ_OnBoardUnit_1_i1_n1._ibisip_http._tcp.local",
            host: "IBISPlus3200.local",
            referer: {
                address: "192.168.10.1",
                family: "IPv4",
                port: 5353,
                size: 807,
            },
            port: 3095,
            type: "ibisip_http",
            protocol: "tcp",
            subtypes: [],
        },
        {
            addresses: ["192.168.10.1", "192.168.10.2"],
            rawTxt: {
                type: "Buffer",
                data: [
                    16, 99, 111, 97, 99, 104, 110, 117, 109, 98, 101, 114, 61,
                    51, 50, 48, 48, 26, 112, 97, 116, 104, 61, 47, 115, 101,
                    114, 118, 105, 99, 101, 115, 47, 105, 98, 105, 115, 45, 105,
                    112, 47, 50, 46, 50, 7, 118, 101, 114, 61, 50, 46, 50,
                ],
            },
            txt: {
                coachnumber: "3200",
                path: "/services/ibis-ip/2.2",
                ver: "2.2",
            },
            name: "TrainSetInformationService_Coach3200_TPZ_OnBoardUnit_1_i1_n1",
            fqdn: "TrainSetInformationService_Coach3200_TPZ_OnBoardUnit_1_i1_n1._ibisip_http._tcp.local",
            host: "IBISPlus3200.local",
            referer: {
                address: "192.168.10.1",
                family: "IPv4",
                port: 5353,
                size: 807,
            },
            port: 4031,
            type: "ibisip_http",
            protocol: "tcp",
            subtypes: [],
        },
    ];

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
</script>

<div class="row modern-row">
    <h1>Geräte</h1>
    <p>folgende Geräte befinden sich in diesem Fahrzeug</p>
    {#each IPLevelServices as device}
        <div class="col-7 modern-col">
            <div class="content modern-content">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Gerät {device.IP}</h5>
                        <p class="card-text">
                            Mögliche Beschreibung zum anderen Gerät, falls es so
                            etwas braucht?
                        </p>
                    </div>

                    <!--neuer Versuch toogle-->
                    <p class="d-inline-flex gap-1">
                        <button
                            class="btn btn-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target=".multi-collapse2"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample3 multiCollapseExample4"
                            >Services</button
                        >
                    </p>

                    <div
                        class="collapse multi-collapse2"
                        id="multiCollapseExample4"
                    >
                        <div class="d-flex">
                            <div class="flex-shrink-1">
                                {#each device.services as service}
                                        <button
                                            class="btn btn-primary my-1"
                                            type="button"
                                        >
                                            {service}
                                        </button>
                                {/each}
                            </div>
                        </div>
                    </div>

                    <!--  <ul class="list-group list-group-flush">
                        <p class="d-inline-flex gap-1">
                            <button
                                class="btn btn-primary"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target=".multi-collapse2"
                                aria-expanded="false"
                                aria-controls="multiCollapseExample3 multiCollapseExample4"
                                >Services</button
                            >
                        </p>

                        <div class="row">
                            <div class="col">
                                <div
                                    class="collapse multi-collapse2"
                                    id="multiCollapseExample4"
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
                    </ul> -->
                </div>
            </div>
        </div>{/each}

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
