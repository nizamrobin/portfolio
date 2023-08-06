import { Raleway, Roboto_Condensed, Neucha } from "next/font/google";

const fontPrimary = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-primary",
});

const fontSecondary = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-secondary",
});

const fontThird = Neucha({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-third",
});

export { fontPrimary, fontSecondary, fontThird };
