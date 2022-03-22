<script>
import Navbar from '$lib/navbar.svelte';
import Footer from '$lib/footer.svelte';
import 404 from '$lib/404.svelte';
</script>

<svelte:head>
    <title>404 | louis T.</title>
    </svelte:head>
    <Navbar />
    <404/>
        <Footer />

<style>
:global(body) {
    background: url('/hintergrund.svg');
    background-size: cover;
    background-position: center;
}
</style>
