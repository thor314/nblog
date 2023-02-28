import { useState } from "react";

export default function Button(
) {
  let [ctr, setCtr] = useState(0);

  return (
    <div>
      <p>
        a component in MDX!
      </p>
      <button onClick={() => setCtr(ctr + 1)}>Click me!</button>
    </div>
  )

}