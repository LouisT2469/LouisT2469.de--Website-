<script>
	import data from './JSON/galerie.json';
</script>


<section class="py-48 flex flex-col justify-center">
    <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
      <div class="-mt-20 flex justify-end">
        <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
      </div>
      <div class="flex justify-start">
        <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
      </div>
      <div class="-mt-64 flex justify-start">
        <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
      </div>
      <div class="flex justify-start -mr-28 ml-28">
        <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" />
      </div>
      <div class="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-purple-900">
        <div class="space-y-4">
          <p class="text-5xl font-bold text-black tracking-tight">
            Infos:
          </p>
          <p class="text-xl text-black">
Programm: Affinity Designer
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6 border-t border-b border-black my-12 py-8">
          <div>
            <p class="text-4xl font-bold text-black">
              2M+
            </p>
            <p class="text-sm text-black">
              people in the Apple supply chain covered by our health and safety standards in 2020
            </p>
          </div>
          <div>
            <p class="text-4xl font-bold text-black">
              170+
            </p>
            <p class="text-sm text-black">
              member companies of the Responsible Business Alliance given access to our COVID response tools
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!--<section class="container p-6 mx-auto ">
	<h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl m-4 ">
		My designs:
	</h2>
	<div class="border-gray-200 border p-4 rounded-lg backdrop-blur-sm">
		<div class="m-8 content-start flex flex-wrap" >
			{#each data.Bilder as item}
				<div class="flex place-items-center m-4 self-center">
					<div
						class="w-full max-w-xs text-center border-gray-200 border p-4 rounded-lg backdrop-blur-xl grid place-items-center "
					>
						<img
							class="object-cover object-center w-full h-48 mx-auto"
							src="/galerie/{item.source}"
							alt={item.alt}
						/>

						<div class="mt-2 border-gray-200 border rounded-lg">
							<h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">{item.subtile}</h3>
							<span class="mt-1 font-medium text-gray-600 dark:text-gray-300"
								>--by {item.creator}--</span
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>-->