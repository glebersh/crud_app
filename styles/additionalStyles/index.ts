export const ButtonDefaultStyles = {
  variant: 'outline',
  transition: 'all .33s',
  _active: { transform: 'scale(0.94, 0.94)' },
  border: '1px solid #DDDDDD'
};

export const AddUserFormInputDefaultStyles = {
  h: '2em',
  borderColor: '#DDDDDD',
  borderRadius: '.25em',
  backgroundColor: 'white',
  color: 'black',
  transition: 'all 0.33s ease-in-out'
};

export const AddUserFormInputErrorStyles = {
  borderRadius: '.25em',
  borderColor: 'red',
  focusBorderColor: "red",
  backgroundColor: 'white'
};

export const DefaultWrapperStyles = {
  padding: '2em',
  border: '3px solid #EEEEEE30',
  borderRadius: '1em',
  backgroundColor: 'white'
};

export const LinkStyleButtonStyles = {
  backgroundColor: 'transparent',
  _hover: {},
  _active: {}
};

export const ColorModeButtonStylesLight = {
  fontSize: '1.25em',
  color: '#777777',
  transition: 'all 0.33s',
  _hover: { color: '#444444' },
  _active: { transform: 'scale(0.95, 0.95)' }
}

export const ColorModeButtonStylesDark = {
  fontSize: '1.25em',
  color: '#FFFFFF',
  transition: 'all 0.33s',
  _hover: { color: '#e1e9e1' },
  _active: { transform: 'scale(0.95, 0.95)' }
}

export const RowDefaultStyles = {
  style: {
    height: '80px',
    borderBottom: '1px solid #aaaaaa60'
  }
};

export const UserRowIconsStyles = {
  style: {
    transition: 'all 0.33s ease-in-out',
    fontSize: '1.3em',
  }
};

export const LoginFormIconStyles = {
  style: {
    fontSize: '1.35em',
    color: 'darkgray',
    transition: 'all 0.33s',
  }
};

export const LoginButtonStyles = {
  backgroundColor: 'accentOne',
  color: 'white',
  fontWeight: '700',
  transition: 'all .33s ease-in-out',
  _hover: {
    cursor: 'pointer',
    backgroundColor: '#3388ff',
  },
  _active: {
    transform: 'scale(0.95, 0.95)'
  }
};