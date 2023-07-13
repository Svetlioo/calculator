import { useState } from "react";

export default function ServiceSelect({ children }) {
  const [Service, setService] = useState(0);
  return (
    <div>
      <span>{children}</span>
      <select
        type=""
        value={Service}
        onChange={(e) => {
          setService(Number(e.target.value));
        }}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}
