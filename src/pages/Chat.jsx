import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { inputDataState  } from '../store/atoms';

const Chat = () => {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/');
    };

    const [inputData, setInputData] = useRecoilState(inputDataState );

    const handleChange = (e) => {
        const value = e.target.value;
        setInputData(value);
    };

    return (
        <>
            <input type="text" className="msg-box" value={inputData} onChange={handleChange} ></input>
            <p>You typed: {inputData}</p>
        </>
    )
}

export default Chat;