import FilterButton from "../shared/FilterButton";
import { FC } from "react";
import {View} from "react-native";
import { propsCarsFilter } from "../types";

const CarsFilter:FC<propsCarsFilter> = ({carsTypeFilter, setCarsTypeFilter}) =>
    <View>
        {["Все", "Грузовой", "Пассажирский", "Спецтранспорт"].map(type=> 
            <FilterButton 
                carsTypeFilter={carsTypeFilter} 
                label={type} 
                setCarsTypeFilter={setCarsTypeFilter}
                key={type} />
        )}
    </View>

export default CarsFilter