import React, { useState } from 'react';
import settingsIcon from '../assets/svgs/filter_settings.svg';
import arrowIcon from '../assets/svgs/arrow_down.svg';
import Checkbox from './Checkbox.jsx';
import CATEGORIES from '../constants/categories.js';
import SearchField from './SearchField.jsx';
import BOOK_LANGUAGE from '../constants/book_language.js';

const Sidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState([]);
    const [isFilterExpanded, setIsFilterExpanded] = useState(true);
    const [expandedFilter, setExpandedFilter] = useState('');

    const handelFilterOnClick = (value, setValue, category) => {
        if (value?.includes(category)) {
            setValue((prevItems) =>
                prevItems.filter((item) => item !== category)
            );
        } else {
            setValue((prevState) => [...prevState, category]);
        }
    };
    const handelFilterExpansion = (filterName) => {
        console.log(expandedFilter, filterName);
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
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
            >
                <h3 className="font-medium">Filter</h3>
                <img src={settingsIcon} className="w-6 h-6" />
            </div>

            {/*Category Filter Div*/}
            <div
                className={`${isFilterExpanded ? 'opacity-100' : 'opacity-0'} transition-all space-y-4`}
            >
                <div
                    role="button"
                    className={`${expandedFilter === 'category' ? 'max-h-[800px]' : 'max-h-[52px]'} bg-background-default p-4 rounded-xl space-y-3 transition-all overflow-hidden`}
                    onClick={() => handelFilterExpansion('category')}
                >
                    <div className="flex items-center justify-between font-semibold text-primary-default">
                        <h3>By Category</h3>
                        <img
                            role="button"
                            src={arrowIcon}
                            className={`w-5 h-5 transition-all ${expandedFilter === 'category' && 'rotate-180'}`}
                        />
                    </div>
                    <div className="space-y-2">
                        {CATEGORIES.map((category, index) => (
                            <Checkbox
                                key={index}
                                label={category}
                                isChecked={selectedCategory?.includes(category)}
                                onCLick={() =>
                                    handelFilterOnClick(
                                        selectedLanguage,
                                        setSelectedLanguage,
                                        category
                                    )
                                }
                            />
                        ))}
                        <div className="pt-4">
                            <SearchField
                                width={100}
                                height="h-8"
                                placeholder="Search Category..."
                                isMiniField={true}
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
                        <h3>By Language</h3>
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
                                onCLick={() =>
                                    handelFilterOnClick(
                                        selectedLanguage,
                                        setSelectedLanguage,
                                        language.value
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
