import { useState } from "react";
import AppContainer from "./components/AppContainer.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import '@mantine/carousel/styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen">
      <AppContainer/>
    </div>

  );
}

export default App;
