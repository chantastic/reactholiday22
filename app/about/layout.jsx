export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/about/nested">About (nested)</a>
            </li>
          </ol>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
