import React from 'react';
import { useRecoilState } from 'recoil';
import { inputDataState  } from '../assets/js/atoms';

const Chat = () => {
    const [inputData, setInputData] = useRecoilState(inputDataState );

    const handleChange = (e) => {
        const value = e.target.value;
        setInputData(value);
        localStorage.setItem('inputData', value);
    };

    return (
        <>
            <input type="text" className="msg-box" value={inputData} onChange={handleChange} ></input>
            <p>You typed: {inputData}</p>
        </>
    )
}

export default Chat;