import Link from "next/link";
import classes from "./cards.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faHandHoldingMedical,
  faBoxOpen,
  faSquareUpRight,
  faFingerprint,
  faNetworkWired,
  faGears,
  faBarcode,
  faCoins,
  faStore,
  faFaceSmile,
  faComment,
  faPhotoFilm,
  faMoneyBills,
  faPlus,
  faRuler
} from '@fortawesome/free-solid-svg-icons';

export default function Cards() {
  return (
    <div className={classes.Cards}>
      <div className={classes.Card}>
        <Link href="/about/Getting_Start/requirements">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faRocket} className={classes.Icon} /> 
            Getting Start
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/service/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faHandHoldingMedical} className={classes.Icon} />
            SERVICES
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/ressource/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faBoxOpen} className={classes.Icon} />
            RESSOURCES
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/product_post/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faSquareUpRight} className={classes.Icon} />
            PRODUCT POST
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/product_brand/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faFingerprint} className={classes.Icon} />
            PRODUCT BRAND
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/variation/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faNetworkWired} className={classes.Icon} />
            VARIATIONS
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/categorie/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faBarcode} className={classes.Icon} />
            CATEGORIE
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/model/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faGears} className={classes.Icon} />
            MODEL
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/sale_price/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faCoins} className={classes.Icon} />
            SALE PRICES
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/sale_point/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faStore} className={classes.Icon} />
            SALE POINTS
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/reactions/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faFaceSmile} className={classes.Icon} />
            REACTIONS
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/reviews/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faComment} className={classes.Icon} />
            REVIEWS
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/medias/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faPhotoFilm} className={classes.Icon} />
            MEDIAS
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/units/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faRuler} className={classes.Icon} />
            UNITS
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/about/attributes/about">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faPlus} className={classes.Icon} />
            ATTRIBUTS
          </span>
        </Link>
      </div>

    </div>
  );
}