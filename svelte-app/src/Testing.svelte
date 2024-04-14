<script>
    let data; // This will hold the processed data
    let loading = false;

    // General function to fetch XML from a given URL
    async function fetchXML(url) {
        loading = true;
        try {
            const response = await fetch(url);
            const text = await response.text();
            const xmlDoc = new DOMParser().parseFromString(
                text,
                "application/xml",
            );

            // Here, process the XML as needed
            // For example, parsing a standard structured XML
            console.log(xmlDoc);
            data = parseXML(xmlDoc);
        } catch (error) {
            console.error("Error fetching or parsing XML:", error);
            data = null;
        }
        loading = false;
    }

    // A function to parse XML to JSON-like object
    function parseXML(xmlDoc) {

   
        // You need to customize this function based on the structure of your XML files
        // Here's a general example for parsing:
        const elements = xmlDoc.documentElement.childNodes;
        let result = {};
        elements.forEach((element) => {
            if (element.nodeType === 1) {
                // Element type is "Element"
                result[element.tagName] = element.textContent;
            }
        });
        return result;
    }

    // Example call to fetch an XML (you can pass any URL here)
    fetchXML("https://w1.weather.gov/xml/current_obs/KMSP.xml");
</script>

{#if loading}
    <p>Loading...</p>
{:else if data}
    <div>
        <h1>Data Loaded</h1>
        {#each Object.entries(data) as [key, value]}
            <p><strong>{key}:</strong> {value}</p>
        {/each}
    </div>
{:else}
    <p>Error loading data. Please check the console for details.</p>
{/if}
