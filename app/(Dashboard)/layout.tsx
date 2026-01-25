import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "./Components/layouts/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SportOn Admins",
  description: "Admin Dashboard for SportOn Website",
};

export default function RootLayout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}>
            <div className="flex min-h-screen bg-white">
                <Sidebar />
                <main className="flex-10 ml-80 p-14 bg-[#F7F9FA] min-h-screen">
                    <div className="max-w-6xl mx-auto">{children}</div>
                </main>
            </div>
      </body>
    </html>
  );
}
