// utils/getDayOfYear.ts

function getDayOfYear(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 1);

    // Use getTime() to get the time in milliseconds
    const diffInMillis = date.getTime() - startOfYear.getTime();

    const dayOfYear = Math.floor(diffInMillis / (1000 * 60 * 60 * 24)) + 1;
    return dayOfYear;
}

// Export the function so it can be used in other files
export default getDayOfYear;
