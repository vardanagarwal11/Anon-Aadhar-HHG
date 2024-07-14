import { useState } from "react";

import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnonAadhaarProvider>
        <Layout />
      </AnonAadhaarProvider>
    </>
  );
}

export default App;
