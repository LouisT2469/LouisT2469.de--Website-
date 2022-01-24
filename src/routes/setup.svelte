<script>
	import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
	import Setup from '$lib/setup.svelte';
</script>

<svelte:head>
	<title>Setup | louis T.</title>
</svelte:head>
<Navbar />
<Setup/>

<Footer/>
<style>
	:global(body) {
		background: url('/hintergrund.svg');
		background-size: cover;
		background-position: center;
	}
</style>

