import { Collapse, Input, Form, Col, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import CustomInput from './CustomInput'
import { Field } from 'rc-field-form'


const OtherCollapse = ({ name }) => {
    const { Item, List } = Form
    const { Panel } = Collapse




    return (
        <>
            <List name={[name, "anotherInfo"]} initialValue={[""]} >

                {(fields, { add, remove }) => (
                    <>


                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Item {...restField} key={key} >
                                <Collapse destroyInactivePanel
                                    expandIconPosition={"right"} >
                                    <Panel header={`This is Bidder header ${key + 1}`} key={key + 1}>


                                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
                                            <CustomInput>
                                                <Field {...restField} name={[name, "fName"]}>
                                                    <Input />
                                                </Field>
                                            </CustomInput>


                                            <CustomInput>
                                                <Field {...restField} name={[name, "lName"]}>
                                                    <Input />
                                                </Field>
                                            </CustomInput>


                                            <CustomInput>
                                                <Field {...restField} name={[name, "anotherFname"]}>
                                                    <Input />
                                                </Field>
                                            </CustomInput>

                                            <CustomInput>
                                                <Field {...restField} name={[name, "anotherLName"]}>
                                                    <Input />
                                                </Field>
                                            </CustomInput>


                                            {key > 0 &&
                                                <DeleteOutlined onClick={(e) => { e.stopPropagation(); remove(name) }} />
                                            }
                                        </Col>
                                    </Panel>
                                </Collapse>

                            </Item>
                        ))}
                        <Button onClick={() => add()} > Add </Button>

                    </>
                )}

            </List>


        </>
    )
}

export default OtherCollapse
