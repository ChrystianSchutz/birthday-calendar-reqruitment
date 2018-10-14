import * as React from 'react'
import { connect } from 'react-redux'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { postData} from '../../modules/action'

class BirthdayForm extends React.Component {
  state = { name: '', birthdate: null }

  handleChangeDate = day => this.setState({ birthdate: day })
  handleChangeInput = event => this.setState({ name: event.target.value })

  render() {
    return (
      <div className="formContainer">
        <p className="centerText">Add your birthday!</p>
        <p>Name:</p>
        <input value={this.state.value} onChange={this.handleChangeInput} />
        <p>Age:</p>
        <DayPickerInput
          value={this.state.birthdate || this.props.getSelectedDate}
          onDayChange={day => this.handleChangeDate(day)}
        />
        <button
          className="submitButton"
          onClick={() =>
            this.props.postData(' http://localhost:7555/birthday', {
              name: this.state.name,
              birthdate: this.state.birthdate || this.props.getSelectedDate
            })
          }>
          submit
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    getSelectedDate: state.dateReducer.selectedDate
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
)(BirthdayForm)
