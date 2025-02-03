"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { navbarItems } from "../data/navBarData"; 

export function NavBarView() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Navbar />
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      {navbarItems.map((menu, index) => (
        <MenuItem key={index} setActive={setActive} active={active} item={menu.title}>
          {menu.title === "Products" ? (
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              {menu.links.map((product, productIndex) => (
                <ProductItem
                  key={productIndex}
                  title={product.title}
                  href={product.href}
                  src={product.src}
                  description={product.description}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col space-y-4 text-sm">
              {menu.links.map((link, linkIndex) => (
                <HoveredLink key={linkIndex} href={link.href}>
                  {link.text}
                </HoveredLink>
              ))}
            </div>
          )}
        </MenuItem>
      ))}
    </Menu>
  );
}
