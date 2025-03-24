document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const nameInput = document.getElementById("nameInput");
    const warningMessage = document.getElementById("warningMessage");

    startButton.addEventListener("click", function () {
        const name = nameInput.value.trim(); // Ambil nilai input, hapus spasi di awal/akhir

        if (name === "") {
            warningMessage.style.display = "block"; // Tampilkan peringatan
        } else {
            warningMessage.style.display = "none"; // Sembunyikan peringatan jika nama sudah diisi

            // Simpan nama ke localStorage agar bisa digunakan di halaman dashboard
            localStorage.setItem("userName", name);

            // Arahkan pengguna ke dashboard.html
            window.location.href = "dashboard.html";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const text = "Website ini dirancang untuk membantu Anda memahami praktik demokrasi dalam kehidupan berbangsa dan bernegara.";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Kecepatan mengetik (50ms per huruf)
        }
    }

    typeText(); // Jalankan efek mengetik saat halaman dimuat
});

