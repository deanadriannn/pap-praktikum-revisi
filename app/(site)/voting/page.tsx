'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Authenticated from '@/components/custom/authenticated';


const candidates = [
  {
    name: 'Anies Rasyid Baswedan',
    photo: '/kandidat/AniesBaswedan.jpg',
    vice: {
      name: 'Muhaimin Iskandar',
      photo: '/kandidat/MuhaiminIskandar.jpg',
    },
  },
  {
    name: 'Prabowo Subianto',
    photo: '/kandidat/PrabowoSubianto.jpg',
    vice: {
      name: 'Gibran Rakabuming',
      photo: '/kandidat/GibranRakabuming.jpg',
    },
  },
  {
    name: 'Ganjar Pranowo',
    photo: '/kandidat/GanjarPranowo.jpg',
    vice: {
      name: 'Mahfud MD',
      photo: '/kandidat/MahfudMD.jpg',
    },
  },
];

export default function VotingPage() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleVoteClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCandidate(null);
  };

  const handleConfirmVote = () => {
    // Handle the vote submission logic here
    console.log('Voted for:', selectedCandidate);
    handleCloseModal();
  };

  return (
    <Authenticated>
    <div>
      <h1 className="font-bold text-red-500 text-2xl mb-4">Voting</h1>
      <div className="grid grid-cols-3 gap-4">
        {candidates.map((candidate, index) => (
          <Card key={index} className="w-[300px] flex flex-col items-center gap-4 mx-4 my-4">
            <CardHeader className="w-full flex flex-col items-center mt-4">
              <Image
                src={candidate.photo}
                alt={candidate.name}
                width={100}
                height={100}
                className="rounded-full object-cover mt-2 border-2 border-black-500"
              />
              <p className="text-center text-md mt-2 font-bold">{candidate.name}</p>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center mt-4">
              <Image
                src={candidate.vice.photo}
                alt={candidate.vice.name}
                width={100}
                height={100}
                className="rounded-full object-cover mt-2 border-2 border-black-500"
              />
              <p className="text-center text-md mt-2 font-bold">{candidate.vice.name}</p>
            </CardContent>
            <CardFooter className="w-full flex justify-center mt-auto mb-4">
              <Button className="bg-blue-500 text-white" onClick={() => handleVoteClick(candidate)}>
                Vote
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2 className="font-bold text-xl mb-4">Confirm Your Vote</h2>
          <p className="mb-4">Are you sure you want to vote for {selectedCandidate.name} and {selectedCandidate.vice.name}?</p>
        <Button className="bg-green-500 text-white mr-2" onClick={handleConfirmVote}>
          Confirm
        </Button>
          <Button className="bg-red-500 text-white" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal>
      )}
    </div>
    </Authenticated>
  );
}
