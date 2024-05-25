import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card userName="Samuel" jobRole={"Staff Engineer"} />
      <Card />
    </>
  );
}

export default App;
