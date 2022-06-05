<script setup lang="ts">
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
        <span v-else>
            <p>
                <strong>No Description available for this date</strong>
            </p>
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

    .description {
        text-align: left;
    }
    @media screen and (max-width: 900px) {
        margin-right: 0rem;
    }
}
</style>
