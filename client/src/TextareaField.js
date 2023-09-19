// src/TextareaField.js

import React from 'react';

function TextareaField({ label, value, onChange }) {
    return (
        <div className="textareaField">
            <label>{label}</label>
            <textarea value={value} onChange={e => onChange(e.target.value)}></textarea>
        </div>
    );
}

export default TextareaField;
