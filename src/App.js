import { useState } from "react";
import BillInput from "./BillInput";
import ServiceSelect from "./ServiceSelect";
import TotalBill from "./TotalBill";
import Reset from "./Reset";

export default function App() {
  const [Bill, setBill] = useState("");
  const [Service1, setService1] = useState(0);
  const [Service2, setService2] = useState(0);

  function onReset() {
    setService1(0);
    setService2(0);
    setBill("");
  }
  return (
    <div>
      <BillInput Bill={Bill} setBill={setBill} />
      <ServiceSelect Service={Service1} setService={setService1}>
        How did you like the service
      </ServiceSelect>
      <ServiceSelect Service={Service2} setService={setService2}>
        How did your friend like the service
      </ServiceSelect>
      <TotalBill Service1={Service1} Service2={Service2} Bill={Bill} />
      <Reset onReset={onReset} />
    </div>
  );
}
