import { Col, Form, Input } from 'antd'
import CustomField from './CustomField'

const CustomInput = ({ key, name, fieldKey, ...restField }) => {
    const { Item } = Form

    return (
        <>

            <CustomField name={name} {...restField} fieldname="fName" />

            <CustomField name={name} {...restField} fieldname="lName" />

            <CustomField name={name} {...restField} fieldname="anotherFname" />

            <CustomField name={name} {...restField} fieldname="anotherLName" />


        </>

    )
}

export default CustomInput
