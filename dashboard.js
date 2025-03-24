document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded. Mempersiapkan event listeners...");

    // Tombol Logout
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            if (confirm("Apakah kamu yakin ingin keluar?")) {
                localStorage.removeItem("userName");
                alert("Anda telah keluar!");
                window.location.href = "index.html"; 
            }
        });
    }

    // Fungsi untuk menampilkan hanya satu section
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => section.classList.add('hidden'));
        document.getElementById(sectionId).classList.remove('hidden');

        // Jika di HP, tutup menu setelah klik
        if (window.innerWidth <= 768) {
            document.getElementById("menuList").classList.remove("show");
        }
    }

    // Default pertama kali buka halaman
    showSection('video');

    // Event listener untuk menu sidebar
    const menuItems = {
        "menu-video": "video",
        "menu-pendahuluan": "pendahuluan",
        "menu-prinsip-demokrasi": "prinsip-demokrasi",
        "menu-praktik-demokrasi": "praktik-demokrasi",
        "menu-studi-kasus": "studi-kasus",
        "menu-quiz": "quiz",
        "menu-simulasi": "simulasi",
        "menu-drag-drop": "drag-drop",
        "menu-kesimpulan": "kesimpulan"
    };

    Object.keys(menuItems).forEach(menuId => {
        const menuElement = document.getElementById(menuId);
        if (menuElement) {
            menuElement.addEventListener("click", function (event) {
                event.preventDefault();
                showSection(menuItems[menuId]);

                // Tutup menu sidebar di HP setelah klik
                if (window.innerWidth <= 768) {
                    document.getElementById("menuList").classList.remove("show");
                }
            });
        }
    });

    // Menu Toggle di HP
    const menuToggle = document.getElementById("menuToggle");
    const menuList = document.getElementById("menuList");
    if (menuToggle && menuList) {
        menuToggle.addEventListener("click", function () {
            menuList.classList.toggle("show");
        });
    }
});
function checkAnswer(element, correct) {
    let feedback = document.getElementById("quizFeedback");
    if (correct) {
        feedback.innerHTML = "✅ Jawaban Benar!";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Jawaban Salah. Coba Lagi!";
        feedback.style.color = "red";
    }
}
function submitOpinion() {
    let opinion = document.getElementById("userOpinion").value;
    let feedback = document.getElementById("opinionFeedback");
    
    if (opinion.trim() === "") {
        feedback.innerHTML = "❌ Silakan tulis pendapatmu terlebih dahulu!";
        feedback.style.color = "red";
    } else {
        feedback.innerHTML = "✅ Terima kasih atas pendapatmu!";
        feedback.style.color = "green";
    }
}
const draggables = document.querySelectorAll(".draggable");
const dropZone = document.getElementById("dropZone");
const feedback = document.getElementById("dragDropFeedback");

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", function() {
        this.classList.add("dragging");
    });
    draggable.addEventListener("dragend", function() {
        this.classList.remove("dragging");
    });
});

dropZone.addEventListener("dragover", function(event) {
    event.preventDefault();
});

dropZone.addEventListener("drop", function() {
    let draggedItem = document.querySelector(".dragging");
    if (draggedItem.id === "draggable1" || draggedItem.id === "draggable2") {
        feedback.innerHTML = "✅ Benar! Ini adalah prinsip demokrasi.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Salah! Coba lagi.";
        feedback.style.color = "red";
    }
});
