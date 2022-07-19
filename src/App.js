
import './App.css';
import Customer from './components/Customer'

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': 'Jason Jung',
  'birthday': '04062020',
  'gender': 'male',
  'job': 'student'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name': 'Ha Kim',
  'birthday': '04061993',
  'gender': 'female',
  'job': 'teacher'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name': 'Jason Jung',
  'birthday': '12061990',
  'gender': 'male',
  'job': 'police'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
            />
          );
        })
      }
    </div>
  );
}

export default App;
