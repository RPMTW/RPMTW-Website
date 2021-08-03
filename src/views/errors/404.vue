<template>
    <div id="Error404">
        <strong>
            <a class="text">我是誰我在哪
                <a class="down text">!!!</a>
            </a><br>
            <p class="code">404</p>
        </strong>
    </div>
</template>

<script>
export default {
    name: "Error404",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);
#Error404 {
    text-align: center;
    .text {
        color: rgb(19, 153, 165);
        font-size: 30pt;
        font-family: 'Pacifico', cursive;
        &.down {
            padding: 5px;
        }
    }
    .code {
        margin: 0;
        color: red;
        font-size: 200px;
        font-family: 'Pacifico', cursive;
    }
}
</style>