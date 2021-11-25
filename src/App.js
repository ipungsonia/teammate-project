import './App.css';
import Map from './components/maps'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <b><div className="Head-comp">Ground Control Station</div></b>
        <a className="Head-comp">Home</a>
        <a className="Head-comp">Mission List</a>
      </header>
      <body>
        <h1>Create Your Mission</h1>
        <h4>Make your own mission plane by draw it in the map</h4>
        <Map></Map><br/>
        <button>Create</button>
        <h1>List Mission</h1>
        <h4>Here are your missions that have been created before</h4>
        <table cellPadding ="10" width="100%">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Mission name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>1</td>
                <td>Fly to Wisdom Park</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Random Flight</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
          </tbody>
        </table>        
      </body>
    </div>
  );
}

export default App;
