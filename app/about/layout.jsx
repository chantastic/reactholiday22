export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
