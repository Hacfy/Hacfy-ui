// "use client";
// import React from "react";
// import { Button } from "../ui/button";
// import { BackgroundBeams } from "../ui/background-beams";
// import Link from "next/link";
// import Image from "next/image";
// export default function Hero() {
//   return (

//     <div className="w-full h-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
//       <div
//         className=" text-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight  md:text-7xl"
//       >
//         <h1 className="text-5xl md:text-8xl font-extrabold leading-tight ">
//           <span className="text-red-600 hover:text-red-500 cursor-pointer">
//   A FUTURE SECURED
// </span>

         
//         </h1>

//         <p className="mt-4 text-lg text-white max-w-7xl text-balance font-medium leading-8 tracking-wide">
//           Our mission is to build a safer digital world by offering end-to-end
//           cybersecurity solutions. Whether you're a student, professional,
//           startup, or enterprise, our services are tailored to meet your needs.
//           From penetration testing to comprehensive security consulting, we
//           empower individuals and organizations to defend against the evolving
//           cyber threat landscape.
//         </p>

//        <div className="mt-8 flex justify-center"> 
//         <button className="group z-10 px-5 py-2 text-lg border-2 text-secondary tracking-tight rounded-4xl font-bold hover:text-white hover:bg-secondary bg-white">
          
//            <Link href="/contact" className="flex items-center gap-2"> 
//                        <span className="ml-2">Schedule a call</span> {/* Default image */} 
//            <div className="relative z-10 group">
//   <Image src="/nexthero.png" alt="default" width={25} height={30} className="block group-hover:hidden" />
//   <Image src="/nextbtn.png" alt="hover" width={25} height={30} className="hidden group-hover:block" />
// </div>

//             </Link> 
//             </button> 
//             </div>

//       </div>
// {/* Add the video component here */}
//     </div>

//   );
// }
"use client";
import React from "react";
import { Button } from "../ui/button";
import { BackgroundBeams } from "../ui/background-beams";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
    
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="/hero2.mp4" type="video/mp4"  />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white py-4 bg-clip-text">
        <h1 className="text-5xl md:text-8xl font-extrabold leading-tight">
          <span className="text-red-600 hover:text-red-500 cursor-pointer">
            A FUTURE SECURED
          </span>
        </h1>
        <p className="mt-4 text-lg max-w-7xl mx-auto font-medium leading-8 tracking-wide">
          Our mission is to build a safer digital world by offering end-to-end
          cybersecurity solutions. Whether you're a student, professional,
          startup, or enterprise, our services are tailored to meet your needs.
          From penetration testing to comprehensive security consulting, we
          empower individuals and organizations to defend against the evolving
          cyber threat landscape.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="group inline-flex items-center px-5 py-2 text-lg border-2 text-secondary tracking-tight rounded-4xl font-bold hover:text-white hover:bg-secondary bg-white"
          >
            <span className="ml-2">Schedule a call</span>
            <div className="relative z-10 group">
              <Image
                src="/nexthero.png"
                alt="default"
                width={25}
                height={30}
                className="block group-hover:hidden"
              />
              <Image
                src="/nextbtn.png"
                alt="hover"
                width={25}
                height={30}
                className="hidden group-hover:block"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
