<template>
    <div class="section">
        <div class="pageTitle">{{title}}</div>
        <div class="contents">
            <slot/>
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
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pageTitle {
        margin-bottom: 20px;
        padding-bottom: 8px;
        width: 80%;
        color: #2c3e50;
        font-size: 62px;
        border-bottom: 1px solid #000000;
    }

    .contents{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    @media screen and (min-width:1024px) {
        .section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .pageTitle {
            margin-bottom: 120px;
            padding-bottom: 8px;
            width: 80%;
            color: #2c3e50;
            font-size: 62px;
            border-bottom: 1px solid #000000;
        }

        .contents{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-size: 24px;
        }

    }
</style>