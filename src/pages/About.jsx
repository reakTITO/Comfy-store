import { useEffect } from "react";
import { useGlobalContext } from "../useGlobleContext";

const About = () => {
  const { setShowMenu, handleActivePage } = useGlobalContext();

  useEffect(() => {
    handleActivePage("About");
  }, []);
  return (
    <section
      className="flex justify-center items-center w-full py-20 padding dark:bg-gray-800"
      onClick={() => setShowMenu(() => false)}
    >
      <div>
        <h1 className="flex items-center justify-center gap-4 text-4xl md:text-6xl  text-dark_gray dark:text-slate-300 font-bold">
          We love{" "}
          <span className="bg-light_blue text-4xl font-semibold text-light_gray p-4 rounded-2xl tracking-widest dark:bg-light_pink dark:text-dark">
            comfy
          </span>
        </h1>

        <p className="max-w-xl mt-6 text-lg text-slate-500 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          ipsa dolor esse iure hic quo soluta ab optio laboriosam! Et, illo
          molestias cumque repudiandae libero est iure nisi maiores impedit.
        </p>
      </div>
    </section>
  );
};
export default About;
