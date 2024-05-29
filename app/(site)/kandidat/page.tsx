'use client';

import React from 'react';
import KandidatCard from '@/components/custom/kandidat-card';

// Definisikan tipe Kandidat
interface Kandidat {
  name: string;
  age: number;
  partai: string;
  history: string;
  photo: string;
  vice: {
    name: string;
    age: number;
    partai: string;
    history: string;
    photo: string;
  };
}

// Data kandidat
const candidates: Kandidat[] = [
  {
    name: 'Anies Rasyid Baswedan',
    age: 55,
    partai: 'Bebas',
    history: 'History of Candidate 1',
    photo: '/kandidat/AniesBaswedan.jpg',  // Sesuaikan path ke foto kandidat
    vice: {
      name: 'Muhaimin Iskandar',
      age: 57,
      partai: 'Partai A',
      history: 'History of Vice Candidate 1',
      photo: '/kandidat/MuhaiminIskandar.jpg',
    },
  },
  {
    name: 'Prabowo Subianto',
    age: 72,
    partai: 'partai B',
    history: 'History of Candidate 2',
    photo: '/kandidat/PrabowoSubianto.jpg',
    vice: {
      name: 'Gibran Rakabuming',
      age: 36,
      partai: 'Partai B',
      history: 'History of Vice Candidate 2',
      photo: '/kandidat/GibranRakabuming.jpg',
    },
  },
  {
    name: 'Ganjar Pranowo',
    age: 54,
    partai: 'Partai Demokrasi Indonesia Perjuangan',
    history: 'History of Candidate 3',
    photo: '/kandidat/GanjarPranowo.jpg',
    vice: {
      name: 'Mahfud MD',
      age: 66,
      partai: 'Partai Demokrasi Indonesia Perjuangan',
      history: 'History of Vice Candidate 3',
      photo: '/kandidat/MahfudMD.jpg',
    },
  },
];

// Komponen utama KandidatPage
export default function KandidatPage() {
  return (
    <div>
      <h1 className="font-bold text-red-500 text-2xl">Kandidat</h1>
      <div className="flex flex-wrap gap-4">
        {candidates.map((candidate, index) => (
          <KandidatCard
            key={index}
            image={candidate.photo}
            name={candidate.name}
            link={`/kandidat/${candidate.name.toLowerCase().replace(/ /g, '-')}`}
            viceImage={candidate.vice.photo}
            viceName={candidate.vice.name}
            age={candidate.age}
            partai={candidate.partai}
            history={candidate.history}
            viceAge={candidate.vice.age}
            vicePartai={candidate.vice.partai}
            viceHistory={candidate.vice.history}
          />
        ))}
      </div>
    </div>
  );
}
