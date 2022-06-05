<script setup lang="ts">
import { ref, Ref, watchEffect, onBeforeMount } from "vue";
import { getTargetImage } from "@/composables/apod-api";
import ApodImageContainer from "@/components/ApodImageContainer.vue";
import ApodDescription from "@/components/ApodDescription.vue";
import ApodDateSelect from "@/components/ApodDateSelect.vue";

let todayDate: Date = new Date();
let targetDate: Ref<Date> = ref(todayDate);
let imageData: Ref<any> = ref(null);
let imageError: Ref<boolean> = ref(false);

// Call APOD Api with targetDate formated as YYYY-MM-DD
// watcher will be called when targetDate changes
watchEffect(async () => {
    try {
        imageData.value = await getTargetImage(targetDate.value);
        console.log("imageData", imageData.value);
    } catch (error) {
        imageData.value = null;
        imageError.value = true;
    }
});
const handlePrevious = () => {
    targetDate.value.setDate(targetDate.value.getDate() - 1);
    targetDate.value = new Date(targetDate.value);
};
const handleNext = () => {
    targetDate.value.setDate(targetDate.value.getDate() + 1);
    targetDate.value = new Date(targetDate.value);
};
</script>

<template>
    <div id="apod-container">
        <ApodDescription
            class="description"
            :title="imageData?.title"
            :description="imageData?.explanation"
        />
        <ApodImageContainer
            class="image-element"
            :url="imageData?.url"
            :title="imageData?.title"
            :mediaType="imageData?.media_type"
            :error="imageError"
        />
        <ApodDateSelect
            class="date-select"
            :targetDate="targetDate"
            @update:targetDate="(newDate) => (targetDate = new Date(newDate))"
        />
    </div>
</template>

<style lang="scss">
#apod-container {
    display: grid;
    justify-content: center;
    grid-template-columns: 30% 50% 20%;
    height: auto;

    .description {
        grid-column: 1 / 2;
        grid-row: 1/2;
    }

    .image-element {
        grid-column: 2/3;
        grid-row: 1/2;
        max-height: 90vh;
        background-color: var(--medium-background);
        border-radius: 1rem;
        justify-content: center;
        align-items: center;
        display: flex;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
    .date-select {
        grid-column: 3/4;
        grid-row: 1/2;
    }
}
@media screen and (max-width: 900px) {
    #apod-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .date-select {
            order: 1;
            height: auto;
        }
        .image-element {
            order: 2;
            margin-bottom: 1rem;
        }
        .description {
            order: 3;
        }
    }
}
</style>
