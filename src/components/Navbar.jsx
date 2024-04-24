import { NavLink } from "react-router-dom";

export default function NavHeader() {
  return (
    <nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/people">People </NavLink>
    </nav>
  );
}
