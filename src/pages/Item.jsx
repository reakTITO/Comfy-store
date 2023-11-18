import { useParams } from "react-router";
import { useGlobalContext } from "../useGlobleContext";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const Item = () => {
  const { handleAddToCart, setShowMenu, handleActivePage } = useGlobalContext();
  const [product, setProduct] = useState({});
  const [activeColor, setActiveColor] = useState("");
  const [loading, setLoading] = useState(false);
  const selectAmount = useRef();

  const { id } = useParams();

  useEffect(() => {
    handleActivePage("Products");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://course-api.com/react-store-single-product?id=${id}`
        );
        setProduct(response.data);
        setActiveColor(response.data.colors[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const {
    images,
    name,
    company,
    category,
    shipping,
    colors,
    price,
    description,
  } = product;
  let newPrice = 0;
  if (price && price.toString().split("").length >= 5) {
    newPrice = Number(price.toString().split("").splice(0, 5).join("")) / 100;
  } else {
    newPrice = price / 100;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section
      className="padding dark:bg-gray-800"
      onClick={() => setShowMenu(() => false)}
    >
      <div className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-8 place-items-center md:place-items-start">
        <img
          src={images && images[0].thumbnails.full.url}
          alt={name}
          className="w-96 h-96 lg:w-full rounded-2xl object-cover dark:bg-dark"
        />
        <div>
          <h2 className="text-3xl capitalize text-dark_gray font-bold dark:text-slate-200">
            {name}
          </h2>
          <h3 className="mt-2 text-lg capitalize text-slate-500 font-bold dark:text-slate-200">
            {company}
          </h3>
          <h4 className="mt-2 text-xl text-slate-700 dark:text-slate-200">
            ${newPrice}
          </h4>
          <p className="mt-6 text-slate-600 leading-7 dark:text-slate-200">
            {description}
          </p>

          <div className="mt-2 flex flex-col">
            <p className="text-dark_gray font-semibold dark:text-slate-200">
              Colors:{" "}
            </p>
            <div className="mt-2 flex space-x-2">
              {colors &&
                colors.map((color) => (
                  <button
                    className={`w-[1.25rem] h-[1.25rem] rounded-full ${
                      activeColor === color &&
                      "outline outline-2 outline-blue-900 dark:outline-light_gray"
                    }`}
                    style={{ backgroundColor: `${color}` }}
                    key={color}
                    onClick={() => setActiveColor(color)}
                  ></button>
                ))}
            </div>
          </div>

          <div className="flex flex-col max-w-xs mt-4">
            <label htmlFor="amount" className="form-label font-bold">
              Amount
            </label>
            <select
              name="amount"
              id="amount"
              className="mt-2 border rounded-lg p-3 bg-transparent focus:outline-none dark:text-slate-200 dark:outline-violet-400 dark:border-violet-300 dark:op"
              ref={selectAmount}
            >
              <option value="1" className="opt">
                1
              </option>
              <option value="2" className="opt">
                2
              </option>
              <option value="3" className="opt">
                3
              </option>
              <option value="4" className="opt">
                4
              </option>
              <option value="5" className="opt">
                5
              </option>
              <option value="6" className="opt">
                6
              </option>
            </select>
          </div>
          <button
            type="button"
            className="mt-8 p-3 uppercase text-slate-300 text-sm font-bold bg-violet-700 rounded-lg hover:bg-violet-800 active:scale-95 dark:bg-violet-400 dark:hover:bg-violet-500 dark:text-slate-800 dark:font-semibold"
            onClick={() => {
              const amount = Number(selectAmount.current.value);
              handleAddToCart({
                id: id + activeColor,
                images,
                name,
                newPrice,
                activeColor,
                amount,
                company,
              });
              alert("Item added to cart.");
            }}
          >
            add to bag
          </button>
        </div>
      </div>
    </section>
  );
};
export default Item;
