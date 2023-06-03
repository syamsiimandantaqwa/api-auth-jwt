 TRAVEL API
 ==========

sebuah api yang di gunakan untuk pemesanan bus, preject sederhana ini untuk menyelesaikan tugas dari [PESILAT](https://pesilat.alkademi.id)

> api ini sudah sesuai dengan apa yang di perintahkan yaitu memiliki fitur : 
- booking
- login
- sign up
- jadwal
- pengguna


panduan instalasi untuk mulai menggunakan api 
----

1. ubah dulu file `.env.example` menjadi `.env`
2. siapkan terlebih dahulu database `travel_api`
3. jalankan perintah `npm run migrate` untuk memulai migrasi
4. jalankan perintah `npm run seed` untuk menambahkan data dummy


> Daftar Endpoint yang bisa di gunakan

| method | endpoint | keterangan |
| ------ | :-------: | -------- |
| GET | `/buses` | mendapatkan list dari semua bus yang ada |
| GET | `/buses/:busId` | mendapatkan detail dari bus |
| POST | `/register` | untuk mendaftakan user |
| POST | `/login` | untuk login user |
| POST | `/order` | untuk user bisa memesan bus yang ada |
| GET | `/my-order` | mendapatkan data pesanan dari user yang sedang login |

panduan untuk menggunakan api
-----

1. contoh pada saat menggunakan `/register` isikan body nya dengan :

```javascript
{
	"nama": "john doe"
	"email": "johnDoe@gmail.com",
	"password": "johnDoe"
}

```

2. contoh pada saat menggunakan `/login` isikan body nya dengan :

```javascript
{
	"email": "johnDoe@gmail.com",
	"password": "johnDoe"
}

```

3. contoh pada saat menggunakan `/order` isikan body nya dengan :

```javascript
{
	"user_id": 4,
	"tujuan": "depok",
	"bus_id": 2,
	"jadwal": "2023-06-14",
	"jurusan": "jakarta-bandung"
}


```