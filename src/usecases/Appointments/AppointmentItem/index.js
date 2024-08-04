import "./index.css";
import { format, parseISO } from "date-fns";

const AppointmentItem = ({ appointment, favHandler }) => {
  const addFavHandler = (id) => {
    favHandler(id);
  };

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "d MMMM yyyy, EEEE");
  };
  return (
    <div className="appointment__container">
      <div className="heading__container">
        <p>{appointment.title}</p>
        {appointment.starred ? (
          <button
            className="star__button"
            onClick={() => addFavHandler(appointment.id)}
            data-testid="star"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
              className="star__img_icon"
            />
          </button>
        ) : (
          <button
            className="star__button"
            onClick={() => addFavHandler(appointment.id)}
            data-testid="star"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              alt="star"
            />
          </button>
        )}
      </div>
      <p>Date: {formatDate(appointment.date)}</p>
    </div>
  );
};

export default AppointmentItem;
