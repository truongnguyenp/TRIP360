import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import FsBackend from "i18next-fs-backend";
import './styles/index.scss';
import Layout from './layout/Layout';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "top_header": {
          "left":[" Support"],
          "right": ["Sign in"]
      },
      "header_pages": 
      [
          
              "HOME", "INTRO"
              ,"PLACE","BOOKING","TRY OUT"
      ],
      "home_hero": [
          "WELCOME TO OUR TRAVEL AGENCY","TRIP360","Let's travel together","See place to travel"
      ],
      "features": {
          "features_box": ["GREAT OFFER","BEST SERVICE","24/7 SUPPORT"],
          "features_games": {
              "section_heading": {
                  "sub_title": "TRY TO CHECK OUT OUR",
                  "title": "TRAVEL SERVICE"
              },
              "features_list": [
                  "Try now", "PLACE","TOUR","RESTAURANT"
              ]
          }
      },
      "activities": {
          "section_heading": {
              "sub_title": "THE SMARTER WAY TO",
              "title": "TRAVEL",
              "text":"THE FIRST 3D PLACE TRAVELLING AGENCY"
          },
          "table": {
              "table_heading": ["Place", "Price", "Service"],
              "tab_menu": ["Central Vietnam"]
          }
      },
      "booking" :{
        "find": "FIND",
        "book": "BOOK"
      },
      "intro" : {
        "introduction": "INTRO",
        "content": "Helping customers quickly access the tour they need, thereby making the decision to choose the most suitable tour through the results displayed on the website when searching compared to traditional ways."
      }
    }
  },
  vn: {
    translation: {
      "top_header": {
          "left":[" H??? tr???"],
          "right": ["Sign in"]
      },
      "header_pages": 
      [
          
              "TRANG CH???", "GI???I THI???U"
              ,"??I???M DU L???CH","?????T V??","TR???I NGHI???M"
      ],
      "home_hero": [
          "CH??O M???NG ?????N V???I","TRIP360","H??y du l???ch c??ng nhau","Xem ??i???m du l???ch"
      ],
      "features": {
          "features_box": ["??U ????I H???P D???N","D???CH V??? T???T NH???T","H??? TR??? 24/7"],
          "features_games": {
              "section_heading": {
                  "sub_title": "TR???I NGHI???M NGAY",
                  "title": "D???CH V??? DU L???CH"
              },
              "features_list": [
                  "Tr???i nghi???m ngay", "?????A ??I???M","TOUR","NH?? H??NG"
              ]
          }
      },
      "activities": {
          "section_heading": {
              "sub_title": "M???T C??CH TH??NG MINH ?????",
              "title": "DU L???CH",
              "text":"D???CH V??? DU L???CH TH???C T??? ???O ?????U TI??N"
          },
          "table": {
              "table_heading": ["?????a ??i???m", "Gi??", "D???ch v???"],
              "tab_menu": ["Mi???n Trung"]
  
          }
      },
      "booking" :{
        "find": "T??M KI???M",
        "book": "?????T NGAY"
      },
      "intro" : {
        "introduction": "GI???I THI???U",
        "content": "Gi??p kh??ch h??ng nhanh ch??ng ti???p c???n v???i tour m?? h??? c???n, t??? ???? ????a ra quy???t ?????nh l???a ch???n tour ph?? h???p nh???t th??ng qua k???t qu??? hi???n th??? tr??n website khi t??m ki???m so v???i nh???ng c??ch l??m truy???n th???ng."
      }
        
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
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
