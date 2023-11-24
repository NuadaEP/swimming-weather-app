export function millisecondsToSeconds(
  milliseconds: number,
  inMinutes = false
): string {
  const date = new Date(milliseconds);

  const seconds = date.getUTCSeconds();
  const ms = date.getUTCMilliseconds();

  if (inMinutes) {
    const minutes = date.getUTCMinutes();
    const time = `${minutes}:${seconds},${ms}`;

    return time;
  }

  const time = `${seconds},${ms}`;

  return time;
}
