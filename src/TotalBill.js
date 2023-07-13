export default function TotalBill({ Bill, Service1, Service2 }) {
  const tip = (((Service1 + Service2) / 2) * Bill) / 100;
  return (
    Bill && (
      <p>
        <strong>
          You pay ${tip + Bill} (${Bill} + ${tip} tip)
        </strong>
      </p>
    )
  );
}
