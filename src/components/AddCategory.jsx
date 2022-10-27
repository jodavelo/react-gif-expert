import { useState } from "react";

export const AddCategory = ( { onNewValue } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log(inputValue);
        if(inputValue.trim().length < 1) return;
        onNewValue(inputValue.trim());
        // setCategories( categories => [inputValue, ...categories] );
        setInputValue('');
    };

    return (
        <form onSubmit={ (event) => onSubmit( event ) }>
            <input 
                type="text" 
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        
    );
}