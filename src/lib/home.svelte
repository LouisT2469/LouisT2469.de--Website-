<script>
import data from './JSON/projekte.json';
</script>

<section class="container p-6 mx-auto">
    <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        My projects:
    </h2>

    <div class="m-8 content-start flex flex-wrap">

        {#each data.Projekte as item}
        <div class="flex place-items-center m-4 self-center">
            <div
                class="w-full max-w-xs text-center border-gray-200 border rounded-lg backdrop-blur-xl grid place-items-center"
                >
                <a href="{item.src}">
                    <img
                        class="object-cover object-center w-full h-full mx-auto hover:blur-sm cursor-pointer"
                        src="/projekte/{item.Bild}"
                        alt="project"
                        />
                </a>
            </div>
        </div>
        {/each}
    </div>
</section>