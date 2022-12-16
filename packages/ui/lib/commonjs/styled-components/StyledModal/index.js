'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _reactNative = require('react-native');
var _uiStyled = require('@gluestack/ui-styled');
var _default = (0, _uiStyled.styled)(
  _reactNative.View,
  {
    baseStyle: {
      style: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      platform: {
        web: {
          style: {
            // @ts-ignore
            pointerEvents: 'box-none',
          },
        },
      },
    },
    defaultProps: {},
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=index.js.map
