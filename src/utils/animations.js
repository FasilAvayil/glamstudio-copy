export const fadeIn = (direction = 'up', delay = 0) => {
    return {
        initial: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0,
        },
        animate: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        initial: {},
        animate: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};

export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export const staggerChildren = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};
