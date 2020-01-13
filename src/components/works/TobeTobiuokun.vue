<template>
    <div class="tobeTobiuokun">
        <p class="time">2018/12</p>
        <p class="title">飛べ！トビウオくん</p>
        <div class="workImageWrap">
            <img class="workImage" src="@/assets/tobeTobiuokun.png" alt="">
        </div>
        <p class="description">
            使用技術：Unity, C# <br>
        </p>
        <p class="description">
            シリアスゲームジャムというハッカソンに参加した時に作成したものです。<br>
            <a href="http://www.mediadesignlabs.org/SGJ7/">http://www.mediadesignlabs.org/SGJ7/</a><br>
            参加者の中でエンジニア、デザイナー、企画、リサーチャーでチーム分けを行い、障害者と健常者が同じ土俵で戦えるゲームを作成するというものでした。<br>
            片手で遊べる、競技性があるゲームがコンセプトでプレイヤーはスペースキーで魚を操作し、ランダムに出現するプランクトンを食べてポイントを競います。
        </p>
        <p class="description">
            このハッカソンでは自分に加えエンジニアがもう一人いるチームでの開発で、ソースコード管理に初めてgitを使用しました。<br>
            もう一人のエンジニアの方とはそこで初めてお会いしたのですが、明確に担当箇所を分けての開発、オフラインでの開発だったため案外すんなりと開発を進めることができました。<br>
            それまで何か作るにしてもエンジニアの方としか開発したことがなかったので、専門の人がいることでここまで完成度が高くなるのかということを痛感しました。
        </p>
    </div>

</template>

<script>
    import tobeTobiuokun from "@/assets/tobeTobiuokun.png";

    export default {
        name: "TobeTobiuokun",
        data() {
            return {
                tobeTobiuokun: tobeTobiuokun,
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