import * as React from 'react'
import { connect } from 'react-redux'
import dateFns, { distanceInWordsToNow } from 'date-fns'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { postData, setCurrentWeek, setSelectedDate } from '../../modules/action'

class BirthdayModal extends React.Component {
  state = { name: '', date: null }

  handleChangeDate = day => this.setState({ date: day })
  handleChangeInput = event => this.setState({ name: event.target.value })

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChangeInput} />

        <DayPickerInput onDayChange={day => this.handleChangeDate(day)} />
        <button
          onClick={() =>
            this.props.postData(' http://localhost:7555/birthday', this.state)
          }>
          submit
        </button>
      </div>
    )
  }
}

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentWeek: date => dispatch(setCurrentWeek(date)),
    setSelectedDate: date => dispatch(setSelectedDate(date)),
    postData: (url, data) => dispatch(postData(url, data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayModal)
