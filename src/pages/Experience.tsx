export default function Experience() {
  return (
    <>
      <h1>Experience</h1>
      <hr />
      <br />
      <h2>Note</h2>
      <p>
        Currently, I do not have any experience in the software development field. I've spent my life working
        in the food industry, and while that isn't relevant to programming, it still teaches a lot in regard to
        things such as patience, efficiency, work ethic, and interacting with both customers and coworkers. That
        being said, I love learning. I want to know more about working in a software development space and I'm
        eager to gain some coding experience in a professional environment
      </p>
      <h2 className="mt-4">Jobs and Volunteer Work</h2>
      <ul className="content-list mb-4">
        <li>Over 18 months at Noodles and Company as a noodle cooker, accuracy specialist, expo worker, prepper, and dishwasher</li>
        <li>5 months at I Heart Mac & Cheese working dish, prep, and register</li>
        <li>Volunteered a few times at Operation Christmas Child, an organization dedicated to providing essentials to those less 
          fortunate in other countries
        </li>
        <li>Four months at Great Harvest Bread CO working register, dish, sandwich cart, and closer</li>
        <li>Volunteered to play bass guitar at an event with 300 attendees</li>
        <li>12 months at the Jimmy John's on my college campus, working in every non-managerial position</li>
      </ul>
      <h2>References</h2>
      <div className="references-table-container">
        <table className="references-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Relation</th>
              <th>Contact Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Owen Lindsey</td>
              <td>Capstone project leader</td>
              <td>Owen.lindsey98@outlook.com</td>
            </tr>
            <tr>
              <td>Josiah Nelson</td>
              <td>Coworker at several places</td>
              <td>(720)-841-8227<br />josiahnelson55@gmail.com</td>
            </tr>
            <tr>
              <td>Joey Kellogg</td>
              <td>Great Harvest store owner</td>
              <td>(303)-909-6180<br />jkellogg@greatharvest.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
