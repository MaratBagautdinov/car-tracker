import { Button, View } from 'react-native'
import { carT, propsCarView, propsCarsFilter } from '../src/types'
import { useState } from 'react'
import CarsFilter from '../src/features/CarsFilter'
import CarView from '../src/widgets/CarsView'
import carsData from '../db/cars-data.json'
import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { rootState } from '../store'
import { useSelector } from 'react-redux'



export default () => {
	const { word } = useSelector((state: rootState) => state.language)
	const [carsTypeFilter, setCarsTypeFilter] = useState<propsCarsFilter['carsTypeFilter']>('все')
	const [viewType, setViewType] = useState<propsCarView['viewType']>('map')
	const [cars, setCars] = useState<carT[]>([])
	useEffect(() => {
		setCars(
			carsData.filter(car => (carsTypeFilter === 'все' ? car : car.type === carsTypeFilter)),
		)
	}, [carsTypeFilter, setCars])
	return (
		<View>
			<Stack.Screen options={{ title: word.home }} />
			<Button
				title={viewType === 'list' ? word.map : word.list}
				onPress={() => setViewType(viewType === 'list' ? 'map' : 'list')}
			/>
			<CarsFilter carsTypeFilter={carsTypeFilter} setCarsTypeFilter={setCarsTypeFilter} />
			<CarView cars={cars} viewType={viewType} />
		</View>
	)
}
