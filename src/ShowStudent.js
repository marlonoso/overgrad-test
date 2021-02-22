import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import {capitalCase} from "change-case"
import { useState } from 'react'

const ShowStudent = ({student, toggle, students}) => {
  const [currentStudent, setCurrentStudent] = useState(student)

  const handleStep = (step) => {
    const currentStudentIndex = findStudent()

    let newStudentIndex = currentStudentIndex + step
    newStudentIndex = (newStudentIndex < 0) ? 0 : newStudentIndex
    newStudentIndex = (newStudentIndex > students.length - 1) ? students.length - 1 : newStudentIndex

    setCurrentStudent(students[newStudentIndex])
  }

  const findStudent = () => {
    return students.findIndex(studentItem => studentItem.id === currentStudent.id )
  }

  return (
    <>
      <ListGroup>
        {
          Object.keys(currentStudent).map((attr) => {
            return <ListGroupItem key={attr}><strong>{capitalCase(attr)}: </strong>{currentStudent[attr]}</ListGroupItem>
          })
        }
      </ListGroup>
      <Button color="primary" className="float-right mt-3" onClick={toggle}>Ok</Button>
      <Button className="float-left mt-3" onClick={() => handleStep(-1)}>Prev</Button>
      <Button className="float-left mt-3" onClick={() => handleStep(1)}>Next</Button>
    </>
  )
}
    
export default ShowStudent
