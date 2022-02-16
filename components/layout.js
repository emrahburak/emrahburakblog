import Head from "next/head";
import Content from "./content";
import Navbar from "./navbar";
import SideBar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container">
      <Navbar />
        <SideBar />
        <Content>
          {children}
        </Content>
      </div>
    </>
  );
}
