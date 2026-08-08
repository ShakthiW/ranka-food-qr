"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SideMenuNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting);
    });

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <Link className="category-navigator" href="#menu">
      Menu
    </Link>
  );
}
