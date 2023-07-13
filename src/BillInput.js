export default function Billinput({ Bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill value"
        value={Bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
