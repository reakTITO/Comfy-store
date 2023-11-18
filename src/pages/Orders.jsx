import { useEffect } from "react";
import { useGlobalContext } from "../useGlobleContext";

const Orders = () => {
  const { setShowMenu, handleActivePage } = useGlobalContext();

  useEffect(() => {
    handleActivePage("Orders");
  }, []);

  return (
    <section
      className="padding h-auto dark:bg-gray-800 "
      onClick={() => setShowMenu(() => false)}
    >
      <div className="max-w-6xl mx-auto py-16 dark:bg-gray-800">
        <div className="border-b py-6 dark:border-black">
          <h1 className="text-3xl text-dark_gray font-semibold dark:text-slate-200">
            Your Orders
          </h1>
        </div>

        <div className="mt-8">
          <h4 className="text-dark_gray font-medium dark:text-slate-300">
            Your Orders : 854
          </h4>

          <div class="mt-6">
            <table class="table w-full">
              <thead className="text-left border-b h-4">
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Products</th>
                  <th>Cost</th>
                  <th class="hidden sm:block">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jolly Jerry</td>
                  <td>Guffaw Road, Punsborough</td>
                  <td>8</td>
                  <td>$2,556.91</td>
                  <td class="hidden sm:block">08:46 pm - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Guffaw Gracie</td>
                  <td>Hilarious Heights, Chuckleville</td>
                  <td>1</td>
                  <td>$202.99</td>
                  <td class="hidden sm:block">08:40 pm - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Riddle Rita</td>
                  <td>Giggle Lane, Chuckleberg</td>
                  <td>1</td>
                  <td>$488.99</td>
                  <td class="hidden sm:block">05:52 pm - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Riddle Rita</td>
                  <td>Giggle Lane, Chuckleberg</td>
                  <td>5</td>
                  <td>$681.45</td>
                  <td class="hidden sm:block">05:02 pm - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Jokes McGee</td>
                  <td>Haha Lane, Guffaw Gardens</td>
                  <td>2</td>
                  <td>$400.98</td>
                  <td class="hidden sm:block">12:58 pm - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Punmaster Pete</td>
                  <td>Joke Lane, Hahaville</td>
                  <td>6</td>
                  <td>$631.93</td>
                  <td class="hidden sm:block">10:26 am - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Chuckling Charlie</td>
                  <td>Teehee Terrace, Punsburg</td>
                  <td>1</td>
                  <td>$202.99</td>
                  <td class="hidden sm:block">08:54 am - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Guffaw Gracie</td>
                  <td>Hilarious Heights, Chuckleville</td>
                  <td>1</td>
                  <td>$378.99</td>
                  <td class="hidden sm:block">08:53 am - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Comedy Chris</td>
                  <td>Witty Way, Chucklesburg</td>
                  <td>1</td>
                  <td>$202.99</td>
                  <td class="hidden sm:block">05:00 am - Oct 4th, 2023</td>
                </tr>
                <tr>
                  <td>Laughing Larry</td>
                  <td>Funny Bone Road, Quirkville</td>
                  <td>1</td>
                  <td>$202.99</td>
                  <td class="hidden sm:block">02:07 am - Oct 4th, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
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
export default Orders;
