import React from 'react';
import { ArrowRight, ExternalLink, Compass, Sparkles, LineChart, Trophy, Medal, Award, Star, Stars, Headphones, Book, Coffee, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section - Split Layout */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">Brian</span>.
                        </h1>
                        <p className="hero-subtitle">
                            Product Manager building AI-powered products, growth systems, and consumer apps.
                        </p>
                        <p className="hero-bio">
                            Product Manager with 4+ years building AI-powered products, growth systems, and consumer apps.
                            At <strong>Microsoft</strong>, I shipped features across Copilot and Microsoft 365 for enterprise and commercial users.
                            I now advise early-stage startups on 0-to-1 strategy and PMF validation, and I build AI-powered iOS apps like
                            <strong>Plotwist</strong> and <strong>VisionBoardAI</strong>.
                        </p>
                        <div className="hero-actions">
                            <a href="#experience" className="btn btn-primary">View Work</a>
                            <a href="#contact" className="btn btn-secondary">Contact me</a>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <div className="hero-image-blob"></div>
                        <img src="/img/brianProfile.jpeg" alt="Brian De Souza" className="hero-image" />
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section experience">
                <div className="container">
                    <h2 className="section-title">Experience & Education</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-date">May 2025 - Present</div>
                            <div className="timeline-content">
                                <h3>Product Advisor</h3>
                                <p className="company">Freelance</p>
                                <p>Advise early-stage startups on 0-to-1 product strategy, MVP scope, and go-to-market execution.</p>
                                <ul>
                                    <li>Run customer discovery sessions and competitive analysis to validate product-market fit.</li>
                                    <li>Define backlogs and roadmaps that help lean teams ship faster.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2024 - May 2025</div>
                            <div className="timeline-content">
                                <h3>Product Manager 2, Copilot Growth & Communications</h3>
                                <p className="company">Microsoft</p>
                                <p>Shipped engagement and communications experiences across Copilot and Microsoft 365.</p>
                                <ul>
                                    <li>Architected a multi-touchpoint engagement system (welcome emails, monthly emails, in-product nudges, admin center, release notes) contributing ~4.5% of monthly Copilot usage of new features.</li>
                                    <li>Launched the direct-to-user welcome email program reaching 800K+ commercial users/month with a +12pp week-one usage lift, 55% open rate, and 18% CTR; expanded coverage from ~42% to 99% of eligible users.</li>
                                    <li>Reduced content production costs ~80% by shipping an LLM-powered pipeline; improved content relevance from 68% to 89%.</li>
                                    <li>Built a unified Copilot Release Notes platform integrating 18 workloads, publishing 350+ features and growing to 13K monthly active IT admins.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2021 - 2024</div>
                            <div className="timeline-content">
                                <h3>Product Manager</h3>
                                <p className="company">Microsoft</p>
                                <p>Owned growth and admin-center experiences for Microsoft 365 updates.</p>
                                <ul>
                                    <li>Executed phased go-to-market campaigns moving 3.8M devices from semi-annual to monthly update channel, exceeding targets by 300K; reduced update-service memory usage by 70% through stakeholder alignment.</li>
                                    <li>Launched Admin Center share-install experiences; daily shared emails +450% and daily activations +889%, with 41% of 19K admins sending emails within the first week.</li>
                                    <li>Ran discovery with 74 enterprise customers (83.5 SUS) and 30+ Fortune 500 IT admin research calls to shape a 4-quarter roadmap.</li>
                                    <li>Mentored 10 entry-level employees in a weekly growth group on product skills and data-driven decision-making.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2019 - 2020</div>
                            <div className="timeline-content">
                                <h3>Program Manager Intern</h3>
                                <p className="company">Microsoft</p>
                                <p>Coordinated SHA-1 deprecation across Microsoft Office products.</p>
                                <ul>
                                    <li>Removed 4,200+ SHA-1 download IDs, republished essential service packs with SHA-2, and built cross-version testing scenarios with security stakeholders.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2016 - 2021</div>
                            <div className="timeline-content">
                                <h3>University of Florida</h3>
                                <p className="company">B.S. Computer Science</p>
                                <p>Technical foundation in computer science with strong data analytics skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section projects">
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="projects-grid">
                        {/* Plotwist Card */}
                        <a
                            href="https://apps.apple.com/us/app/plotwist-interactive-stories/id6752579630"
                            className="project-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="project-image plotwist-bg">
                                <img src="/img/plotwist-cover.png" alt="Plotwist preview" className="project-img" />
                                <div className="project-overlay">
                                    <span>View on App Store</span>
                                    <ExternalLink size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Plotwist</h3>
                                <p>AI-powered interactive storytelling app built with Swift + LLM APIs.</p>
                                <div className="tags">
                                    <span>Developer</span>
                                    <span>Product</span>
                                    <span>iOS</span>
                                </div>
                            </div>
                        </a>

                        {/* VisionBoardAI Card */}
                        <a
                            href="https://apps.apple.com/us/app/visionboardai-see-your-future/id6754291285"
                            className="project-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="project-image visionboard-bg">
                                <img src="/img/visionboard-cover.png" alt="VisionBoardAI preview" className="project-img" />
                                <div className="project-overlay">
                                    <span>View on App Store</span>
                                    <ExternalLink size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>VisionBoardAI</h3>
                                <p>AI-powered goal visualization app built with Swift + LLM APIs.</p>
                                <div className="tags">
                                    <span>Developer</span>
                                    <span>Product</span>
                                    <span>iOS</span>
                                </div>
                            </div>
                        </a>

                        {/* LiveGreen Card */}
                        <Link to="/livegreen" className="project-card">
                            <div className="project-image livegreen-bg">
                                <img src="/img/livegreenPreview.png" alt="LiveGreen preview" className="project-img" />
                                <div className="project-overlay">
                                    <span>View Case Study</span>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>LiveGreen</h3>
                                <p>Carbon footprint tracking startup with 50,000 active users and 80,000+ trees planted globally.</p>
                                <div className="tags">
                                    <span>Co-Founder</span>
                                    <span>Head of Product</span>
                                    <span>iOS</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section about">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-grid">
                        <div className="bio-column">
                            <p className="bio-intro">
                                Product Manager with 4+ years building AI-powered products, growth systems, and consumer apps. At Microsoft, I
                                shipped features across Copilot and Microsoft 365 for enterprise and commercial users. I hold a B.S. in Computer
                                Science and bring a strong data analytics foundation.
                            </p>
                            <p>
                                Today I advise early-stage startups on 0-to-1 product strategy and PMF validation, and I build iOS apps from concept
                                through App Store launch. I focus on discovery and UXR, measurable KPIs, and stakeholder alignment across
                                engineering, design, data science, and PMM.
                            </p>
                        </div>
                        <div className="skills-column">
                            <div className="skill-card">
                                <div className="skill-icon">
                                    <Compass size={24} />
                                </div>
                                <h4>Product Strategy</h4>
                                <p>Roadmaps, PRDs, and product requirements.</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon">
                                    <Sparkles size={24} />
                                </div>
                                <h4>AI/LLM Productization</h4>
                                <p>Shipping AI-native experiences with reliable outputs.</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon">
                                    <LineChart size={24} />
                                </div>
                                <h4>Analytics & Experimentation</h4>
                                <p>KPIs, A/B tests, and growth system design.</p>
                            </div>
                        </div>
                    </div>

                    <div className="favorites-section">
                        <h3 className="favorites-title">Awards</h3>
                        <div className="favorites-grid">
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Trophy size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">2019</span>
                                    <span className="favorite-value">University of Florida Business Plan Competition - 1st place</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Star size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">2017</span>
                                    <span className="favorite-value">Facebook Global Hackathon - Finalist</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Medal size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">2017</span>
                                    <span className="favorite-value">University of Michigan MHacks - Best Hack</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Award size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">2017</span>
                                    <span className="favorite-value">CalTech HackTech - Best iOS Hack</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Stars size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">2016</span>
                                    <span className="favorite-value">Duke University HackDuke - Best Hack</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="favorites-section">
                        <h3 className="favorites-title">When I'm not working</h3>
                        <div className="favorites-grid">
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Headphones size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">Listening to</span>
                                    <span className="favorite-value">Acquired Podcast</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Book size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">Reading</span>
                                    <span className="favorite-value">The Cold Start Problem: How to Start and Scale Network Effects</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Coffee size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">Fuel</span>
                                    <span className="favorite-value">Americano</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Gamepad2 size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">Video Game</span>
                                    <span className="favorite-value">Civ 5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
