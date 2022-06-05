<script setup lang="ts">
import { defineProps } from "vue";
</script>

<template>
    <div id="appod-button">
        <slot></slot>
    </div>
</template>

<style lang="scss">
#appod-button {
    width: 3vw;
    height: 3vw;
    background-color: white;
    border-radius: 50%;
    background: var(--space-background);
    box-shadow: 6px 6px 12px #0d0013, -6px -6px 12px #35024d;
}
</style>
