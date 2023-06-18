import {Text, View, } from "react-native";
import { useSearchParams, Stack } from 'expo-router'
import carsData from '../../../db/cars-data.json'
import CarCard from "../../entities/car/CarCard";
import Map from "../../widgets/Map";
export default () =>{
    const {carId} = useSearchParams()
    const car = carsData.find((car)=>car.id === carId)
    return car ? (
            <View>
                <Stack.Screen options={{title: `ТС #${car.id}`}}/>
                <CarCard car={car}/>
                <Map cars={[car]}/>
            </View>
        ) : <Text>Автомобиль не найден</Text>
    
}