export function timeStringToNumber(time: string): number {
  return Number(time.replace(",", "."));
}
