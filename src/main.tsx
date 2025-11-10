import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//Register service worker (basic) 
//What is a service worker?
//A service worker is a script that your browser runs in the background, separate from a web page, 
//opening the door to features that don't need a web page or user interaction. 
//Today, they already include features like push notifications and background sync. 
//In the future, service workers might support other things like periodic sync or geofencing.
//More info: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
//When to use a service worker?
//Service workers are a powerful way to enable offline experiences, 
//periodic background syncs, push notifications, and other features that don't need a web page or user interaction.
//More info: https://developers.google.com/web/fundamentals/primers/service-workers/what-are-service-workers

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .catch(err => console.log('Service worker registration failed: ', err));
  });
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
