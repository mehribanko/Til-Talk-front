import {useState, useEffect, useRef, type RefObject} from "react";
import {createPortal} from "react-dom";
import type {WordLevel} from "../../types/WordTypes.tsx";

interface LevelFilterButtonsProps  {
    onLevelFilterCLick : (level: WordLevel) => void;
    targetRef: RefObject<HTMLDivElement | null>;
    onDealStart?: () => void;
}

const LEVEL_CONFIG: Record<WordLevel, { active: string; inactive: string; bg: string }> = {
    Beginner:     { active: 'bg-emerald-400 text-white shadow-emerald-200',  inactive: 'bg-white text-emerald-600 border-2 border-emerald-200 hover:border-emerald-400', bg: '#34d399' },
    Intermediate: { active: 'bg-amber-400 text-white shadow-amber-200',      inactive: 'bg-white text-amber-600 border-2 border-amber-200 hover:border-amber-400',       bg: '#fbbf24' },
    Advanced:     { active: 'bg-rose-400 text-white shadow-rose-200',        inactive: 'bg-white text-rose-600 border-2 border-rose-200 hover:border-rose-400',           bg: '#fb7185' },
}

const LEVELS: WordLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

type FlyingCard = {
    id: number;
    startX: number; startY: number;
    endX: number;   endY: number;
    width: number;  height: number;
    delay: number;
    bg: string;
}

// Each ghost card mounts at button position, then on next frame transitions to card position
const FlyingCardEl = ({ card }: { card: FlyingCard }) => {
    const [phase, setPhase] = useState<'start' | 'end'>('start');

    useEffect(() => {
        requestAnimationFrame(() => setPhase('end'));
    }, []);

    return (
        <div style={{
            position:  'fixed',
            left:      phase === 'end' ? card.endX : card.startX,
            top:       phase === 'end' ? card.endY : card.startY,
            width:     card.width,
            height:    card.height,
            background: card.bg,
            opacity:   phase === 'end' ? 0 : 0.88,
            transform: phase === 'end' ? 'rotate(-10deg) scale(0.65)' : 'rotate(0deg) scale(1)',
            transition: 'all 0.38s ease-in',
            transitionDelay: `${card.delay}ms`,
            borderRadius: 16,
            zIndex: 9999,
            pointerEvents: 'none',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        }} />
    );
};

export const LevelFilterButtons = ({ onLevelFilterCLick, targetRef, onDealStart }: LevelFilterButtonsProps) => {
    const [activeLevel, setActiveLevel] = useState<WordLevel>('Beginner');
    const [dealingLevel, setDealingLevel] = useState<WordLevel | null>(null);
    const [flyingCards, setFlyingCards] = useState<FlyingCard[]>([]);
    const buttonRefs = useRef<Partial<Record<WordLevel, HTMLButtonElement | null>>>({});

    const handleClick = (level: WordLevel) => {
        if (level === activeLevel || dealingLevel) return;

        const buttonEl = buttonRefs.current[level];
        const targetEl = targetRef.current;
        if (!buttonEl || !targetEl) return;

        const bRect = buttonEl.getBoundingClientRect();
        const tRect = targetEl.getBoundingClientRect();

        // Center each ghost card on the main card
        const endX = tRect.left + tRect.width  / 2 - bRect.width  / 2;
        const endY = tRect.top  + tRect.height / 2 - bRect.height / 2;

        // 3 cards staggered — slight offset so they feel like a stack landing
        const cards: FlyingCard[] = [0, 1, 2].map(i => ({
            id:     Date.now() + i,
            startX: bRect.left,
            startY: bRect.top,
            endX:   endX + (i - 1) * 5,
            endY:   endY + (i - 1) * 4,
            width:  bRect.width,
            height: bRect.height,
            delay:  i * 75,
            bg:     LEVEL_CONFIG[level].bg,
        }));

        setFlyingCards(cards);
        setDealingLevel(level);
        onDealStart?.();

        // last card finishes at: 380ms transition + 150ms delay
        setTimeout(() => {
            setFlyingCards([]);
            setActiveLevel(level);
            setDealingLevel(null);
            onLevelFilterCLick(level);
        }, 380 + 150 + 40);
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                {LEVELS.map(level => (
                    <button
                        key={level}
                        ref={el => { buttonRefs.current[level] = el; }}
                        onClick={() => handleClick(level)}
                        className={`
                            w-32 px-4 py-5 rounded-2xl text-left shadow-lg
                            transition-colors duration-200 cursor-pointer select-none
                            ${activeLevel === level ? LEVEL_CONFIG[level].active : LEVEL_CONFIG[level].inactive}
                        `}
                    >
                        <div className={`text-[10px] font-semibold uppercase tracking-widest mb-1.5 ${activeLevel === level ? 'opacity-70' : 'opacity-50'}`}>
                            Level
                        </div>
                        <div className="text-sm font-bold leading-tight">{level}</div>
                    </button>
                ))}
            </div>

            {createPortal(
                flyingCards.map(card => <FlyingCardEl key={card.id} card={card} />),
                document.body
            )}
        </>
    );
}