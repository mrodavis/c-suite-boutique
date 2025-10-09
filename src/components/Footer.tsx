export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal py-8">
      <div className="container flex flex-col md:flex-row gap-3 items-center justify-between text-white/60">
        <p>© {new Date().getFullYear()} Refresh-IV.Taci. All rights reserved.</p>
        <p className="text-sm">Made with care • Hydrate responsibly</p>
      </div>
    </footer>
  );
}
