'use client';

import React from 'react';
import KandidatCard from '@/components/custom/kandidat-card';
import Authenticated from '@/components/custom/authenticated';

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
export const candidates: Kandidat[] = [
  {
    name: 'Anies Rasyid Baswedan',
    age: 55,
    partai: 'PKB',
    history: 'Anies Baswedan adalah seorang politikus dan akademisi Indonesia yang pernah menjabat sebagai Gubernur DKI Jakarta sejak 2017. Sebelumnya, ia menjabat sebagai Menteri Pendidikan dan Kebudayaan Indonesia dari 2014 hingga 2016.',
    photo: '/kandidat/AniesBaswedan.jpg', // Sesuaikan path ke foto kandidat
    vice: {
      name: 'Muhaimin Iskandar',
      age: 57,
      partai: 'PKB',
      history: 'Muhaimin Iskandar adalah seorang politikus Indonesia yang pernah menjabat sebagai Ketua Umum Partai Kebangkitan Bangsa (PKB). Ia juga pernah menjabat sebagai Menteri Tenaga Kerja dan Transmigrasi.',
      photo: '/kandidat/MuhaiminIskandar.jpg',
    },
  },
  {
    name: 'Prabowo Subianto',
    age: 72,
    partai: 'Gerindra',
    history: 'Prabowo Subianto adalah seorang politikus dan mantan perwira tinggi militer Indonesia. Ia pernah menjabat sebagai Menteri Pertahanan Indonesia. Prabowo juga merupakan Ketua Umum Partai Gerindra.',
    photo: '/kandidat/PrabowoSubianto.jpg',
    vice: {
      name: 'Gibran Rakabuming',
      age: 36,
      partai: 'Golkar',
      history: 'Gibran Rakabuming adalah seorang pengusaha dan politikus Indonesia. Ia adalah putra dari Presiden Joko Widodo dan pernah menjabat sebagai Walikota Surakarta.',
      photo: '/kandidat/GibranRakabuming.jpg',
    },
  },
  {
    name: 'Ganjar Pranowo',
    age: 54,
    partai: 'PDIP',
    history: 'Ganjar Pranowo adalah seorang politikus Indonesia yang pernah menjabat sebagai Gubernur Jawa Tengah. Sebelumnya, ia pernah menjabat sebagai anggota DPR RI dari Fraksi PDI-P.',
    photo: '/kandidat/GanjarPranowo.jpg',
    vice: {
      name: 'Mahfud MD',
      age: 66,
      partai: 'PDIP',
      history: 'Mahfud MD adalah seorang akademisi dan politikus Indonesia yang menjabat sebagai Menteri Koordinator Bidang Politik, Hukum, dan Keamanan. Ia juga pernah menjabat sebagai Ketua Mahkamah Konstitusi.',
      photo: '/kandidat/MahfudMD.jpg',
    },
  },
];

// Komponen utama KandidatPage
export default function KandidatPage() {
  return (
    <Authenticated>
    <div>
      <h1 className="font-bold text-red-500 text-2xl">Kandidat</h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
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
    </Authenticated>
  );
}
