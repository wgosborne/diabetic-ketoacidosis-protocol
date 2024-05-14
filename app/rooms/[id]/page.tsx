import React from 'react';
import Protocol from '../../components/protocol';

const page = ({ params }: { params: { room: number } }) => {

  const room = params.room;

  return (
    <div>
      <Protocol />
    </div>
  );
};

export default page;
