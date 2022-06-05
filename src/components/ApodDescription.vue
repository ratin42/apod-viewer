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
            <p>{{ props.description }}</p>
        </span>
    </div>
</template>

<style lang="scss"></style>
