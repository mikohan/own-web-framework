import axios from 'axios';
import { User } from './models/User';
const url: string = `http://localhost:3000/users`;
const user = new User({ name: 'Vladimir', age: 49 });

// axios.delete(url + '/2');
