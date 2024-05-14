import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoZone Release Net",
  description: "Created by UA MIS Capstone Team Spring 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar />
          <main>{children}</main>
      </body>
    </html>
  );
}


// import './globals.css';

// //import { Analytics } from '@vercel/analytics/react';
// import Nav from './nav';
// import { Suspense } from 'react';

// export const metadata = {
//   title: 'Next.js App Router + NextAuth + Tailwind CSS',
//   description:
//     'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
// };

// export default function RootLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="h-full bg-gray-50">
//       <body className="h-full">
//         <Suspense>
//           <Nav />
//         </Suspense>
//         {children}
//         {/* <Analytics /> */}
//       </body>
//     </html>
//   );
// }