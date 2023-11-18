function showHiddenCard() {
    // Mengambil elemen card tambahan berdasarkan ID
    const hiddenCard = document.getElementById('hidden-card');

    // Memeriksa apakah card sudah disembunyikan atau tidak
    if (hiddenCard.style.display === 'none') {
      // Jika card disembunyikan, maka tampilkan
      hiddenCard.style.display = 'flex';
    } else {
      // Jika card sudah ditampilkan, maka sembunyikan kembali
      hiddenCard.style.display = 'none';
    }
  }

  // Fungsi untuk memeriksa apakah elemen dalam viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi untuk menampilkan efek fade-in saat elemen dalam viewport
function showFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('active');
    }
  });
}

// Memanggil fungsi showFadeIn saat discroll atau saat halaman dimuat
window.addEventListener('scroll', showFadeIn);
window.addEventListener('load', showFadeIn);