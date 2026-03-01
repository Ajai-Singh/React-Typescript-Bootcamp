import React from 'react';
import './styles.css'
import { useRef } from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAddTodo }: Props) => {
    //Now we know this is a HTMLInputElement<> This is the type of input element because of the <input> below
   const inputRef = useRef<HTMLInputElement>(null);
   
   return ( <form className='input' onSubmit={(e) => {
   handleAddTodo(e);
   //blur takes away the focus from the input field on submit
   //? gets added by default because its not sure if its optional or anything will be added or not
   inputRef.current?.blur();
   }}>
        <input 
            ref={inputRef}
            type="input" value={todo}
            onChange={(e) => setTodo(e.target.value)}
        
        
        placeholder="Enter a task" className="inputField"></input>
        <button type="submit"className="inputSubmit">
            Go
        </button>
    </form>

    )
};

export default InputField;