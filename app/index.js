import cookies from 'js-cookie';
import faker from 'faker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import run from './index.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const userName = faker.name.findName();
const getName = () => cookies.get('name');
if (!getName()) {
  cookies.set('name', userName);
}

run(getName());
