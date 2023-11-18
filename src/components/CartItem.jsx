import { useGlobalContext } from "../useGlobleContext";

const CartItem = ({
  id,
  images,
  name,
  activeColor,
  company,
  newPrice,
  amount,
}) => {
  const { handleRemove, handleChangeAmount } = useGlobalContext();

  return (
    <article className="w-full flex justify-around mb-12 pb-6 last:border-none border-b dark:border-black">
      <div className="flex justify-center ">
        <img
          src={images && images[0].thumbnails.full.url}
          alt={name}
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
        />
      </div>

      <div className="shrink flex flex-col">
        <h3 className="text-dark_gray font-semibold capitalize dark:text-slate-200 ">
          {name}
        </h3>
        <h4 className="mt-2 text-sm font-semibold capitalize text-slate-400 dark:text-slate-200">
          {company}
        </h4>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2">
          Color:{" "}
          <span
            className="h-4 w-4 inline-flex justify-center items-center py-0 rounded-full"
            style={{ backgroundColor: `${activeColor}` }}
          ></span>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <select
          name="amount"
          id="amount"
          className="form-control text-sm w-20"
          value={amount}
          onChange={(e) => handleChangeAmount(id, e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button
          type="button"
          className="mt-2 text-sm text-blue-500 bg-transparent hover:underline dark:text-light_pink"
          onClick={() => handleRemove(id)}
        >
          remove
        </button>
      </div>
      <p className="text-dark_gray font-semibold dark:text-slate-200">
        ${newPrice}
      </p>
    </article>
  );
};
export default CartItem;
