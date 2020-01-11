<template>
    <div class="footer">
        <SnsButtons/>
    </div>
</template>

<script>
    import SnsButtons from "./SnsButtons";

    export default {
        name: "Footer",
        components: {
            SnsButtons
        }
    }
</script>

<style scoped>
    .footer {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    @media screen and (min-width:1024px) {
        .footer {
            position: fixed;
            bottom: 0;
            right: 40px;
        }
    }
</style>