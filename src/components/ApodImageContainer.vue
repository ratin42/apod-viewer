<script setup lang="ts">
import { defineProps } from "vue";

// Define Props
interface Props {
    url: string;
    title: string;
}
const props = withDefaults(defineProps<Props>(), {
    url: "",
    title: "",
});
</script>

<template>
    <div id="image-container">
        <img class="space-picture" v-if="props.url" :src="props.url" alt="" />
    </div>
</template>

<style lang="scss">
#image-container {
    // background-color: black;
    // border-radius: 1rem;
    .space-picture {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        // object-fit: scale-down;
        // background-size: scale-down;
        // background-color: black;
        border-radius: 1rem;
    }
}
</style>
