import { carT } from '../src/types'

export default (points: carT['location'][]) => {
	let zoom = 4
	let center = points[0]
	if (points.length > 1) {
		zoom = 1
		center = points.reduce(
			(sum, p) => {
				sum[0] += p[0]
				sum[1] += p[1]
				return sum
			},
			[0, 0],
		)

		center[0] = center[0] / points.length
		center[1] = center[1] / points.length
	}
	return { zoom, center }
}
