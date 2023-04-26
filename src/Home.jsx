import { NavLink } from "react-router-dom";
import { useGlobalHook } from "./Contexts";

const Home = () => {
  const { data, addToFavorite, favourites, markRead, setMarkAsRead } =
    useGlobalHook();

  const isFavourite = (book) => {
    return favourites.includes(book);
  };
  const isRead = (book) => {
    return markRead.includes(book);
  };

  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="grid">
        {data.map((cur) => {
          return (
            <div
              className="card"
              style={{
                border: "2px solid red",
              }}
              key={cur.id}
            >
              <img src={cur.image} alt={cur.title} />
              <h2>Title: {cur.title}</h2>
              <p>Author: {cur.author}</p>
              {isRead(cur) ? (
                <NavLink to="/read">
                  <button disabled={true}>Already Read</button>
                </NavLink>
              ) : (
                <button onClick={() => setMarkAsRead(cur)}>Mark As Read</button>
              )}
              {/* --------------? */}
              {isFavourite(cur) ? (
                <NavLink to="/favourites">
                  <button>Go to Fav</button>
                </NavLink>
              ) : (
                <button onClick={() => addToFavorite(cur)}>Add to Fav</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
