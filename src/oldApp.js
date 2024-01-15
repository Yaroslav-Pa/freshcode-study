import MainContent from './components/MainContent';
import Greeting from './components/Greetings';
import './App.css';
import Phone from './components/Phone';
import SomeComponent from './components/SomeComponent'

const user1 = {
  name: 'User',
  lastName: 'Userenko',
};

const user2 = {
  name: 'Test',
  lastName: 'Testovich',
};

const user3 = {
  name: 'John',
  lastName: 'Doe',
};

const text = 'asdasdasdas dasd asd asdad asd asdasd asd asdas dasd asd asda';
const title = 'Some cool text'

function App() {
  return (
    <>
      <MainContent />
      <Greeting user={user1} />
      <Greeting user={user2} />
      <Greeting user={user3} />
      <SomeComponent text={text} title={title}/>
      <SomeComponent text="Long lorem ipsum text" tooltip="this is title" />
      <SomeComponent text="Other text" tooltip="other title" />
      <Phone color="black" price={15999.99} />
    </>
  );
}

export default App;