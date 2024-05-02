<script>
    import axios from "axios";
    import { each } from "svelte/internal";
    import Card from "./Components/card.svelte";

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

    //mDNS-Request sucht nach Services und speichert sie in realservices
    let realservices = [];
    function getServices() {
        axios.get("http://localhost:3001/api/services").then((response) => {
            realservices = response.data;
        });
    }
    getServices();

    let currentHttpPath_Service = "";
    let currentHttpPath_IP = "";
    let currentHttpPath_Port = "";
    let currentHttpPath_Path = "";

    //Speichert die IP-Adressen und die Services in IPLevelServices
    let IPLevelServices = [];
    let checkInterval = setInterval(() => {
        if (realservices2.length > 0) {
            clearInterval(checkInterval);
            console.log("realservices is not empty!");
            IPLevelServices = Object.entries(
                getIPsAndServices(realservices2),
            ).map(([ip, details]) => {
                return { IP: ip, services: details.services };
            });
            console.log(IPLevelServices);
        }
    }, 1000); // Check every 1000 milliseconds (1 second)

    //gibt aus geholten mDNS-Daten die IP-Adressen aus und routet die Services auf die IP-Adressen
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
            const path = item.txt && item.txt.path ? item.txt.path : ''; // Überprüfung auf das Vorhandensein von "txt" und "path"
            const port = item.port || ''; // Überprüfung auf das Vorhandensein von "port"
            ipServices[firstAddress].services.push({ name: item.name, port: port, path: path });
        }
    });
    return ipServices;
}


    //////////////////////////////////////////
    // Funktionen für die einzelnen Services //
    //////////////////////////////////////////

    let deviceInfo = {}; // Initialisiert als leeres Objekt
    async function DeviceManagementService() {
        try {
            
            // Version mit richtigen HTTP-Requests
            /* const method = "GetDeviceInformation";
            //192.168.10.1:3083/services/ibis-ip/2.1/DeviceManagementService/GetDeviceInformation
            const response = await axios.get(
                "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,
                {
                    responseType: "document",
                },
            );
            const xmlDoc = response.data; */


            //lokale Version
            const response = await fetch(
                "/localFiles/DeviceManagementService.xml",
            );
            const data = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Aktualisieren der globalen Variable mit neuen Daten
            deviceInfo = {
                timeStamp:
                    xmlDoc.querySelector("TimeStamp Value")?.textContent ||
                    "Unknown",
                deviceName:
                    xmlDoc.querySelector("DeviceName Value")?.textContent ||
                    "Unknown",
                manufacturer:
                    xmlDoc.querySelector("Manufacturer Value")?.textContent ||
                    "Unknown",
                serialNumber:
                    xmlDoc.querySelector("SerialNumber Value")?.textContent ||
                    "Unknown",
                deviceClass:
                    xmlDoc.querySelector("DeviceClass")?.textContent ||
                    "Unknown",
            };

            console.log("Extrahierte Geräteinformationen: ", deviceInfo); // Loggen der extrahierten Informationen
        } catch (error) {
            console.error("Error loading the XML file:", error);
        }
    }

    let customerInfo = {}; // Initialisiert als leeres Objekt
    async function CustomerInformationService() {
        try {
            const method = "GetAllData";
            console.log("HTTP: ", "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,);
            const response = await axios.get(
                "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,
                {
                    responseType: "document",
                },
            );
            //http://192.168.10.1:3085/services/ibis-ip/2.0/CustomerInformationService/GetAllData

            const xmlDoc = response.data;

            /* 
            const data = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml"); */

            // Diese Funktion extrahiert Daten aus jedem Knoten, auch aus verschachtelten "Value" Knoten
            function extractData(node) {
                const result = {};
                for (const child of node.children) {
                    if (child.children.length) {
                        // Bei verschachtelten Strukturen wird diese Funktion rekursiv aufgerufen
                        result[child.tagName] = extractData(child);
                    } else if (child.tagName === "Value") {
                        // Der Textinhalt des "Value"-Tags wird direkt verwendet
                        return child.textContent;
                    } else {
                        // Andernfalls wird der gesamte Knoten inklusive seiner Kindknoten übernommen
                        result[child.tagName] = extractData(child);
                    }
                }
                return result;
            }

            // Parsen der XML-Struktur
            const allData = xmlDoc.querySelector("AllData");

            // Extrahieren der Informationen entsprechend der Struktur im Bild
            customerInfo = {
                timeStamp:
                    allData.querySelector("TimeStamp > Value")?.textContent ||
                    "Unknown",
                vehicleRef:
                    allData.querySelector("VehicleRef > Value")?.textContent ||
                    "Unknown",
                defaultLanguage:
                    allData.querySelector("DefaultLanguage > Value")
                        ?.textContent || "Unknown",
                tripInformation: {
                    tripRef:
                        allData.querySelector("TripRef > Value")?.textContent ||
                        "Unknown",
                    stopSequence: Array.from(
                        allData.querySelectorAll("StopSequence > StopPoint"),
                    ).map(extractData),
                },
            };

            console.log("Extrahierte Kundeninformationen: ", customerInfo); // Loggen der extrahierten Informationen
        } catch (error) {
            console.error("Fehler beim Laden der XML-Datei:", error);
        }
    }

    function SystemMonitoringService() {
        alert(
            "SystemMonitoringService wurde aufgerufen! Dieser Service ist noch nicht implementiert.",
        );
    }

    let trainComposition = {}; // Initialisiert als leeres Objekt
    async function TrainSetInformationService() {
        try {
            //192.168.10.1:4031/services/ibis-ip/2.2/TrainSetInformationService/GetTrainSetComposition
            const response = await axios.get(
                "http://192.168.10.1:4031/services/ibis-ip/2.2/TrainSetInformationService/GetTrainSetComposition",
                {
                    responseType: "document",
                },
            );

            const xmlDoc = response.data;

            console.log(xmlDoc);

            // Parsing train set composition data from the updated XML structure
            const coachInfo = xmlDoc.querySelector("SingleCoach");

            trainComposition = {
                coachType:
                    coachInfo.querySelector("CoachType Value")?.textContent ||
                    "Unknown",
                coachNumber:
                    coachInfo.querySelector("CoachNumber Value")?.textContent ||
                    "Unknown",
                frontCabin:
                    coachInfo.querySelector("FrontCabin Value")?.textContent ||
                    "Unknown",
                rearCabin:
                    coachInfo.querySelector("RearCabin Value")?.textContent ||
                    "Unknown",
                coachPositionInTrainSet:
                    coachInfo.querySelector("CoachPositionInTrainSet Value")
                        ?.textContent || "Unknown",
                coupledSide:
                    coachInfo.querySelector("CoupledSide")?.textContent ||
                    "Unknown",
                coachState:
                    coachInfo.querySelector("CoachState")?.textContent ||
                    "Unknown",
            };

            console.log(trainComposition); // Logging the extracted information to the console
        } catch (error) {
            console.error("Error loading the XML file:", error);
        }
    }

    // Mapping von Regex-Patterns zu Funktionen
    const functionsMap = {
        "^DeviceManagementService": DeviceManagementService,
        "^CustomerInformationService": CustomerInformationService,
        "^SystemMonitoringService": SystemMonitoringService,
        "^TrainSetInformationService": TrainSetInformationService,
    };

    let current_service = "";
    // Funktion, um die entsprechende Aktion zu finden und auszuführen
    function handleServiceClick(serviceName, IP, Port, path) {
        for (const pattern in functionsMap) {
            let match = serviceName.match(new RegExp(pattern));
            if (match) {
                currentHttpPath_Path = path;
                currentHttpPath_Port = Port;
                currentHttpPath_Service = match;
                currentHttpPath_IP = IP;
                current_service = match[0]; // Setzt den Teil des serviceName, der mit dem Regex übereinstimmt
                functionsMap[pattern]();
                break;
            }
        }
        console.log("current_service: ", current_service);
    }
</script>

<p>Pfad Service: {currentHttpPath_Service}</p>
<p>Pfad IP: {currentHttpPath_IP}</p>
<p>Pfad Port: {currentHttpPath_Port}</p>
<p>Pfad Path: {currentHttpPath_Path}</p>

<h1>Geräte</h1>
<p>folgende Geräte befinden sich in diesem Fahrzeug</p>

<div class="row">
    <div class="col-6">
        {#each IPLevelServices as device}
            <Card
                IP={device.IP}
                {device}
                {current_service}
                {handleServiceClick}
            />
        {/each}
    </div>

    <div class="col-6">
        <div class="collapse" id="collapseDeviceManagementService">
            <div class="card card-body">
                <div>
                    <h1>Geräteinformationen DeviceManagementService</h1>
                    <p>
                        Der Device Management Service beschreibt grundlege
                        Informationen zu einem Gerät.
                    </p>
                    <div>Gerätename: {deviceInfo.deviceName}</div>
                    <div>Hersteller: {deviceInfo.manufacturer}</div>
                    <div>Geräteklasse: {deviceInfo.deviceClass}</div>
                    <div>Geräteseriennummer: {deviceInfo.serialNumber}</div>
                    <div>Zeitstempel: {deviceInfo.timeStamp}</div>
                </div>
            </div>
        </div>

        <div class="collapse" id="collapseTrainSetInformationService">
            <div class="card card-body">
                <div>
                    <h1>Geräteinformationen TrainSetInformationService</h1>
                    <p>
                        Der TrainSetInformationService enthält Informationen
                        über die Wagenkomposition.
                    </p>
                    <div>Wagennummer: {trainComposition.coachNumber}</div>
                    <div>
                        Wagenposition im Zug: {trainComposition.coachPositionInTrainSet}
                    </div>
                    <div>Wagenzustand: {trainComposition.coachState}</div>
                    <div>Wagenkabine: {trainComposition.frontCabin}</div>
                    <div>Wagenposition: {trainComposition.coupledSide}</div>
                    <div>Wagenart: {trainComposition.coachType}</div>
                </div>
            </div>
        </div>

        <div class="collapse" id="collapseCustomerInformationService">
            <div class="card card-body">
                <div>
                    <h1>Geräteinformationen CustomerInformationService</h1>
                    <p>
                        Der CustomerInformationService enthält Informationen
                        über den Fahrplan und die Haltestellen.
                    </p>
                    <div>Fahrzeugnummer: {customerInfo.vehicleRef}</div>
                    <br /><br />

                    <p class="d-inline-flex gap-1">
                        <a
                            class="btn rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
                            data-bs-toggle="collapse"
                            href="#collapseExample"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            Stops anzeigen
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                        {#if customerInfo && customerInfo.tripInformation && customerInfo.tripInformation.stopSequence}
                            <ul>
                                {#each customerInfo.tripInformation.stopSequence as stop}
                                    <b>Stopname: </b>{stop.StopName}
                                    <br />
                                    <b>Stop-Kürzel: </b>{stop.StopRef}
                                    <br />
                                    <b
                                        >Distanz zu nächstem Stop:
                                    </b>{stop.DistanceToNextStop}
                                    <br /><br />
                                {/each}
                            </ul>
                        {/if}
                    </div>
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
        border: 1px solid gray;
        text-decoration: none;
    }

    .btn:hover {
        background-color: #e2e6ea; /* Dunkleren Hintergrund beim Hover setzen */
    }
</style>
