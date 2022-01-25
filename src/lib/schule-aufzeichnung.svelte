<script>
	import data from '$lib/JSON/pdf.json';

	let currentFile = data.sidebar[0].documents[0].file;
	let currentFiles = data.sidebar[0].documents;

	const changeFile = (file) => {
		animation = 'animate-backOutDown';
		setTimeout(() => {
			currentFile = file;
			setTimeout(() => {
				animation = 'animate-backInUp';
			}, 200);
		}, 500);
	};

	let animation = 'animate-backInUp';
</script>

<svelte:head>
	<meta name="color-scheme" content="dark light" />
	<title>Schule | Louis T.</title>
</svelte:head>
<section class="w-full min-h-screen">
	<div class="grid place-items-center lg:hidden p-2">
		<span class="font-semibold text-2xl flex"
			><img src="favicon.png" alt="favicon" class="w-8" /> PFD-Viewer</span
		>
	</div>
	<div class="w-full lg:hidden p-4 flex flex-wrap gap-3 border-b border-zinc-700">
		{#each data.sidebar as item}
			<span
				on:click={() => {
					currentFiles = item.documents;
				}}
				class="bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white cursor-pointer duration-200 px-3 py-1.5 rounded-md select-none grow text-center border-b-4 border-b-{item.color}-600"
				>{item.category}</span
			>
		{/each}
	</div>
	<div class="w-full lg:hidden p-4 flex flex-wrap gap-3">
		{#each currentFiles as item}
			<span
				on:click={() => {
					changeFile(item.file);
				}}
				class="{item.file == currentFile
					? 'bg-zinc-500 hover:bg-zinc-400 text-zinc-100 hover:text-white'
					: 'bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white'} cursor-pointer duration-200 px-3 py-1.5 rounded-md select-none grow text-center"
				>{item.text}</span
			>
		{/each}
	</div>
	<div class="grid place-content-center">
		<div class=" grid grid-cols-5 md:w-1/2 place-content-center w-full">
			<div
				class="flex-none col-span-1 place-self-end w-48 overflow-y-auto h-screen p-4 hidden lg:block"
			>
				<div>
					<span class="font-semibold text-2xl grid place-items-center"
						><img src="favicon.png" alt="favicon" class="w-8" /> PFD-Viewer</span
					>
				</div>
				<div class="mt-2">
					{#each data.sidebar as item}
						<div class="mt-3">
							<div class="mb-2 ml-1">
								<span class="font-semibold text-md">{item.category}</span>
							</div>
							<div class="">
								{#each item.documents as document}
									<span
										on:click={() => {
											changeFile(document.file);
										}}
										class="{document.file == currentFile
											? 'bg-zinc-500 hover:bg-zinc-400 text-zinc-100 hover:text-white'
											: 'bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white'} block cursor-pointer duration-200 px-3 py-1.5 rounded-md mb-2 select-none border-l-4 border-l-{item.color}-600"
										>{document.text}</span
									>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="flex-1 col-span-4 w-full h-screen">
				<div class="lg:p-8 flex  h-full">
					<div class="flex items-stretch">
					<div
						class="aspect-[3/4] self-center lg:border-4 lg:border-dashed lg:rounded-xl lg:border-zinc-800 w-screen h-screen lg:w-auto lg:h-full {animation}"
					>
						<iframe
							src={currentFile}
							title="Document"
							frameborder="0"
							width="100%"
							height="100%"
							class="lg:rounded-xl"
						/>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</section>
