import useFetch from '../hooks/useFetch.js';
import { base_url } from './api_urls.js';

export const fetchBooks = async (
    signal,
    customUrl,
    searchValue,
    selectedGenre,
    selectedLanguage,
    customGenreSearch
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
    } else if (customGenreSearch) {
        url += `?topic=${customGenreSearch}`;
    } else if (selectedGenre) {
        url += `?topic=${selectedGenre}`;
    } else if (selectedLanguage.length > 0) {
        const languagesParam = selectedLanguage.join(',');
        url += `?languages=${encodeURIComponent(languagesParam)}`;
    }
    //
    // if (searchValue) {
    //     if (
    //         selectedGenre ||
    //         selectedLanguage.length !== 0 ||
    //         customGenreSearch
    //     ) {
    //         url += `&search=${searchValue}`;
    //     } else {
    //         url += `?search=${searchValue}`;
    //     }
    // }
    //
    // if (customGenreSearch || selectedGenre) {
    //     if (searchValue || selectedLanguage.length !== 0) {
    //         url += `&topic=${customGenreSearch || selectedGenre}`;
    //     } else {
    //         url += `?topic=${customGenreSearch || selectedGenre}`;
    //     }
    // }
    //
    // if (selectedLanguage && selectedLanguage.length > 0) {
    //     const languagesParam = selectedLanguage.join(',');
    //     if (selectedGenre || searchValue || customGenreSearch) {
    //         url += `&languages=${encodeURIComponent(languagesParam)}`;
    //     } else {
    //         url += `?languages=${encodeURIComponent(languagesParam)}`;
    //     }
    // }

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
