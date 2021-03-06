import { formatDate } from "@/composables/utils";

const API_URL = "https://api.nasa.gov/planetary/apod";
const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

const callAppodApi = async (date: string) => {
    const response = await fetch(
        API_URL + `?api_key=${NASA_API_KEY}&date=${date}`
    );
    const data = await response.json();
    return data;
};

export const getTargetImage = async (date: Date) => {
    let formatedDate = formatDate(date);

    try {
        const data = await callAppodApi(formatedDate);
        return data;
    } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        throw new Error(message);
    }
};
