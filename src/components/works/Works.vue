<template>
    <div class="works">
        <Work :image-url="KokodayoImage">
            <Kokodayo/>
        </Work>
        <Work :image-url="OninoNihonshiImage">
            <OninoNihonshi/>
        </Work>
        <Work :image-url="AquaPonicsImage">
            <AquaPonics/>
        </Work>
    </div>
</template>

<script>
    import KokodayoImage from "@/assets/kokodayo.jpg";
    import OninoNihonshiImage from "@/assets/oninoNihonshi.png";
    import AquaPonicsImage from "@/assets/aquaPonics.png";

    import Work from "./Work";
    import Kokodayo from "./Kokodayo";
    import OninoNihonshi from "./OninoNihonshi";
    import AquaPonics from "./AquaPonics";

    export default {
        name: "Works",
        components: {Work, Kokodayo, OninoNihonshi, AquaPonics},
        data() {
            return {
                KokodayoImage: KokodayoImage,
                OninoNihonshiImage: OninoNihonshiImage,
                AquaPonicsImage: AquaPonicsImage,

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