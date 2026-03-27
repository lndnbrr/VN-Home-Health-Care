import { Lato } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "VN Home Health Care",
  description: "A Medicare-certified home health care agency proudly serving Wayne and Oakland Counties and the city of Westland since 2007.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body className="min-h-full flex flex-col antialiased bg-secondary">
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
