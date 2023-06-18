import { I18n } from "i18n-js";
import { useState } from "react";

export default ()=>{
    const translations = {
        en: { 
            language: 'language',
            setings: 'setings',
            home: "Car Tracker",
            map: "map",
            all: "all",
            carge: "carge",
            passenger: "passenger",
            specialTranport: "special transport",
            tv: "tv",
            write: "write",
            call: "call"
        },
        ru: { 
            language: 'язык',
            setings: 'настройки',
            home: "отслеживание ТС",
            map: "карта",
            all: "все",
            carge: "грузовой",
            passenger: "пассажирский",
            specialTranport: "спецтранспорт",
            tv: "тс",
            write: "написать",
            call: "позвонить"
        },
    };
    const i18n = new I18n(translations)
    i18n.locale = 'ru'
    const [language, setLanguage] = useState(i18n)
   
    
    const langToggle = ()=> {
        const i18n = new I18n(translations)
        i18n.locale = language.locale === 'ru' ? 'en' : 'ru'
        setLanguage(i18n)
    }
    return {language, langToggle}
}