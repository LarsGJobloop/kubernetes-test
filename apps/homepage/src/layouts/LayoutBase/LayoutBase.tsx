import { Banner } from "../../components/Banner/Banner";
import style from "./style.module.css";

import { Outlet } from "react-router-dom";

export function LayoutBase() {
  return (
    <div className={[style["App"], style["flex-col"]].join(" ")}>
      <header className={style["Navbar"]}>
        <a href="/">Logo</a>

        <nav>
          <ul>
            <li>
              <a href="#top">Top</a>
            </li>
            <li>
              <a href="#mid">Mid</a>
            </li>
            <li>
              <a href="#bot">Bottom</a>
            </li>
          </ul>
        </nav>
      </header>

      <Banner />

      <main className={[style["Main"], style["flex-col"]].join(" ")}>
        <Outlet />
      </main>

      <footer className={[style["Footer"], style["flex-col"]].join(" ")}>
        <h2>&copy; Lars Gunnar</h2>
      </footer>
    </div>
  );
}
