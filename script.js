const modeToggle = document.getElementById("mode-toggle");
const modeIcon = document.getElementById("mode-icon");
const body = document.body;

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        modeIcon.src = "File/BLUEC2.png"; // Ganti dengan gambar mode gelap
    } else {
        modeIcon.src = "File/REDC.png"; // Ganti dengan gambar mode terang
    }
});

function openModal(src, alt) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('img01').src = src;
    document.getElementById('img01').alt = alt;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}