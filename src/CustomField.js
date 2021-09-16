import { Form, Input, Col } from 'antd'


const CustomField = ({ fieldname, key, name, fieldKey, ...restField }) => {
    const { Item } = Form
    return (
        <Col xs={12} md={8} lg={6}>
            <Item {...restField} name={[name, fieldname]}>
                <Input />
            </Item>
        </Col>

    )
}

export default CustomField
