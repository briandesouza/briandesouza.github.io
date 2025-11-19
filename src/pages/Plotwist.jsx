import React from 'react';
import { ArrowLeft, Layers, Zap, Shield, Smartphone, Search, RefreshCw, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

const Plotwist = () => {
    return (
        <div className="case-study plotwist-theme">
            {/* Hero */}
            <header className="cs-hero">
                <div className="container">
                    <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Home</Link>
                    <h1 className="cs-title">Plotwist</h1>
                    <p className="cs-subtitle">The TikTok of Interactive Fiction</p>
                    <div className="cs-tags">
                        <span>Product Strategy</span>
                        <span>AI Architecture</span>
                        <span>User Retention</span>
                    </div>
                </div>
                <div className="cs-hero-bg plotwist-bg-gradient"></div>
            </header>

            {/* Content */}
            <div className="container cs-content">
                <section className="cs-section">
                    <h2>Overview</h2>
                    <p>
                        Plotwist (formerly StoryPress) is a "Choose Your Own Adventure" platform re-imagined for the AI era.
                        It combines the immersive, infinite scroll of TikTok with the agency of interactive storytelling.
                        As the Founder & PM, I led the product from zero to TestFlight, solving critical user engagement challenges along the way.
                    </p>
                </section>

                <section className="cs-section grid-2">
                    <div className="cs-card">
                        <h3>The Problem</h3>
                        <p>
                            Traditional interactive fiction apps have high churn because the "creation" barrier is too high, and the "consumption" experience is static.
                            Users want to play stories instantly, but writing them takes weeks.
                        </p>
                    </div>
                    <div className="cs-card">
                        <h3>The Goal</h3>
                        <p>
                            Create an "Infinite Story" engine where users can consume interactive content with zero friction,
                            and create their own worlds with just a single sentence prompt.
                        </p>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Product Discovery & Iteration</h2>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <Search className="feature-icon" />
                            <h4>User Insight: "The Blank Page"</h4>
                            <p>
                                Early user tests showed that 80% of users dropped off during the "Create Story" flow.
                                They felt overwhelmed by writing options.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Target className="feature-icon" />
                            <h4>Pivot: AI as Co-Author</h4>
                            <p>
                                We shifted from a "Writing Tool" to a "Director's Chair". Users now provide a simple premise (e.g., "Cyberpunk Heist"),
                                and the AI generates the world, characters, and choices instantly.
                            </p>
                        </div>
                        <div className="feature-item">
                            <RefreshCw className="feature-icon" />
                            <h4>Iteration: The "Cold Start" Fix</h4>
                            <p>
                                New users didn't know what to play. We implemented a TikTok-style vertical feed of AI-generated "Seed Stories"
                                to reduce time-to-fun to under 3 seconds.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Technical Execution</h2>
                    <p>
                        To deliver this "magical" experience, we needed zero latency. I architected a "Deterministic Prefetch" system.
                    </p>
                    <div className="code-block">
                        <pre>
                            <code>
                                {`// The "Magic Trick": Generating the future before it happens
func schedulePrefetchIfNeeded(for options: [Option]) {
    // 1. We know the user MUST pick one of 2-3 options
    // 2. While they are reading/thinking, we pre-generate ALL paths
    // 3. Result: Instant transition when they tap.
    
    options.forEach { option in
        Task { await proxyService.prefetchScenario(option) }
    }
}`}
                            </code>
                        </pre>
                    </div>
                    <p className="caption">
                        This reduced perceived latency from ~5s (standard LLM generation) to 0s, crucial for maintaining flow.
                    </p>
                </section>

                <section className="cs-section">
                    <h2>Results</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">40%</span>
                            <span className="stat-label">Session Time Increase</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">0s</span>
                            <span className="stat-label">Perceived Latency</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">100%</span>
                            <span className="stat-label">AI Generated Content</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Plotwist;
