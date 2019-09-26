import React from 'react'
import Header from './Header'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { format } from 'path'

class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        monthly_goal: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
        .then(data => {
            if(data.token){
                localStorage.token = data.token
                this.props.redirect('profile')
              }
        })
    }

  render(){
    console.log("sign up props ", this.state)
    return(
      <div className="page-div">
        <Header />
            <br />
        <div className="signup-form">
            <Segment placeholder>
            <Grid columns={1} relaxed='very' stackable>
            <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                onChange={this.handleChange}
                value={this.state.username}
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                name="username"
            />
            <Form.Input
                onChange={this.handleChange}
                value={this.state.password}
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                name="password"
            />
            <Form.Input
                onChange={this.handleChange}
                value={this.state.goal}
                icon='star'
                iconPosition='left'
                label='What is your monthly goal?'
                placeholder='Target volunteer hours'
                type='text'
                name="monthly_goal"
            />

          <Button content='Signup' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        
      </Grid.Column>
    </Grid>

  </Segment>
  </div>
      </div>

        );
    }
  }

  export default SignUp
