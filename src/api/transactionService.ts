import axios from 'axios';

// Simulating backend request using axios
export const fetchTransactionData = async () => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos/1',
        ); 
        return response.data; 
    } catch (error) {
        throw new Error('Error fetching transaction data');
    }
};
