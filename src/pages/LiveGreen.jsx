import React from 'react';
import { ArrowLeft, Users, Leaf, Award, BarChart, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

const LiveGreen = () => {
    return (
        <div className="case-study livegreen-theme">
            {/* Hero */}
            <header className="cs-hero">
                <div className="container">
                    <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Home</Link>
                    <h1 className="cs-title">LiveGreen</h1>
                    <p className="cs-subtitle">Carbon Footprint Tracking for the Masses</p>
                    <div className="cs-tags">
                        <span>Co-Founder</span>
                        <span>Product Lead</span>
                        <span>User Research</span>
                    </div>
                </div>
                <div className="cs-hero-bg livegreen-bg-gradient"></div>
            </header>

            {/* Content */}
            <div className="container cs-content">
                <section className="cs-section">
                    <h2>Overview</h2>
                    <p>
                        LiveGreen let anyone automatically understand, reduce, and offset their carbon footprint.
                        It’s the pre-AI chapter of my work—the one product here that shipped to the App Store with real telemetry, revenue, and Apple recognition.
                        I served as co-founder & product lead (my co-founder owned visual design), running research, prioritization, iOS engineering, partnerships, and monetization experiments to grow the business to meaningful revenue.
                    </p>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">50k+</span>
                            <span className="stat-label">Active Users</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">$48K</span>
                            <span className="stat-label">ARR at Peak</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">80k</span>
                            <span className="stat-label">Trees Funded</span>
                        </div>
                    </div>
                </section>

                <section className="cs-section grid-2">
                    <div className="cs-card">
                        <h3>The Problem</h3>
                        <p>
                            Climate change is an abstract villain. Most people feel helpless, and carbon accounting tools were either academic calculators or corporate ESG products.
                            Our challenge: make sustainability feel personal, low-friction, and habit-forming for mainstream consumers.
                        </p>
                    </div>
                    <div className="cs-card">
                        <h3>My Role</h3>
                        <p>
                            Co-founded the company, ran research with 500+ people, built the Swift app, co-created the carbon scoring model,
                            hired contractors, pitched investors, launched Forest Card (our debit-card pilot), and owned ASO + lifecycle marketing while my co-founder led the design system.
                        </p>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Product Strategy</h2>
                    <p>
                        We centered on three product tenets that guided every roadmap debate:
                    </p>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <TrendingUp className="feature-icon" />
                            <h4>Automate the boring math</h4>
                            <p>
                                Linked Plaid + utility APIs so the app generated a carbon score from bank transactions, commute data, and energy bills—no manual entry, no spreadsheet.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Award className="feature-icon" />
                            <h4>Reward progress, not perfection</h4>
                            <p>
                                Designed a Daily Eco Score and streak mechanics that celebrated small wins (Meatless Monday, Transit Tuesdays) to reduce shame and keep people coming back.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Users className="feature-icon" />
                            <h4>Community = accountability</h4>
                            <p>
                                Launched a Challenges feed + referral loops so friends could nudge each other, and partnered with clubs/corporates who needed a turnkey sustainability challenge.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Discovery & Research</h2>
                    <p>
                        Before writing a single line of code, we validated our hypothesis. We posted a prototype in environmental Facebook groups
                        and received overwhelming interest from over 500 people. This helped us identify our core personas:
                    </p>
                    <div className="personas-grid">
                        <div className="persona-card">
                            <div className="persona-icon"><Users size={32} /></div>
                            <h4>The Millennial Mom</h4>
                            <p>Value-driven, wants a better future for children, relies on referrals.</p>
                        </div>
                        <div className="persona-card">
                            <div className="persona-icon"><Leaf size={32} /></div>
                            <h4>Gen Z Reducer</h4>
                            <p>Price-driven, brand loyal, high willingness to change lifestyle.</p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>The Solution: Making Sustainability Addictive</h2>
                    <p>
                        We leveraged behavioral psychology (BJ Fogg’s Behavior Model) to turn eco-friendly actions into a habit.
                        The core loop was simple: <strong>Track → Score → Reward → Share</strong>.
                    </p>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <BarChart className="feature-icon" />
                            <h4>Frictionless Tracking</h4>
                            <p>
                                <strong>Insight:</strong> Manual logging leads to churn.
                                <br/>
                                <strong>Solution:</strong> We integrated Plaid API to automatically calculate carbon footprint from credit card transactions (e.g., Gas Station = High Carbon, Whole Foods = Medium).
                            </p>
                        </div>
                        <div className="feature-item">
                            <Award className="feature-icon" />
                            <h4>Gamification Layer</h4>
                            <p>
                                We introduced a "Daily Eco Score" (0-100). Users could "level up" by completing challenges (e.g., "Meatless Monday").
                                This variable reward system kept D30 retention at 35% (vs industry avg of 15%).
                            </p>
                        </div>
                        <div className="feature-item">
                            <Users className="feature-icon" />
                            <h4>Social Proof</h4>
                            <p>
                                The "Community Feed" wasn't just for likes; it was for accountability. Seeing friends complete challenges validated the user's own efforts, creating a viral growth loop.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Technical Execution</h2>
                    <p>
                        I owned the iOS build, backend integrations, and data modeling. Highlights:
                    </p>
                    <ul>
                        <li><strong>Carbon model:</strong> Built a scoring engine that maps merchant category codes + utility usage into CO₂e estimates calibrated with EPA data.</li>
                        <li><strong>Bank connectivity:</strong> Plaid + Yodlee integrations drive passive tracking; background jobs categorize transactions and push nudges.</li>
                        <li><strong>Gamification system:</strong> Dynamic challenge builder lets us ship new seasonal quests without an app update.</li>
                        <li><strong>Forest Card pilot:</strong> Partnered with Galileo Financial to launch a debit card that funded tree planting via interchange, generating $48K ARR.</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Growth & Impact</h2>
                    <p>
                        LiveGreen grew primarily through organic search and word-of-mouth. We doubled down on App Store Optimization for keywords like "carbon tracker"
                        and layered in ambassador programs with universities and sustainability clubs. Highlights:
                    </p>
                    <div className="impact-gallery">
                        <img src="/img/appStoreOneBig.png" alt="App Store Screenshot 1" className="impact-img" />
                        <img src="/img/appStoreTreesBig.png" alt="App Store Screenshot 2" className="impact-img" />
                        <img src="/img/Reduce-lg.png" alt="App Store Screenshot 3" className="impact-img" />
                    </div>
                    <p className="caption">
                        Reached #1 in Lifestyle in 3 countries, won HackDuke + Big Idea pitch competitions, and offset an estimated 2,000+ tons of CO₂ via partner tree planting.
                    </p>
                </section>

                <section className="cs-section">
                    <h2>Results</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">50k+</span>
                            <span className="stat-label">Monthly Active Users</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">35%</span>
                            <span className="stat-label">D30 Retention</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">#1</span>
                            <span className="stat-label">Lifestyle Category (3 countries)</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">$48K</span>
                            <span className="stat-label">ARR from Forest Card</span>
                        </div>
                    </div>
                    <p style={{ marginTop: '1rem' }}>
                        Most importantly, users kept telling us the app made climate action feel achievable.
                        That insight still guides how I design consumer experiences today.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default LiveGreen;
