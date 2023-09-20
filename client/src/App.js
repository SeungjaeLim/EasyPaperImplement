import React, { useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import DropdownField from './DropdownField';
import ImplementButton from './ImplementButton';
import './App.css';
import TextareaAutosize from 'react-textarea-autosize';

function App() {
    const [title, setTitle] = useState('');
    const [pseudoCode, setPseudoCode] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('Python');
    const [result, setResult] = useState('');
    const [currentTab, setCurrentTab] = useState('main');

    // Sample data for "Projects" tab
    const papers = Array(100).fill().map((_, i) => ({
        id: i + 1,
        title: `Paper ${i + 1}`,
        lastUpdated: new Date().toISOString().slice(0, 10)
    }));

    const handleImplement = () => {
        setResult(`Converted pseudo code for paper "${title}" to ${language}.`);
    };

    return (
        <div className="app">
            <div className="navigation">
                <button className={currentTab === 'main' ? 'active' : ''} onClick={() => setCurrentTab('main')}>Main</button>
                <button className={currentTab === 'projects' ? 'active' : ''} onClick={() => setCurrentTab('projects')}>Projects</button>
                <button className={currentTab === 'about' ? 'active' : ''} onClick={() => setCurrentTab('about')}>About</button>
            </div>


            {currentTab === 'main' && (
                <>
                    <h1>Easy Paper Implement</h1>
                    <InputField label="Paper Title" value={title} onChange={setTitle} />
                    <div className="textareaField">
                        <label htmlFor="pseudoCode">Pseudo Code</label>
                        <TextareaAutosize
                            minRows={5}
                            maxRows={30}
                            id="pseudoCode"
                            value={pseudoCode}
                            onChange={(e) => setPseudoCode(e.target.value)}
                            className="textarea"
                        />
                    </div>

                    <TextareaField label="Paper Description" value={description} onChange={setDescription} />
                    <DropdownField label="Select Language" value={language} onChange={setLanguage} options={['Python', 'C++', 'Java', 'Go', 'Rust']} />
                    <ImplementButton onClick={handleImplement} />
                    <div className="result">{result}</div>
                </>
            )}

            {currentTab === 'projects' && (
                <div className="projects">
                    <h2>Implemented Papers</h2>
                    <div className="papers-grid">
                        {papers.map(paper => (
                            <div key={paper.id} className="paper-item">
                                <div className="paper-index">{paper.id}</div>
                                <div className="paper-title">{paper.title}</div>
                                <div className="paper-last-updated">{paper.lastUpdated}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {currentTab === 'about' && (
                <div className="about">
                    <h2>Seungjae Lim</h2>
                    {/* GitHub Direct Button */}
                    <a href="https://github.com/SeungjaeLim" target="_blank" rel="noopener noreferrer" className="github-button">
                        GitHub Profile
                    </a>
                    <p>
                        I'm interested in machine learning in general. Recently, I'm interested in learning about ML systems, that can serve hyperscale AI models quickly and efficiently when applied to industry.
                        I am a person who likes to reach new environments, have new experiences, and study new things. I want to live a life where I encounter a lot of various things.
                    </p>
                    
                    
                </div>
            )}

        </div>
    );
}

export default App;
