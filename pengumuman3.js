// Daftar nama yang lebih lengkap dengan status
const names = [
    { name: "Joko santoso", status: "Lolos" },
    { name: "Joko Satoru", status: "Gagal, TETAP SEMANGAT jangan berputus asa" },
    { name: "Charlie", status: "Lolos" },
    { name: "Diana", status: "Lolos" },
    { name: "Eve", status: "Gagal" },
    { name: "Frank", status: "Lolos" },
    { name: "Grace", status: "Gagal" },
    { name: "Hannah", status: "Lolos" },
    { name: "Ivy", status: "Lolos" },
    { name: "Jack", status: "Gagal" },
    { name: "Kara", status: "Lolos" },
    { name: "Leo", status: "Gagal" },
    { name: "Mia", status: "Lolos" },
    { name: "Noah", status: "Gagal" },
    { name: "Olivia", status: "Lolos" },
    { name: "Paul", status: "Gagal" },
    { name: "Quinn", status: "Lolos" },
    { name: "Riley", status: "Lolos" },
    { name: "Sam", status: "Gagal" },
    { name: "Tina", status: "Lolos" },
    { name: "Ursula", status: "Gagal" },
    { name: "Victor", status: "Lolos" },
    { name: "Wendy", status: "Gagal" },
    { name: "Xander", status: "Lolos" },
    { name: "Yara", status: "Lolos" },
    { name: "Zane", status: "Gagal" }
];

function searchName() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Kosongkan hasil pencarian sebelumnya

    if (input === '') {
        resultDiv.innerHTML = '<p>Silakan masukkan nama untuk mencari.</p>';
        return;
    }

    // Cari nama yang cocok
    const filteredNames = names.filter(person => person.name.toLowerCase().includes(input));

    if (filteredNames.length > 0) {
        resultDiv.innerHTML = '<ul>' + filteredNames.map(person => `<li>${person.name} = ${person.status}</li>`).join('') + '</ul>';
    } else {
        resultDiv.innerHTML = '<p>Tidak ada nama yang cocok ditemukan.</p>';
    }
}
