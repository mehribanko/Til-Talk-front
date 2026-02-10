
export const getCardStyle = (tilt: string | null) => {
    const base = 'transition-all duration-300 ease-out';
    switch (tilt) {
        case 'left':
            return {
                transform: 'rotate(-12deg) translateX(-60px) translateY(-20px)',
                boxShadow: '20px 10px 30px rgba(0,0,0,0.15)',
            };
        case 'right':
            return {
                transform: 'rotate(12deg) translateX(60px) translateY(-20px)',
                boxShadow: '-20px 10px 30px rgba(0,0,0,0.15)',
            };
        default:
            return {
                transform: 'rotate(0deg)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            };
    }
};