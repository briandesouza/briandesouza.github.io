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
                            Product leader + engineer shaping AI-native consumer experiences.
                        </p>
                        <p className="hero-bio">
                            I led Copilot growth and communications at <strong>Microsoft</strong>, and previously grew
                            <strong> LiveGreen</strong> from a hackathon project to 50K+ people actively reducing their carbon footprints.
                            Today I’m a solo builder creating AI-native mobile products like <strong>Plotwist</strong> and <strong>VisionBoardAI</strong>,
                            pairing Swift with agentic tools such as Cursor, Claude Code, and Codex so I can move fast without a big team.
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
                                <img src="/img/visionboard-cover.png" alt="VisionBoardAI preview" className="project-img" />
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
                                <img src="/img/livegreenPreview.png" alt="LiveGreen preview" className="project-img" />
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
                                <p className="company">Plotwist • VisionBoardAI</p>
                                <p>Shipping iOS apps end-to-end: user research, SwiftUI builds, AI infra, monetization, and TestFlight ops.</p>
                                <ul>
                                    <li>Built Plotwist’s deterministic AI story engine with near-zero perceived latency.</li>
                                    <li>Designed VisionBoardAI’s premium design system + local-first privacy model to boost paid conversion.</li>
                                    <li>Advise 3 seed-stage teams on GTM experiments, ASO, and onboarding instrumentation.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2021 - 2025</div>
                            <div className="timeline-content">
                                <h3>Product Manager 2, Copilot Growth & Communications</h3>
                                <p className="company">Microsoft</p>
                                <p>Drove lifecycle programs that activated admins and end users across Microsoft 365.</p>
                                <ul>
                                    <li>Launched Copilot’s first direct-to-user welcome motion → +12pp week-one usage, 55% open rate on 800K monthly sends.</li>
                                    <li>Built unified Copilot release notes hub for 18 workloads, now serving 13K+ IT managers monthly.</li>
                                    <li>Automated feature comms with an internal AI pipeline, cutting content production time by 80%.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2019 - 2021</div>
                            <div className="timeline-content">
                                <h3>Co-Founder & Product Designer</h3>
                                <p className="company">LiveGreen</p>
                                <p>Scaled a carbon-footprint companion app recognized by Apple and sustainability orgs.</p>
                                <ul>
                                    <li>Grew to 50K active users, $48K ARR (Forest Card), and 80K+ trees funded by community actions.</li>
                                    <li>Conducted 500+ interviews to define personas, core loops, and ASO strategy; #1 Lifestyle in 3 countries.</li>
                                    <li>Led iOS design/engineering plus partnerships with Galileo Financial and university programs.</li>
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
                    <div className="about-content">
                        <p>
                            I grew up writing Swift between computer science lectures at the University of Florida,
                            launched LiveGreen before graduation, then spent four years inside Microsoft modernizing the admin experience
                            and launching Copilot’s go-to-market stack. That mix of scrappy founder energy and enterprise rigor
                            now informs how I scope, prioritize, and measure everything I touch.
                        </p>
                        <p>
                            I obsess over onboarding friction, instrumentation, and narrative clarity—because the best PM decks read like case studies,
                            and the best shipped features tell a story. When I’m not iterating on an LLM prompt or refining a SwiftUI animation,
                            I’m probably mentoring PMs breaking into AI or testing the latest Caltrain build on unsuspecting friends.
                        </p>
                        <p>
                            <strong>Superpowers:</strong> translating user research into crisp product strategy, prototyping fast enough to inform real technical trade-offs,
                            and partnering with design + engineering to hit ambitious launch dates without sacrificing craft.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
