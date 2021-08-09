import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const {
    props: { user },
  } = usePage();

  return (
    <>
      <NavBar user={user} />
      {children}
    </>
  );
};

// export default Layout;
export default (page) => <Layout>{page}</Layout>;
// https://tailwindui.com/documentation#resources-and-assets
// https://www.salvia-kit.com/dashboard-v4
