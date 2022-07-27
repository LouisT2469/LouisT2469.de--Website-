<script lang="ts">
    import { slide, fade } from 'svelte/transition';
    import { sineInOut } from 'svelte/easing';
	export let name: string, type: string;

	let newName: string;
	if (type == 't') {
		newName = `▼ ${name} ▼`;
    }

	let visible: boolean = false; // content visibility
	let hoverActive: boolean = false; // hover active, needed if classes should change when opened
	let hovering: boolean = false; // hovering on the menu
</script>

{#if type == 't'} <!--TitleBlock-->
	<div on:mouseleave={() => {if (!visible) {hoverActive = false}; visible = false; hovering = false}} on:mouseenter={() => {hoverActive = true; hovering = true}}>
		<button class="{hoverActive == true 
            ? "" 
            : ""} 
            shadow-2x1 w-80 overflow-visible rounded-lg border border-black bg-[#A8B4D1]"
            on:click={() => {visible = !visible}}
        > <!--Aussehen hier verändern-->
			<p class="text-center text-xl text-white">{newName}</p>
		</button>
        {#if visible}
            <div transition:slide={{ duration: 300, easing: sineInOut }} on:outroend={() => {if (!hovering) {hoverActive = false}}}>
                <slot name="content"/>
            </div>
        {/if}
	</div>

{:else if type == 'c'} <!--Contentblock-->
	<div class="text-center text-white pt-6">
        <slot name="content"/>
	</div>

{:else}
	<p>{name}</p>
{/if}
