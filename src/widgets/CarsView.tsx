import Map from "./Map";
import { FC } from "react";
import { propsCarView } from "../types";
import CarsList from "./CarsList";

const CarView:FC<propsCarView> = ({viewType, cars}) =>{
    switch(viewType){
        case "list": return <CarsList cars={cars}/>
        case "map": return <Map cars={cars}/>
    }
}
export default CarView