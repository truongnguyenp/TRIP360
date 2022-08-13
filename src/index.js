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
          "left":[" Hỗ trợ"],
          "right": ["Sign in"]
      },
      "header_pages": 
      [
          
              "TRANG CHỦ", "GIỚI THIỆU"
              ,"ĐIỂM DU LỊCH","ĐẶT VÉ","TRẢI NGHIỆM"
      ],
      "home_hero": [
          "CHÀO MỪNG ĐẾN VỚI","TRIP360","Hãy du lịch cùng nhau","Xem điểm du lịch"
      ],
      "features": {
          "features_box": ["ƯU ĐÃI HẤP DẪN","DỊCH VỤ TỐT NHẤT","HỖ TRỢ 24/7"],
          "features_games": {
              "section_heading": {
                  "sub_title": "TRẢI NGHIỆM NGAY",
                  "title": "DỊCH VỤ DU LỊCH"
              },
              "features_list": [
                  "Trải nghiệm ngay", "ĐỊA ĐIỂM","TOUR","NHÀ HÀNG"
              ]
          }
      },
      "activities": {
          "section_heading": {
              "sub_title": "MỘT CÁCH THÔNG MINH ĐỂ",
              "title": "DU LỊCH",
              "text":"DỊCH VỤ DU LỊCH THỰC TẾ ẢO ĐẦU TIÊN"
          },
          "table": {
              "table_heading": ["Địa điểm", "Giá", "Dịch vụ"],
              "tab_menu": ["Miền Trung"]
  
          }
      },
      "booking" :{
        "find": "TÌM KIẾM",
        "book": "ĐẶT NGAY"
      },
      "intro" : {
        "introduction": "GIỚI THIỆU",
        "content": "Giúp khách hàng nhanh chóng tiếp cận với tour mà họ cần, từ đó đưa ra quyết định lựa chọn tour phù hợp nhất thông qua kết quả hiển thị trên website khi tìm kiếm so với những cách làm truyền thống."
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
