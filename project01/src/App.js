import React, {Component} from 'react';
import Loading from './Loading';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    //state
    this.state = {
      users: [],
      loading: false
    }
    //bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers(){
    this.setState({
      loading: true
    })
    axios('https://randomuser.me/api/?nat=US&results=5')
    .then(response => this.setState({
      users: [...this.state.users, ...response.data.results],
      loading: false
    }))
  }

  handleSubmit(e){
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded')
  }
  
  componentWillMount(){
    this.getUsers();
  }

  render(){
    const {loading, users} = this.state
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type = "submit" value = "load users"/>
        </form>
        <hr />
        {!loading ? users.map(user =>
           <div key = {user.id.value}>
             <h1 style={{color: 'violet'}}>{user.name.first}</h1>
             <h3>{user.email}</h3>
             <hr />
           </div>
        ): <Loading message= 'Aguarde' />}
      </div>
    );
  }
}

export default App;
