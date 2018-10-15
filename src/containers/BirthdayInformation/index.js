import * as React from 'react'
import { connect } from 'react-redux'
import 'react-day-picker/lib/style.css'

const BirthdayInformation = ({birthdateResponse}) => (
      birthdateResponse.user.name &&
      <div className="formContainer">
        <p>Your age is: {birthdateResponse.user.age}</p>
        <p>
          You share age with:{' '}
          {birthdateResponse.sharedAge.map(user => user.name + ' ')}
        </p>
        <p>
          You share birthday with:{' '}
          {birthdateResponse.sharedBirthdays.map(
            user => user.name + ' '
          )}
        </p>
      </div>
)

const mapStateToProps = state => {
  return {
    birthdateResponse: state.birthdayResponse
  }
}

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayInformation)
