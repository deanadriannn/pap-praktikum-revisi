import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardHeader } from "@/components/ui/card";

type Partai = {
  name: string;
  image: string;
  link: string;
};

const listPartai: { [key: string]: Partai } = {
  pkb: {
    name: "Partai Kebangkitan Bangsa",
    image: "/pkb.png",
    link: "/pkb"
  },
  gerindra: {
    name: "Partai Gerakan Indonesia Raya",
    image: "/gerindra.png",
    link: "/gerindra"
  },
  pdip: {
    name: "Partai Demokrasi Indonesia Perjuangan",
    image: "/pdip.png",
    link: "/pdip"
  },
  golkar: {
    name: "Partai Golkar",
    image: "/golkar.jpeg",
    link: "/golkar"
  },
  nasdem: {
    name: "Partai Nasdem",
    image: "/nasdem.png",
    link: "/nasdem"
  },
  buruh: {
    name: "Partai Buruh",
    image: "/buruh.png",
    link: "/buruh"
  },
  gelora: {
    name: "Partai Gelombang Rakyat Indonesia",
    image: "/gelora.png",
    link: "/gelora"
  },
  pks: {
    name: "Partai Keadilan Sejahtera",
    image: "/pks.svg",
    link: "/pks"
  },
  pkn: {
    name: "Partai Kebangkitan Nusantara",
    image: "/pkn.png",
    link: "/pkn"
  },
  hanura: {
    name: "Partai Hati Nurani Rakyat",
    image: "/hanura.jpg",
    link: "/hanura"
  },
  garuda: {
    name: "Partai Garda Perubahan Indonesia",
    image: "/garuda.png",
    link: "/garuda"
  },
  pan: {
    name: "Partai Amanat Nasional",
    image: "/pan.jpg",
    link: "/pan"
  },
  pbb: {
    name: "Partai Bulan Bintang",
    image: "/pbb.jpg",
    link: "/pbb"
  },
  demokrat: {
    name: "Partai Demokrat",
    image: "/demokrat.svg",
    link: "/demokrat"
  },
  psi: {
    name: "Partai Solidaritas Indonesia",
    image: "/psi.jpg",
    link: "/psi"
  },
  perindo: {
    name: "Partai Perindo",
    image: "/perindo.jpg",
    link: "/perindo"
  },
  ppp: {
    name: "Partai Persatuan Pembangunan",
    image: "/ppp.png",
    link: "/ppp"
  },
  pna: {
    name: "Partai Nanggroe Aceh",
    image: "/pna.jpeg",
    link: "/pna"
  },
  peureute: {
    name: "Partai Generasi Atjeh Beusaboh Tha'at Dan Taqwa",
    image: "/peureute.png",
    link: "/peureute"
  },
  pda: {
    name: "Partai Darul Aceh",
    image: "/pda.jpg",
    link: "/pda"
  },
  pa: {
    name: "Partai Aceh",
    image: "/pa.png",
    link: "/pa"
  },
  pasa: {
    name: "Partai Adil Sejahtera Aceh",
    image: "/pasa.svg",
    link: "/pasa"
  },
  sira: {
    name: "Partai Soliditas Independent Rakyat Aceh",
    image: "/sira.png",
    link: "/sira"
  },
  ummat: {
    name: "Partai Ummat",
    image: "/ummat.png",
    link: "/ummat"
  }
};

