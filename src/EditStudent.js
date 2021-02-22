import {
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Col,
  ButtonGroup
} from 'reactstrap'
import {capitalCase} from "change-case"
import { useState } from 'react'
import axios from 'axios'

const EditStudent = ({student, toggle}) => {
  const [studentRecord, setStudentRecord] = useState(student)

  const handleChange = (event) => {
    console.log(event.target)
    const input = event.target

    // TODO: Fix this since is not updating the value
    setStudentRecord({...studentRecord, [input.name]: input.value })
  }

  const handleSave = () => {
    const apiUrl = `https://overgrad-interview-api.herokuapp.com/students/${student.id}`

    axios.patch(apiUrl, { studentRecord })
      .then((result) => {
        const students = result.data
        // TODO: Setting the student record
    })
  }

  return (
    <Form>
      {
        Object.keys(student).map((attr) => {
          return (
            <FormGroup row key={attr}>
              <Label for={attr} sm={4}>{capitalCase(attr)}</Label>
              <Col sm={8}>
                <Input type="text" name={attr} value={student[attr]} onChange={handleChange}/>
              </Col>
            </FormGroup>
          )
        })
      }
      <ButtonGroup className="float-right mt-3">
        <Button color="primary" onClick={handleSave}>Save</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ButtonGroup>
    </Form>
  )
}
      
  export default EditStudent