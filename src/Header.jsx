import { NavLink } from "react-router-dom";
import { useGlobalHook } from "./Contexts";
const Header = () => {
  const { favourites, markRead } = useGlobalHook();
  return (
    <div>
      <NavLink to="/">
        <button>All Books</button>
      </NavLink>
      <NavLink to="/favourites">
        <button>Favourites({favourites.length})</button>
      </NavLink>
      <NavLink to="/read">
        <button>Read ({markRead.length})</button>
      </NavLink>
      <NavLink to="/profile">
        <button>Profile</button>
      </NavLink>
    </div>
  );
};

export default Header;
