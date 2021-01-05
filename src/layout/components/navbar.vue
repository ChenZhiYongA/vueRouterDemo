<template>
    <div>
        navbar
        <router-link v-for="(item,index) in $router.options.routes" v-bind:key="index" :to="item.path">
            <span v-if="!item.hidden">
                <router-link v-for="(child,index) in item.children" v-bind:key="index" :to="child.path">
                    {{ child.meta.title }}
                </router-link>
            </span>
            <span v-else>
                {{ item.meta.title }}
            </span>
        </router-link>

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
