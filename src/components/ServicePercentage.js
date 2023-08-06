export function ServicePercentage({ getPercentage, onPercentage, txt }) {
  return (
    <div>
      <p className="percentageText">{txt}</p>
      <select
        value={getPercentage}
        onChange={(e) => onPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="15">Absolutely amazing! (15%)</option>
      </select>
    </div>
  );
}
