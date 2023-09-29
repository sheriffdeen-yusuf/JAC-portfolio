import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Applayout({ children }: any) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Applayout;
