import SelectList from "./SelectList";
import SelectAdd from "./SelectAdd";
import {Card} from "antd";

const SelectContainer = () => {
  return (
    <>
      <Card title={'添加选课'}>
        <SelectAdd/>
      </Card>
      <Card title={'选课列表'}>
        <SelectList/>
      </Card>
    </>
  )
}

export default SelectContainer