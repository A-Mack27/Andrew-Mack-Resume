import cards from "../assets/images/shuffling-cards.jpg"
import kitchen from "../assets/images/andrew-in-kitchen.jpg"

type HomeProps = {
  setCurrentCardContent: React.Dispatch<React.SetStateAction<string>>
}

export default function Home({ setCurrentCardContent }: HomeProps) {
  return (
    <>
      <h1>
        Home
      </h1>
      <hr />
      <div className="flex flex-wrap justify-center mb-4 mt-8 gap-16">
        <img src={cards} alt="Bass" className="w-full max-w-[610px] h-auto object-cover border-4 border-[#C3423F] rounded-sm" />
        <img src={kitchen} alt="Bass" className="w-full max-w-[305px] h-auto object-cover border-4 border-[#C3423F] rounded-sm" />
      </div>
      <h2>Welcome to my website!</h2>
      <p className="mb-7">
        Thanks for taking the time to look at my site! Feel free to{' '}
        <button onClick={() => setCurrentCardContent('about')} className="nav-button">
          get to know me
        </button>
        , see what I've{' '}
        <button onClick={() => setCurrentCardContent('experience')} className="nav-button">
          done
        </button>
        , and see what I've{' '}
        <button onClick={() => setCurrentCardContent('education')} className="nav-button">
          learned
        </button>
        . You can also try a{' '}
        <button onClick={() => setCurrentCardContent('demos')} className="nav-button">
          demo
        </button>
        , look at some cool{' '}
        <button onClick={() => setCurrentCardContent('gallery')} className="nav-button">
          pictures
        </button>
        , or{' '}
        <button onClick={() => setCurrentCardContent('contact')} className="nav-button">
          get in touch
        </button>
        !
      </p>
    </>
  );
};
