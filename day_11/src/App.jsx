import Card from "./components/Card";

export default function App() {
  const data = [
    {
      nama: "Apip",
      umur: "21 tahun",
      hobi: "Bikin Pusing Orang",
    },
    {
      nama: "Fajar",
      umur: "22 tahun",
      hobi: "Ngeliatin Ikan",
    },
    {
      nama: "Aris",
      umur: "22 tahun",
      hobi: "Menikmati Senja",
    },
    {
      nama: "tama",
      umur: "20 tahun",
      hobi: "Memikirkan Dimas Saputra",
    },
    {
      nama: "Erin Chan",
      umur: "23 tahun",
      hobi: "Cosplay",
    },
    {
      nama: "Syafiq",
      umur: "18 Tahun",
      hobi: "ngegombalin erin",
    },
    {
      nama: "risa",
      umur: "17 tahun",
      hobi: "membaca Al-Quran",
    },
    {
      nama: "Dimas",
      umur: "18 tahun",
      hobi: "Meluruskan Apip",
    },
  ];

  return (
    <div className="App">
      {data.map((card) => (
        <Card
          key={card.id}
          nama={card.nama}
          umur={card.umur}
          hobi={card.hobi}
        />
      ))}
    </div>
  );
}
