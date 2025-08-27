import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Resources } from "./components/abc/Resources";
import { Title } from "./components/title/Title";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title />
      <Resources />
    </div>
  );
};

export default App;
