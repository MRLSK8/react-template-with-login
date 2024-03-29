import Color from 'color';

const base = {
  primary: Color('#56927D'),
  secondary: Color('#C51C2B'),
  accent: Color('#3F2938'),
  contrast: Color('#F70719'),
  background: Color('#E9E5EB'),
  text: Color('#A8A2A8'),
};

const colors = {
  primaryLight: base.primary.lighten(0.2).hex(),
  primary: base.primary.hex(),
  primaryDark: base.primary.darken(0.2).hex(),

  secondaryLight: base.secondary.lighten(0.2).hex(),
  secondary: base.secondary.hex(),
  secondaryDark: base.secondary.darken(0.2).hex(),

  accentLight: base.accent.lighten(0.2).hex(),
  accent: base.accent.hex(),
  accentDark: base.accent.darken(0.2).hex(),

  contrastLight: base.contrast.lighten(0.2).hex(),
  contrast: base.contrast.hex(),
  contrastDark: base.contrast.darken(0.2).hex(),

  backgroundLight: base.background.lighten(0.2).hex(),
  background: base.background.hex(),
  backgroundDark: base.background.darken(0.2).hex(),

  textLight: base.text.lighten(0.2).hex(),
  text: base.text.hex(),
  textDark: base.text.darken(0.2).hex(),

  danger: '#e74c3c',
  warning: '#f1c40f',
  info: '#3498db',
  success: '#2ecc71',
};

export default colors;
