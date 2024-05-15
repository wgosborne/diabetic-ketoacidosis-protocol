import React from 'react';
import Protocol from './protocol';

const page = ({ params }: { params: { room: number } }) => {
  const room = params.room;

  return (
    <div>
      <Protocol currRoom={room}/>
    </div>
  );
};

export default page;
