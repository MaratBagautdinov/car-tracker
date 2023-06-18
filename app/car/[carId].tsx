import { Text, View } from 'react-native'
import { useSearchParams, Stack } from 'expo-router'
import carsData from '../../db/cars-data.json'
import CarCard from '../../src/entities/car/CarCard'
import Map from '../../src/widgets/Map'
import { rootState } from '../../store'
import { useSelector } from 'react-redux'
export default () => {
	const { carId } = useSearchParams()
	const car = carsData.find(car => car.id === carId)
	const {word} = useSelector((state: rootState)=> state.language)
	return car ? (
		<View>
			<Stack.Screen options={{ title: `${word.tv} #${car.id}` }} />
			<CarCard car={car} />
			<Map cars={[car]} />
		</View>
	) : (
		<Text children={word.carsNotFound} />
	)
}
