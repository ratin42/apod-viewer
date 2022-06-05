<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
    title: string;
    description: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    description: "",
});
</script>

<template>
    <div id="apod-description">
        <span v-if="props.title && props.description">
            <h1>{{ props.title }}</h1>
            <p class="description">{{ props.description }}</p>
        </span>
    </div>
</template>

<style lang="scss">
#apod-description {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding: 0 1rem 0 1rem;
    background-color: var(--light-background);
    margin-right: 1rem;
    // height: fit-content;

    .description {
        text-align: left;
    }
}
</style>
