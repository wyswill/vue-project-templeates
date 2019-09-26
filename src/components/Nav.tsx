import * as React from "react";

import {nav_interfact} from '../interface/nav_interface';
import '../sass/nav.scss'

import {NavLink} from "react-router-dom";

interface initState {
}

interface prop {
  navs: Array<nav_interfact>
}

export default class Nav extends React.Component<prop, initState> {
  render(): React.ReactNode {
    const {navs} = this.props;
    return (
      <div className='Nav'>
        <nav>
          <ul>
            {
              navs.map((ele, index) => {
                return <NavLink to={ele.path} key={index}>{ele.content}</NavLink>
              })
            }
          </ul>
        </nav>
      </div>
    )
  }
}
