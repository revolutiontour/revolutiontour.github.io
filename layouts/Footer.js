import React from "react";
import Image from "next/image";
import { Divider } from "antd";

export default function Footer() {
  return (
    <>
      <Divider />
      <footer className="footer my-3" style={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center" }}>
        <a href="https://gunadarma.ac.id/" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1%" }}>
          Powered by {"  "}
        </a>
        <a href="https://gunadarma.ac.id/" target="_blank" rel="noopener noreferrer">
          <span className="logo">
            <Image src="/img/logo/tesla.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
