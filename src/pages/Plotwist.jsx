import React from 'react';
import { ArrowLeft, Compass, Layers, Target, RefreshCw, Sparkles, Smartphone, Zap, Database, Cloud, Code, Users, MessageSquare, BookOpen, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

const Plotwist = () => {
    return (
        <div className="case-study plotwist-theme">
            {/* Hero */}
            <header className="cs-hero">
                <div className="container">
                    <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to Home</Link>
                    <h1 className="cs-title">Plotwist</h1>
                    <p className="cs-subtitle">Interactive fiction designed for the TikTok generation. Vertical scrolling, rich media, and instant gratification.</p>
                    <div className="cs-tags">
                        <span>0-to-1 Product</span>
                        <span>iOS Development</span>
                        <span>TestFlight Beta</span>
                    </div>
                    <div className="cs-hero-cover">
                        <img src="/img/plotwist-cover.png" alt="Plotwist preview" />
                    </div>
                </div>
                <div className="cs-hero-bg plotwist-bg-gradient"></div>
            </header>

            {/* Content */}
            <div className="container cs-content">

                {/* The Spark / Narrative */}
                <section className="cs-section">
                    <h2>The Spark</h2>
                    <p className="editorial-text">
                        I've always loved branching narratives—games like <em>Fallout: New Vegas</em> where your choices genuinely matter.
                        But on mobile, the genre felt stuck in 2010. Apps like <em>Episode</em> or <em>Choices</em> felt clunky,
                        with slow loading screens between every decision and art styles that felt generic.
                    </p>
                    <div className="editorial-quote">
                        "Why does reading a story on my phone feel like browsing a PDF, when it should feel like playing a game?"
                    </div>
                    <p className="editorial-text">
                        I built Plotwist to bridge that gap. I wanted to create a platform where stories flow as smoothly as a TikTok feed,
                        where choices are instant, and where anyone can create a complex branching narrative without writing a single line of code.
                    </p>
                </section>

                {/* Target Audience / Personas */}
                <section className="cs-section">
                    <h2>Target Audience</h2>
                    <div className="grid-2">
                        <div className="persona-card">
                            <div className="persona-header">
                                <div className="persona-icon">
                                    <Smartphone size={24} />
                                </div>
                                <div className="persona-name">The Story Snacker</div>
                            </div>
                            <div className="persona-detail">
                                <strong>Who:</strong>
                                <span>Gen Z (18-24), grew up on Webtoons and mobile games.</span>
                            </div>
                            <div className="persona-detail">
                                <strong>Behavior:</strong>
                                <span>Reads in 5-minute bursts. Hates friction. Will drop an app if it doesn't load instantly.</span>
                            </div>
                            <div className="persona-detail">
                                <strong>Pain:</strong>
                                <span>Existing IF apps feel slow and dated. "I don't want to read a wall of text."</span>
                            </div>
                        </div>

                        <div className="persona-card">
                            <div className="persona-header">
                                <div className="persona-icon">
                                    <BookOpen size={24} />
                                </div>
                                <div className="persona-name">The World Builder</div>
                            </div>
                            <div className="persona-detail">
                                <strong>Who:</strong>
                                <span>Aspiring writers, D&D DMs, fanfiction creators.</span>
                            </div>
                            <div className="persona-detail">
                                <strong>Behavior:</strong>
                                <span>Has amazing ideas but gets stuck on the technical execution of branching logic.</span>
                            </div>
                            <div className="persona-detail">
                                <strong>Pain:</strong>
                                <span>Tools like Twine are too technical. "I just want to write, not debug code."</span>
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
                                <Zap size={24} />
                            </div>
                            <h3>Zero-Latency Reading</h3>
                            <p>
                                Plotwist uses a custom prefetching engine. While you read one node, the app generates the next 3 possible branches in the background.
                                The result? Zero loading screens. Choices feel instant.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Users size={24} />
                            </div>
                            <h3>Solo Built</h3>
                            <p>
                                I'm handling everything: user research, product strategy, iOS engineering, and backend infrastructure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Problem / Solution Comparison */}
                <section className="cs-section">
                    <h2>The Problem</h2>
                    <div className="comparison-grid">
                        <div className="comparison-col">
                            <h3 className="pain">Old School IF</h3>
                            <ul className="comparison-list">
                                <li>Feels like reading a PDF with links</li>
                                <li>Slow, clunky web interfaces</li>
                                <li>Walls of text, no visuals</li>
                                <li>Hard to create without coding</li>
                            </ul>
                        </div>
                        <div className="comparison-col">
                            <h3 className="solution">Plotwist</h3>
                            <ul className="comparison-list">
                                <li>Native iOS gestures & haptics</li>
                                <li>Instant choice loading (prefetching)</li>
                                <li>Immersive audio & AI imagery</li>
                                <li>No-code creator tools</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="cs-section">
                    <h2>Tech Stack</h2>
                    <p>Built for speed and native feel.</p>
                    <div className="tech-stack-grid">
                        <div className="tech-item">
                            <Code className="tech-icon" size={24} />
                            <div className="tech-name">SwiftUI</div>
                        </div>
                        <div className="tech-item">
                            <Zap className="tech-icon" size={24} />
                            <div className="tech-name">Combine</div>
                        </div>
                        <div className="tech-item">
                            <Database className="tech-icon" size={24} />
                            <div className="tech-name">Firebase</div>
                        </div>
                        <div className="tech-item">
                            <Cloud className="tech-icon" size={24} />
                            <div className="tech-name">Cloudflare Workers</div>
                        </div>
                        <div className="tech-item">
                            <Sparkles className="tech-icon" size={24} />
                            <div className="tech-name">OpenRouter AI</div>
                        </div>
                    </div>
                </section>

                {/* Key Features Bento */}
                <section className="cs-section">
                    <h2>Core Features</h2>
                    <div className="bento-grid-3">
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Smartphone size={24} />
                            </div>
                            <h3>Vertical Scroll</h3>
                            <p>
                                A familiar, TikTok-style interface makes reading feel modern and intuitive.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Sparkles size={24} />
                            </div>
                            <h3>AI Asset Gen</h3>
                            <p>
                                Stories automatically get cover art and scene visuals generated by custom Stable Diffusion models.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <MessageSquare size={24} />
                            </div>
                            <h3>Branching Logic</h3>
                            <p>
                                Complex state tracking (inventory, relationships) hidden behind a simple swipe interface.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experiments */}
                <section className="cs-section">
                    <h2>Current Experiments</h2>
                    <p className="editorial-text" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
                        I'm constantly testing hypotheses to improve engagement. Currently running A/B tests on:
                    </p>
                    <div className="bento-grid">
                        <div className="bento-item">
                            <div className="bento-icon">
                                <Target size={24} />
                            </div>
                            <h3>Creator Onboarding</h3>
                            <p>
                                Testing guided templates vs. free-form prompts. Hypothesis: constraints spark more creativity.
                            </p>
                        </div>
                        <div className="bento-item">
                            <div className="bento-icon">
                                <RefreshCw size={24} />
                            </div>
                            <h3>Discovery Feed</h3>
                            <p>
                                A/B testing algorithmic feed vs. curated collections to see which drives higher read-through rates.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Plotwist;
