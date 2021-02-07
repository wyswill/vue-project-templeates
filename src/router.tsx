/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-11-20 14:43:38
 * @LastEditTime: 2021-02-07 11:18:59
 */
import React, {useContext}            from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App                            from './pages/App';
import Login                          from './pages/login';
import {History}                      from 'history';
import userState                      from './store/userState';

interface I_prop {
  history: History
}

export default function Myrouter() {
  const _user = useContext(userState);
  const auth = (props: I_prop) => {
    const localPhone = localStorage.getItem('phone');
    return localPhone && _user.token !== '' ? <App history={props.history}/> : <Login history={props.history}/>;
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={auth}/>
        <Route exact path="/index.html" render={auth}/>
      </Switch>
    </BrowserRouter>
  );
}
