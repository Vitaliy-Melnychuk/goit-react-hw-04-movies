import {useState} from 'react';
// import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

export function SearchForm({onSubmit}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = evt => {
        setInputValue(evt.currentTarget.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className={s.SearchForm}>
            <input
                type="text"
                className={s.SearchFormInput}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search movies"
            />
            <button type="submit" className={s.SearchFormButton}>Search</button>
        </form>
    );
}

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };