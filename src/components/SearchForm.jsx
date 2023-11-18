import { useRef, useState } from "react";
import { useGlobalContext } from "../useGlobleContext";

const SearchForm = () => {
  const { setSearchParam, searchParam } = useGlobalContext();
  const [name, setName] = useState(searchParam.name || "");
  const [category, setCategory] = useState(searchParam.category || "");
  const [price, setPrice] = useState(searchParam.price || 1000);
  const [sort, setSort] = useState(searchParam.sort || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const param = {
      name,
      category,
      sort,
      price: Number(price),
      value: true,
    };

    setSearchParam(() => param);
    localStorage.setItem("searchParam", JSON.stringify(param));
    console.log(param);
  };
  const handleReset = () => {
    setSearchParam({ value: false });
    setName("");
    setCategory("");
    setPrice(1000);
    setSort("");

    localStorage.removeItem("searchParam");
  };

  return (
    <form
      className="bg-light_gray p-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-md dark:bg-dark"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col">
        <label htmlFor="product" className="form-label">
          Search Product
        </label>
        <input
          type="text"
          name="product"
          id="product"
          className="form-control"
          value={name}
          onChange={(e) => setName(() => e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="category" className="form-label">
          Select Category
        </label>
        <select
          name="category"
          id="category"
          className="form-control text-sm font-semibold"
          value={category}
          onChange={(e) => setCategory(() => e.target.value)}
        >
          <option value="">all</option>
          <option value="office">office</option>
          <option value="living room">living room</option>
          <option value="kitchen">kitchen</option>
          <option value="bedroom">bedroom</option>
          <option value="dining">dining</option>
          <option value="kids">kids</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="sort" className="form-label">
          Sort By
        </label>
        <select
          name="sort"
          id="sort"
          className="form-control text-sm font-semibold"
          value={sort}
          onChange={(e) => setSort(() => e.target.value)}
        >
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
          <option value="hight">hight</option>
          <option value="low">low</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="price" className="form-label flex justify-between">
          <p>Select Price</p>
          <p className="text-base">${price}</p>
        </label>
        <input
          type="range"
          name="price"
          id="price"
          className="accent-light_blue dark:accent-light_pink"
          value={price}
          step={10}
          max={1000}
          min={0}
          onChange={(e) => setPrice(() => e.target.value)}
        />
        <div className="mt-3 flex justify-between text-xs font-bold text-slate-700 dark:text-white">
          <p>0</p>
          <p>Max: $1,000.00</p>
        </div>
      </div>

      <button
        type="submit"
        className=" max-h-8 uppercase text-slate-200 font-bold text-sm py-1 bg-light_blue hover:bg-blue-700 rounded-lg dark:bg-light_pink dark:hover:bg-pink-500 dark:text-slate-900 dark:font-medium active:scale-95"
        onClick={(e) => handleSubmit(e)}
      >
        search
      </button>
      <button
        type="button"
        className="max-h-8 uppercase text-slate-200 font-bold text-sm py-1 bg-light_pink hover:bg-pink-500 rounded-lg dark:bg-orange-300 dark:hover:bg-orange-400 dark:text-slate-900 dark:font-medium active:scale-95"
        onClick={handleReset}
      >
        reset
      </button>
    </form>
  );
};
export default SearchForm;
