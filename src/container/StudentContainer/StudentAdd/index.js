import {Button, Form, Input, message} from "antd";
import request from "../../../util/request";

const StudentAdd = (props) => {

  // const {shouldUpdate} = useContext(UpdateContext)

  return (
    <Form
      layout={'inline'}
      onFinish={(values) => {
        request.put('/student', {name: values.name})
          .then(_ => {
            message.success('学生添加成功！')
            // shouldUpdate((p) => !p)
            props.set((p) => !p)
          })
      }}
    >
      <Form.Item
        label={'姓名'}
        name={'name'}
        required
      >
        <Input/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          添加
        </Button>
      </Form.Item>
    </Form>
  )
}

export default StudentAdd