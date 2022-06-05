<script setup lang="ts"></script>

<template>
    <div id="appod-button">
        <slot class="button-content"></slot>
    </div>
</template>

<style lang="scss">
#appod-button {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 3vw;
    height: 3vw;
    background-color: white;
    border-radius: 50%;
    background: var(--space-background);
    box-shadow: 6px 6px 12px #0d0013, -6px -6px 12px #35024d;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: 6px 6px 12px #35024d, -6px -6px 12px #0d0013;
    }
    &:active {
        border-radius: 150px;
        background: #210130;
        box-shadow: inset 5px 5px 9px #0d0013, inset -5px -5px 9px #35024d;
    }
}
</style>
