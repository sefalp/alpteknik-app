<template>
        <footer class="footer">
                <h2>Hakları Saklıdır</h2>
        </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footer{
    font-family: 'Ubuntu', sans-serif;
    grid-area: footer;
    font-size: 1.5rem;
    color: white;
    background-color: rgb(30, 85, 78);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0px;
    height: 3.5rem;
}
</style>