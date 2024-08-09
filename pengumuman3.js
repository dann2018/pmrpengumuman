// Daftar nama yang lebih lengkap dengan status
const names = [
    { name: "Ibnu", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Maldin", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Anggit", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Alif", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Muhazib", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Arifin", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Arifa", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Vina", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Clarista", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Fadilah", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Khanza", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Asyifa Mentari", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Aira", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Nisrina", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Agustina", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Mutiara", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Ardella", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Felian", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Arfiana", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Almira Shofia", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Winda Dwi", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Novia", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Madu Sekar", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Rasya", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },    
    { name: "Salsabila", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Clarissa", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Almira Zakiqqah", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Desyana", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Asyifa Tri", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Safitri", status: "Anda dinyatakan lolos. Mengabdikan diri kepada kemanusiaan adalah tugas sejati manusia ~ Albert Schweitzer. Selamat Anda diterima di organisasi PMR WIRA SMKN 1 Sukoharjo ⛑. Selamat bergabung!!! ✊" },
    { name: "Fifia", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Nindya", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Septiana", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Lathifah", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Mifta", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Rashida", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Esa", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Bunga", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Luthfi", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Nafeeza", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Tim Murni", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Arvianti", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Aulia", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Syifa", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Varawinda", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Hera", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Siti", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" },
    { name: "Anisa", status: "Maaf anda dinyatakan gagal. Kegagalan bukanlah akhir dari segalanya, itu hanyalah awal dari sesuatu yang baru ~ Unkwon. Semangat teman-teman!! Semoga kita dipertemukan diwaktu yang lebih baik💪💗" }
];

function searchName() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Kosongkan hasil pencarian sebelumnya

    if (input === '') {
        resultDiv.innerHTML = '<p>Silakan masukkan nama untuk mencari.</p>';
        return;
    }

    // Cari nama yang cocok
    const filteredNames = names.filter(person => {
        const nameLower = person.name.toLowerCase();
        // Cocokkan nama yang persis atau nama yang lebih panjang dengan spasi tambahan di akhir
        return nameLower === input || (nameLower.startsWith(input + ' ') && input.split(' ').length === 1);
    });

    if (filteredNames.length > 0) {
        resultDiv.innerHTML = '<ul>' + filteredNames.map(person => {
            const statusLower = person.status.toLowerCase();
            const statusColor = statusLower.includes('lolos') ? 'green' : (statusLower.includes('gagal') ? 'red' : 'black');
            return `<li>${person.name} = <span style="color: ${statusColor};">${person.status}</span></li>`;
        }).join('') + '</ul>';
    } else {
        resultDiv.innerHTML = '<p>Tidak ada nama yang cocok ditemukan.</p>';
    }
}