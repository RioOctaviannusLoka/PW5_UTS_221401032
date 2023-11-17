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