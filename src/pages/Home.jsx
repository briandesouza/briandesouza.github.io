import React from 'react';
import { ArrowRight, ExternalLink, ChevronRight, Users, Zap, Code, Headphones, Book, Coffee, Gamepad2 } from 'lucide-react';
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
                            Product manager and builder creating AI-native consumer experiences.
                        </p>
                        <p className="hero-bio">
                            I led Copilot growth at <strong>Microsoft</strong>, shipping to millions of users across enterprise and consumer.
                            Before that, I built <strong>LiveGreen</strong>—a carbon tracking app that grew to 50K+ users.
                            Now I'm building <strong>Plotwist</strong> and <strong>VisionBoardAI</strong>, two 0-to-1 iOS products where
                            I'm doing everything from user research to SwiftUI development.
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
                                <img src="/img/plotwist-cover.png" alt="Plotwist preview" className="project-img" />
                                <div className="project-overlay">
                                    <span>View Case Study</span>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Plotwist</h3>
                                <p>Building interactive fiction for the TikTok generation. Currently in TestFlight.</p>
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
                                <img src="/img/visionboard-cover.png" alt="VisionBoardAI preview" className="project-img" />
                                <div className="project-overlay">
                                    <span>View Case Study</span>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>VisionBoardAI</h3>
                                <p>Vision board app where you create an AI version of yourself, then place it in dream homes, outfits, and destinations. In TestFlight.</p>
                                <div className="tags">
                                    <span>Founder</span>
                                    <span>Product</span>
                                    <span>iOS</span>
                                </div>
                            </div>
                        </Link>

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
                                <p>Carbon tracking app that grew to 50K+ users. My first 0-to-1 product experience.</p>
                                <div className="tags">
                                    <span>Co-Founder</span>
                                    <span>Product Lead</span>
                                    <span>iOS</span>
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
                                <h3>Founder & Product Manager</h3>
                                <p className="company">Plotwist • VisionBoardAI</p>
                                <p>Building two 0-to-1 iOS products from concept to TestFlight. Handling everything: user research, product strategy, SwiftUI development, and go-to-market planning.</p>
                                <ul>
                                    <li>Conducted 10+ user interviews to validate problem spaces and define target personas for both products.</li>
                                    <li>Built and iterated on TestFlight builds, using qualitative feedback to prioritize features and refine UX.</li>
                                    <li>Architected AI-powered backends using Cloudflare Workers, Firebase, and various LLM APIs to deliver seamless experiences.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2021 - 2025</div>
                            <div className="timeline-content">
                                <h3>Product Manager 2, Copilot Growth & Communications</h3>
                                <p className="company">Microsoft</p>
                                <p>Led programs that helped admins and end users discover and adopt Copilot across Microsoft 365.</p>
                                <ul>
                                    <li>Launched Copilot's first direct-to-user welcome experience, driving a 12-point increase in week-one usage with 55% open rates on 800K monthly emails.</li>
                                    <li>Created a unified release notes hub serving 18 workloads and 13K+ IT managers monthly—now the go-to resource for tracking Copilot updates.</li>
                                    <li>Built an AI-powered content pipeline that reduced feature announcement production time by 80%.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2019 - 2021</div>
                            <div className="timeline-content">
                                <h3>Co-Founder & Product Lead</h3>
                                <p className="company">LiveGreen</p>
                                <p>Built a carbon footprint tracking app from the ground up, taking it from hackathon project to App Store success.</p>
                                <ul>
                                    <li>Grew to 50K active users with 35% 30-day retention—more than double the industry average for lifestyle apps.</li>
                                    <li>Ran 500+ user interviews to understand our audience, then hit #1 in the Lifestyle category across 3 countries.</li>
                                    <li>Owned iOS development, designed the core experience, and managed partnerships with financial services and campus sustainability programs.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2016 - 2021</div>
                            <div className="timeline-content">
                                <h3>University of Florida</h3>
                                <p className="company">B.S. Computer Science</p>
                                <ul>
                                    <li>Big Idea Pitch Competition (UF, 2019) — first place, $25K prize.</li>
                                    <li>Global Hackathon Finalist at Facebook HQ (2017).</li>
                                    <li>Best Hack, MHacks @ University of Michigan (2017) — awarded by Facebook + Hasura.</li>
                                    <li>Best iOS Hack, HackTech Caltech (2017) — awarded by Make School.</li>
                                    <li>Best Hack, HackDuke (2016) — awarded by Facebook.</li>
                                </ul>
                            </div>
                        </div>
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
                                I started coding in Swift during college, launched LiveGreen before graduating, then spent four years at Microsoft
                                learning how to ship products at scale. Working on Copilot taught me how to think about growth, user activation, and
                                building for millions. Now I'm applying that to my own 0-to-1 products.
                            </p>
                            <p>
                                I run a lot of user interviews before building anything. Once I'm confident in the direction, I move fast. I also love
                                the craft of building—writing SwiftUI, designing experiences, and picking the right AI models. Being able to do both PM
                                work and development lets me iterate quickly without waiting on a team.
                            </p>
                        </div>
                        <div className="skills-column">
                            <div className="skill-card">
                                <div className="skill-icon">
                                    <Users size={24} />
                                </div>
                                <h4>User Research</h4>
                                <p>Understanding the "why" before building the "what".</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon">
                                    <Zap size={24} />
                                </div>
                                <h4>Rapid Prototyping</h4>
                                <p>Moving from idea to testable product in days.</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Full Stack iOS</h4>
                                <p>SwiftUI, Firebase, and Python backends.</p>
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
                                    <span className="favorite-value">The Design of Everyday Things</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Coffee size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">Fuel</span>
                                    <span className="favorite-value">Cortado</span>
                                </div>
                            </div>
                            <div className="favorite-card">
                                <div className="favorite-icon">
                                    <Gamepad2 size={20} />
                                </div>
                                <div className="favorite-info">
                                    <span className="favorite-label">VideoGame</span>
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
