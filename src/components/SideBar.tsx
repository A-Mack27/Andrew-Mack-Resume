import pfp from "../assets/images/My PFP.jpg"

export default function SideBar() {
    return (
        <div>
            <div className="w-[20vw] h-[75vh] rounded-xl bg-gray-800 text-white p-6 bg-[#252627]">
                <img src={pfp} alt="My profile picture" className="w-64 h-64 rounded-full object-cover mx-auto mb-4"></img>
                <h1>Andrew Mack</h1>
                <p>Links will go here</p>
            </div>
        </div>
    )
    
}

