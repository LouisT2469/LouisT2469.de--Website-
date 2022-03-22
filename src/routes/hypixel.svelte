<script>
    import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
    import Hypixel from 'src/routes/hypixel.svelte';
    </script>
    
    <svelte:head>
        <title>Hypixel | louis T.</title>
        </svelte:head>
        <Navbar />
        <Hypixel/>
    
            <Footer/>
    
        <style>
    :global(body) {
        background: url('/hintergrund.svg');
        background-size: cover;
        background-position: center;
    }
    </style>
    