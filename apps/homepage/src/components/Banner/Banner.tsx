import { useLocation } from "react-router-dom";
import style from "./style.module.css";
import { useEffect, useState } from "react";

export function Banner() {
  const [title, setTitle] = useState(document.title);

  const location = useLocation();

  useEffect(() => {
    setTitle(document.title);
  }, [location.pathname]);

  return (
    <section className={style["banner"]}>
      <h1>{title}</h1>
    </section>
  );
}
