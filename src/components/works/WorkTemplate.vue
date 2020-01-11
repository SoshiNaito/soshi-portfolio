<template>
    <div class="workTemplate">
        <p class="time">2018/07</p>
        <p class="title">ココダヨ</p>
        <div class="workImageWrap">
            <img class="workImage" src="@/assets/kokodayo.jpg" alt="">
        </div>
        <p class="description">
            使用技術：Java, Sketch <br>
            担当：提案、デザイン、サブプログラマー
        </p>
        <p class="description">
            Yahoo! Japanさんにて開催されているHack U TOKYOというハッカソンに参加した際に作成しました。<br>
            災害時に事前に登録しておいたメールアドレスに現在位置を送り続けるアプリです。<br>
            当時、災害の際に氾濫した川に流されて行方不明になってしまったというニュースをみて、<br>
            災害時に現在位置を一定間隔で記録していれば仮に流されてしまったとしても、<br>
            捜索する範囲が絞れるのではという思いで作成しました。<br>
        </p>
        <p class="description">
            本アプリは、災害時に使用するためのアプリなので「緊急時に誰もが直感的に使用できる」という点を意識しました。<br>
            子供や外国の方がわかるように緊急時に使用するボタンはなるべくひらがなに、また文字と共にアイコンを表示しています。<br>
            また、色覚障害の方でも使えるように、色覚障害の方が判別しづらい色をさけ単一の色のみでデザインをしました。
        </p>
    </div>

</template>

<script>
    import kokodayoImage from "@/assets/kokodayo.jpg";

    export default {
        name: "WorkTemplate",
        data() {
            return {
                kokodayoImage: kokodayoImage,
            };
        },
    }
</script>

<style scoped>
    .workTemplate {
        font-size: 24px;
    }
    .time{
        font-size: 28px;
    }
    .title {
        font-size: 32px;
        font-weight: bold;
    }


    .workImage {
        height: 48%;

    }


</style>