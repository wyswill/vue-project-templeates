import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Htme from '../view/Htme';
import Other from '../view/Other';

export default class Routers extends React.Component {

  render(): React.ReactNode {
    return (
      <div className='Routers'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Htme}/>
            <Route path="/other" component={Other}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
