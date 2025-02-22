// import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Soviro: Self Evolving AI that Helps You Complete Mundane Tasks",
  description:
    "Soviro is a self-evolving AGI made of agents that collaborate, and build new agents as needed, in order to complete tasks for a user.",
  openGraph: {
    type: "website",
    url: "https://e8ogg8s4k8c84osoo8wo4ks4.dev3vds1.link/",
    title: "Soviro: Self Evolving AI that Helps You Complete Mundane Tasks",
    description:
      "Soviro is a self-evolving AGI made of agents that collaborate, and build new agents as needed, in order to complete tasks for a user.",
    images: `https://imgur.com/a/MYxRYDu`,
  },
};


export default function RootLayout({
  children,
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );}
