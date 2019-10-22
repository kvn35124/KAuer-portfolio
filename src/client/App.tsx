import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Work from './Pages/Work';
import Contact from './Pages/Contact';

class App extends React.Component<IAppProps, IAppState> {


    render() {
        return (

            <Router>
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/work" component={Work} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </main>
            </Router>
        )
    }
}

export interface IAppProps { }

export interface IAppState {}

export default App;