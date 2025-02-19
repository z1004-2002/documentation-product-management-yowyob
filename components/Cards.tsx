import Link from "next/link";
import classes from "./cards.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faUsers, 
  faBuilding, 
  faPassport, 
  faUserTie, 
  faUserFriends, 
  faAddressBook, 
  faCertificate, 
  faInfoCircle, 
  faClipboardList, 
  faEye, 
  faHandshake, 
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';

export default function Cards() {
  return (
    <div className={classes.Cards}>
      <div className={classes.Card}>
        <Link href="/AboutRacine/Getting_Start/requirements">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faRocket} className={classes.Icon} /> 
            Getting Start
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/BusinessActor/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faUsers} className={classes.Icon} />
            BUSINESS ACTOR
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <a href="/AboutRacine/Organisation/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faBuilding} className={classes.Icon} />
            ORGANISATION
          </span>
        </a>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Agency/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faPassport} className={classes.Icon} />
            Agency
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Employees/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faUserTie} className={classes.Icon} />
            Employee
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Customers/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faUserFriends} className={classes.Icon} />
            Customer
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Contact/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faAddressBook} className={classes.Icon} />
            Contact
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Certifications/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faCertificate} className={classes.Icon} />
            Certifications
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/PracticalInformation/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faInfoCircle} className={classes.Icon} />
            Practical Information
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/ProposedActivity/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faClipboardList} className={classes.Icon} />
            Proposed Activity
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/prospect/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faEye} className={classes.Icon} />
            Prospect
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Providers/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faHandshake} className={classes.Icon} />
            Providers
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/SalesPerson/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faMoneyBillWave} className={classes.Icon} />
            Sales Person
          </span>
        </Link>
      </div>
    </div>
  );
}