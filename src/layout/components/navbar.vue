<template>
    <div>
        navbar
        <router-link to="/about">user</router-link> &nbsp;
        <router-link to="/">home</router-link>&nbsp;
        <router-link to="/login">login</router-link>

    </div>
</template>

<script>
    const data2FromQuery = {
        data: ''
    }
    export default {
        name: "",
        data() {
            return {
                data: '',
                data1: [],
                data2From: Object.assign({}, data2FromQuery),
            }
        },
        methods: {},
    }
</script>

<style scoped>

</style>
