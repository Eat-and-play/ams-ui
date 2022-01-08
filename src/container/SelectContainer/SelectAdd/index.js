import {Button, Form, Input, message} from "antd";
import {useContext} from "react";
import {UpdateContext} from "../../../context/UpdateContext";
import request from "../../../util/request";

const SelectAdd = () => {
  const {shouldUpdate} = useContext(UpdateContext)
  return (
    <Form
      layout={'inline'}
      onFinish={(values) => {
        request.put('/select',
          {student_id: values.student_id, course_id: values.course_id})
          .then(_ => {
            message.success('选课成功')
            shouldUpdate()
          })
      }}
    >
      <Form.Item
        label={'学生ID'}
        name={'student_id'}
        required
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label={'课程ID'}
        name={'course_id'}
        required
      >
        <Input/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SelectAdd