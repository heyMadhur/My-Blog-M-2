import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <style jsx global>
        {`
          .mainNav ul {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .mainNav ul li {
            list-style: none;
            margin: 1rem 2rem;
            font-size: 26px;
          }
        `}
      </style>

      <nav className="mainNav">
        <ul>
          <Link href="/" legacyBehavior>
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a>
              <li>Blog</li>
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
