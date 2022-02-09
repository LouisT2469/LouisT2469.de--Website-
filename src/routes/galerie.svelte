<script>
import Navbar from "$lib/navbar.svelte";
import Footer from "$lib/footer.svelte";
import Galerie from "$lib/galerie.svelte";
</script>

<svelte:head>
    <title>Galerie | louis T.</title>
    </svelte:head>
    <Navbar />

    <Galerie/>

        <Footer/>

<style>
:global(body) {
    background: url('/hintergrund.svg');
    background-size: cover;
    background-position: center;
}
</style>
