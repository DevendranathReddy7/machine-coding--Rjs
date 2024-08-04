import { Component } from "react";
import "./index.css";
import AppointmentItem from "../AppointmentItem";

class Appointments extends Component {
  state = { appointments: [], title: "", date: "", starFilter: false };

  titleHandle = (e) => {
    this.setState({ title: e.target.value });
  };

  dateHandle = (e) => {
    this.setState({ date: e.target.value });
  };

  starredAppointments = () => {
    const { starFilter } = this.state;
    this.setState({ starFilter: !starFilter });
  };

  addHandler = (e) => {
    e.preventDefault();
    const { title, date } = this.state;

    this.setState((prev) => ({
      appointments: [
        ...prev.appointments,
        { title, date, id: Math.random().toString(36), starred: false },
      ],
      title: "",
      date: "",
    }));
  };

  favHandler = (id) => {
    this.setState((prevState) => ({
      appointments: prevState.appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, starred: !appointment.starred }
          : appointment
      ),
    }));
  };

  render() {
    const { appointments, title, date, starFilter } = this.state;
    return (
      <div className="main__container">
        <div className="form__container">
          <form>
            <h1>Add Appointment</h1>
            <div className="input__container">
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={this.titleHandle}
              />
            </div>
            <div className="input__container">
              <label htmlFor="date">DATE</label>
              <input
                type="date"
                id="date"
                placeholder="dd/mm/yyyy"
                value={date}
                onChange={this.dateHandle}
              />
            </div>
            <button className="add" onClick={this.addHandler}>
              Add
            </button>
          </form>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
        </div>
        <hr />

        <div>
          <div className="appointments__container__heading">
            <h1>Appointments</h1>
            <button className="starred" onClick={this.starredAppointments}>
              Starred
            </button>
          </div>

          <ul>
            {!starFilter &&
              appointments.map((currentAppointment) => (
                <li key={currentAppointment.id}>
                  <AppointmentItem
                    appointment={currentAppointment}
                    favHandler={this.favHandler}
                  />
                </li>
              ))}
            {starFilter &&
              appointments
                .filter(
                  (currentAppointment) => currentAppointment.starred === true
                )
                .map((currentAppointment) => (
                  <li key={currentAppointment.id}>
                    <AppointmentItem
                      appointment={currentAppointment}
                      favHandler={this.favHandler}
                    />
                  </li>
                ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Appointments;
