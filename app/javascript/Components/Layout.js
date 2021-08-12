import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import NavBar from "./NavBar";
import Alert from "./Alert";

const Layout = ({ children }) => {
  const {
    props: { user },
  } = usePage();
  const { flash } = usePage().props;
  // const [showAlert, setAlertState] = useState(true);

  // const changeAlertState = () => {
  //   setAlertState((showAlert) => !showAlert);
  //   // setAlertState(false);
  // };

  // console.log(flash);

  return (
    <>
      {flash.message && <Alert flash={flash} />}
      <NavBar user={user} />
      {children}
    </>
  );
};

// export default Layout;
export default (page) => <Layout>{page}</Layout>;
// https://tailwindui.com/documentation#resources-and-assets
// https://www.salvia-kit.com/dashboard-v4
// https://dev.to/dmtrkovalenko/the-neatest-way-to-handle-alert-dialogs-in-react-1aoe
