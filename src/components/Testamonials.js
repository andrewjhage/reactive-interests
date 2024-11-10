import React from "react";

const Testimonials = ({ title, testimonialText, authorName, authorTitle, authorImage }) => {
    return (
        <section className="relative py-28 bg-blue-600">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-blue-100 font-semibold pb-6">{title}</h3>
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl font-semibold sm:text-2xl">
                                {testimonialText}
                            </p>
                        </blockquote>
                        <div className="mt-6">
                            <img 
                                src={authorImage} 
                                alt={authorName} 
                                className="w-16 h-16 mx-auto rounded-full" 
                            />
                            <div className="mt-3">
                                <span className="block text-white font-semibold">{authorName}</span>
                                <span className="block text-blue-100 text-sm mt-0.5">{authorTitle}</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
        </section>
    );
};

export default Testimonials;
