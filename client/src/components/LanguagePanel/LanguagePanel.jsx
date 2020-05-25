// import "./LanguagePanel.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  setLanguageEng,
  setLanguageRus,
  setLanguageUkr,
  toggleLanguagePanel,
} from "../../redux/lang/lang.actions";
import { selectLanguagePanelHidden } from "../../redux/lang/lang.selectors";

// images
import langEng from "../../assets/jpeg/lang-eng.jpg";
import langUkr from "../../assets/jpeg/lang-ukr.jpg";
import langRus from "../../assets/jpeg/lang-rus.jpg";

// JS Rendering CSS
import {
  LanguagePanelContainer,
  LanguagePanelLanguages,
  LanguagePanelLangEng,
  LanguagePanelLangRus,
  LanguagePanelLangUkr,
  LanguagePanelImage,
  LanguagePanelWrap,
  LanguagePanelSVG,
} from "./LanguagePanelStyles";

const LanguagePanel = ({
  panelHidden,
  setLanguageEng,
  setLanguageRus,
  setLanguageUkr,
  toggleLanguagePanel,
}) => {
  return (
    <LanguagePanelContainer data-test="language-panel">
      {panelHidden ? null : (
        <LanguagePanelLanguages data-test="language-panel-languages">
          <LanguagePanelLangEng
            data-test="language-panel-lang-eng"
            onClick={() => setLanguageEng()}
          >
            <LanguagePanelImage alt="great britain flag" src={langEng} />
          </LanguagePanelLangEng>
          <LanguagePanelLangRus
            data-test="language-panel-lang-ukr"
            onClick={() => setLanguageUkr()}
          >
            <LanguagePanelImage alt="ukrainian flag" src={langUkr} />
          </LanguagePanelLangRus>
          <LanguagePanelLangUkr
            data-test="language-panel-lang-rus"
            onClick={() => setLanguageRus()}
          >
            <LanguagePanelImage alt="russian flag" src={langRus} />
          </LanguagePanelLangUkr>
        </LanguagePanelLanguages>
      )}
      <LanguagePanelWrap
        data-test="language-panel-toggle-btn"
        onClick={() => toggleLanguagePanel()}
      >
        <LanguagePanelSVG>Language Pannel</LanguagePanelSVG>
      </LanguagePanelWrap>
    </LanguagePanelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  panelHidden: selectLanguagePanelHidden,
});

export default connect(mapStateToProps, {
  setLanguageEng,
  setLanguageRus,
  setLanguageUkr,
  toggleLanguagePanel,
})(LanguagePanel);
