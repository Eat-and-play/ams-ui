import StudentList from "./StudentList";
import StudentAdd from "./StudentAdd";
import {Card} from "antd";
import {useState} from "react";

const StudentContainer = () => {
  const [update, setUpdate] = useState(false)
  return (
    <>
      <Card title={'添加学生'}>
        <StudentAdd set={setUpdate}/>
      </Card>
      <Card title={'学生列表'}>
        <StudentList get={update}/>
      </Card>
    </>
  )
}

export default StudentContainer