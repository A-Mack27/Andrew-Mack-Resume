import { useCallback, useEffect, useRef, useState } from 'react';

const ROLE_TITLES = [
    'Software Development',
    'Cybersecurity',
    'Information Technology',
] as const;

const ROTATE_MS = 5000;
const TRANSITION_MS = 450;

function RotatingRoleTitle() {
    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState<{ from: number; to: number } | null>(null);
    const indexRef = useRef(0);

    const startTransition = useCallback(() => {
        const from = indexRef.current;
        const to = (from + 1) % ROLE_TITLES.length;
        setTransition({ from, to });
    }, []);

    useEffect(() => {
        const intervalId = window.setInterval(startTransition, ROTATE_MS);
        return () => window.clearInterval(intervalId);
    }, [startTransition]);

    useEffect(() => {
        if (!transition) return;

        const timeoutId = window.setTimeout(() => {
            indexRef.current = transition.to;
            setIndex(transition.to);
            setTransition(null);
        }, TRANSITION_MS);

        return () => window.clearTimeout(timeoutId);
    }, [transition]);

    return (
        <div
            className="relative h-6 min-w-[13.5rem] overflow-hidden text-right font-semibold whitespace-nowrap"
            aria-live="polite"
        >
            {transition ? (
                <>
                    <span className="absolute inset-0 flex items-center justify-end navbar-role-exit">
                        {ROLE_TITLES[transition.from]}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-end navbar-role-enter">
                        {ROLE_TITLES[transition.to]}
                    </span>
                </>
            ) : (
                <span className="flex h-full items-center justify-end">{ROLE_TITLES[index]}</span>
            )}
        </div>
    );
}

// Put linkedin, email, throwaway email, github
function Navbar({ setCurrentCardContent }: { setCurrentCardContent: (page: string) => void }) {
    const goToContact = () => {
        setCurrentCardContent('contact');
    };

    return (
        <nav className="bg-[#C3423F] text-white p-4 flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
                <button 
                    onClick={goToContact}
                    className="text-white hover:text-[#FE9920] transition-colors duration-200 cursor-pointer font-semibold"
                >
                    Andrew Mack
                </button>
                <a 
                    href="https://www.linkedin.com/in/andrew-mack-492375360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#C3423F] hover:bg-[#FE9920] hover:text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                >
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/A-Mack27?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#C3423F] hover:bg-[#FE9920] hover:text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                >
                    GitHub
                </a>
            </div>
            <RotatingRoleTitle />
        </nav>
    )
}

export default Navbar
