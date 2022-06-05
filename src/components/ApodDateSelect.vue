<script setup lang="ts">
import { computed } from "vue";
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
const setDate = (date: any) => {
    let newDate = new Date(date.target.value);
    emits("update:targetDate", newDate);
};

const todayDate: string = formatDate(new Date());
let formatedDate = computed(() => {
    return formatDate(props.targetDate);
});
</script>

<template>
    <div id="apod-date-select">
        <ApodButton @click="handlePrevious">
            <div class="button-content">{{ "<" }}</div>
        </ApodButton>
        <input
            class="date-input"
            type="date"
            :max="todayDate"
            :value="formatedDate"
            @input="(newDate: Event) => setDate(newDate)"
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
    input {
        color-scheme: dark;
    }
    .date-input {
        width: 90%;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        justify-self: center;
        justify-content: center;
    }
}
</style>
