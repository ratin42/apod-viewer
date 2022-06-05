<script setup lang="ts">
import { ref, Ref, watchEffect, onBeforeMount } from "vue";
import { getTargetImage } from "@/composables/apod-api";
import ApodImageContainer from "@/components/ApodImageContainer.vue";
import ApodDescription from "@/components/ApodDescription.vue";
import ApodDateSelect from "@/components/ApodDateSelect.vue";

let todayDate: Date = new Date();
let targetDate: Ref<Date> = ref(todayDate);
let imageData: Ref<any> = ref(null);

// Call APOD Api with targetDate formated as YYYY-MM-DD
// watcher will be called when targetDate changes
watchEffect(async () => {
    imageData.value = await getTargetImage(targetDate.value);
    console.log("imageData", imageData.value);
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
    <div id="appod-container">
        <ApodDescription
            :title="imageData?.title"
            :description="imageData?.explanation"
        />
        <ApodImageContainer
            class="image-element"
            :url="imageData?.url"
            :title="imageData?.title"
        />
        <ApodDateSelect
            :targetDate="targetDate"
            @update:targetDate="(newDate) => (targetDate = new Date(newDate))"
        />
    </div>
</template>

<style lang="scss">
#appod-container {
    display: grid;
    justify-content: center;
    grid-template-columns: 20vw 60vw 20vw;
    height: 100vh;

    .image-element {
        grid-column: 2/3;
        height: 90vh;
    }
}
</style>
