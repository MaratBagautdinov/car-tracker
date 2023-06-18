import { Text, StyleSheet, Pressable } from 'react-native'
import { FC } from 'react'
import { propsFilterButton } from '../types'
const FilterButton: FC<propsFilterButton> = ({ carsTypeFilter, setCarsTypeFilter, label, value }) => (
	<Pressable
		style={styles(value === carsTypeFilter).button}
		onPress={() => setCarsTypeFilter(value)}
	>
		<Text style={styles(label === carsTypeFilter).text}>{label}</Text>
	</Pressable>
)

const styles = (active: boolean) =>
	StyleSheet.create({
		button: {
			alignItems: 'center',
			justifyContent: 'center',
			paddingVertical: 12,
			paddingHorizontal: 32,
			borderRadius: 4,
			elevation: 3,
			backgroundColor: active ? '#000' : '#444',
		},
		text: {
			fontSize: 16,
			lineHeight: 21,
			fontWeight: 'bold',
			letterSpacing: 0.25,
			color: 'white',
		},
	})
export default FilterButton
