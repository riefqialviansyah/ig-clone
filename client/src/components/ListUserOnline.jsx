// pakai contex
import { useContext } from "react";
import { OnlineContext } from "../pages/LayoutPage";

export default function ListUserOnline() {
  // pakai contex
  const data = useContext(OnlineContext);
  return (
    <>
      <h6 style={{ marginTop: "10px" }}>
        <span className="badge text-bg-info">Online user:</span>
      </h6>
      <ul>
        {data &&
          data.map((el, i) => {
            return <li key={i}>{el.username}</li>;
          })}
      </ul>
    </>
  );
}
