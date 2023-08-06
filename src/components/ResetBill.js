export function ResetBill({ onResetClick }) {
  return (
    <button className="resetBTN" onClick={(e) => onResetClick(e)}>
      Reset Calculator
    </button>
  );
}
