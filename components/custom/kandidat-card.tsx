'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '../ui/button';

interface KandidatCardProps {
  image: string;
  name: string;
  link: string;
  viceImage: string;
  viceName: string;
  age: number;
  partai: string;
  history: string;
  viceAge: number;
  vicePartai: string;
  viceHistory: string;
}

interface KandidatDetailProps {
  image: string;
  name: string;
  age: number;
  partai: string;
  history: string;
  viceImage: string;
  viceName: string;
  viceAge: number;
  vicePartai: string;
  viceHistory: string;
  onClose: () => void;
}

const KandidatCard = ({
  image,
  name,
  link,
  viceImage,
  viceName,
  age,
  partai,
  history,
  viceAge,
  vicePartai,
  viceHistory,
}: KandidatCardProps) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleDetailClick = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[320px] flex flex-col items-center gap-4 mx-4 my-4">
        <CardHeader className="w-full flex justify-around mt-4">
          <div className="flex flex-col items-center">
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="rounded-full object-cover mt-2 border-2 border-black-500"
            />
            <p className="text-center text-md mt-2 font-bold">{name}</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={viceImage}
              alt={viceName}
              width={100}
              height={100}
              className="rounded-full object-cover mt-2 border-2 border-black-500"
            />
            <p className="text-center text-md mt-2 font-bold">{viceName}</p>
          </div>
        </CardHeader>
        <CardFooter className="w-full flex justify-center mt-4 mb-4">
          <Button className="bg-blue-500 text-white" onClick={handleDetailClick}>
            Lihat Detail
          </Button>
        </CardFooter>
      </Card>
      {showDetail && (
        <KandidatDetail
          image={image}
          name={name}
          age={age}
          partai={partai}
          history={history}
          viceImage={viceImage}
          viceName={viceName}
          viceAge={viceAge}
          vicePartai={vicePartai}
          viceHistory={viceHistory}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

const KandidatDetail: React.FC<KandidatDetailProps> = ({
  image,
  name,
  age,
  partai,
  history,
  viceImage,
  viceName,
  viceAge,
  vicePartai,
  viceHistory,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <h2 className="font-bold text-2xl mb-4">Detail Kandidat</h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full mb-2" />
            <h3 className="font-bold text-xl text-center">{name}</h3>
            <p>Age: {age}</p>
            <Link href={`partai/${partai.toLowerCase()}`} passHref>
              <p>Party: {partai}</p>
            </Link>
            <p className='text-center'>{history}</p>
            <Link href={`https://en.wikipedia.org/wiki/${name}`} passHref>
              <Button className="bg-green-500 text-white mt-2">
                Profil Kandidat
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img src={viceImage} alt={viceName} className="w-32 h-32 object-cover rounded-full mb-2" />
            <h3 className="font-bold text-xl text-center">{viceName}</h3>
            <p>Age: {viceAge}</p>
            <Link href={`partai/${vicePartai.toLowerCase()}`} passHref>
              <p>Party: {vicePartai}</p>
            </Link>
            <p className='text-center'>{viceHistory}</p>
            <Link href={`https://en.wikipedia.org/wiki/${viceName}`} passHref>
              <Button className="bg-green-500 text-white mt-2">
                Profil Kandidat
              </Button>
            </Link>
          </div>
        </div>
        <button
          className="justify-end mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default KandidatCard;
