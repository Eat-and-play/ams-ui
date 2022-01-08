import request from "../../../util/request";
import {useContext, useEffect, useState} from "react";
import {Table} from "antd";
import {UpdateContext} from "../../../context/UpdateContext";

const CourseList = () => {
  const [list, setList] = useState([]);
  const {update} = useContext(UpdateContext)

  useEffect(() => {
    request.get('/course/list', {
      params: {page: 0, size: 1000}
    })
      .then(res => res.data)
      .then(data => {
        setList(data.data)
      })
  }, [update])

  const column = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '课程名称',
      dataIndex: 'name'
    }
  ]

  return (
    <Table columns={column} dataSource={list} rowKey={(row) => row.id}/>
  )
}

export default CourseList