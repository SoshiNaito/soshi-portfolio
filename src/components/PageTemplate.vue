<template>
    <div class="section">
        <div class="pageTitle">{{title}}</div>
        <div class="">
            <p>
                <slot/>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pageTemplate",
        props: {
            title: {
                type: String
            }
        },
    }
</script>

<style scoped>
    .section {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pageTitle {
        width: 80%;
        color: #2c3e50;
        font-size: 62px;
        border-bottom: 1px solid #000000;
    }
</style>