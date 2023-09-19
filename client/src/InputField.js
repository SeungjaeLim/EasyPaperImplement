// src/InputField.js

import React from 'react';

function InputField({ label, value, onChange }) {
    return (
        <div className="inputField">
            <label>{label}</label>
            <input type="text" value={value} onChange={e => onChange(e.target.value)} />
        </div>
    );
}

export default InputField;
