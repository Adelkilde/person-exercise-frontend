import { NavLink } from "react-router-dom";

export default function NavHeader() {
  return (
    <nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/persons">People </NavLink>
      <NavLink to="/create-new">Create New Person</NavLink>
    </nav>
  );
}
