import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-light nav-content">
        <Link href="/" className="navbar-brand">
          <img src="/vercel.svg" alt="logo" width="100px" />
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}
