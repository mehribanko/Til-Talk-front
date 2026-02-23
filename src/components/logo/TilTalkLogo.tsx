interface TilTalkLogoProps {
    size?: number;
}

export const TilTalkLogo = ({ size = 38 }: TilTalkLogoProps) => {
    return (
        <div className="flex items-center gap-3">
            <svg
                width={Math.round(size * 51 / 37)}
                height={size}
                viewBox="0 0 51 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="lgLeft" x1="0" y1="37" x2="51" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#a855f7" />  {/* purple-500 */}
                        <stop offset="100%" stopColor="#d8b4fe" />  {/* purple-300 */}
                    </linearGradient>

                    <linearGradient id="lgRight" x1="0" y1="37" x2="51" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#6d28d9" />  {/* violet-700 */}
                        <stop offset="100%" stopColor="#8b5cf6" />  {/* violet-500 */}
                    </linearGradient>
                </defs>

                {/* Left bubble — 말 is Korean for "word / language" */}
                <rect x="1" y="6" width="27" height="21" rx="7" fill="url(#lgLeft)" />
                <path d="M5 27 L1 36 L16 28 Z" fill="url(#lgLeft)" />
                <text x="14" y="21" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">말</text>

                {/* Right bubble — til is Karakalpak for "language / tongue" */}
                <rect x="18" y="1" width="27" height="21" rx="7" fill="url(#lgRight)" />

                <path d="M41 22 L49 34 L33 23 Z" fill="url(#lgRight)" />
                <text x="31" y="15" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">til</text>
            </svg>

            <div className="flex items-baseline gap-0.5 leading-none">
                <span className="text-xl font-bold tracking-tight text-purple-700">til</span>
                <span className="text-purple-300 font-light">·</span>
                <span className="text-xl font-bold tracking-tight text-purple-500">talk</span>
            </div>
        </div>
    )
}
