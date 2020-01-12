<template>
    <div class="root">
        <div class="top">
            <div class="pageTitle">SOSHI NAITO</div>
            <SnsButtons/>
        </div>
        <PageTemplate title="about">
            <TemplateArticle>
                東京でエンジニアを目指している学生です。現在、IT企業２社でインターンをしています。<br>
                事業戦略やマーケティングなども広い視野でサービスを開発ができるエンジニアを目指しています。
            </TemplateArticle>
            <Carrier/>
        </PageTemplate>

        <PageTemplate title="works">
            <Works/>
        </PageTemplate>
        <PageTemplate title="skill">
            <Skill/>
        </PageTemplate>
        <Footer v-if="isActive"/>
    </div>
</template>

<script>
    import SnsButtons from "./components/SnsButtons";
    import PageTemplate from "./components/PageTemplate";
    import TemplateArticle from "./components/TemplateArticle";
    import Carrier from "./components/about/Carrier";
    import Works from "./components/works/Works";
    import Skill from "./components/skill/Skill";
    import Footer from "./components/Footer";

    export default {
        name: 'app',
        components: {
            Works,
            Carrier,
            PageTemplate,
            SnsButtons,
            TemplateArticle,
            Skill,
            Footer
        },
        data() {
            return {
                isActive: false,
            };
        },
        mounted() {
            window.addEventListener('scroll', this.isFooter);
        },
        methods: {
            isFooter() {
                const y = window.pageYOffset ;
                console.log(y)
                if (!this.isActive){
                    if (y > 575){
                        this.isActive = true
                    }
                }else{
                    if (y < 575){
                        this.isActive = false
                    }
                }
            }
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Mukta&display=swap');
    .root {
        font-family: Mukta;
        height: 100%;
        text-decoration: none;
    }

    a {
        text-decoration: none;
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
        font-size: 48px;
        border-bottom: 1px solid #000000;
    }

    @media screen and (min-width:1024px) {
        .pageTitle {
            text-align: center;
            width: 80%;
            color: #2c3e50;
            font-size: 62px;
            border-bottom: 1px solid #000000;
        }
    }

</style>
