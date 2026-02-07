# 1. Pilih image dasar yang sudah ada Node.js-nya – kita pakai versi 18 Alpine karena ukurannya kecil
FROM node:18-alpine

# 2. Set direktori kerja di dalam container – semua perintah selanjutnya akan berjalan di sini
WORKDIR /app

# 3. Salin file package.json dan package-lock.json ke direktori kerja di container
# Kenapa cuma file ini dulu? Karena jika dependensi tidak berubah, Docker akan menyimpan cache instalasi dependensi, jadi build lebih cepat
COPY package*.json ./

# 4. Install semua dependensi di dalam container
RUN npm install

# 5. Salin seluruh kode aplikasi dari komputer kita ke direktori kerja di container
COPY . .

# 6. Beritahu Docker bahwa aplikasi kita menggunakan port 3000
EXPOSE 3000

# 7. Perintah yang akan dijalankan ketika container mulai berjalan
CMD ["npm", "start"]