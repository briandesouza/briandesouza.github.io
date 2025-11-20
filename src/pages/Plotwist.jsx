import React from 'react';
import { ArrowLeft, Compass, Layers, Target, RefreshCw, Sparkles } from 'lucide-react';
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
                    <p className="cs-subtitle">Interactive fiction built for the TikTok era</p>
                    <div className="cs-tags">
                        <span>Solo Builder</span>
                        <span>AI Storytelling</span>
                        <span>TestFlight Build</span>
                    </div>
                    <div className="cs-hero-cover">
                        <img src="/img/plotwist-cover.png" alt="Plotwist preview" />
                    </div>
                </div>
                <div className="cs-hero-bg plotwist-bg-gradient"></div>
            </header>

            {/* Content */}
            <div className="container cs-content">
                <section className="cs-section">
                    <h2>Overview</h2>
                    <p>
                        Plotwist (formerly StoryPress) is an AI-powered “choose your own adventure” experience I’m building alone.
                        The goal: ship an infinite vertical feed of interactive stories that feels as snackable as TikTok but as immersive as a tabletop RPG.
                        It’s not launched publicly yet—I’m iterating with TestFlight cohorts, a waitlist of 3,200 people, and a healthy dose of agentic AI tooling.
                    </p>
                </section>

                <section className="cs-section">
                    <h2>Problem & Target Players</h2>
                    <div className="grid-2">
                        <div className="cs-card">
                            <h3>Problem statement</h3>
                            <p>
                                Interactive fiction apps have two huge cliffs: creating stories takes forever, and consuming them feels like reading a PDF.
                                Players expect immediacy, rich media, and personalization—none of which traditional choose-your-own-adventure tools deliver.
                            </p>
                        </div>
                        <div className="cs-card">
                            <h3>Who I’m building for</h3>
                            <ul>
                                <li><strong>Story snackers</strong>: Gen Z gamers who want something deeper than scrolling but shorter than a console session.</li>
                                <li><strong>Micro-creators</strong>: writers who have ideas but not the time or technical chops to build branching narratives.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Idea Validation & Research</h2>
                    <p>
                        I spoke with 30 would-be creators and ran paper prototypes with story fans. The early insights shaped the MVP:
                    </p>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <Compass className="feature-icon" />
                            <h4>Scrolling is the default</h4>
                            <p>
                                People instinctively swipe, so I leaned into a vertical feed layout. No tutorials required.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Layers className="feature-icon" />
                            <h4>Speed to fun</h4>
                            <p>
                                “Let me describe the vibe and get playing instantly.” That killed granular character builders and unlocked one-tap world generation.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Target className="feature-icon" />
                            <h4>Make AI a co-director</h4>
                            <p>
                                Testers didn’t want to write paragraphs; they wanted to steer. So Plotwist reframed creation as directing: set the premise, pick a tone, roll with the AI.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Building Solo with Agentic AI</h2>
                    <p>
                        Like VisionBoardAI, Plotwist is built without a traditional team. I rely on AI copilots to stay unblocked:
                    </p>
                    <ul>
                        <li><strong>Cursor</strong> keeps the SwiftUI/Combine codebase tidy, generates Firestore models, and helps me iterate on StoryPlayerCore.</li>
                        <li><strong>Claude Code</strong> reviews UX flows, rewrites prompts for the Worker, and sanity-checks RICE prioritization docs.</li>
                        <li><strong>Codex</strong> automates Cloudflare Worker deployments and analytics tagging, so I spend more time in TestFlight than in terminals.</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Architecture & AI Stack</h2>
                    <ul>
                        <li><strong>Deterministic prefetcher:</strong> While a player is reading, the app pre-generates every possible branch (text, cover art, and ElevenLabs narration) to keep perceived latency at 0s.</li>
                        <li><strong>Cloudflare Worker proxy:</strong> Routes all LLM and media requests (OpenRouter/Fireworks for text, Fal for art, ElevenLabs for audio) so API keys never ship with the app.</li>
                        <li><strong>FeedAlgorithmManager:</strong> Blends embeddings with behavioral signals to recommend stories and solve cold start without hand-curated playlists.</li>
                        <li><strong>Text-to-image & text-to-audio chops:</strong> I use Fal + Replicate variants for cinematic thumbnails and ElevenLabs streaming for voiceovers, tying directly into the story pacing.</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Current Experiments</h2>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <RefreshCw className="feature-icon" />
                            <h4>Creator funnel</h4>
                            <p>
                                Testing “Director Mode” onboarding that teaches pacing and dice-roll mechanics in under two minutes.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Sparkles className="feature-icon" />
                            <h4>Story seed packs</h4>
                            <p>
                                Bundled prompts + art styles targeted at thriller, romance, and fantasy niches to reduce blank-page anxiety.</p>
                        </div>
                        <div className="feature-item">
                            <Target className="feature-icon" />
                            <h4>Multiplayer concepts</h4>
                            <p>
                                Exploring “director vs. squad” experiments where one user orchestrates and friends make choices live.</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '1rem' }}>
                        The public launch clock doesn’t start until these loops feel sticky. For now the win is consistent playtest feedback and a waitlist that keeps growing organically.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Plotwist;
