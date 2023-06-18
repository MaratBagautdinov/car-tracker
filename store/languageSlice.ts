import { createSlice } from '@reduxjs/toolkit';

const en = { 
    language: 'language',
    settings: 'settings',
    home: "car tracker",
    map: "map",
    list: "list",
    all: "all",
    carge: "carge",
    passenger: "passenger",
    specialTransport: "special transport",
    tv: "tv",
    write: "write",
    call: "call",
    carsNotFound: "car not found",
    driverNotFound: "driver not found"
}
export type wordsLibrary = typeof en
const ru: wordsLibrary = { 
    language: 'язык',
    settings: 'настройки',
    home: "отслеживание ТС",
    map: "карта",
    list: "список",
    all: "все",
    carge: "грузовой",
    passenger: "пассажирский",
    specialTransport: "спецтранспорт",
    tv: "тс",
    write: "написать",
    call: "позвонить",
    carsNotFound: "автомобиль не найден",
    driverNotFound: "водитель не найден",
}

// Отказался от использования I18n, потому что захотел типизировать wordsLibrary
const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: 'en',
        word: en
    },
    reducers: {
        setLanguage: (state)  => {
            state.language = state.language === 'en' ? 'ru' : 'en'
            state.word = state.language === 'en' ? en : ru
        }
    }
})
export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer