import { FC } from "react";
import {Button, View} from "react-native";
import { propsLangSwitcher } from "../types";
import {useDispatch} from 'react-redux'
const LangSwitcher:FC<propsLangSwitcher> = ({language}) => {
    const dispatch = useDispatch()
    console.log('====================================');
    console.log(dispatch);
    console.log('====================================');
    return (
        <View>
            <Button title={language} onPress={()=>dispatch}/>
        </View>
    )
}
export default LangSwitcher
