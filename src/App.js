import { Container, Table, Button, Spinner, ButtonGroup } from 'reactstrap';
import { useEffect, useState } from "react";
import axios from 'axios'
import StudentModal from './StudentModal'

function App() {
  const [loading, setLoading] = useState(false)
  const [students, setStudents] = useState([])
  const [modal, setModal] = useState(false)
  const [displayedStudent, setDisplayedStudent] = useState({})
  const [editing, setEditing] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    const apiUrl = 'https://overgrad-interview-api.herokuapp.com/students'
  
    axios.get(apiUrl).then((result) => {
      const students = result.data
      setLoading(false)
      setStudents(students)
    })
  }, [])

  const toggleModal = () => setModal(!modal)

  const handleDisplayStudent = (student, editMode=false) => {
    setDisplayedStudent(student)
    setEditing(editMode)
    toggleModal()
  }

  return (
    <Container>
      {loading ? <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
      :
        <Table dark>
          <thead>
            <tr>
              <th>Name</th>
              <th>GPA</th>
              <th>ACT</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student)=>{
                return (
                  <>
                    <tr>
                      <td>{student.name}</td>
                      <td>{student.gpa}</td>
                      <td>{student.act_score}</td>
                      <td colSpan="2">
                      <ButtonGroup>
                        <Button onClick={() => handleDisplayStudent(student)}>Show</Button>
                        <Button onClick={() => handleDisplayStudent(student, true)}>Edit</Button>
                      </ButtonGroup>
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </Table>
      }
      <StudentModal
        student={displayedStudent}
        students={students}
        toggle={toggleModal}
        open={modal}
        editing={editing}
      />
    </Container>
  );
}

export default App;
