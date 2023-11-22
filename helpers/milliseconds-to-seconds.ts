export function millisecondsToSeconds(milliseconds: number): string {
  const date = new Date(milliseconds);

  //   const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const ms = date.getUTCMilliseconds();

  const time = `${seconds},${ms}`;

  return time;
}
