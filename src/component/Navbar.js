import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-[#6b3f2c] font-black font-semibold"
        : "text-[#6b3f2c] hover:text-[#a4715a]"
    }`;

  return (
    <nav
      style={{ zIndex: "4" }}
      className="fixed w-full border-b border-[#e9e1dc] bg-white"
    >
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex h-[70px] items-center justify-between">

          {/* LOGO */}
          <div className="font-serif text-[22px] tracking-[0.15em] text-[#6b3f2c]">
            AJWA STORE
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10 text-[14px]">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={linkClass}>
              Shop
            </NavLink>

            <NavLink to="/about-us" className={linkClass}>
              About Us
            </NavLink>

            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>

            <NavLink to="/collections" className={linkClass}>
              Collections
            </NavLink>
          </div>

          {/* RIGHT ICONS */}
          <div className="hidden md:flex items-center gap-3">
            <button className="h-9 w-9 flex items-center justify-center border border-[#e5e5e5] rounded">
              <Search size={16} style={{ color: "brown" }} />
            </button>

            <NavLink
              to="/cart"
              className="relative h-9 w-9 flex items-center justify-center border border-[#e5e5e5] rounded"
            >
              <ShoppingBag size={16} style={{ color: "brown" }} />

              {totalItems > 0 && (
                <span
                  className="
                    absolute -top-1 -right-1
                    min-w-[16px] h-4
                    px-1
                    bg-[#6b3f2c] text-white
                    text-[10px] font-medium
                    rounded-full
                    flex items-center justify-center
                    leading-none
                  "
                >
                  {totalItems}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/contact"
              className="ml-2 bg-[#6b3f2c] text-white text-[13px] px-5 py-2 rounded"
            >
              CONTACT US
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col border-t bg-white px-6 py-4 space-y-4 text-sm">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about-us"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            About Us
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Blog
          </NavLink>

          <NavLink
            to="/collections"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Collections
          </NavLink>

          <div className="flex gap-3 pt-4">
            <button className="h-9 w-9 border rounded flex items-center justify-center">
              <Search size={16} />
            </button>

            <NavLink
              to="/cart"
              className="h-9 w-9 border rounded flex items-center justify-center"
            >
              <ShoppingBag size={16} />
            </NavLink>
          </div>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-[#6b3f2c] text-white py-2 rounded"
          >
            CONTACT US
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
