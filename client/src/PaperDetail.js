import React from 'react';
import './PaperDetail.css';

function PaperDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const title = urlParams.get('title');
    const lastUpdated = urlParams.get('lastUpdated');

    return (
        <div className="paper-detail">
            <h1>{title}</h1>
            <p>Last Updated: {lastUpdated}</p>
            <div className="implemented-code">
                {/* This is where the implemented code will go */}
                {/* It's currently empty and can be filled later */}
            </div>
        </div>
    );
}

export default PaperDetail;
