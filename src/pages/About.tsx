import bass from "../assets/images/andrew-bass-lookout.jpg"
import drawing from "../assets/images/macy-andrew-drawing.png"

export default function About() {
  return (
    <>
      <h1>
        About
      </h1>
      <hr />
      <br />
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <figure className="w-full max-w-[450px] mx-auto">
          <div className="h-[300px]">
            <img src={bass} alt="A silhouette of me holding a bass" className="w-full h-full object-cover border-4 border-[#C3423F] rounded-sm" loading="lazy" />
          </div>
          <figcaption className="my-figcaption">
            I love playing bass!
          </figcaption>
        </figure>

        <figure className="w-full max-w-[450px] mx-auto">
          <div className="h-[300px]">
            <img src={drawing} alt="A drawing of my fiance and I" className="w-full h-full object-cover border-4 border-[#C3423F] rounded-sm" loading="lazy" />
          </div>
          <figcaption className="my-figcaption">
          {"My sister drew this and my pfp. She's so cool >:)"}
          </figcaption>
        </figure>
      </div>

      <h2>
        A bit of background...
      </h2>
      
      <div className="paragraphs">
        <p>
          Hi, I'm Andrew Mack! I'm a Software Development major with a minor in Cybersecurity at Grand Canyon 
          University, expected to graduate in 2025. Ever since I was nine, I've had a fascination with computers. In 2013, I created my Scratch account
          and I've never looked back.
        </p>

        <p>
        I love learning and applying my skills! I want to work in a software development or IT team environment where I can apply my skills and gain professional experience. Currently, I'm developing the Resource Library Service for LUNARA, an app for Doulas that connects postpartum mothers with certified Doulas and support specialists.
        </p>

        <p>
          I like taking on any project that involves coding. Computers are very straightforward; binary is a definitive yes 
          or no. Being on the spectrum, my brain naturally works that same way. Logic is by far my biggest strength.
        </p>

        <p>
          Outside of tech, you'll probably find me out on a disc golf course, at a concert, watching Formula One, playing bass,
          or shooting photos with my great-grandfather's film camera. I'm also engaged to the most beautiful woman in the world :)
        </p>
      </div>
    </>
  );
};
