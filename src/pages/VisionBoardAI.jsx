
import React from 'react';
import { ArrowLeft, Sparkles, Lock, Zap, Eye, Wand2, Smartphone, Cloud, Database, Code, Shirt, Home as HomeIcon, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

const VisionBoardAI = () => {
    return (
        <div className="case-study visionboard-theme">
            {/* Hero */}
            <header className="cs-hero">
                <div className="container">
                    <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to Home</Link>
                    <h1 className="cs-title">VisionBoardAI</h1>
                    <p className="cs-subtitle">Helping people visualize their future with personalized AI imagery. See yourself in your dream life.</p>
                    <div className="cs-tags">
                        <span>0-to-1 Product</span>
                        <span>iOS Development</span>
                        <span>TestFlight Beta</span>
                    </div>
                    <div className="cs-hero-cover">
                        <img src="/img/visionboard-cover.png" alt="VisionBoardAI preview" />
                    </div>
                </div>
                <div className="cs-hero-bg visionboard-bg-gradient"></div>
            </header>

            {/* Content */}
            <div className="container cs-content">

                {/* The Spark / Narrative */}
                <section className="cs-section">
                    <h2>The Spark</h2>
                    <p className="editorial-text">
                        It started with a simple observation: my girlfriend and her friends were spending hours on Pinterest,
                        curating "vision boards" of their dream lives. But there was a disconnect. They were pinning photos of
                        <em>other people's</em> lives—random models in Paris, strangers in luxury homes.
                    </p>
                    <div className="editorial-quote">
                        "I want to see ME in that apartment. I want to see what I would look like in that dress."
                    </div>
                    <p className="editorial-text">
                        That was the lightbulb moment. Manifestation isn't about looking at pretty pictures; it's about
                        <em>believing</em> you can be there. I built VisionBoardAI to bridge that gap using generative AI,
                        allowing users to place their own faces into their dream scenarios instantly.
                    </p>
                </section>

                {/* Target Audience / Personas */}
                <section className="cs-section">
                    <h2>Target Audience</h2>
                    <div className="grid-2">
                        <div className="persona-card">
                            <div className="persona-header">
                                <div className="persona-icon">
                                    <Heart size={24} />
                                </div>
                                <div className="persona-name">The Manifestation Enthusiast</div>
                            </div>
                            <div className="persona-detail">
                                <strong>Who:</strong>
                                <span>Women (22-40) who actively practice manifestation, journaling, or yoga.</span>
                            </div>
                            <div className="persona-detail">
                                <strong>Behavior:</strong>
                                <span>Visual learner. Uses Pinterest daily. deeply values privacy and personal growth.</span>
                            </div>
                            <div className="persona-detail">
                                <strong>Pain:</strong>
                                <span>"Pinterest boards feel impersonal. I can't visualize <em>myself</em> achieving these goals."</span>
                            </div>
                        </div>

                        <div className="persona-card">
                            <div className="persona-header">
                                <div className="persona-icon">
                                    <Shirt size={24} />
                                </div>
                                <div className="persona-name">The Style Explorer</div>
                            </div>
                            <div className="persona-detail">
                                <strong>Who:</strong>
                                <span>Fashion-conscious users wanting to experiment with new looks.</span>
                            </div>
                            <div className="persona-detail">
                                <strong>Behavior:</strong>
                                <span>Wants to try trends without buying fast fashion.</span>
                            </div>
                            <div className="persona-detail">
                                <strong>Pain:</strong>
                                <span>"I don't know if this style suits me until I buy it."</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Bento */}
                <section className="cs-section">
                    <h2>The Solution</h2>
                    <div className="bento-grid">
                        <div className="bento-item large">
                            <div className="bento-icon">
                                <Eye size={24} />
                            </div>
                            <h3>Manifestation 2.0</h3>
                            <p>
                                VisionBoardAI replaces generic Pinterest photos with hyper-realistic AI imagery of YOU.
                                See your actual face in your dream home, wearing designer clothes, or on vacation.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Lock size={24} />
                            </div>
                            <h3>Privacy First</h3>
                            <p>
                                Vision boards are intimate. All photos are processed securely, and we never train on user data.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Problem / Solution Comparison */}
                <section className="cs-section">
                    <h2>The Problem</h2>
                    <div className="comparison-grid">
                        <div className="comparison-col">
                            <h3 className="pain">The Old Way</h3>
                            <ul className="comparison-list">
                                <li>Cutting out magazine clippings</li>
                                <li>Pinterest boards of strangers</li>
                                <li>"That's not me, it's just a model"</li>
                                <li>Hard to visualize the feeling</li>
                            </ul>
                        </div>
                        <div className="comparison-col">
                            <h3 className="solution">VisionBoardAI</h3>
                            <ul className="comparison-list">
                                <li>You are the main character</li>
                                <li>Try on outfits instantly</li>
                                <li>Place yourself in any location</li>
                                <li>Edit your dream home with words</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Core Features Bento */}
                <section className="cs-section">
                    <h2>Core Features</h2>
                    <div className="bento-grid">
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Sparkles size={24} />
                            </div>
                            <h3>Future Self Avatar</h3>
                            <p>
                                Upload 3 selfies to train a personalized model. The app generates an idealized "Future Self" to use in every scene.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Wand2 size={24} />
                            </div>
                            <h3>"Add Me" Tool</h3>
                            <p>
                                Take any photo—a luxury hotel, a red carpet event—and seamlessly insert your Future Self into it.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Shirt size={24} />
                            </div>
                            <h3>Virtual Wardrobe</h3>
                            <p>
                                Try on high-fashion outfits without shopping. Visualize your style evolution instantly.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <HomeIcon size={24} />
                            </div>
                            <h3>Magic Home Edit</h3>
                            <p>
                                "Make the couch velvet green." Use natural language to design your dream interior space.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="cs-section">
                    <h2>Tech Stack</h2>
                    <p>Heavy AI integration with a native iOS feel.</p>
                    <div className="tech-stack-grid">
                        <div className="tech-item">
                            <Code className="tech-icon" size={24} />
                            <div className="tech-name">SwiftUI</div>
                        </div>
                        <div className="tech-item">
                            <Cloud className="tech-icon" size={24} />
                            <div className="tech-name">Fal.ai</div>
                        </div>
                        <div className="tech-item">
                            <Zap className="tech-icon" size={24} />
                            <div className="tech-name">Replicate</div>
                        </div>
                        <div className="tech-item">
                            <Database className="tech-icon" size={24} />
                            <div className="tech-name">Firebase</div>
                        </div>
                        <div className="tech-item">
                            <Smartphone className="tech-icon" size={24} />
                            <div className="tech-name">CoreML</div>
                        </div>
                    </div>
                </section>

                {/* Experiments */}
                <section className="cs-section">
                    <h2>Active Experiments</h2>
                    <p className="editorial-text" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
                        Validating core loops before scaling. Current focus areas:
                    </p>
                    <div className="bento-grid-3">
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Zap size={24} />
                            </div>
                            <h3>Onboarding Flow</h3>
                            <p>
                                Testing if users convert better when starting with "Future Self" creation vs. browsing templates.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <HomeIcon size={24} />
                            </div>
                            <h3>Edit Depth</h3>
                            <p>
                                Do users want simple presets or full natural language control for home editing? Testing both.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Sparkles size={24} />
                            </div>
                            <h3>Weekly Refresh</h3>
                            <p>
                                Notifications to "refresh your vision" every Sunday. Testing retention impact.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VisionBoardAI;
