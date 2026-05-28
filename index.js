const fs = require("node:fs");

const musik = [
    {
        nama: "Bruno Mars",
        lagu: [
            "Talking to the Moon.mp3",
            "Just the Way You Are.mp3",
            "The Lazy Song.mp3",
            "Marry You.mp3",
            "It Will Rain.mp3"
        ]
    },
    {
        nama: "Sal Priadi",
        lagu: [
            "Dari Planet Lain.mp3",
            "Serta Mulia.mp3",
            "Kita Usahakan Rumah Itu.mp3",
            "Gala Bunga Matahari.mp3",
            "Ya Sudah.mp3"
        ]
    },
    {
        nama: "Tulus",
        lagu: [
            "Manusia Kuat.mp3",
            "Monokrom.mp3",
            "Hati-Hati di Jalan.mp3",
            "Diri.mp3",
            "Sewindu.mp3"
        ]
    }
];

/**
 * Creates empty music files
 * based on artist and song names.
 *
 * @returns {void}
 */

function createMusicFiles() {
  musik.forEach((artis) => {
    artis.lagu.forEach((lagu) => {
      const judulLagu = `${artis.nama} - ${lagu}`;
        fs.writeFile(judulLagu, "", (err) => {
        if (err) {
          console.log("Gagal buat file");
          return;
        }
        console.log(
          `Berhasil buat file ${judulLagu}`
        );
      });
    });
  });
}

module.exports = {
  musik,
  createMusicFiles
};

createMusicFiles();