function stripSpaces(str) {
  return str.replace(/\s/g, '');
}

function convert() {
  var meetingLink = document.getElementById("iptLink").value;
  if ((isValidHttpUrl(meetingLink)) && (meetingLink.includes("teams.microsoft.com"))) {
    document.getElementById("output").innerHTML = `Microsoft Teams meeting<br><a href="${meetingLink}">Click here to join the meeting</a>`;
    document.getElementById("btnCopy").disabled = false;
  } else {
    document.getElementById("output").innerHTML = `Please paste a valid URL`;
    document.getElementById("btnCopy").disabled = true;
  }
  
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

function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
