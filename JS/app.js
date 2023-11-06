const Mahasiswa = [
  {
    id: 0,
    username: "Rafi Konz",
    mataKuliah: ["APS", "RPL"],
    nilai: [78, 60]
  },
  {
    id: 1,
    username: "Aldi Babi",
    mataKuliah: ["APS", "RPL"],
    nilai: [78, 60]
  },
  {
    id: 2,
    username: "Ekonto",
    mataKuliah: ["APS", "RPL"],
    nilai: [78, 60]
  },
];
const Siswa = [
  {
    id: 0,
    username: "Rafi Konz",
    mataKuliah: ["APS", "RPL"],
    nilai: [78, 60]
  },
  {
    id: 1,
    username: "Aldi Babi",
    mataKuliah: ["APS", "RPL"],
    nilai: [78, 60]
  },
  {
    id: 2,
    username: "Ekonto",
    mataKuliah: ["APS", "RPL"],
    nilai: [78, 60]
  },
];


const loopingArray = (array) => {
  for(let i = 0; i < array.length; i++) {
    console.log(array)
  }
}

loopingArray(Mahasiswa)