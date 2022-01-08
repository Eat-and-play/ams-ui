import {Button, Form, Input, message} from "antd";
import {useContext} from "react";
import {UpdateContext} from "../../../context/UpdateContext";
import request from "../../../util/request";

const CourseAdd = () => {
  const {shouldUpdate} = useContext(UpdateContext)
  return (
    <Form
      layout={'inline'}
      onFinish={(values) => {
        request.put('/course', {name: values.name})
          .then(_ => {
            message.success('课程添加成功！')
            shouldUpdate()
          })
      }}
    >
      <Form.Item
        label={'课程名'}
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

export default CourseAdd