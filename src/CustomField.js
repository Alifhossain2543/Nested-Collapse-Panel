import { Form, Input } from 'antd'
import CustomInput from './CustomInput'


const CustomField = ({ name }) => {
    const { Item } = Form
    return (
        <Item name={[name, "fName"]} >
            <CustomInput />
        </Item>
    )
}

export default CustomField
