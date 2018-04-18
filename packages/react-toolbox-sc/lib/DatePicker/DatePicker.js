'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    background: ', ';\n    cursor: pointer;\n    opacity: ', ';\n    pointer-events: ', ';\n    text-align: center;\n    position: relative;\n    ', '\n  '], ['\n    background: ', ';\n    cursor: pointer;\n    opacity: ', ';\n    pointer-events: ', ';\n    text-align: center;\n    position: relative;\n    ', '\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    line-height: 30px;\n    width: calc(100% / 7);\n    ', '\n  '], ['\n    line-height: 30px;\n    width: calc(100% / 7);\n    ', '\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    ', '\n  '], ['\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    ', '\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: block;\n    width: 100%;\n    ', '\n  '], ['\n    display: block;\n    width: 100%;\n    ', '\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    line-height: 40px;\n    text-align: center;\n    width: 100%;\n    ', '\n  '], ['\n    line-height: 40px;\n    text-align: center;\n    width: 100%;\n    ', '\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    border: 1px solid red;\n    display: block;\n    width: 100%;\n    ', '\n  '], ['\n    border: 1px solid red;\n    display: block;\n    width: 100%;\n    ', '\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    line-height: 30px;\n    text-align: center;\n    width: calc(100% / 7);\n    ', '\n  '], ['\n    line-height: 30px;\n    text-align: center;\n    width: calc(100% / 7);\n    ', '\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    background-color: gray;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    ', '\n  '], ['\n    background-color: gray;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    ', '\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n  align-items: top;\n  display: flex;\n  flex-direction: row;\n'], ['\n  align-items: top;\n  display: flex;\n  flex-direction: row;\n']),
    _templateObject10 = _taggedTemplateLiteral([''], ['']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DatePicker = require('react-toolbox-core/lib/components/DatePicker/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Day = require('react-toolbox-core/lib/components/DatePicker/Day');

var _Day2 = _interopRequireDefault(_Day);

var _Month = require('react-toolbox-core/lib/components/DatePicker/Month');

var _Month2 = _interopRequireDefault(_Month);

var _RangePicker = require('react-toolbox-core/lib/components/DatePicker/RangePicker');

var _RangePicker2 = _interopRequireDefault(_RangePicker);

var _SinglePicker = require('react-toolbox-core/lib/components/DatePicker/SinglePicker');

var _SinglePicker2 = _interopRequireDefault(_SinglePicker);

var _withOverride = require('../utils/withOverride');

var _withOverride2 = _interopRequireDefault(_withOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Day = (0, _Day2.default)({
  passthrough: ['overrides'],
  DayNode: _styledComponents2.default.span(_templateObject, getDayBackground, function (props) {
    return props.disabled ? 0.3 : 1;
  }, function (props) {
    return props.disabled || props.blocked ? 'none' : 'all';
  }, (0, _withOverride2.default)('DayNode'))
});

function getDayBackground(props) {
  if (props.outOfMonth) return 'gray';
  if (props.today) return 'orange';
  if (props.disabled) return 'transparent';
  if (props.blocked) {
    return '\n      repeating-linear-gradient(\n        45deg,\n        #606dbc,\n        #606dbc 10px,\n        #465298 10px,\n        #465298 20px\n      );\n    ';
  }
  if (props.selected) return 'red';
  if (props.highlighted) return 'aliceblue';
  if (props.inRange) return 'tomato';
  return 'transparent';
}

var Month = (0, _Month2.default)({
  passthrough: ['overrides'],
  Day: (0, _styledComponents2.default)(Day)(_templateObject2, (0, _withOverride2.default)('Day')),
  DaysWeek: _styledComponents2.default.div(_templateObject3, (0, _withOverride2.default)('DaysWeek')),
  DaysWrapper: _styledComponents2.default.div(_templateObject4, (0, _withOverride2.default)('DayWrapper')),
  MonthTitle: _styledComponents2.default.div(_templateObject5, (0, _withOverride2.default)('MonthTitle')),
  MonthWrapper: _styledComponents2.default.div(_templateObject6, (0, _withOverride2.default)('MonthWrapper')),
  Weekday: _styledComponents2.default.span(_templateObject7, (0, _withOverride2.default)('Weekday')),
  WeekdaysWrapper: _styledComponents2.default.div(_templateObject8, (0, _withOverride2.default)('WeekdaysWrapper'))
});

var MonthsWrapper = _styledComponents2.default.div(_templateObject9);

var RangePicker = (0, _RangePicker2.default)({
  passthrough: ['overrides'],
  MonthsWrapper: MonthsWrapper,
  Month: Month
});

var SinglePicker = (0, _SinglePicker2.default)({
  passthrough: ['overrides'],
  MonthsWrapper: MonthsWrapper,
  Month: Month
});

var DatePicker = (0, _DatePicker2.default)({
  passthrough: ['overrides'],
  NextNode: _styledComponents2.default.button(_templateObject10),
  PickerWrapper: _styledComponents2.default.div(_templateObject10),
  PrevNode: _styledComponents2.default.button(_templateObject10),
  RangePicker: RangePicker,
  SinglePicker: SinglePicker,
  Month: Month
});

exports.default = DatePicker;