<script>
	import data from './JSON/projekte.json';
</script>

<section class="container p-6 mx-auto">
	<h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl m-4">
		Meine Projekte:
	</h2>

	<div class="m-8 content-start flex flex-wrap">

		{#each data.Projekte as item}
        <div class="flex place-items-center m-4 self-center">
			<div
				class="w-full max-w-xs text-center border-gray-200 border p-4 rounded-lg backdrop-blur-xl grid place-items-center"
			>
				<img
					class="object-cover object-center w-full h-48 mx-auto"
					src="/galerie/{item.Bild}"
					alt="project"
				/>

				<div class="mt-2 border-gray-200 border rounded-lg">
					<h3 class="text-lg font-medium text-gray-700 dark:text-gray-200 flex flex-wrap px-2">{item.text}</h3>
					<a class="mt-1 font-medium text-blue-400" href="{item.src}">--click me--</a>
				</div>
			</div>
		</div>
        {/each}
	</div>
</section>
