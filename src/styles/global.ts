import { globalCss } from "@stitches/react";

export const globalStyles  = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: 'Roboto',
    overflowX: 'hidden'
  },

  body: {
    backgroundColor: '#F5F5F5',
    color: '#A9A9B2',
    '-webkit-font-smoothing': 'antialiased',
  }
})