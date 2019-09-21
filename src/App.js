import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Profile from './components/Profile';
import SignUp from './components/SignUp';

class App extends React.Component {
  state = {
    page: 'landing'
  }

  redirect = (page) => {
    this.setState({page})
  }

  componentDidMount() {
    if(localStorage.token) {
      this.redirect('profile')
    }
  }

  render() {
  
    switch(this.state.page) {
      case 'landing':
        return <LandingPage redirect={this.redirect}/>
      case 'signup':
        return <SignUp redirect={this.redirect}/>
      case 'profile':
        return <Profile redirect={this.redirect} />
      default:
        return <LandingPage redirect={this.redirect}/>    
        }
  }
}



//   return (
//     <div className="App">
//       Hello from APP
//       <Header />
//       <br />
//       <Login />
//       <img src={faker.image.nature()} alt="avatar" className="avatar" />
//     </div>
//   );
// }

export default App;
