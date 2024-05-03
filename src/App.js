
import './App.css';
import NavBar from './components/NavBar';
// import SideBar from './components/SideBar';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Home from './components/Home';



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'kiny'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },

  });

function App() {
  const { t } = useTranslation();
  return (
    <>
    <div className='h-screen   bg-gradient-to-r from-sky-600 to-indigo-500 '>
      <NavBar />
      <Home />



      <h2>{t('')}</h2>;
   </div>
    </>
  );
}

export default App;
