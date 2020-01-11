<template>
    <div>
        <WorkModal v-if="isActive" @on-hide="changeModalState">
            <slot/>
        </WorkModal>
        <div @click="changeModalState" >
            <img class="workImage" :src="imageUrl" alt="">
        </div>
    </div>
</template>

<script>
    import WorkModal from "./WorkModal";

    export default {
        name: "Work",
        components: {WorkModal},
        props: {
            imageUrl: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                isActive: false,
            };
        },
        methods: {
            changeModalState() {
                this.isActive = !this.isActive;
            },
        }
    }
</script>

<style scoped>
    .workImage{
        width: 360px;
    }
</style>