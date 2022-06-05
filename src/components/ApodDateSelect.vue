<script setup lang="ts">
import ApodButton from "@/components/ApodButton.vue";

interface Props {
    targetDate: Date;
}
const props = withDefaults(defineProps<Props>(), {
    targetDate: () => new Date(),
});
const emits = defineEmits(["update:targetDate"]);

const handlePrevious = () => {
    props.targetDate.setDate(props.targetDate.getDate() - 1);
    emits("update:targetDate", props.targetDate);
};
const handleNext = () => {
    props.targetDate.setDate(props.targetDate.getDate() + 1);
    emits("update:targetDate", props.targetDate);
};
</script>

<template>
    <div id="apod-date-select">
        <ApodButton @click="handlePrevious">
            <div class="button-content">{{ "<" }}</div>
        </ApodButton>
        <p style="color: white">{{ props.targetDate.toDateString() }}</p>
        <!-- <input
                type="date"
                id="start"
                name="trip-start"
                :value="targetDate.toDateString()"
                min="2018-01-01"
                :max="targetDate.toDateString()"
            /> -->

        <ApodButton @click="handleNext">
            <div class="button-content">{{ ">" }}</div>
        </ApodButton>
    </div>
</template>

<style lang="scss">
#apod-date-select {
    display: grid;
    grid-template-columns: auto 50% auto;
    width: 100%;
    height: 2vh;
    // grid-gap: 1rem;
    justify-content: center;
    align-items: center;

    .arrow {
        width: 2rem;
        height: 2rem;
    }
    .button-content {
        font-size: 1.5rem;
        color: white;
        font-weight: bold;
    }
}
</style>
