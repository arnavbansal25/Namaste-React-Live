import React from "react";

class ExampleClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        login: "Dummy Username",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arnavbansal25");
    const json = await data.json();

    this.setState({ userInfo: json });
  }

  render() {
    const { count, count2 } = this.state;
    return (
      <div>
        <img src={this.state?.userInfo?.avatar_url} />
        <h2>Name: {this.state?.userInfo?.name}</h2>
        <h2>Username: {this.state?.userInfo?.login}</h2>
        <h2>Profile Class Component</h2>
        <h3>Name: {this.props?.name}</h3>
        <h3>Count: {this.state?.count}</h3>
        <h3>Destructured Count: {count}</h3>
        <h3>Count2: {this.state?.count2}</h3>
        <button
          onClick={() =>
            this.setState({
              count: count - 1,
              count2: count2 - 1,
            })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
              count2: count2 + 1,
            })
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default ExampleClass;
