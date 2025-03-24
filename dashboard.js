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
