<template>
    <div class="snsLinks">
        <a href="" class="snsLink">
            <font-awesome-icon :icon="['fab', 'twitter']" :style="{ color: '#14AABF' }"/>
        </a>
        <a href="" class="snsLink">
            <font-awesome-layers>
                <font-awesome-icon :icon="['fa', 'square']" :style="{ color: '#49B300' }"/>
                <font-awesome-icon :icon="['fa', 'search']" inverse size="xs" :style="{ color: '#ffffff' }"/>
            </font-awesome-layers>
        </a>
        <a href="" class="snsLink">
            <font-awesome-icon :icon="['fab', 'github']" :style="{ color: '#181616' }"/>
        </a>

        <a href="" class="snsLink">
            <font-awesome-layers>
                <font-awesome-icon :icon="['far', 'circle']" :style="{ color: '#000000' }"/>
                <font-awesome-icon :icon="['fa', 'pen-nib']" inverse size="xs" rotation="90"
                                   :style="{ color: '#000000' }"/>
            </font-awesome-layers>
        </a>
    </div>
</template>

<script>
    export default {
        name: "SnsButtons"
    }
</script>

<style scoped>
    .snsLinks {
        font-size: 62px;
    }

    .snsLink {
        margin-left: 12px;
    }

    .snsLink:first-child {
        margin-left: 0;
    }
</style>