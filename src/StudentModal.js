import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap'
import ShowStudent from './ShowStudent'
import EditStudent from './EditStudent'

const StudentModal = (props) => {
  const { student, students, toggle, open, editing } = props

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>{student.name}</ModalHeader>
      <ModalBody>
        { editing ? <EditStudent student={student}/> : <ShowStudent student={student} toggle={toggle} students={students}/>}
      </ModalBody>
    </Modal>
  )
}
  
  export default StudentModal