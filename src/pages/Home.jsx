import { useEffect } from "react";
import { Hero, Featured } from "../components";
import { useGlobalContext } from "../useGlobleContext";

const Home = () => {
  const { handleActivePage } = useGlobalContext();

  useEffect(() => {
    handleActivePage("Home");
  }, []);
  return (
    <>
      <Hero />
      <Featured />
    </>
  );
};
export default Home;
