<script>
	import data from './JSON/setup.json';
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Setup:</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">Zusammengestellt: 2021</p>
		</div>
		<div class="flex flex-wrap -m-2">
			{#each data.setup as item}
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
						<img
							alt="team"
							class="w-16 h-16  object-cover object-center flex-shrink-0 rounded-md mr-4"
							src="/setup/{item.bild}"
						/>
						<div class="flex-grow">
							<h2 class="text-white title-font font-medium">{item.typ}</h2>
							<a
								href="{item.link}"
							>
								<p class="text-gray-300">{item.name}</p>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
