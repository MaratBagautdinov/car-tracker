import getDriver from '../../../utils/getDriver'
import { FC } from 'react'
import { Text, View } from 'react-native'
import { propsCarCard } from '../../types'
import ContactButton from '../../shared/ContactButton'
import { Linking } from 'react-native'
import { rootState } from '../../../store'
import { useSelector } from 'react-redux'

const CarCard: FC<propsCarCard> = ({ car }) => {
	const driver = getDriver(car.driverID)
	const { word } = useSelector((state: rootState) => state.language)
	return (
		<View>
			<Text>{word.tv} #{car.id}</Text>
			{driver ? (
			<>
			<Text>{driver.name}</Text>
			<ContactButton
				opPress={() => Linking.openURL(`http://api.whatsapp.com/send?phone=${driver.phoneNumber}`)}
                label={word.write}
			/>
			<ContactButton
				opPress={() => Linking.openURL(`tel:+${driver.phoneNumber}`)}
                label={word.call}
            />
			</>) : <Text children={word.driverNotFound} />}
		</View>
	)
}

export default CarCard
