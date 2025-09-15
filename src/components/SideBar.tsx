import pfp from "../assets/images/andrew-profile-picture.jpg"
import "./Sidebar.css"

// Let sidebar tell the app what to display
type SidebarProps = {
    setCurrentCardContent: React.Dispatch<React.SetStateAction<string>>
}

export default function Sidebar({ setCurrentCardContent }: SidebarProps) {
    return (
        <div>
            <div className="w-[17vw] min-w-[17vw] max-h-[85vh] h-auto rounded-xl bg-gray-800 text-white p-6 bg-[#252627] overflow-y-auto">

                <img src={pfp} alt="My profile picture" className="w-full max-w-[200px] aspect-square rounded-full object-cover mx-auto mb-2"></img>
                <h1 className="text-center !text-[1.9rem]">Andrew Mack</h1>
                <ul className="divide-y divide-[#FE9920] sidebar-buttons">
                    <li><button data-section="home" onClick={() => setCurrentCardContent('home')}><span>Home</span></button></li>
                    <li><button data-section="about" onClick={() => setCurrentCardContent('about')}><span>About</span></button></li>
                    <li><button data-section="experience" onClick={() => setCurrentCardContent('experience')}><span>Experience</span></button></li>
                    <li><button data-section="education" onClick={() => setCurrentCardContent('education')}><span>Education</span></button></li>
                    <li><button data-section="demos" onClick={() => setCurrentCardContent('demos')}><span>Demos</span></button></li>
                    <li><button data-section="gallery" onClick={() => setCurrentCardContent('gallery')}><span>Gallery</span></button></li>
                    <li><button data-section="contact" onClick={() => setCurrentCardContent('contact')}><span>Contact</span></button></li>
                </ul>
            </div>
        </div>
    )
}