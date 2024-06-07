// export default function RoutePropsResult(props: any) {
//   console.log("test:: ", props);

//   return (
//     <>
//       <h1>RoutePropsResult</h1>
//     </>
//   );
// }

// import React from "react";
import { useLocation } from "react-router-dom";

export default function RoutePropsResult() {
  const location = useLocation();
  const state = location.state as { name?: string; price?: string };

  console.log("test:: ", state);

  return (
    <>
      <h1>RoutePropsResult</h1>
      {state?.name && <p>메뉴: {state.name}</p>}
      {state?.price && <p>가격: {state.price}</p>}
    </>
  );
}
