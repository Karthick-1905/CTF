// Vite automatically loads env variables prefixed with VITE_
import { safeJsonParse } from '../utils/customFetch';

export const getLeaderboard = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/home/leaderboard`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const result = await safeJsonParse(response);
        if (result.success) {
            return Array.isArray(result.data) ? result.data : [];
        } else {
            throw new Error(result.message || 'Failed to fetch leaderboard');
        }
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        throw error;
    }
};