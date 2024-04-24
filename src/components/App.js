import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";



function App() {
  const props = {
    name: user.name,
    city: user.city,
    color: user.color,
    bio: user.bio,
    github: user.links.github,
    linkedin: user.links.linkedin
  }

  return (
    <div>
      <NavBar />
      <Home {...props}/>
      <About {...props} />
    </div>
  );
}

export default App;
