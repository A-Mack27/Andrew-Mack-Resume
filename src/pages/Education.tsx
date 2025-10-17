
export default function Education() {
  return (
    <>
      <h1>Tech Stack</h1>
      <hr />
      <br />
      <h2>Programming Languages</h2>
      <div className="mt-4 space-y-8">
        <div>
          <h3 className="text-xl font-bold text-[#FE9920] mb-4 border-b-2 border-[#FE9920] pb-2">Well-versed</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#FE9920] to-[#C3423F] p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">C#</h4>
              <p className="text-sm text-white/90">This is definitely my favorite language I've learned so far. Since it was the most enjoyable for me, it also meant I enjoyed learning more than was just taught in class</p>
            </div>
            <div className="bg-gradient-to-br from-[#FE9920] to-[#C3423F] p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">Java</h4>
              <p className="text-sm text-white/90">This is my second best language. Like C#, I took three semesters of Java, though I didn't like Java as much and as such didn't experiment as much</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#FE9920] mb-4 border-b-2 border-[#FE9920] pb-2">Proficient</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">TypeScript</h4>
              <p className="text-sm text-white/90">TypeScript is the foundation of this site and while I'm new to it, I quite like it. It's also what we used for our senior project application</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">HTML</h4>
              <p className="text-sm text-white/90">HTML is tricky since most of it is stuff you need to just know rather than something you can use logic to solve. This site is a good demonstration of the extent of my knowledge in HTML</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">SQL</h4>
              <p className="text-sm text-white/90">SQL is pretty straightforward and was easy to get a hold of</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">Python</h4>
              <p className="text-sm text-white/90">This is the first actual language I learned, though it was for an AP high school class through Code Academy, not in an actual IDE</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#FE9920] mb-4 border-b-2 border-[#FE9920] pb-2">Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">JavaScript</h4>
              <p className="text-sm text-white/90">It's certainly not my favorite, but I still know a fair amount and I'm working on improving my skills</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">CSS</h4>
              <p className="text-sm text-white/90">CSS requires a different approach than logic-based languages, but I'm getting more comfortable with it through practice</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">PowerShell</h4>
              <p className="text-sm text-white/90">I learned PowerShell basics in an IT class and I'm interested in exploring more automation possibilities</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-2xl text-white mb-2">Bash</h4>
              <p className="text-sm text-white/90">I also learned Bash fundamentals in an operating systems class and I'm looking forward to diving deeper</p>
            </div>
          </div>
        </div>
      </div>
        
        <br />
        <h2>Tools & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div>
            <h3>IDEs and Code Editors</h3>
            <ul className="content-list">
              <li>VS Code</li>
              <li>Visual Studio</li>
              <li>Eclipse</li>
              <li>Cursor</li>
            </ul>
            
            <h3>Frameworks</h3>
            <ul className="content-list">
              <li>Spring Boot</li>
              <li>Express.js</li>
              <li>.NET Core</li>
              <li>ASP.NET</li>
              <li>React</li>
              <li>Angular</li>
            </ul>
            
            <h3>Build and Project Management Tools</h3>
            <ul className="content-list">
              <li>Maven</li>
              <li>Gradle</li>
              <li>npm</li>
              <li>Vite</li>
            </ul>
            
            <h3>Frontend Styling and UI Tools</h3>
            <ul className="content-list">
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
            
            <h3>API Tools and Documentation</h3>
            <ul className="content-list">
              <li>Swagger</li>
              <li>Postman</li>
            </ul>
            
            <h3>Testing Frameworks</h3>
            <ul className="content-list">
              <li>JUnit</li>
              <li>Jest</li>
            </ul>
            
            <h3>Networking, Security, and Analysis Tools</h3>
            <ul className="content-list">
              <li>Wireshark</li>
              <li>Nmap</li>
              <li>Cisco Packet Tracer</li>
              <li>OpenVAS</li>
            </ul>
          </div>
          
          <div>
            <h3>Operating Systems</h3>
            <ul className="content-list">
              <li>Windows</li>
              <li>Linux (Ubuntu, Kali)</li>
            </ul>
            
            <h3>Virtualization and Containerization</h3>
            <ul className="content-list">
              <li>VMware</li>
              <li>VirtualBox</li>
              <li>Hyper-V</li>
              <li>Docker</li>
            </ul>
            
            <h3>Databases</h3>
            <ul className="content-list">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>MAMP</li>
            </ul>
            
            <h3>Web Servers</h3>
            <ul className="content-list">
              <li>Nginx</li>
              <li>Apache</li>
            </ul>
            
            <h3>Cloud Platforms</h3>
            <ul className="content-list">
              <li>Microsoft Azure</li>
              <li>Google Cloud (GCP)</li>
              <li>AWS</li>
            </ul>
            
            <h3>Version Control and Collaboration</h3>
            <ul className="content-list">
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>JIRA</li>
              <li>Confluence</li>
              <li>Atlassian</li>
            </ul>
          </div>
      </div>
    </>
  );
}
