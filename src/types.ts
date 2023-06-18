export type carT = {
    id: string
    type: "Грузовой" | "Пассажирский" | "Спецтранспорт" | string
    location: string
    driverID: driverT['id']
}
export type driverT = {
    id: string
    name: string
    phoneNumber: number
}
export interface propsCarMap {
    cars: carT[]
}
export interface propsLangSwitcher {
    language: 'ru' | 'eng' | string
}
export interface propsCarCard {
    car: carT
}
export interface propsCarShortCard {
    car: carT
}

export interface propsCarsFilter {
    setCarsTypeFilter: (carType: propsCarsFilter['carsTypeFilter'])=>void
    carsTypeFilter: carT['type'] | 'all'
}

export interface propsCarsList {
    cars: carT[]
}
export interface propsCarView {
    viewType: 'list' | 'map'
    cars: carT[]
}

export interface propsFilterButton extends propsCarsFilter{
    label: carT['type']
}

export interface propsContactButton {
    opPress: ()=> void
    children: string;
}
