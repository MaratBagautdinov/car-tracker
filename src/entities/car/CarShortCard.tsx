import { FC } from "react";
import {Text, View} from "react-native";
import { propsCarShortCard } from "../../types";
import getDriver from "../../../utils/getDriver";

import { Link } from 'expo-router'
const CarShortCard:FC<propsCarShortCard> = ({car}) =>{
    const driverName = getDriver(car.driverID).name 
    return (
        <Link href={`car/${car.id}`}>
            <View>
                <Text>ТС #{car.id}</Text>
                <Text>{driverName}</Text>
                <Text>{car.type}</Text>
            </View>            
        </Link>
            
        )
}
    

export default CarShortCard