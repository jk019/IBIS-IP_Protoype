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
                ipServices[firstAddress].services.push(item.name);
            }
        });
        return ipServices;
    }

    //////////////////////////////////////////
    // Funktionen für die einzelnen Services //
    //////////////////////////////////////////

    // Testfunktion zum holen der XML-Werte
    let xmlReturn = [];

    let deviceInfo = {}; // Initialisiert als leeres Objekt
    async function DeviceManagementService() {
        try {
            const response = await fetch(
                "/localFiles/DeviceManagementService.xml",
            );
            const data = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Aktualisieren der globalen Variable mit neuen Daten
            deviceInfo = {
                timeStamp: xmlDoc.querySelector("TimeStamp Value").textContent,
                deviceName:
                    xmlDoc.querySelector("DeviceName Value").textContent,
                manufacturer:
                    xmlDoc.querySelector("Manufacturer Value").textContent,
                serialNumber:
                    xmlDoc.querySelector("SerialNumber Value").textContent,
                deviceClass: xmlDoc.querySelector("DeviceClass").textContent,
            };
        } catch (error) {
            console.error("Error loading the XML file:", error);
        }
    }

    let customerInfo = {}; // Initialisiert als leeres Objekt
    async function CustomerInformationService() {
        try {
            const response = await fetch(
                "/localFiles/CustomerInformationService.GetAllData.xml",
            );
            const data = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Function to recursively traverse and extract data from each node
            function extractData(node) {
                const result = {};
                for (const child of node.children) {
                    if (child.children.length > 0) {
                        result[child.tagName] = extractData(child); // Recursive call for nested elements
                    } else {
                        result[child.tagName] = child.textContent;
                    }
                }
                return result;
            }

            // Parsing the new XML structure
            const allData = xmlDoc.querySelector("AllData");

            const customerInfo = {
                timeStamp: allData.querySelector("TimeStamp Value").textContent,
                vehicleRef:
                    allData.querySelector("VehicleRef Value").textContent,
                defaultLanguage: allData.querySelector("DefaultLanguage Value")
                    .textContent,
                tripInformation: {
                    tripRef: allData.querySelector("TripRef Value").textContent,
                    stopSequence: Array.from(
                        allData.querySelectorAll("StopSequence StopPoint"),
                    ).map((stop) => extractData(stop)),
                },
            };

            console.log(customerInfo); // Logging the extracted information to the console
        } catch (error) {
            console.error("Error loading the XML file:", error);
        }
    }

    function SystemMonitoringService() {
        alert("SystemMonitoringService wurde aufgerufen!");
    }

    let trainComposition = {}; // Initialisiert als leeres Objekt
    async function TrainSetInformationService() {
        try {
            const response = await fetch(
                "/localFiles/TrainSetInformationService.xml",
            );
            const data = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Parsing train set composition data from the updated XML structure
            const coachInfo = xmlDoc.querySelector("SingleCoach");

            trainComposition = {
                coachType:
                    coachInfo.querySelector("CoachType Value").textContent,
                coachNumber:
                    coachInfo.querySelector("CoachNumber Value").textContent,
                frontCabin:
                    coachInfo.querySelector("FrontCabin Value").textContent,
                rearCabin:
                    coachInfo.querySelector("RearCabin Value").textContent,
                coachPositionInTrainSet: coachInfo.querySelector(
                    "CoachPositionInTrainSet Value",
                ).textContent,
                coupledSide: coachInfo.querySelector("CoupledSide").textContent,
                coachState: coachInfo.querySelector("CoachState").textContent,
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
    function handleServiceClick(serviceName) {
        for (const pattern in functionsMap) {
            let match = serviceName.match(new RegExp(pattern));
            if (match) {
                current_service = match[0]; // Setzt den Teil des serviceName, der mit dem Regex übereinstimmt
                functionsMap[pattern]();
                break;
            }
        }
        console.log("current_service: ", current_service);
    }
</script>

<h1>Test Modular</h1>

<h1>Geräte</h1>
<p>folgende Geräte befinden sich in diesem Fahrzeug</p>

{#each IPLevelServices as device}
    <div class="col-7 modern-col">
        <Card IP={device.IP} {device} {current_service} {handleServiceClick} />
    </div>{/each}

<div class="collapse" id="collapseDeviceManagementService">
    <div class="card card-body">
        <div>
            <h1>Geräteinformationen DeviceManagementService</h1>
            <p>
                Die folgenden Informationen wurden aus der XML-Datei extrahiert:
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
                Die folgenden Informationen wurden aus der XML-Datei extrahiert:
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
                Die folgenden Informationen wurden aus der XML-Datei extrahiert:
            </p>
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
</style>
