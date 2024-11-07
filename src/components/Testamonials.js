import React from "react";

const Testamonials = () => {
    return (
        <section className="relative py-28 bg-blue-600">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-blue-100 font-semibold pb-6">What people are saying</h3>
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl font-semibold sm:text-2xl">
                                “Working with Andrew has been a game-changer for my fitness journey! From our very first session, he took the time to understand my goals, strengths, and limitations, creating a plan that was both challenging and achievable. His attention to form and technique made me feel confident and safe, especially when trying new exercises. Andrew's energy is contagious, and he always knows how to push me just the right amount to keep me motivated. I've not only seen significant physical changes but also feel stronger and more energized in my daily life. If you're looking for a trainer who truly cares about your progress and well-being, Andrew is the one! “
                            </p>
                        </blockquote>
                        <div className="mt-6">
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="Our Content" className="w-16 h-16 mx-auto rounded-full" />
                            <div className="mt-3">
                                <span className="block text-white font-semibold">Andrew Hage</span>
                                <span className="block text-blue-100 text-sm mt-0.5">Founder of Andrew's Training Inc.</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
        </section>
    );
};

export default Testamonials;

