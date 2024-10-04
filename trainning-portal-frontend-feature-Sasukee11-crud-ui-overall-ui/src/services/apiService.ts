//Functions for API calls or external services.

export const fetchData = async () => {
    const response = await fetch('https://localhost/api/');
    const data = await response.json();
    return data;
};