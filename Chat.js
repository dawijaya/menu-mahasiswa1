const form = document.getElementById('keluhan-form');
const kategori = document.getElementById('kategori');
const keluhan = document.getElementById('keluhan');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Format pesan
    const phoneNumber = '6282246402832'; // nomor ponsel penerima
    const message = `Kategori: ${kategori.value}%0A Keluhan: ${keluhan.value}`; // isi pesan

    // Buat tautan WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Buka tautan WhatsApp di jendela baru
    window.open(url);

    // Tampilkan pesan sukses
    alert('Keluhan berhasil dikirim');
});
