/**
 * Safely parse JSON from a response, handling empty responses
 */
const safeJsonParse = async (response) => {
    const text = await response.text();
    if (!text || text.trim() === '') {
        return { success: false, message: 'Empty response from server', data: null };
    }
    try {
        return JSON.parse(text);
    } catch (error) {
        console.error('JSON parse error:', error, 'Response text:', text.substring(0, 100));
        return { success: false, message: 'Invalid JSON response from server', data: null };
    }
};

const postData = async(url, formData) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
    });
    
    const data = await safeJsonParse(response);
    return data;
};

const getData = async(url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });
    
    const data = await safeJsonParse(response);
    return data;
};

export { postData, getData, safeJsonParse }