import { useState } from "react"

export const AddCategory = ({ onAddCategories }) => {  

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue( e.target.value );
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1){
            return;
        }

        // onSetCategories( category => [...category, inputValue] );
        onAddCategories( inputValue.trim() );
        setInputValue('');
        
    };

  return (
    <>  
        <form onSubmit={ onSubmit }>
          <input
              type="text"
              placeholder="Buscar Gifs"
              value={inputValue}
              onChange={onInputChange}
              className='input-value'
          />
        </form>  
    </>
  )
}
