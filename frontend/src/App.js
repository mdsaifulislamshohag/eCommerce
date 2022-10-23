import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
function App() {
    return (
        <Router>
    <div className = "app" >

    <main>
        <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/product/:id" component={ProductScreen}/>
            <Route exact path="/cart" component={CartScreen} />
        </Switch>
    </main>

 
        hello world </div>
        </Router>
        );
}

export default App;