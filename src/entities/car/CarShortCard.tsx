import { FC } from 'react'
import { Text, View } from 'react-native'
import { propsCarShortCard } from '../../types'
import getDriver from '../../../utils/getDriver'

import { Link } from 'expo-router'
import { rootState } from '../../../store'
import { useSelector } from 'react-redux'
const CarShortCard: FC<propsCarShortCard> = ({ car }) => {
	const { word } = useSelector((state: rootState) => state.language)
	const driverName = getDriver(car.driverID)?.name ?? word.driverNotFound
	return (
		<Link href={`car/${car.id}`}>
			<View>
				<Text>
					{word.tv} #{car.id}
				</Text>
				<Text>{driverName}</Text>
				<Text>{car.type}</Text>
			</View>
		</Link>
	)
}

export default CarShortCard
