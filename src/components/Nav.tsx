import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <h1>nav</h1>
      <ul className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/routeprops"}>RouteProps</Link>
        </li>
        <li>
          <Link to={"/routerpropsresult"}>RoutePropsResult</Link>
        </li>
        <li>
          <Link to={"/students"}>Student List</Link>
        </li>
      </ul>
    </>
  );
}
