import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


export class Success extends Component {

  continue = e => {
    e.preventDefault();
    //API SEND (FUTURE FEATURE)

    this.props.nextStep()
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            title="Success"
          />
          <h1>Thank You for Registering</h1>
          <p>You will get a confirmation email for this account</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


export default Success