'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _extends = require('@babel/runtime/helpers/extends');
var _regeneratorRuntime = require('@babel/runtime/regenerator');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

var redux = function redux(reducer, initial) {
  return function (set, get, api) {
    api.dispatch = function (action) {
      set(function (state) {
        return reducer(state, action);
      });

      if (api.devtools) {
        api.devtools.send(api.devtools.prefix + action.type, get());
      }

      return action;
    };

    return _extends__default['default']({
      dispatch: api.dispatch
    }, initial);
  };
};
var devtools = function devtools(fn, prefix) {
  return function (set, get, api) {
    var extension;

    try {
      extension = window.__REDUX_DEVTOOLS_EXTENSION__ || window.top.__REDUX_DEVTOOLS_EXTENSION__;
    } catch (_unused) {}

    if (!extension) {
      if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        console.warn('Please install/enable Redux devtools extension');
      }

      api.devtools = null;
      return fn(set, get, api);
    }

    var namedSet = function namedSet(state, replace, name) {
      set(state, replace);

      if (!api.dispatch) {
        api.devtools.send(api.devtools.prefix + (name || 'action'), get());
      }
    };

    var initialState = fn(namedSet, get, api);

    if (!api.devtools) {
      var savedSetState = api.setState;

      api.setState = function (state, replace) {
        savedSetState(state, replace);
        api.devtools.send(api.devtools.prefix + 'setState', api.getState());
      };

      api.devtools = extension.connect({
        name: prefix
      });
      api.devtools.prefix = prefix ? prefix + " > " : '';
      api.devtools.subscribe(function (message) {
        var _message$payload;

        if (message.type === 'DISPATCH' && message.state) {
          var ignoreState = message.payload.type === 'JUMP_TO_ACTION' || message.payload.type === 'JUMP_TO_STATE';

          if (!api.dispatch && !ignoreState) {
            api.setState(JSON.parse(message.state));
          } else {
            savedSetState(JSON.parse(message.state));
          }
        } else if (message.type === 'DISPATCH' && ((_message$payload = message.payload) == null ? void 0 : _message$payload.type) === 'COMMIT') {
          api.devtools.init(api.getState());
        }
      });
      api.devtools.init(initialState);
    }

    return initialState;
  };
};
var combine = function combine(initialState, create) {
  return function (set, get, api) {
    return Object.assign({}, initialState, create(set, get, api));
  };
};
var persist = function persist(config, options) {
  return function (set, get, api) {
    var _ref = options || {},
        name = _ref.name,
        _ref$getStorage = _ref.getStorage,
        getStorage = _ref$getStorage === void 0 ? function () {
      return localStorage;
    } : _ref$getStorage,
        _ref$serialize = _ref.serialize,
        serialize = _ref$serialize === void 0 ? JSON.stringify : _ref$serialize,
        _ref$deserialize = _ref.deserialize,
        deserialize = _ref$deserialize === void 0 ? JSON.parse : _ref$deserialize,
        blacklist = _ref.blacklist,
        whitelist = _ref.whitelist,
        onRehydrateStorage = _ref.onRehydrateStorage,
        _ref$version = _ref.version,
        version = _ref$version === void 0 ? 0 : _ref$version,
        migrate = _ref.migrate;

    var storage;

    try {
      storage = getStorage();
    } catch (e) {// prevent error if the storage is not defined (e.g. when server side rendering a page)
    }

    if (!storage) {
      return config(function () {
        console.warn("Persist middleware: unable to update " + name + ", the given storage is currently unavailable.");
        set.apply(void 0, arguments);
      }, get, api);
    }

    var setItem = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
        var _storage;

        var state;
        return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _extends__default['default']({}, get());

                if (whitelist) {
                  Object.keys(state).forEach(function (key) {
                    !whitelist.includes(key) && delete state[key];
                  });
                }

                if (blacklist) {
                  blacklist.forEach(function (key) {
                    return delete state[key];
                  });
                }

                if (!((_storage = storage) == null)) {
                  _context.next = 7;
                  break;
                }

                _context.t0 = void 0;
                _context.next = 13;
                break;

              case 7:
                _context.t1 = _storage;
                _context.t2 = name;
                _context.next = 11;
                return serialize({
                  state: state,
                  version: version
                });

              case 11:
                _context.t3 = _context.sent;
                _context.t0 = _context.t1.setItem.call(_context.t1, _context.t2, _context.t3);

              case 13:
                return _context.abrupt("return", _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function setItem() {
        return _ref2.apply(this, arguments);
      };
    }();

    var savedSetState = api.setState;

    api.setState = function (state, replace) {
      savedSetState(state, replace);
      setItem();
    };

    _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2() {
      var postRehydrationCallback, storageValue, deserializedStorageValue, migratedState;
      return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              postRehydrationCallback = (onRehydrateStorage == null ? void 0 : onRehydrateStorage(get())) || undefined;
              _context2.prev = 1;
              _context2.next = 4;
              return storage.getItem(name);

            case 4:
              storageValue = _context2.sent;

              if (!storageValue) {
                _context2.next = 20;
                break;
              }

              _context2.next = 8;
              return deserialize(storageValue);

            case 8:
              deserializedStorageValue = _context2.sent;

              if (!(deserializedStorageValue.version !== version)) {
                _context2.next = 19;
                break;
              }

              _context2.next = 12;
              return migrate == null ? void 0 : migrate(deserializedStorageValue.state, deserializedStorageValue.version);

            case 12:
              migratedState = _context2.sent;

              if (!migratedState) {
                _context2.next = 17;
                break;
              }

              set(migratedState);
              _context2.next = 17;
              return setItem();

            case 17:
              _context2.next = 20;
              break;

            case 19:
              set(deserializedStorageValue.state);

            case 20:
              _context2.next = 26;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](1);
              postRehydrationCallback == null ? void 0 : postRehydrationCallback(undefined, _context2.t0);
              return _context2.abrupt("return");

            case 26:
              postRehydrationCallback == null ? void 0 : postRehydrationCallback(get(), undefined);

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 22]]);
    }))();

    return config(function () {
      set.apply(void 0, arguments);
      setItem();
    }, get, api);
  };
};

exports.combine = combine;
exports.devtools = devtools;
exports.persist = persist;
exports.redux = redux;
