// ===== BAGIAN UMUM: mode gelap (dipakai semua halaman) =====
const tombolTema = document.getElementById("tombol-tema");
if (tombolTema) {
    tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");
    if (document.body.classList.contains("gelap")) {
    tombolTema.textContent = "Mode Terang";
    } else {
    tombolTema.textContent = "Mode Gelap";
    }
    });
}
// ===== BAGIAN MAHASISWA 2 (Beranda) =====
// ===== BAGIAN MAHASISWA 3 (Profil dan Daftar Lomba) =====
fitur-kontak-js
// ===== BAGIAN MAHASISWA 4 (Kontak) =====
const tombolKirim = document.getElementById("tombol-kirim");
if (tombolKirim) {
    tombolKirim.addEventListener("click", function () {
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const pesan = document.getElementById("pesan").value;
        const status = document.getElementById("status-form");

        if (nama === "" || email === "" || pesan === "") {
            status.textContent = "Semua kolom wajib diisi.";
        } else if (!email.includes("@")) {
            status.textContent = "Format email tidak valid.";
        } else {
            status.textContent = "Terima kasih, " + nama + ". Pesan Anda diterima.";
        }
    });
}
=======
const tombolFilter = document.querySelectorAll(".tombol-filter");
const daftarLomba = document.querySelectorAll(".lomba");
tombolFilter.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    const kategori = tombol.dataset.kategori;
    tombolFilter.forEach(function (t) {
      t.classList.remove("aktif");
    });
    tombol.classList.add("aktif");
    daftarLomba.forEach(function (lomba) {
      if (kategori === "semua" || lomba.dataset.kategori === kategori) {
        lomba.style.display = "block";
      } else {
        lomba.style.display = "none";
      }
    });
  });
});
// ===== BAGIAN MAHASISWA 4 (Kontak) =====
main
