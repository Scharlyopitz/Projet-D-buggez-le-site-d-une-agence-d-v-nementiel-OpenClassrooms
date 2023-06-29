import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
    imageSrc,
    imageAlt,
    date = new Date(),
    title,
    label,
    small = false,
    ...props
}) => (
    <div
        data-testid="card-testid"
        className={`EventCard${small ? " EventCard--small" : ""}`}
        {...props}
    >
        <div className="EventCard__imageContainer">
            <img
                data-testid="card-image-testid"
                data-selection={label}
                src={imageSrc}
                alt={imageAlt}
            />
            <div className="EventCard__label">{label}</div>
        </div>
        <div className="EventCard__descriptionContainer">
            <div className="EventCard__title">{title}</div>
            <div className="EventCard__month">{getMonth(date)}</div>
        </div>
    </div>
);

EventCard.propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string,
    small: PropTypes.bool,
    label: PropTypes.string,
};

// Ajout de label,title,imageSrc
EventCard.defaultProps = {
    label: "",
    title: "",
    imageSrc: "",
    imageAlt: "image",
    small: false,
};

export default EventCard;
