import { useState } from "react";

export default function Toggle() {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    if (!status) setStatus(true);
    else setStatus(false);
  };

  return (
    <>
      <p>{status && "보여라"}</p>
      <button onClick={handleToggle}>Toggle</button>
    </>
  );
}
