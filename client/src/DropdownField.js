// src/DropdownField.js

import React from 'react';

function DropdownField({ label, value, onChange, options }) {
    return (
        <div className="dropdownField">
            <label>{label}</label>
            <select value={value} onChange={e => onChange(e.target.value)}>
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );
}

export default DropdownField;
