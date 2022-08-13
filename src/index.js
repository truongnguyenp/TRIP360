import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import FsBackend from "i18next-fs-backend";
import './styles/index.scss';
import Layout from './layout/Layout';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18next
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // ... your i18next config
    backend: {
      supportedLngs: ['en', 'vn'],
      fallbackLng: 'en',
      debug: true,
      // Options for language detector
      detection: {
        order: ['path', 'cookie', 'htmlTag'],
        caches: ['cookie'],
      },
      // react: { useSuspense: false },
      backendOptions: [{
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }]
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense>
      <Layout />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
