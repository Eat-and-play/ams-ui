import request from "../../../util/request";
import {useEffect, useState} from "react";
import {Table} from "antd";

const StudentList = (props) => {
  const [list, setList] = useState([]);
  // const {update} = useContext(UpdateContext);

  useEffect(() => {
    request.get('/student/list', {
      params: {page: 0, size: 1000}
    })
      .then(res => res.data)
      .then(data => {
        setList(data.data)
      })
  }, [props.get])

  const column = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name'
    }
  ]

  return (
    <Table columns={column} dataSource={list} rowKey={(row) => row.id}/>
  )
}

export default StudentList