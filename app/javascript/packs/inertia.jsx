import { App } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from "../Components/Layout"

document.addEventListener('DOMContentLoaded', () => {
  InertiaProgress.init();
  const el = document.getElementById('app')

   const csrfToken = document.querySelector('meta[name=csrf-token]').content;
   axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

  render(
    <App
      initialPage={JSON.parse(el.dataset.page)}
      // resolveComponent={name => require(`../Pages/${name}`).default}
      resolveComponent={name => import(`../Pages/${name}`).then(({ default: page }) => {
        if (page.layout === undefined) {
          page.layout = Layout;

        }
        return page;
      })}
    />,
    el
  )
});
// 23 mins video 3
// https://blog.usejournal.com/devise-with-react-webpacker-and-rails-dacbf9ae0233
