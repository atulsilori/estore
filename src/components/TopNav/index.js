import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCircle,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import "./_top-nav.scss";

const TopNav = () => {
  return (
    <div>
      <div className="header bg-dark">
        <div className="row top-nav-row">
          <div className="brand my-1">
            <h1>eStore</h1>
          </div>
          <div className="inp-container">
            <div className="dropdown m-0 p-0">
              <select className="select-btn w-100 p-0 m-0">
                <option>men</option>
                <option>women</option>
                <option>kids</option>
              </select>
            </div>
            <input className="form-control" placeholder="Search..." />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="login-container">
            <span>
              <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
            </span>
            <h5>
              <a>login</a>
            </h5>
            <span>/</span>
            <h5>
              <a>register</a>
            </h5>
          </div>
          <div className="cart-wishlist">
            <ul>
              <li className="list-icon">
                <FontAwesomeIcon icon={faHeart} />
              </li>
              <li className="list-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
