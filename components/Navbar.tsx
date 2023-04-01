import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <style jsx global>
        {`
          .text-font{
            font-family: 'Prompt', sans-serif;
          }
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
              <li className="text-font">Home</li>
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>
              <li className="text-font">About</li>
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a>
              <li className="text-font">Blog</li>
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>
              <li className="text-font">Contact</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
