import { View } from 'react-native'
import CarShortCard from '../entities/car/CarShortCard'
import { propsCarsList } from '../types'
import { FC } from 'react'
const CarsList: FC<propsCarsList> = ({ cars }) => {
	return (
		<View>
			{cars.map(car => (
				<CarShortCard car={car} key={car.id} />
			))}
		</View>
	)
}

export default CarsList
