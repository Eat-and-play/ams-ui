import CourseList from "./CourseList";
import CourseAdd from "./CourseAdd";
import {Card} from "antd";

const CourseContainer = () => {
  return (
    <>
      <Card title={'添加课程'}>
        <CourseAdd/>
      </Card>
      <Card title={'课程列表'}>
        <CourseList/>
      </Card>
    </>
  )
}

export default CourseContainer