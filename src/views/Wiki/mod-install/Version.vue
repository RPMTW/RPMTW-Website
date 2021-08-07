<template>
    <div id="ModVersion">
        <select id="">
            <option :value="version"
                v-for="(version, key) in versions"
                :key="(version, key)"
            >{{ key }}
            </option>
        </select>
    </div>
</template>

<script>
import version from "@/data/Versions.json"
console.log(version);
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