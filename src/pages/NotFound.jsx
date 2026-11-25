import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main className="flex min-h-dvh flex-col items-center justify-center bg-white px-4 text-center">
            <title>페이지를 찾을 수 없어요 | 빌리지</title>
            <svg
                viewBox="0 0 660 280"
                className="w-full max-w-165"
                role="img"
                aria-label="404"
            >
                <defs>
                    <linearGradient id="number-color" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9868FF" />
                        <stop offset="100%" stopColor="#DDCAFF" />
                    </linearGradient>

                    <filter id="number-inner-shadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
                        <feOffset in="blur" dy="5" result="offset" />
                        <feComposite in="SourceAlpha" in2="offset" operator="out" result="edge" />
                        <feFlood floodColor="#35145B" floodOpacity="0.3" result="color" />
                        <feComposite in="color" in2="edge" operator="in" result="shadow" />
                        <feMerge>
                            <feMergeNode in="SourceGraphic" />
                            <feMergeNode in="shadow" />
                        </feMerge>
                    </filter>
                </defs>
            <text
                x="330"
                y="270"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="360"
                fontWeight="700"
                fill="url(#number-color)"
                filter="url(#number-inner-shadow)"
            >
                404
            </text>
            </svg>

            <h1 className="mt-6 text-[44px] font-bold">
                페이지를 찾지 못했어요.
            </h1>

            <p className="mt-1 text-[24px] text-gray-600">
                혹시 주소가 틀리진 않으셨나요?
            </p>

            <Link
                to="/"
                className="
                    mt-3 rounded-2xl px-4.5 py-1
                    bg-[linear-gradient(44deg,#8F5DFD_0%,#BEA0FF_100%)]
                    text-[20px] text-white
                    transition-opacity hover:opacity-80
                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)]
                "
            >
                홈으로 가기 →
            </Link>
        </main>
    )
}