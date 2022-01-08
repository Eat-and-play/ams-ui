import 'antd/dist/antd.min.css'
import {Col, Menu, Row} from "antd";
import {Route, Routes, useNavigate} from "react-router-dom";
import StudentContainer from "./container/StudentContainer";
import CourseContainer from "./container/CourseContainer";
import SelectContainer from "./container/SelectContainer";
import React from "react";
import {UpdateContextWrapper} from "./context/UpdateContext";

function App() {

  const navigate = useNavigate()

  const rowStyle = {
    justify: 'center'
  }

  const colStyle = {
    span: 18
  }
  return (
    <UpdateContextWrapper>
      <Row {...rowStyle}>
        <Col {...colStyle}>
          <Menu mode={'horizontal'}>
            <Menu.Item
              key={'student'}
              onClick={() => {
                navigate('/student')
              }}>学生</Menu.Item>
            <Menu.Item
              key={'course'}
              onClick={() => {
                navigate('/course')
              }}>课程</Menu.Item>
            <Menu.Item
              key={'select'}
              onClick={() => {
                navigate('/select')
              }}>选课</Menu.Item>
          </Menu>
        </Col>
      </Row>
      <Row {...rowStyle}>
        <Col {...colStyle}>
          <Routes>
            <Route path={'/student'} element={<StudentContainer/>}/>
            <Route path={'/course'} element={<CourseContainer/>}/>
            <Route path={'/select'} element={<SelectContainer/>}/>
            <Route path={"/"} element={<StudentContainer/>}/>
          </Routes>
        </Col>
      </Row>
    </UpdateContextWrapper>
  )
    ;
}

export default App;
