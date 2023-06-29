import style from "./style.module.css";

export function LandingPage() {
  document.title = "Landing Page";

  return (
    <div className={style["Page"]}>
      <ul>
        <li>
          <article>
            <header>
              <h2>Some text here</h2>
              <h3>Subtext</h3>
            </header>

            <div>
              <p>Long block of content</p>
            </div>

            <footer>
              <nav>
                <h3>External Links</h3>
                <ul>
                  <li>
                    <a href="">Code Repository</a>
                  </li>
                </ul>
              </nav>
            </footer>
          </article>
        </li>
      </ul>
    </div>
  );
}
