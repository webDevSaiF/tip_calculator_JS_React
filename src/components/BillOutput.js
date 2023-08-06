export function BillOutput({ getBill, getPercentage }) {
  const percentage = Math.round((getBill / 100) * getPercentage);
  const totalBill = percentage ? getBill + percentage : getBill;
  const printMessage = `(Bill: $${getBill} + Tip: $${percentage})`;
  return (
    <div>
      <p className="totalBill">
        {getBill > 0
          ? `You've to pay $${totalBill} ${percentage ? printMessage : ""}`
          : "Calculate your bill with Tip"}
      </p>
    </div>
  );
}
