import { Link } from "react-router-dom";

const CardItem = ({ id, image, name, price, page }) => {
  return (
    <Link
      to={`${page ? id : `products/${id}`}`}
      className="w-full p-4 shadow-xl hover:shadow-2xl rounded-2xl "
    >
      <figure className="flex justify-center dark:bg-white rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full object-cover h-64 md:h-48 rounded-2xl"
        />
      </figure>
      <div className="mt-6 text-center">
        <h3 className="text-xl text-light_black font-semibold dark:text-slate-200">
          {name}
        </h3>
        <p className="mt-2 text-base text-slate-600 dark:text-sky-700">
          ${price}
        </p>
      </div>
    </Link>
  );
};
export default CardItem;
