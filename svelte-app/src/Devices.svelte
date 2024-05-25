<script>
    import Card from "./Components/card.svelte";
    import CollapseDeviceManagementService from "./Components/CollapseDeviceManagementService.svelte";
    import CollapseTrainSetInformationService from "./Components/CollapseTrainSetInformationService.svelte";
    import CollapseCustomerInformationService from "./Components/CollapseCustomerInformationService.svelte";

    //array for offline-Development
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

    //Saves the IP addresses and the services in IPLevelServices
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

    //outputs the IP addresses from fetched mDNS data and routes the services to the IP addresses
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
                const path = item.txt && item.txt.path ? item.txt.path : ""; // Check for the presence of "txt" and "path"
                const port = item.port || ""; // Check for the presence of "port"
                ipServices[firstAddress].services.push({
                    name: item.name,
                    port: port,
                    path: path,
                });
            }
        });
        return ipServices;
    }

    //////////////////////////////////////////
    // Functions for individual services //
    //////////////////////////////////////////

    let deviceInfo = {}; // Initialised as an empty object
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
                "/testFiles/DeviceManagementService.Test2.xml",
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

    let customerInfo = {}; // Initialised as an empty object
    let StopIndex = {}; // Initialised as an empty object
    async function CustomerInformationService() {
        try {
            // Version mit richtigen HTTP-Requests
            /*  const method = "GetAllData";
            console.log("HTTP: ", "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,);
            const response = await axios.get(
                "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,
                {
                    responseType: "document",
                },
            );
            //http://192.168.10.1:3085/services/ibis-ip/2.0/CustomerInformationService/GetAllData
            const xmlDoc = response.data; */

            // Laden des ersten XML-Dokuments
            const response1 = await fetch(
                "/testFiles/CustomerInformationService.GetAllData.Test1.xml",
            );
            const data1 = await response1.text();
            const parser1 = new DOMParser();
            const xmlDoc1 = parser1.parseFromString(data1, "text/xml");

            // Laden des zweiten XML-Dokuments
            const response2 = await fetch(
                "/localFiles/CustomerInformationService.GetCurrentStopIndex.xml",
            );
            const data2 = await response2.text();
            const parser2 = new DOMParser();
            const xmlDoc2 = parser2.parseFromString(data2, "text/xml");

            // Funktion zum Extrahieren von Daten aus einem XML-Knoten
            function extractData(node) {
                const result = {};
                for (const child of node.children) {
                    if (child.children.length) {
                        result[child.tagName] = extractData(child);
                    } else if (child.tagName === "Value") {
                        result[child.parentNode.tagName] = child.textContent;
                    } else {
                        result[child.tagName] = extractData(child);
                    }
                }
                return result;
            }

            // Extrahieren der Informationen aus dem ersten XML-Dokument und Speichern in customerInfo
            const allData1 = xmlDoc1.querySelector("AllData");
            customerInfo = {
                timeStamp:
                    allData1.querySelector("TimeStamp > Value")?.textContent ||
                    "Unknown",
                vehicleRef:
                    allData1.querySelector("VehicleRef > Value")?.textContent ||
                    "Unknown",
                defaultLanguage:
                    allData1.querySelector("DefaultLanguage > Value")
                        ?.textContent || "Unknown",
                tripInformation: {
                    tripRef:
                        allData1.querySelector("TripRef > Value")
                            ?.textContent || "Unknown",
                    stopSequence: Array.from(
                        allData1.querySelectorAll("StopSequence > StopPoint"),
                    ).map(extractData),
                },
            };

            // Extrahieren der Informationen aus dem zweiten XML-Dokument und Speichern in StopIndex
            const currentStopIndexData = xmlDoc2.querySelector(
                "CurrentStopIndexData",
            );
            StopIndex = {
                timeStamp:
                    currentStopIndexData.querySelector("TimeStamp > Value")
                        ?.textContent || "Unknown",
                currentStopIndex:
                    currentStopIndexData.querySelector(
                        "CurrentStopIndex > Value",
                    )?.textContent || "Unknown",
            };

            console.log("Extrahierte Kundeninformationen: ", customerInfo); // Loggen der extrahierten Kundeninformationen
            console.log("Stop Index: ", StopIndex); // Loggen des Stop-Index
            console.log("Stopindex:", StopIndex.currentStopIndex); // Loggen des aktuellen Stopindex
        } catch (error) {
            console.error("Fehler beim Laden der XML-Datei:", error);
        }
    }

    let trainComposition = {}; // Initialised as an empty object
    async function TrainSetInformationService() {
        try {
            // Version mit richtigen HTTP-Requests
            /* const method = "GetTrainSetComposition";
            //192.168.10.1:4031/services/ibis-ip/2.2/TrainSetInformationService/GetTrainSetComposition
            const response = await axios.get(
                "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,
                {
                    responseType: "document",
                },
            );
            const xmlDoc = response.data; */

            //lokale Version
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

    // Mapping of regex patterns to functions
    const functionsMap = {
        "^DeviceManagementService": DeviceManagementService,
        "^CustomerInformationService": CustomerInformationService,
        "^TrainSetInformationService": TrainSetInformationService,
    };

    // Default function to call when no regex matches
    function defaultService() {
        alert(
            "A Service has been invoked! Although this service has been identified on the device, please note that it is currently a prototype and has not been fully implemented yet.",
        );
    }

    let current_service = "";
    let currentHttpPath_Service = "";
    let currentHttpPath_IP = "";
    let currentHttpPath_Port = "";
    let currentHttpPath_Path = "";

    // Function to find and execute the corresponding action
    function handleServiceClick(serviceName, IP, Port, path) {
    let matched = false;
    
    for (const pattern in functionsMap) {
        let match = serviceName.match(new RegExp(pattern));
        if (match) {
            currentHttpPath_Path = path;
            currentHttpPath_Port = Port;
            currentHttpPath_Service = match[0]; // Using the full matched string
            currentHttpPath_IP = IP;
            current_service = match[0]; // Sets the part of the serviceName that matches the regex
            functionsMap[pattern]();
            matched = true;
            break;
        }
    }
    
    // If no match was found, call the default service
    if (!matched) {
        defaultService();
    }
    
    console.log("current_service: ", current_service);
}
</script>

<h1>Devices</h1>
<div class="alert alert-light" role="alert">
    The following devices are located in this vehicle
</div>
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
                <CollapseDeviceManagementService {deviceInfo} />
            </div>
        </div>

        <div class="collapse" id="collapseTrainSetInformationService">
            <div class="card card-body">
                <CollapseTrainSetInformationService {trainComposition} />
            </div>
        </div>

        <div class="collapse" id="collapseCustomerInformationService">
            <div class="card card-body">
                <CollapseCustomerInformationService {customerInfo} {StopIndex}
                ></CollapseCustomerInformationService>
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
</style>
