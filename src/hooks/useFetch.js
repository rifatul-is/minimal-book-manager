import React, { useEffect, useState } from 'react';

const useFetch = (signal, requestMethod, url, resetData) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (resetData) {
            setData(null);
        }
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    signal: signal
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch request was aborted');
                } else {
                    console.error('Fetch error:', error.message);
                    setError(error.message);
                }
            } finally {
                console.log('Fetch execution ended');
            }
        };

        if (url) {
            fetchData().then((r) => {});
        }
    }, [url]);

    return { error, data };
};

export default useFetch;
