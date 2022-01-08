import StudentList from "./StudentList";
import StudentAdd from "./StudentAdd";
import {Card} from "antd";

const StudentContainer = () => {
  return (
    <>
      <Card title={'添加学生'}>
        <StudentAdd/>
      </Card>
      <Card title={'学生列表'}>
        <StudentList/>
      </Card>
    </>
  )
}

export default StudentContainer