
// Put linkedin, email, throwaway email, github
function Navbar({ setCurrentCardContent }: { setCurrentCardContent: (page: string) => void }) {
    const goToContact = () => {
        setCurrentCardContent('contact');
    };

    return (
        <nav className="bg-[#C3423F] text-white p-4 flex justify-between w-full">
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
            <div>Software Developer + Cybersecurity</div>
        </nav>
    )
}

export default Navbar