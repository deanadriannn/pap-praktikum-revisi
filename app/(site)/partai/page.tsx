import PartaiCard from "@/components/custom/partai-card";

interface Partai {
  name: string;
  image: string;
  link: string;
}

const listPartai: Partai[] = [
  {
    name: "Partai Kebangkitan Bangsa",
    image: "/pkb.png",
    link: "/pkb"
  },
  {
    name: "Partai Gerakan Indonesia Raya",
    image: "/gerindra.png",
    link: "/gerindra"
  },
  {
    name: "Partai Demokrasi Indonesia Perjuangan",
    image: "/pdip.png",
    link: "/pdip"
  },
  {
    name: "Partai Golkar",
    image: "/golkar.jpeg",
    link: "/golkar"
  },
  {
    name: "Partai Nasdem",
    image: "/nasdem.png",
    link: "/nasdem"
  },
  {
    name: "Partai Buruh",
    image: "/buruh.png",
    link: "/buruh"
  },
  {
    name: "Partai Gelombang Rakyat Indonesia",
    image: "/gelora.png",
    link: "/gelora"
  },
  {
    name: "Partai Keadilan Sejahtera",
    image: "/pks.svg",
    link: "/pks"
  },
  {
    name: "Partai Kebangkitan Nusantara",
    image: "/pkn.png",
    link: "/pkn"
  },
  {
    name: "Partai Hati Nurani Rakyat",
    image: "/hanura.jpg",
    link: "/hanura"
  },
  {
    name: "Partai Garda Perubahan Indonesia",
    image: "/garuda.png",
    link: "/garuda"
  },
  {
    name: "Partai Amanat Nasional",
    image: "/pan.jpg",
    link: "/pan"
  },
  {
    name: "Partai Bulan Bintang",
    image: "/pbb.jpg",
    link: "/pbb"
  },
  {
    name: "Partai Demokrat",
    image: "/demokrat.svg",
    link: "/demokrat"
  },
  {
    name: "Partai Solidaritas Indonesia",
    image: "/psi.jpg",
    link: "/psi"
  },
  {
    name: "Partai Perindo",
    image: "/perindo.jpg",
    link: "/perindo"
  },
  {
    name: "Partai Persatuan Pembangunan",
    image: "/ppp.png",
    link: "/ppp"
  },
  {
    name: "Partai Nanggroe Aceh",
    image: "/pna.jpeg",
    link: "/pna"
  },
  {
    name: "Partai Generasi Atjeh Beusaboh Tha'at Dan Taqwa",
    image: "/peureute.png",
    link: "/peureute"
  },
  {
    name: "Partai Darul Aceh",
    image: "/pda.jpg",
    link: "/pda"
  },
  {
    name: "Partai Aceh",
    image: "/pa.png",
    link: "/pa"
  },
  {
    name: "Partai Adil Sejahtera Aceh",
    image: "/pasa.svg",
    link: "/pasa"
  },
  {
    name: "Partai Soliditas Independent Rakyat Aceh",
    image: "/sira.png",
    link: "/sira"
  },
  {
    name: "Partai Ummat",
    image: "/ummat.png",
    link: "/ummat"
  },
]

export default function ListPartaiPage() {
  return (
    <div>
      <h1 className="font-bold text-red-500 text-2xl mb-7">Partai</h1>
      <div className="h-full grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-4 2xl:grid-cols-7 2xl:gap-6">
        {listPartai.map((partai) => (
          <PartaiCard key={partai.link} name={partai.name} image={`/partai${partai.image}`} link={`/partai${partai.link}`} />
        ))}
      </div>
    </div>
  );
}