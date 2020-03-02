import "./LanguagePanel.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  setLanguageEng,
  setLanguageRus,
  setLanguageUkr,
  toggleLanguagePanel
} from "../../redux/lang/lang.actions";
import {
  selectCurrentLanguage,
  selectLanguagePanelHidden
} from "../../redux/lang/lang.selectors";

// images
import langEng from "../../assets/jpeg/lang-eng.jpg";
import langUkr from "../../assets/jpeg/lang-ukr.jpg";
import langRus from "../../assets/jpeg/lang-rus.jpg";

// svg
import { ReactComponent as LangPannelSVG } from "../../assets/svg/language.svg";

const LanguagePanel = ({
  lang,
  panelHidden,
  setLanguageEng,
  setLanguageRus,
  setLanguageUkr,
  toggleLanguagePanel
}) => {
  return (
    <div className="language-panel">
      {panelHidden ? null : (
        <div className="language-panel__languages">
          <div
            className="language-panel__language-1"
            onClick={() => setLanguageEng()}
          >
            <img
              className="language-panel__image"
              alt="great britain flag"
              src={langEng}
            ></img>
          </div>
          <div
            className="language-panel__language-2"
            onClick={() => setLanguageUkr()}
          >
            <img
              className="language-panel__image"
              alt="ukrainian flag"
              src={langUkr}
            ></img>
          </div>
          <div
            className="language-panel__language-3"
            onClick={() => setLanguageRus()}
          >
            <img
              className="language-panel__image"
              alt="russian flag"
              src={langRus}
            ></img>
          </div>
        </div>
      )}

      <div
        className="language-panel__wrapper"
        onClick={() => toggleLanguagePanel()}
      >
        <LangPannelSVG className="language-panel__svg">
          Language Pannel
        </LangPannelSVG>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  panelHidden: selectLanguagePanelHidden
});

export default connect(mapStateToProps, {
  setLanguageEng,
  setLanguageRus,
  setLanguageUkr,
  toggleLanguagePanel
})(LanguagePanel);
