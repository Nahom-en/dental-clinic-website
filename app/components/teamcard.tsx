import React from 'react';

interface Props {
  name: string;
  p: string;
  img: string;
}

const TeamCard: React.FC<Props> = ({ name, p, img }) => (
  <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 lg:w-96">
    <div className="relative h-64 overflow-hidden rounded-t-xl">
    <img
        src={img}
        alt={name}
        className="object-cover w-full h-full transition duration-300 transform hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="card-body p-4 flex flex-col justify-start">
      <h2 className="card-title text-lg font-semibold">{name}</h2>
      <p className="text-md text-gray-500 m">{p}</p>
    </div>
  </div>
);

export default TeamCard;
