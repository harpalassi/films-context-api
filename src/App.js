import React from "react";
import "./App.scss";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
