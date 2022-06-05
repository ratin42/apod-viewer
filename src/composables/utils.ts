// take a Date Object return a string in the format YYYY-MM-DD
export const formatDate = (date: Date) => {
    return (
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2)
    );
};
