import { Link } from "react-router-dom";

export default function RouteProps() {
  const menu = {
    name: "짜장",
    price: "5,000원"
  };
  return (
    <>
      <h1>RouteProps</h1>
      <Link to="/routerpropsresult" state={menu}>
        데이터 날리기
      </Link>
    </>
  );
}
