import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { format } from 'path'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
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

  handleSignUp = () => {
    this.props.redirect('signup')
  }


  render(){
  return(
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            onChange={this.handleChange}
            value={this.state.username}
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            name='username'
          />
          <Form.Input
            onChange={this.handleChange}
            value={this.state.password}
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            name='password'
          />
<br />
<Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button onClick={this.handleSignUp} content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
    )
  }
}

export default LoginForm