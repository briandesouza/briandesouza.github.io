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
                        LiveGreen was a carbon footprint tracking app that helped people understand and reduce their environmental impact.
                        Unlike my current projects, this one shipped to the App Store and had real users and data to work with.
                    </p>
                    <p>
                        I co-founded the company with a designer (who owned the visual system) and served as product lead—handling user research,
                        iOS development, product strategy, and partnerships. This was my first 0-to-1 product, and it taught me most of what I know
                        about building consumer apps.
                    </p>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">50k+</span>
                            <span className="stat-label">Active Users</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">35%</span>
                            <span className="stat-label">D30 Retention</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">80k+</span>
                            <span className="stat-label">Trees Funded</span>
                        </div>
                    </div>
                </section>

                <section className="cs-section grid-2">
                    <div className="cs-card">
                        <h3>The Problem</h3>
                        <p>
                            Climate change feels overwhelming and abstract. Most people want to help but don't know where to start or how to measure their impact.
                            Existing carbon tracking tools were either academic calculators that required manual data entry or enterprise ESG software.
                            Nothing felt personal, automatic, or habit-forming for everyday consumers.
                        </p>
                    </div>
                    <div className="cs-card">
                        <h3>My Role</h3>
                        <p>
                            I co-founded LiveGreen and led product: ran 500+ user interviews, built the iOS app in Swift,
                            designed the carbon scoring algorithm, managed partnerships, and led App Store optimization. My co-founder
                            owned the visual design system and brand.
                        </p>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Product Strategy</h2>
                    <p>
                        Through research with 500+ potential users, we landed on three core principles that guided every product decision:
                    </p>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <TrendingUp className="feature-icon" />
                            <h4>Automate the boring math</h4>
                            <p>
                                We integrated with Plaid and utility APIs to automatically calculate your carbon footprint from credit card transactions,
                                commute patterns, and energy bills. No spreadsheets, no manual logging—just connect your accounts and see your impact.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Award className="feature-icon" />
                            <h4>Reward progress, not perfection</h4>
                            <p>
                                We built a Daily Eco Score and streak system that celebrated small wins like "Meatless Monday" or taking transit instead of driving.
                                The goal was to make people feel good about incremental progress rather than guilty about not being perfect.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Users className="feature-icon" />
                            <h4>Community drives accountability</h4>
                            <p>
                                We added a social feed where friends could complete challenges together and see each other's progress. We also partnered
                                with universities and companies who wanted to run sustainability challenges for their communities.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Discovery & Research</h2>
                    <p>
                        Before building anything, we needed to validate that people actually wanted this. We posted a simple prototype in
                        environmental Facebook groups and got responses from over 500 people. Through interviews and surveys, we identified
                        two core personas:
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
                    <h2>The Solution: Making Sustainability a Habit</h2>
                    <p>
                        We used behavioral psychology principles (specifically BJ Fogg's Behavior Model) to design a system that turned
                        eco-friendly actions into habits. The core loop was: <strong>Track → Score → Reward → Share</strong>.
                    </p>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <BarChart className="feature-icon" />
                            <h4>Automatic Tracking</h4>
                            <p>
                                <strong>The insight:</strong> Manual logging kills retention. People won't stick with an app that requires constant data entry.
                                <br/><br/>
                                <strong>Our solution:</strong> We used Plaid to connect users' credit cards and automatically categorized transactions
                                (gas stations = high carbon, grocery stores = medium, transit = low). Your carbon score updated automatically based on your spending.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Award className="feature-icon" />
                            <h4>Gamification</h4>
                            <p>
                                We created a "Daily Eco Score" (0-100) and let users level up by completing challenges like "Meatless Monday" or "Bike to Work Week."
                                This variable reward system drove 35% 30-day retention—more than double the industry average of 15% for lifestyle apps.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Users className="feature-icon" />
                            <h4>Social Accountability</h4>
                            <p>
                                The Community Feed showed friends' challenges and progress. This wasn't just for engagement—seeing others take action
                                validated users' own efforts and created a viral growth loop through word-of-mouth.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Technical Implementation</h2>
                    <p>
                        I built the iOS app in Swift and handled all backend integrations. Key components:
                    </p>
                    <ul>
                        <li><strong>Carbon scoring algorithm:</strong> Created a model that converts merchant category codes and utility data into CO₂e estimates,
                        calibrated against EPA datasets.</li>
                        <li><strong>Automatic bank sync:</strong> Integrated Plaid and Yodlee to pull transaction data, then used background jobs to categorize
                        purchases and update carbon scores daily.</li>
                        <li><strong>Dynamic challenge system:</strong> Built a flexible challenge engine that let us create and ship new seasonal challenges
                        without requiring an app update.</li>
                        <li><strong>Tree planting partnerships:</strong> Integrated with environmental organizations to fund tree planting based on user actions,
                        with real-time tracking of collective impact.</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Growth & Impact</h2>
                    <p>
                        We grew LiveGreen primarily through organic channels—App Store optimization and word-of-mouth. I focused heavily on ASO,
                        targeting keywords like "carbon tracker" and "carbon footprint," which got us to #1 in the Lifestyle category in 3 countries.
                        We also built ambassador programs with university sustainability clubs and corporate partners.
                    </p>
                    <div className="impact-gallery">
                        <img src="/img/appStoreOneBig.png" alt="App Store Screenshot 1" className="impact-img" />
                        <img src="/img/appStoreTreesBig.png" alt="App Store Screenshot 2" className="impact-img" />
                        <img src="/img/Reduce-lg.png" alt="App Store Screenshot 3" className="impact-img" />
                    </div>
                    <p className="caption">
                        We reached #1 in the Lifestyle category in 3 countries, won multiple pitch competitions (HackDuke, UF Big Idea),
                        and helped users collectively offset an estimated 2,000+ tons of CO₂ through our tree-planting partnerships.
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
                            <span className="stat-value">80K+</span>
                            <span className="stat-label">Trees Funded</span>
                        </div>
                    </div>
                    <p style={{ marginTop: '1rem' }}>
                        The most meaningful feedback was hearing that the app made climate action feel achievable. That lesson—making complex
                        problems feel manageable—still guides how I approach product design.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default LiveGreen;
