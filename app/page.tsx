import React from 'react';
import Image from 'next/image';
import HRLogo from './assets/HamptonRegionalLogo.jpg';

const page = () => {
  return (
    <div className="">
      <Image
        className="mx-auto my-auto"
        height="600"
        width="950"
        src={HRLogo}
        alt="Hampton Regional Logo"
      />
    </div>
  );
};

export default page;
// import React from "react";
// import Grid from "./components/grid";

// const Home = () => {
//   return (
//     <div>
//       <Grid />
//     </div>
//   );
// };

// export default Home;
