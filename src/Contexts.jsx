import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./Database";
const context = createContext();
const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [markRead, setMarkRead] = useState([]);
  const fetchingData = async () => {
    const { data } = await fakeFetch("https://example.com/api/books");
    setData(data.books);
    setUser(data.user);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  // add to favourites
  const addToFavorite = (element) => {
    if (!favourites.includes(element)) {
      setFavourites([...favourites, element]);
    }
  };
  // mark as read
  const setMarkAsRead = (element) => {
    if (!markRead.includes(element)) {
      setMarkRead([...markRead, element]);
    }
  };

  return (
    <context.Provider
      value={{ data, addToFavorite, favourites, setMarkAsRead, markRead, user }}
    >
      {children}
    </context.Provider>
  );
};
// global Hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
