import './App.css';
import { Collapse, Input, Form, Col, Button, Row } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import OtherCollapse from './OtherCollapse';

function App() {
  const [form] = Form.useForm()
  const { Item, List } = Form;
  const { Panel } = Collapse;

  const formValueHandler = (values) => {
    console.log(values)
  }

  const panelChangeHandler = (key) => {
    console.log(key)
  }

  return (
    <>
      <Collapse
        destroyInactivePanel>

        <Panel header="everything" key="1">


          <Form form={form} name="form" onFinish={formValueHandler} initialValues={{ infoList: [""] }} >
        <List name="infoList" >

          {(fields, { add, remove }) => (
            <>


              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Item {...restField} key={key} >
                  <Collapse
                    destroyInactivePanel
                    defaultActiveKey={1} expandIconPosition="right" >
                    <Panel header={`This is panel header ${key + 1}`} key={key + 1}>

                      <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
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

                        {key > 0 &&
                          <DeleteOutlined onClick={(e) => { e.stopPropagation(); remove(name) }} />
                        }
                      </Col>
                      <Col span={24} >
                        <OtherCollapse name={name} />
                      </Col>
                    </Panel>
                  </Collapse>

                </Item>
              ))}

              <Button onClick={() => add()} > Add </Button>

            </>
          )}

        </List>

        <Button htmlType="submit" >Submit</Button>
      </Form>
        </Panel>
      </Collapse>
    </>
  );
}

export default App;
