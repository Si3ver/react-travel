import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages';
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route render={() => <h1>404 页面去海王星了！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
