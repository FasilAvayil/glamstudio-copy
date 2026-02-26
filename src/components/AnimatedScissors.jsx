import React from 'react';

const AnimatedScissors = ({ className = "h-8 w-8" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className} overflow-visible text-glam-gold`}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
            >
                {/* Top Blade & Bottom Handle */}
                <g>
                    <circle cx="6" cy="18" r="3" />
                    <path d="M20 4L8.12 15.88" />
                </g>

                {/* Bottom Blade & Top Handle */}
                <g>
                    <circle cx="6" cy="6" r="3" />
                    <path d="M8.12 8.12L20 20" />
                </g>

                {/* Pivot point */}
                <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
        </div>
    );
};

export default AnimatedScissors;
