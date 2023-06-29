import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
    const { data } = useData();
    const [index, setIndex] = useState(0);
    const byDateDesc = data?.focus.sort((evtA, evtB) =>
        new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
    );
    // Modification de la fonction next card avec ajout du -1 a  byDateDesc.length pour prendre en compte l index qui commence a 0
    const nextCard = () => {
        setTimeout(
            () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
            5000
        );
    };

    useEffect(() => {
        nextCard();
    });
    return (
        <div className="SlideCardList">
            {byDateDesc?.map((event, idx) => (
                <div key={event.title}>
                    <div
                        className={`SlideCard SlideCard--${
                            index === idx ? "display" : "hide"
                        }`}
                    >
                        <img src={event.cover} alt="forum" />
                        <div className="SlideCard__descriptionContainer">
                            <div className="SlideCard__description">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <div>{getMonth(new Date(event.date))}</div>
                            </div>
                        </div>
                    </div>
                    <div className="SlideCard__paginationContainer">
                        <div className="SlideCard__pagination">
                            {/* ajout de readOnly pour eviter les bugs et changement de la key sur les bullets points */}
                            {byDateDesc.map((_, radioIdx) => (
                                <input
                                    key={`${radioIdx + 1}`}
                                    type="radio"
                                    name="radio-button"
                                    checked={index === radioIdx}
                                    readOnly
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
