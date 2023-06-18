import {Text, View} from "react-native";
import CarShortCard from "../entities/car/CarShortCard";
import { carT, propsCarsList } from "../types";
import {useState, useEffect} from "react"
import axios from "axios";
import {FC} from 'react'
import { Asset } from "expo-asset";
import carsData from '../../db/cars-data.json'
const CarsList:FC<propsCarsList> = ({ cars}) =>{
    return (
        <View>
            {cars.map(car=> <CarShortCard car={car} key={car.id} />)}
        </View>
    )
}

export default CarsList