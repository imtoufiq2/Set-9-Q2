import { useGlobalHook } from "./Contexts";

const Read = () => {
  const { markRead } = useGlobalHook();
  return (
    <div className="container">
      <h1>Read Page</h1>
      <div className="grid">
        {markRead.map((cur) => {
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

export default Read;
