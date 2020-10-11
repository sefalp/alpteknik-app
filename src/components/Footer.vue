<template>
        <footer class="footer">
            
            <div class="communication">
                <h2>İletişim</h2>
            </div>
            <div class="live-communication">
                <h2><i class="fas fa-headset"></i>CanlıDestek </h2>
            </div>
                
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
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0px;
    height: 3.5rem;
    padding: 0 15rem;
    padding-top: .4rem;
}

.live-communication-logo{
    width: 45px;
}
</style>