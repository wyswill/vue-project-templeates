import * as React from "react";
import Nav from '../components/Nav'

interface initState {

}

interface prop {
}

const navs = [{
  content: '首页',
  path: '/'
}, {
  content: '其他',
  path: '/other'
}];


export default class Htme extends React.Component<prop, initState> {

  render(): React.ReactNode {
    return (
      <div className='Htme'>
        <Nav navs={navs}></Nav>
      </div>
    )
  }
}
