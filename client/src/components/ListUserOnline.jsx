// pakai contex
import { useContext } from "react";
import { OnlineContext } from "../pages/LayoutPage";

export default function ListUserOnline() {
  // pakai contex
  const data = useContext(OnlineContext);
  // console.log(data, "+++++");
  return (
    <>
      <h6>
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
