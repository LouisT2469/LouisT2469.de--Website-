<script>
import data from './JSON/galerie.json';
</script>


<section class="container p-6 mx-auto">
	<h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">My Designs:</h2>
    {#each data.Bilder as item}
    <div class="">
    <div class="flex items-center justify-center ">
            <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="w-full max-w-xs text-center border-gray-200 border p-4 rounded-lg backdrop-blur-xl">
                    <img
                        class="object-cover object-center w-full h-48 mx-auto"
                        src="/galerie/{item.source}"
                        alt="{item.alt}"
                    />
    
                    <div class="mt-2 border-gray-200 border rounded-lg">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">{item.subtile}</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">--by {item.creator}--</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/each}
	
</section>
