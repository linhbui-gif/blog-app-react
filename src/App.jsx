import 'App.css'
import 'assets/js/vendors.js'
import 'assets/js/plugins.js'
import 'assets/js/main.js'
import {Router} from "@reach/router";
import Guest from "layouts/Guest";
import {LayoutPaths, Pages, Paths, PublicRoute} from "router";
import { Redirect } from '@reach/router';

function App() {

  return (
      <div className="App">
        <Router primary={false}>
            <Guest path={LayoutPaths.Guest}>
                <PublicRoute path={Paths.Home} component={Pages.Home} />
                <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
            </Guest>
        </Router>
      </div>
 );
}

export default App;
