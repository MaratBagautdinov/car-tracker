import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { propsCarMap } from '../types'
import { Placemark, YMaps, Map as YandexMap } from '@pbe/react-yandex-maps'
import calculatePosition from '../../utils/calculatePosition'
const Map: FC<propsCarMap> = ({ cars }) => {
	const { center, zoom } = calculatePosition(cars.map(c => c.location))
	
	return (
		<View style={s.map}>
			<YMaps>
				<YandexMap
					modules={['control.ZoomControl', 'control.FullscreenControl']}
					defaultState={{
						center,
						zoom,
						controls: ['zoomControl', 'fullscreenControl'],
					}}
				>
					{cars.map(car => (
						<Placemark
							key={car.id}
							defaultGeometry={car.location}
							options={{
								preset: 'islands#blueCircleDotIcon',
								balloonMinWidth: 22
							}}
						/>
					))}
				</YandexMap>
			</YMaps>
		</View>
	)
}
export default Map

const s = StyleSheet.create({
	map: {
		width: '100%',
	},
})
