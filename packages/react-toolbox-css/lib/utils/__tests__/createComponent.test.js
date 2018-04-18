'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _createComponent = require('../createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {
  base: 'base',
  primary: 'primary',
  secondary: 'secondary'
};

describe('createComponent', function () {
  it('creates a component with a given tagName', function () {
    var Component = (0, _createComponent2.default)('span');
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(Component, null));
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('creates a component with a given component', function () {
    var Dummy = function Dummy() {
      return _react2.default.createElement(
        'h1',
        null,
        'Dummy'
      );
    };
    var Component = (0, _createComponent2.default)(Dummy);
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(Component, null));
    expect(wrapper.find(Dummy).length).toEqual(1);
  });

  it('injects a base className based on the name from the given theme', function () {
    var Component = (0, _createComponent2.default)('span', { name: 'base' });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(Component, { theme: theme }));
    var element = wrapper.find('span');
    expect(element.prop('className')).toEqual(theme.base);
    expect(element.props()).not.toContain('theme');
  });

  it('injects modifier classNames corresponding to the given theme', function () {
    var Component = (0, _createComponent2.default)('span', { modifiers: ['primary', 'secondary'] });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(Component, { primary: true, theme: theme }));
    var element = wrapper.find('span');
    expect(element.prop('className')).toEqual(theme.primary);
    expect(element.props()).not.toContain('primary');
  });

  it('uses an innerRef prop to retrieve references to the element', function () {
    var referenceFunction = jest.fn();
    var Component = (0, _createComponent2.default)('span');
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Component, { innerRef: referenceFunction }));
    var element = wrapper.find('span');
    expect(referenceFunction).toHaveBeenCalledWith(element.getNode());
    expect(element.props()).not.toContain('innerRef');
  });

  it('adds a readable displayName for the generated component', function () {
    var ComponentElement = (0, _createComponent2.default)('span');
    var BaseComponent = function BaseComponent() {
      return _react2.default.createElement(
        'h1',
        null,
        'Dummy'
      );
    };
    BaseComponent.displayName = 'BaseComponent';
    var Component = (0, _createComponent2.default)(BaseComponent);
    expect(ComponentElement.displayName).toEqual('CSSComponent (span)');
    expect(Component.displayName).toEqual('CSSComponent (BaseComponent)');
  });

  it('adds a default theme given from createComponent', function () {
    var Component = (0, _createComponent2.default)('span', { modifiers: ['primary'], theme: theme });
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Component, { primary: true }));
    var element = wrapper.find('span');
    expect(element.prop('className')).toEqual(theme.primary);
  });

  it('passes down a theme and innerRef if the created component is not an element', function () {
    var fn = jest.fn();
    var ComponentElement = (0, _createComponent2.default)('span');
    var Component = (0, _createComponent2.default)(ComponentElement, { modifiers: ['primary'] });
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Component, { innerRef: fn, primary: true, theme: theme }));
    expect(wrapper.find(ComponentElement).prop('theme')).toEqual(theme);
    expect(wrapper.find(ComponentElement).prop('innerRef')).toEqual(fn);
  });
});