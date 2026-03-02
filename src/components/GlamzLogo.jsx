const GlamzLogo = ({ size = 72, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ display: 'block' }}
        >
            <defs>
                <linearGradient id="gl-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f7e87a" />
                    <stop offset="45%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#9a6f0a" />
                </linearGradient>
                <linearGradient id="gl-gold2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f7e87a" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#b8860b" />
                </linearGradient>
                <filter id="gl-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="gl-softglow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Arc paths for text */}
                <path id="gl-top" d="M 14,100 A 86,86 0 0,1 186,100" />
                <path id="gl-bot" d="M 22,118 A 82,82 0 0,0 178,118" />
            </defs>

            {/* Dark background circle */}
            <circle cx="100" cy="100" r="97" fill="#050505" />

            {/* Ambient gold glow */}
            <circle cx="100" cy="100" r="70" fill="rgba(212,175,55,0.06)" />

            {/* Outer decorative ring */}
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#gl-gold)" strokeWidth="3.5" filter="url(#gl-glow)" />
            {/* Inner ring */}
            <circle cx="100" cy="100" r="82" fill="none" stroke="url(#gl-gold)" strokeWidth="1" opacity="0.5" />

            {/* Diamond sparkles left & right */}
            <g fill="url(#gl-gold)" filter="url(#gl-glow)">
                {/* Left */}
                <polygon points="12,100 14.5,94 17,100 14.5,106" />
                <polygon points="8,100 14.5,97.5 21,100 14.5,102.5" />
                {/* Right */}
                <polygon points="188,100 190.5,94 193,100 190.5,106" />
                <polygon points="184,100 190.5,97.5 197,100 190.5,102.5" />
            </g>

            {/* ── CROWN ── centered at top */}
            <g transform="translate(100,55)" fill="url(#gl-gold)" filter="url(#gl-glow)">
                {/* Crown base plate */}
                <rect x="-18" y="9" width="36" height="8" rx="2" />
                {/* Crown body / points */}
                <path d="M -18,9 L -18,-8 L -10,1 L 0,-14 L 10,1 L 18,-8 L 18,9 Z" />
                {/* Top fleur-de-lis knob */}
                <circle cx="0" cy="-16" r="3" />
                <rect x="-1.5" y="-21" width="3" height="6" rx="1.5" />
                {/* Gem dots on band */}
                <circle cx="0" cy="13" r="2.2" fill="#f7e87a" />
                <circle cx="-10" cy="13" r="1.5" fill="#f7e87a" />
                <circle cx="10" cy="13" r="1.5" fill="#f7e87a" />
            </g>

            {/* ── SCISSORS (left blade going down-right) ── */}
            <g filter="url(#gl-glow)">
                {/* Blade A */}
                <line x1="82" y1="78" x2="107" y2="138"
                    stroke="url(#gl-gold)" strokeWidth="4" strokeLinecap="round" />
                {/* Blade B */}
                <line x1="118" y1="78" x2="93" y2="138"
                    stroke="url(#gl-gold2)" strokeWidth="4" strokeLinecap="round" />
                {/* Pivot */}
                <circle cx="100" cy="108" r="5" fill="url(#gl-gold)" />
                {/* Handle ring A */}
                <circle cx="88" cy="148" r="10" fill="none" stroke="url(#gl-gold)" strokeWidth="3.5" />
                {/* Handle ring B */}
                <circle cx="112" cy="148" r="10" fill="none" stroke="url(#gl-gold2)" strokeWidth="3.5" />
            </g>

            {/* ── COMB (overlaid slightly behind scissors, right side) ── */}
            <g transform="translate(116,76) rotate(38)" fill="url(#gl-gold2)" opacity="0.95">
                {/* Spine */}
                <rect x="-5" y="0" width="10" height="52" rx="3" />
                {/* Teeth */}
                {[0, 6, 12, 18, 24, 30, 36].map((dy, i) => (
                    <rect key={i} x="-9" y={dy + 4} width="4" height="9" rx="1.5" />
                ))}
            </g>

            {/* ── TOP CURVED TEXT: GLAMZ STUDIO ── */}
            <text
                fontFamily="'Georgia', 'Palatino', serif"
                fontSize="16.5"
                fontWeight="900"
                letterSpacing="4"
                fill="url(#gl-gold)"
                filter="url(#gl-glow)"
            >
                <textPath href="#gl-top" startOffset="50%" textAnchor="middle">
                    GLAMZ STUDIO
                </textPath>
            </text>

            {/* ── BOTTOM CURVED TEXT: PREMIUM MEN'S SALON ── */}
            <text
                fontFamily="'Georgia', 'Palatino', serif"
                fontSize="11"
                fontWeight="700"
                letterSpacing="2.5"
                fill="url(#gl-gold)"
                filter="url(#gl-glow)"
            >
                <textPath href="#gl-bot" startOffset="50%" textAnchor="middle">
                    PREMIUM MEN&apos;S SALON
                </textPath>
            </text>
        </svg>
    );
};

export default GlamzLogo;
