import { Link } from "react-router-dom";
import { hero1, hero2 } from "../assets/images";
import { useGlobalContext } from "../useGlobleContext";

const Hero = () => {
  const { setShowMenu, handleActivePage } = useGlobalContext();
  return (
    <section
      className="w-full padding py-20 dark:bg-gray-800"
      onClick={() => setShowMenu(() => false)}
    >
      <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
        <div>
          <h1 className="max-w-2xl text-4xl sm:text-6xl text-dark_gray font-bold dark:text-slate-200 ">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg text-slate-600 leading-8 dark:text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            veritatis. Perspiciatis aspernatur impedit nesciunt eos libero enim
            nam natus beatae et sunt vitae dolor rem quas, dolores perferendis
            vel assumenda.
          </p>
          <button type="button" className="mt-8 active:scale-95">
            <Link
              to={"/products"}
              className="bg-light_blue text-slate-300 text-sm p-3 rounded-lg uppercase font-semibold hover:bg-blue-700 dark:text-dark dark:bg-light_pink dark:hover:bg-pink-500"
              onClick={() => handleActivePage("Products")}
            >
              our products
            </Link>
          </button>
        </div>

        <div className="hidden lg:flex h-[28rem] bg-neutral rounded-xl p-4 overflow-hidden space-x-4 dark:bg-light_black">
          <img src={hero1} alt="hero1" className="h-full w-80 rounded-xl" />
          <img src={hero2} alt="hero1" className="h-full w-80 rounded-xl" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
