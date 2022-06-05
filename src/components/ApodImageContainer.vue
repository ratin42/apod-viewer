<script setup lang="ts">
import { defineProps } from "vue";

// Define Props
interface Props {
    url: string;
    title: string;
    mediaType: string;
}
const props = withDefaults(defineProps<Props>(), {
    url: "",
    title: "",
    mediaType: "",
});
</script>

<template>
    <div id="image-container">
        <img
            v-if="props.url && props.mediaType === 'image'"
            class="space-picture"
            :src="props.url"
            alt=""
        />
        <iframe
            v-else-if="props.url && props.mediaType == 'video'"
            class="video-container"
            allow="fullscreen;"
            :src="url"
        >
        </iframe>
        <span v-else>
            <p>
                <strong>No Image or Video available for this date</strong>
            </p>
        </span>
    </div>
</template>

<style lang="scss">
#image-container {
    .video-container {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 90vh;
        border-radius: 0.5rem;
        border-style: none;
    }
    .space-picture {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0.5rem;
    }
}
</style>
