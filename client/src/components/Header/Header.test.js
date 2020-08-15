import React from 'react';
import toJson from 'enzyme-to-json';

// component
import Header from './Header';

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from '../../tests/testUtils';

describe('<Header />', () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: 'eng',
    },
    user: {
      userObject: {
        id: '',
        name: '',
        email: '',
        photo: '',
        about: '',
        likedBlogposts: [],
      },
      errorMessage: null,
      isLogged: false,
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Header store={store} />);
  });

  it('renders without an error', () => {
    const header = findByTestAttr(wrapper, 'header');
    expect(header.length).toBe(1);
  });

  it('renders auth block when user is logged out', () => {
    const headerLoginLink = findByTestAttr(wrapper, 'header-login-link');
    const headerSignupLink = findByTestAttr(wrapper, 'header-signup-link');
    expect(headerLoginLink.length).toBe(1);
    expect(headerSignupLink.length).toBe(1);
  });

  it('renders logout button when user is logged', () => {
    const initialStore = {
      lang: {
        languagePanelHidden: true,
        currentLanguage: 'eng',
      },
      user: {
        isLogged: true,
      },
    };
    const store = storeFactory(initialStore);
    wrapper = setShallowC(<Header store={store} />);
    const headerLogoutButton = findByTestAttr(wrapper, 'header-logout-btn');
    expect(headerLogoutButton.length).toBe(1);
  });

  it('performs logUserOutStart action on click', () => {
    const mockAction = jest.fn();
    const initialStore = {
      lang: {
        languagePanelHidden: true,
        currentLanguage: 'eng',
      },
      user: {
        isLogged: true,
      },
    };
    const store = storeFactory(initialStore);
    wrapper = setShallowC(<Header store={store} />);
    wrapper.setProps({ logUserOutStart: mockAction });
    const headerLogoutButton = findByTestAttr(wrapper, 'header-logout-btn');
    headerLogoutButton.simulate('click');
    const getClickCount = mockAction.mock.invocationCallOrder.length;
    expect(getClickCount).toBe(1);
  });

  it('renders logo link', () => {
    const logoLink = findByTestAttr(wrapper, 'header-logo-link');
    expect(logoLink.length).toBe(1);
  });

  it('renders menu button', () => {
    const initialStore = {
      lang: {
        languagePanelHidden: true,
        currentLanguage: 'eng',
      },
      user: {
        isLogged: true,
      },
      sidenav: {
        sidenavHidden: true,
      },
    };
    const store = storeFactory(initialStore);
    wrapper = setShallowC(<Header store={store} />);
    const headerMenuButton = findByTestAttr(wrapper, 'header-menu-btn');
    expect(headerMenuButton.length).toBe(1);
  });

  it('open sidenav on menu button click', () => {
    const initialStore = {
      lang: {
        languagePanelHidden: true,
        currentLanguage: 'eng',
      },
      user: {
        isLogged: true,
      },
      sidenav: {
        sidenavHidden: true, // sidenav initially hidden
      },
    };
    const store = storeFactory(initialStore);
    wrapper = setShallowC(<Header store={store} />);
    const headerMenuButton = findByTestAttr(wrapper, 'header-menu-btn');
    headerMenuButton.simulate('click');
    const {
      sidenav: { sidenavHidden },
    } = store.getState();
    expect(sidenavHidden).toBe(false); // asserting sidnenav to be open
  });

  it('matches snapshot', () => {
    const header = findByTestAttr(wrapper, 'header');
    expect(toJson(header)).toMatchSnapshot();
  });
});
