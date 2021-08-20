// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
// bring in css and scss
import "./application.css";
import "./application.scss";
// bring in Inertia
import "./inertia.jsx";
// import axios from "axios";

Rails.start();
ActiveStorage.start();

console.log("Hello World from Webpacker JS/PACKS + inertia");
// axios.defaults.xsrfHeaderName = "X-CSRF-Token";
// import React from "react";
// import { render } from "react-dom";
// import { createInertiaApp } from "@inertiajs/inertia-react";

// createInertiaApp({
//   resolve: (name) => require(`../Pages/${name}`),
//   setup({ el, App, props }) {
//     render(<App {...props} />, el);
//   },
// });
