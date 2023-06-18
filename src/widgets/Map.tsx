import { FC } from "react";
import {Text, View} from "react-native";
import { propsCarMap } from "../types";

const Map:FC<propsCarMap> = ({cars}) =>
    <View>
        {cars.map(car=>{
         return <View key={car.id}>
        <Text>{car.location}</Text>
            <Text>{car.type}</Text>
         </View>})}
    </View>

export default Map