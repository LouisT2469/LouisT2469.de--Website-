<script>
	import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
	import SchuleAufzeichnung from '$lib/schule-aufzeichnung.svelte';
</script>

<svelte:head>
	<title>Schule | louis T.</title>
</svelte:head>
<Navbar />

<SchuleAufzeichnung/>

<Footer/>
<style>
	:global(body) {
		background: url('/hintergrund.svg');
		background-size: cover;
		background-position: center;
	}
</style>

