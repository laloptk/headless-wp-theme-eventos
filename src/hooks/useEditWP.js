import { useState, useEffect } from 'react';
import EditWP from '../utils/EditWP';

const useEditWP = (body = {}, params = {}) => {
    const { status, setStatus } = useState(null);   
    const { error, setError } = useState(null);

    useEffect(() => {
        const editWp = new EditWP();
        const fetchData = async () => {
            try {
                // Example of using the EditWP methods
                const response = await editWp.updatePosts();
                setStatus(response);
            } catch (error) {
                setError(`Error editing data: ${error}`);
            }
        };
        fetchData();
    }, []);
}

export default useEditWP;