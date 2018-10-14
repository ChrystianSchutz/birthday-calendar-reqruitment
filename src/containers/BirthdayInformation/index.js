import * as React from 'react'
import { connect } from 'react-redux'
import 'react-day-picker/lib/style.css'
import { postData} from '../../modules/action'

class BirthdayInformation extends React.Component {
  state = { name: '', birthdate: null }

  handleChangeDate = day => this.setState({ birthdate: day })
  handleChangeInput = event => this.setState({ name: event.target.value })

  render() {
    if(!this.props.birthdateResponse.user.name){
      return(<div></div>);
    }

      return (
        <div className="formContainer">
          <p>Your age is: {this.props.birthdateResponse.user.age}</p>
          <p>You share age with: {this.props.birthdateResponse.sharedAge.map((user) => user.name + ' ')}</p>
          <p>You share birthday with: {this.props.birthdateResponse.sharedBirthdays.map((user) => user.name  + ' ')}</p>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    birthdateResponse: state.birthdayResponse
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postData: (url, data) => dispatch(postData(url, data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayInformation)
