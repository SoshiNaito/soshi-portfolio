<template>
    <div class="workModal">
        <div class="modalBackGround"  @click="hide"></div>
        <div class="contents">
            <div class="closeBottun" @click="hide">
                <font-awesome-icon  :icon="['fa', 'times']" size="s" :style="{ color: '#000000' }"/>
            </div>
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkModal",
        methods: {
            hide() {
                this.$emit('on-hide')
            }
        }
    }
</script>

<style scoped>
    .modalBackGround {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
    }

    .closeBottun{
        position: absolute;
        top: 10px;
        right: 20px;
    }

    .contents {
        padding: 12px;
        z-index: 1000;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: auto;
        width: 80%;
        height: 80%;
        background-color: #ffffff;
        border-radius: 8px;
    }
    @media screen and (min-width:1024px) {
        .modalBackGround {
            z-index: 999;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5);
        }

        .closeBottun{
            position: absolute;
            top: 10px;
            right: 20px;
        }

        .contents {
            z-index: 1000;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: auto;
            width: 80%;
            height: 80%;
            background-color: #ffffff;
            border-radius: 8px;
        }
    }
</style>