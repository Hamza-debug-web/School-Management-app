import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen flex">
        {/* Left side (fixed sidebar) */}
        <div className="fixed top-0 left-0 h-scren w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white shadow-lg">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2 p-4"
          >
            <Image src="/images/logo.png" alt="logo" height={30} width={30} />
            <span className="hidden lg:block font-bold">DAR-E-ARQAM</span>
          </Link>

          <div className="overflow-y-auto h-[calc(100vh-76px)]"> {/* Adjusts height after logo */}
    <Menu />
  </div>
        </div>

        {/* Right side (content area) */}
        <div className="ml-[14%] md:ml-[8%] lg:ml-[16%] xl:ml-[14%] w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
