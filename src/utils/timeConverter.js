export function msToTime(duration) {
  let minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return hours + ':' + minutes;
}

export function timestampToPixels(timestamp, pixelsInMinute) {
  const minutes = Math.floor(timestamp / 1000 / 60);
  return Math.floor(minutes * pixelsInMinute);
}

export function pixelsToTimestamp(pixels, pixelsInMinute) {
  return Math.floor(pixels / pixelsInMinute) * 1000 * 60;
}
