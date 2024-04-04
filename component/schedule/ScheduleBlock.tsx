import Link from 'next/link';

const ScheduleBlock = () => {
  return (
    <div className="avail-inner">
      <div className="available-note">
        <div className="note-head">
          <h2 className="sm-title mb-0">Horaire d'ouverture</h2>
          <h2 className="note-title mb-0">Nos disponibilités</h2>
        </div>
        <ul className="note-ul">
          <li className="note-li">
            <p className="day">Distributeur à Pizza</p>
            <p className="time">24h/24 & 7j/7</p>
          </li>
          <li className="note-li">
            <p className="day">Mardi au Samedi</p>
            <p className="time">12h à 13h30</p>
          </li>
          <li className="note-li">
            <p className="day">Mardi au Dimanche</p>
            <p className="time">17h30 à 22h</p>
          </li>
          <li className="note-li">
            <p className="day">Dimanche midi</p>
            <p className="time">Fermé</p>
          </li>
          <li className="note-li">
            <p className="day">Lundi journée</p>
            <p className="time">Fermé</p>
          </li>
        </ul>

        <div className="note-footer">
          <h4 className="note-footer-text">Commandez maintenant</h4>
          <Link className="note-footer-text kf-pulse-number" href="tel:+0664541850">
            <i className="icofont-phone"></i> 06 64 54 18 50
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBlock;
