<template>
    <div>
        <navbar/>
        <pageMain/>
    </div>
</template>

<script>
    import navbar from "@/layout/components/navbar";
    import pageMain from "@/layout/components/pageMain";
    const data2FromQuery = {
        data: ''
    }
    export default {
        name: "",
        components: {navbar,pageMain},
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
