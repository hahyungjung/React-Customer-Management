import './App.css';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
//import { withStyles } from '@material-ui/core/styles';

import styled from 'styled-components';
const TableContainer = styled(Paper)`
  max-height : 760px;
  width : 96%;
  overflow:auto;
`;

const customers = [{
  "id": 1,
  "user_name": "lgreenrodd0",
  "first_name": "Lion",
  "last_name": "Greenrodd",
  "email": "lgreenrodd0@census.gov",
  "gender": "Male",
  "phone_number": "953-833-1643"
}, {
  "id": 2,
  "user_name": "lpratt1",
  "first_name": "Lynda",
  "last_name": "Pratt",
  "email": "lpratt1@people.com.cn",
  "gender": "Female",
  "phone_number": "144-713-0584"
}, {
  "id": 3,
  "user_name": "misakov2",
  "first_name": "Morten",
  "last_name": "Isakov",
  "email": "misakov2@webnode.com",
  "gender": "Male",
  "phone_number": "934-634-9768"
}, {
  "id": 4,
  "user_name": "agillio3",
  "first_name": "Annalise",
  "last_name": "Gillio",
  "email": "agillio3@vimeo.com",
  "gender": "Female",
  "phone_number": "509-805-4588"
}, {
  "id": 5,
  "user_name": "wspolton4",
  "first_name": "Wainwright",
  "last_name": "Spolton",
  "email": "wspolton4@sbwire.com",
  "gender": "Genderfluid",
  "phone_number": "718-351-6040"
}, {
  "id": 6,
  "user_name": "rhollidge5",
  "first_name": "Rufe",
  "last_name": "Hollidge",
  "email": "rhollidge5@marketwatch.com",
  "gender": "Male",
  "phone_number": "593-490-5431"
}, {
  "id": 7,
  "user_name": "nmarkwell6",
  "first_name": "Nancy",
  "last_name": "Markwell",
  "email": "nmarkwell6@economist.com",
  "gender": "Female",
  "phone_number": "178-916-2111"
}, {
  "id": 8,
  "user_name": "dfarrow7",
  "first_name": "Danielle",
  "last_name": "Farrow",
  "email": "dfarrow7@phpbb.com",
  "gender": "Female",
  "phone_number": "474-410-8336"
}, {
  "id": 9,
  "user_name": "bberth8",
  "first_name": "Boniface",
  "last_name": "Berth",
  "email": "bberth8@goodreads.com",
  "gender": "Male",
  "phone_number": "332-760-8447"
}, {
  "id": 10,
  "user_name": "bcheesley9",
  "first_name": "Brigitta",
  "last_name": "Cheesley",
  "email": "bcheesley9@washington.edu",
  "gender": "Female",
  "phone_number": "725-814-7503"
}, {
  "id": 11,
  "user_name": "dellsa",
  "first_name": "Dana",
  "last_name": "Ells",
  "email": "dellsa@dmoz.org",
  "gender": "Male",
  "phone_number": "338-476-1625"
}, {
  "id": 12,
  "user_name": "nbasilottab",
  "first_name": "Nellie",
  "last_name": "Basilotta",
  "email": "nbasilottab@spotify.com",
  "gender": "Genderfluid",
  "phone_number": "689-858-9882"
}, {
  "id": 13,
  "user_name": "rfritzerc",
  "first_name": "Rosene",
  "last_name": "Fritzer",
  "email": "rfritzerc@wikispaces.com",
  "gender": "Female",
  "phone_number": "152-233-6146"
}, {
  "id": 14,
  "user_name": "fmorpheyd",
  "first_name": "Fayina",
  "last_name": "Morphey",
  "email": "fmorpheyd@yahoo.com",
  "gender": "Female",
  "phone_number": "328-524-6359"
}, {
  "id": 15,
  "user_name": "rtiptafte",
  "first_name": "Roderic",
  "last_name": "Tiptaft",
  "email": "rtiptafte@slate.com",
  "gender": "Male",
  "phone_number": "116-954-6261"
}, {
  "id": 16,
  "user_name": "psimmonitef",
  "first_name": "Pier",
  "last_name": "Simmonite",
  "email": "psimmonitef@reference.com",
  "gender": "Female",
  "phone_number": "942-904-6812"
}, {
  "id": 17,
  "user_name": "mburrowg",
  "first_name": "Marissa",
  "last_name": "Burrow",
  "email": "mburrowg@illinois.edu",
  "gender": "Female",
  "phone_number": "141-717-1266"
}, {
  "id": 18,
  "user_name": "lerdish",
  "first_name": "Lizabeth",
  "last_name": "Erdis",
  "email": "lerdish@theguardian.com",
  "gender": "Female",
  "phone_number": "584-841-0564"
}, {
  "id": 19,
  "user_name": "akittoei",
  "first_name": "Ava",
  "last_name": "Kittoe",
  "email": "akittoei@cnbc.com",
  "gender": "Female",
  "phone_number": "282-994-5212"
}, {
  "id": 20,
  "user_name": "aoliveiraj",
  "first_name": "Ailene",
  "last_name": "Oliveira",
  "email": "aoliveiraj@tuttocitta.it",
  "gender": "Female",
  "phone_number": "597-484-1368"
}, {
  "id": 21,
  "user_name": "mcarcassk",
  "first_name": "Maurizio",
  "last_name": "Carcass",
  "email": "mcarcassk@stanford.edu",
  "gender": "Male",
  "phone_number": "469-719-6769"
}, {
  "id": 22,
  "user_name": "gbroadbentl",
  "first_name": "Goldy",
  "last_name": "Broadbent",
  "email": "gbroadbentl@bloglovin.com",
  "gender": "Female",
  "phone_number": "649-482-4972"
}, {
  "id": 23,
  "user_name": "cschleswigholsteinm",
  "first_name": "Cullan",
  "last_name": "Schleswig-Holstein",
  "email": "cschleswigholsteinm@cnn.com",
  "gender": "Male",
  "phone_number": "695-654-7973"
}, {
  "id": 24,
  "user_name": "gcheccuzzin",
  "first_name": "Gerry",
  "last_name": "Checcuzzi",
  "email": "gcheccuzzin@cisco.com",
  "gender": "Female",
  "phone_number": "304-786-8559"
}, {
  "id": 25,
  "user_name": "tgrosvenero",
  "first_name": "Tommie",
  "last_name": "Grosvener",
  "email": "tgrosvenero@qq.com",
  "gender": "Female",
  "phone_number": "937-746-9894"
}, {
  "id": 26,
  "user_name": "ldellenbrokp",
  "first_name": "Latrena",
  "last_name": "Dellenbrok",
  "email": "ldellenbrokp@nps.gov",
  "gender": "Female",
  "phone_number": "349-287-4908"
}, {
  "id": 27,
  "user_name": "sharbordq",
  "first_name": "Salmon",
  "last_name": "Harbord",
  "email": "sharbordq@infoseek.co.jp",
  "gender": "Male",
  "phone_number": "317-225-1582"
}, {
  "id": 28,
  "user_name": "rmattekr",
  "first_name": "Roselin",
  "last_name": "Mattek",
  "email": "rmattekr@umn.edu",
  "gender": "Agender",
  "phone_number": "398-414-3454"
}, {
  "id": 29,
  "user_name": "dhorrys",
  "first_name": "Deanne",
  "last_name": "Horry",
  "email": "dhorrys@loc.gov",
  "gender": "Female",
  "phone_number": "521-392-4645"
}, {
  "id": 30,
  "user_name": "aluisettit",
  "first_name": "Adamo",
  "last_name": "Luisetti",
  "email": "aluisettit@biglobe.ne.jp",
  "gender": "Male",
  "phone_number": "846-466-4835"
}]

function App() {
  return (
    <TableContainer>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID Number</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
      {customers.map(c => { return ( <Customer key={c.id} id={c.id} user_name={c.user_name} first_name={c.first_name} last_name={c.last_name} email={c.email} gender={c.gender} phone_number={c.phone_number}/> );})}
      </TableBody>
      </Table>
      
    </TableContainer>
  );
}

export default App;