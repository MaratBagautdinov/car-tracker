import getDriver from "../../../utils/getDriver";
import { FC } from "react";
import {Text, View} from "react-native";
import { propsCarCard } from "../../types";
import ContactButton from "../../shared/ContactButton";
import {Linking} from 'react-native'

const CarCard:FC<propsCarCard> = ({car}) =>{
    const driver = getDriver(car.driverID)
    return (
        <View>
            <Text>ТС #{car.id}</Text>
            <Text>{driver.name}</Text>
            <ContactButton opPress={()=>Linking.openURL(`http://api.whatsapp.com/send?phone=${driver.phoneNumber}`)}>Написать</ContactButton>
            <ContactButton opPress={()=>Linking.openURL(`tel:+${driver.phoneNumber}`)}>Позвонить</ContactButton>
        </View> 
    )
}


export default CarCard