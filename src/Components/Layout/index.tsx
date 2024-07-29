import Header from "../Header/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}