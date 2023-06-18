import { Button, View} from "react-native";
import { carT, propsCarView, propsCarsFilter } from "../types";
import { useState } from 'react';
import CarsFilter from "../features/CarsFilter";
import CarView from "../widgets/CarsView";
import carsData from '../../db/cars-data.json';
import { useEffect } from 'react';
import { Stack } from "expo-router";
import useLanguage from "../../hooks/useLanguage";


export default () =>{
    const {language} = useLanguage();
    const [carsTypeFilter, setCarsTypeFilter] = useState<propsCarsFilter['carsTypeFilter']>('Все')
          const [viewType, setViewType] = useState<propsCarView['viewType']>('list')
    const [cars, setCars] = useState<carT[]>([])
    useEffect(()=>{
        setCars(carsData.filter((car) => 
        carsTypeFilter === 'Все' 
            ? car 
            : car.type === carsTypeFilter))
    }, [carsTypeFilter, setCars])
    return (
        <View>
            <Stack.Screen options={{title: language.t('home')}}/>
            <Button title={viewType === 'list' ? 'map' : 'list'} onPress={()=>setViewType(viewType === 'list' ? 'map' : 'list')} />
            <CarsFilter carsTypeFilter={carsTypeFilter} setCarsTypeFilter={setCarsTypeFilter}/>
            <CarView cars={cars} viewType={viewType}/>
        </View>
    )
}
    