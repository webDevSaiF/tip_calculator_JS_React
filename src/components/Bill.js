export function Bill({ getBill, onGetBill }) {
  return (
    <div className="bill">
      <p className="billText">How much was the bill?</p>
      <input
        type="number"
        placeholder="Enter Bill Amount"
        min="0"
        onChange={(e) => onGetBill(Number(e.target.value))}
        value={getBill}
      />
    </div>
  );
}
