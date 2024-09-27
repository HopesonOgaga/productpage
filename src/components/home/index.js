import React, { useState } from "react";
import { Food } from "../../context/info";
import { SnackItem } from "./props";

export default function Home() {
  const [snacks, setSnacks] = useState(Food);

  // Add a return statement to return JSX
  return (
    <section>
      <div className="font-bold text-2xl capitalize mb-6  ">desserts</div>
      <ul className="grid grid-cols-3 h-full">
        {snacks.map((snacksui) => {
          console.log(snacksui);
          return (
            <SnackItem
              key={snacksui.id} // Ensure a unique key for each item
              image={snacksui.image}
              name={snacksui.Name}
              title={snacksui.Title}
              price={snacksui.price}
            />
          );
        })}
      </ul>
    </section>
  );
}
