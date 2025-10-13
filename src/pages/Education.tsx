import ProgressBar from '../components/ProgressBar'

export default function Education() {
  return (
    <>
      <h1>Tech Stack</h1>
      <hr />
      <br />
      <h2>Programming Languages</h2>
      <div className="references-table-container mt-2">
        <table className="references-table">
          <thead>
            <th><h3>Language</h3></th>
            <th><h3>Familiarity</h3></th>
          </thead>
          <tbody>
            <tr>
              <td><h3>C#</h3></td>
              <td className="references-table-td">
                <ProgressBar value={100} />
                <p className="text-sm">This is definitely my favorite language I've learned so far. Since it was
                  the most enjoyable for me, it also meant I enjoyed learning more than was just
                  taught in class
                </p>
              </td>
            </tr>
            <tr>
              <td><h3>Java</h3></td>
              <td>
                <ProgressBar value={95} />
                <p className="text-sm">This is my second best language. Like C#, I took three semesters of Java,
                  though I didn't like Java as much and as such didn't experiment as much
                </p>
              </td>
            </tr>
            <tr>
              <td><h3>TypeScript</h3></td>
              <td>
                <ProgressBar value={90} />
                <p className="text-sm">
                  TypeScript is the foundation of this site and while I'm new to it,
                  I quite like it. It's also what we used for our senior project application
                </p>
              </td>
            </tr>
            <tr>
              <td><h3>HTML</h3></td>
              <td>
                <ProgressBar value={78} />
                <p className="text-sm">
                  HTML certainly isn't my strong suit, as most of it is stuff you need to just know
                  rather than something you can use logic to solve. This site is a good demonstration
                  of the extent of my knowledge in HTML
                </p>
              </td>
            </tr>
            <tr>
              <td><h3>SQL</h3></td>
              <td>
                <ProgressBar value={75} />
                <p className="text-sm">SQL is pretty straightforward and was easy to get a hold of
                </p>
              </td>
            </tr>
            <tr>
              <td><h3>Python</h3></td>
              <td>
                <ProgressBar value={60} />
                <p className="text-sm">
                  This is the first actual language I learned, though it was for an AP high
                  school class through Code Academy, not in an actual IDE
                </p>
              </td>
            </tr>
            <tr>
              <td><h3>JavaScript</h3></td>
              <td>
                <ProgressBar value={50} />
                <p className="text-sm">It's certainly not my favorite, but I still know a fair amount</p>
              </td>
            </tr>
            <tr>
              <td><h3>CSS</h3></td>
              <td>
                <ProgressBar value={40} />
                <p className="text-sm">CSS is challenging for the same reasons as HTML, but I can still manage</p>
              </td>
            </tr>
            <tr>
              <td><h3>PowerShell</h3></td>
              <td>
                <ProgressBar value={20} />
                <p className="text-sm">I did a very small amount of PowerShell for an IT class</p>
              </td>
            </tr>
            <tr>
              <td><h3>Bash</h3></td>
              <td>
                <ProgressBar value={15} />
                <p className="text-sm">I also did a very small amount of Bash for an operating systems class</p>
              </td>
            </tr>
          </tbody>
        </table>
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
