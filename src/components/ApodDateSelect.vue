<script setup lang="ts">
import { formatDate } from "@/composables/utils";
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
const todayDate = formatDate(new Date());
const formatedDate = formatDate(props.targetDate);
console.log("formatedDate", formatedDate);
</script>

<template>
    <div id="apod-date-select">
        <ApodButton @click="handlePrevious">
            <div class="button-content">{{ "<" }}</div>
        </ApodButton>
        <!-- <p style="color: white">{{ props.targetDate.toDateString() }}</p> -->
        <input
            class="date-input"
            type="date"
            id="start"
            name="trip-start"
            value="2019-11-01"
            :max="todayDate"
        />

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
    .date-input {
        width: 90%;
        height: 100%;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        justify-self: center;
    }
}
</style>
