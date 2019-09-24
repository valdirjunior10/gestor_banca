<template>
<b-nav vertical class="wrapper">
    <b-collapse is-nav id="nav_collapse">
      <b-nav-item to="/dashboard">Dashboard</b-nav-item>
      <b-nav-item to="/play">Play</b-nav-item>
      <b-nav-item to="/houses">Houses</b-nav-item>
    </b-collapse>
</b-nav>
</template>
<script>
export default {
    name: 'Sidebar',
    data: () => {
        return {

        }
    }
}
</script>

<style scoped>
.wrapper {
    max-width: 100px;
    min-height: 100vh;
    float:left;
    background-color:red;
}
</style>