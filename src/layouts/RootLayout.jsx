import { Outlet } from "react-router";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <main className=" pt-[69px] min-h-screen mx-auto ">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
