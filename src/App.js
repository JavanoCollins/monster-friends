import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/input/searchbox.jsx";

export class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        async function getUsers() {
            let res = await fetch(
                `https://jsonplaceholder.typicode.com/users`
            );
            return res;
        }

        getUsers()
            .then((res) => res.json())
            .then((users) => this.setState({monsters: users}));
    }

    render() {
        const { monsters, searchField } = this.state;

        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className="App">
                <div>
                    <h1 id="title">Monster Friends</h1>
                    <SearchBox
                        search={(e) =>
                            this.setState({ searchField: e.target.value })
                        }
                    />
                    <CardList monsters={filteredMonsters} />
                </div>
            </div>
        );
    }
}

export default App;

//. function App() {
//.     const [monsters, setMonsters] = useState({
//.         monster: [],
// .    });

//.     const [search, setSearch] = useState({
//.         searchField: "",
//.     });

//.     async function getUsers() {
//.         let res = await fetch(`https://jsonplaceholder.typicode.co.m/users`);
//.         res.json().then((res) => setMonsters({ monster: res }));
//.     }

//.     useEffect(() => {
//.         getUsers();
//.     }, []);

//.     const filteredMonsters = monsters.monster.filter((monster) =>. {
//.         return monster.name.toLowerCase().includes(monsters.se.archField);
//.     });

//.     return (
//.
//.     );
//. }