export default function PartaiPage({ params }: { params: { id: string }}) {
  const partai = listPartai[params.id];

  return (
    <div className="flex flex-col gap-4 pb-10">
      <h1 className="font-bold text-red-500 text-2xl mb-5">{partai.name}</h1>
      <Card className="h-[250px] w-[250px] relative">
        <CardHeader>
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <Image
              src={`/partai${partai.image}`}
              alt={partai.name}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </CardHeader>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white w-full min-h-80 rounded-lg px-7 py-5">
          <h1 className="text-red-500 text-xl font-bold mb-3">Latar Belakang</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni qui quos debitis quod. Aspernatur dolore velit fugit ex voluptates rem aperiam suscipit assumenda in? Voluptates tempora quia eius veritatis error. Lorem, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas dicta nulla numquam corrupti vero labore, dolorum nam modi mollitia, veniam, laboriosam quis doloribus natus quod ad qui. Ipsum, nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ratione eos consequuntur ad hic rem velit aliquid quaerat magnam iste facilis ducimus nam architecto mollitia in, amet aut tempora sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magni, iste repellendus impedit quisquam quod nobis! Dicta veniam saepe ut minus. Soluta aperiam ipsam culpa, deserunt commodi iure impedit laboriosam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, possimus soluta. Non impedit, laboriosam minus natus tempora enim voluptas omnis consequuntur tenetur quisquam amet asperiores, velit suscipit labore quasi voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit alias possimus nostrum cupiditate architecto hic provident, accusamus modi quia placeat numquam qui dignissimos eveniet autem voluptas atque reiciendis incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam ea nobis at dolores itaque molestiae aspernatur deleniti voluptas ut assumenda veritatis natus, nesciunt, omnis magnam fugit tempore consequuntur soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit totam aspernatur, recusandae doloremque sint mollitia, quos hic amet, molestiae quae! Autem assumenda, numquam earum debitis esse libero! Quae, rerum.
          </p>
        </div>
        <div className="bg-white w-full min-h-80 rounded-lg px-7 py-5">
          <h1 className="text-red-500 text-xl font-bold mb-3">Keterangan</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni qui quos debitis quod. Aspernatur dolore velit fugit ex voluptates rem aperiam suscipit assumenda in? Voluptates tempora quia eius veritatis error. Lorem, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas dicta nulla numquam corrupti vero labore, dolorum nam modi mollitia, veniam, laboriosam quis doloribus natus quod ad qui. Ipsum, nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ratione eos consequuntur ad hic rem velit aliquid quaerat magnam iste facilis ducimus nam architecto mollitia in, amet aut tempora sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magni, iste repellendus impedit quisquam quod nobis! Dicta veniam saepe ut minus. Soluta aperiam ipsam culpa, 
          </p>
        </div>
        <div className="bg-white w-full min-h-80 rounded-lg px-7 py-5">
          <h1 className="text-red-500 text-xl font-bold mb-3">Visi</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni qui quos debitis quod. Aspernatur dolore velit fugit ex voluptates rem aperiam suscipit assumenda in? Voluptates tempora quia eius veritatis error. Lorem, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas dicta nulla numquam corrupti vero labore, dolorum nam modi mollitia, veniam, laboriosam quis doloribus natus quod ad qui. Ipsum, nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ratione eos consequuntur ad hic rem velit aliquid quaerat magnam iste facilis ducimus nam architecto mollitia in, amet aut tempora sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magni, iste repellendus impedit quisquam quod nobis! Dicta veniam saepe ut minus. Soluta aperiam ipsam culpa, deserunt commodi iure impedit laboriosam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, possimus soluta. Non impedit, laboriosam minus natus tempora enim voluptas omnis 
          </p>
        </div>
        <div className="bg-white w-full min-h-80 rounded-lg px-7 py-5">
          <h1 className="text-red-500 text-xl font-bold mb-3">Misi</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni qui quos debitis quod. Aspernatur dolore velit fugit ex voluptates rem aperiam suscipit assumenda in? Voluptates tempora quia eius veritatis error. Lorem, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas dicta nulla numquam corrupti vero labore, dolorum nam modi mollitia, veniam, laboriosam quis doloribus natus quod ad qui. Ipsum, nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ratione eos consequuntur ad hic rem velit aliquid quaerat magnam iste facilis ducimus nam architecto mollitia in, amet aut tempora sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magni, iste repellendus impedit quisquam quod nobis! Dicta veniam saepe ut minus. Soluta aperiam ipsam culpa, deserunt commodi iure impedit laboriosam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, possimus soluta. Non impedit, laboriosam minus natus tempora enim voluptas omnis consequuntur tenetur quisquam amet asperiores, velit suscipit labore quasi voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit alias possimus nostrum 
          </p>
        </div>
      </div>
    </div>
  )
}
