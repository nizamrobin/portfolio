import "./globals.css";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer";

export const metadata = {
  title: "nizamrobin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
