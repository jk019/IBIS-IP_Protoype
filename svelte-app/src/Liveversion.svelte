<script>
    import axios from "axios";
    import { each } from "svelte/internal";
    import Card from "./Components/card.svelte";


    //mDNS-Request searches for services and stores them in realservices
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

    //Saves the IP addresses and the services in IPLevelServices
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
                const path = item.txt && item.txt.path ? item.txt.path : ""; // Überprüfung auf das Vorhandensein von "txt" und "path"
                const port = item.port || ""; // Überprüfung auf das Vorhandensein von "port"
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
            const method = "GetDeviceInformation";
            //192.168.10.1:3083/services/ibis-ip/2.1/DeviceManagementService/GetDeviceInformation
            const response = await axios.get(
                "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,
                {
                    responseType: "document",
                },
            );
            const xmlDoc = response.data;

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
             const method = "GetAllData";
            console.log("HTTP: ", "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,);
            const response = await axios.get(
                "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,
                {
                    responseType: "document",
                },
            );
            //http://192.168.10.1:3085/services/ibis-ip/2.0/CustomerInformationService/GetAllData
            const xmlDoc1 = response.data;


            // Version mit richtigen HTTP-Requests
            const method2 = "GetCurrentStopIndex";
            console.log("HTTP: ", "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,);
            const response2 = await axios.get(
                "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,
                {
                    responseType: "document",
                },
            );
            //192.168.10.1:3085/services/ibis-ip/2.0/CustomerInformationService/GetCurrentStopIndex
            const xmlDoc2 = response.data;
          

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

    //Variable that indicates whether a stop was found on CustomerInformationService
    let noStopFound = true;
    function updateNoStopFound() {
        noStopFound = false;
        console.log("Stop gefunden: ", noStopFound);
    }

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

    function SystemMonitoringService() {
        alert(
            "SystemMonitoringService wurde aufgerufen! Dieser Service ist noch nicht implementiert.",
        );
    }

    let trainComposition = {}; // Initialised as an empty object
    async function TrainSetInformationService() {
        try {
            // Version mit richtigen HTTP-Requests
            const method = "GetTrainSetComposition";
            //192.168.10.1:4031/services/ibis-ip/2.2/TrainSetInformationService/GetTrainSetComposition
            const response = await axios.get(
                "http://"+currentHttpPath_IP +":" + currentHttpPath_Port +currentHttpPath_Path +"/"+currentHttpPath_Service +"/" + method,
                {
                    responseType: "document",
                },
            );
            const xmlDoc = response.data;

            //lokale Version
            /* const response = await fetch(
                "/localFiles/TrainSetInformationService.xml",
            );
            const data = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml"); */

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
        "^SystemMonitoringService": SystemMonitoringService,
        "^TrainSetInformationService": TrainSetInformationService,
    };

    let current_service = "";
    // Function to find and execute the corresponding action
    function handleServiceClick(serviceName, IP, Port, path) {
        for (const pattern in functionsMap) {
            let match = serviceName.match(new RegExp(pattern));
            if (match) {
                currentHttpPath_Path = path;
                currentHttpPath_Port = Port;
                currentHttpPath_Service = match;
                currentHttpPath_IP = IP;
                current_service = match[0]; // Sets the part of the serviceName that matches the regex
                functionsMap[pattern]();
                break;
            }
        }
        console.log("current_service: ", current_service);
    }
</script>

<h1>Devices (Livesystem)</h1>
<div class="alert alert-light" role="alert">The following devices are located in this vehicle</div>

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
                    <h1>DeviceManagementService</h1>
                    <p>
                        The DeviceManagementService describes basic information
                        about a device.
                    </p>
                    <div><b>device name: </b> {deviceInfo.deviceName}</div>
                    <div><b>manufacturer: </b>{deviceInfo.manufacturer}</div>
                    <div><b>device class: </b>{deviceInfo.deviceClass}</div>
                    <div><b>serial number: </b>{deviceInfo.serialNumber}</div>
                    <div><b>timestamp: </b>{deviceInfo.timeStamp}</div>
                </div>
            </div>
        </div>

        <div class="collapse" id="collapseTrainSetInformationService">
            <div class="card card-body">
                <div>
                    <h1>TrainSetInformationService</h1>
                    <p>
                        The TrainSetInformationService describes basic
                        information about the composition of a train.
                    </p>
                    <div>
                        <b>coachnumber: </b>{trainComposition.coachNumber}
                    </div>
                    <div>
                        <b
                            >coach position in trainset:
                        </b>{trainComposition.coachPositionInTrainSet}
                    </div>
                    <div><b>coachstate: </b>{trainComposition.coachState}</div>
                    <div><b>front cabin: </b>{trainComposition.frontCabin}</div>
                    <div>
                        <b>coupled side: </b>{trainComposition.coupledSide}
                    </div>
                    <div><b>coach type: </b>{trainComposition.coachType}</div>
                </div>
            </div>
        </div>

        <div class="collapse" id="collapseCustomerInformationService">
            <div class="card card-body">
                <div>
                    <h1>CustomerInformationService</h1>
                    <p>
                        The CustomerInformationService describes basic
                        information about a trip.
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
                                    <b>Distance to next stop: </b>{stop
                                        .DistanceToNextStop.DistanceToNextStop}
                                    <br /><br />
                                    {updateNoStopFound() || ""}
                                {/if}
                            {/each}
                        {/if}

                        {#if noStopFound}
                            <div class="warning">
                                warning! There are no values for this service or
                                there might be a problem with the service
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
                                        <b>Stopname: </b>{stop.StopName
                                            .StopName}
                                        <br />
                                        <b>StopRef: </b>{stop.StopRef.StopRef}
                                        <br />
                                        <b>Index: </b>
                                        {stop.StopIndex.StopIndex}
                                        <br />
                                        <b>Distance to next stop: </b>{stop
                                            .DistanceToNextStop
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
                                            <b>Stopname: </b>{stop.StopName
                                                .StopName}
                                            <br />
                                            <b>StopRef: </b>{stop.StopRef
                                                .StopRef}
                                            <br />
                                            <b>Index: </b>
                                            {stop.StopIndex.StopIndex}
                                            <br />
                                            <b>Distance to next stop: </b>{stop
                                                .DistanceToNextStop
                                                .DistanceToNextStop}

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
                                            <b>Stopname: </b>{stop.StopName
                                                .StopName}
                                            <br />
                                            <b>StopRef: </b>{stop.StopRef
                                                .StopRef}
                                            <br />
                                            <b>Index: </b>
                                            {stop.StopIndex.StopIndex}
                                            <br />
                                            <b>Distance to next stop: </b>{stop
                                                .DistanceToNextStop
                                                .DistanceToNextStop}

                                            <br /><br />
                                        {/if}
                                    {/each}
                                </ul>
                            {/if}
                        </div>
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
