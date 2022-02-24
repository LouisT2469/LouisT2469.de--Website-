<script>
	import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
import Sonderzeichen from '$lib/sonderzeichen.svelte';
</script>

<svelte:head>
	<title>Sonderzeichen | louis T.</title>
</svelte:head>
<Navbar />
<Sonderzeichen/>

<Footer/>
<style>
	:global(body) {
		background: url('/hintergrund.svg');
		background-size: cover;
		background-position: center;
	}
</style>