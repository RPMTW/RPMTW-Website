<template>
    <div id="ModVersion">
        <select id="">
            <option :value="version.keys()"
                v-for="version in versions"
                :key="version"
            >{{ version }}
            </option>
        </select>
    </div>
</template>

<script>
import version from "@/data/Versions.json"

export default {
    name: "ModVersion",
    data() {
        return {
            versions: version
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>