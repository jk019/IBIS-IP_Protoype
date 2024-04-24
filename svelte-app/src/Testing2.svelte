<script>
    // URL of the XML resource
    const url = "https://w1.weather.gov/xml/current_obs/KMSP.xml";

    // Function to fetch XML
    function fetchXML(url) {
        fetch(url)
            .then((response) => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok " + response.statusText,
                    );
                }
                return response.text();
            })
            .then((data) => {
                console.log(data); // Here you get the XML data as a string
                // Optionally, you can parse this XML string into a DOM object if needed
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "application/xml");
                console.log(xmlDoc); // Display the parsed XML Document object
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation: ",
                    error,
                );
            });
    }

    import axios from "axios";

    let services = [];

    function getServices() {
        axios.get("http://localhost:3001/api/services").then((response) => {
            services = response.data;
        });
    }
    getServices();

    
</script>

<button on:click={() => fetchXML(url)}>test</button>

<h1>Testing 2</h1>

<button on:click={() => console.log(services)}>Log Services</button>
{#each services as service}
    <p>{service.addresses[0]}</p>
{/each}
