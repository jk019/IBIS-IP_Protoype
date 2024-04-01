<script>
	let services = [
		{
			id: 1,
			name: "Common V 1.0",
			options: [
				{
					name: "Journey Information V 1.0",
					methods: ["Get Journey Details", "Update Journey Status"],
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
		const option = selectedService.options.find((o) => o.name === optionName);
		if (option) {
			selectedOption = option;
		}
	}
</script>

<h1>Verfügbare Services</h1>

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
<ul>
	{#each selectedService.options as option, index}
		<p class="d-inline-flex gap-1">
			<button
				class="btn btn-primary"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample{index}" 
				aria-expanded="false"
				aria-controls="collapseExample"
			>
				{option.name}
			</button><br />
		</p>
		<div class="collapse" id="collapseExample{index}"> <!-- Dynamische ID -->
			<div class="card card-body">
				{#each option.methods as method}
					<div class="card card-body">
						{method}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</ul>