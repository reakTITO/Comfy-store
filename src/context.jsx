import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const getSearchParamFromLocalStorage = () => {
  const param = localStorage.getItem("searchParam");
  return param ? JSON.parse(param) : { value: false };
};

const getDarkMode = () => {
  const darkMode = localStorage.getItem("dark");
  return darkMode ? JSON.parse(darkMode) : false;
};

const getActivePage = () => {
  const page = localStorage.getItem("page");
  return page ? JSON.parse(page) : "Home";
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(getDarkMode());
  const [activePage, setActivePage] = useState(getActivePage());
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [totalAmount, setTotalAmount] = useState(0);
  const shipping = 5;
  const [searchParam, setSearchParam] = useState(
    getSearchParamFromLocalStorage()
  );
  const [loading, setLoading] = useState(false);

  const getTotalAmount = () =>
    setTotalAmount(() =>
      cart.reduce((total, item) => {
        total += item.amount;
        return total;
      }, 0)
    );
  const subTotal = useMemo(() => {
    return cart
      .reduce((total, item) => {
        let subtotal = item.newPrice * item.amount;
        total += subtotal;
        return total;
      }, 0)
      .toFixed(2);
  }, [cart]);

  const tax = useMemo(() => {
    return cart.reduce((total, item) => {
      const totalPrice = item.newPrice * item.amount;
      const tax = Math.round(totalPrice * 0.1);
      total += tax;
      return total;
    }, 0);
  }, [cart]);

  const total = useMemo(() => {
    const sum = parseFloat(subTotal) + tax + shipping;
    return sum;
  }, [cart]);

  const handleAddToCart = (product) => {
    const newProduct = cart.find(
      (item) =>
        item.id === product.id && product.activeColor === item.activeColor
    );
    if (newProduct) {
      setCart(
        cart.map((item) => {
          if (
            item.id === product.id &&
            product.activeColor === item.activeColor
          ) {
            return {
              ...newProduct,
              amount: (newProduct.amount += product.amount),
            };
          }
          return item;
        })
      );
    } else {
      setCart(() => [...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleChangeAmount = (id, value) => {
    const newAmount = Number(value);
    setCart(() =>
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: newAmount };
        }
        return item;
      })
    );
  };

  const handleSearch = async () => {
    if (searchParam.value) {
      const { name, category, sort, price } = searchParam;
      try {
        setLoading(true);
        const response = await axios.get(
          `https://course-api.com/react-store-products`
        );
        const products = response.data.map((item) => {
          let newPrice = 0;
          if (item.price && item.price.toString().split("").length >= 5) {
            newPrice =
              Number(item.price.toString().split("").splice(0, 5).join("")) /
              100;
          } else {
            newPrice = item.price / 100;
          }
          return { ...item, price: newPrice };
        });

        setProductsList(() =>
          products
            .filter((product) =>
              name ? product.name.includes(name.toLowerCase()) : true
            )
            .filter((product) => (price ? product.price <= price : true))
            .filter((product) =>
              category ? product.category === category : true
            )
            .sort((a, b) => {
              if (sort === "a-z") {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
              }
              if (sort === "z-a") {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
              }
              if (sort === "hight") {
                return b.price - a.price;
              }
              if (sort === "low") return a.price - b.price;
            })
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://course-api.com/react-store-products"
        );
        const products = response.data.map((item) => {
          let newPrice = 0;
          if (item.price && item.price.toString().split("").length >= 5) {
            newPrice =
              Number(item.price.toString().split("").splice(0, 5).join("")) /
              100;
          } else {
            newPrice = item.price / 100;
          }
          return { ...item, price: newPrice };
        });
        setProductsList(products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleActivePage = (page) => {
    setActivePage(() => page);
    localStorage.setItem("page", JSON.stringify(page));
  };

  useEffect(() => {
    handleSearch();
  }, [searchParam]);

  useEffect(() => {
    getTotalAmount();
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        darkMode,
        setDarkMode,
        activePage,
        handleActivePage,
        cart,
        setCart,
        handleAddToCart,
        totalAmount,
        handleRemove,
        handleChangeAmount,
        subTotal,
        tax,
        shipping,
        total,
        searchParam,
        setSearchParam,
        productsList,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
