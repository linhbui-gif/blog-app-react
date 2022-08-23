import './App.css'
import './assets/js/jquery.min.js'
import './Components/Header/Header';
import {Router} from "@reach/router";
import Guest from "./layouts/Guest";
import {LayoutPaths, Pages, Paths, PublicRoute} from "./router";
import { Redirect } from '@reach/router';
// import BlogLayout from "./layouts/BlogLayouts";


function App() {

  return (
      <div className="App">
        <Router primary={false}>
            <Guest path={LayoutPaths.Guest}>
                <PublicRoute path={Paths.Home} component={Pages.Home} />
                <PublicRoute path={Paths.BlogList} component={Pages.Blog} />
                <PublicRoute path={Paths.NewDetail} component={Pages.NewDetail} />
                <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
            </Guest>
            {/*<BlogLayout path={LayoutPaths.Blog}>*/}
            {/*    <PublicRoute path={Paths.BlogList} component={Pages.Blog} />*/}
            {/*    <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Blog}`} />*/}
            {/*</BlogLayout>*/}
        </Router>
      </div>
 );
}

export default App;
