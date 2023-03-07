<template>
    <div class="container">
        <Header title="White Cat" action="Pay" color="rgb(175, 70, 180)" bgColor="#e5aeee" />
    </div>
    <div class="container">
        <Header title="Oragne Cat" action="Pay" />
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style>
#app {
    text-align: center;
    margin-top: 60px;
}

.container {
    border: 1px solid steelblue;
    padding: 30px;
    max-width: 500px;
    margin: 20px auto;
}
</style>
