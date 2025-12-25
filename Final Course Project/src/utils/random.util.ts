export const randomNumber = (min = 100, max = 99999): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
