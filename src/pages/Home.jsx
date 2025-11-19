import React from 'react';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
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
                            I'm a Product Manager and Engineer building the future of interactive experiences.
                        </p>
                        <p className="hero-bio">
                            Previously at <strong>Microsoft</strong>. Now building AI-native consumer apps like
                            <strong> Plotwist</strong> and <strong>VisionBoardAI</strong>.
                            I bridge the gap between user empathy, technical feasibility, and premium design.
                        </p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn btn-primary">View Work</a>
                            <a href="#about" className="btn btn-secondary">More About Me</a>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <div className="hero-image-blob"></div>
                        <img src="/img/brianProfile.jpeg" alt="Brian De Souza" className="hero-image" />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section projects">
                <div className="container">
                    <h2 className="section-title">Featured Work</h2>
                    <div className="projects-grid">
                        {/* Plotwist Card */}
                        <Link to="/plotwist" className="project-card">
                            <div className="project-image plotwist-bg">
                                <div className="project-overlay">
                                    <span>View Case Study</span>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Plotwist</h3>
                                <p>The TikTok of Interactive Fiction. AI-powered choose-your-own-adventure stories.</p>
                                <div className="tags">
                                    <span>Founder</span>
                                    <span>Product</span>
                                    <span>iOS</span>
                                </div>
                            </div>
                        </Link>

                        {/* VisionBoardAI Card */}
                        <Link to="/visionboardai" className="project-card">
                            <div className="project-image visionboard-bg">
                                <div className="project-overlay">
                                    <span>View Case Study</span>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>VisionBoardAI</h3>
                                <p>Manifest your future with AI. Premium vision board creation tool.</p>
                                <div className="tags">
                                    <span>Founder</span>
                                    <span>Design</span>
                                    <span>iOS</span>
                                </div>
                            </div>
                        </Link>

                        {/* LiveGreen Card */}
                        <Link to="/livegreen" className="project-card">
                            <div className="project-image livegreen-bg">
                                <div className="project-overlay">
                                    <span>View Case Study</span>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>LiveGreen</h3>
                                <p>Carbon footprint tracking app. Helping 40k+ users live a greener lifestyle.</p>
                                <div className="tags">
                                    <span>Co-Founder</span>
                                    <span>Product</span>
                                    <span>Design</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section experience">
                <div className="container">
                    <h2 className="section-title">Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-date">2025 - Present</div>
                            <div className="timeline-content">
                                <h3>Founder & Product Engineer</h3>
                                <p className="company">Stealth / Advisory</p>
                                <p>Building consumer AI apps (Plotwist, VisionBoardAI) and advising early-stage startups on product strategy and AI integration.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2021 - 2025</div>
                            <div className="timeline-content">
                                <h3>Product Manager</h3>
                                <p className="company">Microsoft</p>
                                <p>Led product initiatives for [Specific Team]. Drove [Impact/Metric]. (Placeholder for specific Microsoft details).</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2019 - 2021</div>
                            <div className="timeline-content">
                                <h3>Co-Founder & Product Designer</h3>
                                <p className="company">LiveGreen</p>
                                <p>Co-founded a sustainability startup. Designed and built the iOS app, growing it to 40k+ users. Won awards at HackDuke.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section about">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <p>
                            I'm a builder at heart. Whether it's a complex distributed system or a pixel-perfect iOS app,
                            I love the process of turning abstract ideas into tangible products that people love.
                        </p>
                        <p>
                            My background spans from big tech (Microsoft) to scrappy startups (LiveGreen).
                            I believe that the best Product Managers are those who can empathize deeply with users
                            <em>and</em> understand the technical constraints and possibilities of the medium.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
