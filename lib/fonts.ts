import { Inter } from "next/font/google";

// Scoped to the YaloCode chat gallery widgets — the rest of the site uses
// General Sans, but these widgets are meant to read as Yalo's own product.
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
