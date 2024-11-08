import AppBar from "@/components/AppBar";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppBar />
      <NavBar>
        {children}
      </NavBar>
    </>
  );
}
