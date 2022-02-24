<script>
import data from './JSON/sonderzeichen.json'
</script>

<section class="w-full h-screen p-16">
    {#each data.sonderzeichen as item}
    <div class="w-4/5 mx-auto">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xl:grid-cols-8 text-white">
            <div class="mt-5">
                <div class="font-semibold uppercase text-center p-2 bg-purple-800 rounded-md h-10 grid place-items-center">{item.Headname}</div>
            {#each item.Content as subitem}
                <div class="text-center p-2 bg-purple-500 hover:bg-purple-400 hover:scale-105 hover:border-2 hover:border-purple-200 duration-200 h-16 mt-2 rounded-md grid place-items-center cursor-pointer">{subitem}</div>
            {/each}
            </div>
        </div>
    </div>
    {/each}
</section>
