import useFetch from '../hooks/useFetch.js';
import { base_url } from './api_urls.js';

export const fetchBooks = async (
    signal,
    customUrl,
    searchValue,
    selectedGenre,
    selectedLanguage
) => {
    let url = customUrl || base_url;
    let data = null;
    let error = null;

    console.log('Fetch URL ' + url);

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (signal) {
        options.signal = signal;
    }

    if (searchValue) {
        url += `?search=${searchValue}`;
        if (selectedGenre) url += `&topic=${selectedGenre.toLowerCase()}`;
        if (selectedLanguage.length > 0) {
            const languagesParam = selectedLanguage.join(',');
            url += `&languages=${encodeURIComponent(languagesParam)}`;
        }
    } else if (selectedGenre) {
        url += `?topic=${selectedGenre}`;
        if (searchValue) url += `&search=${searchValue}`;
        if (selectedLanguage.length > 0) {
            const languagesParam = selectedLanguage.join(',');
            url += `&languages=${encodeURIComponent(languagesParam)}`;
        }
    } else if (selectedLanguage.length > 0) {
        const languagesParam = selectedLanguage.join(',');
        url += `?languages=${languagesParam}`;
        if (searchValue) url += `&search=${searchValue}`;
        if (selectedGenre) url += `&topic=${selectedGenre.toLowerCase()}`;
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        data = result;
    } catch (e) {
        if (e.name === 'AbortError') {
            console.log('Fetch request was aborted');
        } else {
            console.error('Fetch error:', e.message);
            error = e.message;
        }
    } finally {
        console.log('Fetch execution ended');
    }

    return { data, error };
};
