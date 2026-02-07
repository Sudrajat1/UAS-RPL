// Panggil library Express yang sudah kita pasang
const express = require('express');

// Buat objek aplikasi Express
const app = express();

// Tentukan port yang akan digunakan – kalau ada port dari sistem, pakai itu, kalau tidak pakai port 3000
const PORT = process.env.PORT || 3000;

// Buat route utama: kalau ada orang yang buka alamat "/" (halaman utama), kirim pesan ini
app.get('/', (req, res) => {
  res.send(`
    <h1>👋 Halo dari Aplikasi Pemula!</h1>
    <p>Ini adalah aplikasi pertama kita yang pakai Containerization & CI/CD.</p>
    <p>Tanggal: ${new Date().toLocaleString('id-ID')}</p>
  `);
});

// Jalankan aplikasi dan mulai mendengarkan permintaan di port yang sudah ditentukan
app.listen(PORT, () => {
  console.log(`✨ Aplikasi berjalan dengan baik di http://localhost:${PORT}`);
});