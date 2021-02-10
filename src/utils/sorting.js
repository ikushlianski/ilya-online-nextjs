export function sortChronologically(a, b) {
  return Date.parse(b.start) - Date.parse(a.start);
}
