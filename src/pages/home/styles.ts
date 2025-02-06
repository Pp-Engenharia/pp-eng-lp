import { styled } from "@stitches/react";

export const PreviewImageContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end'
})

export const PreviewTextContainer = styled('div', {
  position: 'absolute',
  height: '14.8rem',
  width: '19.8rem',
  backgroundColor: '#00314D9E',
  opacity: '62',
  zIndex: 1,
  top: '8.75rem',
  right: '4.8rem',
  overflow: 'hidden'
})

export const PreviewText = styled('h1', {
  color: '#FFFFFF',
  padding: '0.5rem 0.875rem',
  fontSize: '3rem'
})

export const LegacyContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5rem'
})

export const LegacyTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const LegacyTextHeader = styled('h2', {
  color: '#202024',
  fontSize: '3rem',
  marginBottom: '1.6rem'
})

export const LegacyText = styled('p', {
  color: '#7C7C8A',
  fontSize: '1.25rem'
})