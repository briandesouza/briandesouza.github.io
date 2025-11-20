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
                    <p className="cs-subtitle">Interactive fiction designed for how people consume content today</p>
                    <div className="cs-tags">
                        <span>0-to-1 Product</span>
                        <span>iOS Development</span>
                        <span>Currently in TestFlight</span>
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
                        Plotwist is a 0-to-1 iOS product that brings interactive fiction to a mobile-first audience. Think choose-your-own-adventure
                        stories, but built for how people consume content today—vertical scrolling, rich media, and instant gratification.
                    </p>
                    <p>
                        I'm building this solo and currently in TestFlight. Like VisionBoardAI, there's no usage
                        data to rely on yet, so I'm using user research, rapid iteration, and hypothesis testing to find the right product experience.
                    </p>
                </section>

                <section className="cs-section">
                    <h2>Problem Discovery</h2>
                    <p>
                        I've always loved branching narrative experiences, particularly <em>Fallout New Vegas</em> and how it let players shape their story through choices.
                        Looking at the mobile space, I noticed apps like <em>Episode</em>, <em>Hooked</em>, and <em>Choices</em> have millions of downloads on the App Store—
                        clear proof of demand for mobile storytelling. But none of them offer true user-generated content or give users full control over branching narratives.
                        That gap became my hypothesis for Plotwist.
                    </p>
                    <p>
                        I talked to 10+ people who play or create interactive fiction: writers, indie game developers, tabletop RPG fans, and Gen Z readers.
                        Two clear pain points emerged:
                    </p>
                    <div className="grid-2">
                        <div className="cs-card">
                            <h3>For Players</h3>
                            <p>
                                Existing IF apps feel like reading a PDF with hyperlinks. They're missing the polish and ease that mobile users expect—
                                smooth scrolling, rich media, and instant loading. People want the depth of branching narratives without the friction.
                            </p>
                        </div>
                        <div className="cs-card">
                            <h3>For Creators</h3>
                            <p>
                                Creating interactive stories is incredibly time-consuming. Writers have to manually map every choice tree,
                                write thousands of words, and either learn Twine/Ink or use limited no-code tools. There's no way to quickly prototype an idea.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Target Users & Personas</h2>
                    <p>
                        Through research and early TestFlight feedback, I've identified two core personas:
                    </p>
                    <div className="grid-2">
                        <div className="cs-card">
                            <h3>The Story Snacker</h3>
                            <p><strong>Who:</strong> 18-28 years old, grew up on TikTok, Webtoons, and mobile games</p>
                            <p><strong>Behavior:</strong> Wants entertainment that's deeper than scrolling but shorter than sitting down with a console or book</p>
                            <p><strong>Need:</strong> Quick, polished, interactive experiences that respect their time and feel native to mobile</p>
                            <p><strong>Current alternatives:</strong> Episode, Choices, Romance Club, but those feel dated and have limited branching</p>
                        </div>
                        <div className="cs-card">
                            <h3>The Aspiring Creator</h3>
                            <p><strong>Who:</strong> Writers, game design students, tabletop RPG enthusiasts with story ideas</p>
                            <p><strong>Behavior:</strong> Has narrative concepts but lacks the time or technical skills to build full branching stories</p>
                            <p><strong>Need:</strong> A way to prototype story ideas quickly and share them without learning Twine or hiring a dev</p>
                            <p><strong>Current alternatives:</strong> Twine, Ink, Ren'Py—all require learning syntax and are intimidating for non-technical creators</p>
                        </div>
                    </div>
                    <h3 style={{ marginTop: '2rem' }}>Core Hypotheses</h3>
                    <p>
                        Based on these personas, I'm testing three key hypotheses:
                    </p>
                    <ul>
                        <li><strong>Mobile-native UI drives engagement:</strong> If the reading experience feels as smooth as TikTok or Instagram Stories, people will finish stories at higher rates.</li>
                        <li><strong>AI-assisted creation lowers barriers:</strong> If creators can describe a premise and get a playable story in minutes, more people will experiment with creating.</li>
                        <li><strong>Zero perceived latency matters:</strong> If choices feel instant (no loading spinners), the experience feels more like a game than a chatbot.</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Product Approach & Development</h2>
                    <p>
                        I'm handling all aspects of this product: research, strategy, design, iOS development, and backend infrastructure.
                        This gives me complete control and lets me iterate quickly based on what I learn from testers.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>How I'm Working</h3>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <Compass className="feature-icon" />
                            <h4>Bi-Weekly TestFlight Releases</h4>
                            <p>
                                Every two weeks, I ship a new build focused on testing 1-2 hypotheses. After each release, I interview
                                5-10 users to understand what worked, what didn't, and what to prioritize next.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Layers className="feature-icon" />
                            <h4>SwiftUI + Combine</h4>
                            <p>
                                The entire app is built in SwiftUI with Combine for reactive state management. I use Cursor and Claude
                                to help with boilerplate, but I write and review all the code myself.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Target className="feature-icon" />
                            <h4>Paper Prototyping First</h4>
                            <p>
                                Before building any major feature, I prototype it on paper or in Figma and test it with 3-5 people.
                                This saves weeks of development time on ideas that wouldn't work.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Technical Decisions</h2>
                    <p>
                        The tech stack is designed to solve one critical product problem: make interactive fiction feel instant.
                        If there's a loading spinner after every choice, it feels like a chatbot. If choices are instant, it feels like a game.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Architecture</h3>
                    <ul>
                        <li><strong>SwiftUI + Combine:</strong> Native iOS development for the best performance and animations. Combine handles state management and ensures the UI is always in sync.</li>
                        <li><strong>Firebase for backend:</strong> Firestore stores stories and user progress, Firebase Auth handles accounts, and Cloud Storage holds images/audio files.</li>
                        <li><strong>Cloudflare Workers as proxy:</strong> All AI requests (text generation, image creation, audio) go through Workers to keep API keys secure and add rate limiting.</li>
                    </ul>
                    <h3 style={{ marginTop: '2rem' }}>The Prefetching System</h3>
                    <p>
                        This is the key innovation that makes Plotwist feel different from chat-based story apps:
                    </p>
                    <ul>
                        <li><strong>Deterministic generation:</strong> While you're reading a story node, the app pre-generates all possible next choices in the background—text, images, and audio narration.</li>
                        <li><strong>Zero perceived latency:</strong> When you tap a choice, the next scene loads instantly because it's already been fetched and cached locally.</li>
                        <li><strong>Smart prefetching:</strong> The system predicts which branches are most likely based on the story structure and prioritizes those for generation.</li>
                    </ul>
                    <h3 style={{ marginTop: '2rem' }}>AI Model Strategy</h3>
                    <ul>
                        <li><strong>Text generation:</strong> Using OpenRouter and Fireworks to access models like Claude and GPT-4. Testing which models produce the best narrative coherence.</li>
                        <li><strong>Image generation:</strong> Fal and Replicate for story cover art and scene illustrations. Focused on speed over quality since images need to generate in under 3 seconds.</li>
                        <li><strong>Audio narration:</strong> ElevenLabs for text-to-speech. Still experimental—testing whether users actually want audio or if it's distracting.</li>
                    </ul>
                    <h3 style={{ marginTop: '2rem' }}>Why These Choices Matter</h3>
                    <p>
                        The prefetching system is what makes this product viable. Without it, every choice would require a 5-10 second wait,
                        which kills immersion. By pre-generating content, I can deliver an experience that feels more like a visual novel than a chatbot.
                        This is only possible because I control the entire stack and can optimize for this specific use case.
                    </p>
                </section>

                <section className="cs-section">
                    <h2>Current Experiments & Next Steps</h2>
                    <p>
                        Right now I'm focused on validating the core experience and understanding which features drive engagement.
                        No growth experiments yet—just learning and iteration.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Active Experiments</h3>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <RefreshCw className="feature-icon" />
                            <h4>Creator Onboarding</h4>
                            <p>
                                Testing different onboarding flows for creators: guided templates vs. free-form prompts vs. genre-based starters.
                                Hypothesis: most people need structure to get started, not a blank canvas.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Sparkles className="feature-icon" />
                            <h4>Story Discovery</h4>
                            <p>
                                Testing how users find stories to read: algorithmic feed vs. genre browse vs. trending lists.
                                Measuring completion rates for each discovery method.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Target className="feature-icon" />
                            <h4>Multiplayer Storytelling</h4>
                            <p>
                                Exploring whether people want to experience stories with friends—one person "directs" while others make choices together.
                                Very early experiment based on D&D/tabletop RPG insights.
                            </p>
                        </div>
                    </div>
                    <h3 style={{ marginTop: '2rem' }}>What Success Looks Like</h3>
                    <p>
                        I'm looking for these signals before launching publicly:
                    </p>
                    <ul>
                        <li><strong>Story completion rate above 60%:</strong> This tells me the experience is engaging enough to hold attention</li>
                        <li><strong>Creators publish within first session:</strong> If the creation flow is too complex, people won't use it. Need 50%+ of creators to publish their first story without dropping off.</li>
                        <li><strong>Return rate above 25% within 3 days:</strong> Shows there's enough content variety and quality to bring people back</li>
                    </ul>
                    <p>
                        Once I hit these benchmarks, I'll open up a broader beta and start testing monetization (premium stories, creator subscriptions, or ad-supported free tier).
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Plotwist;
