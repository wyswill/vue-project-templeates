import * as React from "react";

interface initState {
  clicksCount: number,
  person: object
}

interface prop {
  title?: string,
}

export default class Other extends React.Component<prop, initState> {
  readonly state: initState = {
    clicksCount: 0,
    person: {
      name: '张三',
      age: 20
    }
  }

  render(): React.ReactNode {
    let {clicksCount, person} = this.state;
    const {title} = this.props;
    return (
      <div>
        title: <span>{title}</span>
        click: <p>{clicksCount}</p>
        {console.log(person)}
        <button onClick={this.add}>add</button>
      </div>
    );
  }

  private add = () => {
    this.setState({
      clicksCount: this.state.clicksCount + 10
    });
  }
  private sub = () => {
    this.setState({
      clicksCount: this.state.clicksCount - 10
    })
  }
  private changeName = () => {
    // 修改state中对象的单个属性值
    this.setState({
      person: Object.assign(this.state.person, {
        name: 'other',
      })
    })
  }
}
