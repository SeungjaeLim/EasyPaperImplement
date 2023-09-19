// src/App.js

import React, { useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import DropdownField from './DropdownField';
import ImplementButton from './ImplementButton';
import './App.css';

function App() {
    const [title, setTitle] = useState('');
    const [pseudoCode, setPseudoCode] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('Python');
    const [result, setResult] = useState('');

    const handleImplement = () => {
        setResult(`Converted pseudo code for paper "${title}" to ${language}.`);
    };

    return (
        <div className="app">
            <h1>Easy Paper Implement</h1>
            <InputField label="Paper Title" value={title} onChange={setTitle} />
            <TextareaField label="Pseudo Code" value={pseudoCode} onChange={setPseudoCode} />
            <TextareaField label="Paper Description" value={description} onChange={setDescription} />
            <DropdownField label="Select Language" value={language} onChange={setLanguage} options={['Python', 'C++', 'Java', 'Go', 'Rust']} />
            <ImplementButton onClick={handleImplement} />
            <div className="result">{result}</div>
        </div>
    );
}

export default App;
