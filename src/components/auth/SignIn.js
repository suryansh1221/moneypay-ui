import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Form, Button, Icon, Card, Input, GridColumn, Flag, Message, Transition } from 'semantic-ui-react'
import _  from 'lodash'
import { signIn } from '../../actions/index'

class SignIn extends Component {
    state = {name: "", isLoading: false, password: "", color: 'blue', errorMessage: false,  animation: 'fade up', duration: 5000, visible: true}

    authUser = () => {
        this.setState({isLoading: true})
        console.log(this.state);
        setTimeout(()=> this.props.signIn(this.state), 500)
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.statusCode === 200){
            this.setState({isLoading: false, color: "green", errorMessage: false})
            setTimeout(() => {
                nextProps.history.push('/home')
            }, 1000);
        }else {
            this.setState({isLoading: false, color: 'blue', errorMessage: true})
        }
    }
    
    render() {
        return (
            <Grid centered columns={2}>
                {
                    _.times(14, (i) => {
                       return <GridColumn key={i}></GridColumn>
                    })
                }
                <Grid.Column>
                    <Card fluid style={{border: "1px solid #BFBFBF", boxShadow: "5px 5px 5px #aaaaaa"}}>
                        <Card.Content>
                        <Card.Header>Login</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Form>
                                <Form.Field >
                                    <Input focus size='large'  icon='user' iconPosition='left' placeholder='Name' value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                                </Form.Field>
                                <Form.Field >
                                    <Input focus size='large'  type='password' icon='lock' iconPosition='left' placeholder='Password' value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})}/>
                                </Form.Field>
                            </Form>
                        </Card.Content>
                        <Card.Content extra>
                            <Button  size='medium' icon onClick={this.authUser} floated='right' size='large'  color={this.state.color} loading={this.state.isLoading}  type='submit'>
                                {this.state.color==='blue' ? "Submit":
                                 <Transition.Group animation={this.state.animation} duration={this.state.duration}>
                                    <Icon size='large' name='check' />
                                </Transition.Group>
                                }
                            </Button>
                        </Card.Content>
                        {this.state.errorMessage?<Message error header='Incorrect credentials ! Please re-enter'></Message>: ""}
                    </Card>
                </Grid.Column>
            </Grid>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return state
}



export default connect(mapStateToProps, {signIn})(SignIn)