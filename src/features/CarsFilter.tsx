import FilterButton from '../shared/FilterButton'
import { FC } from 'react'
import { View } from 'react-native'
import { filterButtonsT, propsCarsFilter } from '../types'
import { useSelector } from 'react-redux'
import { rootState } from '../../store'


const CarsFilter: FC<propsCarsFilter> = ({ carsTypeFilter, setCarsTypeFilter }) => {
	const { word } = useSelector((state: rootState) => state.language)
	const filterButtons: filterButtonsT[] = [
		{
			label: word.all,
			value: 'все'
		},
		{
			label: word.carge,
			value: 'грузовой'
		},
		{
			label: word.passenger,
			value: 'пассажирский'
		},
		{
			label: word.specialTransport,
			value: 'спецтранспорт'
		}
	]
	return (
		<View>
			{filterButtons.map(type => (
				<FilterButton
					carsTypeFilter={carsTypeFilter}
					label={type.label}
					value={type.value}
					setCarsTypeFilter={setCarsTypeFilter}
					key={type.label}
				/>
			))}
		</View>
	)
}
export default CarsFilter
