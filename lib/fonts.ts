import { Geist_Mono, Inter } from "next/font/google";

// Scoped to the YaloCode chat gallery widgets — the rest of the site uses
// Satoshi, but these widgets are meant to read as Yalo's own product.
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Scoped to the YaloCode Agent Builder diagram (technical, file-system feel).
export const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
