import pfp from "../assets/images/My PFP.jpg"
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div>
            <div className="w-[20vw] h-[75vh] rounded-xl bg-gray-800 text-white p-6 bg-[#252627]">
                <img src={pfp} alt="My profile picture" className="w-64 h-64 rounded-full object-cover mx-auto mb-4"></img>
                <h1>Andrew Mack</h1>
                <ul className="divide-y divide-[#FE9920] text-[2.2rem] sidebar-links">
                    <li><a href="#"><span>Home</span></a></li>
                    <li><a href="#"><span>About Me</span></a></li>
                    <li><a href="#"><span>Experience</span></a></li>
                    <li><a href="#"><span>Education</span></a></li>
                    <li><a href="#"><span>Gallery</span></a></li>
                    <li><a href="#"><span>Contact Me</span></a></li>
                </ul>
            </div>
        </div>
    )
    
}