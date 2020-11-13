import React, { Component } from 'react';
import family from './family.jpg'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {

    // This fetch methods GETS data from the API endpoint
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }
  //This function is using fetch to post the body data to an api endpoint 
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
      //This renders data from the fetch URL API and also renders the components/images
      return (
        <div className='App'>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | Email: {item.email} | Username: {item.username}
              </li>
            ))}
          </ul>
          <div>
            <img src={family} alt="Family" height={300} width={400} />
          </div>
          <div><button onClick={() => this.postData()}> Press me to post some data</button></div>
        </div>
      )
    }
  }
}

export default App;
