import { useGlobalHook } from "./Contexts";

const Favourites = () => {
  const { favourites } = useGlobalHook();

  return (
    <div className="container">
      <h1>Favorite Page</h1>
      <div className="grid">
        {favourites.map((cur) => {
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
              <button>Mark As Read</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
