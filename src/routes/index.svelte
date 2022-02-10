<script>
import Navbar from '$lib/navbar.svelte';
import Footer from '$lib/footer.svelte';
import Home from '$lib/home.svelte';
</script>

<svelte:head>
    <title>Home | louis T.</title>
    </svelte:head>
    <Navbar />
    <Home/>

        <Footer/>

<style>
:global(body) {
    background: url('/hintergrund.svg');
    background-size: cover;
    background-position: center;
}
</style>