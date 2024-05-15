import React from "react";
import Grid from "../components/grid";
import prisma from "@/prisma/client";

const Home = async() => {

  const rooms = await prisma.room.findMany({
    orderBy: { roomNum: "asc" },
  });

  return (
    <div>
      <Grid rooms={rooms}/>
    </div>
  );
};

export default Home;
