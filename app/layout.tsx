import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme, ThemePanel } from '@radix-ui/themes';
import NavBar from './navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Diabetic Ketoacidosis Protocol',
  description: 'Made for Hampton Regional by Wagner Osborne'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="orange">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
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
