import React, { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {

    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }
  //This function is posting data to an api endpoint 
  async postData() {

    try {

      let result = await fetch('https://webhook.site/655e58c8-7df3-4616-b907-ec35db9f4b80', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          key1: 'myusername',
          key2: 'password',
          name: 'John',
          lastName: 'Doe',
          age: 34
        })

      })
      console.log(result);

    } catch (e) {
      console.log(e)
    }

  }
  render() {

    const { isLoaded, items } = this.state

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    else {

      return (
        <div className='App'>

          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | Email: {item.email} | Username: {item.username}
              </li>
            ))}
          </ul>
          <div><button onClick={() => this.postData()}> Press me to post some data</button></div>
        </div>
      )
    }
  }
}

export default App;
