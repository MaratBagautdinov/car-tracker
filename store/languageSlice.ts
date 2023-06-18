import { createSlice } from '@reduxjs/toolkit';
import { I18n } from 'i18n-js';

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
const initialState = new I18n(translations)
initialState.locale = 'ru'


const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state)=>{
            state.locale = state.locale === 'en' ? 'ru' : 'en' 
        }
    }
})

export default languageSlice