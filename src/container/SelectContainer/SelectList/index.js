import request from "../../../util/request";
import {useContext, useEffect, useState} from "react";
import {Table} from "antd";
import {UpdateContext} from "../../../context/UpdateContext";

const SelectList = (props) => {
  const [list, setList] = useState([])
  const {update} = useContext(UpdateContext)

  useEffect(() => {
    request.get('/select/list', {
      params: {page: 0, size: 1000}
    })
      .then(res => res.data)
      .then(data => {
        setList(data.data)
      })
  }, [update])

  const column = [
    {
      title: '学生ID',
      dataIndex: 'student_id'
    },
    {
      title: '学生姓名',
      dataIndex: 'student_name'
    },
    {
      title: '课程ID',
      dataIndex: 'course_id'
    },
    {
      title: '课程名称',
      dataIndex: 'course_name'
    }
  ]

  return (
    <Table columns={column} dataSource={list} rowKey={(row) => `${row.student_id}_${row.course_id}`}/>
  )
}

export default SelectList