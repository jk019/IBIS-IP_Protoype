<script>
	let services = [
		{
			id: 1,
			name: "Common V 1.0",
			options: [
				{
					name: "Journey Information V 1.0",
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
					name: "Beacon Location V 1.0",
					methods: ["Find Nearest Beacon", "Get Beacon Details"],
				},
				{
					name: "Distance Location V 1.0",
					methods: ["Calculate Distance", "Get Distance Logs"],
				},
			],
		},
		{
			id: 2,
			name: "Common V 2.0",
			options: [
				{
					name: "Video Display V 2.0",
					methods: ["Display Video", "Configure Display Settings"],
				},
				{
					name: "Video Recording V 2.0",
					methods: ["Start Video Recording", "Stop Video Recording"],
				},
			],
		},
		{
			id: 3,
			name: "Common V 2.1",
			options: [
				{
					name: "Door State V 2.1",
					methods: ["Query Door State", "Change Door State"],
				},
			],
		},
		{
			id: 4,
			name: "Common V 2.2",
			options: [
				{
					name: "Customer Information V 2.2",
					methods: ["Retrieve Customer Info", "Update Customer Info"],
				},
				{
					name: "Customer Feedback V 2.2",
					methods: ["Collect Feedback", "Analyze Feedback"],
				},
			],
		},
		{
			id: 5,
			name: "Common V 2.3",
			options: [
				{
					name: "Customer Information V 2.3",
					methods: [
						"Access Customer Profile",
						"Modify Customer Profile",
					],
				},
			],
		},
	];

	let selectedService = { name: "Choose common service", options: [] };

	function selectService(serviceName) {
		const service = services.find((s) => s.name === serviceName);
		if (service) {
			selectedService = service; // Aktualisiere das komplette Objekt
		}
	}

	let selectedOption = { name: "", methods: [] };

	function selectOption(optionName) {
		const option = selectedService.options.find(
			(o) => o.name === optionName,
		);
		if (option) {
			selectedOption = option;
		}
	}
</script>

<div class="row modern-row">
<div class="col-7 modern-col">
<div class="content modern-content">
	<h1>Verfügbare Services</h1>
	<p>Die folgenden Services sind in diesem Zug verfügbar:</p>
	<br /><br /><br />

	<div class="dropdown">
		<button
			class="btn btn-secondary dropdown-toggle"
			type="button"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		>
			{selectedService.name}
		</button>
		<ul class="dropdown-menu">
			{#each services as service}
				<li>
					<a
						class="dropdown-item"
						href="#"
						on:click={() => selectService(service.name)}
						>{service.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>


		<h2>Optionen für {selectedService.name}</h2>
		<p>
			Um die Funktionen der jeweiligen Services anzuzeigen, drücken Sie
			bitte auf den jeweiligen Service
		</p>
		<div class="d-flex">
			<!-- Buttons auf der linken Seite -->
			<div class="flex-shrink-1">
				{#each selectedService.options as option, index}
					<button
						class="btn btn-primary my-1"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseExample{index}"
						aria-expanded="false"
						aria-controls="collapseExample"
					>
						{option.name}
					</button>
				{/each}
			</div>
		</div>


	
</div>
</div>


<div class="col-5 modern-col heightlimit">
<!-- Collapse-Inhalte auf der rechten Seite -->
<div class="flex-grow-1 ms-3">
	{#if selectedService.options.length>1}
		<h2>Folgende Funktionen sind für diesen Dienst verfügbar</h2>
	{/if}
	
	{#each selectedService.options as option, index}
		<div class="collapse" id="collapseExample{index}">
			<div class="card card-body">
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
</div></div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: left;
	}
	.dropdown {
		display: inline-block;
		align-items: left;
	}
	.card {
		margin-top: 10px;
	}
	.card-body {
		padding: 10px;
	}
	.btn {
		margin: 5px;
		background-color: gray;
		color: white;

	}

	.modern-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #f5f5f5;
}

.modern-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.modern-content {
  font-size: 18px;
  color: #333;
}



</style>
