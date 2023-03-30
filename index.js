
const copyButton = document.getElementById('btnCopy')

copyButton.addEventListener('click',  function() {
  let copyText = document.getElementById("inputCopy");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  console.log(copyText.value);
  let sb = document.getElementById("snackbar");

  sb.className = "show";

  setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
})