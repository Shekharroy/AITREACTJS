import { useState } from "react";
import { createContext } from "react";

let mycontext = createContext();

export default mycontext;

export function CustomProvider(props) {
  const [state, setState] = useState({ name: "Raj Verma", city: "Delhi" });
  return (
    <mycontext.Provider value={state}>{props.children}</mycontext.Provider>
  );
}
