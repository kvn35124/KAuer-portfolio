import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Work from './Pages/Work';
import About from './Pages/About';
import Navbar from './Component/Navbar';

class App extends React.Component<IAppProps, IAppState> {


    render() {
        return (

            <Router>
                {/* <main className="container mt-5 pt-3"> */}
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/work" component={Work} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                {/* </main> */}
            </Router>
        )
    }
}

export interface IAppProps { }

export interface IAppState {}

export default App;