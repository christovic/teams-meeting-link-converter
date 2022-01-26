function stripSpaces(str) {
  return str.replace(/\s/g, '');
}

function convert() {
  var meetingLink = document.getElementById("iptLink").value;
  document.getElementById("output").innerHTML = `Microsoft Teams meeting<br><a href="${meetingLink}">Click here to join the meeting</a>`;
}

function copy() {
  /* Get the text field */
  var copyText = document.getElementById("output");
   /* Copy the text inside the text field */
  copyElementToClipboard(copyText);

  /* Alert the copied text */
}

function copyElementToClipboard(element) {
  window.getSelection().removeAllRanges();
  let range = document.createRange();
  range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}