import { useState } from "react";
import { Bill } from "./Bill";
import { BillOutput } from "./BillOutput";
import { LogoTitle } from "./LogoTitle";
import { ResetBill } from "./ResetBill";
import { ServicePercentage } from "./ServicePercentage";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [getBill, setGetBill] = useState(null);
  const [getPercentage1, setGetPercentage1] = useState(0);
  const [getPercentage2, setGetPercentage2] = useState(0);

  const totalPercentage = getPercentage1 + getPercentage2;

  const onResetClick = (e) => {
    const confirmed = window.confirm("You want to reset calculator?");
    if (confirmed) {
      setGetBill("Enter Bill Amount");
      setGetPercentage1(0);
      setGetPercentage2(0);
    }
  };

  return (
    <div className="tipCalculator">
      <LogoTitle />
      <Bill getBill={getBill} onGetBill={setGetBill} />
      <ServicePercentage
        getPercentage={getPercentage1}
        onPercentage={setGetPercentage1}
        txt="How did you like the service?"
      />
      <ServicePercentage
        getPercentage={getPercentage2}
        onPercentage={setGetPercentage2}
        txt="How did your friend like the service?"
      />
      <BillOutput getPercentage={totalPercentage} getBill={getBill} />
      <ResetBill onResetClick={onResetClick} />
    </div>
  );
}
