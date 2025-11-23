import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";
import { Providers } from "@/components/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
});

export const metadata = {
  title: "MoraVPN - Fast & Secure VPN App",
  description: "Fast & Secure VPN App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
