import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
// import IntroPost from "../Components/IntroPost";
import Footer from "../Components/Footer";

function Home() {
  const [post, setPost] = useState([]);

  return (
    <div>
      <Header />
      <Search />
      {/* <IntroPost /> */}
      <Footer />
    </div>
  );
}

export default Home;
