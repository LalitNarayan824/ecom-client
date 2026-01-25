const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-green-950/80 lg:bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center hover:cursor-pointer">
          <span className="text-xl font-semibold tracking-wide text-white">
            Flora
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
          {["Home", "Shop", "Cart", "About Us", "Contact"].map((item) => (
            <span
              key={item}
              className="cursor-pointer transition-all hover:text-white hover:underline hover:underline-offset-4"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center lg:hidden">
          <button className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
