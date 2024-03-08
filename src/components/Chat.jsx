import React from 'react';
import { useRecoilState } from 'recoil';
import { inputValueState } from '../assets/js/atoms';

const Chat = () => {
    const [inputValue, setInputValue] = useRecoilState(inputValueState);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <input type="text" className="msg-box" value={inputValue} onChange={handleChange} ></input>
            <p>You typed: {inputValue}</p>
        </>
    )
}

export default Chat;