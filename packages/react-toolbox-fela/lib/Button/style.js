'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buttonStyle;

var _mergeAll = require('ramda/src/mergeAll');

var _mergeAll2 = _interopRequireDefault(_mergeAll);

var _alpha = require('../utils/alpha');

var _alpha2 = _interopRequireDefault(_alpha);

var _lighten = require('../utils/lighten');

var _lighten2 = _interopRequireDefault(_lighten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primaryColor = 'rgba(63, 81, 181, 1)';
var primaryColorContrast = 'rgba(255, 255, 255, 1)';
var accentColor = 'rgba(255, 64, 129, 1)';
var accentColorContrast = 'rgba(255, 255, 255, 1)';

function buttonStyle(props) {
  return (0, _mergeAll2.default)([base(props), props.flat && flat(props), props.floating && floating(props), props.raised && raised(props), props.toggle && toggle(props), props.disabled && disabled(props), props.mini && mini(props), props.primary && primary(props), props.accent && accent(props)]);
}

function base() {
  return {
    alignContent: 'center',
    alignItems: 'center',
    appearance: 'none',
    border: 0,
    cursor: 'pointer',
    display: 'inline-block',
    flexDirection: 'row',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    height: '36px',
    justifyContent: 'center',
    letterSpacing: 0,
    lineHeight: '36px',
    outline: 'none',
    padding: 0,
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: '\n      box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1),\n      background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),\n      color 0.2s cubic-bezier(0.4, 0, 0.2, 1)\n    ',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    '&::-moz-focus-inner': {
      border: 0
    },

    '& > svg': {
      display: 'inline-block',
      fill: 'currentColor',
      fontSize: '120%',
      height: '36px',
      verticalAlign: 'top',
      width: '1em'
    },

    '& > span:first-child': {
      display: 'inline-block',
      lineHeight: '36px',
      verticalAlign: 'top'
    }
  };
}

function raised(props) {
  var color = props.inverse ? 'rgba(255, 255, 255, 1)' : 'rgba(33, 33, 33, 1)';

  var background = props.inverse ? 'rgba(33, 33, 33, 1)' : 'rgba(255, 255, 255, 1)';

  return {
    background: background,
    borderRadius: '2px',
    boxShadow: '\n      0 2px 2px 0 rgba(0, 0, 0, 0.14),\n      0 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0 1px 5px 0 rgba(0, 0, 0, 0.12)\n    ',
    color: color,
    minWidth: '90px',
    padding: '0 12px',

    '&:hover': {
      background: (0, _alpha2.default)(background, 0.8)
    },

    '&:focus:not(:active)': {
      boxShadow: '\n        0 0 8px rgba(0, 0, 0, 0.18),\n        0 8px 16px rgba(0, 0, 0, 0.36)\n      '
    },

    '& > svg': {
      display: 'inline-block',
      fill: 'currentColor',
      fontSize: '120%',
      height: '36px',
      marginRight: '5px',
      verticalAlign: 'top',
      width: '1em'
    },

    '& > span:first-child': {
      display: 'inline-block',
      fontSize: '120%',
      lineHeight: '36px',
      marginRight: '6px',
      verticalAlign: 'top'
    }
  };
}

function flat(props) {
  var color = props.inverse ? 'rgba(255, 255, 255, 1)' : 'rgba(33, 33, 33, 1)';

  return {
    background: 'transparent',
    borderRadius: '2px',
    color: color,
    minWidth: '90px',
    padding: '0 12px',

    '&:focus:not(:active)': {
      background: (0, _alpha2.default)('rgba(33, 33, 33, 1)', 0.2)
    },

    '&:hover': {
      background: (0, _alpha2.default)('rgba(33, 33, 33, 1)', 0.2)
    },

    '& > svg': {
      display: 'inline-block',
      fill: 'currentColor',
      fontSize: '120%',
      height: '36px',
      marginRight: '5px',
      verticalAlign: 'top',
      width: '1em'
    },

    '& > span:first-child': {
      display: 'inline-block',
      fontSize: '120%',
      lineHeight: '36px',
      marginRight: '6px',
      verticalAlign: 'top'
    }
  };
}

function floating(props) {
  var color = props.inverse ? 'rgba(255, 255, 255, 1)' : 'rgba(33, 33, 33, 1)';

  var background = props.inverse ? 'rgba(33, 33, 33, 1)' : 'rgba(255, 255, 255, 1)';

  return {
    background: background,
    borderRadius: '50%',
    boxShadow: '\n      0 1px 1.5px 0 rgba(0, 0, 0, 0.12),\n      0 1px 1px 0 rgba(0, 0, 0, 0.24)\n    ',
    color: color,
    fontSize: '24px',
    height: '56px',
    width: '56px',

    '&:focus:not(:active)': {
      boxShadow: '\n        0 0 8px rgba(0, 0, 0, 0.18),\n        0 8px 16px rgba(0, 0, 0, 0.36)\n      '
    },

    '& > span:first-child': {
      display: 'inline-block',
      lineHeight: '56px',
      verticalAlign: 'top'
    }
  };
}

function mini() {
  return {
    fontSize: 40 / 2.25 + 'px',
    height: '40px',
    width: '40px',

    '& > span:first-child': {
      display: 'inline-block',
      fontSize: 40 / 2.25 + 'px',
      lineHeight: '40px',
      verticalAlign: 'top'
    }
  };
}

function toggle(props) {
  var color = props.inverse ? 'rgba(255, 255, 255, 1)' : 'rgba(33, 33, 33, 1)';

  return {
    background: 'transparent',
    borderRadius: '50%',
    color: color,
    width: '36px',

    '&:focus:not(:active)': {
      background: (0, _alpha2.default)('rgba(33, 33, 33, 1)', 0.2)
    },

    '& > span:first-child': {
      display: 'inline-block',
      fontSize: '20px',
      lineHeight: '36px',
      verticalAlign: 'top'
    },

    '& > svg': {
      display: 'inline-block',
      fill: 'currentColor',
      fontSize: '20px',
      height: '36px',
      lineHeight: '36px',
      verticalAlign: 'top',
      width: '1em'
    }
  };
}

function disabled() {
  return {
    color: (0, _alpha2.default)('rgba(0, 0, 0, 1)', 0.26),
    cursor: 'auto',
    pointerEvents: 'none'
  };
}

function colored(props, normal, contrast) {
  var disabledColor = (0, _alpha2.default)('rgba(0, 0, 0, 1)', 0.26);

  if (props.raised || props.floating) {
    return {
      backgroundColor: props.disabled ? (0, _alpha2.default)('rgba(0, 0, 0, 1)', 0.12) : normal,
      color: props.disabled ? disabledColor : contrast,
      '&:hover': {
        background: (0, _lighten2.default)(normal, 0.12)
      }
    };
  } else if (props.flat) {
    return {
      color: props.disabled ? disabledColor : normal,
      '&:focus:not(:active)': {
        background: (0, _alpha2.default)(normal, 0.2)
      },
      '&:hover': {
        background: (0, _alpha2.default)(normal, 0.2)
      }
    };
  } else if (props.toggle) {
    return {
      color: props.disabled ? disabledColor : normal,
      '&:focus:not(:active)': {
        background: (0, _alpha2.default)(normal, 0.2)
      }
    };
  }

  return undefined;
}

function primary(props) {
  return colored(props, primaryColor, primaryColorContrast);
}

function accent(props) {
  return colored(props, accentColor, accentColorContrast);
}