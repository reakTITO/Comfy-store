import SearchForm from "../components/SearchForm";
import { CardItem } from "../components";
import { useGlobalContext } from "../useGlobleContext";
import Loading from "../components/Loading";
import { useEffect } from "react";
const Products = () => {
  const { setShowMenu, productsList, loading, handleActivePage } =
    useGlobalContext();

  useEffect(() => {
    handleActivePage("Products");
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section
      className="h-auto padding dark:bg-gray-800"
      onClick={() => setShowMenu(() => false)}
    >
      <div className="max-w-6xl mx-auto py-20">
        <SearchForm />
        <div className="mt-6 flex justify-between border-b py-6 dark:border-black">
          <p className="text-sm text-slate-600 font-bold dark:text-slate-200">
            {productsList.length} products
          </p>
          <div></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {productsList.map((product) => (
            <CardItem key={product.id} {...product} page={true} />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <div>
            <button type="button" className="btn-page">
              prev
            </button>
            <button type="button" className="btn-page">
              1
            </button>
            <button type="button" className="btn-page">
              2
            </button>
            <button type="button" className="btn-page">
              next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
