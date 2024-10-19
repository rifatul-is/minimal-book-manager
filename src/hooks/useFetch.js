import React, { useEffect, useState } from 'react';

const useFetch = (requestMethod, url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url, {
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (url) {
            fetchData().then((r) => {});
        }
    }, [url]);

    return { isLoading, error, data };
};

export default useFetch;
