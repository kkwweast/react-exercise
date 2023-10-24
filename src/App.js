import logo from "./logo.svg";
import "./Add.css";

function App() {
    return( 
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Learning React</h1>
                <p> React is Awesome</p>
                <p>Here is another paragraph!</p>
                <a 
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ul>
                    <li>React is a free and open source</li>
                    <li>
                        React is one of the most popular and in demand (if not <em>the most</em>)
                    </li>
                    <li>
                        React is well supported with many open source npm packages dedicated
                        to making React projects as far-reaching as possible.  
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default App;
   