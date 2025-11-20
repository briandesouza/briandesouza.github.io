import React from 'react';
import { ArrowLeft, Sparkles, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

const VisionBoardAI = () => {
    return (
        <div className="case-study visionboard-theme">
            {/* Hero */}
            <header className="cs-hero">
                <div className="container">
                    <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Home</Link>
                    <h1 className="cs-title">VisionBoardAI</h1>
                    <p className="cs-subtitle">Manifest Your Future with AI</p>
                    <div className="cs-tags">
                        <span>Solo Builder</span>
                        <span>AI UX</span>
                        <span>TestFlight Build</span>
                    </div>
                    <div className="cs-hero-cover">
                        <img src="/img/visionboard-cover.png" alt="VisionBoardAI preview" />
                    </div>
                </div>
                <div className="cs-hero-bg visionboard-bg-gradient"></div>
            </header>

            {/* Content */}
            <div className="container cs-content">
                <section className="cs-section">
                    <h2>Overview</h2>
                    <p>
                        VisionBoardAI is an iOS app I’m building solo to help people picture their future selves. It isn’t released yet—
                        I’m in a tight TestFlight loop focused on validating the core job: turn one goal statement and a selfie into a believable “future snapshot”
                        in under a minute.
                    </p>
                </section>

                <section className="cs-section">
                    <h2>Problem & Idea Validation</h2>
                    <p>
                        Visualization junkies told me they were tired of Googling stock photos that never looked like them.
                        I interviewed 20 life coaches, career switchers, and wellness creators, then shipped a clickable prototype to a private Instagram group.
                        Three hypotheses emerged:
                    </p>
                    <ul>
                        <li>Personal likeness beats generic aspiration—seeing <em>your</em> face is the motivating moment.</li>
                        <li>People don’t want to write prompts; they want to describe feelings, outfits, or venues.</li>
                        <li>Trust is non-negotiable—selfies and goal statements should stay on-device whenever possible.</li>
                    </ul>
                    <p>
                        Every TestFlight build is measured against those hypotheses. If I can’t make someone smile when they load their first board,
                        the feature ships back to the drawing board.
                    </p>
                </section>

                <section className="cs-section grid-2">
                    <div className="cs-card">
                        <h3>Target Customers</h3>
                        <p>
                            <strong>Identity-driven goal setters</strong> (24-35) use journaling, therapy, or coaching to stay accountable.
                            They’re craving custom imagery for public speaking, creative careers, or wellness breakthroughs.
                        </p>
                        <p>
                            <strong>Wellness creators</strong> run cohorts or retreats and want quick artifacts for clients without sending their data to random servers.
                        </p>
                    </div>
                    <div className="cs-card">
                        <h3>Validation Signals</h3>
                        <ul>
                            <li>80% of testers completed a board after seeing themselves in the mockups.</li>
                            <li>“Can I remix this weekly?” is the most common request, guiding regeneration features.</li>
                            <li>Coaches continue to DM me for early access, so I’m building a facilitation mode for them.</li>
                        </ul>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Building Solo with Agentic AI</h2>
                    <p>
                        There’s no external team. I use agentic tooling to keep velocity high and learn new model capabilities along the way:
                    </p>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <Sparkles className="feature-icon" />
                            <h4>Cursor for pairing</h4>
                            <p>
                                Handles SwiftUI scaffolding, Firebase schema tweaks, and quick refactors so I stay focused on user problems instead of boilerplate.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Zap className="feature-icon" />
                            <h4>Claude Code for reasoning</h4>
                            <p>
                                Helps me rewrite research notes into experiment plans, plan flows, and pressure-test prompts before they hit the Worker proxy.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Lock className="feature-icon" />
                            <h4>Codex for automation</h4>
                            <p>
                                Keeps Cloudflare Worker routes, Fal configs, and Firebase security rules in sync so I can ship safely without extra humans.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Architecture & AI Stack</h2>
                    <ul>
                        <li><strong>Firebase + Cloudflare Worker:</strong> Firestore/Storage handle board data while a Worker injects Firebase auth into every Fal call so API keys stay server-side.</li>
                        <li><strong>Fal nano-banana-edit:</strong> Default cover engine that blends up to 10 board images + the user’s selfie into a new scene (see <code>CloudflareWorkers/src/fal-proxy.ts</code>).</li>
                        <li><strong>Seedream v4 edit:</strong> Used for high-gloss hero shots when users request 4K ratios; configurable directly from <code>model-config.ts</code> without shipping a new binary.</li>
                        <li><strong>Virtual try-on endpoint:</strong> Powers the wardrobe/“Add Me” experiments so outfits swap locally before syncing to Firebase.</li>
                        <li><strong>VisionLoadingExperience:</strong> Reusable SwiftUI component that keeps every AI wait state consistent (in <code>Views/Components/VisionLoading</code>).</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Current Focus & Next Experiments</h2>
                    <p>
                        Success right now is learning fast, not vanity metrics. The backlog is prioritized around:
                    </p>
                    <ul>
                        <li>Helping users describe feelings instead of prompts (guided chips + template language).</li>
                        <li>Surfacing privacy cues before uploads so people know everything is processed locally.</li>
                        <li>Scheduling weekly “remix” nudges that regenerate boards with fresh styles.</li>
                    </ul>
                    <p>
                        Once those loops feel tight, I’ll open a larger beta and layer on pricing experiments.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default VisionBoardAI;
