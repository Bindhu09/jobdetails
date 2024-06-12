import {
  COMPANY_LOGO,
  COMPANY_LOGO_ALT,
  HAMBURGER_MENU,
  HAMBURGER_MENU_ALT,
  LOGIN_ID,
  LOGIN_ID_ALT,
  SUBSCRIBE_ICON,
  SUBSCRIBE_ICON_ALT,
} from '../../constants/Constants';
import '../Header/Header.scss';
/**
 * Author : Bindhu
 * @returns header component with required fields
 * 
 */
export const Header = () => {
  return (
    <div className="header">
      <div className="header__company">
        <div className="header__company-logo">
          <img
            className="header__icons"
            src={COMPANY_LOGO}
            alt={COMPANY_LOGO_ALT}
          />
        </div>
      </div>
      <div className="header__sidebar">
        <div className="header__sidebar-loginId">
          <img className="header__icons" src={LOGIN_ID} alt={LOGIN_ID_ALT} />
        </div>
        <div className="header__sidebar-subscription">
          <img
            className="header__icons"
            src={SUBSCRIBE_ICON}
            alt={SUBSCRIBE_ICON_ALT}
          />
        </div>
        <div className="header__sidebar-hamburger">
          <img
            className="header__icons"
            src={HAMBURGER_MENU}
            alt={HAMBURGER_MENU_ALT}
          />
        </div>
      </div>
    </div>
  );
};
