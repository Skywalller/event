export default function getAmount(amount) {
  const currency = "QR";
  if (amount === "FREE") return "FREE";
  return `${currency} ${amount}`;
}
