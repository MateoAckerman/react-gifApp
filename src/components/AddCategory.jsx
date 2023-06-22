import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    // export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueTrim = inputValue.trim();

        if (inputValueTrim.length <= 1) return;
        onNewCategory(inputValueTrim);
        setInputValue('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            // onChange={e => setInputValue(e.target.value)}
            />
        </form>

    )
}
