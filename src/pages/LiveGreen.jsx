import React from 'react';
import { ArrowLeft, Users, Leaf, Award, BarChart } from 'lucide-react';
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
                        <span>Product Design</span>
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
                        LiveGreen is an iOS app that allows anyone to automatically track and reduce their daily carbon emissions through gamification.
                        What started as a hackathon project at HackDuke grew into a platform helping over 40,000 users live a greener lifestyle.
                    </p>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">40k+</span>
                            <span className="stat-label">Active Users</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">#1</span>
                            <span className="stat-label">HackDuke Winner</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">4.8</span>
                            <span className="stat-label">App Store Rating</span>
                        </div>
                    </div>
                </section>

                <section className="cs-section grid-2">
                    <div className="cs-card">
                        <h3>The Problem</h3>
                        <p>
                            Climate change is the single biggest threat facing our generation.
                            However, most people feel helpless, believing their individual actions can't make a difference.
                            Existing solutions were clunky, academic, and failed to engage the average consumer.
                        </p>
                    </div>
                    <div className="cs-card">
                        <h3>My Role</h3>
                        <p>
                            As Co-Founder and Product Designer, I led the end-to-end product lifecycle.
                            From conducting initial user research with 500+ participants to designing the gamified UI
                            and implementing the iOS frontend.
                        </p>
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
                    <h2>The Solution</h2>
                    <p>
                        We built an app that makes sustainability addictive. By simplifying emissions data into a daily "Eco Score" (0-100),
                        we gave users immediate feedback on their impact.
                    </p>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <BarChart className="feature-icon" />
                            <h4>Automated Tracking</h4>
                            <p>Connected to bank accounts to automatically calculate carbon footprint from purchases (food, travel, utilities).</p>
                        </div>
                        <div className="feature-item">
                            <Award className="feature-icon" />
                            <h4>Gamification</h4>
                            <p>Users earn points for eco-friendly actions, competing on leaderboards and unlocking achievements.</p>
                        </div>
                        <div className="feature-item">
                            <Users className="feature-icon" />
                            <h4>Community Feed</h4>
                            <p>A social feed where users share their wins, creating a positive feedback loop of social proof.</p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Impact</h2>
                    <div className="impact-gallery">
                        <img src="/img/appStoreOneBig.png" alt="App Store Screenshot 1" className="impact-img" />
                        <img src="/img/appStoreTreesBig.png" alt="App Store Screenshot 2" className="impact-img" />
                        <img src="/img/Reduce-lg.png" alt="App Store Screenshot 3" className="impact-img" />
                    </div>
                    <p className="caption">
                        LiveGreen reached #1 in the Lifestyle category in several countries and helped offset tons of CO2.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default LiveGreen;
