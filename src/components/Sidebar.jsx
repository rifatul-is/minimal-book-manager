import React, { useState } from 'react';
import settingsIcon from '../assets/svgs/filter_settings.svg';
import arrowIcon from '../assets/svgs/arrow_down.svg';
import Checkbox from './Checkbox.jsx';
import CATEGORIES from '../constants/categories.js';
import SearchField from './SearchField.jsx';
import BOOK_LANGUAGE from '../constants/book_language.js';
import { useLayoutContext } from '../context/layout_context.js';

const Sidebar = () => {
    const [expandedFilter, setExpandedFilter] = useState('');

    const {
        selectedGenre,
        setSelectedGenre,
        selectedLanguage,
        setSelectedLanguage
    } = useLayoutContext();

    const resetFilters = () => {
        setSelectedGenre('');
        setSelectedLanguage([]);
    };
    const handleLanguageFilter = (value, setValue, category) => {
        if (value?.includes(category)) {
            setValue((prevItems) =>
                prevItems.filter((item) => item !== category)
            );
        } else {
            setValue((prevState) => [...prevState, category]);
        }
    };
    const handelFilterExpansion = (filterName) => {
        console.log(filterName);
        if (expandedFilter?.includes(filterName)) {
            setExpandedFilter('');
        } else {
            setExpandedFilter(filterName);
        }
    };
    return (
        <div className="space-y-4">
            <div
                role="button"
                className="p-4 flex justify-between items-start bg-primary-default text-white rounded-xl"
                onClick={resetFilters}
            >
                <h3 className="font-medium">Clear Filters</h3>
                <img src={settingsIcon} className="w-6 h-6" />
            </div>

            {/*Category Filter Div*/}
            <div className={`transition-all space-y-4`}>
                <div
                    role="button"
                    className={`${expandedFilter === 'genre' ? 'max-h-[800px]' : 'max-h-[52px]'} bg-background-default p-4 rounded-xl space-y-3 transition-all overflow-hidden`}
                    onClick={() => handelFilterExpansion('genre')}
                >
                    <div className="flex items-center justify-between font-semibold text-primary-default">
                        <h3>Quick Genres</h3>
                        <img
                            role="button"
                            src={arrowIcon}
                            className={`w-5 h-5 transition-all ${expandedFilter === 'genre' && 'rotate-180'}`}
                        />
                    </div>
                    <div className="space-y-2">
                        {CATEGORIES.map((category, index) => (
                            <Checkbox
                                key={index}
                                label={category}
                                isChecked={selectedGenre?.includes(category)}
                                onCLick={(event) => {
                                    event.stopPropagation();
                                    if (selectedGenre === category) {
                                        setSelectedGenre('');
                                    } else {
                                        setSelectedGenre(category);
                                    }
                                }}
                            />
                        ))}
                        <div className="pt-4">
                            <SearchField
                                value={
                                    CATEGORIES.includes(selectedGenre)
                                        ? ''
                                        : selectedGenre
                                }
                                width={100}
                                height="h-8"
                                placeholder="Search Other..."
                                isMiniField={true}
                                onChange={(event) => {
                                    event.stopPropagation();
                                    setSelectedGenre(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/*Language Filter Div*/}
                <div
                    role="button"
                    className={`${expandedFilter === 'language' ? 'max-h-[800px]' : 'max-h-[52px]'} bg-background-default p-4 rounded-xl space-y-3 transition-all overflow-hidden`}
                    onClick={() => handelFilterExpansion('language')}
                >
                    <div className="flex items-center justify-between font-semibold text-primary-default">
                        <h3>Languages</h3>
                        <img
                            role="button"
                            src={arrowIcon}
                            className={`w-5 h-5 transition-all ${expandedFilter === 'language' && 'rotate-180'}`}
                        />
                    </div>
                    <div className="space-y-2">
                        {BOOK_LANGUAGE.map((language, index) => (
                            <Checkbox
                                key={index}
                                label={language.name}
                                isChecked={selectedLanguage?.includes(
                                    language.value
                                )}
                                onCLick={(event) => {
                                    event.stopPropagation();
                                    handleLanguageFilter(
                                        selectedLanguage,
                                        setSelectedLanguage,
                                        language.value
                                    );
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
