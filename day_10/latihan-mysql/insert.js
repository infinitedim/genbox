const db = require("./db.config");

const sql = `INSERT INTO (profile, users) (nama, tgl_lahir, bio)
            VALUES ('Dimas Saputra', '6-6-666', 'Saya aslinya dua orang')`;

db.query(sql, (e) => (e ? console.error(e) : console.log("New Data added")));
