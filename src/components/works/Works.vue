<template>
    <div class="works">
        <Work :image-url="KokodayoImage">
            <WorkTemplate />
        </Work>
        <Work :image-url="KokodayoImage">
            <WorkTemplate />
        </Work>
        <Work :image-url="KokodayoImage">
            <WorkTemplate />
        </Work>
    </div>
</template>

<script>
    import KokodayoImage from "@/assets/kokodayo.jpg";
    import Work from "./Work";
    import WorkTemplate from "./WorkTemplate";

    export default {
        name: "Works",
        components: {Work, WorkTemplate},
        data() {
            return {
                KokodayoImage: KokodayoImage,
            };
        },
    }
</script>

<style scoped>
    .works {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

</style>