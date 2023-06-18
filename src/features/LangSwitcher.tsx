import { FC } from 'react'
import { Button, View } from 'react-native'
import { propsLangSwitcher } from '../types'
import { useDispatch } from 'react-redux'
import { setLanguage } from '../../store/languageSlice'
const LangSwitcher: FC<propsLangSwitcher> = ({ language }) => {
	const dispatch = useDispatch()

	return (
		<View>
			<Button title={language} onPress={() => dispatch(setLanguage())} />
		</View>
	)
}
export default LangSwitcher
