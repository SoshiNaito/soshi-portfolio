<template>
    <div class="kokodayo">
        <p class="time">2019/02</p>
        <p class="title">アクアポニックスにおける 発芽管理システム</p>
        <div class="workImageWrap">
            <img class="workImage" src="@/assets/aquaPonics.png" alt="">
        </div>
        <p class="description">
            使用技術：Python,OpenCV <br>
            <a href="https://github.com/SoshiNaito/aqua_ponics" target="_blank" rel="noopener">https://github.com/SoshiNaito/aqua_ponics</a>
        </p>
        <p class="description">
            学校であったマーズプロジェクトというプロジェクトに参加した時に作成しました。<br>
            このプロジェクトは、人類が火星に到着した際に有用なモノを学科の壁を越え作成しよう<br>
            というもので、私は応用生物学科と連携し、植物の健康状況を監視するシステムを作成しました。
            本システムは、まず植物の画像を取りその中から色の情報を取得します。<br>
            正常な葉っぱは成長するごとに緑の割合が多くなるので、それにより<br>
            植物の成長度合いや、病気かどうかなどの判断が可能です。<br>
        </p>
        <p class="description">
            私はこの開発で初めてライブラリを使用したため、インストールの仕方や使い方といった面でかなりてこずったことを<br>
            覚えています。公式のドキュメントを読むようになり始めたのもこの開発からです。<br>
            またこのプロジェクトは、開発期間が1ヶ月ほど、サポートしてくれる人は誰もいない、一緒に開発するはずだった仲間が消える<br>
            といった、すごく大変な状況でなんとか作り上げたため、いい意味でも悪い意味でもすごく勉強になった開発でした。<br>
        </p>
    </div>

</template>

<script>
    import aquaPonicsImage from "@/assets/aquaPonics.png";

    export default {
        name: "AquaPonics",
        data() {
            return {
                aquaPonicsImage: aquaPonicsImage,
            };
        },
    }
</script>

<style scoped>
    .time{
        font-size: 28px;
    }
    .title {
        font-size: 24px;
    }
    .workImage {
        width: 100%;
    }
    .description {
        font-size: initial;
    }
    @media screen and (min-width:1024px) {
        .time{
            font-size: 28px;
        }
        .title {
            font-size: 24px;
        }
        .workImage {
            width: 48%;
        }
        .description {
            font-size: 24px;
        }
    }


</style>