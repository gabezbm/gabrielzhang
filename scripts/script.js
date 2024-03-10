document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://taylor-swift-api.sarbo.workers.dev/lyrics?numberOfParagraphs=1?shouldRandomizeLyrics=true",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerText = data.lyrics[0];
    });
});