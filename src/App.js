import logo from './logo.svg';
import Input from './components/Input';
import ListaTarea from './containers/ListaTarea';

function App() {
  return (
    <form>
      <div className="App">
        <header >
          <h1>Post it  simulator!</h1>
          <Input />
        </header>
        <main>
          <ListaTarea />
        </main>
      </div>
    </form>
  );
}

export default App;
