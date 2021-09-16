import { Collapse, Input, Form, Col, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const OtherCollapse = ({ name }) => {
    const { Item, List } = Form
    const { Panel } = Collapse
    return (
        <>
            <List name={[name, "anotherInfo"]} >

                {(fields, { add, remove }) => (
                    <>


                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Item {...restField} key={key} >
                                <Collapse
                                    defaultActiveKey={1} expandIconPosition="right" >
                                    <Panel header={`This is panel header ${key + 1}`} key={key + 1}>

                                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }} >
                                            <Col xs={12} md={8} lg={6}>
                                                <Item {...restField} name={[name, "fName"]}  >
                                                    <Input />
                                                </Item>
                                            </Col>

                                            <Col xs={12} md={8} lg={6}>
                                                <Item {...restField} name={[name, "lname"]}  >
                                                    <Input />
                                                </Item>
                                            </Col>

                                            <Col xs={12} md={8} lg={6}>
                                                <Item {...restField} name={[name, "anotherFname"]}  >
                                                    <Input />
                                                </Item>
                                            </Col>

                                            <Col xs={12} md={8} lg={6}>
                                                <Item {...restField} name={[name, "anotherLName"]}  >
                                                    <Input />
                                                </Item>
                                            </Col>
                                            <DeleteOutlined onClick={(e) => { e.stopPropagation(); remove(name) }} />

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
