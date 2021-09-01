import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import NavBar from "./NavBar";
import Alert from "./Alert";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const {
    props: { data },
  } = usePage();
  const { flash } = usePage().props;
  // const [showAlert, setAlertState] = useState(true);

  // const changeAlertState = () => {
  //   setAlertState((showAlert) => !showAlert);
  //   // setAlertState(false);
  // };

  console.log(flash);
  console.log(data);

  return (
    <>
      {flash.alert || (flash.success && <Alert flash={flash} />)}
      <NavBar data={data} />
      {children}
      <Footer />
    </>
  );
};

// export default Layout;
export default (page) => <Layout>{page}</Layout>;
// https://tailwindui.com/documentation#resources-and-assets
// https://www.salvia-kit.com/dashboard-v4
// https://dev.to/dmtrkovalenko/the-neatest-way-to-handle-alert-dialogs-in-react-1aoe
