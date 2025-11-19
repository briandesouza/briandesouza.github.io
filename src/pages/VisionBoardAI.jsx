import React from 'react';
import { ArrowLeft, Sparkles, Palette, Lock, Zap, Search, Target, RefreshCw } from 'lucide-react';
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
                        <span>Product Strategy</span>
                        <span>Design Systems</span>
                        <span>Local-First UX</span>
                    </div>
                </div>
                <div className="cs-hero-bg visionboard-bg-gradient"></div>
            </header>

            {/* Content */}
            <div className="container cs-content">
                <section className="cs-section">
                    <h2>Overview</h2>
                    <p>
                        VisionBoardAI is a premium iOS application designed to help users visualize their goals through AI-generated imagery.
                        It moves beyond static Pinterest boards by allowing users to create "future self" visualizations using advanced image synthesis.
                    </p>
                </section>

                <section className="cs-section grid-2">
                    <div className="cs-card">
                        <h3>The Problem</h3>
                        <p>
                            Users struggling with visualization often can't find the <em>exact</em> image that represents their specific goal on Google or Pinterest.
                            "I want a picture of <em>me</em> speaking at a TED talk," not a stock photo of a stranger.
                        </p>
                    </div>
                    <div className="cs-card">
                        <h3>The Solution</h3>
                        <p>
                            A "Magic Camera" for your future. We use Generative AI (Stable Diffusion) to let users describe a scenario and see themselves in it,
                            making the visualization process deeply personal and emotionally resonant.
                        </p>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Product Discovery & Iteration</h2>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <Search className="feature-icon" />
                            <h4>User Insight: "It doesn't feel like me"</h4>
                            <p>
                                Initial testing revealed that generic AI images weren't motivating. Users needed to see <em>their</em> face in the goal.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Target className="feature-icon" />
                            <h4>Feature: Face Swap Integration</h4>
                            <p>
                                We integrated a secure Face Swap pipeline. Users upload one selfie, and we seamlessly blend it into their generated vision board images.
                                This increased "Board Completion Rate" by 60%.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Palette className="feature-icon" />
                            <h4>Design: "Premium & Private"</h4>
                            <p>
                                Users treat their vision boards as sacred, private spaces. We designed a "Local-First" architecture where boards live on-device,
                                and the UI adapts to their system theme (Light/Dark) for a native, premium feel.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Technical Execution</h2>
                    <p>
                        To ensure the app felt "native" and "premium", I built a custom design system.
                    </p>
                    <div className="code-block">
                        <pre>
                            <code>
                                {`// Swift: Adaptive Color System
struct AdaptiveColors {
    static var primary: Color {
        Color(uiColor: UIColor { traitCollection in
            // Automatically shifts hue based on Light/Dark mode
            // to maintain the "Premium Pastel" aesthetic
            return traitCollection.userInterfaceStyle == .dark 
                ? UIColor(hex: "#E0B0FF") // Light Mauve
                : UIColor(hex: "#6A0DAD") // Deep Purple
        })
    }
}`}
                            </code>
                        </pre>
                    </div>
                    <p className="caption">
                        The "AdaptiveColors" system ensures that every element looks premium in both Light and Dark modes without manual overrides.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default VisionBoardAI;
