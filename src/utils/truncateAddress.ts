export function truncateAddress(address?: string) {
  if (!address) return null;
  return `${address?.slice(0, 6)}••••${address?.slice(address.length - 4)}`;
}
