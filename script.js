function Prodi() {
 const fakultas = document.getElementById("fakultas").value;
 const prodi = document.getElementById("prodi");

 const daftarProdi = {
     "kom": [
         { value: "if", text: "Informatika" },
         { value: "si", text: "Sistem Informasi" },
         { value: "ti", text: "Teknik Informatika" }
     ],
     "hk": [
         { value: "hkm", text: "Ilmu Hukum" }
     ],
     "ke": [
         { value: "kd", text: "Kedokteran Umum" },
         { value: "kg", text: "Kedokteran Gigi" }
     ]
 };

 prodi.innerHTML = '<option selected value="">Pilih Program Studi</option>';

 if (daftarProdi[fakultas]) {
     daftarProdi[fakultas].forEach(item => {
         let pilihanBaru = document.createElement("option");
         pilihanBaru.value = item.value;
         pilihanBaru.text = item.text;
         prodi.appendChild(pilihanBaru);
     });
 }
}

document.addEventListener("DOMContentLoaded", function () {
 const wilayahSelect = document.getElementById("wilayah");
 const kecamatanJember = [
     "Ajung", "Ambulu", "Arjasa", "Balung", "Bangsalsari", "Gumukmas", "Jelbuk",
     "Jenggawah", "Jombang", "Kalisat", "Kaliwates", "Kencong", "Ledokombo",
     "Mayang", "Mumbulsari", "Pakusari", "Panti", "Patrang", "Rambipuji",
     "Semboro", "Silo", "Sukorambi", "Sukowono", "Tanggul", "Tempurejo",
     "Umbulsari", "Wuluhan"
 ];

 kecamatanJember.forEach(kecamatan => {
     let pilihan = document.createElement("option");
     pilihan.value = kecamatan.toLowerCase();
     pilihan.text = kecamatan;
     wilayahSelect.appendChild(pilihan);
 });
});
