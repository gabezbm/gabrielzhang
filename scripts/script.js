document.addEventListener("DOMContentLoaded", () => {
    fetch(
        "https://taylor-swift-api.sarbo.workers.dev/lyrics?numberOfParagraphs=1?shouldRandomizeLyrics=true",
    )
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("quote").innerText = data.lyrics[0];
        })
        .catch(() => {
            document.getElementById("quote").innerText = "[Failed to fetch the lyrics.]";
        });
});