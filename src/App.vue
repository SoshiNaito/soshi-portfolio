<template>
    <div class="root">
        <div class="top">
            <div class="pageTitle">SOSHI NAITO</div>
            <SnsButtons/>
        </div>
        <PageTemplate title="about">
            東京でエンジニアを目指している学生です。現在、IT企業２社でインターンをしています。<br>
            事業戦略やマーケティングなども広い視野でサービスを開発ができるエンジニアを目指しています。
        </PageTemplate>
    </div>
</template>

<script>


    import SnsButtons from "./components/SnsButtons";
    import PageTemplate from "./components/PageTemplate";

    export default {
        name: 'app',
        components: {
            PageTemplate,
            SnsButtons
        }
    }
</script>

<style>
    .root {
        height: 100%;
    }

    .top {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pageTitle {
        text-align: center;
        width: 80%;
        color: #2c3e50;
        font-size: 62px;
        border-bottom: 1px solid #000000;
    }


</style>
