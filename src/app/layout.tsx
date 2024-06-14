import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provieder";
import { TypeContextWrapper } from "@/typeContext";
import { MovieContextWrapper } from "@/watchContext";
import { SearchAnimeContextWrapper } from "@/searchAnimeContext";
import Navbar from "../../components/navbar/Navbar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" overflow-y-scroll bg-black  font-bold font-sans m-0 p-0  overflow-x-hidden ">
        <Navbar/>
        <div className="container ">
          <Providers>
            <TypeContextWrapper>
              <MovieContextWrapper>
                <SearchAnimeContextWrapper>{children}</SearchAnimeContextWrapper>
              </MovieContextWrapper>
            </TypeContextWrapper>
          </Providers>
        </div>
      </body>
    </html>
  );
}
