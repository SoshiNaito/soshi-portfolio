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
        position: fixed;
        bottom: 0;
        right: 40px;
    }
</style>