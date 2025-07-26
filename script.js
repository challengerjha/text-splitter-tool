function splitText() {
  const inputText = document.getElementById('inputText').value.trim();
  const wordLimit = parseInt(document.getElementById('wordLimit').value);
  const outputContainer = document.getElementById('outputContainer');
  outputContainer.innerHTML = '';

  if (!inputText || !wordLimit || wordLimit <= 0) {
    alert("Please enter valid input text and word count.");
    return;
  }

  const words = inputText.split(/\s+/);
  for (let i = 0; i < words.length; i += wordLimit) {
    const chunk = words.slice(i, i + wordLimit).join(" ");
    const chunkDiv = document.createElement("div");
    chunkDiv.className = "chunk";
    chunkDiv.innerHTML = `
      <button class="copyBtn" onclick="copyToClipboard(this)">Copy</button>
      <p>${chunk}</p>
    `;
    outputContainer.appendChild(chunkDiv);
  }
}

function copyToClipboard(btn) {
  const text = btn.nextElementSibling.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy", 1500);
  });
}
