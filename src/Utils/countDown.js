export default function secondsToDhms(seconds, full) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d === 1 ? " day" : " days") : "";
  var hDisplay = h >= 0 && h < 10 ? "0" + h + ":" : h + ":";
  var mDisplay = m >= 0 && m < 10 ? "0" + m + ":" : m + ":";
  var sDisplay = s >= 0 && s < 10 ? "0" + s : s;

  var fdDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
  var fhDisplay = h >= 0 && h < 10 ? "0" + h + ":" : h + ":";
  var fmDisplay = m >= 0 && m < 10 ? "0" + m + ":" : m + ":";
  var fsDisplay = s >= 0 && s < 10 ? "0" + s : s;

  if (full === true) {
    if (s < 0) {
      return "Auction Closed";
    } else {
      return fdDisplay + fhDisplay + fmDisplay + fsDisplay;
    }
  } else {
    if (s < 0) {
      return "Closed -";
    } else {
      return d > 1 ? dDisplay : hDisplay + mDisplay + sDisplay;
    }
  }
}
