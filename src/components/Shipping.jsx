const Shipping = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Success!!!");
  };

  return (
    <article className="mt-8">
      <div>
        <h3 className="text-lg text-dark_gray font-bold dark:text-slate-300">
          Shipping Information
        </h3>
        <form
          className="mt-4 flex flex-col gap-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full uppercase text-sm text-slate-300 font-semibold bg-light_blue p-3 rounded-lg hover:bg-blue-600 dark:bg-light_pink dark:hover:bg-pink-400 dark:text-slate-800"
          >
            place your order
          </button>
        </form>
      </div>
    </article>
  );
};
export default Shipping;
