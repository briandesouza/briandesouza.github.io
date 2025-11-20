import React from 'react';
import { ArrowLeft, Sparkles, Lock, Zap } from 'lucide-react';
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
                    <p className="cs-subtitle">Helping people visualize their future with personalized AI imagery</p>
                    <div className="cs-tags">
                        <span>0-to-1 Product</span>
                        <span>iOS Development</span>
                        <span>Currently in TestFlight</span>
                    </div>
                    <div className="cs-hero-cover">
                        <img src="/img/visionboard-cover.png" alt="VisionBoardAI preview" />
                    </div>
                </div>
                <div className="cs-hero-bg visionboard-bg-gradient"></div>
            </header>

            {/* Content */}
            <div className="container cs-content">
                <section className="cs-section">
                    <h2>Overview</h2>
                    <p>
                        VisionBoardAI helps people create personalized vision boards by placing themselves—not random stock photos—into their dream life.
                        Upload a few selfies, and the app creates an idealized "Future Self" avatar. Then use that avatar to try on designer outfits,
                        place yourself in luxury travel destinations, or design your dream home.
                    </p>
                    <p>
                        I'm currently in TestFlight, testing the core features (Future Self creation, Add Me tool, Wardrobe try-ons, Magic Edit for homes)
                        and validating whether this resonates with the manifestation community. This is a pure 0-to-1 product challenge—no usage data yet,
                        just qualitative feedback and hypothesis testing.
                    </p>
                </section>

                <section className="cs-section">
                    <h2>Problem Discovery</h2>
                    <p>
                        The idea started when I noticed my girlfriend and her friends creating physical vision boards—cutting out magazine photos
                        and Pinterest prints of dream homes, travel destinations, and fashion inspiration. But the images never actually looked like them.
                        It was always someone else's life they were visualizing.
                    </p>
                    <p>
                        I started asking women (20s-40s) who believe in manifestation about their vision board process. Same story: they'd spend hours
                        finding images on Pinterest, but none felt truly personal. "I want to see <em>me</em> in that Paris apartment," one person told me.
                        "I want to see myself wearing that outfit, not some model."
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Core Hypotheses</h3>
                    <p>
                        These conversations shaped three key hypotheses:
                    </p>
                    <ul>
                        <li><strong>Personal imagery drives belief:</strong> Seeing yourself—your actual face and body—in your dream scenario makes manifestation feel real, not aspirational.</li>
                        <li><strong>Creation should be playful, not technical:</strong> People want to experiment with outfits, homes, and destinations without learning prompt engineering or design tools.</li>
                        <li><strong>Privacy matters deeply:</strong> Vision boards are intimate. Users need to feel safe uploading selfies and personal dreams without worrying about data privacy.</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Target Users</h2>
                    <p>
                        I'm building for women who already believe in manifestation and create vision boards—they just want a better way to do it.
                    </p>
                    <div className="cs-card">
                        <h3>The Manifestation Enthusiast</h3>
                        <p><strong>Who:</strong> Women, 22-40 years old, who actively practice manifestation or create vision boards (digital or physical)</p>
                        <p><strong>Behavior:</strong> Spends hours on Pinterest saving images of dream homes, fashion inspiration, travel destinations. Journals about goals, follows manifestation creators on social media.</p>
                        <p><strong>Current pain:</strong> The images on Pinterest never look like her. She's visualizing someone else's life, not her own. It doesn't feel personal or believable.</p>
                        <p><strong>Dream outcome:</strong> See herself—her actual face and body—living in that dream apartment, wearing that designer outfit, or standing in that tropical destination.</p>
                        <p><strong>Key categories:</strong> Dream home design, fashion/wardrobe goals, travel aesthetics, fitness/wellness transformations, career visualization</p>
                    </div>
                    <h3 style={{ marginTop: '2rem' }}>What I'm Learning in TestFlight</h3>
                    <ul>
                        <li><strong>Home design is massive:</strong> Women spend the most time using Magic Edit to perfect dream home interiors—changing furniture, colors, layouts.</li>
                        <li><strong>Wardrobe try-ons drive engagement:</strong> The ability to see yourself in different outfits (without actually shopping) is highly addictive.</li>
                        <li><strong>"Add Me" creates belief:</strong> Placing yourself in a scene (not just seeing generic travel photos) makes the goal feel achievable, not aspirational.</li>
                        <li><strong>Weekly refresh is desired:</strong> Users want to regenerate boards regularly as their style or goals evolve—this isn't a one-and-done activity.</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Product Approach & Development</h2>
                    <p>
                        I'm doing everything on this product—user research, product strategy, design, iOS development, and backend infrastructure.
                        This gives me complete control over priorities and lets me iterate incredibly fast based on feedback.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>How I'm Building</h3>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <Sparkles className="feature-icon" />
                            <h4>Weekly TestFlight Releases</h4>
                            <p>
                                I ship a new build every week with 1-2 hypothesis tests. After each release, I run feedback sessions with 5-8 testers
                                to understand what's working and what needs to change.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Zap className="feature-icon" />
                            <h4>SwiftUI + AI Tools</h4>
                            <p>
                                I write all the iOS code in SwiftUI, using Cursor and Claude to help with boilerplate and move faster.
                                This lets me stay focused on product decisions rather than syntax.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Lock className="feature-icon" />
                            <h4>User Feedback Loops</h4>
                            <p>
                                After each TestFlight release, I run 1-on-1 sessions with 5-8 users to watch them use the features.
                                This qualitative feedback drives every prioritization decision.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <h2>Product Features & Technical Approach</h2>
                    <p>
                        The app is built around four core features, each solving a specific part of the vision board creation process:
                    </p>
                    <div className="feature-grid">
                        <div className="feature-item">
                            <Sparkles className="feature-icon" />
                            <h4>Future Self Creation</h4>
                            <p>
                                Upload 1-3 selfies, choose body type and outfit style, and the app generates an idealized version of you. This "Future Self"
                                becomes the avatar used across all other features.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Zap className="feature-icon" />
                            <h4>Add Me Tool</h4>
                            <p>
                                Take any image (travel destination, luxury home, event venue) and seamlessly place your Future Self into it.
                                This makes manifestation feel real—it's you in Paris, not a random model.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Lock className="feature-icon" />
                            <h4>Wardrobe Try-Ons</h4>
                            <p>
                                Experiment with different outfits on your Future Self without actually shopping. Users can visualize their style goals
                                and see themselves in designer looks before committing.
                            </p>
                        </div>
                        <div className="feature-item">
                            <Sparkles className="feature-icon" />
                            <h4>Magic Edit for Homes</h4>
                            <p>
                                Use natural language to edit interior spaces: "Make the couch cream colored" or "Add gold accents to the room."
                                Users can perfect their dream home down to the smallest detail.
                            </p>
                        </div>
                    </div>
                    <h3 style={{ marginTop: '2rem' }}>Technical Stack</h3>
                    <ul>
                        <li><strong>SwiftUI + Firebase:</strong> Native iOS app with Firestore for board storage and Firebase Auth for secure user sessions.</li>
                        <li><strong>Cloudflare Workers:</strong> Proxies all AI requests (Fal, Replicate) to keep API keys server-side and add rate limiting.</li>
                        <li><strong>Image generation models:</strong> Using Fal's nano-banana-edit and Seedream v4 for face blending and scene composition. Models are configurable server-side so I can A/B test without app updates.</li>
                        <li><strong>Natural language editing:</strong> Integrating GPT-4 Vision to translate user text prompts into image editing parameters for Magic Edit.</li>
                    </ul>
                </section>

                <section className="cs-section">
                    <h2>Current Experiments & Next Steps</h2>
                    <p>
                        I'm focused on validating whether the core features resonate and understanding which ones drive the most engagement.
                        No growth experiments yet—just learning.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Active Experiments</h3>
                    <ul>
                        <li><strong>Onboarding flow:</strong> Testing whether users should start with Future Self creation or jump straight into a board category (Home, Travel, Fashion). Hypothesis: starting with Future Self builds more investment.</li>
                        <li><strong>Home editing depth:</strong> How much control do users want with Magic Edit? Testing simple presets vs. full natural language editing. Early signal: people want granular control.</li>
                        <li><strong>Wardrobe library:</strong> Should outfit try-ons come from a curated library or user-uploaded inspiration images? Testing both approaches.</li>
                        <li><strong>Board organization:</strong> Validating whether pre-defined categories (Home, Travel, Career, Fashion, Wellness) work or if users want custom board creation.</li>
                        <li><strong>Weekly regeneration:</strong> Testing notifications that encourage users to update boards as their goals evolve. Hypothesis: this creates a recurring habit.</li>
                    </ul>
                    <h3 style={{ marginTop: '2rem' }}>Success Metrics Before Launch</h3>
                    <ul>
                        <li><strong>Creation completion:</strong> 75%+ of users successfully create a Future Self and add it to at least one board</li>
                        <li><strong>Feature adoption:</strong> Users try at least 2 of the 4 core features (Add Me, Wardrobe, Magic Edit) within their first session</li>
                        <li><strong>7-day return rate:</strong> 30%+ come back within a week to update or create new boards</li>
                        <li><strong>Qualitative signal:</strong> Users describe feeling like the board is "actually mine" or "this is really me"</li>
                    </ul>
                    <p>
                        Once these benchmarks hit, I'll expand TestFlight and start testing monetization (subscription tiers, board limits, premium styles).
                    </p>
                </section>
            </div>
        </div>
    );
};

export default VisionBoardAI;
