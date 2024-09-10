import { HiTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from '../styles/ListItem.module.css';

function ListItem({ task }) {
  console.log(task);
  return (
    <div>
      <input type='checkbox' />
      <span>{task.text}</span>
      <Button>
        <HiTrash />
      </Button>
    </div>
  );
}

export default ListItem;
