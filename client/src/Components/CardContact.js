import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/Actions';
const CardContact=({el})=>{
  const dispatch = useDispatch()
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.email}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.name}</Card.Subtitle>
        <Card.Text>
          {el.age}
        </Card.Text>
        <Card.Link as={Link} to={`/EditContact/${el._id}`}>Update</Card.Link>
        <Button onClick={()=> dispatch(deleteContact(el._id))} variant='danger'>Delete</Button>
      </Card.Body>
    </Card>
    )
}

export default CardContact