import Header from "./Header";
import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <SideBar />
      <div>{children}</div>
    </>
  );
}
