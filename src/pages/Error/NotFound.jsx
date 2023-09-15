import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Link to={'/'}>Return to home</Link>
      <div>NotFound</div>
    </div>
  );
};

export default NotFound;
