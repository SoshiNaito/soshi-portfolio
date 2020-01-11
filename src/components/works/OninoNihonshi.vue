<template>
    <div class="oninoNihonshi">
        <p class="time">2018/11</p>
        <p class="title">鬼の日本史</p>
        <div class="workImageWrap">
            <img class="workImage" src="@/assets/oninoNihonshi.png" alt="">
        </div>
        <p class="description">
            使用技術：Swift, Sketch <br>
            <a href="https://github.com/SoshiNaito/oninonihonshi" target="_blank" rel="noopener">https://github.com/SoshiNaito/oninonihonshi</a>
        </p>
        <p class="description">
            初めて、自分一人で作ったスマホアプリです。<br>
            当時、学校に入り半年間勉強してきたが一切コードが書けないという状況に焦りを覚え 何か作ってみようと思い作りました。<br>
            右も左も分からない中、一ヶ月以内に完成させると目標を決めてなんとか実装しました。<br>
            コードはかなり汚いですが、わからないことだらけの中必死にネットで調べながら実装したため自分にとってかなり思い入れの深い作品です。
        </p>
        <p class="description">
            受験生時代に日本史の勉強をする上で、自分があったらよかったなと思ったものを作成しました<br>
            流れで出てくる人物をまとめて列挙しただけのシンプルなアプリです。<br>
        </p>
    </div>

</template>

<script>
    import oninoNihonshi from "@/assets/oninoNihonshi.png";

    export default {
        name: "OninoNihonshi",
        data() {
            return {
                oninoNihonshi: oninoNihonshi,
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
        width: 80%;
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
            height: 400px;
            width: auto;
        }
        .description {
            font-size: 24px;
        }
    }


</style>