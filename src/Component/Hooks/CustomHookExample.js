import { useState } from "react";
export default function useCustomCounter() {
  const [state, setstate] = useState(0);
  const handleIncrement = () => {
    setstate(state + 1);
  };
  return {
    state,
    handleIncrement,
  };
}



