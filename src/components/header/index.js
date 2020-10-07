import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Background,
  ButtonLink,
  Logo,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group
} from './styles/header';

function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

export default Header;

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

// Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
//   const [searchActive, setSearchActive] = useState(false);

//   return (
//     <Search {...restProps}>
//       <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
//         <img src="/images/icons/search.png" alt="Search" />
//       </SearchIcon>
//       <SearchInput
//         value={searchTerm}
//         onChange={({ target }) => setSearchTerm(target.value)}
//         placeholder="Search films and series"
//         active={searchActive}
//         data-testid="search-input"
//       />
//     </Search>
//   );
// };

// Header.Profile = function HeaderProfile({ children, ...restProps }) {
//   return <Profile {...restProps}>{children}</Profile>;
// };



// Header.Picture = function HeaderPicture({ src, ...restProps }) {
//   return <Picture {...restProps} src={`/images/users/${src}.png`} />;
// };

// Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
//   return <Dropdown {...restProps}>{children}</Dropdown>;
// };



// Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
//   return <PlayButton {...restProps}>{children}</PlayButton>;
// };




