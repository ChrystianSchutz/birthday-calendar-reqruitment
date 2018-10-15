import * as React from 'react'
import { connect } from 'react-redux'
import dateFns from "date-fns";
import 'react-day-picker/lib/style.css';
import { fetchData, setCurrentWeek, setSelectedDate } from '../../modules/action'

class Calendar extends React.Component {

  componentDidMount(){
    this.props.fetchData(' http://localhost:7555/birthdays');
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevWeek}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.props.getCurrentWeek, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextWeek}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.props.getCurrentWeek);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const monthStart = dateFns.startOfWeek(this.props.getCurrentWeek);
    const startDate = dateFns.startOfWeek(monthStart);
    const startingDayOfWeek = dateFns.getDayOfYear(this.props.getCurrentWeek);
    
    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        const dayOfWeek = startingDayOfWeek + i;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, this.props.getSelectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
                        
             {this.props.getBirthdays.map((birthday) => {
              if(birthday.dayOfYear === dayOfWeek){
                return <p>{birthday.name}</p>
              }              
            })} 
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.props.setSelectedDate(day)
  };

  nextWeek = () => {
    this.props.setCurrentWeek(
      dateFns.addWeeks(this.props.getCurrentWeek, 1)
    )
  };

  prevWeek = () => {
    this.props.setCurrentWeek(
      dateFns.subWeeks(this.props.getCurrentWeek, 1)
    )
  };



  render() {
    return (
      <div>
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    getCurrentWeek: state.dateReducer.currentWeek,
    getSelectedDate: state.dateReducer.selectedDate,
    getBirthdays: state.fetchedBirthdays
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentWeek: date => dispatch(setCurrentWeek(date)),
    setSelectedDate: date => dispatch(setSelectedDate(date)),
    fetchData: (url) => dispatch(fetchData(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)
