"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";

interface PartaiCardProps {
  image: string;
  name: string;
  link: string;
}

const PartaiCard = ({
  image,
  name,
  link
}: PartaiCardProps) => {
  return (
    <Card className="h-[360px] relative">
      <CardHeader>
        <AspectRatio ratio={1 / 1} className="bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <p className="text-center text-md">{name}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-[80%] bg-[#EA5B5B] absolute bottom-4 mx-auto right-0 left-0">
          <Link href={link}>Lihat Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PartaiCard