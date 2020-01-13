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
        <Work :image-url="TobeTobiuokunImage">
            <TobeTobiuokun/>
        </Work>
    </div>
</template>

<script>
    import KokodayoImage from "@/assets/kokodayo.jpg";
    import OninoNihonshiImage from "@/assets/oninoNihonshi.png";
    import AquaPonicsImage from "@/assets/aquaPonics.png";
    import TobeTobiuokunImage from "@/assets/tobeTobiuokun.png";

    import Work from "./Work";
    import Kokodayo from "./Kokodayo";
    import OninoNihonshi from "./OninoNihonshi";
    import AquaPonics from "./AquaPonics";
    import TobeTobiuokun from "./TobeTobiuokun";

    export default {
        name: "Works",
        components: {Work, Kokodayo, OninoNihonshi, AquaPonics, TobeTobiuokun},
        data() {
            return {
                KokodayoImage: KokodayoImage,
                OninoNihonshiImage: OninoNihonshiImage,
                AquaPonicsImage: AquaPonicsImage,
                TobeTobiuokunImage: TobeTobiuokunImage,
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
    @media screen and (min-width:1024px) {
        .works {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 60%;
        }
    }

</style>