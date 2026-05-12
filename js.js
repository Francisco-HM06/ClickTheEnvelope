const envelope = document.querySelector(".envelope");
const content = document.querySelector("#content");

function toggleEnvelope(event) {
  if (envelope.classList.contains("open") && event.target.closest("#content")) {
    return;
  }

  envelope.classList.toggle("open");
  
}

envelope.addEventListener("click", toggleEnvelope);

if (content) {
  content.addEventListener("click",
    toggleEnvelope);
  }

