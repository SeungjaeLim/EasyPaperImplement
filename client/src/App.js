import React, { useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import DropdownField from './DropdownField';
import ImplementButton from './ImplementButton';
import PaperDetail from './PaperDetail';
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
    const papers = [
        { id: 1, title: "Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm", lastUpdated: "2017-12-05" },
        { id: 2, title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", lastUpdated: "2018-10-11" },
        { id: 3, title: "Attention Is All You Need", lastUpdated: "2017-06-12" },
        { id: 4, title: "U-Net: Convolutional Networks for Biomedical Image Segmentation", lastUpdated: "2015-05-18" },
        { id: 5, title: "GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium", lastUpdated: "2017-06-10" },
        { id: 6, title: "Neural Ordinary Differential Equations", lastUpdated: "2018-08-02" },
        { id: 7, title: "You Only Look Once: Unified, Real-Time Object Detection", lastUpdated: "2016-06-08" },
        { id: 8, title: "Deep Residual Learning for Image Recognition", lastUpdated: "2016-12-10" },
        { id: 9, title: "Playing Atari with Deep Reinforcement Learning", lastUpdated: "2013-12-19" },
        { id: 10, title: "VGG16 - Convolutional Network for Classification and Detection", lastUpdated: "2014-09-04" },
        { id: 11, title: "Proximal Policy Optimization Algorithms", lastUpdated: "2017-06-13" },
        { id: 12, title: "A Style-Based Generator Architecture for Generative Adversarial Networks", lastUpdated: "2018-12-12" },
        { id: 13, title: "MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications", lastUpdated: "2017-04-17" },
        { id: 14, title: "Mastering the Game of Go without Human Knowledge", lastUpdated: "2017-10-18" },
        { id: 15, title: "A Comprehensive Introduction to Differentiable Programming", lastUpdated: "2018-12-10" },
        { id: 16, title: "EfficientDet: Scalable and Efficient Object Detection", lastUpdated: "2019-11-28" },
        { id: 17, title: "WaveNet: A Generative Model for Raw Audio", lastUpdated: "2016-09-12" },
        { id: 18, title: "Mask R-CNN", lastUpdated: "2017-03-20" },
        { id: 19, title: "Graph Attention Networks", lastUpdated: "2017-10-04" },
        { id: 20, title: "The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks", lastUpdated: "2018-11-27" }
    ];
    

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
