export default function Footer({ home }) {
  return (
    <footer
      className={`page-footer pt-4 bg-foot ${home ? "" : "bg-foot-fixed"}`}
    >
      <div className="footer-copyright text-center py-3">@2021 Copyright</div>
    </footer>
  );
}
