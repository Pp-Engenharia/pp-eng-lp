import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
  backgroundColor: '#00314D',
  width: '100vw',
  height: '12rem',
  display: 'flex',
  alignItems: 'center'
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '6.5rem'
})

export const LogoText = styled('h1', {
  color: '#FF7723',
  marginLeft: '0.3rem'
})

export const NavContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
})

export const NavLink = styled('a', {
  color: '#FF7723',
  marginLeft: '8rem',
  textDecoration: 'none'
})