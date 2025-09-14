import pfp from "../assets/images/My PFP.jpg"
import "./Sidebar.css"

// Let sidebar tell the app what to display

type SidebarProps = {
    setCurrentCardContent: React.Dispatch<React.SetStateAction<string>>
}

export default function Sidebar({ setCurrentCardContent }: SidebarProps) {
    return (
        <div>
            <div className="w-[20vw] h-[80vh] rounded-xl bg-gray-800 text-white p-6 bg-[#252627]">
                <img src={pfp} alt="My profile picture" className="w-64 h-64 rounded-full object-cover mx-auto mb-4"></img>
                <h1>Andrew Mack</h1>
                <ul className="divide-y divide-[#FE9920] text-[1.5rem] sidebar-links">
                    <li><button data-section="home" onClick={() => setCurrentCardContent('home')}><span>Home</span></button></li>
                    <li><button data-section="about" onClick={() => setCurrentCardContent('about')}><span>About Me</span></button></li>
                    <li><button data-section="experience" onClick={() => setCurrentCardContent('experience')}><span>Experience</span></button></li>
                    <li><button data-section="education" onClick={() => setCurrentCardContent('education')}><span>Education</span></button></li>
                    <li><button data-section="demos" onClick={() => setCurrentCardContent('demos')}><span>Demos</span></button></li>
                    <li><button data-section="gallery" onClick={() => setCurrentCardContent('gallery')}><span>Gallery</span></button></li>
                    <li><button data-section="contact" onClick={() => setCurrentCardContent('contact')}><span>Contact Me</span></button></li>
                </ul>
            </div>
        </div>
    )
}