/** Firestorter - (c) Hein Rutjes 2017 - 2019 - MIT Licensed */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mobx')) :
    typeof define === 'function' && define.amd ? define(['exports', 'mobx'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.firestorter = {}, global.mobx));
}(this, (function (exports, mobx) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Returns navigator.userAgent string or '' if it's not defined.
     * @return user agent string
     */
    function getUA() {
        if (typeof navigator !== 'undefined' &&
            typeof navigator['userAgent'] === 'string') {
            return navigator['userAgent'];
        }
        else {
            return '';
        }
    }
    /**
     * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
     *
     * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
     * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
     * wait for a callback.
     */
    function isMobileCordova() {
        return (typeof window !== 'undefined' &&
            // @ts-ignore Setting up an broadly applicable index signature for Window
            // just to deal with this case would probably be a bad idea.
            !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
    }
    function isBrowserExtension() {
        const runtime = typeof chrome === 'object'
            ? chrome.runtime
            : typeof browser === 'object'
                ? browser.runtime
                : undefined;
        return typeof runtime === 'object' && runtime.id !== undefined;
    }
    /**
     * Detect React Native.
     *
     * @return true if ReactNative environment is detected.
     */
    function isReactNative() {
        return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
    }
    /** Detects Electron apps. */
    function isElectron() {
        return getUA().indexOf('Electron/') >= 0;
    }
    /** Detects Internet Explorer. */
    function isIE() {
        const ua = getUA();
        return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
    }
    /** Detects Universal Windows Platform apps. */
    function isUWP() {
        return getUA().indexOf('MSAppHost/') >= 0;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @fileoverview Standardized Firebase Error.
     *
     * Usage:
     *
     *   // Typescript string literals for type-safe codes
     *   type Err =
     *     'unknown' |
     *     'object-not-found'
     *     ;
     *
     *   // Closure enum for type-safe error codes
     *   // at-enum {string}
     *   var Err = {
     *     UNKNOWN: 'unknown',
     *     OBJECT_NOT_FOUND: 'object-not-found',
     *   }
     *
     *   let errors: Map<Err, string> = {
     *     'generic-error': "Unknown error",
     *     'file-not-found': "Could not find file: {$file}",
     *   };
     *
     *   // Type-safe function - must pass a valid error code as param.
     *   let error = new ErrorFactory<Err>('service', 'Service', errors);
     *
     *   ...
     *   throw error.create(Err.GENERIC);
     *   ...
     *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
     *   ...
     *   // Service: Could not file file: foo.txt (service/file-not-found).
     *
     *   catch (e) {
     *     assert(e.message === "Could not find file: foo.txt.");
     *     if (e.code === 'service/file-not-found') {
     *       console.log("Could not read file: " + e['file']);
     *     }
     *   }
     */
    const ERROR_NAME = 'FirebaseError';
    // Based on code from:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
    class FirebaseError extends Error {
        constructor(code, message, customData) {
            super(message);
            this.code = code;
            this.customData = customData;
            this.name = ERROR_NAME;
            // Fix For ES5
            // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(this, FirebaseError.prototype);
            // Maintains proper stack trace for where our error was thrown.
            // Only available on V8.
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, ErrorFactory.prototype.create);
            }
        }
    }
    class ErrorFactory {
        constructor(service, serviceName, errors) {
            this.service = service;
            this.serviceName = serviceName;
            this.errors = errors;
        }
        create(code, ...data) {
            const customData = data[0] || {};
            const fullCode = `${this.service}/${code}`;
            const template = this.errors[code];
            const message = template ? replaceTemplate(template, customData) : 'Error';
            // Service Name: Error message (service/code).
            const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
            const error = new FirebaseError(fullCode, fullMessage, customData);
            return error;
        }
    }
    function replaceTemplate(template, data) {
        return template.replace(PATTERN, (_, key) => {
            const value = data[key];
            return value != null ? String(value) : `<${key}?>`;
        });
    }
    const PATTERN = /\{\$([^}]+)}/g;

    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function getModularInstance(service) {
        if (service && service._delegate) {
            return service._delegate;
        }
        else {
            return service;
        }
    }

    /**
     * Component for service name T, e.g. `auth`, `auth-internal`
     */
    class Component {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        constructor(name, instanceFactory, type) {
            this.name = name;
            this.instanceFactory = instanceFactory;
            this.type = type;
            this.multipleInstances = false;
            /**
             * Properties to be added to the service namespace
             */
            this.serviceProps = {};
            this.instantiationMode = "LAZY" /* LAZY */;
            this.onInstanceCreated = null;
        }
        setInstantiationMode(mode) {
            this.instantiationMode = mode;
            return this;
        }
        setMultipleInstances(multipleInstances) {
            this.multipleInstances = multipleInstances;
            return this;
        }
        setServiceProps(props) {
            this.serviceProps = props;
            return this;
        }
        setInstanceCreatedCallback(callback) {
            this.onInstanceCreated = callback;
            return this;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * The JS SDK supports 5 log levels and also allows a user the ability to
     * silence the logs altogether.
     *
     * The order is a follows:
     * DEBUG < VERBOSE < INFO < WARN < ERROR
     *
     * All of the log types above the current log level will be captured (i.e. if
     * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
     * `VERBOSE` logs will not)
     */
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
    })(LogLevel || (LogLevel = {}));
    const levelStringToEnum = {
        'debug': LogLevel.DEBUG,
        'verbose': LogLevel.VERBOSE,
        'info': LogLevel.INFO,
        'warn': LogLevel.WARN,
        'error': LogLevel.ERROR,
        'silent': LogLevel.SILENT
    };
    /**
     * The default log level
     */
    const defaultLogLevel = LogLevel.INFO;
    /**
     * By default, `console.debug` is not displayed in the developer console (in
     * chrome). To avoid forcing users to have to opt-in to these logs twice
     * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
     * logs to the `console.log` function.
     */
    const ConsoleMethod = {
        [LogLevel.DEBUG]: 'log',
        [LogLevel.VERBOSE]: 'log',
        [LogLevel.INFO]: 'info',
        [LogLevel.WARN]: 'warn',
        [LogLevel.ERROR]: 'error'
    };
    /**
     * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
     * messages on to their corresponding console counterparts (if the log method
     * is supported by the current log level)
     */
    const defaultLogHandler = (instance, logType, ...args) => {
        if (logType < instance.logLevel) {
            return;
        }
        const now = new Date().toISOString();
        const method = ConsoleMethod[logType];
        if (method) {
            console[method](`[${now}]  ${instance.name}:`, ...args);
        }
        else {
            throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
        }
    };
    class Logger {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        constructor(name) {
            this.name = name;
            /**
             * The log level of the given Logger instance.
             */
            this._logLevel = defaultLogLevel;
            /**
             * The main (internal) log handler for the Logger instance.
             * Can be set to a new function in internal package code but not by user.
             */
            this._logHandler = defaultLogHandler;
            /**
             * The optional, additional, user-defined log handler for the Logger instance.
             */
            this._userLogHandler = null;
        }
        get logLevel() {
            return this._logLevel;
        }
        set logLevel(val) {
            if (!(val in LogLevel)) {
                throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
            }
            this._logLevel = val;
        }
        // Workaround for setter/getter having to be the same type.
        setLogLevel(val) {
            this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
        }
        get logHandler() {
            return this._logHandler;
        }
        set logHandler(val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        }
        get userLogHandler() {
            return this._userLogHandler;
        }
        set userLogHandler(val) {
            this._userLogHandler = val;
        }
        /**
         * The functions below are all based on the `console` interface
         */
        debug(...args) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
            this._logHandler(this, LogLevel.DEBUG, ...args);
        }
        log(...args) {
            this._userLogHandler &&
                this._userLogHandler(this, LogLevel.VERBOSE, ...args);
            this._logHandler(this, LogLevel.VERBOSE, ...args);
        }
        info(...args) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
            this._logHandler(this, LogLevel.INFO, ...args);
        }
        warn(...args) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
            this._logHandler(this, LogLevel.WARN, ...args);
        }
        error(...args) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
            this._logHandler(this, LogLevel.ERROR, ...args);
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class PlatformLoggerServiceImpl {
        constructor(container) {
            this.container = container;
        }
        // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.
        getPlatformInfoString() {
            const providers = this.container.getProviders();
            // Loop through providers and get library/version pairs from any that are
            // version components.
            return providers
                .map(provider => {
                if (isVersionServiceProvider(provider)) {
                    const service = provider.getImmediate();
                    return `${service.library}/${service.version}`;
                }
                else {
                    return null;
                }
            })
                .filter(logString => logString)
                .join(' ');
        }
    }
    /**
     *
     * @param provider check if this provider provides a VersionService
     *
     * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
     * provides VersionService. The provider is not necessarily a 'app-version'
     * provider.
     */
    function isVersionServiceProvider(provider) {
        const component = provider.getComponent();
        return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
    }

    const name$o = "@firebase/app";
    const version$1 = "0.7.11";

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const logger = new Logger('@firebase/app');

    const name$n = "@firebase/app-compat";

    const name$m = "@firebase/analytics-compat";

    const name$l = "@firebase/analytics";

    const name$k = "@firebase/app-check-compat";

    const name$j = "@firebase/app-check";

    const name$i = "@firebase/auth";

    const name$h = "@firebase/auth-compat";

    const name$g = "@firebase/database";

    const name$f = "@firebase/database-compat";

    const name$e = "@firebase/functions";

    const name$d = "@firebase/functions-compat";

    const name$c = "@firebase/installations";

    const name$b = "@firebase/installations-compat";

    const name$a = "@firebase/messaging";

    const name$9 = "@firebase/messaging-compat";

    const name$8 = "@firebase/performance";

    const name$7 = "@firebase/performance-compat";

    const name$6 = "@firebase/remote-config";

    const name$5 = "@firebase/remote-config-compat";

    const name$4 = "@firebase/storage";

    const name$3 = "@firebase/storage-compat";

    const name$2 = "@firebase/firestore";

    const name$1 = "@firebase/firestore-compat";

    const name = "firebase";
    const version = "9.6.1";

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * The default app name
     *
     * @internal
     */
    const DEFAULT_ENTRY_NAME = '[DEFAULT]';
    const PLATFORM_LOG_STRING = {
        [name$o]: 'fire-core',
        [name$n]: 'fire-core-compat',
        [name$l]: 'fire-analytics',
        [name$m]: 'fire-analytics-compat',
        [name$j]: 'fire-app-check',
        [name$k]: 'fire-app-check-compat',
        [name$i]: 'fire-auth',
        [name$h]: 'fire-auth-compat',
        [name$g]: 'fire-rtdb',
        [name$f]: 'fire-rtdb-compat',
        [name$e]: 'fire-fn',
        [name$d]: 'fire-fn-compat',
        [name$c]: 'fire-iid',
        [name$b]: 'fire-iid-compat',
        [name$a]: 'fire-fcm',
        [name$9]: 'fire-fcm-compat',
        [name$8]: 'fire-perf',
        [name$7]: 'fire-perf-compat',
        [name$6]: 'fire-rc',
        [name$5]: 'fire-rc-compat',
        [name$4]: 'fire-gcs',
        [name$3]: 'fire-gcs-compat',
        [name$2]: 'fire-fst',
        [name$1]: 'fire-fst-compat',
        'fire-js': 'fire-js',
        [name]: 'fire-js-all'
    };

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @internal
     */
    const _apps = new Map();
    /**
     * Registered components.
     *
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _components = new Map();
    /**
     * @param component - the component being added to this app's container
     *
     * @internal
     */
    function _addComponent(app, component) {
        try {
            app.container.addComponent(component);
        }
        catch (e) {
            logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
        }
    }
    /**
     *
     * @param component - the component to register
     * @returns whether or not the component is registered successfully
     *
     * @internal
     */
    function _registerComponent(component) {
        const componentName = component.name;
        if (_components.has(componentName)) {
            logger.debug(`There were multiple attempts to register component ${componentName}.`);
            return false;
        }
        _components.set(componentName, component);
        // add the component to existing app instances
        for (const app of _apps.values()) {
            _addComponent(app, component);
        }
        return true;
    }
    /**
     *
     * @param app - FirebaseApp instance
     * @param name - service name
     *
     * @returns the provider for the service with the matching name
     *
     * @internal
     */
    function _getProvider(app, name) {
        return app.container.getProvider(name);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const ERRORS = {
        ["no-app" /* NO_APP */]: "No Firebase App '{$appName}' has been created - " +
            'call Firebase App.initializeApp()',
        ["bad-app-name" /* BAD_APP_NAME */]: "Illegal App name: '{$appName}",
        ["duplicate-app" /* DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
        ["app-deleted" /* APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
        ["invalid-app-argument" /* INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
            'Firebase App instance.',
        ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.'
    };
    const ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * The current SDK version.
     *
     * @public
     */
    const SDK_VERSION = version;
    /**
     * Retrieves a {@link @firebase/app#FirebaseApp} instance.
     *
     * When called with no arguments, the default app is returned. When an app name
     * is provided, the app corresponding to that name is returned.
     *
     * An exception is thrown if the app being retrieved has not yet been
     * initialized.
     *
     * @example
     * ```javascript
     * // Return the default app
     * const app = getApp();
     * ```
     *
     * @example
     * ```javascript
     * // Return a named app
     * const otherApp = getApp("otherApp");
     * ```
     *
     * @param name - Optional name of the app to return. If no name is
     *   provided, the default is `"[DEFAULT]"`.
     *
     * @returns The app corresponding to the provided app name.
     *   If no app name is provided, the default app is returned.
     *
     * @public
     */
    function getApp(name = DEFAULT_ENTRY_NAME) {
        const app = _apps.get(name);
        if (!app) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return app;
    }
    /**
     * Registers a library's name and version for platform logging purposes.
     * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
     * @param version - Current version of that library.
     * @param variant - Bundle variant, e.g., node, rn, etc.
     *
     * @public
     */
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += `-${variant}`;
        }
        const libraryMismatch = library.match(/\s|\//);
        const versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            const warning = [
                `Unable to register library "${library}" with version "${version}":`
            ];
            if (libraryMismatch) {
                warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
            }
            logger.warn(warning.join(' '));
            return;
        }
        _registerComponent(new Component(`${library}-version`, () => ({ library, version }), "VERSION" /* VERSION */));
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function registerCoreComponents(variant) {
        _registerComponent(new Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* PRIVATE */));
        // Register `app` package.
        registerVersion(name$o, version$1, variant);
        // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
        registerVersion(name$o, version$1, 'esm2017');
        // Register platform SDK identifier (no version).
        registerVersion('fire-js', '');
    }

    /**
     * Firebase App
     *
     * @remarks This package coordinates the communication between the different Firebase components
     * @packageDocumentation
     */
    registerCoreComponents('');

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var esm = {};

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k,goog=goog||{},l=commonjsGlobal||self;function aa(){}function ba(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return "array"==b||"object"==b&&"number"==typeof a.length}function p(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}function da(a){return Object.prototype.hasOwnProperty.call(a,ea)&&a[ea]||(a[ea]=++fa)}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;function ha(a,b,c){return a.call.apply(a.bind,arguments)}
    function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=ha:q=ia;return q.apply(null,arguments)}
    function ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function t(a,b){function c(){}c.prototype=b.prototype;a.Z=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vb=function(d,e,f){for(var h=Array(arguments.length-2),n=2;n<arguments.length;n++)h[n-2]=arguments[n];return b.prototype[e].apply(d,h)};}function v(){this.s=this.s;this.o=this.o;}var ka=0;v.prototype.s=!1;v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=ka)){var a=da(this);}};v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()();};const ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return "string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(let c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},na=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c);}:function(a,b,c){const d=a.length,e="string"===typeof a?a.split(""):a;for(let f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);};
    function oa(a){a:{var b=pa;const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}function qa(a){return Array.prototype.concat.apply([],arguments)}function ra(a){const b=a.length;if(0<b){const c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return []}function sa(a){return /^[\s\xa0]*$/.test(a)}var ta=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function w(a,b){return -1!=a.indexOf(b)}function ua(a,b){return a<b?-1:a>b?1:0}var x;a:{var va=l.navigator;if(va){var wa=va.userAgent;if(wa){x=wa;break a}}x="";}function xa(a,b,c){for(const d in a)b.call(c,a[d],d,a);}function ya(a){const b={};for(const c in a)b[c]=a[c];return b}var za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Aa(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<za.length;f++)c=za[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}function Ca(a){Ca[" "](a);return a}Ca[" "]=aa;function Fa(a){var b=Ga;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}var Ha=w(x,"Opera"),y=w(x,"Trident")||w(x,"MSIE"),Ia=w(x,"Edge"),Ja=Ia||y,Ka=w(x,"Gecko")&&!(w(x.toLowerCase(),"webkit")&&!w(x,"Edge"))&&!(w(x,"Trident")||w(x,"MSIE"))&&!w(x,"Edge"),La=w(x.toLowerCase(),"webkit")&&!w(x,"Edge");function Ma(){var a=l.document;return a?a.documentMode:void 0}var Na;
    a:{var Oa="",Pa=function(){var a=x;if(Ka)return /rv:([^\);]+)(\)|;)/.exec(a);if(Ia)return /Edge\/([\d\.]+)/.exec(a);if(y)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(La)return /WebKit\/(\S+)/.exec(a);if(Ha)return /(?:Version)[ \/]?(\S+)/.exec(a)}();Pa&&(Oa=Pa?Pa[1]:"");if(y){var Qa=Ma();if(null!=Qa&&Qa>parseFloat(Oa)){Na=String(Qa);break a}}Na=Oa;}var Ga={};
    function Ra(){return Fa(function(){let a=0;const b=ta(String(Na)).split("."),c=ta("9").split("."),d=Math.max(b.length,c.length);for(let h=0;0==a&&h<d;h++){var e=b[h]||"",f=c[h]||"";do{e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];if(0==e[0].length&&0==f[0].length)break;a=ua(0==e[1].length?0:parseInt(e[1],10),0==f[1].length?0:parseInt(f[1],10))||ua(0==e[2].length,0==f[2].length)||ua(e[2],f[2]);e=e[3];f=f[3];}while(0==a)}return 0<=a})}var Sa;
    if(l.document&&y){var Ta=Ma();Sa=Ta?Ta:parseInt(Na,10)||void 0;}else Sa=void 0;var Ua=Sa;var Va=function(){if(!l.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{l.addEventListener("test",aa,b),l.removeEventListener("test",aa,b);}catch(c){}return a}();function z(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=!1;}z.prototype.h=function(){this.defaultPrevented=!0;};function A(a,b){z.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(Ka){a:{try{Ca(b.nodeName);var e=!0;break a}catch(f){}e=
    !1;}e||(b=null);}}else "mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=
    a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Wa[a.pointerType]||"";this.state=a.state;this.i=a;a.defaultPrevented&&A.Z.h.call(this);}}t(A,z);var Wa={2:"touch",3:"pen",4:"mouse"};A.prototype.h=function(){A.Z.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1;};var B="closure_listenable_"+(1E6*Math.random()|0);var Xa=0;function Ya(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ia=e;this.key=++Xa;this.ca=this.fa=!1;}function Za(a){a.ca=!0;a.listener=null;a.proxy=null;a.src=null;a.ia=null;}function $a(a){this.src=a;this.g={};this.h=0;}$a.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.h++);var h=ab(a,b,d,e);-1<h?(b=a[h],c||(b.fa=!1)):(b=new Ya(b,this.src,f,!!d,e),b.fa=c,a.push(b));return b};function bb(a,b){var c=b.type;if(c in a.g){var d=a.g[c],e=ma(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Za(b),0==a.g[c].length&&(delete a.g[c],a.h--));}}
    function ab(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ca&&f.listener==b&&f.capture==!!c&&f.ia==d)return e}return -1}var cb="closure_lm_"+(1E6*Math.random()|0),db={};function fb(a,b,c,d,e){if(d&&d.once)return gb(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)fb(a,b[f],c,d,e);return null}c=hb(c);return a&&a[B]?a.N(b,c,p(d)?!!d.capture:!!d,e):ib(a,b,c,!1,d,e)}
    function ib(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=p(e)?!!e.capture:!!e,n=jb(a);n||(a[cb]=n=new $a(a));c=n.add(b,c,d,h,f);if(c.proxy)return c;d=kb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Va||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(lb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}
    function kb(){function a(c){return b.call(a.src,a.listener,c)}var b=mb;return a}function gb(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)gb(a,b[f],c,d,e);return null}c=hb(c);return a&&a[B]?a.O(b,c,p(d)?!!d.capture:!!d,e):ib(a,b,c,!0,d,e)}
    function nb(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nb(a,b[f],c,d,e);else (d=p(d)?!!d.capture:!!d,c=hb(c),a&&a[B])?(a=a.i,b=String(b).toString(),b in a.g&&(f=a.g[b],c=ab(f,c,d,e),-1<c&&(Za(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--)))):a&&(a=jb(a))&&(b=a.g[b.toString()],a=-1,b&&(a=ab(b,c,d,e)),(c=-1<a?b[a]:null)&&ob(c));}
    function ob(a){if("number"!==typeof a&&a&&!a.ca){var b=a.src;if(b&&b[B])bb(b.i,a);else {var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(lb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=jb(b))?(bb(c,a),0==c.h&&(c.src=null,b[cb]=null)):Za(a);}}}function lb(a){return a in db?db[a]:db[a]="on"+a}function mb(a,b){if(a.ca)a=!0;else {b=new A(b,this);var c=a.listener,d=a.ia||a.src;a.fa&&ob(a);a=c.call(d,b);}return a}
    function jb(a){a=a[cb];return a instanceof $a?a:null}var pb="__closure_events_fn_"+(1E9*Math.random()>>>0);function hb(a){if("function"===typeof a)return a;a[pb]||(a[pb]=function(b){return a.handleEvent(b)});return a[pb]}function C(){v.call(this);this.i=new $a(this);this.P=this;this.I=null;}t(C,v);C.prototype[B]=!0;C.prototype.removeEventListener=function(a,b,c,d){nb(this,a,b,c,d);};
    function D(a,b){var c,d=a.I;if(d)for(c=[];d;d=d.I)c.push(d);a=a.P;d=b.type||b;if("string"===typeof b)b=new z(b,a);else if(b instanceof z)b.target=b.target||a;else {var e=b;b=new z(d,a);Aa(b,e);}e=!0;if(c)for(var f=c.length-1;0<=f;f--){var h=b.g=c[f];e=qb(h,d,!0,b)&&e;}h=b.g=a;e=qb(h,d,!0,b)&&e;e=qb(h,d,!1,b)&&e;if(c)for(f=0;f<c.length;f++)h=b.g=c[f],e=qb(h,d,!1,b)&&e;}
    C.prototype.M=function(){C.Z.M.call(this);if(this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],e=0;e<d.length;e++)Za(d[e]);delete a.g[c];a.h--;}}this.I=null;};C.prototype.N=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};C.prototype.O=function(a,b,c,d){return this.i.add(String(a),b,!0,c,d)};
    function qb(a,b,c,d){b=a.i.g[String(b)];if(!b)return !0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.ca&&h.capture==c){var n=h.listener,u=h.ia||h.src;h.fa&&bb(a.i,h);e=!1!==n.call(u,d)&&e;}}return e&&!d.defaultPrevented}var rb=l.JSON.stringify;function sb(){var a=tb;let b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}class ub{constructor(){this.h=this.g=null;}add(a,b){const c=vb.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c;}}var vb=new class{constructor(a,b){this.i=a;this.j=b;this.h=0;this.g=null;}get(){let a;0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i();return a}}(()=>new wb,a=>a.reset());
    class wb{constructor(){this.next=this.g=this.h=null;}set(a,b){this.h=a;this.g=b;this.next=null;}reset(){this.next=this.g=this.h=null;}}function yb(a){l.setTimeout(()=>{throw a;},0);}function zb(a,b){Ab||Bb();Cb||(Ab(),Cb=!0);tb.add(a,b);}var Ab;function Bb(){var a=l.Promise.resolve(void 0);Ab=function(){a.then(Db);};}var Cb=!1,tb=new ub;function Db(){for(var a;a=sb();){try{a.h.call(a.g);}catch(c){yb(c);}var b=vb;b.j(a);100>b.h&&(b.h++,a.next=b.g,b.g=a);}Cb=!1;}function Eb(a,b){C.call(this);this.h=a||1;this.g=b||l;this.j=q(this.kb,this);this.l=Date.now();}t(Eb,C);k=Eb.prototype;k.da=!1;k.S=null;k.kb=function(){if(this.da){var a=Date.now()-this.l;0<a&&a<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-a):(this.S&&(this.g.clearTimeout(this.S),this.S=null),D(this,"tick"),this.da&&(Fb(this),this.start()));}};k.start=function(){this.da=!0;this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now());};
    function Fb(a){a.da=!1;a.S&&(a.g.clearTimeout(a.S),a.S=null);}k.M=function(){Eb.Z.M.call(this);Fb(this);delete this.g;};function Gb(a,b,c){if("function"===typeof a)c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function Hb(a){a.g=Gb(()=>{a.g=null;a.i&&(a.i=!1,Hb(a));},a.j);const b=a.h;a.h=null;a.m.apply(null,b);}class Ib extends v{constructor(a,b){super();this.m=a;this.j=b;this.h=null;this.i=!1;this.g=null;}l(a){this.h=arguments;this.g?this.i=!0:Hb(this);}M(){super.M();this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null);}}function E(a){v.call(this);this.h=a;this.g={};}t(E,v);var Jb=[];function Kb(a,b,c,d){Array.isArray(c)||(c&&(Jb[0]=c.toString()),c=Jb);for(var e=0;e<c.length;e++){var f=fb(b,c[e],d||a.handleEvent,!1,a.h||a);if(!f)break;a.g[f.key]=f;}}function Lb(a){xa(a.g,function(b,c){this.g.hasOwnProperty(c)&&ob(b);},a);a.g={};}E.prototype.M=function(){E.Z.M.call(this);Lb(this);};E.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Mb(){this.g=!0;}Mb.prototype.Aa=function(){this.g=!1;};function Nb(a,b,c,d,e,f){a.info(function(){if(a.g)if(f){var h="";for(var n=f.split("&"),u=0;u<n.length;u++){var m=n[u].split("=");if(1<m.length){var r=m[0];m=m[1];var G=r.split("_");h=2<=G.length&&"type"==G[1]?h+(r+"="+m+"&"):h+(r+"=redacted&");}}}else h=null;else h=f;return "XMLHTTP REQ ("+d+") [attempt "+e+"]: "+b+"\n"+c+"\n"+h});}
    function Ob(a,b,c,d,e,f,h){a.info(function(){return "XMLHTTP RESP ("+d+") [ attempt "+e+"]: "+b+"\n"+c+"\n"+f+" "+h});}function F(a,b,c,d){a.info(function(){return "XMLHTTP TEXT ("+b+"): "+Pb(a,c)+(d?" "+d:"")});}function Qb(a,b){a.info(function(){return "TIMEOUT: "+b});}Mb.prototype.info=function(){};
    function Pb(a,b){if(!a.g)return b;if(!b)return null;try{var c=JSON.parse(b);if(c)for(a=0;a<c.length;a++)if(Array.isArray(c[a])){var d=c[a];if(!(2>d.length)){var e=d[1];if(Array.isArray(e)&&!(1>e.length)){var f=e[0];if("noop"!=f&&"stop"!=f&&"close"!=f)for(var h=1;h<e.length;h++)e[h]="";}}}return rb(c)}catch(n){return b}}var H={},Rb=null;function Sb(){return Rb=Rb||new C}H.Ma="serverreachability";function Tb(a){z.call(this,H.Ma,a);}t(Tb,z);function I(a){const b=Sb();D(b,new Tb(b,a));}H.STAT_EVENT="statevent";function Ub(a,b){z.call(this,H.STAT_EVENT,a);this.stat=b;}t(Ub,z);function J(a){const b=Sb();D(b,new Ub(b,a));}H.Na="timingevent";function Vb(a,b){z.call(this,H.Na,a);this.size=b;}t(Vb,z);
    function K(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a();},b)}var Wb={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9};var Xb={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yb(){}Yb.prototype.h=null;function Zb(a){return a.h||(a.h=a.i())}function $b(){}var L={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ac(){z.call(this,"d");}t(ac,z);function bc(){z.call(this,"c");}t(bc,z);var cc;function dc(){}t(dc,Yb);dc.prototype.g=function(){return new XMLHttpRequest};dc.prototype.i=function(){return {}};cc=new dc;function M(a,b,c,d){this.l=a;this.j=b;this.m=c;this.X=d||1;this.V=new E(this);this.P=ec;a=Ja?125:void 0;this.W=new Eb(a);this.H=null;this.i=!1;this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null;this.D=[];this.g=null;this.C=0;this.o=this.u=null;this.N=-1;this.I=!1;this.O=0;this.L=null;this.aa=this.J=this.$=this.U=!1;this.h=new fc;}function fc(){this.i=null;this.g="";this.h=!1;}var ec=45E3,gc={},hc={};k=M.prototype;k.setTimeout=function(a){this.P=a;};
    function ic(a,b,c){a.K=1;a.v=jc(N(b));a.s=c;a.U=!0;kc(a,null);}function kc(a,b){a.F=Date.now();lc(a);a.A=N(a.v);var c=a.A,d=a.X;Array.isArray(d)||(d=[String(d)]);mc(c.h,"t",d);a.C=0;c=a.l.H;a.h=new fc;a.g=nc(a.l,c?b:null,!a.s);0<a.O&&(a.L=new Ib(q(a.Ia,a,a.g),a.O));Kb(a.V,a.g,"readystatechange",a.gb);b=a.H?ya(a.H):{};a.s?(a.u||(a.u="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.s,b)):(a.u="GET",a.g.ea(a.A,a.u,null,b));I(1);Nb(a.j,a.u,a.A,a.m,a.X,a.s);}
    k.gb=function(a){a=a.target;const b=this.L;b&&3==O(a)?b.l():this.Ia(a);};
    k.Ia=function(a){try{if(a==this.g)a:{const r=O(this.g);var b=this.g.Da();const G=this.g.ba();if(!(3>r)&&(3!=r||Ja||this.g&&(this.h.h||this.g.ga()||oc(this.g)))){this.I||4!=r||7==b||(8==b||0>=G?I(3):I(2));pc(this);var c=this.g.ba();this.N=c;b:if(qc(this)){var d=oc(this.g);a="";var e=d.length,f=4==O(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){P(this);rc(this);var h="";break b}this.h.i=new l.TextDecoder;}for(b=0;b<e;b++)this.h.h=!0,a+=this.h.i.decode(d[b],{stream:f&&b==e-1});d.splice(0,
    e);this.h.g+=a;this.C=0;h=this.h.g;}else h=this.g.ga();this.i=200==c;Ob(this.j,this.u,this.A,this.m,this.X,r,c);if(this.i){if(this.$&&!this.J){b:{if(this.g){var n,u=this.g;if((n=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sa(n)){var m=n;break b}}m=null;}if(c=m)F(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sc(this,c);else {this.i=!1;this.o=3;J(12);P(this);rc(this);break a}}this.U?(tc(this,r,h),Ja&&this.i&&3==r&&(Kb(this.V,this.W,"tick",this.fb),
    this.W.start())):(F(this.j,this.m,h,null),sc(this,h));4==r&&P(this);this.i&&!this.I&&(4==r?uc(this.l,this):(this.i=!1,lc(this)));}else 400==c&&0<h.indexOf("Unknown SID")?(this.o=3,J(12)):(this.o=0,J(13)),P(this),rc(this);}}}catch(r){}finally{}};function qc(a){return a.g?"GET"==a.u&&2!=a.K&&a.l.Ba:!1}
    function tc(a,b,c){let d=!0,e;for(;!a.I&&a.C<c.length;)if(e=vc(a,c),e==hc){4==b&&(a.o=4,J(14),d=!1);F(a.j,a.m,null,"[Incomplete Response]");break}else if(e==gc){a.o=4;J(15);F(a.j,a.m,c,"[Invalid Chunk]");d=!1;break}else F(a.j,a.m,e,null),sc(a,e);qc(a)&&e!=hc&&e!=gc&&(a.h.g="",a.C=0);4!=b||0!=c.length||a.h.h||(a.o=1,J(16),d=!1);a.i=a.i&&d;d?0<c.length&&!a.aa&&(a.aa=!0,b=a.l,b.g==a&&b.$&&!b.L&&(b.h.info("Great, no buffering proxy detected. Bytes received: "+c.length),wc(b),b.L=!0,J(11))):(F(a.j,a.m,
    c,"[Invalid Chunked Response]"),P(a),rc(a));}k.fb=function(){if(this.g){var a=O(this.g),b=this.g.ga();this.C<b.length&&(pc(this),tc(this,a,b),this.i&&4!=a&&lc(this));}};function vc(a,b){var c=a.C,d=b.indexOf("\n",c);if(-1==d)return hc;c=Number(b.substring(c,d));if(isNaN(c))return gc;d+=1;if(d+c>b.length)return hc;b=b.substr(d,c);a.C=d+c;return b}k.cancel=function(){this.I=!0;P(this);};function lc(a){a.Y=Date.now()+a.P;xc(a,a.P);}
    function xc(a,b){if(null!=a.B)throw Error("WatchDog timer not null");a.B=K(q(a.eb,a),b);}function pc(a){a.B&&(l.clearTimeout(a.B),a.B=null);}k.eb=function(){this.B=null;const a=Date.now();0<=a-this.Y?(Qb(this.j,this.A),2!=this.K&&(I(3),J(17)),P(this),this.o=2,rc(this)):xc(this,this.Y-a);};function rc(a){0==a.l.G||a.I||uc(a.l,a);}function P(a){pc(a);var b=a.L;b&&"function"==typeof b.na&&b.na();a.L=null;Fb(a.W);Lb(a.V);a.g&&(b=a.g,a.g=null,b.abort(),b.na());}
    function sc(a,b){try{var c=a.l;if(0!=c.G&&(c.g==a||yc(c.i,a)))if(c.I=a.N,!a.J&&yc(c.i,a)&&3==c.G){try{var d=c.Ca.g.parse(b);}catch(m){d=null;}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.u){if(c.g)if(c.g.F+3E3<a.F)zc(c),Ac(c);else break a;Bc(c);J(18);}}else c.ta=e[1],0<c.ta-c.U&&37500>e[2]&&c.N&&0==c.A&&!c.v&&(c.v=K(q(c.ab,c),6E3));if(1>=Cc(c.i)&&c.ka){try{c.ka();}catch(m){}c.ka=void 0;}}else Q(c,11);}else if((a.J||c.g==a)&&zc(c),!sa(b))for(e=c.Ca.g.parse(b),b=0;b<e.length;b++){let m=e[b];
    c.U=m[0];m=m[1];if(2==c.G)if("c"==m[0]){c.J=m[1];c.la=m[2];const r=m[3];null!=r&&(c.ma=r,c.h.info("VER="+c.ma));const G=m[4];null!=G&&(c.za=G,c.h.info("SVER="+c.za));const Da=m[5];null!=Da&&"number"===typeof Da&&0<Da&&(d=1.5*Da,c.K=d,c.h.info("backChannelRequestTimeoutMs_="+d));d=c;const ca=a.g;if(ca){const Ea=ca.g?ca.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ea){var f=d.i;!f.g&&(w(Ea,"spdy")||w(Ea,"quic")||w(Ea,"h2"))&&(f.j=f.l,f.g=new Set,f.h&&(Dc(f,f.h),f.h=null));}if(d.D){const xb=
    ca.g?ca.g.getResponseHeader("X-HTTP-Session-Id"):null;xb&&(d.sa=xb,R(d.F,d.D,xb));}}c.G=3;c.j&&c.j.xa();c.$&&(c.O=Date.now()-a.F,c.h.info("Handshake RTT: "+c.O+"ms"));d=c;var h=a;d.oa=Ec(d,d.H?d.la:null,d.W);if(h.J){Fc(d.i,h);var n=h,u=d.K;u&&n.setTimeout(u);n.B&&(pc(n),lc(n));d.g=h;}else Gc(d);0<c.l.length&&Hc(c);}else "stop"!=m[0]&&"close"!=m[0]||Q(c,7);else 3==c.G&&("stop"==m[0]||"close"==m[0]?"stop"==m[0]?Q(c,7):Ic(c):"noop"!=m[0]&&c.j&&c.j.wa(m),c.A=0);}I(4);}catch(m){}}function Jc(a){if(a.R&&"function"==typeof a.R)return a.R();if("string"===typeof a)return a.split("");if(ba(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
    function Kc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ba(a)||"string"===typeof a)na(a,b,void 0);else {if(a.T&&"function"==typeof a.T)var c=a.T();else if(a.R&&"function"==typeof a.R)c=void 0;else if(ba(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e);}else for(e in c=[],d=0,a)c[d++]=e;d=Jc(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}}function S(a,b){this.h={};this.g=[];this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a)if(a instanceof S)for(c=a.T(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d]);}k=S.prototype;k.R=function(){Lc(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.h[this.g[b]]);return a};k.T=function(){Lc(this);return this.g.concat()};
    function Lc(a){if(a.i!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];T(a.h,d)&&(a.g[c++]=d);b++;}a.g.length=c;}if(a.i!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],T(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c;}}k.get=function(a,b){return T(this.h,a)?this.h[a]:b};k.set=function(a,b){T(this.h,a)||(this.i++,this.g.push(a));this.h[a]=b;};k.forEach=function(a,b){for(var c=this.T(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};
    function T(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var Mc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}}function U(a,b){this.i=this.s=this.j="";this.m=null;this.o=this.l="";this.g=!1;if(a instanceof U){this.g=void 0!==b?b:a.g;Oc(this,a.j);this.s=a.s;Pc(this,a.i);Qc(this,a.m);this.l=a.l;b=a.h;var c=new Rc;c.i=b.i;b.g&&(c.g=new S(b.g),c.h=b.h);Sc(this,c);this.o=a.o;}else a&&(c=String(a).match(Mc))?(this.g=!!b,Oc(this,c[1]||"",!0),this.s=Tc(c[2]||""),Pc(this,c[3]||"",!0),Qc(this,c[4]),this.l=Tc(c[5]||"",!0),Sc(this,c[6]||"",!0),this.o=Tc(c[7]||"")):(this.g=!!b,this.h=new Rc(null,this.g));}
    U.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Uc(b,Vc,!0),":");var c=this.i;if(c||"file"==b)a.push("//"),(b=this.s)&&a.push(Uc(b,Vc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,null!=c&&a.push(":",String(c));if(c=this.l)this.i&&"/"!=c.charAt(0)&&a.push("/"),a.push(Uc(c,"/"==c.charAt(0)?Wc:Xc,!0));(c=this.h.toString())&&a.push("?",c);(c=this.o)&&a.push("#",Uc(c,Yc));return a.join("")};function N(a){return new U(a)}
    function Oc(a,b,c){a.j=c?Tc(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""));}function Pc(a,b,c){a.i=c?Tc(b,!0):b;}function Qc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.m=b;}else a.m=null;}function Sc(a,b,c){b instanceof Rc?(a.h=b,Zc(a.h,a.g)):(c||(b=Uc(b,$c)),a.h=new Rc(b,a.g));}function R(a,b,c){a.h.set(b,c);}function jc(a){R(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36));return a}
    function ad(a){return a instanceof U?N(a):new U(a,void 0)}function bd(a,b,c,d){var e=new U(null,void 0);a&&Oc(e,a);b&&Pc(e,b);c&&Qc(e,c);d&&(e.l=d);return e}function Tc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Uc(a,b,c){return "string"===typeof a?(a=encodeURI(a).replace(b,cd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cd(a){a=a.charCodeAt(0);return "%"+(a>>4&15).toString(16)+(a&15).toString(16)}
    var Vc=/[#\/\?@]/g,Xc=/[#\?:]/g,Wc=/[#\?]/g,$c=/[#\?@]/g,Yc=/#/g;function Rc(a,b){this.h=this.g=null;this.i=a||null;this.j=!!b;}function V(a){a.g||(a.g=new S,a.h=0,a.i&&Nc(a.i,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));}k=Rc.prototype;k.add=function(a,b){V(this);this.i=null;a=W(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.h+=1;return this};
    function dd(a,b){V(a);b=W(a,b);T(a.g.h,b)&&(a.i=null,a.h-=a.g.get(b).length,a=a.g,T(a.h,b)&&(delete a.h[b],a.i--,a.g.length>2*a.i&&Lc(a)));}function ed(a,b){V(a);b=W(a,b);return T(a.g.h,b)}k.forEach=function(a,b){V(this);this.g.forEach(function(c,d){na(c,function(e){a.call(b,e,d,this);},this);},this);};k.T=function(){V(this);for(var a=this.g.R(),b=this.g.T(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
    k.R=function(a){V(this);var b=[];if("string"===typeof a)ed(this,a)&&(b=qa(b,this.g.get(W(this,a))));else {a=this.g.R();for(var c=0;c<a.length;c++)b=qa(b,a[c]);}return b};k.set=function(a,b){V(this);this.i=null;a=W(this,a);ed(this,a)&&(this.h-=this.g.get(a).length);this.g.set(a,[b]);this.h+=1;return this};k.get=function(a,b){if(!a)return b;a=this.R(a);return 0<a.length?String(a[0]):b};function mc(a,b,c){dd(a,b);0<c.length&&(a.i=null,a.g.set(W(a,b),ra(c)),a.h+=c.length);}
    k.toString=function(){if(this.i)return this.i;if(!this.g)return "";for(var a=[],b=this.g.T(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.R(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h);}}return this.i=a.join("&")};function W(a,b){b=String(b);a.j&&(b=b.toLowerCase());return b}function Zc(a,b){b&&!a.j&&(V(a),a.i=null,a.g.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(dd(this,d),mc(this,e,c));},a));a.j=b;}var fd=class{constructor(a,b){this.h=a;this.g=b;}};function gd(a){this.l=a||hd;l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(l.g&&l.g.Ea&&l.g.Ea()&&l.g.Ea().Zb);this.j=a?this.l:1;this.g=null;1<this.j&&(this.g=new Set);this.h=null;this.i=[];}var hd=10;function id(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cc(a){return a.h?1:a.g?a.g.size:0}function yc(a,b){return a.h?a.h==b:a.g?a.g.has(b):!1}function Dc(a,b){a.g?a.g.add(b):a.h=b;}
    function Fc(a,b){a.h&&a.h==b?a.h=null:a.g&&a.g.has(b)&&a.g.delete(b);}gd.prototype.cancel=function(){this.i=jd(this);if(this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const a of this.g.values())a.cancel();this.g.clear();}};function jd(a){if(null!=a.h)return a.i.concat(a.h.D);if(null!=a.g&&0!==a.g.size){let b=a.i;for(const c of a.g.values())b=b.concat(c.D);return b}return ra(a.i)}function kd(){}kd.prototype.stringify=function(a){return l.JSON.stringify(a,void 0)};kd.prototype.parse=function(a){return l.JSON.parse(a,void 0)};function ld(){this.g=new kd;}function md(a,b,c){const d=c||"";try{Kc(a,function(e,f){let h=e;p(e)&&(h=rb(e));b.push(d+f+"="+encodeURIComponent(h));});}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;}}function nd(a,b){const c=new Mb;if(l.Image){const d=new Image;d.onload=ja(od,c,d,"TestLoadImage: loaded",!0,b);d.onerror=ja(od,c,d,"TestLoadImage: error",!1,b);d.onabort=ja(od,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=ja(od,c,d,"TestLoadImage: timeout",!1,b);l.setTimeout(function(){if(d.ontimeout)d.ontimeout();},1E4);d.src=a;}else b(!1);}function od(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d);}catch(f){}}function pd(a){this.l=a.$b||null;this.j=a.ib||!1;}t(pd,Yb);pd.prototype.g=function(){return new qd(this.l,this.j)};pd.prototype.i=function(a){return function(){return a}}({});function qd(a,b){C.call(this);this.D=a;this.u=b;this.m=void 0;this.readyState=rd;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.v=new Headers;this.h=null;this.C="GET";this.B="";this.g=!1;this.A=this.j=this.l=null;}t(qd,C);var rd=0;k=qd.prototype;
    k.open=function(a,b){if(this.readyState!=rd)throw this.abort(),Error("Error reopening a connection");this.C=a;this.B=b;this.readyState=1;sd(this);};k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const b={headers:this.v,method:this.C,credentials:this.m,cache:void 0};a&&(b.body=a);(this.D||l).fetch(new Request(this.B,b)).then(this.Va.bind(this),this.ha.bind(this));};
    k.abort=function(){this.response=this.responseText="";this.v=new Headers;this.status=0;this.j&&this.j.cancel("Request was aborted.");1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,td(this));this.readyState=rd;};
    k.Va=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,sd(this)),this.g&&(this.readyState=3,sd(this),this.g)))if("arraybuffer"===this.responseType)a.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in a){this.j=a.body.getReader();if(this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=
    [];}else this.response=this.responseText="",this.A=new TextDecoder;ud(this);}else a.text().then(this.Ua.bind(this),this.ha.bind(this));};function ud(a){a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a));}k.Sa=function(a){if(this.g){if(this.u&&a.value)this.response.push(a.value);else if(!this.u){var b=a.value?a.value:new Uint8Array(0);if(b=this.A.decode(b,{stream:!a.done}))this.response=this.responseText+=b;}a.done?td(this):sd(this);3==this.readyState&&ud(this);}};
    k.Ua=function(a){this.g&&(this.response=this.responseText=a,td(this));};k.Ta=function(a){this.g&&(this.response=a,td(this));};k.ha=function(){this.g&&td(this);};function td(a){a.readyState=4;a.l=null;a.j=null;a.A=null;sd(a);}k.setRequestHeader=function(a,b){this.v.append(a,b);};k.getResponseHeader=function(a){return this.h?this.h.get(a.toLowerCase())||"":""};
    k.getAllResponseHeaders=function(){if(!this.h)return "";const a=[],b=this.h.entries();for(var c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function sd(a){a.onreadystatechange&&a.onreadystatechange.call(a);}Object.defineProperty(qd.prototype,"withCredentials",{get:function(){return "include"===this.m},set:function(a){this.m=a?"include":"same-origin";}});var vd=l.JSON.parse;function X(a){C.call(this);this.headers=new S;this.u=a||null;this.h=!1;this.C=this.g=null;this.H="";this.m=0;this.j="";this.l=this.F=this.v=this.D=!1;this.B=0;this.A=null;this.J=wd;this.K=this.L=!1;}t(X,C);var wd="",xd=/^https?$/i,yd=["POST","PUT"];k=X.prototype;
    k.ea=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.j="";this.m=0;this.D=!1;this.h=!0;this.g=this.u?this.u.g():cc.g();this.C=this.u?Zb(this.u):Zb(cc);this.g.onreadystatechange=q(this.Fa,this);try{this.F=!0,this.g.open(b,String(a),!0),this.F=!1;}catch(f){zd(this,f);return}a=c||"";const e=new S(this.headers);d&&Kc(d,function(f,h){e.set(h,f);});d=oa(e.T());c=l.FormData&&a instanceof l.FormData;
    !(0<=ma(yd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.g.setRequestHeader(h,f);},this);this.J&&(this.g.responseType=this.J);"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ad(this),0<this.B&&((this.K=Bd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q(this.pa,this)):this.A=Gb(this.pa,this.B,this)),this.v=!0,this.g.send(a),this.v=!1;}catch(f){zd(this,f);}};
    function Bd(a){return y&&Ra()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}function pa(a){return "content-type"==a.toLowerCase()}k.pa=function(){"undefined"!=typeof goog&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,D(this,"timeout"),this.abort(8));};function zd(a,b){a.h=!1;a.g&&(a.l=!0,a.g.abort(),a.l=!1);a.j=b;a.m=5;Cd(a);Dd(a);}function Cd(a){a.D||(a.D=!0,D(a,"complete"),D(a,"error"));}
    k.abort=function(a){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=a||7,D(this,"complete"),D(this,"abort"),Dd(this));};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dd(this,!0));X.Z.M.call(this);};k.Fa=function(){this.s||(this.F||this.v||this.l?Ed(this):this.cb());};k.cb=function(){Ed(this);};
    function Ed(a){if(a.h&&"undefined"!=typeof goog&&(!a.C[1]||4!=O(a)||2!=a.ba()))if(a.v&&4==O(a))Gb(a.Fa,0,a);else if(D(a,"readystatechange"),4==O(a)){a.h=!1;try{const n=a.ba();a:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var b=!0;break a;default:b=!1;}var c;if(!(c=b)){var d;if(d=0===n){var e=String(a.H).match(Mc)[1]||null;if(!e&&l.self&&l.self.location){var f=l.self.location.protocol;e=f.substr(0,f.length-1);}d=!xd.test(e?e.toLowerCase():"");}c=d;}if(c)D(a,"complete"),D(a,
    "success");else {a.m=6;try{var h=2<O(a)?a.g.statusText:"";}catch(u){h="";}a.j=h+" ["+a.ba()+"]";Cd(a);}}finally{Dd(a);}}}function Dd(a,b){if(a.g){Ad(a);const c=a.g,d=a.C[0]?aa:null;a.g=null;a.C=null;b||D(a,"ready");try{c.onreadystatechange=d;}catch(e){}}}function Ad(a){a.g&&a.K&&(a.g.ontimeout=null);a.A&&(l.clearTimeout(a.A),a.A=null);}function O(a){return a.g?a.g.readyState:0}k.ba=function(){try{return 2<O(this)?this.g.status:-1}catch(a){return -1}};
    k.ga=function(){try{return this.g?this.g.responseText:""}catch(a){return ""}};k.Qa=function(a){if(this.g){var b=this.g.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return vd(b)}};function oc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.J){case wd:case "text":return a.g.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(b){return null}}k.Da=function(){return this.m};
    k.La=function(){return "string"===typeof this.j?this.j:String(this.j)};function Fd(a){let b="";xa(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n";});return b}function Gd(a,b,c){a:{for(d in c){var d=!1;break a}d=!0;}d||(c=Fd(c),"string"===typeof a?(null!=c&&encodeURIComponent(String(c))):R(a,b,c));}function Hd(a,b,c){return c&&c.internalChannelParams?c.internalChannelParams[a]||b:b}
    function Id(a){this.za=0;this.l=[];this.h=new Mb;this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null;this.Za=this.V=0;this.Xa=Hd("failFast",!1,a);this.N=this.v=this.u=this.m=this.j=null;this.X=!0;this.I=this.ta=this.U=-1;this.Y=this.A=this.C=0;this.Pa=Hd("baseRetryDelayMs",5E3,a);this.$a=Hd("retryDelaySeedMs",1E4,a);this.Ya=Hd("forwardChannelMaxRetries",2,a);this.ra=Hd("forwardChannelRequestTimeoutMs",2E4,a);this.qa=a&&a.xmlHttpFactory||void 0;this.Ba=a&&a.Yb||!1;
    this.K=void 0;this.H=a&&a.supportsCrossDomainXhr||!1;this.J="";this.i=new gd(a&&a.concurrentRequestLimit);this.Ca=new ld;this.ja=a&&a.fastHandshake||!1;this.Ra=a&&a.Wb||!1;a&&a.Aa&&this.h.Aa();a&&a.forceLongPolling&&(this.X=!1);this.$=!this.ja&&this.X&&a&&a.detectBufferingProxy||!1;this.ka=void 0;this.O=0;this.L=!1;this.B=null;this.Wa=!a||!1!==a.Xb;}k=Id.prototype;k.ma=8;k.G=1;
    function Ic(a){Jd(a);if(3==a.G){var b=a.V++,c=N(a.F);R(c,"SID",a.J);R(c,"RID",b);R(c,"TYPE","terminate");Kd(a,c);b=new M(a,a.h,b,void 0);b.K=2;b.v=jc(N(c));c=!1;l.navigator&&l.navigator.sendBeacon&&(c=l.navigator.sendBeacon(b.v.toString(),""));!c&&l.Image&&((new Image).src=b.v,c=!0);c||(b.g=nc(b.l,null),b.g.ea(b.v));b.F=Date.now();lc(b);}Ld(a);}k.hb=function(a){try{this.h.info("Origin Trials invoked: "+a);}catch(b){}};function Ac(a){a.g&&(wc(a),a.g.cancel(),a.g=null);}
    function Jd(a){Ac(a);a.u&&(l.clearTimeout(a.u),a.u=null);zc(a);a.i.cancel();a.m&&("number"===typeof a.m&&l.clearTimeout(a.m),a.m=null);}function Md(a,b){a.l.push(new fd(a.Za++,b));3==a.G&&Hc(a);}function Hc(a){id(a.i)||a.m||(a.m=!0,zb(a.Ha,a),a.C=0);}function Nd(a,b){if(Cc(a.i)>=a.i.j-(a.m?1:0))return !1;if(a.m)return a.l=b.D.concat(a.l),!0;if(1==a.G||2==a.G||a.C>=(a.Xa?0:a.Ya))return !1;a.m=K(q(a.Ha,a,b),Od(a,a.C));a.C++;return !0}
    k.Ha=function(a){if(this.m)if(this.m=null,1==this.G){if(!a){this.V=Math.floor(1E5*Math.random());a=this.V++;const e=new M(this,this.h,a,void 0);let f=this.s;this.P&&(f?(f=ya(f),Aa(f,this.P)):f=this.P);null===this.o&&(e.H=f);if(this.ja)a:{var b=0;for(var c=0;c<this.l.length;c++){b:{var d=this.l[c];if("__data__"in d.g&&(d=d.g.__data__,"string"===typeof d)){d=d.length;break b}d=void 0;}if(void 0===d)break;b+=d;if(4096<b){b=c;break a}if(4096===b||c===this.l.length-1){b=c+1;break a}}b=1E3;}else b=1E3;b=
    Pd(this,e,b);c=N(this.F);R(c,"RID",a);R(c,"CVER",22);this.D&&R(c,"X-HTTP-Session-Id",this.D);Kd(this,c);this.o&&f&&Gd(c,this.o,f);Dc(this.i,e);this.Ra&&R(c,"TYPE","init");this.ja?(R(c,"$req",b),R(c,"SID","null"),e.$=!0,ic(e,c,null)):ic(e,c,b);this.G=2;}}else 3==this.G&&(a?Qd(this,a):0==this.l.length||id(this.i)||Qd(this));};
    function Qd(a,b){var c;b?c=b.m:c=a.V++;const d=N(a.F);R(d,"SID",a.J);R(d,"RID",c);R(d,"AID",a.U);Kd(a,d);a.o&&a.s&&Gd(d,a.o,a.s);c=new M(a,a.h,c,a.C+1);null===a.o&&(c.H=a.s);b&&(a.l=b.D.concat(a.l));b=Pd(a,c,1E3);c.setTimeout(Math.round(.5*a.ra)+Math.round(.5*a.ra*Math.random()));Dc(a.i,c);ic(c,d,b);}function Kd(a,b){a.j&&Kc({},function(c,d){R(b,d,c);});}
    function Pd(a,b,c){c=Math.min(a.l.length,c);var d=a.j?q(a.j.Oa,a.j,a):null;a:{var e=a.l;let f=-1;for(;;){const h=["count="+c];-1==f?0<c?(f=e[0].h,h.push("ofs="+f)):f=0:h.push("ofs="+f);let n=!0;for(let u=0;u<c;u++){let m=e[u].h;const r=e[u].g;m-=f;if(0>m)f=Math.max(0,e[u].h-100),n=!1;else try{md(r,h,"req"+m+"_");}catch(G){d&&d(r);}}if(n){d=h.join("&");break a}}}a=a.l.splice(0,c);b.D=a;return d}function Gc(a){a.g||a.u||(a.Y=1,zb(a.Ga,a),a.A=0);}
    function Bc(a){if(a.g||a.u||3<=a.A)return !1;a.Y++;a.u=K(q(a.Ga,a),Od(a,a.A));a.A++;return !0}k.Ga=function(){this.u=null;Rd(this);if(this.$&&!(this.L||null==this.g||0>=this.O)){var a=2*this.O;this.h.info("BP detection timer enabled: "+a);this.B=K(q(this.bb,this),a);}};k.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,J(10),Ac(this),Rd(this));};
    function wc(a){null!=a.B&&(l.clearTimeout(a.B),a.B=null);}function Rd(a){a.g=new M(a,a.h,"rpc",a.Y);null===a.o&&(a.g.H=a.s);a.g.O=0;var b=N(a.oa);R(b,"RID","rpc");R(b,"SID",a.J);R(b,"CI",a.N?"0":"1");R(b,"AID",a.U);Kd(a,b);R(b,"TYPE","xmlhttp");a.o&&a.s&&Gd(b,a.o,a.s);a.K&&a.g.setTimeout(a.K);var c=a.g;a=a.la;c.K=1;c.v=jc(N(b));c.s=null;c.U=!0;kc(c,a);}k.ab=function(){null!=this.v&&(this.v=null,Ac(this),Bc(this),J(19));};function zc(a){null!=a.v&&(l.clearTimeout(a.v),a.v=null);}
    function uc(a,b){var c=null;if(a.g==b){zc(a);wc(a);a.g=null;var d=2;}else if(yc(a.i,b))c=b.D,Fc(a.i,b),d=1;else return;a.I=b.N;if(0!=a.G)if(b.i)if(1==d){c=b.s?b.s.length:0;b=Date.now()-b.F;var e=a.C;d=Sb();D(d,new Vb(d,c,b,e));Hc(a);}else Gc(a);else if(e=b.o,3==e||0==e&&0<a.I||!(1==d&&Nd(a,b)||2==d&&Bc(a)))switch(c&&0<c.length&&(b=a.i,b.i=b.i.concat(c)),e){case 1:Q(a,5);break;case 4:Q(a,10);break;case 3:Q(a,6);break;default:Q(a,2);}}
    function Od(a,b){let c=a.Pa+Math.floor(Math.random()*a.$a);a.j||(c*=2);return c*b}function Q(a,b){a.h.info("Error code "+b);if(2==b){var c=null;a.j&&(c=null);var d=q(a.jb,a);c||(c=new U("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Oc(c,"https"),jc(c));nd(c.toString(),d);}else J(2);a.G=0;a.j&&a.j.va(b);Ld(a);Jd(a);}k.jb=function(a){a?(this.h.info("Successfully pinged google.com"),J(2)):(this.h.info("Failed to ping google.com"),J(1));};
    function Ld(a){a.G=0;a.I=-1;if(a.j){if(0!=jd(a.i).length||0!=a.l.length)a.i.i.length=0,ra(a.l),a.l.length=0;a.j.ua();}}function Ec(a,b,c){let d=ad(c);if(""!=d.i)b&&Pc(d,b+"."+d.i),Qc(d,d.m);else {const e=l.location;d=bd(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c);}a.aa&&xa(a.aa,function(e,f){R(d,f,e);});b=a.D;c=a.sa;b&&c&&R(d,b,c);R(d,"VER",a.ma);Kd(a,d);return d}
    function nc(a,b,c){if(b&&!a.H)throw Error("Can't create secondary domain capable XhrIo object.");b=c&&a.Ba&&!a.qa?new X(new pd({ib:!0})):new X(a.qa);b.L=a.H;return b}function Sd(){}k=Sd.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Oa=function(){};function Td(){if(y&&!(10<=Number(Ua)))throw Error("Environmental error: no available transport.");}Td.prototype.g=function(a,b){return new Y(a,b)};
    function Y(a,b){C.call(this);this.g=new Id(b);this.l=a;this.h=b&&b.messageUrlParams||null;a=b&&b.messageHeaders||null;b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.g.s=a;a=b&&b.initMessageHeaders||null;b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType});b&&b.ya&&(a?a["X-WebChannel-Client-Profile"]=b.ya:a={"X-WebChannel-Client-Profile":b.ya});this.g.P=
    a;(a=b&&b.httpHeadersOverwriteParam)&&!sa(a)&&(this.g.o=a);this.A=b&&b.supportsCrossDomainXhr||!1;this.v=b&&b.sendRawJson||!1;(b=b&&b.httpSessionIdParam)&&!sa(b)&&(this.g.D=b,a=this.h,null!==a&&b in a&&(a=this.h,b in a&&delete a[b]));this.j=new Z(this);}t(Y,C);Y.prototype.m=function(){this.g.j=this.j;this.A&&(this.g.H=!0);var a=this.g,b=this.l,c=this.h||void 0;a.Wa&&(a.h.info("Origin Trials enabled."),zb(q(a.hb,a,b)));J(0);a.W=b;a.aa=c||{};a.N=a.X;a.F=Ec(a,null,a.W);Hc(a);};Y.prototype.close=function(){Ic(this.g);};
    Y.prototype.u=function(a){if("string"===typeof a){var b={};b.__data__=a;Md(this.g,b);}else this.v?(b={},b.__data__=rb(a),Md(this.g,b)):Md(this.g,a);};Y.prototype.M=function(){this.g.j=null;delete this.j;Ic(this.g);delete this.g;Y.Z.M.call(this);};function Ud(a){ac.call(this);var b=a.__sm__;if(b){a:{for(const c in b){a=c;break a}a=void 0;}if(this.i=a)a=this.i,b=null!==b&&a in b?b[a]:void 0;this.data=b;}else this.data=a;}t(Ud,ac);function Vd(){bc.call(this);this.status=1;}t(Vd,bc);function Z(a){this.g=a;}
    t(Z,Sd);Z.prototype.xa=function(){D(this.g,"a");};Z.prototype.wa=function(a){D(this.g,new Ud(a));};Z.prototype.va=function(a){D(this.g,new Vd(a));};Z.prototype.ua=function(){D(this.g,"b");};/*

     Copyright 2017 Google LLC

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    Td.prototype.createWebChannel=Td.prototype.g;Y.prototype.send=Y.prototype.u;Y.prototype.open=Y.prototype.m;Y.prototype.close=Y.prototype.close;Wb.NO_ERROR=0;Wb.TIMEOUT=8;Wb.HTTP_ERROR=6;Xb.COMPLETE="complete";$b.EventType=L;L.OPEN="a";L.CLOSE="b";L.ERROR="c";L.MESSAGE="d";C.prototype.listen=C.prototype.N;X.prototype.listenOnce=X.prototype.O;X.prototype.getLastError=X.prototype.La;X.prototype.getLastErrorCode=X.prototype.Da;X.prototype.getStatus=X.prototype.ba;X.prototype.getResponseJson=X.prototype.Qa;
    X.prototype.getResponseText=X.prototype.ga;X.prototype.send=X.prototype.ea;var createWebChannelTransport = esm.createWebChannelTransport=function(){return new Td};var getStatEventTarget = esm.getStatEventTarget=function(){return Sb()};var ErrorCode = esm.ErrorCode=Wb;var EventType = esm.EventType=Xb;var Event = esm.Event=H;var Stat = esm.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20};var FetchXmlHttpFactory = esm.FetchXmlHttpFactory=pd;var WebChannel = esm.WebChannel=$b;
    var XhrIo = esm.XhrIo=X;

    const S$1 = "@firebase/firestore";

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Simple wrapper around a nullable UID. Mostly exists to make code more
     * readable.
     */
    class D$1 {
        constructor(t) {
            this.uid = t;
        }
        isAuthenticated() {
            return null != this.uid;
        }
        /**
         * Returns a key representing this user, suitable for inclusion in a
         * dictionary.
         */    toKey() {
            return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
        }
        isEqual(t) {
            return t.uid === this.uid;
        }
    }

    /** A user with a null UID. */ D$1.UNAUTHENTICATED = new D$1(null), 
    // TODO(mikelehen): Look into getting a proper uid-equivalent for
    // non-FirebaseAuth providers.
    D$1.GOOGLE_CREDENTIALS = new D$1("google-credentials-uid"), D$1.FIRST_PARTY = new D$1("first-party-uid"), 
    D$1.MOCK_USER = new D$1("mock-user");

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    let C$1 = "9.6.1";

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const N$1 = new Logger("@firebase/firestore");

    // Helper methods are needed because variables can't be exported as read/write
    function k$1() {
        return N$1.logLevel;
    }

    function $(t, ...e) {
        if (N$1.logLevel <= LogLevel.DEBUG) {
            const n = e.map(M$1);
            N$1.debug(`Firestore (${C$1}): ${t}`, ...n);
        }
    }

    function F$1(t, ...e) {
        if (N$1.logLevel <= LogLevel.ERROR) {
            const n = e.map(M$1);
            N$1.error(`Firestore (${C$1}): ${t}`, ...n);
        }
    }

    /**
     * @internal
     */ function O$1(t, ...e) {
        if (N$1.logLevel <= LogLevel.WARN) {
            const n = e.map(M$1);
            N$1.warn(`Firestore (${C$1}): ${t}`, ...n);
        }
    }

    /**
     * Converts an additional log parameter to a string representation.
     */ function M$1(t) {
        if ("string" == typeof t) return t;
        try {
            return e = t, JSON.stringify(e);
        } catch (e) {
            // Converting to JSON failed, just log the object directly
            return t;
        }
        /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
        /** Formats an object as a JSON string, suitable for logging. */
        var e;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Unconditionally fails, throwing an Error with the given message.
     * Messages are stripped in production builds.
     *
     * Returns `never` and can be used in expressions:
     * @example
     * let futureVar = fail('not implemented yet');
     */ function L$1(t = "Unexpected state") {
        // Log the failure in addition to throw an exception, just in case the
        // exception is swallowed.
        const e = `FIRESTORE (${C$1}) INTERNAL ASSERTION FAILED: ` + t;
        // NOTE: We don't use FirestoreError here because these are internal failures
        // that cannot be handled by the user. (Also it would create a circular
        // dependency between the error and assert modules which doesn't work.)
        throw F$1(e), new Error(e);
    }

    /**
     * Fails if the given assertion condition is false, throwing an Error with the
     * given message if it did.
     *
     * Messages are stripped in production builds.
     */ function B$1(t, e) {
        t || L$1();
    }

    /**
     * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
     * instance of `T` before casting.
     */ function q$1(t, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return t;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const K$1 = {
        // Causes are copied from:
        // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
        /** Not an error; returned on success. */
        OK: "ok",
        /** The operation was cancelled (typically by the caller). */
        CANCELLED: "cancelled",
        /** Unknown error or an error from a different error domain. */
        UNKNOWN: "unknown",
        /**
         * Client specified an invalid argument. Note that this differs from
         * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
         * problematic regardless of the state of the system (e.g., a malformed file
         * name).
         */
        INVALID_ARGUMENT: "invalid-argument",
        /**
         * Deadline expired before operation could complete. For operations that
         * change the state of the system, this error may be returned even if the
         * operation has completed successfully. For example, a successful response
         * from a server could have been delayed long enough for the deadline to
         * expire.
         */
        DEADLINE_EXCEEDED: "deadline-exceeded",
        /** Some requested entity (e.g., file or directory) was not found. */
        NOT_FOUND: "not-found",
        /**
         * Some entity that we attempted to create (e.g., file or directory) already
         * exists.
         */
        ALREADY_EXISTS: "already-exists",
        /**
         * The caller does not have permission to execute the specified operation.
         * PERMISSION_DENIED must not be used for rejections caused by exhausting
         * some resource (use RESOURCE_EXHAUSTED instead for those errors).
         * PERMISSION_DENIED must not be used if the caller can not be identified
         * (use UNAUTHENTICATED instead for those errors).
         */
        PERMISSION_DENIED: "permission-denied",
        /**
         * The request does not have valid authentication credentials for the
         * operation.
         */
        UNAUTHENTICATED: "unauthenticated",
        /**
         * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
         * entire file system is out of space.
         */
        RESOURCE_EXHAUSTED: "resource-exhausted",
        /**
         * Operation was rejected because the system is not in a state required for
         * the operation's execution. For example, directory to be deleted may be
         * non-empty, an rmdir operation is applied to a non-directory, etc.
         *
         * A litmus test that may help a service implementor in deciding
         * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
         *  (a) Use UNAVAILABLE if the client can retry just the failing call.
         *  (b) Use ABORTED if the client should retry at a higher-level
         *      (e.g., restarting a read-modify-write sequence).
         *  (c) Use FAILED_PRECONDITION if the client should not retry until
         *      the system state has been explicitly fixed. E.g., if an "rmdir"
         *      fails because the directory is non-empty, FAILED_PRECONDITION
         *      should be returned since the client should not retry unless
         *      they have first fixed up the directory by deleting files from it.
         *  (d) Use FAILED_PRECONDITION if the client performs conditional
         *      REST Get/Update/Delete on a resource and the resource on the
         *      server does not match the condition. E.g., conflicting
         *      read-modify-write on the same resource.
         */
        FAILED_PRECONDITION: "failed-precondition",
        /**
         * The operation was aborted, typically due to a concurrency issue like
         * sequencer check failures, transaction aborts, etc.
         *
         * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
         * and UNAVAILABLE.
         */
        ABORTED: "aborted",
        /**
         * Operation was attempted past the valid range. E.g., seeking or reading
         * past end of file.
         *
         * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
         * if the system state changes. For example, a 32-bit file system will
         * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
         * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
         * an offset past the current file size.
         *
         * There is a fair bit of overlap between FAILED_PRECONDITION and
         * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
         * when it applies so that callers who are iterating through a space can
         * easily look for an OUT_OF_RANGE error to detect when they are done.
         */
        OUT_OF_RANGE: "out-of-range",
        /** Operation is not implemented or not supported/enabled in this service. */
        UNIMPLEMENTED: "unimplemented",
        /**
         * Internal errors. Means some invariants expected by underlying System has
         * been broken. If you see one of these errors, Something is very broken.
         */
        INTERNAL: "internal",
        /**
         * The service is currently unavailable. This is a most likely a transient
         * condition and may be corrected by retrying with a backoff.
         *
         * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
         * and UNAVAILABLE.
         */
        UNAVAILABLE: "unavailable",
        /** Unrecoverable data loss or corruption. */
        DATA_LOSS: "data-loss"
    };

    /** An error returned by a Firestore operation. */ class j extends Error {
        /** @hideconstructor */
        constructor(
        /**
         * The backend error code associated with this error.
         */
        t, 
        /**
         * A custom error description.
         */
        e) {
            super(e), this.code = t, this.message = e, 
            /** The custom name for all FirestoreErrors. */
            this.name = "FirebaseError", 
            // HACK: We write a toString property directly because Error is not a real
            // class and so inheritance does not work correctly. We could alternatively
            // do the same "back-door inheritance" trick that FirebaseError does.
            this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class Q$1 {
        constructor() {
            this.promise = new Promise(((t, e) => {
                this.resolve = t, this.reject = e;
            }));
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class W$1 {
        constructor(t, e) {
            this.user = e, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${t}`);
        }
    }

    /**
     * A CredentialsProvider that always yields an empty token.
     * @internal
     */ class G {
        getToken() {
            return Promise.resolve(null);
        }
        invalidateToken() {}
        start(t, e) {
            // Fire with initial user.
            t.enqueueRetryable((() => e(D$1.UNAUTHENTICATED)));
        }
        shutdown() {}
    }

    class H$1 {
        constructor(t) {
            this.t = t, 
            /** Tracks the current User. */
            this.currentUser = D$1.UNAUTHENTICATED, 
            /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
            this.i = 0, this.forceRefresh = !1, this.auth = null;
        }
        start(t, e) {
            let n = this.i;
            // A change listener that prevents double-firing for the same token change.
                    const s = t => this.i !== n ? (n = this.i, e(t)) : Promise.resolve();
            // A promise that can be waited on to block on the next token change.
            // This promise is re-created after each change.
                    let i = new Q$1;
            this.o = () => {
                this.i++, this.currentUser = this.u(), i.resolve(), i = new Q$1, t.enqueueRetryable((() => s(this.currentUser)));
            };
            const r = () => {
                const e = i;
                t.enqueueRetryable((async () => {
                    await e.promise, await s(this.currentUser);
                }));
            }, o = t => {
                $("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t, this.auth.addAuthTokenListener(this.o), 
                r();
            };
            this.t.onInit((t => o(t))), 
            // Our users can initialize Auth right after Firestore, so we give it
            // a chance to register itself with the component framework before we
            // determine whether to start up in unauthenticated mode.
            setTimeout((() => {
                if (!this.auth) {
                    const t = this.t.getImmediate({
                        optional: !0
                    });
                    t ? o(t) : (
                    // If auth is still not available, proceed with `null` user
                    $("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new Q$1);
                }
            }), 0), r();
        }
        getToken() {
            // Take note of the current value of the tokenCounter so that this method
            // can fail (with an ABORTED error) if there is a token change while the
            // request is outstanding.
            const t = this.i, e = this.forceRefresh;
            return this.forceRefresh = !1, this.auth ? this.auth.getToken(e).then((e => 
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            this.i !== t ? ($("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), 
            this.getToken()) : e ? (B$1("string" == typeof e.accessToken), new W$1(e.accessToken, this.currentUser)) : null)) : Promise.resolve(null);
        }
        invalidateToken() {
            this.forceRefresh = !0;
        }
        shutdown() {
            this.auth && this.auth.removeAuthTokenListener(this.o);
        }
        // Auth.getUid() can return null even with a user logged in. It is because
        // getUid() is synchronous, but the auth code populating Uid is asynchronous.
        // This method should only be called in the AuthTokenListener callback
        // to guarantee to get the actual user.
        u() {
            const t = this.auth && this.auth.getUid();
            return B$1(null === t || "string" == typeof t), new D$1(t);
        }
    }

    /*
     * FirstPartyToken provides a fresh token each time its value
     * is requested, because if the token is too old, requests will be rejected.
     * Technically this may no longer be necessary since the SDK should gracefully
     * recover from unauthenticated errors (see b/33147818 for context), but it's
     * safer to keep the implementation as-is.
     */ class J$1 {
        constructor(t, e, n) {
            this.type = "FirstParty", this.user = D$1.FIRST_PARTY, this.headers = new Map, this.headers.set("X-Goog-AuthUser", e);
            const s = t.auth.getAuthHeaderValueForFirstParty([]);
            s && this.headers.set("Authorization", s), n && this.headers.set("X-Goog-Iam-Authorization-Token", n);
        }
    }

    /*
     * Provides user credentials required for the Firestore JavaScript SDK
     * to authenticate the user, using technique that is only available
     * to applications hosted by Google.
     */ class Y$1 {
        constructor(t, e, n) {
            this.h = t, this.l = e, this.m = n;
        }
        getToken() {
            return Promise.resolve(new J$1(this.h, this.l, this.m));
        }
        start(t, e) {
            // Fire with initial uid.
            t.enqueueRetryable((() => e(D$1.FIRST_PARTY)));
        }
        shutdown() {}
        invalidateToken() {}
    }

    class X$1 {
        constructor(t) {
            this.value = t, this.type = "AppCheck", this.headers = new Map, t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
        }
    }

    class Z$1 {
        constructor(t) {
            this.g = t, this.forceRefresh = !1, this.appCheck = null;
        }
        start(t, e) {
            this.o = n => {
                t.enqueueRetryable((() => (t => (null != t.error && $("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`), 
                e(t.token)))(n)));
            };
            const n = t => {
                $("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t, this.appCheck.addTokenListener(this.o);
            };
            this.g.onInit((t => n(t))), 
            // Our users can initialize AppCheck after Firestore, so we give it
            // a chance to register itself with the component framework.
            setTimeout((() => {
                if (!this.appCheck) {
                    const t = this.g.getImmediate({
                        optional: !0
                    });
                    t ? n(t) : 
                    // If AppCheck is still not available, proceed without it.
                    $("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
                }
            }), 0);
        }
        getToken() {
            const t = this.forceRefresh;
            return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(t).then((t => t ? (B$1("string" == typeof t.token), 
            new X$1(t.token)) : null)) : Promise.resolve(null);
        }
        invalidateToken() {
            this.forceRefresh = !0;
        }
        shutdown() {
            this.appCheck && this.appCheck.removeTokenListener(this.o);
        }
    }

    /**
     * Builds a CredentialsProvider depending on the type of
     * the credentials passed in.
     */
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
     * exceed. All subsequent calls to next will return increasing values. If provided with a
     * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
     * well as write out sequence numbers that it produces via `next()`.
     */
    class et {
        constructor(t, e) {
            this.previousValue = t, e && (e.sequenceNumberHandler = t => this.p(t), this.T = t => e.writeSequenceNumber(t));
        }
        p(t) {
            return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
        }
        next() {
            const t = ++this.previousValue;
            return this.T && this.T(t), t;
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Generates `nBytes` of random bytes.
     *
     * If `nBytes < 0` , an error will be thrown.
     */
    function nt(t) {
        // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
        const e = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
        if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
        // Falls back to Math.random
        for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
        return n;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ et.I = -1;

    class st {
        static A() {
            // Alphanumeric characters
            const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
            // The largest byte value that is a multiple of `char.length`.
                    let n = "";
            for (;n.length < 20; ) {
                const s = nt(40);
                for (let i = 0; i < s.length; ++i) 
                // Only accept values that are [0, maxMultiple), this ensures they can
                // be evenly mapped to indices of `chars` via a modulo operation.
                n.length < 20 && s[i] < e && (n += t.charAt(s[i] % t.length));
            }
            return n;
        }
    }

    function it(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
    }

    /** Helper to compare arrays using isEqual(). */ function rt(t, e, n) {
        return t.length === e.length && t.every(((t, s) => n(t, e[s])));
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
    /**
     * A `Timestamp` represents a point in time independent of any time zone or
     * calendar, represented as seconds and fractions of seconds at nanosecond
     * resolution in UTC Epoch time.
     *
     * It is encoded using the Proleptic Gregorian Calendar which extends the
     * Gregorian calendar backwards to year one. It is encoded assuming all minutes
     * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
     * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59.999999999Z.
     *
     * For examples and further specifications, refer to the
     * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
     */
    class at {
        /**
         * Creates a new timestamp.
         *
         * @param seconds - The number of seconds of UTC time since Unix epoch
         *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
         *     9999-12-31T23:59:59Z inclusive.
         * @param nanoseconds - The non-negative fractions of a second at nanosecond
         *     resolution. Negative second values with fractions must still have
         *     non-negative nanoseconds values that count forward in time. Must be
         *     from 0 to 999,999,999 inclusive.
         */
        constructor(
        /**
         * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
         */
        t, 
        /**
         * The fractions of a second at nanosecond resolution.*
         */
        e) {
            if (this.seconds = t, this.nanoseconds = e, e < 0) throw new j(K$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
            if (e >= 1e9) throw new j(K$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
            if (t < -62135596800) throw new j(K$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
            // This will break in the year 10,000.
                    if (t >= 253402300800) throw new j(K$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        }
        /**
         * Creates a new timestamp with the current date, with millisecond precision.
         *
         * @returns a new timestamp representing the current date.
         */    static now() {
            return at.fromMillis(Date.now());
        }
        /**
         * Creates a new timestamp from the given date.
         *
         * @param date - The date to initialize the `Timestamp` from.
         * @returns A new `Timestamp` representing the same point in time as the given
         *     date.
         */    static fromDate(t) {
            return at.fromMillis(t.getTime());
        }
        /**
         * Creates a new timestamp from the given number of milliseconds.
         *
         * @param milliseconds - Number of milliseconds since Unix epoch
         *     1970-01-01T00:00:00Z.
         * @returns A new `Timestamp` representing the same point in time as the given
         *     number of milliseconds.
         */    static fromMillis(t) {
            const e = Math.floor(t / 1e3), n = Math.floor(1e6 * (t - 1e3 * e));
            return new at(e, n);
        }
        /**
         * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
         * causes a loss of precision since `Date` objects only support millisecond
         * precision.
         *
         * @returns JavaScript `Date` object representing the same point in time as
         *     this `Timestamp`, with millisecond precision.
         */    toDate() {
            return new Date(this.toMillis());
        }
        /**
         * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
         * epoch). This operation causes a loss of precision.
         *
         * @returns The point in time corresponding to this timestamp, represented as
         *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
         */    toMillis() {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }
        _compareTo(t) {
            return this.seconds === t.seconds ? it(this.nanoseconds, t.nanoseconds) : it(this.seconds, t.seconds);
        }
        /**
         * Returns true if this `Timestamp` is equal to the provided one.
         *
         * @param other - The `Timestamp` to compare against.
         * @returns true if this `Timestamp` is equal to the provided one.
         */    isEqual(t) {
            return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
        }
        /** Returns a textual representation of this `Timestamp`. */    toString() {
            return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
        }
        /** Returns a JSON-serializable representation of this `Timestamp`. */    toJSON() {
            return {
                seconds: this.seconds,
                nanoseconds: this.nanoseconds
            };
        }
        /**
         * Converts this object to a primitive string, which allows `Timestamp` objects
         * to be compared using the `>`, `<=`, `>=` and `>` operators.
         */    valueOf() {
            // This method returns a string of the form <seconds>.<nanoseconds> where
            // <seconds> is translated to have a non-negative value and both <seconds>
            // and <nanoseconds> are left-padded with zeroes to be a consistent length.
            // Strings with this format then have a lexiographical ordering that matches
            // the expected ordering. The <seconds> translation is done to avoid having
            // a leading negative sign (i.e. a leading '-' character) in its string
            // representation, which would affect its lexiographical ordering.
            const t = this.seconds - -62135596800;
            // Note: Up to 12 decimal digits are required to represent all valid
            // 'seconds' values.
                    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A version of a document in Firestore. This corresponds to the version
     * timestamp, such as update_time or read_time.
     */ class ct {
        constructor(t) {
            this.timestamp = t;
        }
        static fromTimestamp(t) {
            return new ct(t);
        }
        static min() {
            return new ct(new at(0, 0));
        }
        compareTo(t) {
            return this.timestamp._compareTo(t.timestamp);
        }
        isEqual(t) {
            return this.timestamp.isEqual(t.timestamp);
        }
        /** Returns a number representation of the version for use in spec tests. */    toMicroseconds() {
            // Convert to microseconds.
            return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
        }
        toString() {
            return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }
        toTimestamp() {
            return this.timestamp;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function ut(t) {
        let e = 0;
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
        return e;
    }

    function ht(t, e) {
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
    }

    function lt(t) {
        for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Path represents an ordered sequence of string segments.
     */
    class ft {
        constructor(t, e, n) {
            void 0 === e ? e = 0 : e > t.length && L$1(), void 0 === n ? n = t.length - e : n > t.length - e && L$1(), 
            this.segments = t, this.offset = e, this.len = n;
        }
        get length() {
            return this.len;
        }
        isEqual(t) {
            return 0 === ft.comparator(this, t);
        }
        child(t) {
            const e = this.segments.slice(this.offset, this.limit());
            return t instanceof ft ? t.forEach((t => {
                e.push(t);
            })) : e.push(t), this.construct(e);
        }
        /** The index of one past the last segment of the path. */    limit() {
            return this.offset + this.length;
        }
        popFirst(t) {
            return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
        }
        popLast() {
            return this.construct(this.segments, this.offset, this.length - 1);
        }
        firstSegment() {
            return this.segments[this.offset];
        }
        lastSegment() {
            return this.get(this.length - 1);
        }
        get(t) {
            return this.segments[this.offset + t];
        }
        isEmpty() {
            return 0 === this.length;
        }
        isPrefixOf(t) {
            if (t.length < this.length) return !1;
            for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
            return !0;
        }
        isImmediateParentOf(t) {
            if (this.length + 1 !== t.length) return !1;
            for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
            return !0;
        }
        forEach(t) {
            for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
        }
        toArray() {
            return this.segments.slice(this.offset, this.limit());
        }
        static comparator(t, e) {
            const n = Math.min(t.length, e.length);
            for (let s = 0; s < n; s++) {
                const n = t.get(s), i = e.get(s);
                if (n < i) return -1;
                if (n > i) return 1;
            }
            return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
        }
    }

    /**
     * A slash-separated path for navigating resources (documents and collections)
     * within Firestore.
     *
     * @internal
     */ class dt extends ft {
        construct(t, e, n) {
            return new dt(t, e, n);
        }
        canonicalString() {
            // NOTE: The client is ignorant of any path segments containing escape
            // sequences (e.g. __id123__) and just passes them through raw (they exist
            // for legacy reasons and should not be used frequently).
            return this.toArray().join("/");
        }
        toString() {
            return this.canonicalString();
        }
        /**
         * Creates a resource path from the given slash-delimited string. If multiple
         * arguments are provided, all components are combined. Leading and trailing
         * slashes from all components are ignored.
         */    static fromString(...t) {
            // NOTE: The client is ignorant of any path segments containing escape
            // sequences (e.g. __id123__) and just passes them through raw (they exist
            // for legacy reasons and should not be used frequently).
            const e = [];
            for (const n of t) {
                if (n.indexOf("//") >= 0) throw new j(K$1.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
                // Strip leading and traling slashed.
                            e.push(...n.split("/").filter((t => t.length > 0)));
            }
            return new dt(e);
        }
        static emptyPath() {
            return new dt([]);
        }
    }

    const wt = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

    /**
     * A dot-separated path for navigating sub-objects within a document.
     * @internal
     */ class _t extends ft {
        construct(t, e, n) {
            return new _t(t, e, n);
        }
        /**
         * Returns true if the string could be used as a segment in a field path
         * without escaping.
         */    static isValidIdentifier(t) {
            return wt.test(t);
        }
        canonicalString() {
            return this.toArray().map((t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), 
            _t.isValidIdentifier(t) || (t = "`" + t + "`"), t))).join(".");
        }
        toString() {
            return this.canonicalString();
        }
        /**
         * Returns true if this field references the key of a document.
         */    isKeyField() {
            return 1 === this.length && "__name__" === this.get(0);
        }
        /**
         * The field designating the key of a document.
         */    static keyField() {
            return new _t([ "__name__" ]);
        }
        /**
         * Parses a field string from the given server-formatted string.
         *
         * - Splitting the empty string is not allowed (for now at least).
         * - Empty segments within the string (e.g. if there are two consecutive
         *   separators) are not allowed.
         *
         * TODO(b/37244157): we should make this more strict. Right now, it allows
         * non-identifier path components, even if they aren't escaped.
         */    static fromServerFormat(t) {
            const e = [];
            let n = "", s = 0;
            const i = () => {
                if (0 === n.length) throw new j(K$1.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
                e.push(n), n = "";
            };
            let r = !1;
            for (;s < t.length; ) {
                const e = t[s];
                if ("\\" === e) {
                    if (s + 1 === t.length) throw new j(K$1.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                    const e = t[s + 1];
                    if ("\\" !== e && "." !== e && "`" !== e) throw new j(K$1.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                    n += e, s += 2;
                } else "`" === e ? (r = !r, s++) : "." !== e || r ? (n += e, s++) : (i(), s++);
            }
            if (i(), r) throw new j(K$1.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
            return new _t(e);
        }
        static emptyPath() {
            return new _t([]);
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Provides a set of fields that can be used to partially patch a document.
     * FieldMask is used in conjunction with ObjectValue.
     * Examples:
     *   foo - Overwrites foo entirely with the provided value. If foo is not
     *         present in the companion ObjectValue, the field is deleted.
     *   foo.bar - Overwrites only the field bar of the object foo.
     *             If foo is not an object, foo is replaced with an object
     *             containing foo
     */ class mt {
        constructor(t) {
            this.fields = t, 
            // TODO(dimond): validation of FieldMask
            // Sort the field mask to support `FieldMask.isEqual()` and assert below.
            t.sort(_t.comparator);
        }
        /**
         * Verifies that `fieldPath` is included by at least one field in this field
         * mask.
         *
         * This is an O(n) operation, where `n` is the size of the field mask.
         */    covers(t) {
            for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
            return !1;
        }
        isEqual(t) {
            return rt(this.fields, t.fields, ((t, e) => t.isEqual(e)));
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Immutable class that represents a "proto" byte string.
     *
     * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
     * sent on the wire. This class abstracts away this differentiation by holding
     * the proto byte string in a common class that must be converted into a string
     * before being sent as a proto.
     * @internal
     */ class yt {
        constructor(t) {
            this.binaryString = t;
        }
        static fromBase64String(t) {
            const e = atob(t);
            return new yt(e);
        }
        static fromUint8Array(t) {
            const e = 
            /**
     * Helper function to convert an Uint8array to a binary string.
     */
            function(t) {
                let e = "";
                for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
                return e;
            }
            /**
     * Helper function to convert a binary string to an Uint8Array.
     */ (t);
            return new yt(e);
        }
        toBase64() {
            return t = this.binaryString, btoa(t);
            /** Converts a binary string to a Base64 encoded string. */
            var t;
        }
        toUint8Array() {
            return function(t) {
                const e = new Uint8Array(t.length);
                for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                return e;
            }
            /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
            // A RegExp matching ISO 8601 UTC timestamps with optional fraction.
            (this.binaryString);
        }
        approximateByteSize() {
            return 2 * this.binaryString.length;
        }
        compareTo(t) {
            return it(this.binaryString, t.binaryString);
        }
        isEqual(t) {
            return this.binaryString === t.binaryString;
        }
    }

    yt.EMPTY_BYTE_STRING = new yt("");

    const pt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

    /**
     * Converts the possible Proto values for a timestamp value into a "seconds and
     * nanos" representation.
     */ function Tt(t) {
        // The json interface (for the browser) will return an iso timestamp string,
        // while the proto js library (for node) will return a
        // google.protobuf.Timestamp instance.
        if (B$1(!!t), "string" == typeof t) {
            // The date string can have higher precision (nanos) than the Date class
            // (millis), so we do some custom parsing here.
            // Parse the nanos right out of the string.
            let e = 0;
            const n = pt.exec(t);
            if (B$1(!!n), n[1]) {
                // Pad the fraction out to 9 digits (nanos).
                let t = n[1];
                t = (t + "000000000").substr(0, 9), e = Number(t);
            }
            // Parse the date to get the seconds.
                    const s = new Date(t);
            return {
                seconds: Math.floor(s.getTime() / 1e3),
                nanos: e
            };
        }
        return {
            seconds: Et(t.seconds),
            nanos: Et(t.nanos)
        };
    }

    /**
     * Converts the possible Proto types for numbers into a JavaScript number.
     * Returns 0 if the value is not numeric.
     */ function Et(t) {
        // TODO(bjornick): Handle int64 greater than 53 bits.
        return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
    }

    /** Converts the possible Proto types for Blobs into a ByteString. */ function It(t) {
        return "string" == typeof t ? yt.fromBase64String(t) : yt.fromUint8Array(t);
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Represents a locally-applied ServerTimestamp.
     *
     * Server Timestamps are backed by MapValues that contain an internal field
     * `__type__` with a value of `server_timestamp`. The previous value and local
     * write time are stored in its `__previous_value__` and `__local_write_time__`
     * fields respectively.
     *
     * Notes:
     * - ServerTimestampValue instances are created as the result of applying a
     *   transform. They can only exist in the local view of a document. Therefore
     *   they do not need to be parsed or serialized.
     * - When evaluated locally (e.g. for snapshot.data()), they by default
     *   evaluate to `null`. This behavior can be configured by passing custom
     *   FieldValueOptions to value().
     * - With respect to other ServerTimestampValues, they sort by their
     *   localWriteTime.
     */ function At(t) {
        var e, n;
        return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
    }

    /**
     * Creates a new ServerTimestamp proto value (using the internal format).
     */
    /**
     * Returns the value of the field before this ServerTimestamp was set.
     *
     * Preserving the previous values allows the user to display the last resoled
     * value until the backend responds with the timestamp.
     */
    function Rt(t) {
        const e = t.mapValue.fields.__previous_value__;
        return At(e) ? Rt(e) : e;
    }

    /**
     * Returns the local time at which this timestamp was first set.
     */ function Pt(t) {
        const e = Tt(t.mapValue.fields.__local_write_time__.timestampValue);
        return new at(e.seconds, e.nanos);
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /** Sentinel value that sorts before any Mutation Batch ID. */
    /**
     * Returns whether a variable is either undefined or null.
     */
    function bt(t) {
        return null == t;
    }

    /** Returns whether the value represents -0. */ function vt(t) {
        // Detect if the value is -0.0. Based on polyfill from
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
        return 0 === t && 1 / t == -1 / 0;
    }

    /**
     * Returns whether a value is an integer and in the safe integer range
     * @param value - The value to test for being an integer and in the safe range
     */ function Vt(t) {
        return "number" == typeof t && Number.isInteger(t) && !vt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @internal
     */ class St {
        constructor(t) {
            this.path = t;
        }
        static fromPath(t) {
            return new St(dt.fromString(t));
        }
        static fromName(t) {
            return new St(dt.fromString(t).popFirst(5));
        }
        /** Returns true if the document is in the specified collectionId. */    hasCollectionId(t) {
            return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
        }
        isEqual(t) {
            return null !== t && 0 === dt.comparator(this.path, t.path);
        }
        toString() {
            return this.path.toString();
        }
        static comparator(t, e) {
            return dt.comparator(t.path, e.path);
        }
        static isDocumentKey(t) {
            return t.length % 2 == 0;
        }
        /**
         * Creates and returns a new document key with the given segments.
         *
         * @param segments - The segments of the path to the document
         * @returns A new instance of DocumentKey
         */    static fromSegments(t) {
            return new St(new dt(t.slice()));
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /** Extracts the backend's type order for the provided value. */ function Dt(t) {
        return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? At(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : L$1();
    }

    /** Tests `left` and `right` for equality based on the backend semantics. */ function Ct(t, e) {
        const n = Dt(t);
        if (n !== Dt(e)) return !1;
        switch (n) {
          case 0 /* NullValue */ :
            return !0;

          case 1 /* BooleanValue */ :
            return t.booleanValue === e.booleanValue;

          case 4 /* ServerTimestampValue */ :
            return Pt(t).isEqual(Pt(e));

          case 3 /* TimestampValue */ :
            return function(t, e) {
                if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
                // Use string equality for ISO 8601 timestamps
                return t.timestampValue === e.timestampValue;
                const n = Tt(t.timestampValue), s = Tt(e.timestampValue);
                return n.seconds === s.seconds && n.nanos === s.nanos;
            }(t, e);

          case 5 /* StringValue */ :
            return t.stringValue === e.stringValue;

          case 6 /* BlobValue */ :
            return function(t, e) {
                return It(t.bytesValue).isEqual(It(e.bytesValue));
            }(t, e);

          case 7 /* RefValue */ :
            return t.referenceValue === e.referenceValue;

          case 8 /* GeoPointValue */ :
            return function(t, e) {
                return Et(t.geoPointValue.latitude) === Et(e.geoPointValue.latitude) && Et(t.geoPointValue.longitude) === Et(e.geoPointValue.longitude);
            }(t, e);

          case 2 /* NumberValue */ :
            return function(t, e) {
                if ("integerValue" in t && "integerValue" in e) return Et(t.integerValue) === Et(e.integerValue);
                if ("doubleValue" in t && "doubleValue" in e) {
                    const n = Et(t.doubleValue), s = Et(e.doubleValue);
                    return n === s ? vt(n) === vt(s) : isNaN(n) && isNaN(s);
                }
                return !1;
            }(t, e);

          case 9 /* ArrayValue */ :
            return rt(t.arrayValue.values || [], e.arrayValue.values || [], Ct);

          case 10 /* ObjectValue */ :
            return function(t, e) {
                const n = t.mapValue.fields || {}, s = e.mapValue.fields || {};
                if (ut(n) !== ut(s)) return !1;
                for (const t in n) if (n.hasOwnProperty(t) && (void 0 === s[t] || !Ct(n[t], s[t]))) return !1;
                return !0;
            }
            /** Returns true if the ArrayValue contains the specified element. */ (t, e);

          default:
            return L$1();
        }
    }

    function Nt(t, e) {
        return void 0 !== (t.values || []).find((t => Ct(t, e)));
    }

    function kt(t, e) {
        const n = Dt(t), s = Dt(e);
        if (n !== s) return it(n, s);
        switch (n) {
          case 0 /* NullValue */ :
            return 0;

          case 1 /* BooleanValue */ :
            return it(t.booleanValue, e.booleanValue);

          case 2 /* NumberValue */ :
            return function(t, e) {
                const n = Et(t.integerValue || t.doubleValue), s = Et(e.integerValue || e.doubleValue);
                return n < s ? -1 : n > s ? 1 : n === s ? 0 : 
                // one or both are NaN.
                isNaN(n) ? isNaN(s) ? 0 : -1 : 1;
            }(t, e);

          case 3 /* TimestampValue */ :
            return xt(t.timestampValue, e.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return xt(Pt(t), Pt(e));

          case 5 /* StringValue */ :
            return it(t.stringValue, e.stringValue);

          case 6 /* BlobValue */ :
            return function(t, e) {
                const n = It(t), s = It(e);
                return n.compareTo(s);
            }(t.bytesValue, e.bytesValue);

          case 7 /* RefValue */ :
            return function(t, e) {
                const n = t.split("/"), s = e.split("/");
                for (let t = 0; t < n.length && t < s.length; t++) {
                    const e = it(n[t], s[t]);
                    if (0 !== e) return e;
                }
                return it(n.length, s.length);
            }(t.referenceValue, e.referenceValue);

          case 8 /* GeoPointValue */ :
            return function(t, e) {
                const n = it(Et(t.latitude), Et(e.latitude));
                if (0 !== n) return n;
                return it(Et(t.longitude), Et(e.longitude));
            }(t.geoPointValue, e.geoPointValue);

          case 9 /* ArrayValue */ :
            return function(t, e) {
                const n = t.values || [], s = e.values || [];
                for (let t = 0; t < n.length && t < s.length; ++t) {
                    const e = kt(n[t], s[t]);
                    if (e) return e;
                }
                return it(n.length, s.length);
            }(t.arrayValue, e.arrayValue);

          case 10 /* ObjectValue */ :
            return function(t, e) {
                const n = t.fields || {}, s = Object.keys(n), i = e.fields || {}, r = Object.keys(i);
                // Even though MapValues are likely sorted correctly based on their insertion
                // order (e.g. when received from the backend), local modifications can bring
                // elements out of order. We need to re-sort the elements to ensure that
                // canonical IDs are independent of insertion order.
                s.sort(), r.sort();
                for (let t = 0; t < s.length && t < r.length; ++t) {
                    const e = it(s[t], r[t]);
                    if (0 !== e) return e;
                    const o = kt(n[s[t]], i[r[t]]);
                    if (0 !== o) return o;
                }
                return it(s.length, r.length);
            }
            /**
     * Generates the canonical ID for the provided field value (as used in Target
     * serialization).
     */ (t.mapValue, e.mapValue);

          default:
            throw L$1();
        }
    }

    function xt(t, e) {
        if ("string" == typeof t && "string" == typeof e && t.length === e.length) return it(t, e);
        const n = Tt(t), s = Tt(e), i = it(n.seconds, s.seconds);
        return 0 !== i ? i : it(n.nanos, s.nanos);
    }

    function $t(t) {
        return Ft(t);
    }

    function Ft(t) {
        return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
            const e = Tt(t);
            return `time(${e.seconds},${e.nanos})`;
        }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? It(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
        St.fromName(n).toString()) : "geoPointValue" in t ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t ? function(t) {
            let e = "[", n = !0;
            for (const s of t.values || []) n ? n = !1 : e += ",", e += Ft(s);
            return e + "]";
        }
        /** Returns a reference value for the provided database and key. */ (t.arrayValue) : "mapValue" in t ? function(t) {
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            const e = Object.keys(t.fields || {}).sort();
            let n = "{", s = !0;
            for (const i of e) s ? s = !1 : n += ",", n += `${i}:${Ft(t.fields[i])}`;
            return n + "}";
        }(t.mapValue) : L$1();
        var e, n;
    }

    function Ot(t, e) {
        return {
            referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
        };
    }

    /** Returns true if `value` is an IntegerValue . */ function Mt(t) {
        return !!t && "integerValue" in t;
    }

    /** Returns true if `value` is a DoubleValue. */
    /** Returns true if `value` is an ArrayValue. */
    function Lt(t) {
        return !!t && "arrayValue" in t;
    }

    /** Returns true if `value` is a NullValue. */ function Bt(t) {
        return !!t && "nullValue" in t;
    }

    /** Returns true if `value` is NaN. */ function Ut(t) {
        return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
    }

    /** Returns true if `value` is a MapValue. */ function qt(t) {
        return !!t && "mapValue" in t;
    }

    /** Creates a deep copy of `source`. */ function Kt(t) {
        if (t.geoPointValue) return {
            geoPointValue: Object.assign({}, t.geoPointValue)
        };
        if (t.timestampValue && "object" == typeof t.timestampValue) return {
            timestampValue: Object.assign({}, t.timestampValue)
        };
        if (t.mapValue) {
            const e = {
                mapValue: {
                    fields: {}
                }
            };
            return ht(t.mapValue.fields, ((t, n) => e.mapValue.fields[t] = Kt(n))), e;
        }
        if (t.arrayValue) {
            const e = {
                arrayValue: {
                    values: []
                }
            };
            for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = Kt(t.arrayValue.values[n]);
            return e;
        }
        return Object.assign({}, t);
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An ObjectValue represents a MapValue in the Firestore Proto and offers the
     * ability to add and remove fields (via the ObjectValueBuilder).
     */ class jt {
        constructor(t) {
            this.value = t;
        }
        static empty() {
            return new jt({
                mapValue: {}
            });
        }
        /**
         * Returns the value at the given path or null.
         *
         * @param path - the path to search
         * @returns The value at the path or null if the path is not set.
         */    field(t) {
            if (t.isEmpty()) return this.value;
            {
                let e = this.value;
                for (let n = 0; n < t.length - 1; ++n) if (e = (e.mapValue.fields || {})[t.get(n)], 
                !qt(e)) return null;
                return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
            }
        }
        /**
         * Sets the field to the provided value.
         *
         * @param path - The field path to set.
         * @param value - The value to set.
         */    set(t, e) {
            this.getFieldsMap(t.popLast())[t.lastSegment()] = Kt(e);
        }
        /**
         * Sets the provided fields to the provided values.
         *
         * @param data - A map of fields to values (or null for deletes).
         */    setAll(t) {
            let e = _t.emptyPath(), n = {}, s = [];
            t.forEach(((t, i) => {
                if (!e.isImmediateParentOf(i)) {
                    // Insert the accumulated changes at this parent location
                    const t = this.getFieldsMap(e);
                    this.applyChanges(t, n, s), n = {}, s = [], e = i.popLast();
                }
                t ? n[i.lastSegment()] = Kt(t) : s.push(i.lastSegment());
            }));
            const i = this.getFieldsMap(e);
            this.applyChanges(i, n, s);
        }
        /**
         * Removes the field at the specified path. If there is no field at the
         * specified path, nothing is changed.
         *
         * @param path - The field path to remove.
         */    delete(t) {
            const e = this.field(t.popLast());
            qt(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
        }
        isEqual(t) {
            return Ct(this.value, t.value);
        }
        /**
         * Returns the map that contains the leaf element of `path`. If the parent
         * entry does not yet exist, or if it is not a map, a new map will be created.
         */    getFieldsMap(t) {
            let e = this.value;
            e.mapValue.fields || (e.mapValue = {
                fields: {}
            });
            for (let n = 0; n < t.length; ++n) {
                let s = e.mapValue.fields[t.get(n)];
                qt(s) && s.mapValue.fields || (s = {
                    mapValue: {
                        fields: {}
                    }
                }, e.mapValue.fields[t.get(n)] = s), e = s;
            }
            return e.mapValue.fields;
        }
        /**
         * Modifies `fieldsMap` by adding, replacing or deleting the specified
         * entries.
         */    applyChanges(t, e, n) {
            ht(e, ((e, n) => t[e] = n));
            for (const e of n) delete t[e];
        }
        clone() {
            return new jt(Kt(this.value));
        }
    }

    /**
     * Returns a FieldMask built from all fields in a MapValue.
     */ function Qt(t) {
        const e = [];
        return ht(t.fields, ((t, n) => {
            const s = new _t([ t ]);
            if (qt(n)) {
                const t = Qt(n.mapValue).fields;
                if (0 === t.length) 
                // Preserve the empty map by adding it to the FieldMask.
                e.push(s); else 
                // For nested and non-empty ObjectValues, add the FieldPath of the
                // leaf nodes.
                for (const n of t) e.push(s.child(n));
            } else 
            // For nested and non-empty ObjectValues, add the FieldPath of the leaf
            // nodes.
            e.push(s);
        })), new mt(e);
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Represents a document in Firestore with a key, version, data and whether it
     * has local mutations applied to it.
     *
     * Documents can transition between states via `convertToFoundDocument()`,
     * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
     * not transition to one of these states even after all mutations have been
     * applied, `isValidDocument()` returns false and the document should be removed
     * from all views.
     */ class Wt {
        constructor(t, e, n, s, i) {
            this.key = t, this.documentType = e, this.version = n, this.data = s, this.documentState = i;
        }
        /**
         * Creates a document with no known version or data, but which can serve as
         * base document for mutations.
         */    static newInvalidDocument(t) {
            return new Wt(t, 0 /* INVALID */ , ct.min(), jt.empty(), 0 /* SYNCED */);
        }
        /**
         * Creates a new document that is known to exist with the given data at the
         * given version.
         */    static newFoundDocument(t, e, n) {
            return new Wt(t, 1 /* FOUND_DOCUMENT */ , e, n, 0 /* SYNCED */);
        }
        /** Creates a new document that is known to not exist at the given version. */    static newNoDocument(t, e) {
            return new Wt(t, 2 /* NO_DOCUMENT */ , e, jt.empty(), 0 /* SYNCED */);
        }
        /**
         * Creates a new document that is known to exist at the given version but
         * whose data is not known (e.g. a document that was updated without a known
         * base document).
         */    static newUnknownDocument(t, e) {
            return new Wt(t, 3 /* UNKNOWN_DOCUMENT */ , e, jt.empty(), 2 /* HAS_COMMITTED_MUTATIONS */);
        }
        /**
         * Changes the document type to indicate that it exists and that its version
         * and data are known.
         */    convertToFoundDocument(t, e) {
            return this.version = t, this.documentType = 1 /* FOUND_DOCUMENT */ , this.data = e, 
            this.documentState = 0 /* SYNCED */ , this;
        }
        /**
         * Changes the document type to indicate that it doesn't exist at the given
         * version.
         */    convertToNoDocument(t) {
            return this.version = t, this.documentType = 2 /* NO_DOCUMENT */ , this.data = jt.empty(), 
            this.documentState = 0 /* SYNCED */ , this;
        }
        /**
         * Changes the document type to indicate that it exists at a given version but
         * that its data is not known (e.g. a document that was updated without a known
         * base document).
         */    convertToUnknownDocument(t) {
            return this.version = t, this.documentType = 3 /* UNKNOWN_DOCUMENT */ , this.data = jt.empty(), 
            this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
        }
        setHasCommittedMutations() {
            return this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
        }
        setHasLocalMutations() {
            return this.documentState = 1 /* HAS_LOCAL_MUTATIONS */ , this;
        }
        get hasLocalMutations() {
            return 1 /* HAS_LOCAL_MUTATIONS */ === this.documentState;
        }
        get hasCommittedMutations() {
            return 2 /* HAS_COMMITTED_MUTATIONS */ === this.documentState;
        }
        get hasPendingWrites() {
            return this.hasLocalMutations || this.hasCommittedMutations;
        }
        isValidDocument() {
            return 0 /* INVALID */ !== this.documentType;
        }
        isFoundDocument() {
            return 1 /* FOUND_DOCUMENT */ === this.documentType;
        }
        isNoDocument() {
            return 2 /* NO_DOCUMENT */ === this.documentType;
        }
        isUnknownDocument() {
            return 3 /* UNKNOWN_DOCUMENT */ === this.documentType;
        }
        isEqual(t) {
            return t instanceof Wt && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
        }
        clone() {
            return new Wt(this.key, this.documentType, this.version, this.data.clone(), this.documentState);
        }
        toString() {
            return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
        }
    }

    /**
     * Compares the value for field `field` in the provided documents. Throws if
     * the field does not exist in both documents.
     */
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Visible for testing
    class Gt {
        constructor(t, e = null, n = [], s = [], i = null, r = null, o = null) {
            this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, 
            this.startAt = r, this.endAt = o, this.R = null;
        }
    }

    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this factory method, because `Query` provides an implicit `orderBy`
     * property.
     */ function zt(t, e = null, n = [], s = [], i = null, r = null, o = null) {
        return new Gt(t, e, n, s, i, r, o);
    }

    function Ht(t) {
        const e = q$1(t);
        if (null === e.R) {
            let t = e.path.canonicalString();
            null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map((t => te(t))).join(","), 
            t += "|ob:", t += e.orderBy.map((t => function(t) {
                // TODO(b/29183165): Make this collision robust.
                return t.field.canonicalString() + t.dir;
            }(t))).join(","), bt(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", 
            t += he(e.startAt)), e.endAt && (t += "|ub:", t += he(e.endAt)), e.R = t;
        }
        return e.R;
    }

    function Jt(t) {
        let e = t.path.canonicalString();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += `, filters: [${t.filters.map((t => {
        return `${(e = t).field.canonicalString()} ${e.op} ${$t(e.value)}`;
        /** Returns a debug description for `filter`. */
        var e;
        /** Filter that matches on key fields (i.e. '__name__'). */    })).join(", ")}]`), 
        bt(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += `, orderBy: [${t.orderBy.map((t => function(t) {
        return `${t.field.canonicalString()} (${t.dir})`;
    }(t))).join(", ")}]`), t.startAt && (e += ", startAt: " + he(t.startAt)), t.endAt && (e += ", endAt: " + he(t.endAt)), 
        `Target(${e})`;
    }

    function Yt(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;
        for (let n = 0; n < t.orderBy.length; n++) if (!fe(t.orderBy[n], e.orderBy[n])) return !1;
        if (t.filters.length !== e.filters.length) return !1;
        for (let i = 0; i < t.filters.length; i++) if (n = t.filters[i], s = e.filters[i], 
        n.op !== s.op || !n.field.isEqual(s.field) || !Ct(n.value, s.value)) return !1;
        var n, s;
        return t.collectionGroup === e.collectionGroup && (!!t.path.isEqual(e.path) && (!!we(t.startAt, e.startAt) && we(t.endAt, e.endAt)));
    }

    function Xt(t) {
        return St.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
    }

    class Zt extends class {} {
        constructor(t, e, n) {
            super(), this.field = t, this.op = e, this.value = n;
        }
        /**
         * Creates a filter based on the provided arguments.
         */    static create(t, e, n) {
            return t.isKeyField() ? "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.P(t, e, n) : new ee(t, e, n) : "array-contains" /* ARRAY_CONTAINS */ === e ? new re(t, n) : "in" /* IN */ === e ? new oe(t, n) : "not-in" /* NOT_IN */ === e ? new ae(t, n) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new ce(t, n) : new Zt(t, e, n);
        }
        static P(t, e, n) {
            return "in" /* IN */ === e ? new ne(t, n) : new se(t, n);
        }
        matches(t) {
            const e = t.data.field(this.field);
            // Types do not have to match in NOT_EQUAL filters.
                    return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.v(kt(e, this.value)) : null !== e && Dt(this.value) === Dt(e) && this.v(kt(e, this.value));
            // Only compare types with matching backend order (such as double and int).
            }
        v(t) {
            switch (this.op) {
              case "<" /* LESS_THAN */ :
                return t < 0;

              case "<=" /* LESS_THAN_OR_EQUAL */ :
                return t <= 0;

              case "==" /* EQUAL */ :
                return 0 === t;

              case "!=" /* NOT_EQUAL */ :
                return 0 !== t;

              case ">" /* GREATER_THAN */ :
                return t > 0;

              case ">=" /* GREATER_THAN_OR_EQUAL */ :
                return t >= 0;

              default:
                return L$1();
            }
        }
        V() {
            return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
        }
    }

    function te(t) {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return t.field.canonicalString() + t.op.toString() + $t(t.value);
    }

    class ee extends Zt {
        constructor(t, e, n) {
            super(t, e, n), this.key = St.fromName(n.referenceValue);
        }
        matches(t) {
            const e = St.comparator(t.key, this.key);
            return this.v(e);
        }
    }

    /** Filter that matches on key fields within an array. */ class ne extends Zt {
        constructor(t, e) {
            super(t, "in" /* IN */ , e), this.keys = ie("in" /* IN */ , e);
        }
        matches(t) {
            return this.keys.some((e => e.isEqual(t.key)));
        }
    }

    /** Filter that matches on key fields not present within an array. */ class se extends Zt {
        constructor(t, e) {
            super(t, "not-in" /* NOT_IN */ , e), this.keys = ie("not-in" /* NOT_IN */ , e);
        }
        matches(t) {
            return !this.keys.some((e => e.isEqual(t.key)));
        }
    }

    function ie(t, e) {
        var n;
        return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t => St.fromName(t.referenceValue)));
    }

    /** A Filter that implements the array-contains operator. */ class re extends Zt {
        constructor(t, e) {
            super(t, "array-contains" /* ARRAY_CONTAINS */ , e);
        }
        matches(t) {
            const e = t.data.field(this.field);
            return Lt(e) && Nt(e.arrayValue, this.value);
        }
    }

    /** A Filter that implements the IN operator. */ class oe extends Zt {
        constructor(t, e) {
            super(t, "in" /* IN */ , e);
        }
        matches(t) {
            const e = t.data.field(this.field);
            return null !== e && Nt(this.value.arrayValue, e);
        }
    }

    /** A Filter that implements the not-in operator. */ class ae extends Zt {
        constructor(t, e) {
            super(t, "not-in" /* NOT_IN */ , e);
        }
        matches(t) {
            if (Nt(this.value.arrayValue, {
                nullValue: "NULL_VALUE"
            })) return !1;
            const e = t.data.field(this.field);
            return null !== e && !Nt(this.value.arrayValue, e);
        }
    }

    /** A Filter that implements the array-contains-any operator. */ class ce extends Zt {
        constructor(t, e) {
            super(t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , e);
        }
        matches(t) {
            const e = t.data.field(this.field);
            return !(!Lt(e) || !e.arrayValue.values) && e.arrayValue.values.some((t => Nt(this.value.arrayValue, t)));
        }
    }

    /**
     * Represents a bound of a query.
     *
     * The bound is specified with the given components representing a position and
     * whether it's just before or just after the position (relative to whatever the
     * query order is).
     *
     * The position represents a logical index position for a query. It's a prefix
     * of values for the (potentially implicit) order by clauses of a query.
     *
     * Bound provides a function to determine whether a document comes before or
     * after a bound. This is influenced by whether the position is just before or
     * just after the provided values.
     */ class ue {
        constructor(t, e) {
            this.position = t, this.before = e;
        }
    }

    function he(t) {
        // TODO(b/29183165): Make this collision robust.
        return `${t.before ? "b" : "a"}:${t.position.map((t => $t(t))).join(",")}`;
    }

    /**
     * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
     */ class le {
        constructor(t, e = "asc" /* ASCENDING */) {
            this.field = t, this.dir = e;
        }
    }

    function fe(t, e) {
        return t.dir === e.dir && t.field.isEqual(e.field);
    }

    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */ function de(t, e, n) {
        let s = 0;
        for (let i = 0; i < t.position.length; i++) {
            const r = e[i], o = t.position[i];
            if (r.field.isKeyField()) s = St.comparator(St.fromName(o.referenceValue), n.key); else {
                s = kt(o, n.data.field(r.field));
            }
            if ("desc" /* DESCENDING */ === r.dir && (s *= -1), 0 !== s) break;
        }
        return t.before ? s <= 0 : s < 0;
    }

    function we(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length) return !1;
        for (let n = 0; n < t.position.length; n++) {
            if (!Ct(t.position[n], e.position[n])) return !1;
        }
        return !0;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Query encapsulates all the query attributes we support in the SDK. It can
     * be run against the LocalStore, as well as be converted to a `Target` to
     * query the RemoteStore results.
     *
     * Visible for testing.
     */ class _e {
        /**
         * Initializes a Query with a path and optional additional query constraints.
         * Path must currently be empty if this is a collection group query.
         */
        constructor(t, e = null, n = [], s = [], i = null, r = "F" /* First */ , o = null, a = null) {
            this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, 
            this.limit = i, this.limitType = r, this.startAt = o, this.endAt = a, this.S = null, 
            // The corresponding `Target` of this `Query` instance.
            this.D = null, this.startAt, this.endAt;
        }
    }

    /** Creates a new Query instance with the options provided. */ function me(t, e, n, s, i, r, o, a) {
        return new _e(t, e, n, s, i, r, o, a);
    }

    /** Creates a new Query for a query that matches all documents at `path` */ function ge(t) {
        return new _e(t);
    }

    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */ function ye(t) {
        return !bt(t.limit) && "F" /* First */ === t.limitType;
    }

    function pe(t) {
        return !bt(t.limit) && "L" /* Last */ === t.limitType;
    }

    function Te(t) {
        return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
    }

    function Ee(t) {
        for (const e of t.filters) if (e.V()) return e.field;
        return null;
    }

    /**
     * Checks if any of the provided Operators are included in the query and
     * returns the first one that is, or null if none are.
     */
    /**
     * Returns whether the query matches a collection group rather than a specific
     * collection.
     */
    function Ie(t) {
        return null !== t.collectionGroup;
    }

    /**
     * Returns the implicit order by constraint that is used to execute the Query,
     * which can be different from the order by constraints the user provided (e.g.
     * the SDK and backend always orders by `__name__`).
     */ function Ae(t) {
        const e = q$1(t);
        if (null === e.S) {
            e.S = [];
            const t = Ee(e), n = Te(e);
            if (null !== t && null === n) 
            // In order to implicitly add key ordering, we must also add the
            // inequality filter field for it to be a valid query.
            // Note that the default inequality field and key ordering is ascending.
            t.isKeyField() || e.S.push(new le(t)), e.S.push(new le(_t.keyField(), "asc" /* ASCENDING */)); else {
                let t = !1;
                for (const n of e.explicitOrderBy) e.S.push(n), n.field.isKeyField() && (t = !0);
                if (!t) {
                    // The order of the implicit key ordering always matches the last
                    // explicit order by
                    const t = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc" /* ASCENDING */;
                    e.S.push(new le(_t.keyField(), t));
                }
            }
        }
        return e.S;
    }

    /**
     * Converts this `Query` instance to it's corresponding `Target` representation.
     */ function Re(t) {
        const e = q$1(t);
        if (!e.D) if ("F" /* First */ === e.limitType) e.D = zt(e.path, e.collectionGroup, Ae(e), e.filters, e.limit, e.startAt, e.endAt); else {
            // Flip the orderBy directions since we want the last results
            const t = [];
            for (const n of Ae(e)) {
                const e = "desc" /* DESCENDING */ === n.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
                t.push(new le(n.field, e));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                    const n = e.endAt ? new ue(e.endAt.position, !e.endAt.before) : null, s = e.startAt ? new ue(e.startAt.position, !e.startAt.before) : null;
            // Now return as a LimitType.First query.
            e.D = zt(e.path, e.collectionGroup, t, e.filters, e.limit, n, s);
        }
        return e.D;
    }

    function Pe(t, e, n) {
        return new _e(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
    }

    function be(t, e) {
        return Yt(Re(t), Re(e)) && t.limitType === e.limitType;
    }

    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    function ve(t) {
        return `${Ht(Re(t))}|lt:${t.limitType}`;
    }

    function Ve(t) {
        return `Query(target=${Jt(Re(t))}; limitType=${t.limitType})`;
    }

    /** Returns whether `doc` matches the constraints of `query`. */ function Se(t, e) {
        return e.isFoundDocument() && function(t, e) {
            const n = e.key.path;
            return null !== t.collectionGroup ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n) : St.isDocumentKey(t.path) ? t.path.isEqual(n) : t.path.isImmediateParentOf(n);
        }
        /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */ (t, e) && function(t, e) {
            for (const n of t.explicitOrderBy) 
            // order by key always matches
            if (!n.field.isKeyField() && null === e.data.field(n.field)) return !1;
            return !0;
        }(t, e) && function(t, e) {
            for (const n of t.filters) if (!n.matches(e)) return !1;
            return !0;
        }
        /** Makes sure a document is within the bounds, if provided. */ (t, e) && function(t, e) {
            if (t.startAt && !de(t.startAt, Ae(t), e)) return !1;
            if (t.endAt && de(t.endAt, Ae(t), e)) return !1;
            return !0;
        }
        /**
     * Returns a new comparator function that can be used to compare two documents
     * based on the Query's ordering constraint.
     */ (t, e);
    }

    function De(t) {
        return (e, n) => {
            let s = !1;
            for (const i of Ae(t)) {
                const t = Ce(i, e, n);
                if (0 !== t) return t;
                s = s || i.field.isKeyField();
            }
            return 0;
        };
    }

    function Ce(t, e, n) {
        const s = t.field.isKeyField() ? St.comparator(e.key, n.key) : function(t, e, n) {
            const s = e.data.field(t), i = n.data.field(t);
            return null !== s && null !== i ? kt(s, i) : L$1();
        }(t.field, e, n);
        switch (t.dir) {
          case "asc" /* ASCENDING */ :
            return s;

          case "desc" /* DESCENDING */ :
            return -1 * s;

          default:
            return L$1();
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */ function Ne(t, e) {
        if (t.C) {
            if (isNaN(e)) return {
                doubleValue: "NaN"
            };
            if (e === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (e === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: vt(e) ? "-0" : e
        };
    }

    /**
     * Returns an IntegerValue for `value`.
     */ function ke(t) {
        return {
            integerValue: "" + t
        };
    }

    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */ function xe(t, e) {
        return Vt(e) ? ke(e) : Ne(t, e);
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /** Used to represent a field transform on a mutation. */ class $e {
        constructor() {
            // Make sure that the structural type of `TransformOperation` is unique.
            // See https://github.com/microsoft/TypeScript/issues/5451
            this._ = void 0;
        }
    }

    /**
     * Computes the local transform result against the provided `previousValue`,
     * optionally using the provided localWriteTime.
     */ function Fe(t, e, n) {
        return t instanceof Le ? function(t, e) {
            const n = {
                fields: {
                    __type__: {
                        stringValue: "server_timestamp"
                    },
                    __local_write_time__: {
                        timestampValue: {
                            seconds: t.seconds,
                            nanos: t.nanoseconds
                        }
                    }
                }
            };
            return e && (n.fields.__previous_value__ = e), {
                mapValue: n
            };
        }(n, e) : t instanceof Be ? Ue(t, e) : t instanceof qe ? Ke(t, e) : function(t, e) {
            // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
            // precision and resolves overflows by reducing precision, we do not
            // manually cap overflows at 2^63.
            const n = Me(t, e), s = Qe(n) + Qe(t.N);
            return Mt(n) && Mt(t.N) ? ke(s) : Ne(t.k, s);
        }(t, e);
    }

    /**
     * Computes a final transform result after the transform has been acknowledged
     * by the server, potentially using the server-provided transformResult.
     */ function Oe(t, e, n) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return t instanceof Be ? Ue(t, e) : t instanceof qe ? Ke(t, e) : n;
    }

    /**
     * If this transform operation is not idempotent, returns the base value to
     * persist for this transform. If a base value is returned, the transform
     * operation is always applied to this base value, even if document has
     * already been updated.
     *
     * Base values provide consistent behavior for non-idempotent transforms and
     * allow us to return the same latency-compensated value even if the backend
     * has already applied the transform operation. The base value is null for
     * idempotent transforms, as they can be re-played even if the backend has
     * already applied them.
     *
     * @returns a base value to store along with the mutation, or null for
     * idempotent transforms.
     */ function Me(t, e) {
        return t instanceof je ? Mt(n = e) || function(t) {
            return !!t && "doubleValue" in t;
        }
        /** Returns true if `value` is either an IntegerValue or a DoubleValue. */ (n) ? e : {
            integerValue: 0
        } : null;
        var n;
    }

    /** Transforms a value into a server-generated timestamp. */
    class Le extends $e {}

    /** Transforms an array value via a union operation. */ class Be extends $e {
        constructor(t) {
            super(), this.elements = t;
        }
    }

    function Ue(t, e) {
        const n = We(e);
        for (const e of t.elements) n.some((t => Ct(t, e))) || n.push(e);
        return {
            arrayValue: {
                values: n
            }
        };
    }

    /** Transforms an array value via a remove operation. */ class qe extends $e {
        constructor(t) {
            super(), this.elements = t;
        }
    }

    function Ke(t, e) {
        let n = We(e);
        for (const e of t.elements) n = n.filter((t => !Ct(t, e)));
        return {
            arrayValue: {
                values: n
            }
        };
    }

    /**
     * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
     * transforms. Converts all field values to integers or doubles, but unlike the
     * backend does not cap integer values at 2^63. Instead, JavaScript number
     * arithmetic is used and precision loss can occur for values greater than 2^53.
     */ class je extends $e {
        constructor(t, e) {
            super(), this.k = t, this.N = e;
        }
    }

    function Qe(t) {
        return Et(t.integerValue || t.doubleValue);
    }

    function We(t) {
        return Lt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
    }

    function ze(t, e) {
        return t.field.isEqual(e.field) && function(t, e) {
            return t instanceof Be && e instanceof Be || t instanceof qe && e instanceof qe ? rt(t.elements, e.elements, Ct) : t instanceof je && e instanceof je ? Ct(t.N, e.N) : t instanceof Le && e instanceof Le;
        }(t.transform, e.transform);
    }

    /** The result of successfully applying a mutation to the backend. */
    class He {
        constructor(
        /**
         * The version at which the mutation was committed:
         *
         * - For most operations, this is the updateTime in the WriteResult.
         * - For deletes, the commitTime of the WriteResponse (because deletes are
         *   not stored and have no updateTime).
         *
         * Note that these versions can be different: No-op writes will not change
         * the updateTime even though the commitTime advances.
         */
        t, 
        /**
         * The resulting fields returned from the backend after a mutation
         * containing field transforms has been committed. Contains one FieldValue
         * for each FieldTransform that was in the mutation.
         *
         * Will be empty if the mutation did not contain any field transforms.
         */
        e) {
            this.version = t, this.transformResults = e;
        }
    }

    /**
     * Encodes a precondition for a mutation. This follows the model that the
     * backend accepts with the special case of an explicit "empty" precondition
     * (meaning no precondition).
     */ class Je {
        constructor(t, e) {
            this.updateTime = t, this.exists = e;
        }
        /** Creates a new empty Precondition. */    static none() {
            return new Je;
        }
        /** Creates a new Precondition with an exists flag. */    static exists(t) {
            return new Je(void 0, t);
        }
        /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
            return new Je(t);
        }
        /** Returns whether this Precondition is empty. */    get isNone() {
            return void 0 === this.updateTime && void 0 === this.exists;
        }
        isEqual(t) {
            return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
        }
    }

    /** Returns true if the preconditions is valid for the given document. */ function Ye(t, e) {
        return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument();
    }

    /**
     * A mutation describes a self-contained change to a document. Mutations can
     * create, replace, delete, and update subsets of documents.
     *
     * Mutations not only act on the value of the document but also its version.
     *
     * For local mutations (mutations that haven't been committed yet), we preserve
     * the existing version for Set and Patch mutations. For Delete mutations, we
     * reset the version to 0.
     *
     * Here's the expected transition table.
     *
     * MUTATION           APPLIED TO            RESULTS IN
     *
     * SetMutation        Document(v3)          Document(v3)
     * SetMutation        NoDocument(v3)        Document(v0)
     * SetMutation        InvalidDocument(v0)   Document(v0)
     * PatchMutation      Document(v3)          Document(v3)
     * PatchMutation      NoDocument(v3)        NoDocument(v3)
     * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
     * DeleteMutation     Document(v3)          NoDocument(v0)
     * DeleteMutation     NoDocument(v3)        NoDocument(v0)
     * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
     *
     * For acknowledged mutations, we use the updateTime of the WriteResponse as
     * the resulting version for Set and Patch mutations. As deletes have no
     * explicit update time, we use the commitTime of the WriteResponse for
     * Delete mutations.
     *
     * If a mutation is acknowledged by the backend but fails the precondition check
     * locally, we transition to an `UnknownDocument` and rely on Watch to send us
     * the updated version.
     *
     * Field transforms are used only with Patch and Set Mutations. We use the
     * `updateTransforms` message to store transforms, rather than the `transforms`s
     * messages.
     *
     * ## Subclassing Notes
     *
     * Every type of mutation needs to implement its own applyToRemoteDocument() and
     * applyToLocalView() to implement the actual behavior of applying the mutation
     * to some source document (see `setMutationApplyToRemoteDocument()` for an
     * example).
     */ class Xe {}

    /**
     * Applies this mutation to the given document for the purposes of computing a
     * new remote document. If the input document doesn't match the expected state
     * (e.g. it is invalid or outdated), the document type may transition to
     * unknown.
     *
     * @param mutation - The mutation to apply.
     * @param document - The document to mutate. The input document can be an
     *     invalid document if the client has no knowledge of the pre-mutation state
     *     of the document.
     * @param mutationResult - The result of applying the mutation from the backend.
     */ function Ze(t, e, n) {
        t instanceof rn ? function(t, e, n) {
            // Unlike setMutationApplyToLocalView, if we're applying a mutation to a
            // remote document the server has accepted the mutation so the precondition
            // must have held.
            const s = t.value.clone(), i = cn(t.fieldTransforms, e, n.transformResults);
            s.setAll(i), e.convertToFoundDocument(n.version, s).setHasCommittedMutations();
        }(t, e, n) : t instanceof on ? function(t, e, n) {
            if (!Ye(t.precondition, e)) 
            // Since the mutation was not rejected, we know that the precondition
            // matched on the backend. We therefore must not have the expected version
            // of the document in our cache and convert to an UnknownDocument with a
            // known updateTime.
            return void e.convertToUnknownDocument(n.version);
            const s = cn(t.fieldTransforms, e, n.transformResults), i = e.data;
            i.setAll(an(t)), i.setAll(s), e.convertToFoundDocument(n.version, i).setHasCommittedMutations();
        }(t, e, n) : function(t, e, n) {
            // Unlike applyToLocalView, if we're applying a mutation to a remote
            // document the server has accepted the mutation so the precondition must
            // have held.
            e.convertToNoDocument(n.version).setHasCommittedMutations();
        }(0, e, n);
    }

    /**
     * Applies this mutation to the given document for the purposes of computing
     * the new local view of a document. If the input document doesn't match the
     * expected state, the document is not modified.
     *
     * @param mutation - The mutation to apply.
     * @param document - The document to mutate. The input document can be an
     *     invalid document if the client has no knowledge of the pre-mutation state
     *     of the document.
     * @param localWriteTime - A timestamp indicating the local write time of the
     *     batch this mutation is a part of.
     */ function tn(t, e, n) {
        t instanceof rn ? function(t, e, n) {
            if (!Ye(t.precondition, e)) 
            // The mutation failed to apply (e.g. a document ID created with add()
            // caused a name collision).
            return;
            const s = t.value.clone(), i = un(t.fieldTransforms, n, e);
            s.setAll(i), e.convertToFoundDocument(sn(e), s).setHasLocalMutations();
        }
        /**
     * A mutation that modifies fields of the document at the given key with the
     * given values. The values are applied through a field mask:
     *
     *  * When a field is in both the mask and the values, the corresponding field
     *    is updated.
     *  * When a field is in neither the mask nor the values, the corresponding
     *    field is unmodified.
     *  * When a field is in the mask but not in the values, the corresponding field
     *    is deleted.
     *  * When a field is not in the mask but is in the values, the values map is
     *    ignored.
     */ (t, e, n) : t instanceof on ? function(t, e, n) {
            if (!Ye(t.precondition, e)) return;
            const s = un(t.fieldTransforms, n, e), i = e.data;
            i.setAll(an(t)), i.setAll(s), e.convertToFoundDocument(sn(e), i).setHasLocalMutations();
        }
        /**
     * Returns a FieldPath/Value map with the content of the PatchMutation.
     */ (t, e, n) : function(t, e) {
            Ye(t.precondition, e) && 
            // We don't call `setHasLocalMutations()` since we want to be backwards
            // compatible with the existing SDK behavior.
            e.convertToNoDocument(ct.min());
        }
        /**
     * A mutation that verifies the existence of the document at the given key with
     * the provided precondition.
     *
     * The `verify` operation is only used in Transactions, and this class serves
     * primarily to facilitate serialization into protos.
     */ (t, e);
    }

    /**
     * If this mutation is not idempotent, returns the base value to persist with
     * this mutation. If a base value is returned, the mutation is always applied
     * to this base value, even if document has already been updated.
     *
     * The base value is a sparse object that consists of only the document
     * fields for which this mutation contains a non-idempotent transformation
     * (e.g. a numeric increment). The provided value guarantees consistent
     * behavior for non-idempotent transforms and allow us to return the same
     * latency-compensated value even if the backend has already applied the
     * mutation. The base value is null for idempotent mutations, as they can be
     * re-played even if the backend has already applied them.
     *
     * @returns a base value to store along with the mutation, or null for
     * idempotent mutations.
     */ function en(t, e) {
        let n = null;
        for (const s of t.fieldTransforms) {
            const t = e.data.field(s.field), i = Me(s.transform, t || null);
            null != i && (null == n && (n = jt.empty()), n.set(s.field, i));
        }
        return n || null;
    }

    function nn(t, e) {
        return t.type === e.type && (!!t.key.isEqual(e.key) && (!!t.precondition.isEqual(e.precondition) && (!!function(t, e) {
            return void 0 === t && void 0 === e || !(!t || !e) && rt(t, e, ((t, e) => ze(t, e)));
        }(t.fieldTransforms, e.fieldTransforms) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))));
    }

    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.min().
     */ function sn(t) {
        return t.isFoundDocument() ? t.version : ct.min();
    }

    /**
     * A mutation that creates or replaces the document at the given key with the
     * object value contents.
     */ class rn extends Xe {
        constructor(t, e, n, s = []) {
            super(), this.key = t, this.value = e, this.precondition = n, this.fieldTransforms = s, 
            this.type = 0 /* Set */;
        }
    }

    class on extends Xe {
        constructor(t, e, n, s, i = []) {
            super(), this.key = t, this.data = e, this.fieldMask = n, this.precondition = s, 
            this.fieldTransforms = i, this.type = 1 /* Patch */;
        }
    }

    function an(t) {
        const e = new Map;
        return t.fieldMask.fields.forEach((n => {
            if (!n.isEmpty()) {
                const s = t.data.field(n);
                e.set(n, s);
            }
        })), e;
    }

    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a mutation
     * containing transforms has been acknowledged by the server.
     *
     * @param fieldTransforms - The field transforms to apply the result to.
     * @param mutableDocument - The current state of the document after applying all
     * previous mutations.
     * @param serverTransformResults - The transform results received by the server.
     * @returns The transform results list.
     */ function cn(t, e, n) {
        const s = new Map;
        B$1(t.length === n.length);
        for (let i = 0; i < n.length; i++) {
            const r = t[i], o = r.transform, a = e.data.field(r.field);
            s.set(r.field, Oe(o, a, n[i]));
        }
        return s;
    }

    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * transform locally.
     *
     * @param fieldTransforms - The field transforms to apply the result to.
     * @param localWriteTime - The local time of the mutation (used to
     *     generate ServerTimestampValues).
     * @param mutableDocument - The current state of the document after applying all
     *     previous mutations.
     * @returns The transform results list.
     */ function un(t, e, n) {
        const s = new Map;
        for (const i of t) {
            const t = i.transform, r = n.data.field(i.field);
            s.set(i.field, Fe(t, r, e));
        }
        return s;
    }

    /** A mutation that deletes the document at the given key. */ class hn extends Xe {
        constructor(t, e) {
            super(), this.key = t, this.precondition = e, this.type = 2 /* Delete */ , this.fieldTransforms = [];
        }
    }

    class ln extends Xe {
        constructor(t, e) {
            super(), this.key = t, this.precondition = e, this.type = 3 /* Verify */ , this.fieldTransforms = [];
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class fn {
        // TODO(b/33078163): just use simplest form of existence filter for now
        constructor(t) {
            this.count = t;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Error Codes describing the different ways GRPC can fail. These are copied
     * directly from GRPC's sources here:
     *
     * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
     *
     * Important! The names of these identifiers matter because the string forms
     * are used for reverse lookups from the webchannel stream. Do NOT change the
     * names of these identifiers or change this into a const enum.
     */ var dn, wn;

    /**
     * Determines whether an error code represents a permanent error when received
     * in response to a non-write operation.
     *
     * See isPermanentWriteError for classifying write errors.
     */
    function _n(t) {
        switch (t) {
          default:
            return L$1();

          case K$1.CANCELLED:
          case K$1.UNKNOWN:
          case K$1.DEADLINE_EXCEEDED:
          case K$1.RESOURCE_EXHAUSTED:
          case K$1.INTERNAL:
          case K$1.UNAVAILABLE:
     // Unauthenticated means something went wrong with our token and we need
            // to retry with new credentials which will happen automatically.
                  case K$1.UNAUTHENTICATED:
            return !1;

          case K$1.INVALID_ARGUMENT:
          case K$1.NOT_FOUND:
          case K$1.ALREADY_EXISTS:
          case K$1.PERMISSION_DENIED:
          case K$1.FAILED_PRECONDITION:
     // Aborted might be retried in some scenarios, but that is dependant on
            // the context and should handled individually by the calling code.
            // See https://cloud.google.com/apis/design/errors.
                  case K$1.ABORTED:
          case K$1.OUT_OF_RANGE:
          case K$1.UNIMPLEMENTED:
          case K$1.DATA_LOSS:
            return !0;
        }
    }

    /**
     * Determines whether an error code represents a permanent error when received
     * in response to a write operation.
     *
     * Write operations must be handled specially because as of b/119437764, ABORTED
     * errors on the write stream should be retried too (even though ABORTED errors
     * are not generally retryable).
     *
     * Note that during the initial handshake on the write stream an ABORTED error
     * signals that we should discard our stream token (i.e. it is permanent). This
     * means a handshake error should be classified with isPermanentError, above.
     */
    /**
     * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
     * are not the same as HTTP status codes.
     *
     * @returns The Code equivalent to the given GRPC status code. Fails if there
     *     is no match.
     */
    function mn(t) {
        if (void 0 === t) 
        // This shouldn't normally happen, but in certain error cases (like trying
        // to send invalid proto messages) we may get an error with no GRPC code.
        return F$1("GRPC error has no .code"), K$1.UNKNOWN;
        switch (t) {
          case dn.OK:
            return K$1.OK;

          case dn.CANCELLED:
            return K$1.CANCELLED;

          case dn.UNKNOWN:
            return K$1.UNKNOWN;

          case dn.DEADLINE_EXCEEDED:
            return K$1.DEADLINE_EXCEEDED;

          case dn.RESOURCE_EXHAUSTED:
            return K$1.RESOURCE_EXHAUSTED;

          case dn.INTERNAL:
            return K$1.INTERNAL;

          case dn.UNAVAILABLE:
            return K$1.UNAVAILABLE;

          case dn.UNAUTHENTICATED:
            return K$1.UNAUTHENTICATED;

          case dn.INVALID_ARGUMENT:
            return K$1.INVALID_ARGUMENT;

          case dn.NOT_FOUND:
            return K$1.NOT_FOUND;

          case dn.ALREADY_EXISTS:
            return K$1.ALREADY_EXISTS;

          case dn.PERMISSION_DENIED:
            return K$1.PERMISSION_DENIED;

          case dn.FAILED_PRECONDITION:
            return K$1.FAILED_PRECONDITION;

          case dn.ABORTED:
            return K$1.ABORTED;

          case dn.OUT_OF_RANGE:
            return K$1.OUT_OF_RANGE;

          case dn.UNIMPLEMENTED:
            return K$1.UNIMPLEMENTED;

          case dn.DATA_LOSS:
            return K$1.DATA_LOSS;

          default:
            return L$1();
        }
    }

    /**
     * Converts an HTTP response's error status to the equivalent error code.
     *
     * @param status - An HTTP error response status ("FAILED_PRECONDITION",
     * "UNKNOWN", etc.)
     * @returns The equivalent Code. Non-matching responses are mapped to
     *     Code.UNKNOWN.
     */ (wn = dn || (dn = {}))[wn.OK = 0] = "OK", wn[wn.CANCELLED = 1] = "CANCELLED", 
    wn[wn.UNKNOWN = 2] = "UNKNOWN", wn[wn.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
    wn[wn.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", wn[wn.NOT_FOUND = 5] = "NOT_FOUND", 
    wn[wn.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", wn[wn.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
    wn[wn.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", wn[wn.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
    wn[wn.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", wn[wn.ABORTED = 10] = "ABORTED", 
    wn[wn.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", wn[wn.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
    wn[wn.INTERNAL = 13] = "INTERNAL", wn[wn.UNAVAILABLE = 14] = "UNAVAILABLE", wn[wn.DATA_LOSS = 15] = "DATA_LOSS";

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // An immutable sorted map implementation, based on a Left-leaning Red-Black
    // tree.
    class gn {
        constructor(t, e) {
            this.comparator = t, this.root = e || pn.EMPTY;
        }
        // Returns a copy of the map, with the specified key/value added or replaced.
        insert(t, e) {
            return new gn(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, pn.BLACK, null, null));
        }
        // Returns a copy of the map, with the specified key removed.
        remove(t) {
            return new gn(this.comparator, this.root.remove(t, this.comparator).copy(null, null, pn.BLACK, null, null));
        }
        // Returns the value of the node with the given key, or null.
        get(t) {
            let e = this.root;
            for (;!e.isEmpty(); ) {
                const n = this.comparator(t, e.key);
                if (0 === n) return e.value;
                n < 0 ? e = e.left : n > 0 && (e = e.right);
            }
            return null;
        }
        // Returns the index of the element in this sorted map, or -1 if it doesn't
        // exist.
        indexOf(t) {
            // Number of nodes that were pruned when descending right
            let e = 0, n = this.root;
            for (;!n.isEmpty(); ) {
                const s = this.comparator(t, n.key);
                if (0 === s) return e + n.left.size;
                s < 0 ? n = n.left : (
                // Count all nodes left of the node plus the node itself
                e += n.left.size + 1, n = n.right);
            }
            // Node not found
                    return -1;
        }
        isEmpty() {
            return this.root.isEmpty();
        }
        // Returns the total number of nodes in the map.
        get size() {
            return this.root.size;
        }
        // Returns the minimum key in the map.
        minKey() {
            return this.root.minKey();
        }
        // Returns the maximum key in the map.
        maxKey() {
            return this.root.maxKey();
        }
        // Traverses the map in key order and calls the specified action function
        // for each key/value pair. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        inorderTraversal(t) {
            return this.root.inorderTraversal(t);
        }
        forEach(t) {
            this.inorderTraversal(((e, n) => (t(e, n), !1)));
        }
        toString() {
            const t = [];
            return this.inorderTraversal(((e, n) => (t.push(`${e}:${n}`), !1))), `{${t.join(", ")}}`;
        }
        // Traverses the map in reverse key order and calls the specified action
        // function for each key/value pair. If action returns true, traversal is
        // aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        reverseTraversal(t) {
            return this.root.reverseTraversal(t);
        }
        // Returns an iterator over the SortedMap.
        getIterator() {
            return new yn(this.root, null, this.comparator, !1);
        }
        getIteratorFrom(t) {
            return new yn(this.root, t, this.comparator, !1);
        }
        getReverseIterator() {
            return new yn(this.root, null, this.comparator, !0);
        }
        getReverseIteratorFrom(t) {
            return new yn(this.root, t, this.comparator, !0);
        }
    }

     // end SortedMap
    // An iterator over an LLRBNode.
    class yn {
        constructor(t, e, n, s) {
            this.isReverse = s, this.nodeStack = [];
            let i = 1;
            for (;!t.isEmpty(); ) if (i = e ? n(t.key, e) : 1, 
            // flip the comparison if we're going in reverse
            s && (i *= -1), i < 0) 
            // This node is less than our start key. ignore it
            t = this.isReverse ? t.left : t.right; else {
                if (0 === i) {
                    // This node is exactly equal to our start key. Push it on the stack,
                    // but stop iterating;
                    this.nodeStack.push(t);
                    break;
                }
                // This node is greater than our start key, add it to the stack and move
                // to the next one
                this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
            }
        }
        getNext() {
            let t = this.nodeStack.pop();
            const e = {
                key: t.key,
                value: t.value
            };
            if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right; else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), 
            t = t.left;
            return e;
        }
        hasNext() {
            return this.nodeStack.length > 0;
        }
        peek() {
            if (0 === this.nodeStack.length) return null;
            const t = this.nodeStack[this.nodeStack.length - 1];
            return {
                key: t.key,
                value: t.value
            };
        }
    }

     // end SortedMapIterator
    // Represents a node in a Left-leaning Red-Black tree.
    class pn {
        constructor(t, e, n, s, i) {
            this.key = t, this.value = e, this.color = null != n ? n : pn.RED, this.left = null != s ? s : pn.EMPTY, 
            this.right = null != i ? i : pn.EMPTY, this.size = this.left.size + 1 + this.right.size;
        }
        // Returns a copy of the current node, optionally replacing pieces of it.
        copy(t, e, n, s, i) {
            return new pn(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
        }
        isEmpty() {
            return !1;
        }
        // Traverses the tree in key order and calls the specified action function
        // for each node. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        inorderTraversal(t) {
            return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
        }
        // Traverses the tree in reverse key order and calls the specified action
        // function for each node. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        reverseTraversal(t) {
            return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
        }
        // Returns the minimum node in the tree.
        min() {
            return this.left.isEmpty() ? this : this.left.min();
        }
        // Returns the maximum key in the tree.
        minKey() {
            return this.min().key;
        }
        // Returns the maximum key in the tree.
        maxKey() {
            return this.right.isEmpty() ? this.key : this.right.maxKey();
        }
        // Returns new tree, with the key/value added.
        insert(t, e, n) {
            let s = this;
            const i = n(t, s.key);
            return s = i < 0 ? s.copy(null, null, null, s.left.insert(t, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t, e, n)), 
            s.fixUp();
        }
        removeMin() {
            if (this.left.isEmpty()) return pn.EMPTY;
            let t = this;
            return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), 
            t.fixUp();
        }
        // Returns new tree, with the specified item removed.
        remove(t, e) {
            let n, s = this;
            if (e(t, s.key) < 0) s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), 
            s = s.copy(null, null, null, s.left.remove(t, e), null); else {
                if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 
                0 === e(t, s.key)) {
                    if (s.right.isEmpty()) return pn.EMPTY;
                    n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
                }
                s = s.copy(null, null, null, null, s.right.remove(t, e));
            }
            return s.fixUp();
        }
        isRed() {
            return this.color;
        }
        // Returns new tree after performing any needed rotations.
        fixUp() {
            let t = this;
            return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), 
            t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
        }
        moveRedLeft() {
            let t = this.colorFlip();
            return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), 
            t = t.rotateLeft(), t = t.colorFlip()), t;
        }
        moveRedRight() {
            let t = this.colorFlip();
            return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
        }
        rotateLeft() {
            const t = this.copy(null, null, pn.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null);
        }
        rotateRight() {
            const t = this.copy(null, null, pn.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t);
        }
        colorFlip() {
            const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, t, e);
        }
        // For testing.
        checkMaxDepth() {
            const t = this.check();
            return Math.pow(2, t) <= this.size + 1;
        }
        // In a balanced RB tree, the black-depth (number of black nodes) from root to
        // leaves is equal on both sides.  This function verifies that or asserts.
        check() {
            if (this.isRed() && this.left.isRed()) throw L$1();
            if (this.right.isRed()) throw L$1();
            const t = this.left.check();
            if (t !== this.right.check()) throw L$1();
            return t + (this.isRed() ? 0 : 1);
        }
    }

     // end LLRBNode
    // Empty node is shared between all LLRB trees.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pn.EMPTY = null, pn.RED = !0, pn.BLACK = !1;

    // end LLRBEmptyNode
    pn.EMPTY = new 
    // Represents an empty node (a leaf node in the Red-Black Tree).
    class {
        constructor() {
            this.size = 0;
        }
        get key() {
            throw L$1();
        }
        get value() {
            throw L$1();
        }
        get color() {
            throw L$1();
        }
        get left() {
            throw L$1();
        }
        get right() {
            throw L$1();
        }
        // Returns a copy of the current node.
        copy(t, e, n, s, i) {
            return this;
        }
        // Returns a copy of the tree, with the specified key/value added.
        insert(t, e, n) {
            return new pn(t, e);
        }
        // Returns a copy of the tree, with the specified key removed.
        remove(t, e) {
            return this;
        }
        isEmpty() {
            return !0;
        }
        inorderTraversal(t) {
            return !1;
        }
        reverseTraversal(t) {
            return !1;
        }
        minKey() {
            return null;
        }
        maxKey() {
            return null;
        }
        isRed() {
            return !1;
        }
        // For testing.
        checkMaxDepth() {
            return !0;
        }
        check() {
            return 0;
        }
    };

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * SortedSet is an immutable (copy-on-write) collection that holds elements
     * in order specified by the provided comparator.
     *
     * NOTE: if provided comparator returns 0 for two elements, we consider them to
     * be equal!
     */
    class Tn {
        constructor(t) {
            this.comparator = t, this.data = new gn(this.comparator);
        }
        has(t) {
            return null !== this.data.get(t);
        }
        first() {
            return this.data.minKey();
        }
        last() {
            return this.data.maxKey();
        }
        get size() {
            return this.data.size;
        }
        indexOf(t) {
            return this.data.indexOf(t);
        }
        /** Iterates elements in order defined by "comparator" */    forEach(t) {
            this.data.inorderTraversal(((e, n) => (t(e), !1)));
        }
        /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */    forEachInRange(t, e) {
            const n = this.data.getIteratorFrom(t[0]);
            for (;n.hasNext(); ) {
                const s = n.getNext();
                if (this.comparator(s.key, t[1]) >= 0) return;
                e(s.key);
            }
        }
        /**
         * Iterates over `elem`s such that: start &lt;= elem until false is returned.
         */    forEachWhile(t, e) {
            let n;
            for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
                if (!t(n.getNext().key)) return;
            }
        }
        /** Finds the least element greater than or equal to `elem`. */    firstAfterOrEqual(t) {
            const e = this.data.getIteratorFrom(t);
            return e.hasNext() ? e.getNext().key : null;
        }
        getIterator() {
            return new En(this.data.getIterator());
        }
        getIteratorFrom(t) {
            return new En(this.data.getIteratorFrom(t));
        }
        /** Inserts or updates an element */    add(t) {
            return this.copy(this.data.remove(t).insert(t, !0));
        }
        /** Deletes an element */    delete(t) {
            return this.has(t) ? this.copy(this.data.remove(t)) : this;
        }
        isEmpty() {
            return this.data.isEmpty();
        }
        unionWith(t) {
            let e = this;
            // Make sure `result` always refers to the larger one of the two sets.
                    return e.size < t.size && (e = t, t = this), t.forEach((t => {
                e = e.add(t);
            })), e;
        }
        isEqual(t) {
            if (!(t instanceof Tn)) return !1;
            if (this.size !== t.size) return !1;
            const e = this.data.getIterator(), n = t.data.getIterator();
            for (;e.hasNext(); ) {
                const t = e.getNext().key, s = n.getNext().key;
                if (0 !== this.comparator(t, s)) return !1;
            }
            return !0;
        }
        toArray() {
            const t = [];
            return this.forEach((e => {
                t.push(e);
            })), t;
        }
        toString() {
            const t = [];
            return this.forEach((e => t.push(e))), "SortedSet(" + t.toString() + ")";
        }
        copy(t) {
            const e = new Tn(this.comparator);
            return e.data = t, e;
        }
    }

    class En {
        constructor(t) {
            this.iter = t;
        }
        getNext() {
            return this.iter.getNext().key;
        }
        hasNext() {
            return this.iter.hasNext();
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const In = new gn(St.comparator);

    function An() {
        return In;
    }

    const Rn = new gn(St.comparator);

    function Pn() {
        return Rn;
    }

    const bn = new gn(St.comparator);

    function vn() {
        return bn;
    }

    const Vn = new Tn(St.comparator);

    function Sn(...t) {
        let e = Vn;
        for (const n of t) e = e.add(n);
        return e;
    }

    const Dn = new Tn(it);

    function Cn() {
        return Dn;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An event from the RemoteStore. It is split into targetChanges (changes to the
     * state or the set of documents in our watched targets) and documentUpdates
     * (changes to the actual documents).
     */ class Nn {
        constructor(
        /**
         * The snapshot version this event brings us up to, or MIN if not set.
         */
        t, 
        /**
         * A map from target to changes to the target. See TargetChange.
         */
        e, 
        /**
         * A set of targets that is known to be inconsistent. Listens for these
         * targets should be re-established without resume tokens.
         */
        n, 
        /**
         * A set of which documents have changed or been deleted, along with the
         * doc's new values (if not deleted).
         */
        s, 
        /**
         * A set of which document updates are due only to limbo resolution targets.
         */
        i) {
            this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, 
            this.resolvedLimboDocuments = i;
        }
        /**
         * HACK: Views require RemoteEvents in order to determine whether the view is
         * CURRENT, but secondary tabs don't receive remote events. So this method is
         * used to create a synthesized RemoteEvent that can be used to apply a
         * CURRENT status change to a View, for queries executed in a different tab.
         */
        // PORTING NOTE: Multi-tab only
        static createSynthesizedRemoteEventForCurrentChange(t, e) {
            const n = new Map;
            return n.set(t, kn.createSynthesizedTargetChangeForCurrentChange(t, e)), new Nn(ct.min(), n, Cn(), An(), Sn());
        }
    }

    /**
     * A TargetChange specifies the set of changes for a specific target as part of
     * a RemoteEvent. These changes track which documents are added, modified or
     * removed, as well as the target's resume token and whether the target is
     * marked CURRENT.
     * The actual changes *to* documents are not part of the TargetChange since
     * documents may be part of multiple targets.
     */ class kn {
        constructor(
        /**
         * An opaque, server-assigned token that allows watching a query to be resumed
         * after disconnecting without retransmitting all the data that matches the
         * query. The resume token essentially identifies a point in time from which
         * the server should resume sending results.
         */
        t, 
        /**
         * The "current" (synced) status of this target. Note that "current"
         * has special meaning in the RPC protocol that implies that a target is
         * both up-to-date and consistent with the rest of the watch stream.
         */
        e, 
        /**
         * The set of documents that were newly assigned to this target as part of
         * this remote event.
         */
        n, 
        /**
         * The set of documents that were already assigned to this target but received
         * an update during this remote event.
         */
        s, 
        /**
         * The set of documents that were removed from this target as part of this
         * remote event.
         */
        i) {
            this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, 
            this.removedDocuments = i;
        }
        /**
         * This method is used to create a synthesized TargetChanges that can be used to
         * apply a CURRENT status change to a View (for queries executed in a different
         * tab) or for new queries (to raise snapshots with correct CURRENT status).
         */    static createSynthesizedTargetChangeForCurrentChange(t, e) {
            return new kn(yt.EMPTY_BYTE_STRING, e, Sn(), Sn(), Sn());
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Represents a changed document and a list of target ids to which this change
     * applies.
     *
     * If document has been deleted NoDocument will be provided.
     */ class xn {
        constructor(
        /** The new document applies to all of these targets. */
        t, 
        /** The new document is removed from all of these targets. */
        e, 
        /** The key of the document for this change. */
        n, 
        /**
         * The new document or NoDocument if it was deleted. Is null if the
         * document went out of view without the server sending a new document.
         */
        s) {
            this.$ = t, this.removedTargetIds = e, this.key = n, this.F = s;
        }
    }

    class $n {
        constructor(t, e) {
            this.targetId = t, this.O = e;
        }
    }

    class Fn {
        constructor(
        /** What kind of change occurred to the watch target. */
        t, 
        /** The target IDs that were added/removed/set. */
        e, 
        /**
         * An opaque, server-assigned token that allows watching a target to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the target. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */
        n = yt.EMPTY_BYTE_STRING
        /** An RPC error indicating why the watch failed. */ , s = null) {
            this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = s;
        }
    }

    /** Tracks the internal state of a Watch target. */ class On {
        constructor() {
            /**
             * The number of pending responses (adds or removes) that we are waiting on.
             * We only consider targets active that have no pending responses.
             */
            this.M = 0, 
            /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
            this.L = Bn(), 
            /** See public getters for explanations of these fields. */
            this.B = yt.EMPTY_BYTE_STRING, this.U = !1, 
            /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
            this.q = !0;
        }
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */    get current() {
            return this.U;
        }
        /** The last resume token sent to us for this target. */    get resumeToken() {
            return this.B;
        }
        /** Whether this target has pending target adds or target removes. */    get K() {
            return 0 !== this.M;
        }
        /** Whether we have modified any state that should trigger a snapshot. */    get j() {
            return this.q;
        }
        /**
         * Applies the resume token to the TargetChange, but only when it has a new
         * value. Empty resumeTokens are discarded.
         */    W(t) {
            t.approximateByteSize() > 0 && (this.q = !0, this.B = t);
        }
        /**
         * Creates a target change from the current set of changes.
         *
         * To reset the document changes after raising this snapshot, call
         * `clearPendingChanges()`.
         */    G() {
            let t = Sn(), e = Sn(), n = Sn();
            return this.L.forEach(((s, i) => {
                switch (i) {
                  case 0 /* Added */ :
                    t = t.add(s);
                    break;

                  case 2 /* Modified */ :
                    e = e.add(s);
                    break;

                  case 1 /* Removed */ :
                    n = n.add(s);
                    break;

                  default:
                    L$1();
                }
            })), new kn(this.B, this.U, t, e, n);
        }
        /**
         * Resets the document changes and sets `hasPendingChanges` to false.
         */    H() {
            this.q = !1, this.L = Bn();
        }
        J(t, e) {
            this.q = !0, this.L = this.L.insert(t, e);
        }
        Y(t) {
            this.q = !0, this.L = this.L.remove(t);
        }
        X() {
            this.M += 1;
        }
        Z() {
            this.M -= 1;
        }
        tt() {
            this.q = !0, this.U = !0;
        }
    }

    /**
     * A helper class to accumulate watch changes into a RemoteEvent.
     */
    class Mn {
        constructor(t) {
            this.et = t, 
            /** The internal state of all tracked targets. */
            this.nt = new Map, 
            /** Keeps track of the documents to update since the last raised snapshot. */
            this.st = An(), 
            /** A mapping of document keys to their set of target IDs. */
            this.it = Ln(), 
            /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
            this.rt = new Tn(it);
        }
        /**
         * Processes and adds the DocumentWatchChange to the current set of changes.
         */    ot(t) {
            for (const e of t.$) t.F && t.F.isFoundDocument() ? this.at(e, t.F) : this.ct(e, t.key, t.F);
            for (const e of t.removedTargetIds) this.ct(e, t.key, t.F);
        }
        /** Processes and adds the WatchTargetChange to the current set of changes. */    ut(t) {
            this.forEachTarget(t, (e => {
                const n = this.ht(e);
                switch (t.state) {
                  case 0 /* NoChange */ :
                    this.lt(e) && n.W(t.resumeToken);
                    break;

                  case 1 /* Added */ :
                    // We need to decrement the number of pending acks needed from watch
                    // for this targetId.
                    n.Z(), n.K || 
                    // We have a freshly added target, so we need to reset any state
                    // that we had previously. This can happen e.g. when remove and add
                    // back a target for existence filter mismatches.
                    n.H(), n.W(t.resumeToken);
                    break;

                  case 2 /* Removed */ :
                    // We need to keep track of removed targets to we can post-filter and
                    // remove any target changes.
                    // We need to decrement the number of pending acks needed from watch
                    // for this targetId.
                    n.Z(), n.K || this.removeTarget(e);
                    break;

                  case 3 /* Current */ :
                    this.lt(e) && (n.tt(), n.W(t.resumeToken));
                    break;

                  case 4 /* Reset */ :
                    this.lt(e) && (
                    // Reset the target and synthesizes removes for all existing
                    // documents. The backend will re-add any documents that still
                    // match the target before it sends the next global snapshot.
                    this.ft(e), n.W(t.resumeToken));
                    break;

                  default:
                    L$1();
                }
            }));
        }
        /**
         * Iterates over all targetIds that the watch change applies to: either the
         * targetIds explicitly listed in the change or the targetIds of all currently
         * active targets.
         */    forEachTarget(t, e) {
            t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.nt.forEach(((t, n) => {
                this.lt(n) && e(n);
            }));
        }
        /**
         * Handles existence filters and synthesizes deletes for filter mismatches.
         * Targets that are invalidated by filter mismatches are added to
         * `pendingTargetResets`.
         */    dt(t) {
            const e = t.targetId, n = t.O.count, s = this.wt(e);
            if (s) {
                const t = s.target;
                if (Xt(t)) if (0 === n) {
                    // The existence filter told us the document does not exist. We deduce
                    // that this document does not exist and apply a deleted document to
                    // our updates. Without applying this deleted document there might be
                    // another query that will raise this document as part of a snapshot
                    // until it is resolved, essentially exposing inconsistency between
                    // queries.
                    const n = new St(t.path);
                    this.ct(e, n, Wt.newNoDocument(n, ct.min()));
                } else B$1(1 === n); else {
                    this._t(e) !== n && (
                    // Existence filter mismatch: We reset the mapping and raise a new
                    // snapshot with `isFromCache:true`.
                    this.ft(e), this.rt = this.rt.add(e));
                }
            }
        }
        /**
         * Converts the currently accumulated state into a remote event at the
         * provided snapshot version. Resets the accumulated changes before returning.
         */    gt(t) {
            const e = new Map;
            this.nt.forEach(((n, s) => {
                const i = this.wt(s);
                if (i) {
                    if (n.current && Xt(i.target)) {
                        // Document queries for document that don't exist can produce an empty
                        // result set. To update our local cache, we synthesize a document
                        // delete if we have not previously received the document. This
                        // resolves the limbo state of the document, removing it from
                        // limboDocumentRefs.
                        // TODO(dimond): Ideally we would have an explicit lookup target
                        // instead resulting in an explicit delete message and we could
                        // remove this special logic.
                        const e = new St(i.target.path);
                        null !== this.st.get(e) || this.yt(s, e) || this.ct(s, e, Wt.newNoDocument(e, t));
                    }
                    n.j && (e.set(s, n.G()), n.H());
                }
            }));
            let n = Sn();
            // We extract the set of limbo-only document updates as the GC logic
            // special-cases documents that do not appear in the target cache.
            
            // TODO(gsoltis): Expand on this comment once GC is available in the JS
            // client.
                    this.it.forEach(((t, e) => {
                let s = !0;
                e.forEachWhile((t => {
                    const e = this.wt(t);
                    return !e || 2 /* LimboResolution */ === e.purpose || (s = !1, !1);
                })), s && (n = n.add(t));
            }));
            const s = new Nn(t, e, this.rt, this.st, n);
            return this.st = An(), this.it = Ln(), this.rt = new Tn(it), s;
        }
        /**
         * Adds the provided document to the internal list of document updates and
         * its document key to the given target's mapping.
         */
        // Visible for testing.
        at(t, e) {
            if (!this.lt(t)) return;
            const n = this.yt(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.ht(t).J(e.key, n), this.st = this.st.insert(e.key, e), this.it = this.it.insert(e.key, this.Tt(e.key).add(t));
        }
        /**
         * Removes the provided document from the target mapping. If the
         * document no longer matches the target, but the document's state is still
         * known (e.g. we know that the document was deleted or we received the change
         * that caused the filter mismatch), the new document can be provided
         * to update the remote document cache.
         */
        // Visible for testing.
        ct(t, e, n) {
            if (!this.lt(t)) return;
            const s = this.ht(t);
            this.yt(t, e) ? s.J(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            s.Y(e), this.it = this.it.insert(e, this.Tt(e).delete(t)), n && (this.st = this.st.insert(e, n));
        }
        removeTarget(t) {
            this.nt.delete(t);
        }
        /**
         * Returns the current count of documents in the target. This includes both
         * the number of documents that the LocalStore considers to be part of the
         * target as well as any accumulated changes.
         */    _t(t) {
            const e = this.ht(t).G();
            return this.et.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
        }
        /**
         * Increment the number of acks needed from watch before we can consider the
         * server to be 'in-sync' with the client's active targets.
         */    X(t) {
            this.ht(t).X();
        }
        ht(t) {
            let e = this.nt.get(t);
            return e || (e = new On, this.nt.set(t, e)), e;
        }
        Tt(t) {
            let e = this.it.get(t);
            return e || (e = new Tn(it), this.it = this.it.insert(t, e)), e;
        }
        /**
         * Verifies that the user is still interested in this target (by calling
         * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
         * from watch.
         */    lt(t) {
            const e = null !== this.wt(t);
            return e || $("WatchChangeAggregator", "Detected inactive target", t), e;
        }
        /**
         * Returns the TargetData for an active target (i.e. a target that the user
         * is still interested in that has no outstanding target change requests).
         */    wt(t) {
            const e = this.nt.get(t);
            return e && e.K ? null : this.et.Et(t);
        }
        /**
         * Resets the state of a Watch target to its initial state (e.g. sets
         * 'current' to false, clears the resume token and removes its target mapping
         * from all documents).
         */    ft(t) {
            this.nt.set(t, new On);
            this.et.getRemoteKeysForTarget(t).forEach((e => {
                this.ct(t, e, /*updatedDocument=*/ null);
            }));
        }
        /**
         * Returns whether the LocalStore considers the document to be part of the
         * specified target.
         */    yt(t, e) {
            return this.et.getRemoteKeysForTarget(t).has(e);
        }
    }

    function Ln() {
        return new gn(St.comparator);
    }

    function Bn() {
        return new gn(St.comparator);
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const Un = (() => {
        const t = {
            asc: "ASCENDING",
            desc: "DESCENDING"
        };
        return t;
    })(), qn = (() => {
        const t = {
            "<": "LESS_THAN",
            "<=": "LESS_THAN_OR_EQUAL",
            ">": "GREATER_THAN",
            ">=": "GREATER_THAN_OR_EQUAL",
            "==": "EQUAL",
            "!=": "NOT_EQUAL",
            "array-contains": "ARRAY_CONTAINS",
            in: "IN",
            "not-in": "NOT_IN",
            "array-contains-any": "ARRAY_CONTAINS_ANY"
        };
        return t;
    })();

    /**
     * This class generates JsonObject values for the Datastore API suitable for
     * sending to either GRPC stub methods or via the JSON/HTTP REST API.
     *
     * The serializer supports both Protobuf.js and Proto3 JSON formats. By
     * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
     * format.
     *
     * For a description of the Proto3 JSON format check
     * https://developers.google.com/protocol-buffers/docs/proto3#json
     *
     * TODO(klimt): We can remove the databaseId argument if we keep the full
     * resource name in documents.
     */
    class Kn {
        constructor(t, e) {
            this.databaseId = t, this.C = e;
        }
    }

    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */
    function jn(t, e) {
        if (t.C) {
            return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
        }
        return {
            seconds: "" + e.seconds,
            nanos: e.nanoseconds
        };
    }

    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */
    function Qn(t, e) {
        return t.C ? e.toBase64() : e.toUint8Array();
    }

    /**
     * Returns a ByteString based on the proto string value.
     */ function Wn(t, e) {
        return jn(t, e.toTimestamp());
    }

    function Gn(t) {
        return B$1(!!t), ct.fromTimestamp(function(t) {
            const e = Tt(t);
            return new at(e.seconds, e.nanos);
        }(t));
    }

    function zn(t, e) {
        return function(t) {
            return new dt([ "projects", t.projectId, "databases", t.database ]);
        }(t).child("documents").child(e).canonicalString();
    }

    function Hn(t) {
        const e = dt.fromString(t);
        return B$1(As(e)), e;
    }

    function Jn(t, e) {
        return zn(t.databaseId, e.path);
    }

    function Yn(t, e) {
        const n = Hn(e);
        if (n.get(1) !== t.databaseId.projectId) throw new j(K$1.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
        if (n.get(3) !== t.databaseId.database) throw new j(K$1.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
        return new St(es(n));
    }

    function Xn(t, e) {
        return zn(t.databaseId, e);
    }

    function Zn(t) {
        const e = Hn(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
            return 4 === e.length ? dt.emptyPath() : es(e);
    }

    function ts(t) {
        return new dt([ "projects", t.databaseId.projectId, "databases", t.databaseId.database ]).canonicalString();
    }

    function es(t) {
        return B$1(t.length > 4 && "documents" === t.get(4)), t.popFirst(5);
    }

    /** Creates a Document proto from key and fields (but no create/update time) */ function ns(t, e, n) {
        return {
            name: Jn(t, e),
            fields: n.value.mapValue.fields
        };
    }

    function rs(t, e) {
        let n;
        if ("targetChange" in e) {
            e.targetChange;
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            const s = function(t) {
                return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : L$1();
            }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t, e) {
                return t.C ? (B$1(void 0 === e || "string" == typeof e), yt.fromBase64String(e || "")) : (B$1(void 0 === e || e instanceof Uint8Array), 
                yt.fromUint8Array(e || new Uint8Array));
            }(t, e.targetChange.resumeToken), o = e.targetChange.cause, a = o && function(t) {
                const e = void 0 === t.code ? K$1.UNKNOWN : mn(t.code);
                return new j(e, t.message || "");
            }
            /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */ (o);
            n = new Fn(s, i, r, a || null);
        } else if ("documentChange" in e) {
            e.documentChange;
            const s = e.documentChange;
            s.document, s.document.name, s.document.updateTime;
            const i = Yn(t, s.document.name), r = Gn(s.document.updateTime), o = new jt({
                mapValue: {
                    fields: s.document.fields
                }
            }), a = Wt.newFoundDocument(i, r, o), c = s.targetIds || [], u = s.removedTargetIds || [];
            n = new xn(c, u, a.key, a);
        } else if ("documentDelete" in e) {
            e.documentDelete;
            const s = e.documentDelete;
            s.document;
            const i = Yn(t, s.document), r = s.readTime ? Gn(s.readTime) : ct.min(), o = Wt.newNoDocument(i, r), a = s.removedTargetIds || [];
            n = new xn([], a, o.key, o);
        } else if ("documentRemove" in e) {
            e.documentRemove;
            const s = e.documentRemove;
            s.document;
            const i = Yn(t, s.document), r = s.removedTargetIds || [];
            n = new xn([], r, i, null);
        } else {
            if (!("filter" in e)) return L$1();
            {
                e.filter;
                const t = e.filter;
                t.targetId;
                const s = t.count || 0, i = new fn(s), r = t.targetId;
                n = new $n(r, i);
            }
        }
        return n;
    }

    function os(t, e) {
        let n;
        if (e instanceof rn) n = {
            update: ns(t, e.key, e.value)
        }; else if (e instanceof hn) n = {
            delete: Jn(t, e.key)
        }; else if (e instanceof on) n = {
            update: ns(t, e.key, e.data),
            updateMask: Is(e.fieldMask)
        }; else {
            if (!(e instanceof ln)) return L$1();
            n = {
                verify: Jn(t, e.key)
            };
        }
        return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t => function(t, e) {
            const n = e.transform;
            if (n instanceof Le) return {
                fieldPath: e.field.canonicalString(),
                setToServerValue: "REQUEST_TIME"
            };
            if (n instanceof Be) return {
                fieldPath: e.field.canonicalString(),
                appendMissingElements: {
                    values: n.elements
                }
            };
            if (n instanceof qe) return {
                fieldPath: e.field.canonicalString(),
                removeAllFromArray: {
                    values: n.elements
                }
            };
            if (n instanceof je) return {
                fieldPath: e.field.canonicalString(),
                increment: n.N
            };
            throw L$1();
        }(0, t)))), e.precondition.isNone || (n.currentDocument = function(t, e) {
            return void 0 !== e.updateTime ? {
                updateTime: Wn(t, e.updateTime)
            } : void 0 !== e.exists ? {
                exists: e.exists
            } : L$1();
        }(t, e.precondition)), n;
    }

    function cs(t, e) {
        return t && t.length > 0 ? (B$1(void 0 !== e), t.map((t => function(t, e) {
            // NOTE: Deletes don't have an updateTime.
            let n = t.updateTime ? Gn(t.updateTime) : Gn(e);
            return n.isEqual(ct.min()) && (
            // The Firestore Emulator currently returns an update time of 0 for
            // deletes of non-existing documents (rather than null). This breaks the
            // test "get deleted doc while offline with source=cache" as NoDocuments
            // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
            // TODO(#2149): Remove this when Emulator is fixed
            n = Gn(e)), new He(n, t.transformResults || []);
        }(t, e)))) : [];
    }

    function us(t, e) {
        return {
            documents: [ Xn(t, e.path) ]
        };
    }

    function hs(t, e) {
        // Dissect the path into parent, collectionId, and optional key filter.
        const n = {
            structuredQuery: {}
        }, s = e.path;
        null !== e.collectionGroup ? (n.parent = Xn(t, s), n.structuredQuery.from = [ {
            collectionId: e.collectionGroup,
            allDescendants: !0
        } ]) : (n.parent = Xn(t, s.popLast()), n.structuredQuery.from = [ {
            collectionId: s.lastSegment()
        } ]);
        const i = function(t) {
            if (0 === t.length) return;
            const e = t.map((t => 
            // visible for testing
            function(t) {
                if ("==" /* EQUAL */ === t.op) {
                    if (Ut(t.value)) return {
                        unaryFilter: {
                            field: ys(t.field),
                            op: "IS_NAN"
                        }
                    };
                    if (Bt(t.value)) return {
                        unaryFilter: {
                            field: ys(t.field),
                            op: "IS_NULL"
                        }
                    };
                } else if ("!=" /* NOT_EQUAL */ === t.op) {
                    if (Ut(t.value)) return {
                        unaryFilter: {
                            field: ys(t.field),
                            op: "IS_NOT_NAN"
                        }
                    };
                    if (Bt(t.value)) return {
                        unaryFilter: {
                            field: ys(t.field),
                            op: "IS_NOT_NULL"
                        }
                    };
                }
                return {
                    fieldFilter: {
                        field: ys(t.field),
                        op: gs(t.op),
                        value: t.value
                    }
                };
            }(t)));
            if (1 === e.length) return e[0];
            return {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }(e.filters);
        i && (n.structuredQuery.where = i);
        const r = function(t) {
            if (0 === t.length) return;
            return t.map((t => 
            // visible for testing
            function(t) {
                return {
                    field: ys(t.field),
                    direction: ms(t.dir)
                };
            }(t)));
        }(e.orderBy);
        r && (n.structuredQuery.orderBy = r);
        const o = function(t, e) {
            return t.C || bt(e) ? e : {
                value: e
            };
        }
        /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     */ (t, e.limit);
        return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = ws(e.startAt)), 
        e.endAt && (n.structuredQuery.endAt = ws(e.endAt)), n;
    }

    function ls(t) {
        let e = Zn(t.parent);
        const n = t.structuredQuery, s = n.from ? n.from.length : 0;
        let i = null;
        if (s > 0) {
            B$1(1 === s);
            const t = n.from[0];
            t.allDescendants ? i = t.collectionId : e = e.child(t.collectionId);
        }
        let r = [];
        n.where && (r = ds(n.where));
        let o = [];
        n.orderBy && (o = n.orderBy.map((t => function(t) {
            return new le(ps(t.field), 
            // visible for testing
            function(t) {
                switch (t) {
                  case "ASCENDING":
                    return "asc" /* ASCENDING */;

                  case "DESCENDING":
                    return "desc" /* DESCENDING */;

                  default:
                    return;
                }
            }
            // visible for testing
            (t.direction));
        }(t))));
        let a = null;
        n.limit && (a = function(t) {
            let e;
            return e = "object" == typeof t ? t.value : t, bt(e) ? null : e;
        }(n.limit));
        let c = null;
        n.startAt && (c = _s(n.startAt));
        let u = null;
        return n.endAt && (u = _s(n.endAt)), me(e, i, o, r, a, "F" /* First */ , c, u);
    }

    function fs(t, e) {
        const n = function(t, e) {
            switch (e) {
              case 0 /* Listen */ :
                return null;

              case 1 /* ExistenceFilterMismatch */ :
                return "existence-filter-mismatch";

              case 2 /* LimboResolution */ :
                return "limbo-document";

              default:
                return L$1();
            }
        }(0, e.purpose);
        return null == n ? null : {
            "goog-listen-tags": n
        };
    }

    function ds(t) {
        return t ? void 0 !== t.unaryFilter ? [ Es(t) ] : void 0 !== t.fieldFilter ? [ Ts(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((t => ds(t))).reduce(((t, e) => t.concat(e))) : L$1() : [];
    }

    function ws(t) {
        return {
            before: t.before,
            values: t.position
        };
    }

    function _s(t) {
        const e = !!t.before, n = t.values || [];
        return new ue(n, e);
    }

    // visible for testing
    function ms(t) {
        return Un[t];
    }

    function gs(t) {
        return qn[t];
    }

    function ys(t) {
        return {
            fieldPath: t.canonicalString()
        };
    }

    function ps(t) {
        return _t.fromServerFormat(t.fieldPath);
    }

    function Ts(t) {
        return Zt.create(ps(t.fieldFilter.field), function(t) {
            switch (t) {
              case "EQUAL":
                return "==" /* EQUAL */;

              case "NOT_EQUAL":
                return "!=" /* NOT_EQUAL */;

              case "GREATER_THAN":
                return ">" /* GREATER_THAN */;

              case "GREATER_THAN_OR_EQUAL":
                return ">=" /* GREATER_THAN_OR_EQUAL */;

              case "LESS_THAN":
                return "<" /* LESS_THAN */;

              case "LESS_THAN_OR_EQUAL":
                return "<=" /* LESS_THAN_OR_EQUAL */;

              case "ARRAY_CONTAINS":
                return "array-contains" /* ARRAY_CONTAINS */;

              case "IN":
                return "in" /* IN */;

              case "NOT_IN":
                return "not-in" /* NOT_IN */;

              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

              default:
                return L$1();
            }
        }(t.fieldFilter.op), t.fieldFilter.value);
    }

    function Es(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            const e = ps(t.unaryFilter.field);
            return Zt.create(e, "==" /* EQUAL */ , {
                doubleValue: NaN
            });

          case "IS_NULL":
            const n = ps(t.unaryFilter.field);
            return Zt.create(n, "==" /* EQUAL */ , {
                nullValue: "NULL_VALUE"
            });

          case "IS_NOT_NAN":
            const s = ps(t.unaryFilter.field);
            return Zt.create(s, "!=" /* NOT_EQUAL */ , {
                doubleValue: NaN
            });

          case "IS_NOT_NULL":
            const i = ps(t.unaryFilter.field);
            return Zt.create(i, "!=" /* NOT_EQUAL */ , {
                nullValue: "NULL_VALUE"
            });

          default:
            return L$1();
        }
    }

    function Is(t) {
        const e = [];
        return t.fields.forEach((t => e.push(t.canonicalString()))), {
            fieldPaths: e
        };
    }

    function As(t) {
        // Resource names have at least 4 components (project ID, database ID)
        return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
    }

    // Visible for testing
    const Qs = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";

    // V2 is no longer usable (see comment at top of file)
    // Visible for testing
    /**
     * A base class representing a persistence transaction, encapsulating both the
     * transaction's sequence numbers as well as a list of onCommitted listeners.
     *
     * When you call Persistence.runTransaction(), it will create a transaction and
     * pass it to your callback. You then pass it to any method that operates
     * on persistence.
     */
    class Ws {
        constructor() {
            this.onCommittedListeners = [];
        }
        addOnCommittedListener(t) {
            this.onCommittedListeners.push(t);
        }
        raiseOnCommittedEvent() {
            this.onCommittedListeners.forEach((t => t()));
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * PersistencePromise is essentially a re-implementation of Promise except
     * it has a .next() method instead of .then() and .next() and .catch() callbacks
     * are executed synchronously when a PersistencePromise resolves rather than
     * asynchronously (Promise implementations use setImmediate() or similar).
     *
     * This is necessary to interoperate with IndexedDB which will automatically
     * commit transactions if control is returned to the event loop without
     * synchronously initiating another operation on the transaction.
     *
     * NOTE: .then() and .catch() only allow a single consumer, unlike normal
     * Promises.
     */ class Gs {
        constructor(t) {
            // NOTE: next/catchCallback will always point to our own wrapper functions,
            // not the user's raw next() or catch() callbacks.
            this.nextCallback = null, this.catchCallback = null, 
            // When the operation resolves, we'll set result or error and mark isDone.
            this.result = void 0, this.error = void 0, this.isDone = !1, 
            // Set to true when .then() or .catch() are called and prevents additional
            // chaining.
            this.callbackAttached = !1, t((t => {
                this.isDone = !0, this.result = t, this.nextCallback && 
                // value should be defined unless T is Void, but we can't express
                // that in the type system.
                this.nextCallback(t);
            }), (t => {
                this.isDone = !0, this.error = t, this.catchCallback && this.catchCallback(t);
            }));
        }
        catch(t) {
            return this.next(void 0, t);
        }
        next(t, e) {
            return this.callbackAttached && L$1(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t, this.result) : new Gs(((n, s) => {
                this.nextCallback = e => {
                    this.wrapSuccess(t, e).next(n, s);
                }, this.catchCallback = t => {
                    this.wrapFailure(e, t).next(n, s);
                };
            }));
        }
        toPromise() {
            return new Promise(((t, e) => {
                this.next(t, e);
            }));
        }
        wrapUserFunction(t) {
            try {
                const e = t();
                return e instanceof Gs ? e : Gs.resolve(e);
            } catch (t) {
                return Gs.reject(t);
            }
        }
        wrapSuccess(t, e) {
            return t ? this.wrapUserFunction((() => t(e))) : Gs.resolve(e);
        }
        wrapFailure(t, e) {
            return t ? this.wrapUserFunction((() => t(e))) : Gs.reject(e);
        }
        static resolve(t) {
            return new Gs(((e, n) => {
                e(t);
            }));
        }
        static reject(t) {
            return new Gs(((e, n) => {
                n(t);
            }));
        }
        static waitFor(
        // Accept all Promise types in waitFor().
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        t) {
            return new Gs(((e, n) => {
                let s = 0, i = 0, r = !1;
                t.forEach((t => {
                    ++s, t.next((() => {
                        ++i, r && i === s && e();
                    }), (t => n(t)));
                })), r = !0, i === s && e();
            }));
        }
        /**
         * Given an array of predicate functions that asynchronously evaluate to a
         * boolean, implements a short-circuiting `or` between the results. Predicates
         * will be evaluated until one of them returns `true`, then stop. The final
         * result will be whether any of them returned `true`.
         */    static or(t) {
            let e = Gs.resolve(!1);
            for (const n of t) e = e.next((t => t ? Gs.resolve(t) : n()));
            return e;
        }
        static forEach(t, e) {
            const n = [];
            return t.forEach(((t, s) => {
                n.push(e.call(this, t, s));
            })), this.waitFor(n);
        }
    }

    /** Verifies whether `e` is an IndexedDbTransactionError. */ function Xs(t) {
        // Use name equality, as instanceof checks on errors don't work with errors
        // that wrap other errors.
        return "IndexedDbTransactionError" === t.name;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A batch of mutations that will be sent as one unit to the backend.
     */ class ri {
        /**
         * @param batchId - The unique ID of this mutation batch.
         * @param localWriteTime - The original write time of this mutation.
         * @param baseMutations - Mutations that are used to populate the base
         * values when this mutation is applied locally. This can be used to locally
         * overwrite values that are persisted in the remote document cache. Base
         * mutations are never sent to the backend.
         * @param mutations - The user-provided mutations in this mutation batch.
         * User-provided mutations are applied both locally and remotely on the
         * backend.
         */
        constructor(t, e, n, s) {
            this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
        }
        /**
         * Applies all the mutations in this MutationBatch to the specified document
         * to compute the state of the remote document
         *
         * @param document - The document to apply mutations to.
         * @param batchResult - The result of applying the MutationBatch to the
         * backend.
         */    applyToRemoteDocument(t, e) {
            const n = e.mutationResults;
            for (let e = 0; e < this.mutations.length; e++) {
                const s = this.mutations[e];
                if (s.key.isEqual(t.key)) {
                    Ze(s, t, n[e]);
                }
            }
        }
        /**
         * Computes the local view of a document given all the mutations in this
         * batch.
         *
         * @param document - The document to apply mutations to.
         */    applyToLocalView(t) {
            // First, apply the base state. This allows us to apply non-idempotent
            // transform against a consistent set of values.
            for (const e of this.baseMutations) e.key.isEqual(t.key) && tn(e, t, this.localWriteTime);
            // Second, apply all user-provided mutations.
                    for (const e of this.mutations) e.key.isEqual(t.key) && tn(e, t, this.localWriteTime);
        }
        /**
         * Computes the local view for all provided documents given the mutations in
         * this batch.
         */    applyToLocalDocumentSet(t) {
            // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
            // directly (as done in `applyToLocalView()`), we can reduce the complexity
            // to O(n).
            this.mutations.forEach((e => {
                const n = t.get(e.key), s = n;
                // TODO(mutabledocuments): This method should take a MutableDocumentMap
                // and we should remove this cast.
                            this.applyToLocalView(s), n.isValidDocument() || s.convertToNoDocument(ct.min());
            }));
        }
        keys() {
            return this.mutations.reduce(((t, e) => t.add(e.key)), Sn());
        }
        isEqual(t) {
            return this.batchId === t.batchId && rt(this.mutations, t.mutations, ((t, e) => nn(t, e))) && rt(this.baseMutations, t.baseMutations, ((t, e) => nn(t, e)));
        }
    }

    /** The result of applying a mutation batch to the backend. */ class oi {
        constructor(t, e, n, 
        /**
         * A pre-computed mapping from each mutated document to the resulting
         * version.
         */
        s) {
            this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = s;
        }
        /**
         * Creates a new MutationBatchResult for the given batch and results. There
         * must be one result for each mutation in the batch. This static factory
         * caches a document=&gt;version mapping (docVersions).
         */    static from(t, e, n) {
            B$1(t.mutations.length === n.length);
            let s = vn();
            const i = t.mutations;
            for (let t = 0; t < i.length; t++) s = s.insert(i[t].key, n[t].version);
            return new oi(t, e, n, s);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An immutable set of metadata that the local store tracks for each target.
     */ class ai {
        constructor(
        /** The target being listened to. */
        t, 
        /**
         * The target ID to which the target corresponds; Assigned by the
         * LocalStore for user listens and by the SyncEngine for limbo watches.
         */
        e, 
        /** The purpose of the target. */
        n, 
        /**
         * The sequence number of the last transaction during which this target data
         * was modified.
         */
        s, 
        /** The latest snapshot version seen for this target. */
        i = ct.min()
        /**
         * The maximum snapshot version at which the associated view
         * contained no limbo documents.
         */ , r = ct.min()
        /**
         * An opaque, server-assigned token that allows watching a target to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the target. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */ , o = yt.EMPTY_BYTE_STRING) {
            this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, 
            this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
        }
        /** Creates a new target data instance with an updated sequence number. */    withSequenceNumber(t) {
            return new ai(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
        }
        /**
         * Creates a new target data instance with an updated resume token and
         * snapshot version.
         */    withResumeToken(t, e) {
            return new ai(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t);
        }
        /**
         * Creates a new target data instance with an updated last limbo free
         * snapshot version number.
         */    withLastLimboFreeSnapshotVersion(t) {
            return new ai(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /** Serializer for values stored in the LocalStore. */ class ci {
        constructor(t) {
            this.Gt = t;
        }
    }

    /**
     * A helper function for figuring out what kind of query has been stored.
     */
    /**
     * Encodes a `BundledQuery` from bundle proto to a Query object.
     *
     * This reconstructs the original query used to build the bundle being loaded,
     * including features exists only in SDKs (for example: limit-to-last).
     */
    function yi(t) {
        const e = ls({
            parent: t.parent,
            structuredQuery: t.structuredQuery
        });
        return "LAST" === t.limitType ? Pe(e, e.limit, "L" /* Last */) : e;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An in-memory implementation of IndexManager.
     */ class Ii {
        constructor() {
            this.zt = new Ai;
        }
        addToCollectionParentIndex(t, e) {
            return this.zt.add(e), Gs.resolve();
        }
        getCollectionParents(t, e) {
            return Gs.resolve(this.zt.getEntries(e));
        }
    }

    /**
     * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
     * Also used for in-memory caching by IndexedDbIndexManager and initial index population
     * in indexeddb_schema.ts
     */ class Ai {
        constructor() {
            this.index = {};
        }
        // Returns false if the entry already existed.
        add(t) {
            const e = t.lastSegment(), n = t.popLast(), s = this.index[e] || new Tn(dt.comparator), i = !s.has(n);
            return this.index[e] = s.add(n), i;
        }
        has(t) {
            const e = t.lastSegment(), n = t.popLast(), s = this.index[e];
            return s && s.has(n);
        }
        getEntries(t) {
            return (this.index[t] || new Tn(dt.comparator)).toArray();
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /** Offset to ensure non-overlapping target ids. */
    /**
     * Generates monotonically increasing target IDs for sending targets to the
     * watch stream.
     *
     * The client constructs two generators, one for the target cache, and one for
     * for the sync engine (to generate limbo documents targets). These
     * generators produce non-overlapping IDs (by using even and odd IDs
     * respectively).
     *
     * By separating the target ID space, the query cache can generate target IDs
     * that persist across client restarts, while sync engine can independently
     * generate in-memory target IDs that are transient and can be reused after a
     * restart.
     */
    class $i {
        constructor(t) {
            this.se = t;
        }
        next() {
            return this.se += 2, this.se;
        }
        static ie() {
            // The target cache generator must return '2' in its first call to `next()`
            // as there is no differentiation in the protocol layer between an unset
            // number and the number '0'. If we were to sent a target with target ID
            // '0', the backend would consider it unset and replace it with its own ID.
            return new $i(0);
        }
        static re() {
            // Sync engine assigns target IDs for limbo document detection.
            return new $i(-1);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Verifies the error thrown by a LocalStore operation. If a LocalStore
     * operation fails because the primary lease has been taken by another client,
     * we ignore the error (the persistence layer will immediately call
     * `applyPrimaryLease` to propagate the primary state change). All other errors
     * are re-thrown.
     *
     * @param err - An error returned by a LocalStore operation.
     * @returns A Promise that resolves after we recovered, or the original error.
     */ async function Bi(t) {
        if (t.code !== K$1.FAILED_PRECONDITION || t.message !== Qs) throw t;
        $("LocalStore", "Unexpectedly lost primary lease");
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A map implementation that uses objects as keys. Objects must have an
     * associated equals function and must be immutable. Entries in the map are
     * stored together with the key being produced from the mapKeyFn. This map
     * automatically handles collisions of keys.
     */ class Gi {
        constructor(t, e) {
            this.mapKeyFn = t, this.equalsFn = e, 
            /**
             * The inner map for a key/value pair. Due to the possibility of collisions we
             * keep a list of entries that we do a linear search through to find an actual
             * match. Note that collisions should be rare, so we still expect near
             * constant time lookups in practice.
             */
            this.inner = {};
        }
        /** Get a value for this key, or undefined if it does not exist. */    get(t) {
            const e = this.mapKeyFn(t), n = this.inner[e];
            if (void 0 !== n) for (const [e, s] of n) if (this.equalsFn(e, t)) return s;
        }
        has(t) {
            return void 0 !== this.get(t);
        }
        /** Put this key and value in the map. */    set(t, e) {
            const n = this.mapKeyFn(t), s = this.inner[n];
            if (void 0 !== s) {
                for (let n = 0; n < s.length; n++) if (this.equalsFn(s[n][0], t)) return void (s[n] = [ t, e ]);
                s.push([ t, e ]);
            } else this.inner[n] = [ [ t, e ] ];
        }
        /**
         * Remove this key from the map. Returns a boolean if anything was deleted.
         */    delete(t) {
            const e = this.mapKeyFn(t), n = this.inner[e];
            if (void 0 === n) return !1;
            for (let s = 0; s < n.length; s++) if (this.equalsFn(n[s][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(s, 1), 
            !0;
            return !1;
        }
        forEach(t) {
            ht(this.inner, ((e, n) => {
                for (const [e, s] of n) t(e, s);
            }));
        }
        isEmpty() {
            return lt(this.inner);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An in-memory buffer of entries to be written to a RemoteDocumentCache.
     * It can be used to batch up a set of changes to be written to the cache, but
     * additionally supports reading entries back with the `getEntry()` method,
     * falling back to the underlying RemoteDocumentCache if no entry is
     * buffered.
     *
     * Entries added to the cache *must* be read first. This is to facilitate
     * calculating the size delta of the pending changes.
     *
     * PORTING NOTE: This class was implemented then removed from other platforms.
     * If byte-counting ends up being needed on the other platforms, consider
     * porting this class as part of that implementation work.
     */ class zi {
        constructor() {
            // A mapping of document key to the new cache entry that should be written (or null if any
            // existing cache entry should be removed).
            this.changes = new Gi((t => t.toString()), ((t, e) => t.isEqual(e))), this.changesApplied = !1;
        }
        getReadTime(t) {
            const e = this.changes.get(t);
            return e ? e.readTime : ct.min();
        }
        /**
         * Buffers a `RemoteDocumentCache.addEntry()` call.
         *
         * You can only modify documents that have already been retrieved via
         * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
         */    addEntry(t, e) {
            this.assertNotApplied(), this.changes.set(t.key, {
                document: t,
                readTime: e
            });
        }
        /**
         * Buffers a `RemoteDocumentCache.removeEntry()` call.
         *
         * You can only remove documents that have already been retrieved via
         * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
         */    removeEntry(t, e = null) {
            this.assertNotApplied(), this.changes.set(t, {
                document: Wt.newInvalidDocument(t),
                readTime: e
            });
        }
        /**
         * Looks up an entry in the cache. The buffered changes will first be checked,
         * and if no buffered change applies, this will forward to
         * `RemoteDocumentCache.getEntry()`.
         *
         * @param transaction - The transaction in which to perform any persistence
         *     operations.
         * @param documentKey - The key of the entry to look up.
         * @returns The cached document or an invalid document if we have nothing
         * cached.
         */    getEntry(t, e) {
            this.assertNotApplied();
            const n = this.changes.get(e);
            return void 0 !== n ? Gs.resolve(n.document) : this.getFromCache(t, e);
        }
        /**
         * Looks up several entries in the cache, forwarding to
         * `RemoteDocumentCache.getEntry()`.
         *
         * @param transaction - The transaction in which to perform any persistence
         *     operations.
         * @param documentKeys - The keys of the entries to look up.
         * @returns A map of cached documents, indexed by key. If an entry cannot be
         *     found, the corresponding key will be mapped to an invalid document.
         */    getEntries(t, e) {
            return this.getAllFromCache(t, e);
        }
        /**
         * Applies buffered changes to the underlying RemoteDocumentCache, using
         * the provided transaction.
         */    apply(t) {
            return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t);
        }
        /** Helper to assert this.changes is not null  */    assertNotApplied() {}
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A readonly view of the local state of all documents we're tracking (i.e. we
     * have a cached version in remoteDocumentCache or local mutations for the
     * document). The view is computed by applying the mutations in the
     * MutationQueue to the RemoteDocumentCache.
     */ class cr {
        constructor(t, e, n) {
            this.Je = t, this.An = e, this.Jt = n;
        }
        /**
         * Get the local view of the document identified by `key`.
         *
         * @returns Local view of the document or null if we don't have any cached
         * state for it.
         */    Rn(t, e) {
            return this.An.getAllMutationBatchesAffectingDocumentKey(t, e).next((n => this.Pn(t, e, n)));
        }
        /** Internal version of `getDocument` that allows reusing batches. */    Pn(t, e, n) {
            return this.Je.getEntry(t, e).next((t => {
                for (const e of n) e.applyToLocalView(t);
                return t;
            }));
        }
        // Returns the view of the given `docs` as they would appear after applying
        // all mutations in the given `batches`.
        bn(t, e) {
            t.forEach(((t, n) => {
                for (const t of e) t.applyToLocalView(n);
            }));
        }
        /**
         * Gets the local view of the documents identified by `keys`.
         *
         * If we don't have cached state for a document in `keys`, a NoDocument will
         * be stored for that key in the resulting set.
         */    vn(t, e) {
            return this.Je.getEntries(t, e).next((e => this.Vn(t, e).next((() => e))));
        }
        /**
         * Applies the local view the given `baseDocs` without retrieving documents
         * from the local store.
         */    Vn(t, e) {
            return this.An.getAllMutationBatchesAffectingDocumentKeys(t, e).next((t => this.bn(e, t)));
        }
        /**
         * Performs a query against the local view of all documents.
         *
         * @param transaction - The persistence transaction.
         * @param query - The query to match documents against.
         * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
         *     documents that have been read since this snapshot version (exclusive).
         */    getDocumentsMatchingQuery(t, e, n) {
            /**
     * Returns whether the query matches a single document by path (rather than a
     * collection).
     */
            return function(t) {
                return St.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
            }(e) ? this.Sn(t, e.path) : Ie(e) ? this.Dn(t, e, n) : this.Cn(t, e, n);
        }
        Sn(t, e) {
            // Just do a simple document lookup.
            return this.Rn(t, new St(e)).next((t => {
                let e = Pn();
                return t.isFoundDocument() && (e = e.insert(t.key, t)), e;
            }));
        }
        Dn(t, e, n) {
            const s = e.collectionGroup;
            let i = Pn();
            return this.Jt.getCollectionParents(t, s).next((r => Gs.forEach(r, (r => {
                const o = function(t, e) {
                    return new _e(e, 
                    /*collectionGroup=*/ null, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
                }
                /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */ (e, r.child(s));
                return this.Cn(t, o, n).next((t => {
                    t.forEach(((t, e) => {
                        i = i.insert(t, e);
                    }));
                }));
            })).next((() => i))));
        }
        Cn(t, e, n) {
            // Query the remote documents and overlay mutations.
            let s, i;
            return this.Je.getDocumentsMatchingQuery(t, e, n).next((n => (s = n, this.An.getAllMutationBatchesAffectingQuery(t, e)))).next((e => (i = e, 
            this.Nn(t, i, s).next((t => {
                s = t;
                for (const t of i) for (const e of t.mutations) {
                    const n = e.key;
                    let i = s.get(n);
                    null == i && (
                    // Create invalid document to apply mutations on top of
                    i = Wt.newInvalidDocument(n), s = s.insert(n, i)), tn(e, i, t.localWriteTime), i.isFoundDocument() || (s = s.remove(n));
                }
            }))))).next((() => (
            // Finally, filter out any documents that don't actually match
            // the query.
            s.forEach(((t, n) => {
                Se(e, n) || (s = s.remove(t));
            })), s)));
        }
        Nn(t, e, n) {
            let s = Sn();
            for (const t of e) for (const e of t.mutations) e instanceof on && null === n.get(e.key) && (s = s.add(e.key));
            let i = n;
            return this.Je.getEntries(t, s).next((t => (t.forEach(((t, e) => {
                e.isFoundDocument() && (i = i.insert(t, e));
            })), i)));
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A set of changes to what documents are currently in view and out of view for
     * a given query. These changes are sent to the LocalStore by the View (via
     * the SyncEngine) and are used to pin / unpin documents as appropriate.
     */ class ur {
        constructor(t, e, n, s) {
            this.targetId = t, this.fromCache = e, this.kn = n, this.xn = s;
        }
        static $n(t, e) {
            let n = Sn(), s = Sn();
            for (const t of e.docChanges) switch (t.type) {
              case 0 /* Added */ :
                n = n.add(t.doc.key);
                break;

              case 1 /* Removed */ :
                s = s.add(t.doc.key);
     // do nothing
                    }
            return new ur(t, e.fromCache, n, s);
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A query engine that takes advantage of the target document mapping in the
     * QueryCache. Query execution is optimized by only reading the documents that
     * previously matched a query plus any documents that were edited after the
     * query was last listened to.
     *
     * There are some cases when this optimization is not guaranteed to produce
     * the same results as full collection scans. In these cases, query
     * processing falls back to full scans. These cases are:
     *
     * - Limit queries where a document that matched the query previously no longer
     *   matches the query.
     *
     * - Limit queries where a document edit may cause the document to sort below
     *   another document that is in the local cache.
     *
     * - Queries that have never been CURRENT or free of limbo documents.
     */ class hr {
        /** Sets the document view to query against. */
        Fn(t) {
            this.On = t;
        }
        /** Returns all local documents matching the specified query. */    getDocumentsMatchingQuery(t, e, n, s) {
            // Queries that match all documents don't benefit from using
            // key-based lookups. It is more efficient to scan all documents in a
            // collection, rather than to perform individual lookups.
            return function(t) {
                return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.explicitOrderBy.length || 1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField());
            }(e) || n.isEqual(ct.min()) ? this.Mn(t, e) : this.On.vn(t, s).next((i => {
                const r = this.Ln(e, i);
                return (ye(e) || pe(e)) && this.Bn(e.limitType, r, s, n) ? this.Mn(t, e) : (k$1() <= LogLevel.DEBUG && $("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), Ve(e)), 
                this.On.getDocumentsMatchingQuery(t, e, n).next((t => (
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                r.forEach((e => {
                    t = t.insert(e.key, e);
                })), t))));
            }));
            // Queries that have never seen a snapshot without limbo free documents
            // should also be run as a full collection scan.
            }
        /** Applies the query filter and sorting to the provided documents.  */    Ln(t, e) {
            // Sort the documents and re-apply the query filter since previously
            // matching documents do not necessarily still match the query.
            let n = new Tn(De(t));
            return e.forEach(((e, s) => {
                Se(t, s) && (n = n.add(s));
            })), n;
        }
        /**
         * Determines if a limit query needs to be refilled from cache, making it
         * ineligible for index-free execution.
         *
         * @param sortedPreviousResults - The documents that matched the query when it
         * was last synchronized, sorted by the query's comparator.
         * @param remoteKeys - The document keys that matched the query at the last
         * snapshot.
         * @param limboFreeSnapshotVersion - The version of the snapshot when the
         * query was last synchronized.
         */    Bn(t, e, n, s) {
            // The query needs to be refilled if a previously matching document no
            // longer matches.
            if (n.size !== e.size) return !0;
            // Limit queries are not eligible for index-free query execution if there is
            // a potential that an older document from cache now sorts before a document
            // that was previously part of the limit. This, however, can only happen if
            // the document at the edge of the limit goes out of limit.
            // If a document that is not the limit boundary sorts differently,
            // the boundary of the limit itself did not change and documents from cache
            // will continue to be "rejected" by this boundary. Therefore, we can ignore
            // any modifications that don't affect the last document.
                    const i = "F" /* First */ === t ? e.last() : e.first();
            return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
        }
        Mn(t, e) {
            return k$1() <= LogLevel.DEBUG && $("QueryEngine", "Using full collection scan to execute query:", Ve(e)), 
            this.On.getDocumentsMatchingQuery(t, e, ct.min());
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Implements `LocalStore` interface.
     *
     * Note: some field defined in this class might have public access level, but
     * the class is not exported so they are only accessible from this module.
     * This is useful to implement optional features (like bundles) in free
     * functions, such that they are tree-shakeable.
     */
    class lr {
        constructor(
        /** Manages our in-memory or durable persistence. */
        t, e, n, s) {
            this.persistence = t, this.Un = e, this.k = s, 
            /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
            this.qn = new gn(it), 
            /** Maps a target to its targetID. */
            // TODO(wuandy): Evaluate if TargetId can be part of Target.
            this.Kn = new Gi((t => Ht(t)), Yt), 
            /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
            this.jn = ct.min(), this.An = t.getMutationQueue(n), this.Qn = t.getRemoteDocumentCache(), 
            this.He = t.getTargetCache(), this.Wn = new cr(this.Qn, this.An, this.persistence.getIndexManager()), 
            this.Ye = t.getBundleCache(), this.Un.Fn(this.Wn);
        }
        collectGarbage(t) {
            return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e => t.collect(e, this.qn)));
        }
    }

    function fr(
    /** Manages our in-memory or durable persistence. */
    t, e, n, s) {
        return new lr(t, e, n, s);
    }

    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    async function dr(t, e) {
        const n = q$1(t);
        let s = n.An, i = n.Wn;
        const r = await n.persistence.runTransaction("Handle user change", "readonly", (t => {
            // Swap out the mutation queue, grabbing the pending mutation batches
            // before and after.
            let r;
            return n.An.getAllMutationBatches(t).next((o => (r = o, s = n.persistence.getMutationQueue(e), 
            // Recreate our LocalDocumentsView using the new
            // MutationQueue.
            i = new cr(n.Qn, s, n.persistence.getIndexManager()), s.getAllMutationBatches(t)))).next((e => {
                const n = [], s = [];
                // Union the old/new changed keys.
                let o = Sn();
                for (const t of r) {
                    n.push(t.batchId);
                    for (const e of t.mutations) o = o.add(e.key);
                }
                for (const t of e) {
                    s.push(t.batchId);
                    for (const e of t.mutations) o = o.add(e.key);
                }
                // Return the set of all (potentially) changed documents and the list
                // of mutation batch IDs that were affected by change.
                            return i.vn(t, o).next((t => ({
                    Gn: t,
                    removedBatchIds: n,
                    addedBatchIds: s
                })));
            }));
        }));
        return n.An = s, n.Wn = i, n.Un.Fn(n.Wn), r;
    }

    /* Accepts locally generated Mutations and commit them to storage. */
    /**
     * Acknowledges the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    function wr(t, e) {
        const n = q$1(t);
        return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t => {
            const s = e.batch.keys(), i = n.Qn.newChangeBuffer({
                trackRemovals: !0
            });
            return function(t, e, n, s) {
                const i = n.batch, r = i.keys();
                let o = Gs.resolve();
                return r.forEach((t => {
                    o = o.next((() => s.getEntry(e, t))).next((e => {
                        const r = n.docVersions.get(t);
                        B$1(null !== r), e.version.compareTo(r) < 0 && (i.applyToRemoteDocument(e, n), e.isValidDocument() && 
                        // We use the commitVersion as the readTime rather than the
                        // document's updateTime since the updateTime is not advanced
                        // for updates that do not modify the underlying document.
                        s.addEntry(e, n.commitVersion));
                    }));
                })), o.next((() => t.An.removeMutationBatch(e, i)));
            }
            /** Returns the local view of the documents affected by a mutation batch. */
            // PORTING NOTE: Multi-Tab only.
            (n, t, e, i).next((() => i.apply(t))).next((() => n.An.performConsistencyCheck(t))).next((() => n.Wn.vn(t, s)));
        }));
    }

    /**
     * Removes mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    function _r(t) {
        const e = q$1(t);
        return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t => e.He.getLastRemoteSnapshotVersion(t)));
    }

    /**
     * Updates the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */ function mr(t, e) {
        const n = q$1(t), s = e.snapshotVersion;
        let i = n.qn;
        return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t => {
            const r = n.Qn.newChangeBuffer({
                trackRemovals: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                    i = n.qn;
            const o = [];
            e.targetChanges.forEach(((e, r) => {
                const a = i.get(r);
                if (!a) return;
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                            o.push(n.He.removeMatchingKeys(t, e.removedDocuments, r).next((() => n.He.addMatchingKeys(t, e.addedDocuments, r))));
                const c = e.resumeToken;
                // Update the resume token if the change includes one.
                            if (c.approximateByteSize() > 0) {
                    const u = a.withResumeToken(c, s).withSequenceNumber(t.currentSequenceNumber);
                    i = i.insert(r, u), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        if (B$1(e.resumeToken.approximateByteSize() > 0), 0 === t.resumeToken.approximateByteSize()) return !0;
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                                            if (e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= 3e8) return !0;
                        // Otherwise if the only thing that has changed about a target is its resume
                        // token it's not worth persisting. Note that the RemoteStore keeps an
                        // in-memory view of the currently active targets which includes the current
                        // resume token, so stream failure or user changes will still use an
                        // up-to-date resume token regardless of what we do here.
                                            return n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0;
                    }
                    /**
     * Notifies local store of the changed views to locally pin documents.
     */ (a, u, e) && o.push(n.He.updateTargetData(t, u));
                }
            }));
            let a = An();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
            if (e.documentUpdates.forEach(((s, i) => {
                e.resolvedLimboDocuments.has(s) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t, s));
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            o.push(gr(t, r, e.documentUpdates, s, void 0).next((t => {
                a = t;
            }))), !s.isEqual(ct.min())) {
                const e = n.He.getLastRemoteSnapshotVersion(t).next((e => n.He.setTargetsMetadata(t, t.currentSequenceNumber, s)));
                o.push(e);
            }
            return Gs.waitFor(o).next((() => r.apply(t))).next((() => n.Wn.Vn(t, a))).next((() => a));
        })).then((t => (n.qn = i, t)));
    }

    /**
     * Populates document change buffer with documents from backend or a bundle.
     * Returns the document changes resulting from applying those documents.
     *
     * @param txn - Transaction to use to read existing documents from storage.
     * @param documentBuffer - Document buffer to collect the resulted changes to be
     *        applied to storage.
     * @param documents - Documents to be applied.
     * @param globalVersion - A `SnapshotVersion` representing the read time if all
     *        documents have the same read time.
     * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
     *        have their own read time.
     *
     * Note: this function will use `documentVersions` if it is defined;
     * when it is not defined, resorts to `globalVersion`.
     */ function gr(t, e, n, s, 
    // TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
    // this parameter.
    i) {
        let r = Sn();
        return n.forEach((t => r = r.add(t))), e.getEntries(t, r).next((t => {
            let r = An();
            return n.forEach(((n, o) => {
                const a = t.get(n), c = (null == i ? void 0 : i.get(n)) || s;
                // Note: The order of the steps below is important, since we want
                // to ensure that rejected limbo resolutions (which fabricate
                // NoDocuments with SnapshotVersion.min()) never add documents to
                // cache.
                o.isNoDocument() && o.version.isEqual(ct.min()) ? (
                // NoDocuments with SnapshotVersion.min() are used in manufactured
                // events. We remove these documents from cache since we lost
                // access.
                e.removeEntry(n, c), r = r.insert(n, o)) : !a.isValidDocument() || o.version.compareTo(a.version) > 0 || 0 === o.version.compareTo(a.version) && a.hasPendingWrites ? (e.addEntry(o, c), 
                r = r.insert(n, o)) : $("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", a.version, " Watch version:", o.version);
            })), r;
        }));
    }

    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId - If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    function yr(t, e) {
        const n = q$1(t);
        return n.persistence.runTransaction("Get next mutation batch", "readonly", (t => (void 0 === e && (e = -1), 
        n.An.getNextMutationBatchAfterBatchId(t, e))));
    }

    /**
     * Reads the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    function pr(t, e) {
        const n = q$1(t);
        return n.persistence.runTransaction("Allocate target", "readwrite", (t => {
            let s;
            return n.He.getTargetData(t, e).next((i => i ? (
            // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            s = i, Gs.resolve(s)) : n.He.allocateTargetId(t).next((i => (s = new ai(e, i, 0 /* Listen */ , t.currentSequenceNumber), 
            n.He.addTargetData(t, s).next((() => s)))))));
        })).then((t => {
            // If Multi-Tab is enabled, the existing target data may be newer than
            // the in-memory data
            const s = n.qn.get(t.targetId);
            return (null === s || t.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.qn = n.qn.insert(t.targetId, t), 
            n.Kn.set(e, t.targetId)), t;
        }));
    }

    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    /**
     * Unpins all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    async function Tr(t, e, n) {
        const s = q$1(t), i = s.qn.get(e), r = n ? "readwrite" : "readwrite-primary";
        try {
            n || await s.persistence.runTransaction("Release target", r, (t => s.persistence.referenceDelegate.removeTarget(t, i)));
        } catch (t) {
            if (!Xs(t)) throw t;
            // All `releaseTarget` does is record the final metadata state for the
            // target, but we've been recording this periodically during target
            // activity. If we lose this write this could cause a very slight
            // difference in the order of target deletion during GC, but we
            // don't define exact LRU semantics so this is acceptable.
            $("LocalStore", `Failed to update sequence numbers for target ${e}: ${t}`);
        }
        s.qn = s.qn.remove(e), s.Kn.delete(i.target);
    }

    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults - Whether results from previous executions can
     * be used to optimize this query execution.
     */ function Er(t, e, n) {
        const s = q$1(t);
        let i = ct.min(), r = Sn();
        return s.persistence.runTransaction("Execute query", "readonly", (t => function(t, e, n) {
            const s = q$1(t), i = s.Kn.get(n);
            return void 0 !== i ? Gs.resolve(s.qn.get(i)) : s.He.getTargetData(e, n);
        }(s, t, Re(e)).next((e => {
            if (e) return i = e.lastLimboFreeSnapshotVersion, s.He.getMatchingKeysForTargetId(t, e.targetId).next((t => {
                r = t;
            }));
        })).next((() => s.Un.getDocumentsMatchingQuery(t, e, n ? i : ct.min(), n ? r : Sn()))).next((t => ({
            documents: t,
            zn: r
        })))));
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class vr {
        constructor(t) {
            this.k = t, this.Xn = new Map, this.Zn = new Map;
        }
        getBundleMetadata(t, e) {
            return Gs.resolve(this.Xn.get(e));
        }
        saveBundleMetadata(t, e) {
            /** Decodes a BundleMetadata proto into a BundleMetadata object. */
            var n;
            return this.Xn.set(e.id, {
                id: (n = e).id,
                version: n.version,
                createTime: Gn(n.createTime)
            }), Gs.resolve();
        }
        getNamedQuery(t, e) {
            return Gs.resolve(this.Zn.get(e));
        }
        saveNamedQuery(t, e) {
            return this.Zn.set(e.name, function(t) {
                return {
                    name: t.name,
                    query: yi(t.bundledQuery),
                    readTime: Gn(t.readTime)
                };
            }(e)), Gs.resolve();
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A collection of references to a document from some kind of numbered entity
     * (either a target ID or batch ID). As references are added to or removed from
     * the set corresponding events are emitted to a registered garbage collector.
     *
     * Each reference is represented by a DocumentReference object. Each of them
     * contains enough information to uniquely identify the reference. They are all
     * stored primarily in a set sorted by key. A document is considered garbage if
     * there's no references in that set (this can be efficiently checked thanks to
     * sorting by key).
     *
     * ReferenceSet also keeps a secondary set that contains references sorted by
     * IDs. This one is used to efficiently implement removal of all references by
     * some target ID.
     */ class Vr {
        constructor() {
            // A set of outstanding references to a document sorted by key.
            this.ts = new Tn(Sr.es), 
            // A set of outstanding references to a document sorted by target id.
            this.ns = new Tn(Sr.ss);
        }
        /** Returns true if the reference set contains no references. */    isEmpty() {
            return this.ts.isEmpty();
        }
        /** Adds a reference to the given document key for the given ID. */    addReference(t, e) {
            const n = new Sr(t, e);
            this.ts = this.ts.add(n), this.ns = this.ns.add(n);
        }
        /** Add references to the given document keys for the given ID. */    rs(t, e) {
            t.forEach((t => this.addReference(t, e)));
        }
        /**
         * Removes a reference to the given document key for the given
         * ID.
         */    removeReference(t, e) {
            this.os(new Sr(t, e));
        }
        cs(t, e) {
            t.forEach((t => this.removeReference(t, e)));
        }
        /**
         * Clears all references with a given ID. Calls removeRef() for each key
         * removed.
         */    us(t) {
            const e = new St(new dt([])), n = new Sr(e, t), s = new Sr(e, t + 1), i = [];
            return this.ns.forEachInRange([ n, s ], (t => {
                this.os(t), i.push(t.key);
            })), i;
        }
        hs() {
            this.ts.forEach((t => this.os(t)));
        }
        os(t) {
            this.ts = this.ts.delete(t), this.ns = this.ns.delete(t);
        }
        ls(t) {
            const e = new St(new dt([])), n = new Sr(e, t), s = new Sr(e, t + 1);
            let i = Sn();
            return this.ns.forEachInRange([ n, s ], (t => {
                i = i.add(t.key);
            })), i;
        }
        containsKey(t) {
            const e = new Sr(t, 0), n = this.ts.firstAfterOrEqual(e);
            return null !== n && t.isEqual(n.key);
        }
    }

    class Sr {
        constructor(t, e) {
            this.key = t, this.fs = e;
        }
        /** Compare by key then by ID */    static es(t, e) {
            return St.comparator(t.key, e.key) || it(t.fs, e.fs);
        }
        /** Compare by ID then by key */    static ss(t, e) {
            return it(t.fs, e.fs) || St.comparator(t.key, e.key);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class Dr {
        constructor(t, e) {
            this.Jt = t, this.referenceDelegate = e, 
            /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
            this.An = [], 
            /** Next value to use when assigning sequential IDs to each mutation batch. */
            this.ds = 1, 
            /** An ordered mapping between documents and the mutations batch IDs. */
            this.ws = new Tn(Sr.es);
        }
        checkEmpty(t) {
            return Gs.resolve(0 === this.An.length);
        }
        addMutationBatch(t, e, n, s) {
            const i = this.ds;
            this.ds++, this.An.length > 0 && this.An[this.An.length - 1];
            const r = new ri(i, e, n, s);
            this.An.push(r);
            // Track references by document key and index collection parents.
            for (const e of s) this.ws = this.ws.add(new Sr(e.key, i)), this.Jt.addToCollectionParentIndex(t, e.key.path.popLast());
            return Gs.resolve(r);
        }
        lookupMutationBatch(t, e) {
            return Gs.resolve(this._s(e));
        }
        getNextMutationBatchAfterBatchId(t, e) {
            const n = e + 1, s = this.gs(n), i = s < 0 ? 0 : s;
            // The requested batchId may still be out of range so normalize it to the
            // start of the queue.
                    return Gs.resolve(this.An.length > i ? this.An[i] : null);
        }
        getHighestUnacknowledgedBatchId() {
            return Gs.resolve(0 === this.An.length ? -1 : this.ds - 1);
        }
        getAllMutationBatches(t) {
            return Gs.resolve(this.An.slice());
        }
        getAllMutationBatchesAffectingDocumentKey(t, e) {
            const n = new Sr(e, 0), s = new Sr(e, Number.POSITIVE_INFINITY), i = [];
            return this.ws.forEachInRange([ n, s ], (t => {
                const e = this._s(t.fs);
                i.push(e);
            })), Gs.resolve(i);
        }
        getAllMutationBatchesAffectingDocumentKeys(t, e) {
            let n = new Tn(it);
            return e.forEach((t => {
                const e = new Sr(t, 0), s = new Sr(t, Number.POSITIVE_INFINITY);
                this.ws.forEachInRange([ e, s ], (t => {
                    n = n.add(t.fs);
                }));
            })), Gs.resolve(this.ys(n));
        }
        getAllMutationBatchesAffectingQuery(t, e) {
            // Use the query path as a prefix for testing if a document matches the
            // query.
            const n = e.path, s = n.length + 1;
            // Construct a document reference for actually scanning the index. Unlike
            // the prefix the document key in this reference must have an even number of
            // segments. The empty segment can be used a suffix of the query path
            // because it precedes all other segments in an ordered traversal.
            let i = n;
            St.isDocumentKey(i) || (i = i.child(""));
            const r = new Sr(new St(i), 0);
            // Find unique batchIDs referenced by all documents potentially matching the
            // query.
                    let o = new Tn(it);
            return this.ws.forEachWhile((t => {
                const e = t.key.path;
                return !!n.isPrefixOf(e) && (
                // Rows with document keys more than one segment longer than the query
                // path can't be matches. For example, a query on 'rooms' can't match
                // the document /rooms/abc/messages/xyx.
                // TODO(mcg): we'll need a different scanner when we implement
                // ancestor queries.
                e.length === s && (o = o.add(t.fs)), !0);
            }), r), Gs.resolve(this.ys(o));
        }
        ys(t) {
            // Construct an array of matching batches, sorted by batchID to ensure that
            // multiple mutations affecting the same document key are applied in order.
            const e = [];
            return t.forEach((t => {
                const n = this._s(t);
                null !== n && e.push(n);
            })), e;
        }
        removeMutationBatch(t, e) {
            B$1(0 === this.ps(e.batchId, "removed")), this.An.shift();
            let n = this.ws;
            return Gs.forEach(e.mutations, (s => {
                const i = new Sr(s.key, e.batchId);
                return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t, s.key);
            })).next((() => {
                this.ws = n;
            }));
        }
        ee(t) {
            // No-op since the memory mutation queue does not maintain a separate cache.
        }
        containsKey(t, e) {
            const n = new Sr(e, 0), s = this.ws.firstAfterOrEqual(n);
            return Gs.resolve(e.isEqual(s && s.key));
        }
        performConsistencyCheck(t) {
            return this.An.length, Gs.resolve();
        }
        /**
         * Finds the index of the given batchId in the mutation queue and asserts that
         * the resulting index is within the bounds of the queue.
         *
         * @param batchId - The batchId to search for
         * @param action - A description of what the caller is doing, phrased in passive
         * form (e.g. "acknowledged" in a routine that acknowledges batches).
         */    ps(t, e) {
            return this.gs(t);
        }
        /**
         * Finds the index of the given batchId in the mutation queue. This operation
         * is O(1).
         *
         * @returns The computed index of the batch with the given batchId, based on
         * the state of the queue. Note this index can be negative if the requested
         * batchId has already been remvoed from the queue or past the end of the
         * queue if the batchId is larger than the last added batch.
         */    gs(t) {
            if (0 === this.An.length) 
            // As an index this is past the end of the queue
            return 0;
            // Examine the front of the queue to figure out the difference between the
            // batchId and indexes in the array. Note that since the queue is ordered
            // by batchId, if the first batch has a larger batchId then the requested
            // batchId doesn't exist in the queue.
                    return t - this.An[0].batchId;
        }
        /**
         * A version of lookupMutationBatch that doesn't return a promise, this makes
         * other functions that uses this code easier to read and more efficent.
         */    _s(t) {
            const e = this.gs(t);
            if (e < 0 || e >= this.An.length) return null;
            return this.An[e];
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
     * `newMemoryRemoteDocumentCache()`.
     */
    class Cr {
        /**
         * @param sizer - Used to assess the size of a document. For eager GC, this is
         * expected to just return 0 to avoid unnecessarily doing the work of
         * calculating the size.
         */
        constructor(t, e) {
            this.Jt = t, this.Ts = e, 
            /** Underlying cache of documents and their read times. */
            this.docs = new gn(St.comparator), 
            /** Size of all cached documents. */
            this.size = 0;
        }
        /**
         * Adds the supplied entry to the cache and updates the cache size as appropriate.
         *
         * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
         * returned by `newChangeBuffer()`.
         */    addEntry(t, e, n) {
            const s = e.key, i = this.docs.get(s), r = i ? i.size : 0, o = this.Ts(e);
            return this.docs = this.docs.insert(s, {
                document: e.clone(),
                size: o,
                readTime: n
            }), this.size += o - r, this.Jt.addToCollectionParentIndex(t, s.path.popLast());
        }
        /**
         * Removes the specified entry from the cache and updates the cache size as appropriate.
         *
         * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
         * returned by `newChangeBuffer()`.
         */    removeEntry(t) {
            const e = this.docs.get(t);
            e && (this.docs = this.docs.remove(t), this.size -= e.size);
        }
        getEntry(t, e) {
            const n = this.docs.get(e);
            return Gs.resolve(n ? n.document.clone() : Wt.newInvalidDocument(e));
        }
        getEntries(t, e) {
            let n = An();
            return e.forEach((t => {
                const e = this.docs.get(t);
                n = n.insert(t, e ? e.document.clone() : Wt.newInvalidDocument(t));
            })), Gs.resolve(n);
        }
        getDocumentsMatchingQuery(t, e, n) {
            let s = An();
            // Documents are ordered by key, so we can use a prefix scan to narrow down
            // the documents we need to match the query against.
                    const i = new St(e.path.child("")), r = this.docs.getIteratorFrom(i);
            for (;r.hasNext(); ) {
                const {key: t, value: {document: i, readTime: o}} = r.getNext();
                if (!e.path.isPrefixOf(t.path)) break;
                o.compareTo(n) <= 0 || Se(e, i) && (s = s.insert(i.key, i.clone()));
            }
            return Gs.resolve(s);
        }
        Es(t, e) {
            return Gs.forEach(this.docs, (t => e(t)));
        }
        newChangeBuffer(t) {
            // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
            // a separate changelog and does not need special handling for removals.
            return new Nr(this);
        }
        getSize(t) {
            return Gs.resolve(this.size);
        }
    }

    /**
     * Creates a new memory-only RemoteDocumentCache.
     *
     * @param indexManager - A class that manages collection group indices.
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    /**
     * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
     */
    class Nr extends zi {
        constructor(t) {
            super(), this.De = t;
        }
        applyChanges(t) {
            const e = [];
            return this.changes.forEach(((n, s) => {
                s.document.isValidDocument() ? e.push(this.De.addEntry(t, s.document, this.getReadTime(n))) : this.De.removeEntry(n);
            })), Gs.waitFor(e);
        }
        getFromCache(t, e) {
            return this.De.getEntry(t, e);
        }
        getAllFromCache(t, e) {
            return this.De.getEntries(t, e);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class kr {
        constructor(t) {
            this.persistence = t, 
            /**
             * Maps a target to the data about that target
             */
            this.Is = new Gi((t => Ht(t)), Yt), 
            /** The last received snapshot version. */
            this.lastRemoteSnapshotVersion = ct.min(), 
            /** The highest numbered target ID encountered. */
            this.highestTargetId = 0, 
            /** The highest sequence number encountered. */
            this.As = 0, 
            /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
            this.Rs = new Vr, this.targetCount = 0, this.Ps = $i.ie();
        }
        forEachTarget(t, e) {
            return this.Is.forEach(((t, n) => e(n))), Gs.resolve();
        }
        getLastRemoteSnapshotVersion(t) {
            return Gs.resolve(this.lastRemoteSnapshotVersion);
        }
        getHighestSequenceNumber(t) {
            return Gs.resolve(this.As);
        }
        allocateTargetId(t) {
            return this.highestTargetId = this.Ps.next(), Gs.resolve(this.highestTargetId);
        }
        setTargetsMetadata(t, e, n) {
            return n && (this.lastRemoteSnapshotVersion = n), e > this.As && (this.As = e), 
            Gs.resolve();
        }
        ce(t) {
            this.Is.set(t.target, t);
            const e = t.targetId;
            e > this.highestTargetId && (this.Ps = new $i(e), this.highestTargetId = e), t.sequenceNumber > this.As && (this.As = t.sequenceNumber);
        }
        addTargetData(t, e) {
            return this.ce(e), this.targetCount += 1, Gs.resolve();
        }
        updateTargetData(t, e) {
            return this.ce(e), Gs.resolve();
        }
        removeTargetData(t, e) {
            return this.Is.delete(e.target), this.Rs.us(e.targetId), this.targetCount -= 1, 
            Gs.resolve();
        }
        removeTargets(t, e, n) {
            let s = 0;
            const i = [];
            return this.Is.forEach(((r, o) => {
                o.sequenceNumber <= e && null === n.get(o.targetId) && (this.Is.delete(r), i.push(this.removeMatchingKeysForTargetId(t, o.targetId)), 
                s++);
            })), Gs.waitFor(i).next((() => s));
        }
        getTargetCount(t) {
            return Gs.resolve(this.targetCount);
        }
        getTargetData(t, e) {
            const n = this.Is.get(e) || null;
            return Gs.resolve(n);
        }
        addMatchingKeys(t, e, n) {
            return this.Rs.rs(e, n), Gs.resolve();
        }
        removeMatchingKeys(t, e, n) {
            this.Rs.cs(e, n);
            const s = this.persistence.referenceDelegate, i = [];
            return s && e.forEach((e => {
                i.push(s.markPotentiallyOrphaned(t, e));
            })), Gs.waitFor(i);
        }
        removeMatchingKeysForTargetId(t, e) {
            return this.Rs.us(e), Gs.resolve();
        }
        getMatchingKeysForTargetId(t, e) {
            const n = this.Rs.ls(e);
            return Gs.resolve(n);
        }
        containsKey(t, e) {
            return Gs.resolve(this.Rs.containsKey(e));
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A memory-backed instance of Persistence. Data is stored only in RAM and
     * not persisted across sessions.
     */
    class xr {
        /**
         * The constructor accepts a factory for creating a reference delegate. This
         * allows both the delegate and this instance to have strong references to
         * each other without having nullable fields that would then need to be
         * checked or asserted on every access.
         */
        constructor(t, e) {
            this.bs = {}, this.Be = new et(0), this.Ue = !1, this.Ue = !0, this.referenceDelegate = t(this), 
            this.He = new kr(this);
            this.Jt = new Ii, this.Je = function(t, e) {
                return new Cr(t, e);
            }(this.Jt, (t => this.referenceDelegate.vs(t))), this.k = new ci(e), this.Ye = new vr(this.k);
        }
        start() {
            return Promise.resolve();
        }
        shutdown() {
            // No durable state to ensure is closed on shutdown.
            return this.Ue = !1, Promise.resolve();
        }
        get started() {
            return this.Ue;
        }
        setDatabaseDeletedListener() {
            // No op.
        }
        setNetworkEnabled() {
            // No op.
        }
        getIndexManager() {
            return this.Jt;
        }
        getMutationQueue(t) {
            let e = this.bs[t.toKey()];
            return e || (e = new Dr(this.Jt, this.referenceDelegate), this.bs[t.toKey()] = e), 
            e;
        }
        getTargetCache() {
            return this.He;
        }
        getRemoteDocumentCache() {
            return this.Je;
        }
        getBundleCache() {
            return this.Ye;
        }
        runTransaction(t, e, n) {
            $("MemoryPersistence", "Starting transaction:", t);
            const s = new $r(this.Be.next());
            return this.referenceDelegate.Vs(), n(s).next((t => this.referenceDelegate.Ss(s).next((() => t)))).toPromise().then((t => (s.raiseOnCommittedEvent(), 
            t)));
        }
        Ds(t, e) {
            return Gs.or(Object.values(this.bs).map((n => () => n.containsKey(t, e))));
        }
    }

    /**
     * Memory persistence is not actually transactional, but future implementations
     * may have transaction-scoped state.
     */ class $r extends Ws {
        constructor(t) {
            super(), this.currentSequenceNumber = t;
        }
    }

    class Fr {
        constructor(t) {
            this.persistence = t, 
            /** Tracks all documents that are active in Query views. */
            this.Cs = new Vr, 
            /** The list of documents that are potentially GCed after each transaction. */
            this.Ns = null;
        }
        static ks(t) {
            return new Fr(t);
        }
        get xs() {
            if (this.Ns) return this.Ns;
            throw L$1();
        }
        addReference(t, e, n) {
            return this.Cs.addReference(n, e), this.xs.delete(n.toString()), Gs.resolve();
        }
        removeReference(t, e, n) {
            return this.Cs.removeReference(n, e), this.xs.add(n.toString()), Gs.resolve();
        }
        markPotentiallyOrphaned(t, e) {
            return this.xs.add(e.toString()), Gs.resolve();
        }
        removeTarget(t, e) {
            this.Cs.us(e.targetId).forEach((t => this.xs.add(t.toString())));
            const n = this.persistence.getTargetCache();
            return n.getMatchingKeysForTargetId(t, e.targetId).next((t => {
                t.forEach((t => this.xs.add(t.toString())));
            })).next((() => n.removeTargetData(t, e)));
        }
        Vs() {
            this.Ns = new Set;
        }
        Ss(t) {
            // Remove newly orphaned documents.
            const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
            return Gs.forEach(this.xs, (n => {
                const s = St.fromPath(n);
                return this.$s(t, s).next((t => {
                    t || e.removeEntry(s);
                }));
            })).next((() => (this.Ns = null, e.apply(t))));
        }
        updateLimboDocument(t, e) {
            return this.$s(t, e).next((t => {
                t ? this.xs.delete(e.toString()) : this.xs.add(e.toString());
            }));
        }
        vs(t) {
            // For eager GC, we don't care about the document size, there are no size thresholds.
            return 0;
        }
        $s(t, e) {
            return Gs.or([ () => Gs.resolve(this.Cs.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t, e), () => this.persistence.Ds(t, e) ]);
        }
    }

    /**
     * Metadata state of the local client. Unlike `RemoteClientState`, this class is
     * mutable and keeps track of all pending mutations, which allows us to
     * update the range of pending mutation batch IDs as new mutations are added or
     * removed.
     *
     * The data in `LocalClientState` is not read from WebStorage and instead
     * updated via its instance methods. The updated state can be serialized via
     * `toWebStorageJSON()`.
     */
    // Visible for testing.
    class jr {
        constructor() {
            this.activeTargetIds = Cn();
        }
        Ms(t) {
            this.activeTargetIds = this.activeTargetIds.add(t);
        }
        Ls(t) {
            this.activeTargetIds = this.activeTargetIds.delete(t);
        }
        /**
         * Converts this entry into a JSON-encoded format we can use for WebStorage.
         * Does not encode `clientId` as it is part of the key in WebStorage.
         */    Os() {
            const t = {
                activeTargetIds: this.activeTargetIds.toArray(),
                updateTimeMs: Date.now()
            };
            return JSON.stringify(t);
        }
    }

    class Wr {
        constructor() {
            this.pi = new jr, this.Ti = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
        }
        addPendingMutation(t) {
            // No op.
        }
        updateMutationState(t, e, n) {
            // No op.
        }
        addLocalQueryTarget(t) {
            return this.pi.Ms(t), this.Ti[t] || "not-current";
        }
        updateQueryState(t, e, n) {
            this.Ti[t] = e;
        }
        removeLocalQueryTarget(t) {
            this.pi.Ls(t);
        }
        isLocalQueryTarget(t) {
            return this.pi.activeTargetIds.has(t);
        }
        clearQueryState(t) {
            delete this.Ti[t];
        }
        getAllActiveQueryTargets() {
            return this.pi.activeTargetIds;
        }
        isActiveQueryTarget(t) {
            return this.pi.activeTargetIds.has(t);
        }
        start() {
            return this.pi = new jr, Promise.resolve();
        }
        handleUserChange(t, e, n) {
            // No op.
        }
        setOnlineState(t) {
            // No op.
        }
        shutdown() {}
        writeSequenceNumber(t) {}
        notifyBundleLoaded() {
            // No op.
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class Gr {
        Ei(t) {
            // No-op.
        }
        shutdown() {
            // No-op.
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
    /* eslint-disable no-restricted-globals */
    /**
     * Browser implementation of ConnectivityMonitor.
     */
    class zr {
        constructor() {
            this.Ii = () => this.Ai(), this.Ri = () => this.Pi(), this.bi = [], this.vi();
        }
        Ei(t) {
            this.bi.push(t);
        }
        shutdown() {
            window.removeEventListener("online", this.Ii), window.removeEventListener("offline", this.Ri);
        }
        vi() {
            window.addEventListener("online", this.Ii), window.addEventListener("offline", this.Ri);
        }
        Ai() {
            $("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
            for (const t of this.bi) t(0 /* AVAILABLE */);
        }
        Pi() {
            $("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
            for (const t of this.bi) t(1 /* UNAVAILABLE */);
        }
        // TODO(chenbrian): Consider passing in window either into this component or
        // here for testing via FakeWindow.
        /** Checks that all used attributes of window are available. */
        static bt() {
            return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const Hr = {
        BatchGetDocuments: "batchGet",
        Commit: "commit",
        RunQuery: "runQuery"
    };

    /**
     * Maps RPC names to the corresponding REST endpoint name.
     *
     * We use array notation to avoid mangling.
     */
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Provides a simple helper class that implements the Stream interface to
     * bridge to other implementations that are streams but do not implement the
     * interface. The stream callbacks are invoked with the callOn... methods.
     */
    class Jr {
        constructor(t) {
            this.Vi = t.Vi, this.Si = t.Si;
        }
        Di(t) {
            this.Ci = t;
        }
        Ni(t) {
            this.ki = t;
        }
        onMessage(t) {
            this.xi = t;
        }
        close() {
            this.Si();
        }
        send(t) {
            this.Vi(t);
        }
        $i() {
            this.Ci();
        }
        Fi(t) {
            this.ki(t);
        }
        Oi(t) {
            this.xi(t);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class Yr extends 
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    class {
        constructor(t) {
            this.databaseInfo = t, this.databaseId = t.databaseId;
            const e = t.ssl ? "https" : "http";
            this.Mi = e + "://" + t.host, this.Li = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
        }
        Bi(t, e, n, s, i) {
            const r = this.Ui(t, e);
            $("RestConnection", "Sending: ", r, n);
            const o = {};
            return this.qi(o, s, i), this.Ki(t, r, o, n).then((t => ($("RestConnection", "Received: ", t), 
            t)), (e => {
                throw O$1("RestConnection", `${t} failed with error: `, e, "url: ", r, "request:", n), 
                e;
            }));
        }
        ji(t, e, n, s, i) {
            // The REST API automatically aggregates all of the streamed results, so we
            // can just use the normal invoke() method.
            return this.Bi(t, e, n, s, i);
        }
        /**
         * Modifies the headers for a request, adding any authorization token if
         * present and any additional headers for the request.
         */    qi(t, e, n) {
            t["X-Goog-Api-Client"] = "gl-js/ fire/" + C$1, 
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the $httpOverwrite
            // parameter supported by ESF to avoid triggering preflight requests.
            t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), 
            e && e.headers.forEach(((e, n) => t[n] = e)), n && n.headers.forEach(((e, n) => t[n] = e));
        }
        Ui(t, e) {
            const n = Hr[t];
            return `${this.Mi}/v1/${e}:${n}`;
        }
    } {
        constructor(t) {
            super(t), this.forceLongPolling = t.forceLongPolling, this.autoDetectLongPolling = t.autoDetectLongPolling, 
            this.useFetchStreams = t.useFetchStreams;
        }
        Ki(t, e, n, s) {
            return new Promise(((i, r) => {
                const o = new XhrIo;
                o.listenOnce(EventType.COMPLETE, (() => {
                    try {
                        switch (o.getLastErrorCode()) {
                          case ErrorCode.NO_ERROR:
                            const e = o.getResponseJson();
                            $("Connection", "XHR received:", JSON.stringify(e)), i(e);
                            break;

                          case ErrorCode.TIMEOUT:
                            $("Connection", 'RPC "' + t + '" timed out'), r(new j(K$1.DEADLINE_EXCEEDED, "Request time out"));
                            break;

                          case ErrorCode.HTTP_ERROR:
                            const n = o.getStatus();
                            if ($("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", o.getResponseText()), 
                            n > 0) {
                                const t = o.getResponseJson().error;
                                if (t && t.status && t.message) {
                                    const e = function(t) {
                                        const e = t.toLowerCase().replace(/_/g, "-");
                                        return Object.values(K$1).indexOf(e) >= 0 ? e : K$1.UNKNOWN;
                                    }(t.status);
                                    r(new j(e, t.message));
                                } else r(new j(K$1.UNKNOWN, "Server responded with status " + o.getStatus()));
                            } else 
                            // If we received an HTTP_ERROR but there's no status code,
                            // it's most probably a connection issue
                            r(new j(K$1.UNAVAILABLE, "Connection failed."));
                            break;

                          default:
                            L$1();
                        }
                    } finally {
                        $("Connection", 'RPC "' + t + '" completed.');
                    }
                }));
                const a = JSON.stringify(s);
                o.send(e, "POST", a, n, 15);
            }));
        }
        Qi(t, e, n) {
            const s = [ this.Mi, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], i = createWebChannelTransport(), r = getStatEventTarget(), o = {
                // Required for backend stickiness, routing behavior is based on this
                // parameter.
                httpSessionIdParam: "gsessionid",
                initMessageHeaders: {},
                messageUrlParams: {
                    // This param is used to improve routing and project isolation by the
                    // backend and must be included in every request.
                    database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0,
                internalChannelParams: {
                    // Override the default timeout (randomized between 10-20 seconds) since
                    // a large write batch on a slow internet connection may take a long
                    // time to send to the backend. Rather than have WebChannel impose a
                    // tight timeout which could lead to infinite timeouts and retries, we
                    // set it very large (5-10 minutes) and rely on the browser's builtin
                    // timeouts to kick in if the request isn't working.
                    forwardChannelRequestTimeoutMs: 6e5
                },
                forceLongPolling: this.forceLongPolling,
                detectBufferingProxy: this.autoDetectLongPolling
            };
            this.useFetchStreams && (o.xmlHttpFactory = new FetchXmlHttpFactory({})), this.qi(o.initMessageHeaders, e, n), 
            // Sending the custom headers we just added to request.initMessageHeaders
            // (Authorization, etc.) will trigger the browser to make a CORS preflight
            // request because the XHR will no longer meet the criteria for a "simple"
            // CORS request:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
            // Therefore to avoid the CORS preflight request (an extra network
            // roundtrip), we use the httpHeadersOverwriteParam option to specify that
            // the headers should instead be encoded into a special "$httpHeaders" query
            // parameter, which is recognized by the webchannel backend. This is
            // formally defined here:
            // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
            // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
            // doesn't have an Origin header. So we have to exclude a few browser environments that are
            // known to (sometimes) not include an Origin. See
            // https://github.com/firebase/firebase-js-sdk/issues/1491.
            isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (o.httpHeadersOverwriteParam = "$httpHeaders");
            const a = s.join("");
            $("Connection", "Creating WebChannel: " + a, o);
            const c = i.createWebChannel(a, o);
            // WebChannel supports sending the first message with the handshake - saving
            // a network round trip. However, it will have to call send in the same
            // JS event loop as open. In order to enforce this, we delay actually
            // opening the WebChannel until send is called. Whether we have called
            // open is tracked with this variable.
                    let u = !1, h = !1;
            // A flag to determine whether the stream was closed (by us or through an
            // error/close event) to avoid delivering multiple close events or sending
            // on a closed stream
                    const g = new Jr({
                Vi: t => {
                    h ? $("Connection", "Not sending because WebChannel is closed:", t) : (u || ($("Connection", "Opening WebChannel transport."), 
                    c.open(), u = !0), $("Connection", "WebChannel sending:", t), c.send(t));
                },
                Si: () => c.close()
            }), y = (t, e, n) => {
                // TODO(dimond): closure typing seems broken because WebChannel does
                // not implement goog.events.Listenable
                t.listen(e, (t => {
                    try {
                        n(t);
                    } catch (t) {
                        setTimeout((() => {
                            throw t;
                        }), 0);
                    }
                }));
            };
            // Closure events are guarded and exceptions are swallowed, so catch any
            // exception and rethrow using a setTimeout so they become visible again.
            // Note that eventually this function could go away if we are confident
            // enough the code is exception free.
                    return y(c, WebChannel.EventType.OPEN, (() => {
                h || $("Connection", "WebChannel transport opened.");
            })), y(c, WebChannel.EventType.CLOSE, (() => {
                h || (h = !0, $("Connection", "WebChannel transport closed"), g.Fi());
            })), y(c, WebChannel.EventType.ERROR, (t => {
                h || (h = !0, O$1("Connection", "WebChannel transport errored:", t), g.Fi(new j(K$1.UNAVAILABLE, "The operation could not be completed")));
            })), y(c, WebChannel.EventType.MESSAGE, (t => {
                var e;
                if (!h) {
                    const n = t.data[0];
                    B$1(!!n);
                    // TODO(b/35143891): There is a bug in One Platform that caused errors
                    // (and only errors) to be wrapped in an extra array. To be forward
                    // compatible with the bug we need to check either condition. The latter
                    // can be removed once the fix has been rolled out.
                    // Use any because msgData.error is not typed.
                    const s = n, i = s.error || (null === (e = s[0]) || void 0 === e ? void 0 : e.error);
                    if (i) {
                        $("Connection", "WebChannel received error:", i);
                        // error.status will be a string like 'OK' or 'NOT_FOUND'.
                        const t = i.status;
                        let e = 
                        /**
     * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
     *
     * @returns The Code equivalent to the given status string or undefined if
     *     there is no match.
     */
                        function(t) {
                            // lookup by string
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const e = dn[t];
                            if (void 0 !== e) return mn(e);
                        }(t), n = i.message;
                        void 0 === e && (e = K$1.INTERNAL, n = "Unknown error status: " + t + " with message " + i.message), 
                        // Mark closed so no further events are propagated
                        h = !0, g.Fi(new j(e, n)), c.close();
                    } else $("Connection", "WebChannel received:", n), g.Oi(n);
                }
            })), y(r, Event.STAT_EVENT, (t => {
                t.stat === Stat.PROXY ? $("Connection", "Detected buffering proxy") : t.stat === Stat.NOPROXY && $("Connection", "Detected no buffering proxy");
            })), setTimeout((() => {
                // Technically we could/should wait for the WebChannel opened event,
                // but because we want to send the first message with the WebChannel
                // handshake we pretend the channel opened here (asynchronously), and
                // then delay the actual open until the first message is sent.
                g.$i();
            }), 0), g;
        }
    }

    /** The Platform's 'document' implementation or null if not available. */ function Zr() {
        // `document` is not always available, e.g. in ReactNative and WebWorkers.
        // eslint-disable-next-line no-restricted-globals
        return "undefined" != typeof document ? document : null;
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function to(t) {
        return new Kn(t, /* useProto3Json= */ !0);
    }

    /**
     * An instance of the Platform's 'TextEncoder' implementation.
     */
    /**
     * A helper for running delayed tasks following an exponential backoff curve
     * between attempts.
     *
     * Each delay is made up of a "base" delay which follows the exponential
     * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
     * base delay. This prevents clients from accidentally synchronizing their
     * delays causing spikes of load to the backend.
     */
    class eo {
        constructor(
        /**
         * The AsyncQueue to run backoff operations on.
         */
        t, 
        /**
         * The ID to use when scheduling backoff operations on the AsyncQueue.
         */
        e, 
        /**
         * The initial delay (used as the base delay on the first retry attempt).
         * Note that jitter will still be applied, so the actual delay could be as
         * little as 0.5*initialDelayMs.
         */
        n = 1e3
        /**
         * The multiplier to use to determine the extended base delay after each
         * attempt.
         */ , s = 1.5
        /**
         * The maximum base delay after which no further backoff is performed.
         * Note that jitter will still be applied, so the actual delay could be as
         * much as 1.5*maxDelayMs.
         */ , i = 6e4) {
            this.Oe = t, this.timerId = e, this.Wi = n, this.Gi = s, this.zi = i, this.Hi = 0, 
            this.Ji = null, 
            /** The last backoff attempt, as epoch milliseconds. */
            this.Yi = Date.now(), this.reset();
        }
        /**
         * Resets the backoff delay.
         *
         * The very next backoffAndWait() will have no delay. If it is called again
         * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
         * subsequent ones will increase according to the backoffFactor.
         */    reset() {
            this.Hi = 0;
        }
        /**
         * Resets the backoff delay to the maximum delay (e.g. for use after a
         * RESOURCE_EXHAUSTED error).
         */    Xi() {
            this.Hi = this.zi;
        }
        /**
         * Returns a promise that resolves after currentDelayMs, and increases the
         * delay for any subsequent attempts. If there was a pending backoff operation
         * already, it will be canceled.
         */    Zi(t) {
            // Cancel any pending backoff operation.
            this.cancel();
            // First schedule using the current base (which may be 0 and should be
            // honored as such).
            const e = Math.floor(this.Hi + this.tr()), n = Math.max(0, Date.now() - this.Yi), s = Math.max(0, e - n);
            // Guard against lastAttemptTime being in the future due to a clock change.
                    s > 0 && $("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), 
            this.Ji = this.Oe.enqueueAfterDelay(this.timerId, s, (() => (this.Yi = Date.now(), 
            t()))), 
            // Apply backoff factor to determine next delay and ensure it is within
            // bounds.
            this.Hi *= this.Gi, this.Hi < this.Wi && (this.Hi = this.Wi), this.Hi > this.zi && (this.Hi = this.zi);
        }
        er() {
            null !== this.Ji && (this.Ji.skipDelay(), this.Ji = null);
        }
        cancel() {
            null !== this.Ji && (this.Ji.cancel(), this.Ji = null);
        }
        /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    tr() {
            return (Math.random() - .5) * this.Hi;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A PersistentStream is an abstract base class that represents a streaming RPC
     * to the Firestore backend. It's built on top of the connections own support
     * for streaming RPCs, and adds several critical features for our clients:
     *
     *   - Exponential backoff on failure
     *   - Authentication via CredentialsProvider
     *   - Dispatching all callbacks into the shared worker queue
     *   - Closing idle streams after 60 seconds of inactivity
     *
     * Subclasses of PersistentStream implement serialization of models to and
     * from the JSON representation of the protocol buffers for a specific
     * streaming RPC.
     *
     * ## Starting and Stopping
     *
     * Streaming RPCs are stateful and need to be start()ed before messages can
     * be sent and received. The PersistentStream will call the onOpen() function
     * of the listener once the stream is ready to accept requests.
     *
     * Should a start() fail, PersistentStream will call the registered onClose()
     * listener with a FirestoreError indicating what went wrong.
     *
     * A PersistentStream can be started and stopped repeatedly.
     *
     * Generic types:
     *  SendType: The type of the outgoing message of the underlying
     *    connection stream
     *  ReceiveType: The type of the incoming message of the underlying
     *    connection stream
     *  ListenerType: The type of the listener that will be used for callbacks
     */
    class no {
        constructor(t, e, n, s, i, r, o, a) {
            this.Oe = t, this.nr = n, this.sr = s, this.ir = i, this.authCredentialsProvider = r, 
            this.appCheckCredentialsProvider = o, this.listener = a, this.state = 0 /* Initial */ , 
            /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
            this.rr = 0, this.ar = null, this.cr = null, this.stream = null, this.ur = new eo(t, e);
        }
        /**
         * Returns true if start() has been called and no error has occurred. True
         * indicates the stream is open or in the process of opening (which
         * encompasses respecting backoff, getting auth tokens, and starting the
         * actual RPC). Use isOpen() to determine if the stream is open and ready for
         * outbound requests.
         */    hr() {
            return 1 /* Starting */ === this.state || 5 /* Backoff */ === this.state || this.lr();
        }
        /**
         * Returns true if the underlying RPC is open (the onOpen() listener has been
         * called) and the stream is ready for outbound requests.
         */    lr() {
            return 2 /* Open */ === this.state || 3 /* Healthy */ === this.state;
        }
        /**
         * Starts the RPC. Only allowed if isStarted() returns false. The stream is
         * not immediately ready for use: onOpen() will be invoked when the RPC is
         * ready for outbound requests, at which point isOpen() will return true.
         *
         * When start returns, isStarted() will return true.
         */    start() {
            4 /* Error */ !== this.state ? this.auth() : this.dr();
        }
        /**
         * Stops the RPC. This call is idempotent and allowed regardless of the
         * current isStarted() state.
         *
         * When stop returns, isStarted() and isOpen() will both return false.
         */    async stop() {
            this.hr() && await this.close(0 /* Initial */);
        }
        /**
         * After an error the stream will usually back off on the next attempt to
         * start it. If the error warrants an immediate restart of the stream, the
         * sender can use this to indicate that the receiver should not back off.
         *
         * Each error will call the onClose() listener. That function can decide to
         * inhibit backoff if required.
         */    wr() {
            this.state = 0 /* Initial */ , this.ur.reset();
        }
        /**
         * Marks this stream as idle. If no further actions are performed on the
         * stream for one minute, the stream will automatically close itself and
         * notify the stream's onClose() handler with Status.OK. The stream will then
         * be in a !isStarted() state, requiring the caller to start the stream again
         * before further use.
         *
         * Only streams that are in state 'Open' can be marked idle, as all other
         * states imply pending network operations.
         */    _r() {
            // Starts the idle time if we are in state 'Open' and are not yet already
            // running a timer (in which case the previous idle timeout still applies).
            this.lr() && null === this.ar && (this.ar = this.Oe.enqueueAfterDelay(this.nr, 6e4, (() => this.mr())));
        }
        /** Sends a message to the underlying stream. */    gr(t) {
            this.yr(), this.stream.send(t);
        }
        /** Called by the idle timer when the stream should close due to inactivity. */    async mr() {
            if (this.lr()) 
            // When timing out an idle stream there's no reason to force the stream into backoff when
            // it restarts so set the stream state to Initial instead of Error.
            return this.close(0 /* Initial */);
        }
        /** Marks the stream as active again. */    yr() {
            this.ar && (this.ar.cancel(), this.ar = null);
        }
        /** Cancels the health check delayed operation. */    pr() {
            this.cr && (this.cr.cancel(), this.cr = null);
        }
        /**
         * Closes the stream and cleans up as necessary:
         *
         * * closes the underlying GRPC stream;
         * * calls the onClose handler with the given 'error';
         * * sets internal stream state to 'finalState';
         * * adjusts the backoff timer based on the error
         *
         * A new stream can be opened by calling start().
         *
         * @param finalState - the intended state of the stream after closing.
         * @param error - the error the connection was closed with.
         */    async close(t, e) {
            // Cancel any outstanding timers (they're guaranteed not to execute).
            this.yr(), this.pr(), this.ur.cancel(), 
            // Invalidates any stream-related callbacks (e.g. from auth or the
            // underlying stream), guaranteeing they won't execute.
            this.rr++, 4 /* Error */ !== t ? 
            // If this is an intentional close ensure we don't delay our next connection attempt.
            this.ur.reset() : e && e.code === K$1.RESOURCE_EXHAUSTED ? (
            // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
            F$1(e.toString()), F$1("Using maximum backoff delay to prevent overloading the backend."), 
            this.ur.Xi()) : e && e.code === K$1.UNAUTHENTICATED && 3 /* Healthy */ !== this.state && (
            // "unauthenticated" error means the token was rejected. This should rarely
            // happen since both Auth and AppCheck ensure a sufficient TTL when we
            // request a token. If a user manually resets their system clock this can
            // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
            // before we received the first message and we need to invalidate the token
            // to ensure that we fetch a new token.
            this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), 
            // Clean up the underlying stream because we are no longer interested in events.
            null !== this.stream && (this.Tr(), this.stream.close(), this.stream = null), 
            // This state must be assigned before calling onClose() to allow the callback to
            // inhibit backoff or otherwise manipulate the state in its non-started state.
            this.state = t, 
            // Notify the listener that the stream closed.
            await this.listener.Ni(e);
        }
        /**
         * Can be overridden to perform additional cleanup before the stream is closed.
         * Calling super.tearDown() is not required.
         */    Tr() {}
        auth() {
            this.state = 1 /* Starting */;
            const t = this.Er(this.rr), e = this.rr;
            // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                    Promise.all([ this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken() ]).then((([t, n]) => {
                // Stream can be stopped while waiting for authentication.
                // TODO(mikelehen): We really should just use dispatchIfNotClosed
                // and let this dispatch onto the queue, but that opened a spec test can
                // of worms that I don't want to deal with in this PR.
                this.rr === e && 
                // Normally we'd have to schedule the callback on the AsyncQueue.
                // However, the following calls are safe to be called outside the
                // AsyncQueue since they don't chain asynchronous calls
                this.Ir(t, n);
            }), (e => {
                t((() => {
                    const t = new j(K$1.UNKNOWN, "Fetching auth token failed: " + e.message);
                    return this.Ar(t);
                }));
            }));
        }
        Ir(t, e) {
            const n = this.Er(this.rr);
            this.stream = this.Rr(t, e), this.stream.Di((() => {
                n((() => (this.state = 2 /* Open */ , this.cr = this.Oe.enqueueAfterDelay(this.sr, 1e4, (() => (this.lr() && (this.state = 3 /* Healthy */), 
                Promise.resolve()))), this.listener.Di())));
            })), this.stream.Ni((t => {
                n((() => this.Ar(t)));
            })), this.stream.onMessage((t => {
                n((() => this.onMessage(t)));
            }));
        }
        dr() {
            this.state = 5 /* Backoff */ , this.ur.Zi((async () => {
                this.state = 0 /* Initial */ , this.start();
            }));
        }
        // Visible for tests
        Ar(t) {
            // In theory the stream could close cleanly, however, in our current model
            // we never expect this to happen because if we stop a stream ourselves,
            // this callback will never be called. To prevent cases where we retry
            // without a backoff accidentally, we set the stream to error in all cases.
            return $("PersistentStream", `close with error: ${t}`), this.stream = null, this.close(4 /* Error */ , t);
        }
        /**
         * Returns a "dispatcher" function that dispatches operations onto the
         * AsyncQueue but only runs them if closeCount remains unchanged. This allows
         * us to turn auth / stream callbacks into no-ops if the stream is closed /
         * re-opened, etc.
         */    Er(t) {
            return e => {
                this.Oe.enqueueAndForget((() => this.rr === t ? e() : ($("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve())));
            };
        }
    }

    /**
     * A PersistentStream that implements the Listen RPC.
     *
     * Once the Listen stream has called the onOpen() listener, any number of
     * listen() and unlisten() calls can be made to control what changes will be
     * sent from the server for ListenResponses.
     */ class so extends no {
        constructor(t, e, n, s, i, r) {
            super(t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , "health_check_timeout" /* HealthCheckTimeout */ , e, n, s, r), 
            this.k = i;
        }
        Rr(t, e) {
            return this.ir.Qi("Listen", t, e);
        }
        onMessage(t) {
            // A successful response means the stream is healthy
            this.ur.reset();
            const e = rs(this.k, t), n = function(t) {
                // We have only reached a consistent snapshot for the entire stream if there
                // is a read_time set and it applies to all targets (i.e. the list of
                // targets is empty). The backend is guaranteed to send such responses.
                if (!("targetChange" in t)) return ct.min();
                const e = t.targetChange;
                return e.targetIds && e.targetIds.length ? ct.min() : e.readTime ? Gn(e.readTime) : ct.min();
            }(t);
            return this.listener.Pr(e, n);
        }
        /**
         * Registers interest in the results of the given target. If the target
         * includes a resumeToken it will be included in the request. Results that
         * affect the target will be streamed back as WatchChange messages that
         * reference the targetId.
         */    br(t) {
            const e = {};
            e.database = ts(this.k), e.addTarget = function(t, e) {
                let n;
                const s = e.target;
                return n = Xt(s) ? {
                    documents: us(t, s)
                } : {
                    query: hs(t, s)
                }, n.targetId = e.targetId, e.resumeToken.approximateByteSize() > 0 ? n.resumeToken = Qn(t, e.resumeToken) : e.snapshotVersion.compareTo(ct.min()) > 0 && (
                // TODO(wuandy): Consider removing above check because it is most likely true.
                // Right now, many tests depend on this behaviour though (leaving min() out
                // of serialization).
                n.readTime = jn(t, e.snapshotVersion.toTimestamp())), n;
            }(this.k, t);
            const n = fs(this.k, t);
            n && (e.labels = n), this.gr(e);
        }
        /**
         * Unregisters interest in the results of the target associated with the
         * given targetId.
         */    vr(t) {
            const e = {};
            e.database = ts(this.k), e.removeTarget = t, this.gr(e);
        }
    }

    /**
     * A Stream that implements the Write RPC.
     *
     * The Write RPC requires the caller to maintain special streamToken
     * state in between calls, to help the server understand which responses the
     * client has processed by the time the next request is made. Every response
     * will contain a streamToken; this value must be passed to the next
     * request.
     *
     * After calling start() on this stream, the next request must be a handshake,
     * containing whatever streamToken is on hand. Once a response to this
     * request is received, all pending mutations may be submitted. When
     * submitting multiple batches of mutations at the same time, it's
     * okay to use the same streamToken for the calls to writeMutations.
     *
     * TODO(b/33271235): Use proto types
     */ class io extends no {
        constructor(t, e, n, s, i, r) {
            super(t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , "health_check_timeout" /* HealthCheckTimeout */ , e, n, s, r), 
            this.k = i, this.Vr = !1;
        }
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */    get Sr() {
            return this.Vr;
        }
        // Override of PersistentStream.start
        start() {
            this.Vr = !1, this.lastStreamToken = void 0, super.start();
        }
        Tr() {
            this.Vr && this.Dr([]);
        }
        Rr(t, e) {
            return this.ir.Qi("Write", t, e);
        }
        onMessage(t) {
            if (
            // Always capture the last stream token.
            B$1(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Vr) {
                // A successful first write response means the stream is healthy,
                // Note, that we could consider a successful handshake healthy, however,
                // the write itself might be causing an error we want to back off from.
                this.ur.reset();
                const e = cs(t.writeResults, t.commitTime), n = Gn(t.commitTime);
                return this.listener.Cr(n, e);
            }
            // The first response is always the handshake response
            return B$1(!t.writeResults || 0 === t.writeResults.length), this.Vr = !0, this.listener.Nr();
        }
        /**
         * Sends an initial streamToken to the server, performing the handshake
         * required to make the StreamingWrite RPC work. Subsequent
         * calls should wait until onHandshakeComplete was called.
         */    kr() {
            // TODO(dimond): Support stream resumption. We intentionally do not set the
            // stream token on the handshake, ignoring any stream token we might have.
            const t = {};
            t.database = ts(this.k), this.gr(t);
        }
        /** Sends a group of mutations to the Firestore backend to apply. */    Dr(t) {
            const e = {
                streamToken: this.lastStreamToken,
                writes: t.map((t => os(this.k, t)))
            };
            this.gr(e);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Datastore and its related methods are a wrapper around the external Google
     * Cloud Datastore grpc API, which provides an interface that is more convenient
     * for the rest of the client SDK architecture to consume.
     */
    /**
     * An implementation of Datastore that exposes additional state for internal
     * consumption.
     */
    class ro extends class {} {
        constructor(t, e, n, s) {
            super(), this.authCredentials = t, this.appCheckCredentials = e, this.ir = n, this.k = s, 
            this.$r = !1;
        }
        Fr() {
            if (this.$r) throw new j(K$1.FAILED_PRECONDITION, "The client has already been terminated.");
        }
        /** Invokes the provided RPC with auth and AppCheck tokens. */    Bi(t, e, n) {
            return this.Fr(), Promise.all([ this.authCredentials.getToken(), this.appCheckCredentials.getToken() ]).then((([s, i]) => this.ir.Bi(t, e, n, s, i))).catch((t => {
                throw "FirebaseError" === t.name ? (t.code === K$1.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), 
                this.appCheckCredentials.invalidateToken()), t) : new j(K$1.UNKNOWN, t.toString());
            }));
        }
        /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */    ji(t, e, n) {
            return this.Fr(), Promise.all([ this.authCredentials.getToken(), this.appCheckCredentials.getToken() ]).then((([s, i]) => this.ir.ji(t, e, n, s, i))).catch((t => {
                throw "FirebaseError" === t.name ? (t.code === K$1.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), 
                this.appCheckCredentials.invalidateToken()), t) : new j(K$1.UNKNOWN, t.toString());
            }));
        }
        terminate() {
            this.$r = !0;
        }
    }

    // TODO(firestorexp): Make sure there is only one Datastore instance per
    // firestore-exp client.
    /**
     * A component used by the RemoteStore to track the OnlineState (that is,
     * whether or not the client as a whole should be considered to be online or
     * offline), implementing the appropriate heuristics.
     *
     * In particular, when the client is trying to connect to the backend, we
     * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
     * a connection to succeed. If we have too many failures or the timeout elapses,
     * then we set the OnlineState to Offline, and the client will behave as if
     * it is offline (get()s will return cached data, etc.).
     */
    class oo {
        constructor(t, e) {
            this.asyncQueue = t, this.onlineStateHandler = e, 
            /** The current OnlineState. */
            this.state = "Unknown" /* Unknown */ , 
            /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
            this.Or = 0, 
            /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
            this.Mr = null, 
            /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
            this.Lr = !0;
        }
        /**
         * Called by RemoteStore when a watch stream is started (including on each
         * backoff attempt).
         *
         * If this is the first attempt, it sets the OnlineState to Unknown and starts
         * the onlineStateTimer.
         */    Br() {
            0 === this.Or && (this.Ur("Unknown" /* Unknown */), this.Mr = this.asyncQueue.enqueueAfterDelay("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (() => (this.Mr = null, 
            this.qr("Backend didn't respond within 10 seconds."), this.Ur("Offline" /* Offline */), 
            Promise.resolve()))));
        }
        /**
         * Updates our OnlineState as appropriate after the watch stream reports a
         * failure. The first failure moves us to the 'Unknown' state. We then may
         * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
         * actually transition to the 'Offline' state.
         */    Kr(t) {
            "Online" /* Online */ === this.state ? this.Ur("Unknown" /* Unknown */) : (this.Or++, 
            this.Or >= 1 && (this.jr(), this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`), 
            this.Ur("Offline" /* Offline */)));
        }
        /**
         * Explicitly sets the OnlineState to the specified state.
         *
         * Note that this resets our timers / failure counters, etc. used by our
         * Offline heuristics, so must not be used in place of
         * handleWatchStreamStart() and handleWatchStreamFailure().
         */    set(t) {
            this.jr(), this.Or = 0, "Online" /* Online */ === t && (
            // We've connected to watch at least once. Don't warn the developer
            // about being offline going forward.
            this.Lr = !1), this.Ur(t);
        }
        Ur(t) {
            t !== this.state && (this.state = t, this.onlineStateHandler(t));
        }
        qr(t) {
            const e = `Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
            this.Lr ? (F$1(e), this.Lr = !1) : $("OnlineStateTracker", e);
        }
        jr() {
            null !== this.Mr && (this.Mr.cancel(), this.Mr = null);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class ao {
        constructor(
        /**
         * The local store, used to fill the write pipeline with outbound mutations.
         */
        t, 
        /** The client-side proxy for interacting with the backend. */
        e, n, s, i) {
            this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, 
            /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
            this.Qr = [], 
            /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
            this.Wr = new Map, 
            /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
            this.Gr = new Set, 
            /**
             * Event handlers that get called when the network is disabled or enabled.
             *
             * PORTING NOTE: These functions are used on the Web client to create the
             * underlying streams (to support tree-shakeable streams). On Android and iOS,
             * the streams are created during construction of RemoteStore.
             */
            this.zr = [], this.Hr = i, this.Hr.Ei((t => {
                n.enqueueAndForget((async () => {
                    // Porting Note: Unlike iOS, `restartNetwork()` is called even when the
                    // network becomes unreachable as we don't have any other way to tear
                    // down our streams.
                    go(this) && ($("RemoteStore", "Restarting streams for network reachability change."), 
                    await async function(t) {
                        const e = q$1(t);
                        e.Gr.add(4 /* ConnectivityChange */), await uo(e), e.Jr.set("Unknown" /* Unknown */), 
                        e.Gr.delete(4 /* ConnectivityChange */), await co(e);
                    }(this));
                }));
            })), this.Jr = new oo(n, s);
        }
    }

    async function co(t) {
        if (go(t)) for (const e of t.zr) await e(/* enabled= */ !0);
    }

    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */ async function uo(t) {
        for (const e of t.zr) await e(/* enabled= */ !1);
    }

    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    function ho(t, e) {
        const n = q$1(t);
        n.Wr.has(e.targetId) || (
        // Mark this as something the client is currently listening for.
        n.Wr.set(e.targetId, e), mo(n) ? 
        // The listen will be sent in onWatchStreamOpen
        _o(n) : xo(n).lr() && fo(n, e));
    }

    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */ function lo(t, e) {
        const n = q$1(t), s = xo(n);
        n.Wr.delete(e), s.lr() && wo(n, e), 0 === n.Wr.size && (s.lr() ? s._r() : go(n) && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        n.Jr.set("Unknown" /* Unknown */));
    }

    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */ function fo(t, e) {
        t.Yr.X(e.targetId), xo(t).br(e);
    }

    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */ function wo(t, e) {
        t.Yr.X(e), xo(t).vr(e);
    }

    function _o(t) {
        t.Yr = new Mn({
            getRemoteKeysForTarget: e => t.remoteSyncer.getRemoteKeysForTarget(e),
            Et: e => t.Wr.get(e) || null
        }), xo(t).start(), t.Jr.Br();
    }

    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */ function mo(t) {
        return go(t) && !xo(t).hr() && t.Wr.size > 0;
    }

    function go(t) {
        return 0 === q$1(t).Gr.size;
    }

    function yo(t) {
        t.Yr = void 0;
    }

    async function po(t) {
        t.Wr.forEach(((e, n) => {
            fo(t, e);
        }));
    }

    async function To(t, e) {
        yo(t), 
        // If we still need the watch stream, retry the connection.
        mo(t) ? (t.Jr.Kr(e), _o(t)) : 
        // No need to restart watch stream because there are no active targets.
        // The online state is set to unknown because there is no active attempt
        // at establishing a connection
        t.Jr.set("Unknown" /* Unknown */);
    }

    async function Eo(t, e, n) {
        if (
        // Mark the client as online since we got a message from the server
        t.Jr.set("Online" /* Online */), e instanceof Fn && 2 /* Removed */ === e.state && e.cause) 
        // There was an error on a target, don't wait for a consistent snapshot
        // to raise events
        try {
            await 
            /** Handles an error on a target */
            async function(t, e) {
                const n = e.cause;
                for (const s of e.targetIds) 
                // A watched target might have been removed already.
                t.Wr.has(s) && (await t.remoteSyncer.rejectListen(s, n), t.Wr.delete(s), t.Yr.removeTarget(s));
            }
            /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */ (t, e);
        } catch (n) {
            $("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n), 
            await Io(t, n);
        } else if (e instanceof xn ? t.Yr.ot(e) : e instanceof $n ? t.Yr.dt(e) : t.Yr.ut(e), 
        !n.isEqual(ct.min())) try {
            const e = await _r(t.localStore);
            n.compareTo(e) >= 0 && 
            // We have received a target change with a global snapshot if the snapshot
            // version is not equal to SnapshotVersion.min().
            await 
            /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
            function(t, e) {
                const n = t.Yr.gt(e);
                // Update in-memory resume tokens. LocalStore will update the
                // persistent view of these when applying the completed RemoteEvent.
                            return n.targetChanges.forEach(((n, s) => {
                    if (n.resumeToken.approximateByteSize() > 0) {
                        const i = t.Wr.get(s);
                        // A watched target might have been removed already.
                                            i && t.Wr.set(s, i.withResumeToken(n.resumeToken, e));
                    }
                })), 
                // Re-establish listens for the targets that have been invalidated by
                // existence filter mismatches.
                n.targetMismatches.forEach((e => {
                    const n = t.Wr.get(e);
                    if (!n) 
                    // A watched target might have been removed already.
                    return;
                    // Clear the resume token for the target, since we're in a known mismatch
                    // state.
                                    t.Wr.set(e, n.withResumeToken(yt.EMPTY_BYTE_STRING, n.snapshotVersion)), 
                    // Cause a hard reset by unwatching and rewatching immediately, but
                    // deliberately don't send a resume token so that we get a full update.
                    wo(t, e);
                    // Mark the target we send as being on behalf of an existence filter
                    // mismatch, but don't actually retain that in listenTargets. This ensures
                    // that we flag the first re-listen this way without impacting future
                    // listens of this target (that might happen e.g. on reconnect).
                    const s = new ai(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                    fo(t, s);
                })), t.remoteSyncer.applyRemoteEvent(n);
            }(t, n);
        } catch (e) {
            $("RemoteStore", "Failed to raise snapshot:", e), await Io(t, e);
        }
    }

    /**
     * Recovery logic for IndexedDB errors that takes the network offline until
     * `op` succeeds. Retries are scheduled with backoff using
     * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
     * validated via a generic operation.
     *
     * The returned Promise is resolved once the network is disabled and before
     * any retry attempt.
     */ async function Io(t, e, n) {
        if (!Xs(e)) throw e;
        t.Gr.add(1 /* IndexedDbFailed */), 
        // Disable network and raise offline snapshots
        await uo(t), t.Jr.set("Offline" /* Offline */), n || (
        // Use a simple read operation to determine if IndexedDB recovered.
        // Ideally, we would expose a health check directly on SimpleDb, but
        // RemoteStore only has access to persistence through LocalStore.
        n = () => _r(t.localStore)), 
        // Probe IndexedDB periodically and re-enable network
        t.asyncQueue.enqueueRetryable((async () => {
            $("RemoteStore", "Retrying IndexedDB access"), await n(), t.Gr.delete(1 /* IndexedDbFailed */), 
            await co(t);
        }));
    }

    /**
     * Executes `op`. If `op` fails, takes the network offline until `op`
     * succeeds. Returns after the first attempt.
     */ function Ao(t, e) {
        return e().catch((n => Io(t, n, e)));
    }

    async function Ro(t) {
        const e = q$1(t), n = $o(e);
        let s = e.Qr.length > 0 ? e.Qr[e.Qr.length - 1].batchId : -1;
        for (;Po(e); ) try {
            const t = await yr(e.localStore, s);
            if (null === t) {
                0 === e.Qr.length && n._r();
                break;
            }
            s = t.batchId, bo(e, t);
        } catch (t) {
            await Io(e, t);
        }
        vo(e) && Vo(e);
    }

    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */ function Po(t) {
        return go(t) && t.Qr.length < 10;
    }

    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */ function bo(t, e) {
        t.Qr.push(e);
        const n = $o(t);
        n.lr() && n.Sr && n.Dr(e.mutations);
    }

    function vo(t) {
        return go(t) && !$o(t).hr() && t.Qr.length > 0;
    }

    function Vo(t) {
        $o(t).start();
    }

    async function So(t) {
        $o(t).kr();
    }

    async function Do(t) {
        const e = $o(t);
        // Send the write pipeline now that the stream is established.
            for (const n of t.Qr) e.Dr(n.mutations);
    }

    async function Co(t, e, n) {
        const s = t.Qr.shift(), i = oi.from(s, e, n);
        await Ao(t, (() => t.remoteSyncer.applySuccessfulWrite(i))), 
        // It's possible that with the completion of this mutation another
        // slot has freed up.
        await Ro(t);
    }

    async function No(t, e) {
        // If the write stream closed after the write handshake completes, a write
        // operation failed and we fail the pending operation.
        e && $o(t).Sr && 
        // This error affects the actual write.
        await async function(t, e) {
            // Only handle permanent errors here. If it's transient, just let the retry
            // logic kick in.
            if (n = e.code, _n(n) && n !== K$1.ABORTED) {
                // This was a permanent error, the request itself was the problem
                // so it's not going to succeed if we resend it.
                const n = t.Qr.shift();
                // In this case it's also unlikely that the server itself is melting
                // down -- this was just a bad request so inhibit backoff on the next
                // restart.
                            $o(t).wr(), await Ao(t, (() => t.remoteSyncer.rejectFailedWrite(n.batchId, e))), 
                // It's possible that with the completion of this mutation
                // another slot has freed up.
                await Ro(t);
            }
            var n;
        }(t, e), 
        // The write stream might have been started by refilling the write
        // pipeline for failed writes
        vo(t) && Vo(t);
    }

    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    async function ko(t, e) {
        const n = q$1(t);
        e ? (n.Gr.delete(2 /* IsSecondary */), await co(n)) : e || (n.Gr.add(2 /* IsSecondary */), 
        await uo(n), n.Jr.set("Unknown" /* Unknown */));
    }

    /**
     * If not yet initialized, registers the WatchStream and its network state
     * callback with `remoteStoreImpl`. Returns the existing stream if one is
     * already available.
     *
     * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
     * This is not done on Web to allow it to be tree-shaken.
     */ function xo(t) {
        return t.Xr || (
        // Create stream (but note that it is not started yet).
        t.Xr = function(t, e, n) {
            const s = q$1(t);
            return s.Fr(), new so(e, s.ir, s.authCredentials, s.appCheckCredentials, s.k, n);
        }
        /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ (t.datastore, t.asyncQueue, {
            Di: po.bind(null, t),
            Ni: To.bind(null, t),
            Pr: Eo.bind(null, t)
        }), t.zr.push((async e => {
            e ? (t.Xr.wr(), mo(t) ? _o(t) : t.Jr.set("Unknown" /* Unknown */)) : (await t.Xr.stop(), 
            yo(t));
        }))), t.Xr;
    }

    /**
     * If not yet initialized, registers the WriteStream and its network state
     * callback with `remoteStoreImpl`. Returns the existing stream if one is
     * already available.
     *
     * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
     * This is not done on Web to allow it to be tree-shaken.
     */ function $o(t) {
        return t.Zr || (
        // Create stream (but note that it is not started yet).
        t.Zr = function(t, e, n) {
            const s = q$1(t);
            return s.Fr(), new io(e, s.ir, s.authCredentials, s.appCheckCredentials, s.k, n);
        }(t.datastore, t.asyncQueue, {
            Di: So.bind(null, t),
            Ni: No.bind(null, t),
            Nr: Do.bind(null, t),
            Cr: Co.bind(null, t)
        }), t.zr.push((async e => {
            e ? (t.Zr.wr(), 
            // This will start the write stream if necessary.
            await Ro(t)) : (await t.Zr.stop(), t.Qr.length > 0 && ($("RemoteStore", `Stopping write stream with ${t.Qr.length} pending writes`), 
            t.Qr = []));
        }))), t.Zr;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Represents an operation scheduled to be run in the future on an AsyncQueue.
     *
     * It is created via DelayedOperation.createAndSchedule().
     *
     * Supports cancellation (via cancel()) and early execution (via skipDelay()).
     *
     * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
     * in newer versions of TypeScript defines `finally`, which is not available in
     * IE.
     */
    class Fo {
        constructor(t, e, n, s, i) {
            this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, 
            this.deferred = new Q$1, this.then = this.deferred.promise.then.bind(this.deferred.promise), 
            // It's normal for the deferred promise to be canceled (due to cancellation)
            // and so we attach a dummy catch callback to avoid
            // 'UnhandledPromiseRejectionWarning' log spam.
            this.deferred.promise.catch((t => {}));
        }
        /**
         * Creates and returns a DelayedOperation that has been scheduled to be
         * executed on the provided asyncQueue after the provided delayMs.
         *
         * @param asyncQueue - The queue to schedule the operation on.
         * @param id - A Timer ID identifying the type of operation this is.
         * @param delayMs - The delay (ms) before the operation should be scheduled.
         * @param op - The operation to run.
         * @param removalCallback - A callback to be called synchronously once the
         *   operation is executed or canceled, notifying the AsyncQueue to remove it
         *   from its delayedOperations list.
         *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
         *   the DelayedOperation class public.
         */    static createAndSchedule(t, e, n, s, i) {
            const r = Date.now() + n, o = new Fo(t, e, r, s, i);
            return o.start(n), o;
        }
        /**
         * Starts the timer. This is called immediately after construction by
         * createAndSchedule().
         */    start(t) {
            this.timerHandle = setTimeout((() => this.handleDelayElapsed()), t);
        }
        /**
         * Queues the operation to run immediately (if it hasn't already been run or
         * canceled).
         */    skipDelay() {
            return this.handleDelayElapsed();
        }
        /**
         * Cancels the operation if it hasn't already been executed or canceled. The
         * promise will be rejected.
         *
         * As long as the operation has not yet been run, calling cancel() provides a
         * guarantee that the operation will not be run.
         */    cancel(t) {
            null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new j(K$1.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
        }
        handleDelayElapsed() {
            this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), 
            this.op().then((t => this.deferred.resolve(t)))) : Promise.resolve()));
        }
        clearTimeout() {
            null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), 
            this.timerHandle = null);
        }
    }

    /**
     * Returns a FirestoreError that can be surfaced to the user if the provided
     * error is an IndexedDbTransactionError. Re-throws the error otherwise.
     */ function Oo(t, e) {
        if (F$1("AsyncQueue", `${e}: ${t}`), Xs(t)) return new j(K$1.UNAVAILABLE, `${e}: ${t}`);
        throw t;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * DocumentSet is an immutable (copy-on-write) collection that holds documents
     * in order specified by the provided comparator. We always add a document key
     * comparator on top of what is provided to guarantee document equality based on
     * the key.
     */ class Mo {
        /** The default ordering is by key if the comparator is omitted */
        constructor(t) {
            // We are adding document key comparator to the end as it's the only
            // guaranteed unique property of a document.
            this.comparator = t ? (e, n) => t(e, n) || St.comparator(e.key, n.key) : (t, e) => St.comparator(t.key, e.key), 
            this.keyedMap = Pn(), this.sortedSet = new gn(this.comparator);
        }
        /**
         * Returns an empty copy of the existing DocumentSet, using the same
         * comparator.
         */    static emptySet(t) {
            return new Mo(t.comparator);
        }
        has(t) {
            return null != this.keyedMap.get(t);
        }
        get(t) {
            return this.keyedMap.get(t);
        }
        first() {
            return this.sortedSet.minKey();
        }
        last() {
            return this.sortedSet.maxKey();
        }
        isEmpty() {
            return this.sortedSet.isEmpty();
        }
        /**
         * Returns the index of the provided key in the document set, or -1 if the
         * document key is not present in the set;
         */    indexOf(t) {
            const e = this.keyedMap.get(t);
            return e ? this.sortedSet.indexOf(e) : -1;
        }
        get size() {
            return this.sortedSet.size;
        }
        /** Iterates documents in order defined by "comparator" */    forEach(t) {
            this.sortedSet.inorderTraversal(((e, n) => (t(e), !1)));
        }
        /** Inserts or updates a document with the same key */    add(t) {
            // First remove the element if we have it.
            const e = this.delete(t.key);
            return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
        }
        /** Deletes a document with a given key */    delete(t) {
            const e = this.get(t);
            return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
        }
        isEqual(t) {
            if (!(t instanceof Mo)) return !1;
            if (this.size !== t.size) return !1;
            const e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator();
            for (;e.hasNext(); ) {
                const t = e.getNext().key, s = n.getNext().key;
                if (!t.isEqual(s)) return !1;
            }
            return !0;
        }
        toString() {
            const t = [];
            return this.forEach((e => {
                t.push(e.toString());
            })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
        }
        copy(t, e) {
            const n = new Mo;
            return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
     * duplicate events for the same doc.
     */ class Lo {
        constructor() {
            this.eo = new gn(St.comparator);
        }
        track(t) {
            const e = t.doc.key, n = this.eo.get(e);
            n ? 
            // Merge the new change with the existing change.
            0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.eo = this.eo.insert(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.eo = this.eo.insert(e, {
                type: n.type,
                doc: t.doc
            }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.eo = this.eo.insert(e, {
                type: 2 /* Modified */ ,
                doc: t.doc
            }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.eo = this.eo.insert(e, {
                type: 0 /* Added */ ,
                doc: t.doc
            }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.eo = this.eo.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.eo = this.eo.insert(e, {
                type: 1 /* Removed */ ,
                doc: n.doc
            }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.eo = this.eo.insert(e, {
                type: 2 /* Modified */ ,
                doc: t.doc
            }) : 
            // This includes these cases, which don't make sense:
            // Added->Added
            // Removed->Removed
            // Modified->Added
            // Removed->Modified
            // Metadata->Added
            // Removed->Metadata
            L$1() : this.eo = this.eo.insert(e, t);
        }
        no() {
            const t = [];
            return this.eo.inorderTraversal(((e, n) => {
                t.push(n);
            })), t;
        }
    }

    class Bo {
        constructor(t, e, n, s, i, r, o, a) {
            this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, 
            this.fromCache = r, this.syncStateChanged = o, this.excludesMetadataChanges = a;
        }
        /** Returns a view snapshot as if all documents in the snapshot were added. */    static fromInitialDocuments(t, e, n, s) {
            const i = [];
            return e.forEach((t => {
                i.push({
                    type: 0 /* Added */ ,
                    doc: t
                });
            })), new Bo(t, e, Mo.emptySet(e), i, n, s, 
            /* syncStateChanged= */ !0, 
            /* excludesMetadataChanges= */ !1);
        }
        get hasPendingWrites() {
            return !this.mutatedKeys.isEmpty();
        }
        isEqual(t) {
            if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && be(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
            const e = this.docChanges, n = t.docChanges;
            if (e.length !== n.length) return !1;
            for (let t = 0; t < e.length; t++) if (e[t].type !== n[t].type || !e[t].doc.isEqual(n[t].doc)) return !1;
            return !0;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Holds the listeners and the last received ViewSnapshot for a query being
     * tracked by EventManager.
     */ class Uo {
        constructor() {
            this.so = void 0, this.listeners = [];
        }
    }

    class qo {
        constructor() {
            this.queries = new Gi((t => ve(t)), be), this.onlineState = "Unknown" /* Unknown */ , 
            this.io = new Set;
        }
    }

    async function Ko(t, e) {
        const n = q$1(t), s = e.query;
        let i = !1, r = n.queries.get(s);
        if (r || (i = !0, r = new Uo), i) try {
            r.so = await n.onListen(s);
        } catch (t) {
            const n = Oo(t, `Initialization of query '${Ve(e.query)}' failed`);
            return void e.onError(n);
        }
        if (n.queries.set(s, r), r.listeners.push(e), 
        // Run global snapshot listeners if a consistent snapshot has been emitted.
        e.ro(n.onlineState), r.so) {
            e.oo(r.so) && Go(n);
        }
    }

    async function jo(t, e) {
        const n = q$1(t), s = e.query;
        let i = !1;
        const r = n.queries.get(s);
        if (r) {
            const t = r.listeners.indexOf(e);
            t >= 0 && (r.listeners.splice(t, 1), i = 0 === r.listeners.length);
        }
        if (i) return n.queries.delete(s), n.onUnlisten(s);
    }

    function Qo(t, e) {
        const n = q$1(t);
        let s = !1;
        for (const t of e) {
            const e = t.query, i = n.queries.get(e);
            if (i) {
                for (const e of i.listeners) e.oo(t) && (s = !0);
                i.so = t;
            }
        }
        s && Go(n);
    }

    function Wo(t, e, n) {
        const s = q$1(t), i = s.queries.get(e);
        if (i) for (const t of i.listeners) t.onError(n);
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
            s.queries.delete(e);
    }

    // Call all global snapshot listeners that have been set.
    function Go(t) {
        t.io.forEach((t => {
            t.next();
        }));
    }

    /**
     * QueryListener takes a series of internal view snapshots and determines
     * when to raise the event.
     *
     * It uses an Observer to dispatch events.
     */ class zo {
        constructor(t, e, n) {
            this.query = t, this.ao = e, 
            /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
            this.co = !1, this.uo = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {};
        }
        /**
         * Applies the new ViewSnapshot to this listener, raising a user-facing event
         * if applicable (depending on what changed, whether the user has opted into
         * metadata-only changes, etc.). Returns true if a user-facing event was
         * indeed raised.
         */    oo(t) {
            if (!this.options.includeMetadataChanges) {
                // Remove the metadata only changes.
                const e = [];
                for (const n of t.docChanges) 3 /* Metadata */ !== n.type && e.push(n);
                t = new Bo(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, 
                /* excludesMetadataChanges= */ !0);
            }
            let e = !1;
            return this.co ? this.ho(t) && (this.ao.next(t), e = !0) : this.lo(t, this.onlineState) && (this.fo(t), 
            e = !0), this.uo = t, e;
        }
        onError(t) {
            this.ao.error(t);
        }
        /** Returns whether a snapshot was raised. */    ro(t) {
            this.onlineState = t;
            let e = !1;
            return this.uo && !this.co && this.lo(this.uo, t) && (this.fo(this.uo), e = !0), 
            e;
        }
        lo(t, e) {
            // Always raise the first event when we're synced
            if (!t.fromCache) return !0;
            // NOTE: We consider OnlineState.Unknown as online (it should become Offline
            // or Online if we wait long enough).
                    const n = "Offline" /* Offline */ !== e;
            // Don't raise the event if we're online, aren't synced yet (checked
            // above) and are waiting for a sync.
                    return (!this.options.wo || !n) && (!t.docs.isEmpty() || "Offline" /* Offline */ === e);
            // Raise data from cache if we have any documents or we are offline
            }
        ho(t) {
            // We don't need to handle includeDocumentMetadataChanges here because
            // the Metadata only changes have already been stripped out if needed.
            // At this point the only changes we will see are the ones we should
            // propagate.
            if (t.docChanges.length > 0) return !0;
            const e = this.uo && this.uo.hasPendingWrites !== t.hasPendingWrites;
            return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges;
            // Generally we should have hit one of the cases above, but it's possible
            // to get here if there were only metadata docChanges and they got
            // stripped out.
            }
        fo(t) {
            t = Bo.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.co = !0, 
            this.ao.next(t);
        }
    }

    /**
     * Returns a `LoadBundleTaskProgress` representing the progress that the loading
     * has succeeded.
     */
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class Zo {
        constructor(t) {
            this.key = t;
        }
    }

    class ta$1 {
        constructor(t) {
            this.key = t;
        }
    }

    /**
     * View is responsible for computing the final merged truth of what docs are in
     * a query. It gets notified of local and remote changes to docs, and applies
     * the query filters and limits to determine the most correct possible results.
     */ class ea$1 {
        constructor(t, 
        /** Documents included in the remote target */
        e) {
            this.query = t, this.To = e, this.Eo = null, 
            /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
            this.current = !1, 
            /** Documents in the view but not in the remote target */
            this.Io = Sn(), 
            /** Document Keys that have local changes */
            this.mutatedKeys = Sn(), this.Ao = De(t), this.Ro = new Mo(this.Ao);
        }
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */    get Po() {
            return this.To;
        }
        /**
         * Iterates over a set of doc changes, applies the query limit, and computes
         * what the new results should be, what the changes were, and whether we may
         * need to go back to the local cache for more results. Does not make any
         * changes to the view.
         * @param docChanges - The doc changes to apply to this view.
         * @param previousChanges - If this is being called with a refill, then start
         *        with this set of docs and changes instead of the current view.
         * @returns a new set of docs, changes, and refill flag.
         */    bo(t, e) {
            const n = e ? e.vo : new Lo, s = e ? e.Ro : this.Ro;
            let i = e ? e.mutatedKeys : this.mutatedKeys, r = s, o = !1;
            // Track the last doc in a (full) limit. This is necessary, because some
            // update (a delete, or an update moving a doc past the old limit) might
            // mean there is some other document in the local cache that either should
            // come (1) between the old last limit doc and the new last document, in the
            // case of updates, or (2) after the new last document, in the case of
            // deletes. So we keep this doc at the old limit to compare the updates to.
            // Note that this should never get used in a refill (when previousChanges is
            // set), because there will only be adds -- no deletes or updates.
            const a = ye(this.query) && s.size === this.query.limit ? s.last() : null, c = pe(this.query) && s.size === this.query.limit ? s.first() : null;
            // Drop documents out to meet limit/limitToLast requirement.
            if (t.inorderTraversal(((t, e) => {
                const u = s.get(t), h = Se(this.query, e) ? e : null, l = !!u && this.mutatedKeys.has(u.key), f = !!h && (h.hasLocalMutations || 
                // We only consider committed mutations for documents that were
                // mutated during the lifetime of the view.
                this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
                let d = !1;
                // Calculate change
                            if (u && h) {
                    u.data.isEqual(h.data) ? l !== f && (n.track({
                        type: 3 /* Metadata */ ,
                        doc: h
                    }), d = !0) : this.Vo(u, h) || (n.track({
                        type: 2 /* Modified */ ,
                        doc: h
                    }), d = !0, (a && this.Ao(h, a) > 0 || c && this.Ao(h, c) < 0) && (
                    // This doc moved from inside the limit to outside the limit.
                    // That means there may be some other doc in the local cache
                    // that should be included instead.
                    o = !0));
                } else !u && h ? (n.track({
                    type: 0 /* Added */ ,
                    doc: h
                }), d = !0) : u && !h && (n.track({
                    type: 1 /* Removed */ ,
                    doc: u
                }), d = !0, (a || c) && (
                // A doc was removed from a full limit query. We'll need to
                // requery from the local cache to see if we know about some other
                // doc that should be in the results.
                o = !0));
                d && (h ? (r = r.add(h), i = f ? i.add(t) : i.delete(t)) : (r = r.delete(t), i = i.delete(t)));
            })), ye(this.query) || pe(this.query)) for (;r.size > this.query.limit; ) {
                const t = ye(this.query) ? r.last() : r.first();
                r = r.delete(t.key), i = i.delete(t.key), n.track({
                    type: 1 /* Removed */ ,
                    doc: t
                });
            }
            return {
                Ro: r,
                vo: n,
                Bn: o,
                mutatedKeys: i
            };
        }
        Vo(t, e) {
            // We suppress the initial change event for documents that were modified as
            // part of a write acknowledgment (e.g. when the value of a server transform
            // is applied) as Watch will send us the same document again.
            // By suppressing the event, we only raise two user visible events (one with
            // `hasPendingWrites` and the final state of the document) instead of three
            // (one with `hasPendingWrites`, the modified document with
            // `hasPendingWrites` and the final state of the document).
            return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
        }
        /**
         * Updates the view with the given ViewDocumentChanges and optionally updates
         * limbo docs and sync state from the provided target change.
         * @param docChanges - The set of changes to make to the view's docs.
         * @param updateLimboDocuments - Whether to update limbo documents based on
         *        this change.
         * @param targetChange - A target change to apply for computing limbo docs and
         *        sync state.
         * @returns A new ViewChange with the given docs, changes, and sync state.
         */
        // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
        applyChanges(t, e, n) {
            const s = this.Ro;
            this.Ro = t.Ro, this.mutatedKeys = t.mutatedKeys;
            // Sort changes based on type and query comparator
            const i = t.vo.no();
            i.sort(((t, e) => function(t, e) {
                const n = t => {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return L$1();
                    }
                };
                return n(t) - n(e);
            }
            /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ (t.type, e.type) || this.Ao(t.doc, e.doc))), this.So(n);
            const r = e ? this.Do() : [], o = 0 === this.Io.size && this.current ? 1 /* Synced */ : 0 /* Local */ , a = o !== this.Eo;
            if (this.Eo = o, 0 !== i.length || a) {
                return {
                    snapshot: new Bo(this.query, t.Ro, s, i, t.mutatedKeys, 0 /* Local */ === o, a, 
                    /* excludesMetadataChanges= */ !1),
                    Co: r
                };
            }
            // no changes
            return {
                Co: r
            };
        }
        /**
         * Applies an OnlineState change to the view, potentially generating a
         * ViewChange if the view's syncState changes as a result.
         */    ro(t) {
            return this.current && "Offline" /* Offline */ === t ? (
            // If we're offline, set `current` to false and then call applyChanges()
            // to refresh our syncState and generate a ViewChange as appropriate. We
            // are guaranteed to get a new TargetChange that sets `current` back to
            // true once the client is back online.
            this.current = !1, this.applyChanges({
                Ro: this.Ro,
                vo: new Lo,
                mutatedKeys: this.mutatedKeys,
                Bn: !1
            }, 
            /* updateLimboDocuments= */ !1)) : {
                Co: []
            };
        }
        /**
         * Returns whether the doc for the given key should be in limbo.
         */    No(t) {
            // If the remote end says it's part of this query, it's not in limbo.
            return !this.To.has(t) && (
            // The local store doesn't think it's a result, so it shouldn't be in limbo.
            !!this.Ro.has(t) && !this.Ro.get(t).hasLocalMutations);
        }
        /**
         * Updates syncedDocuments, current, and limbo docs based on the given change.
         * Returns the list of changes to which docs are in limbo.
         */    So(t) {
            t && (t.addedDocuments.forEach((t => this.To = this.To.add(t))), t.modifiedDocuments.forEach((t => {})), 
            t.removedDocuments.forEach((t => this.To = this.To.delete(t))), this.current = t.current);
        }
        Do() {
            // We can only determine limbo documents when we're in-sync with the server.
            if (!this.current) return [];
            // TODO(klimt): Do this incrementally so that it's not quadratic when
            // updating many documents.
                    const t = this.Io;
            this.Io = Sn(), this.Ro.forEach((t => {
                this.No(t.key) && (this.Io = this.Io.add(t.key));
            }));
            // Diff the new limbo docs with the old limbo docs.
            const e = [];
            return t.forEach((t => {
                this.Io.has(t) || e.push(new ta$1(t));
            })), this.Io.forEach((n => {
                t.has(n) || e.push(new Zo(n));
            })), e;
        }
        /**
         * Update the in-memory state of the current view with the state read from
         * persistence.
         *
         * We update the query view whenever a client's primary status changes:
         * - When a client transitions from primary to secondary, it can miss
         *   LocalStorage updates and its query views may temporarily not be
         *   synchronized with the state on disk.
         * - For secondary to primary transitions, the client needs to update the list
         *   of `syncedDocuments` since secondary clients update their query views
         *   based purely on synthesized RemoteEvents.
         *
         * @param queryResult.documents - The documents that match the query according
         * to the LocalStore.
         * @param queryResult.remoteKeys - The keys of the documents that match the
         * query according to the backend.
         *
         * @returns The ViewChange that resulted from this synchronization.
         */
        // PORTING NOTE: Multi-tab only.
        ko(t) {
            this.To = t.zn, this.Io = Sn();
            const e = this.bo(t.documents);
            return this.applyChanges(e, /*updateLimboDocuments=*/ !0);
        }
        /**
         * Returns a view snapshot as if this query was just listened to. Contains
         * a document add for every existing document and the `fromCache` and
         * `hasPendingWrites` status of the already established view.
         */
        // PORTING NOTE: Multi-tab only.
        xo() {
            return Bo.fromInitialDocuments(this.query, this.Ro, this.mutatedKeys, 0 /* Local */ === this.Eo);
        }
    }

    /**
     * QueryView contains all of the data that SyncEngine needs to keep track of for
     * a particular query.
     */
    class na$1 {
        constructor(
        /**
         * The query itself.
         */
        t, 
        /**
         * The target number created by the client that is used in the watch
         * stream to identify this query.
         */
        e, 
        /**
         * The view is responsible for computing the final merged truth of what
         * docs are in the query. It gets notified of local and remote changes,
         * and applies the query filters and limits to determine the most correct
         * possible results.
         */
        n) {
            this.query = t, this.targetId = e, this.view = n;
        }
    }

    /** Tracks a limbo resolution. */ class sa$1 {
        constructor(t) {
            this.key = t, 
            /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
            this.$o = !1;
        }
    }

    /**
     * An implementation of `SyncEngine` coordinating with other parts of SDK.
     *
     * The parts of SyncEngine that act as a callback to RemoteStore need to be
     * registered individually. This is done in `syncEngineWrite()` and
     * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
     * serve as entry points to RemoteStore's functionality.
     *
     * Note: some field defined in this class might have public access level, but
     * the class is not exported so they are only accessible from this module.
     * This is useful to implement optional features (like bundles) in free
     * functions, such that they are tree-shakeable.
     */ class ia$1 {
        constructor(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        s, i, r) {
            this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, 
            this.currentUser = i, this.maxConcurrentLimboResolutions = r, this.Fo = {}, this.Oo = new Gi((t => ve(t)), be), 
            this.Mo = new Map, 
            /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query. The strings in this set are the result of calling
             * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
             *
             * The `Set` type was chosen because it provides efficient lookup and removal
             * of arbitrary elements and it also maintains insertion order, providing the
             * desired queue-like FIFO semantics.
             */
            this.Lo = new Set, 
            /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
            this.Bo = new gn(St.comparator), 
            /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
            this.Uo = new Map, this.qo = new Vr, 
            /** Stores user completion handlers, indexed by User and BatchId. */
            this.Ko = {}, 
            /** Stores user callbacks waiting for all pending writes to be acknowledged. */
            this.jo = new Map, this.Qo = $i.re(), this.onlineState = "Unknown" /* Unknown */ , 
            // The primary state is set to `true` or `false` immediately after Firestore
            // startup. In the interim, a client should only be considered primary if
            // `isPrimary` is true.
            this.Wo = void 0;
        }
        get isPrimaryClient() {
            return !0 === this.Wo;
        }
    }

    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the initial snapshot.
     */
    async function ra$1(t, e) {
        const n = xa$1(t);
        let s, i;
        const r = n.Oo.get(e);
        if (r) 
        // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
        // already exists when EventManager calls us for the first time. This
        // happens when the primary tab is already listening to this query on
        // behalf of another tab and the user of the primary also starts listening
        // to the query. EventManager will not have an assigned target ID in this
        // case and calls `listen` to obtain this ID.
        s = r.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r.view.xo(); else {
            const t = await pr(n.localStore, Re(e)), r = n.sharedClientState.addLocalQueryTarget(t.targetId);
            s = t.targetId, i = await oa$1(n, e, s, "current" === r), n.isPrimaryClient && ho(n.remoteStore, t);
        }
        return i;
    }

    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */ async function oa$1(t, e, n, s) {
        // PORTING NOTE: On Web only, we inject the code that registers new Limbo
        // targets based on view changes. This allows us to only depend on Limbo
        // changes when user code includes queries.
        t.Go = (e, n, s) => async function(t, e, n, s) {
            let i = e.view.bo(n);
            i.Bn && (
            // The query has a limit and some docs were removed, so we need
            // to re-run the query against the local store to make sure we
            // didn't lose any good docs that had been past the limit.
            i = await Er(t.localStore, e.query, 
            /* usePreviousResults= */ !1).then((({documents: t}) => e.view.bo(t, i))));
            const r = s && s.targetChanges.get(e.targetId), o = e.view.applyChanges(i, 
            /* updateLimboDocuments= */ t.isPrimaryClient, r);
            return pa$1(t, e.targetId, o.Co), o.snapshot;
        }(t, e, n, s);
        const i = await Er(t.localStore, e, 
        /* usePreviousResults= */ !0), r = new ea$1(e, i.zn), o = r.bo(i.documents), a = kn.createSynthesizedTargetChangeForCurrentChange(n, s && "Offline" /* Offline */ !== t.onlineState), c = r.applyChanges(o, 
        /* updateLimboDocuments= */ t.isPrimaryClient, a);
        pa$1(t, n, c.Co);
        const u = new na$1(e, n, r);
        return t.Oo.set(e, u), t.Mo.has(n) ? t.Mo.get(n).push(e) : t.Mo.set(n, [ e ]), c.snapshot;
    }

    /** Stops listening to the query. */ async function aa$1(t, e) {
        const n = q$1(t), s = n.Oo.get(e), i = n.Mo.get(s.targetId);
        if (i.length > 1) return n.Mo.set(s.targetId, i.filter((t => !be(t, e)))), void n.Oo.delete(e);
        // No other queries are mapped to the target, clean up the query and the target.
            if (n.isPrimaryClient) {
            // We need to remove the local query target first to allow us to verify
            // whether any other client is still interested in this target.
            n.sharedClientState.removeLocalQueryTarget(s.targetId);
            n.sharedClientState.isActiveQueryTarget(s.targetId) || await Tr(n.localStore, s.targetId, 
            /*keepPersistedTargetData=*/ !1).then((() => {
                n.sharedClientState.clearQueryState(s.targetId), lo(n.remoteStore, s.targetId), 
                ga(n, s.targetId);
            })).catch(Bi);
        } else ga(n, s.targetId), await Tr(n.localStore, s.targetId, 
        /*keepPersistedTargetData=*/ !0);
    }

    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */ async function ca(t, e, n) {
        const s = $a$1(t);
        try {
            const t = await function(t, e) {
                const n = q$1(t), s = at.now(), i = e.reduce(((t, e) => t.add(e.key)), Sn());
                let r;
                return n.persistence.runTransaction("Locally write mutations", "readwrite", (t => n.Wn.vn(t, i).next((i => {
                    r = i;
                    // For non-idempotent mutations (such as `FieldValue.increment()`),
                    // we record the base state in a separate patch mutation. This is
                    // later used to guarantee consistent values and prevents flicker
                    // even if the backend sends us an update that already includes our
                    // transform.
                    const o = [];
                    for (const t of e) {
                        const e = en(t, r.get(t.key));
                        null != e && 
                        // NOTE: The base state should only be applied if there's some
                        // existing document to override, so use a Precondition of
                        // exists=true
                        o.push(new on(t.key, e, Qt(e.value.mapValue), Je.exists(!0)));
                    }
                    return n.An.addMutationBatch(t, s, o, e);
                })))).then((t => (t.applyToLocalDocumentSet(r), {
                    batchId: t.batchId,
                    changes: r
                })));
            }(s.localStore, e);
            s.sharedClientState.addPendingMutation(t.batchId), function(t, e, n) {
                let s = t.Ko[t.currentUser.toKey()];
                s || (s = new gn(it));
                s = s.insert(e, n), t.Ko[t.currentUser.toKey()] = s;
            }
            /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */ (s, t.batchId, n), await Ia$1(s, t.changes), await Ro(s.remoteStore);
        } catch (t) {
            // If we can't persist the mutation, we reject the user callback and
            // don't send the mutation. The user can then retry the write.
            const e = Oo(t, "Failed to persist write");
            n.reject(e);
        }
    }

    /**
     * Applies one remote event to the sync engine, notifying any views of the
     * changes, and releasing any pending mutation batches that would become
     * visible because of the snapshot version the remote event contains.
     */ async function ua$1(t, e) {
        const n = q$1(t);
        try {
            const t = await mr(n.localStore, e);
            // Update `receivedDocument` as appropriate for any limbo targets.
                    e.targetChanges.forEach(((t, e) => {
                const s = n.Uo.get(e);
                s && (
                // Since this is a limbo resolution lookup, it's for a single document
                // and it could be added, modified, or removed, but not a combination.
                B$1(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), 
                t.addedDocuments.size > 0 ? s.$o = !0 : t.modifiedDocuments.size > 0 ? B$1(s.$o) : t.removedDocuments.size > 0 && (B$1(s.$o), 
                s.$o = !1));
            })), await Ia$1(n, t, e);
        } catch (t) {
            await Bi(t);
        }
    }

    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */ function ha$1(t, e, n) {
        const s = q$1(t);
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
            if (s.isPrimaryClient && 0 /* RemoteStore */ === n || !s.isPrimaryClient && 1 /* SharedClientState */ === n) {
            const t = [];
            s.Oo.forEach(((n, s) => {
                const i = s.view.ro(e);
                i.snapshot && t.push(i.snapshot);
            })), function(t, e) {
                const n = q$1(t);
                n.onlineState = e;
                let s = !1;
                n.queries.forEach(((t, n) => {
                    for (const t of n.listeners) 
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    t.ro(e) && (s = !0);
                })), s && Go(n);
            }(s.eventManager, e), t.length && s.Fo.Pr(t), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
        }
    }

    /**
     * Rejects the listen for the given targetID. This can be triggered by the
     * backend for any active target.
     *
     * @param syncEngine - The sync engine implementation.
     * @param targetId - The targetID corresponds to one previously initiated by the
     * user as part of TargetData passed to listen() on RemoteStore.
     * @param err - A description of the condition that has forced the rejection.
     * Nearly always this will be an indication that the user is no longer
     * authorized to see the data matching the target.
     */ async function la(t, e, n) {
        const s = q$1(t);
        // PORTING NOTE: Multi-tab only.
            s.sharedClientState.updateQueryState(e, "rejected", n);
        const i = s.Uo.get(e), r = i && i.key;
        if (r) {
            // TODO(klimt): We really only should do the following on permission
            // denied errors, but we don't have the cause code here.
            // It's a limbo doc. Create a synthetic event saying it was deleted.
            // This is kind of a hack. Ideally, we would have a method in the local
            // store to purge a document. However, it would be tricky to keep all of
            // the local store's invariants with another method.
            let t = new gn(St.comparator);
            t = t.insert(r, Wt.newNoDocument(r, ct.min()));
            const n = Sn().add(r), i = new Nn(ct.min(), 
            /* targetChanges= */ new Map, 
            /* targetMismatches= */ new Tn(it), t, n);
            await ua$1(s, i), 
            // Since this query failed, we won't want to manually unlisten to it.
            // We only remove it from bookkeeping after we successfully applied the
            // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
            // this query when the RemoteStore restarts the Watch stream, which should
            // re-trigger the target failure.
            s.Bo = s.Bo.remove(r), s.Uo.delete(e), Ea(s);
        } else await Tr(s.localStore, e, 
        /* keepPersistedTargetData */ !1).then((() => ga(s, e, n))).catch(Bi);
    }

    async function fa$1(t, e) {
        const n = q$1(t), s = e.batch.batchId;
        try {
            const t = await wr(n.localStore, e);
            // The local store may or may not be able to apply the write result and
            // raise events immediately (depending on whether the watcher is caught
            // up), so we raise user callbacks first so that they consistently happen
            // before listen events.
                    ma$1(n, s, /*error=*/ null), _a(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), 
            await Ia$1(n, t);
        } catch (t) {
            await Bi(t);
        }
    }

    async function da$1(t, e, n) {
        const s = q$1(t);
        try {
            const t = await function(t, e) {
                const n = q$1(t);
                return n.persistence.runTransaction("Reject batch", "readwrite-primary", (t => {
                    let s;
                    return n.An.lookupMutationBatch(t, e).next((e => (B$1(null !== e), s = e.keys(), n.An.removeMutationBatch(t, e)))).next((() => n.An.performConsistencyCheck(t))).next((() => n.Wn.vn(t, s)));
                }));
            }
            /**
     * Returns the largest (latest) batch id in mutation queue that is pending
     * server response.
     *
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */ (s.localStore, e);
            // The local store may or may not be able to apply the write result and
            // raise events immediately (depending on whether the watcher is caught up),
            // so we raise user callbacks first so that they consistently happen before
            // listen events.
                    ma$1(s, e, n), _a(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), 
            await Ia$1(s, t);
        } catch (n) {
            await Bi(n);
        }
    }

    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */ function _a(t, e) {
        (t.jo.get(e) || []).forEach((t => {
            t.resolve();
        })), t.jo.delete(e);
    }

    /** Reject all outstanding callbacks waiting for pending writes to complete. */ function ma$1(t, e, n) {
        const s = q$1(t);
        let i = s.Ko[s.currentUser.toKey()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
            if (i) {
            const t = i.get(e);
            t && (n ? t.reject(n) : t.resolve(), i = i.remove(e)), s.Ko[s.currentUser.toKey()] = i;
        }
    }

    function ga(t, e, n = null) {
        t.sharedClientState.removeLocalQueryTarget(e);
        for (const s of t.Mo.get(e)) t.Oo.delete(s), n && t.Fo.zo(s, n);
        if (t.Mo.delete(e), t.isPrimaryClient) {
            t.qo.us(e).forEach((e => {
                t.qo.containsKey(e) || 
                // We removed the last reference for this key
                ya$1(t, e);
            }));
        }
    }

    function ya$1(t, e) {
        t.Lo.delete(e.path.canonicalString());
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        const n = t.Bo.get(e);
        null !== n && (lo(t.remoteStore, n), t.Bo = t.Bo.remove(e), t.Uo.delete(n), Ea(t));
    }

    function pa$1(t, e, n) {
        for (const s of n) if (s instanceof Zo) t.qo.addReference(s.key, e), Ta$1(t, s); else if (s instanceof ta$1) {
            $("SyncEngine", "Document no longer in limbo: " + s.key), t.qo.removeReference(s.key, e);
            t.qo.containsKey(s.key) || 
            // We removed the last reference for this key
            ya$1(t, s.key);
        } else L$1();
    }

    function Ta$1(t, e) {
        const n = e.key, s = n.path.canonicalString();
        t.Bo.get(n) || t.Lo.has(s) || ($("SyncEngine", "New document in limbo: " + n), t.Lo.add(s), 
        Ea(t));
    }

    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */ function Ea(t) {
        for (;t.Lo.size > 0 && t.Bo.size < t.maxConcurrentLimboResolutions; ) {
            const e = t.Lo.values().next().value;
            t.Lo.delete(e);
            const n = new St(dt.fromString(e)), s = t.Qo.next();
            t.Uo.set(s, new sa$1(n)), t.Bo = t.Bo.insert(n, s), ho(t.remoteStore, new ai(Re(ge(n.path)), s, 2 /* LimboResolution */ , et.I));
        }
    }

    async function Ia$1(t, e, n) {
        const s = q$1(t), i = [], r = [], o = [];
        s.Oo.isEmpty() || (s.Oo.forEach(((t, a) => {
            o.push(s.Go(a, e, n).then((t => {
                if (t) {
                    s.isPrimaryClient && s.sharedClientState.updateQueryState(a.targetId, t.fromCache ? "not-current" : "current"), 
                    i.push(t);
                    const e = ur.$n(a.targetId, t);
                    r.push(e);
                }
            })));
        })), await Promise.all(o), s.Fo.Pr(i), await async function(t, e) {
            const n = q$1(t);
            try {
                await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t => Gs.forEach(e, (e => Gs.forEach(e.kn, (s => n.persistence.referenceDelegate.addReference(t, e.targetId, s))).next((() => Gs.forEach(e.xn, (s => n.persistence.referenceDelegate.removeReference(t, e.targetId, s)))))))));
            } catch (t) {
                if (!Xs(t)) throw t;
                // If `notifyLocalViewChanges` fails, we did not advance the sequence
                // number for the documents that were included in this transaction.
                // This might trigger them to be deleted earlier than they otherwise
                // would have, but it should not invalidate the integrity of the data.
                $("LocalStore", "Failed to update sequence numbers: " + t);
            }
            for (const t of e) {
                const e = t.targetId;
                if (!t.fromCache) {
                    const t = n.qn.get(e), s = t.snapshotVersion, i = t.withLastLimboFreeSnapshotVersion(s);
                    // Advance the last limbo free snapshot version
                                    n.qn = n.qn.insert(e, i);
                }
            }
        }(s.localStore, r));
    }

    async function Aa$1(t, e) {
        const n = q$1(t);
        if (!n.currentUser.isEqual(e)) {
            $("SyncEngine", "User change. New user:", e.toKey());
            const t = await dr(n.localStore, e);
            n.currentUser = e, 
            // Fails tasks waiting for pending writes requested by previous user.
            function(t, e) {
                t.jo.forEach((t => {
                    t.forEach((t => {
                        t.reject(new j(K$1.CANCELLED, e));
                    }));
                })), t.jo.clear();
            }(n, "'waitForPendingWrites' promise is rejected due to a user change."), 
            // TODO(b/114226417): Consider calling this only in the primary tab.
            n.sharedClientState.handleUserChange(e, t.removedBatchIds, t.addedBatchIds), await Ia$1(n, t.Gn);
        }
    }

    function Ra$1(t, e) {
        const n = q$1(t), s = n.Uo.get(e);
        if (s && s.$o) return Sn().add(s.key);
        {
            let t = Sn();
            const s = n.Mo.get(e);
            if (!s) return t;
            for (const e of s) {
                const s = n.Oo.get(e);
                t = t.unionWith(s.view.Po);
            }
            return t;
        }
    }

    function xa$1(t) {
        const e = q$1(t);
        return e.remoteStore.remoteSyncer.applyRemoteEvent = ua$1.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Ra$1.bind(null, e), 
        e.remoteStore.remoteSyncer.rejectListen = la.bind(null, e), e.Fo.Pr = Qo.bind(null, e.eventManager), 
        e.Fo.zo = Wo.bind(null, e.eventManager), e;
    }

    function $a$1(t) {
        const e = q$1(t);
        return e.remoteStore.remoteSyncer.applySuccessfulWrite = fa$1.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = da$1.bind(null, e), 
        e;
    }

    class Oa$1 {
        constructor() {
            this.synchronizeTabs = !1;
        }
        async initialize(t) {
            this.k = to(t.databaseInfo.databaseId), this.sharedClientState = this.Jo(t), this.persistence = this.Yo(t), 
            await this.persistence.start(), this.gcScheduler = this.Xo(t), this.localStore = this.Zo(t);
        }
        Xo(t) {
            return null;
        }
        Zo(t) {
            return fr(this.persistence, new hr, t.initialUser, this.k);
        }
        Yo(t) {
            return new xr(Fr.ks, this.k);
        }
        Jo(t) {
            return new Wr;
        }
        async terminate() {
            this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), 
            await this.persistence.shutdown();
        }
    }

    /**
     * Initializes and wires the components that are needed to interface with the
     * network.
     */ class Ba {
        async initialize(t, e) {
            this.localStore || (this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, 
            this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), 
            this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(e, 
            /* startAsPrimary=*/ !t.synchronizeTabs), this.sharedClientState.onlineStateHandler = t => ha$1(this.syncEngine, t, 1 /* SharedClientState */), 
            this.remoteStore.remoteSyncer.handleCredentialChange = Aa$1.bind(null, this.syncEngine), 
            await ko(this.remoteStore, this.syncEngine.isPrimaryClient));
        }
        createEventManager(t) {
            return new qo;
        }
        createDatastore(t) {
            const e = to(t.databaseInfo.databaseId), n = (s = t.databaseInfo, new Yr(s));
            var s;
            /** Return the Platform-specific connectivity monitor. */        return function(t, e, n, s) {
                return new ro(t, e, n, s);
            }(t.authCredentials, t.appCheckCredentials, n, e);
        }
        createRemoteStore(t) {
            return e = this.localStore, n = this.datastore, s = t.asyncQueue, i = t => ha$1(this.syncEngine, t, 0 /* RemoteStore */), 
            r = zr.bt() ? new zr : new Gr, new ao(e, n, s, i, r);
            var e, n, s, i, r;
            /** Re-enables the network. Idempotent. */    }
        createSyncEngine(t, e) {
            return function(t, e, n, 
            // PORTING NOTE: Manages state synchronization in multi-tab environments.
            s, i, r, o) {
                const a = new ia$1(t, e, n, s, i, r);
                return o && (a.Wo = !0), a;
            }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
        }
        terminate() {
            return async function(t) {
                const e = q$1(t);
                $("RemoteStore", "RemoteStore shutting down."), e.Gr.add(5 /* Shutdown */), await uo(e), 
                e.Hr.shutdown(), 
                // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                // triggering spurious listener events with cached data, etc.
                e.Jr.set("Unknown" /* Unknown */);
            }(this.remoteStore);
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
     */
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*
     * A wrapper implementation of Observer<T> that will dispatch events
     * asynchronously. To allow immediate silencing, a mute call is added which
     * causes events scheduled to no longer be raised.
     */
    class qa$1 {
        constructor(t) {
            this.observer = t, 
            /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
            this.muted = !1;
        }
        next(t) {
            this.observer.next && this.ea(this.observer.next, t);
        }
        error(t) {
            this.observer.error ? this.ea(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
        }
        na() {
            this.muted = !0;
        }
        ea(t, e) {
            this.muted || setTimeout((() => {
                this.muted || t(e);
            }), 0);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * FirestoreClient is a top-level class that constructs and owns all of the
     * pieces of the client SDK architecture. It is responsible for creating the
     * async queue that is shared by all of the other components in the system.
     */
    class Wa$1 {
        constructor(t, e, 
        /**
         * Asynchronous queue responsible for all of our internal processing. When
         * we get incoming work from the user (via public API) or the network
         * (incoming GRPC messages), we should always schedule onto this queue.
         * This ensures all of our work is properly serialized (e.g. we don't
         * start processing a new operation while the previous one is waiting for
         * an async I/O to complete).
         */
        n, s) {
            this.authCredentials = t, this.appCheckCredentials = e, this.asyncQueue = n, this.databaseInfo = s, 
            this.user = D$1.UNAUTHENTICATED, this.clientId = st.A(), this.authCredentialListener = () => Promise.resolve(), 
            this.authCredentials.start(n, (async t => {
                $("FirestoreClient", "Received user=", t.uid), await this.authCredentialListener(t), 
                this.user = t;
            })), 
            // Register an empty credentials change listener to activate token refresh.
            this.appCheckCredentials.start(n, (() => Promise.resolve()));
        }
        async getConfiguration() {
            return {
                asyncQueue: this.asyncQueue,
                databaseInfo: this.databaseInfo,
                clientId: this.clientId,
                authCredentials: this.authCredentials,
                appCheckCredentials: this.appCheckCredentials,
                initialUser: this.user,
                maxConcurrentLimboResolutions: 100
            };
        }
        setCredentialChangeListener(t) {
            this.authCredentialListener = t;
        }
        /**
         * Checks that the client has not been terminated. Ensures that other methods on
         * this class cannot be called after the client is terminated.
         */    verifyNotTerminated() {
            if (this.asyncQueue.isShuttingDown) throw new j(K$1.FAILED_PRECONDITION, "The client has already been terminated.");
        }
        terminate() {
            this.asyncQueue.enterRestrictedMode();
            const t = new Q$1;
            return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async () => {
                try {
                    this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), 
                    // The credentials provider must be terminated after shutting down the
                    // RemoteStore as it will prevent the RemoteStore from retrieving auth
                    // tokens.
                    this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t.resolve();
                } catch (e) {
                    const n = Oo(e, "Failed to shutdown persistence");
                    t.reject(n);
                }
            })), t.promise;
        }
    }

    async function Ga$1(t, e) {
        t.asyncQueue.verifyOperationInProgress(), $("FirestoreClient", "Initializing OfflineComponentProvider");
        const n = await t.getConfiguration();
        await e.initialize(n);
        let s = n.initialUser;
        t.setCredentialChangeListener((async t => {
            s.isEqual(t) || (await dr(e.localStore, t), s = t);
        })), 
        // When a user calls clearPersistence() in one client, all other clients
        // need to be terminated to allow the delete to succeed.
        e.persistence.setDatabaseDeletedListener((() => t.terminate())), t.offlineComponents = e;
    }

    async function za$1(t, e) {
        t.asyncQueue.verifyOperationInProgress();
        const n = await Ha$1(t);
        $("FirestoreClient", "Initializing OnlineComponentProvider");
        const s = await t.getConfiguration();
        await e.initialize(n, s), 
        // The CredentialChangeListener of the online component provider takes
        // precedence over the offline component provider.
        t.setCredentialChangeListener((t => async function(t, e) {
            const n = q$1(t);
            n.asyncQueue.verifyOperationInProgress(), $("RemoteStore", "RemoteStore received new credentials");
            const s = go(n);
            // Tear down and re-create our network streams. This will ensure we get a
            // fresh auth token for the new user and re-fill the write pipeline with
            // new mutations from the LocalStore (since mutations are per-user).
                    n.Gr.add(3 /* CredentialChange */), await uo(n), s && 
            // Don't set the network status to Unknown if we are offline.
            n.Jr.set("Unknown" /* Unknown */), await n.remoteSyncer.handleCredentialChange(e), 
            n.Gr.delete(3 /* CredentialChange */), await co(n);
        }(e.remoteStore, t))), t.onlineComponents = e;
    }

    async function Ha$1(t) {
        return t.offlineComponents || ($("FirestoreClient", "Using default OfflineComponentProvider"), 
        await Ga$1(t, new Oa$1)), t.offlineComponents;
    }

    async function Ja$1(t) {
        return t.onlineComponents || ($("FirestoreClient", "Using default OnlineComponentProvider"), 
        await za$1(t, new Ba)), t.onlineComponents;
    }

    function tc$1(t) {
        return Ja$1(t).then((t => t.syncEngine));
    }

    async function ec$1(t) {
        const e = await Ja$1(t), n = e.eventManager;
        return n.onListen = ra$1.bind(null, e.syncEngine), n.onUnlisten = aa$1.bind(null, e.syncEngine), 
        n;
    }

    function rc$1(t, e, n = {}) {
        const s = new Q$1;
        return t.asyncQueue.enqueueAndForget((async () => function(t, e, n, s, i) {
            const r = new qa$1({
                next: r => {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    e.enqueueAndForget((() => jo(t, o)));
                    const a = r.docs.has(n);
                    !a && r.fromCache ? 
                    // TODO(dimond): If we're online and the document doesn't
                    // exist then we resolve with a doc.exists set to false. If
                    // we're offline however, we reject the Promise in this
                    // case. Two options: 1) Cache the negative response from
                    // the server so we can deliver that even when you're
                    // offline 2) Actually reject the Promise in the online case
                    // if the document doesn't exist.
                    i.reject(new j(K$1.UNAVAILABLE, "Failed to get document because the client is offline.")) : a && r.fromCache && s && "server" === s.source ? i.reject(new j(K$1.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r);
                },
                error: t => i.reject(t)
            }), o = new zo(ge(n.path), r, {
                includeMetadataChanges: !0,
                wo: !0
            });
            return Ko(t, o);
        }(await ec$1(t), t.asyncQueue, e, n, s))), s.promise;
    }

    function ac$1(t, e, n = {}) {
        const s = new Q$1;
        return t.asyncQueue.enqueueAndForget((async () => function(t, e, n, s, i) {
            const r = new qa$1({
                next: n => {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    e.enqueueAndForget((() => jo(t, o))), n.fromCache && "server" === s.source ? i.reject(new j(K$1.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                },
                error: t => i.reject(t)
            }), o = new zo(n, r, {
                includeMetadataChanges: !0,
                wo: !0
            });
            return Ko(t, o);
        }(await ec$1(t), t.asyncQueue, e, n, s))), s.promise;
    }

    class fc$1 {
        /**
         * Constructs a DatabaseInfo using the provided host, databaseId and
         * persistenceKey.
         *
         * @param databaseId - The database to use.
         * @param appId - The Firebase App Id.
         * @param persistenceKey - A unique identifier for this Firestore's local
         * storage (used in conjunction with the databaseId).
         * @param host - The Firestore backend host to connect to.
         * @param ssl - Whether to use SSL when connecting.
         * @param forceLongPolling - Whether to use the forceLongPolling option
         * when using WebChannel as the network transport.
         * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
         * option when using WebChannel as the network transport.
         * @param useFetchStreams Whether to use the Fetch API instead of
         * XMLHTTPRequest
         */
        constructor(t, e, n, s, i, r, o, a) {
            this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, 
            this.forceLongPolling = r, this.autoDetectLongPolling = o, this.useFetchStreams = a;
        }
    }

    /** The default database name for a project. */
    /**
     * Represents the database ID a Firestore client is associated with.
     * @internal
     */
    class dc$1 {
        constructor(t, e) {
            this.projectId = t, this.database = e || "(default)";
        }
        get isDefaultDatabase() {
            return "(default)" === this.database;
        }
        isEqual(t) {
            return t instanceof dc$1 && t.projectId === this.projectId && t.database === this.database;
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const wc$1 = new Map;

    /**
     * An instance map that ensures only one Datastore exists per Firestore
     * instance.
     */
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function _c(t, e, n) {
        if (!n) throw new j(K$1.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
    }

    /**
     * Validates that two boolean options are not set at the same time.
     * @internal
     */ function mc$1(t, e, n, s) {
        if (!0 === e && !0 === s) throw new j(K$1.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
    }

    /**
     * Validates that `path` refers to a document (indicated by the fact it contains
     * an even numbers of segments).
     */ function gc$1(t) {
        if (!St.isDocumentKey(t)) throw new j(K$1.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
    }

    /**
     * Validates that `path` refers to a collection (indicated by the fact it
     * contains an odd numbers of segments).
     */ function yc$1(t) {
        if (St.isDocumentKey(t)) throw new j(K$1.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
    }

    /**
     * Returns true if it's a non-null object without a custom prototype
     * (i.e. excludes Array, Date, etc.).
     */
    /** Returns a string describing the type / value of the provided input. */
    function pc$1(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), 
        JSON.stringify(t);
        if ("number" == typeof t || "boolean" == typeof t) return "" + t;
        if ("object" == typeof t) {
            if (t instanceof Array) return "an array";
            {
                const e = 
                /** try to get the constructor name for an object. */
                function(t) {
                    if (t.constructor) return t.constructor.name;
                    return null;
                }
                /**
     * Casts `obj` to `T`, optionally unwrapping Compat types to expose the
     * underlying instance. Throws if  `obj` is not an instance of `T`.
     *
     * This cast is used in the Lite and Full SDK to verify instance types for
     * arguments passed to the public API.
     * @internal
     */ (t);
                return e ? `a custom ${e} object` : "an object";
            }
        }
        return "function" == typeof t ? "a function" : L$1();
    }

    function Tc$1(t, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        if ("_delegate" in t && (
        // Unwrap Compat types
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        t = t._delegate), !(t instanceof e)) {
            if (e.name === t.constructor.name) throw new j(K$1.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
            {
                const n = pc$1(t);
                throw new j(K$1.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
            }
        }
        return t;
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // settings() defaults:
    /**
     * A concrete type describing all the values that can be applied via a
     * user-supplied `FirestoreSettings` object. This is a separate type so that
     * defaults can be supplied and the value can be checked for equality.
     */
    class Ic$1 {
        constructor(t) {
            var e;
            if (void 0 === t.host) {
                if (void 0 !== t.ssl) throw new j(K$1.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                this.host = "firestore.googleapis.com", this.ssl = true;
            } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
            if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
            void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
                if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new j(K$1.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
                this.cacheSizeBytes = t.cacheSizeBytes;
            }
            this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
            this.useFetchStreams = !!t.useFetchStreams, mc$1("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
        }
        isEqual(t) {
            return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * The Cloud Firestore service interface.
     *
     * Do not call this constructor directly. Instead, use {@link getFirestore}.
     */ class Ac$1 {
        /** @hideconstructor */
        constructor(t, e, n) {
            this._authCredentials = e, this._appCheckCredentials = n, 
            /**
             * Whether it's a Firestore or Firestore Lite instance.
             */
            this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Ic$1({}), 
            this._settingsFrozen = !1, t instanceof dc$1 ? this._databaseId = t : (this._app = t, 
            this._databaseId = function(t) {
                if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new j(K$1.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                return new dc$1(t.options.projectId);
            }
            /**
     * Modify this instance to communicate with the Cloud Firestore emulator.
     *
     * Note: This must be called before this instance has been used to do any
     * operations.
     *
     * @param firestore - The `Firestore` instance to configure to connect to the
     * emulator.
     * @param host - the emulator host (ex: localhost).
     * @param port - the emulator port (ex: 9000).
     * @param options.mockUserToken - the mock auth token to use for unit testing
     * Security Rules.
     */ (t));
        }
        /**
         * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
         * instance.
         */    get app() {
            if (!this._app) throw new j(K$1.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this._app;
        }
        get _initialized() {
            return this._settingsFrozen;
        }
        get _terminated() {
            return void 0 !== this._terminateTask;
        }
        _setSettings(t) {
            if (this._settingsFrozen) throw new j(K$1.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
            this._settings = new Ic$1(t), void 0 !== t.credentials && (this._authCredentials = function(t) {
                if (!t) return new G;
                switch (t.type) {
                  case "gapi":
                    const e = t.client;
                    // Make sure this really is a Gapi client.
                                    return B$1(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                    new Y$1(e, t.sessionIndex || "0", t.iamToken || null);

                  case "provider":
                    return t.client;

                  default:
                    throw new j(K$1.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
                }
            }(t.credentials));
        }
        _getSettings() {
            return this._settings;
        }
        _freezeSettings() {
            return this._settingsFrozen = !0, this._settings;
        }
        _delete() {
            return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
        }
        /** Returns a JSON-serializable representation of this `Firestore` instance. */    toJSON() {
            return {
                app: this._app,
                databaseId: this._databaseId,
                settings: this._settings
            };
        }
        /**
         * Terminates all components used by this client. Subclasses can override
         * this method to clean up their own dependencies, but must also call this
         * method.
         *
         * Only ever called once.
         */    _terminate() {
            /**
     * Removes all components associated with the provided instance. Must be called
     * when the `Firestore` instance is terminated.
     */
            return function(t) {
                const e = wc$1.get(t);
                e && ($("ComponentProvider", "Removing Datastore"), wc$1.delete(t), e.terminate());
            }(this), Promise.resolve();
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A `DocumentReference` refers to a document location in a Firestore database
     * and can be used to write, read, or listen to the location. The document at
     * the referenced location may or may not exist.
     */ class Pc$1 {
        /** @hideconstructor */
        constructor(t, 
        /**
         * If provided, the `FirestoreDataConverter` associated with this instance.
         */
        e, n) {
            this.converter = e, this._key = n, 
            /** The type of this Firestore reference. */
            this.type = "document", this.firestore = t;
        }
        get _path() {
            return this._key.path;
        }
        /**
         * The document's identifier within its collection.
         */    get id() {
            return this._key.path.lastSegment();
        }
        /**
         * A string representing the path of the referenced document (relative
         * to the root of the database).
         */    get path() {
            return this._key.path.canonicalString();
        }
        /**
         * The collection this `DocumentReference` belongs to.
         */    get parent() {
            return new vc$1(this.firestore, this.converter, this._key.path.popLast());
        }
        withConverter(t) {
            return new Pc$1(this.firestore, t, this._key);
        }
    }

    /**
     * A `Query` refers to a query which you can read or listen to. You can also
     * construct refined `Query` objects by adding filters and ordering.
     */ class bc$1 {
        // This is the lite version of the Query class in the main SDK.
        /** @hideconstructor protected */
        constructor(t, 
        /**
         * If provided, the `FirestoreDataConverter` associated with this instance.
         */
        e, n) {
            this.converter = e, this._query = n, 
            /** The type of this Firestore reference. */
            this.type = "query", this.firestore = t;
        }
        withConverter(t) {
            return new bc$1(this.firestore, t, this._query);
        }
    }

    /**
     * A `CollectionReference` object can be used for adding documents, getting
     * document references, and querying for documents (using {@link query}).
     */ class vc$1 extends bc$1 {
        /** @hideconstructor */
        constructor(t, e, n) {
            super(t, e, ge(n)), this._path = n, 
            /** The type of this Firestore reference. */
            this.type = "collection";
        }
        /** The collection's identifier. */    get id() {
            return this._query.path.lastSegment();
        }
        /**
         * A string representing the path of the referenced collection (relative
         * to the root of the database).
         */    get path() {
            return this._query.path.canonicalString();
        }
        /**
         * A reference to the containing `DocumentReference` if this is a
         * subcollection. If this isn't a subcollection, the reference is null.
         */    get parent() {
            const t = this._path.popLast();
            return t.isEmpty() ? null : new Pc$1(this.firestore, 
            /* converter= */ null, new St(t));
        }
        withConverter(t) {
            return new vc$1(this.firestore, t, this._path);
        }
    }

    function Vc$1(t, e, ...n) {
        if (t = getModularInstance(t), _c("collection", "path", e), t instanceof Ac$1) {
            const s = dt.fromString(e, ...n);
            return yc$1(s), new vc$1(t, /* converter= */ null, s);
        }
        {
            if (!(t instanceof Pc$1 || t instanceof vc$1)) throw new j(K$1.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
            const s = t._path.child(dt.fromString(e, ...n));
            return yc$1(s), new vc$1(t.firestore, 
            /* converter= */ null, s);
        }
    }

    function Dc$1(t, e, ...n) {
        if (t = getModularInstance(t), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        1 === arguments.length && (e = st.A()), _c("doc", "path", e), t instanceof Ac$1) {
            const s = dt.fromString(e, ...n);
            return gc$1(s), new Pc$1(t, 
            /* converter= */ null, new St(s));
        }
        {
            if (!(t instanceof Pc$1 || t instanceof vc$1)) throw new j(K$1.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
            const s = t._path.child(dt.fromString(e, ...n));
            return gc$1(s), new Pc$1(t.firestore, t instanceof vc$1 ? t.converter : null, new St(s));
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class kc$1 {
        constructor() {
            // The last promise in the queue.
            this.ma = Promise.resolve(), 
            // A list of retryable operations. Retryable operations are run in order and
            // retried with backoff.
            this.ga = [], 
            // Is this AsyncQueue being shut down? Once it is set to true, it will not
            // be changed again.
            this.ya = !1, 
            // Operations scheduled to be queued in the future. Operations are
            // automatically removed after they are run or canceled.
            this.pa = [], 
            // visible for testing
            this.Ta = null, 
            // Flag set while there's an outstanding AsyncQueue operation, used for
            // assertion sanity-checks.
            this.Ea = !1, 
            // Enabled during shutdown on Safari to prevent future access to IndexedDB.
            this.Ia = !1, 
            // List of TimerIds to fast-forward delays for.
            this.Aa = [], 
            // Backoff timer used to schedule retries for retryable operations
            this.ur = new eo(this, "async_queue_retry" /* AsyncQueueRetry */), 
            // Visibility handler that triggers an immediate retry of all retryable
            // operations. Meant to speed up recovery when we regain file system access
            // after page comes into foreground.
            this.Ra = () => {
                const t = Zr();
                t && $("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.ur.er();
            };
            const t = Zr();
            t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Ra);
        }
        get isShuttingDown() {
            return this.ya;
        }
        /**
         * Adds a new operation to the queue without waiting for it to complete (i.e.
         * we ignore the Promise result).
         */    enqueueAndForget(t) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.enqueue(t);
        }
        enqueueAndForgetEvenWhileRestricted(t) {
            this.Pa(), 
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.ba(t);
        }
        enterRestrictedMode(t) {
            if (!this.ya) {
                this.ya = !0, this.Ia = t || !1;
                const e = Zr();
                e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Ra);
            }
        }
        enqueue(t) {
            if (this.Pa(), this.ya) 
            // Return a Promise which never resolves.
            return new Promise((() => {}));
            // Create a deferred Promise that we can return to the callee. This
            // allows us to return a "hanging Promise" only to the callee and still
            // advance the queue even when the operation is not run.
                    const e = new Q$1;
            return this.ba((() => this.ya && this.Ia ? Promise.resolve() : (t().then(e.resolve, e.reject), 
            e.promise))).then((() => e.promise));
        }
        enqueueRetryable(t) {
            this.enqueueAndForget((() => (this.ga.push(t), this.va())));
        }
        /**
         * Runs the next operation from the retryable queue. If the operation fails,
         * reschedules with backoff.
         */    async va() {
            if (0 !== this.ga.length) {
                try {
                    await this.ga[0](), this.ga.shift(), this.ur.reset();
                } catch (t) {
                    if (!Xs(t)) throw t;
     // Failure will be handled by AsyncQueue
                                    $("AsyncQueue", "Operation failed with retryable error: " + t);
                }
                this.ga.length > 0 && 
                // If there are additional operations, we re-schedule `retryNextOp()`.
                // This is necessary to run retryable operations that failed during
                // their initial attempt since we don't know whether they are already
                // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                // call scheduled here.
                // Since `backoffAndRun()` cancels an existing backoff and schedules a
                // new backoff on every call, there is only ever a single additional
                // operation in the queue.
                this.ur.Zi((() => this.va()));
            }
        }
        ba(t) {
            const e = this.ma.then((() => (this.Ea = !0, t().catch((t => {
                this.Ta = t, this.Ea = !1;
                const e = 
                /**
     * Chrome includes Error.message in Error.stack. Other browsers do not.
     * This returns expected output of message + stack when available.
     * @param error - Error or FirestoreError
     */
                function(t) {
                    let e = t.message || "";
                    t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
                    return e;
                }
                /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ (t);
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw F$1("INTERNAL UNHANDLED ERROR: ", e), t;
            })).then((t => (this.Ea = !1, t))))));
            return this.ma = e, e;
        }
        enqueueAfterDelay(t, e, n) {
            this.Pa(), 
            // Fast-forward delays for timerIds that have been overriden.
            this.Aa.indexOf(t) > -1 && (e = 0);
            const s = Fo.createAndSchedule(this, t, e, n, (t => this.Va(t)));
            return this.pa.push(s), s;
        }
        Pa() {
            this.Ta && L$1();
        }
        verifyOperationInProgress() {}
        /**
         * Waits until all currently queued tasks are finished executing. Delayed
         * operations are not run.
         */    async Sa() {
            // Operations in the queue prior to draining may have enqueued additional
            // operations. Keep draining the queue until the tail is no longer advanced,
            // which indicates that no more new operations were enqueued and that all
            // operations were executed.
            let t;
            do {
                t = this.ma, await t;
            } while (t !== this.ma);
        }
        /**
         * For Tests: Determine if a delayed operation with a particular TimerId
         * exists.
         */    Da(t) {
            for (const e of this.pa) if (e.timerId === t) return !0;
            return !1;
        }
        /**
         * For Tests: Runs some or all delayed operations early.
         *
         * @param lastTimerId - Delayed operations up to and including this TimerId
         * will be drained. Pass TimerId.All to run all delayed operations.
         * @returns a Promise that resolves once all operations have been run.
         */    Ca(t) {
            // Note that draining may generate more delayed ops, so we do that first.
            return this.Sa().then((() => {
                // Run ops in the same order they'd run if they ran naturally.
                this.pa.sort(((t, e) => t.targetTimeMs - e.targetTimeMs));
                for (const e of this.pa) if (e.skipDelay(), "all" /* All */ !== t && e.timerId === t) break;
                return this.Sa();
            }));
        }
        /**
         * For Tests: Skip all subsequent delays for a timer id.
         */    Na(t) {
            this.Aa.push(t);
        }
        /** Called once a DelayedOperation is run or canceled. */    Va(t) {
            // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
            const e = this.pa.indexOf(t);
            this.pa.splice(e, 1);
        }
    }

    function xc$1(t) {
        /**
     * Returns true if obj is an object and contains at least one of the specified
     * methods.
     */
        return function(t, e) {
            if ("object" != typeof t || null === t) return !1;
            const n = t;
            for (const t of e) if (t in n && "function" == typeof n[t]) return !0;
            return !1;
        }
        /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
        /**
     * Represents the task of loading a Firestore bundle. It provides progress of bundle
     * loading, as well as task completion and error events.
     *
     * The API is compatible with `Promise<LoadBundleTaskProgress>`.
     */ (t, [ "next", "error", "complete" ]);
    }

    /**
     * The Cloud Firestore service interface.
     *
     * Do not call this constructor directly. Instead, use {@link getFirestore}.
     */
    class Oc$1 extends Ac$1 {
        /** @hideconstructor */
        constructor(t, e, n) {
            super(t, e, n), 
            /**
             * Whether it's a {@link Firestore} or Firestore Lite instance.
             */
            this.type = "firestore", this._queue = new kc$1, this._persistenceKey = "name" in t ? t.name : "[DEFAULT]";
        }
        _terminate() {
            return this._firestoreClient || 
            // The client must be initialized to ensure that all subsequent API
            // usage throws an exception.
            Uc$1(this), this._firestoreClient.terminate();
        }
    }

    /**
     * Returns the existing {@link Firestore} instance that is associated with the
     * provided {@link @firebase/app#FirebaseApp}. If no instance exists, initializes a new
     * instance with default settings.
     *
     * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned {@link Firestore}
     * instance is associated with.
     * @returns The {@link Firestore} instance of the provided app.
     */ function Lc$1(e = getApp()) {
        return _getProvider(e, "firestore").getImmediate();
    }

    /**
     * @internal
     */ function Bc$1(t) {
        return t._firestoreClient || Uc$1(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
    }

    function Uc$1(t) {
        var e;
        const n = t._freezeSettings(), s = function(t, e, n, s) {
            return new fc$1(t, e, n, s.host, s.ssl, s.experimentalForceLongPolling, s.experimentalAutoDetectLongPolling, s.useFetchStreams);
        }(t._databaseId, (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) || "", t._persistenceKey, n);
        t._firestoreClient = new Wa$1(t._authCredentials, t._appCheckCredentials, t._queue, s);
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A `FieldPath` refers to a field in a document. The path may consist of a
     * single field name (referring to a top-level field in the document), or a
     * list of field names (referring to a nested field in the document).
     *
     * Create a `FieldPath` by providing field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     */
    class Zc$1 {
        /**
         * Creates a `FieldPath` from the provided field names. If more than one field
         * name is provided, the path will point to a nested field in a document.
         *
         * @param fieldNames - A list of field names.
         */
        constructor(...t) {
            for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new j(K$1.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
            this._internalPath = new _t(t);
        }
        /**
         * Returns true if this `FieldPath` is equal to the provided one.
         *
         * @param other - The `FieldPath` to compare against.
         * @returns true if this `FieldPath` is equal to the provided one.
         */    isEqual(t) {
            return this._internalPath.isEqual(t._internalPath);
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An immutable object representing an array of bytes.
     */ class eu {
        /** @hideconstructor */
        constructor(t) {
            this._byteString = t;
        }
        /**
         * Creates a new `Bytes` object from the given Base64 string, converting it to
         * bytes.
         *
         * @param base64 - The Base64 string used to create the `Bytes` object.
         */    static fromBase64String(t) {
            try {
                return new eu(yt.fromBase64String(t));
            } catch (t) {
                throw new j(K$1.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t);
            }
        }
        /**
         * Creates a new `Bytes` object from the given Uint8Array.
         *
         * @param array - The Uint8Array used to create the `Bytes` object.
         */    static fromUint8Array(t) {
            return new eu(yt.fromUint8Array(t));
        }
        /**
         * Returns the underlying bytes as a Base64-encoded string.
         *
         * @returns The Base64-encoded string created from the `Bytes` object.
         */    toBase64() {
            return this._byteString.toBase64();
        }
        /**
         * Returns the underlying bytes in a new `Uint8Array`.
         *
         * @returns The Uint8Array created from the `Bytes` object.
         */    toUint8Array() {
            return this._byteString.toUint8Array();
        }
        /**
         * Returns a string representation of the `Bytes` object.
         *
         * @returns A string representation of the `Bytes` object.
         */    toString() {
            return "Bytes(base64: " + this.toBase64() + ")";
        }
        /**
         * Returns true if this `Bytes` object is equal to the provided one.
         *
         * @param other - The `Bytes` object to compare against.
         * @returns true if this `Bytes` object is equal to the provided one.
         */    isEqual(t) {
            return this._byteString.isEqual(t._byteString);
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Sentinel values that can be used when writing document fields with `set()`
     * or `update()`.
     */ class nu {
        /**
         * @param _methodName - The public API endpoint that returns this class.
         * @hideconstructor
         */
        constructor(t) {
            this._methodName = t;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An immutable object representing a geographic location in Firestore. The
     * location is represented as latitude/longitude pair.
     *
     * Latitude values are in the range of [-90, 90].
     * Longitude values are in the range of [-180, 180].
     */ class su {
        /**
         * Creates a new immutable `GeoPoint` object with the provided latitude and
         * longitude values.
         * @param latitude - The latitude as number between -90 and 90.
         * @param longitude - The longitude as number between -180 and 180.
         */
        constructor(t, e) {
            if (!isFinite(t) || t < -90 || t > 90) throw new j(K$1.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
            if (!isFinite(e) || e < -180 || e > 180) throw new j(K$1.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
            this._lat = t, this._long = e;
        }
        /**
         * The latitude of this `GeoPoint` instance.
         */    get latitude() {
            return this._lat;
        }
        /**
         * The longitude of this `GeoPoint` instance.
         */    get longitude() {
            return this._long;
        }
        /**
         * Returns true if this `GeoPoint` is equal to the provided one.
         *
         * @param other - The `GeoPoint` to compare against.
         * @returns true if this `GeoPoint` is equal to the provided one.
         */    isEqual(t) {
            return this._lat === t._lat && this._long === t._long;
        }
        /** Returns a JSON-serializable representation of this GeoPoint. */    toJSON() {
            return {
                latitude: this._lat,
                longitude: this._long
            };
        }
        /**
         * Actually private to JS consumers of our API, so this function is prefixed
         * with an underscore.
         */    _compareTo(t) {
            return it(this._lat, t._lat) || it(this._long, t._long);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const iu = /^__.*__$/;

    /** The result of parsing document data (e.g. for a setData call). */ class ru {
        constructor(t, e, n) {
            this.data = t, this.fieldMask = e, this.fieldTransforms = n;
        }
        toMutation(t, e) {
            return null !== this.fieldMask ? new on(t, this.data, this.fieldMask, e, this.fieldTransforms) : new rn(t, this.data, e, this.fieldTransforms);
        }
    }

    /** The result of parsing "update" data (i.e. for an updateData call). */ class ou {
        constructor(t, 
        // The fieldMask does not include document transforms.
        e, n) {
            this.data = t, this.fieldMask = e, this.fieldTransforms = n;
        }
        toMutation(t, e) {
            return new on(t, this.data, this.fieldMask, e, this.fieldTransforms);
        }
    }

    function au(t) {
        switch (t) {
          case 0 /* Set */ :
     // fall through
                  case 2 /* MergeSet */ :
     // fall through
                  case 1 /* Update */ :
            return !0;

          case 3 /* Argument */ :
          case 4 /* ArrayArgument */ :
            return !1;

          default:
            throw L$1();
        }
    }

    /** A "context" object passed around while parsing user data. */ class cu {
        /**
         * Initializes a ParseContext with the given source and path.
         *
         * @param settings - The settings for the parser.
         * @param databaseId - The database ID of the Firestore instance.
         * @param serializer - The serializer to use to generate the Value proto.
         * @param ignoreUndefinedProperties - Whether to ignore undefined properties
         * rather than throw.
         * @param fieldTransforms - A mutable list of field transforms encountered
         * while parsing the data.
         * @param fieldMask - A mutable list of field paths encountered while parsing
         * the data.
         *
         * TODO(b/34871131): We don't support array paths right now, so path can be
         * null to indicate the context represents any location within an array (in
         * which case certain features will not work and errors will be somewhat
         * compromised).
         */
        constructor(t, e, n, s, i, r) {
            this.settings = t, this.databaseId = e, this.k = n, this.ignoreUndefinedProperties = s, 
            // Minor hack: If fieldTransforms is undefined, we assume this is an
            // external call and we need to validate the entire path.
            void 0 === i && this.ka(), this.fieldTransforms = i || [], this.fieldMask = r || [];
        }
        get path() {
            return this.settings.path;
        }
        get xa() {
            return this.settings.xa;
        }
        /** Returns a new context with the specified settings overwritten. */    $a(t) {
            return new cu(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.k, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
        }
        Fa(t) {
            var e;
            const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.$a({
                path: n,
                Oa: !1
            });
            return s.Ma(t), s;
        }
        La(t) {
            var e;
            const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.$a({
                path: n,
                Oa: !1
            });
            return s.ka(), s;
        }
        Ba(t) {
            // TODO(b/34871131): We don't support array paths right now; so make path
            // undefined.
            return this.$a({
                path: void 0,
                Oa: !0
            });
        }
        Ua(t) {
            return Vu(t, this.settings.methodName, this.settings.qa || !1, this.path, this.settings.Ka);
        }
        /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
            return void 0 !== this.fieldMask.find((e => t.isPrefixOf(e))) || void 0 !== this.fieldTransforms.find((e => t.isPrefixOf(e.field)));
        }
        ka() {
            // TODO(b/34871131): Remove null check once we have proper paths for fields
            // within arrays.
            if (this.path) for (let t = 0; t < this.path.length; t++) this.Ma(this.path.get(t));
        }
        Ma(t) {
            if (0 === t.length) throw this.Ua("Document fields must not be empty");
            if (au(this.xa) && iu.test(t)) throw this.Ua('Document fields cannot begin and end with "__"');
        }
    }

    /**
     * Helper for parsing raw user input (provided via the API) into internal model
     * classes.
     */ class uu {
        constructor(t, e, n) {
            this.databaseId = t, this.ignoreUndefinedProperties = e, this.k = n || to(t);
        }
        /** Creates a new top-level parse context. */    ja(t, e, n, s = !1) {
            return new cu({
                xa: t,
                methodName: e,
                Ka: n,
                path: _t.emptyPath(),
                Oa: !1,
                qa: s
            }, this.databaseId, this.k, this.ignoreUndefinedProperties);
        }
    }

    function hu(t) {
        const e = t._freezeSettings(), n = to(t._databaseId);
        return new uu(t._databaseId, !!e.ignoreUndefinedProperties, n);
    }

    /** Parse document data from a set() call. */ function lu(t, e, n, s, i, r = {}) {
        const o = t.ja(r.merge || r.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
        Ru("Data must be an object, but it was:", o, s);
        const a = Iu(s, o);
        let c, u;
        if (r.merge) c = new mt(o.fieldMask), u = o.fieldTransforms; else if (r.mergeFields) {
            const t = [];
            for (const s of r.mergeFields) {
                const i = Pu(e, s, n);
                if (!o.contains(i)) throw new j(K$1.INVALID_ARGUMENT, `Field '${i}' is specified in your field mask but missing from your input data.`);
                Su(t, i) || t.push(i);
            }
            c = new mt(t), u = o.fieldTransforms.filter((t => c.covers(t.field)));
        } else c = null, u = o.fieldTransforms;
        return new ru(new jt(a), c, u);
    }

    class fu extends nu {
        _toFieldTransform(t) {
            if (2 /* MergeSet */ !== t.xa) throw 1 /* Update */ === t.xa ? t.Ua(`${this._methodName}() can only appear at the top level of your update data`) : t.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
            // No transform to add for a delete, but we need to add it to our
            // fieldMask so it gets deleted.
            return t.fieldMask.push(t.path), null;
        }
        isEqual(t) {
            return t instanceof fu;
        }
    }

    /** Parse update data from an update() call. */ function yu(t, e, n, s) {
        const i = t.ja(1 /* Update */ , e, n);
        Ru("Data must be an object, but it was:", i, s);
        const r = [], o = jt.empty();
        ht(s, ((t, s) => {
            const a = vu(e, t, n);
            // For Compat types, we have to "extract" the underlying types before
            // performing validation.
                    s = getModularInstance(s);
            const c = i.La(a);
            if (s instanceof fu) 
            // Add it to the field mask, but don't add anything to updateData.
            r.push(a); else {
                const t = Eu(s, c);
                null != t && (r.push(a), o.set(a, t));
            }
        }));
        const a = new mt(r);
        return new ou(o, a, i.fieldTransforms);
    }

    /** Parse update data from a list of field/value arguments. */ function pu(t, e, n, s, i, r) {
        const o = t.ja(1 /* Update */ , e, n), a = [ Pu(e, s, n) ], c = [ i ];
        if (r.length % 2 != 0) throw new j(K$1.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
        for (let t = 0; t < r.length; t += 2) a.push(Pu(e, r[t])), c.push(r[t + 1]);
        const u = [], h = jt.empty();
        // We iterate in reverse order to pick the last value for a field if the
        // user specified the field multiple times.
        for (let t = a.length - 1; t >= 0; --t) if (!Su(u, a[t])) {
            const e = a[t];
            let n = c[t];
            // For Compat types, we have to "extract" the underlying types before
            // performing validation.
                    n = getModularInstance(n);
            const s = o.La(e);
            if (n instanceof fu) 
            // Add it to the field mask, but don't add anything to updateData.
            u.push(e); else {
                const t = Eu(n, s);
                null != t && (u.push(e), h.set(e, t));
            }
        }
        const l = new mt(u);
        return new ou(h, l, o.fieldTransforms);
    }

    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays - Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */ function Tu(t, e, n, s = !1) {
        return Eu(n, t.ja(s ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
    }

    /**
     * Parses user data to Protobuf Values.
     *
     * @param input - Data to be parsed.
     * @param context - A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @returns The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */ function Eu(t, e) {
        if (Au(
        // Unwrap the API type from the Compat SDK. This will return the API type
        // from firestore-exp.
        t = getModularInstance(t))) return Ru("Unsupported field value:", e, t), Iu(t, e);
        if (t instanceof nu) 
        // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.
        /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
        return function(t, e) {
            // Sentinels are only supported with writes, and not within arrays.
            if (!au(e.xa)) throw e.Ua(`${t._methodName}() can only be used with update() and set()`);
            if (!e.path) throw e.Ua(`${t._methodName}() is not currently supported inside arrays`);
            const n = t._toFieldTransform(e);
            n && e.fieldTransforms.push(n);
        }
        /**
     * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
     *
     * @returns The parsed value
     */ (t, e), null;
        if (void 0 === t && e.ignoreUndefinedProperties) 
        // If the input is undefined it can never participate in the fieldMask, so
        // don't handle this below. If `ignoreUndefinedProperties` is false,
        // `parseScalarValue` will reject an undefined value.
        return null;
        if (
        // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        e.path && e.fieldMask.push(e.path), t instanceof Array) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            // In the case of IN queries, the parsed data is an array (representing
            // the set of values to be included for the IN query) that may directly
            // contain additional arrays (each representing an individual field
            // value), so we disable this validation.
            if (e.settings.Oa && 4 /* ArrayArgument */ !== e.xa) throw e.Ua("Nested arrays are not supported");
            return function(t, e) {
                const n = [];
                let s = 0;
                for (const i of t) {
                    let t = Eu(i, e.Ba(s));
                    null == t && (
                    // Just include nulls in the array for fields being replaced with a
                    // sentinel.
                    t = {
                        nullValue: "NULL_VALUE"
                    }), n.push(t), s++;
                }
                return {
                    arrayValue: {
                        values: n
                    }
                };
            }(t, e);
        }
        return function(t, e) {
            if (null === (t = getModularInstance(t))) return {
                nullValue: "NULL_VALUE"
            };
            if ("number" == typeof t) return xe(e.k, t);
            if ("boolean" == typeof t) return {
                booleanValue: t
            };
            if ("string" == typeof t) return {
                stringValue: t
            };
            if (t instanceof Date) {
                const n = at.fromDate(t);
                return {
                    timestampValue: jn(e.k, n)
                };
            }
            if (t instanceof at) {
                // Firestore backend truncates precision down to microseconds. To ensure
                // offline mode works the same with regards to truncation, perform the
                // truncation immediately without waiting for the backend to do that.
                const n = new at(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
                return {
                    timestampValue: jn(e.k, n)
                };
            }
            if (t instanceof su) return {
                geoPointValue: {
                    latitude: t.latitude,
                    longitude: t.longitude
                }
            };
            if (t instanceof eu) return {
                bytesValue: Qn(e.k, t._byteString)
            };
            if (t instanceof Pc$1) {
                const n = e.databaseId, s = t.firestore._databaseId;
                if (!s.isEqual(n)) throw e.Ua(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
                return {
                    referenceValue: zn(t.firestore._databaseId || e.databaseId, t._key.path)
                };
            }
            throw e.Ua(`Unsupported field value: ${pc$1(t)}`);
        }
        /**
     * Checks whether an object looks like a JSON object that should be converted
     * into a struct. Normal class/prototype instances are considered to look like
     * JSON objects since they should be converted to a struct value. Arrays, Dates,
     * GeoPoints, etc. are not considered to look like JSON objects since they map
     * to specific FieldValue types other than ObjectValue.
     */ (t, e);
    }

    function Iu(t, e) {
        const n = {};
        return lt(t) ? 
        // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        e.path && e.path.length > 0 && e.fieldMask.push(e.path) : ht(t, ((t, s) => {
            const i = Eu(s, e.Fa(t));
            null != i && (n[t] = i);
        })), {
            mapValue: {
                fields: n
            }
        };
    }

    function Au(t) {
        return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof at || t instanceof su || t instanceof eu || t instanceof Pc$1 || t instanceof nu);
    }

    function Ru(t, e, n) {
        if (!Au(n) || !function(t) {
            return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
        }(n)) {
            const s = pc$1(n);
            throw "an object" === s ? e.Ua(t + " a custom object") : e.Ua(t + " " + s);
        }
    }

    /**
     * Helper that calls fromDotSeparatedString() but wraps any error thrown.
     */ function Pu(t, e, n) {
        if ((
        // If required, replace the FieldPath Compat class with with the firestore-exp
        // FieldPath.
        e = getModularInstance(e)) instanceof Zc$1) return e._internalPath;
        if ("string" == typeof e) return vu(t, e);
        throw Vu("Field path arguments must be of type string or FieldPath.", t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }

    /**
     * Matches any characters in a field path string that are reserved.
     */ const bu = new RegExp("[~\\*/\\[\\]]");

    /**
     * Wraps fromDotSeparatedString with an error message about the method that
     * was thrown.
     * @param methodName - The publicly visible method name
     * @param path - The dot-separated string form of a field path which will be
     * split on dots.
     * @param targetDoc - The document against which the field path will be
     * evaluated.
     */ function vu(t, e, n) {
        if (e.search(bu) >= 0) throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
        try {
            return new Zc$1(...e.split("."))._internalPath;
        } catch (s) {
            throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, 
            /* hasConverter= */ !1, 
            /* path= */ void 0, n);
        }
    }

    function Vu(t, e, n, s, i) {
        const r = s && !s.isEmpty(), o = void 0 !== i;
        let a = `Function ${e}() called with invalid data`;
        n && (a += " (via `toFirestore()`)"), a += ". ";
        let c = "";
        return (r || o) && (c += " (found", r && (c += ` in field ${s}`), o && (c += ` in document ${i}`), 
        c += ")"), new j(K$1.INVALID_ARGUMENT, a + t + c);
    }

    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function Su(t, e) {
        return t.some((t => t.isEqual(e)));
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A `DocumentSnapshot` contains data read from a document in your Firestore
     * database. The data can be extracted with `.data()` or `.get(<field>)` to
     * get a specific field.
     *
     * For a `DocumentSnapshot` that points to a non-existing document, any data
     * access will return 'undefined'. You can use the `exists()` method to
     * explicitly verify a document's existence.
     */ class Du {
        // Note: This class is stripped down version of the DocumentSnapshot in
        // the legacy SDK. The changes are:
        // - No support for SnapshotMetadata.
        // - No support for SnapshotOptions.
        /** @hideconstructor protected */
        constructor(t, e, n, s, i) {
            this._firestore = t, this._userDataWriter = e, this._key = n, this._document = s, 
            this._converter = i;
        }
        /** Property of the `DocumentSnapshot` that provides the document's ID. */    get id() {
            return this._key.path.lastSegment();
        }
        /**
         * The `DocumentReference` for the document included in the `DocumentSnapshot`.
         */    get ref() {
            return new Pc$1(this._firestore, this._converter, this._key);
        }
        /**
         * Signals whether or not the document at the snapshot's location exists.
         *
         * @returns true if the document exists.
         */    exists() {
            return null !== this._document;
        }
        /**
         * Retrieves all fields in the document as an `Object`. Returns `undefined` if
         * the document doesn't exist.
         *
         * @returns An `Object` containing all fields in the document or `undefined`
         * if the document doesn't exist.
         */    data() {
            if (this._document) {
                if (this._converter) {
                    // We only want to use the converter and create a new DocumentSnapshot
                    // if a converter has been provided.
                    const t = new Cu(this._firestore, this._userDataWriter, this._key, this._document, 
                    /* converter= */ null);
                    return this._converter.fromFirestore(t);
                }
                return this._userDataWriter.convertValue(this._document.data.value);
            }
        }
        /**
         * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
         * document or field doesn't exist.
         *
         * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
         * field.
         * @returns The data at the specified field location or undefined if no such
         * field exists in the document.
         */
        // We are using `any` here to avoid an explicit cast by our users.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get(t) {
            if (this._document) {
                const e = this._document.data.field(Nu("DocumentSnapshot.get", t));
                if (null !== e) return this._userDataWriter.convertValue(e);
            }
        }
    }

    /**
     * A `QueryDocumentSnapshot` contains data read from a document in your
     * Firestore database as part of a query. The document is guaranteed to exist
     * and its data can be extracted with `.data()` or `.get(<field>)` to get a
     * specific field.
     *
     * A `QueryDocumentSnapshot` offers the same API surface as a
     * `DocumentSnapshot`. Since query results contain only existing documents, the
     * `exists` property will always be true and `data()` will never return
     * 'undefined'.
     */ class Cu extends Du {
        /**
         * Retrieves all fields in the document as an `Object`.
         *
         * @override
         * @returns An `Object` containing all fields in the document.
         */
        data() {
            return super.data();
        }
    }

    /**
     * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
     */ function Nu(t, e) {
        return "string" == typeof e ? vu(t, e) : e instanceof Zc$1 ? e._internalPath : e._delegate._internalPath;
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Metadata about a snapshot, describing the state of the snapshot.
     */ class ku {
        /** @hideconstructor */
        constructor(t, e) {
            this.hasPendingWrites = t, this.fromCache = e;
        }
        /**
         * Returns true if this `SnapshotMetadata` is equal to the provided one.
         *
         * @param other - The `SnapshotMetadata` to compare against.
         * @returns true if this `SnapshotMetadata` is equal to the provided one.
         */    isEqual(t) {
            return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
        }
    }

    /**
     * A `DocumentSnapshot` contains data read from a document in your Firestore
     * database. The data can be extracted with `.data()` or `.get(<field>)` to
     * get a specific field.
     *
     * For a `DocumentSnapshot` that points to a non-existing document, any data
     * access will return 'undefined'. You can use the `exists()` method to
     * explicitly verify a document's existence.
     */ class xu extends Du {
        /** @hideconstructor protected */
        constructor(t, e, n, s, i, r) {
            super(t, e, n, s, r), this._firestore = t, this._firestoreImpl = t, this.metadata = i;
        }
        /**
         * Property of the `DocumentSnapshot` that signals whether or not the data
         * exists. True if the document exists.
         */    exists() {
            return super.exists();
        }
        /**
         * Retrieves all fields in the document as an `Object`. Returns `undefined` if
         * the document doesn't exist.
         *
         * By default, `FieldValue.serverTimestamp()` values that have not yet been
         * set to their final value will be returned as `null`. You can override
         * this by passing an options object.
         *
         * @param options - An options object to configure how data is retrieved from
         * the snapshot (for example the desired behavior for server timestamps that
         * have not yet been set to their final value).
         * @returns An `Object` containing all fields in the document or `undefined` if
         * the document doesn't exist.
         */    data(t = {}) {
            if (this._document) {
                if (this._converter) {
                    // We only want to use the converter and create a new DocumentSnapshot
                    // if a converter has been provided.
                    const e = new $u(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, 
                    /* converter= */ null);
                    return this._converter.fromFirestore(e, t);
                }
                return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
            }
        }
        /**
         * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
         * document or field doesn't exist.
         *
         * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
         * its final value will be returned as `null`. You can override this by
         * passing an options object.
         *
         * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
         * field.
         * @param options - An options object to configure how the field is retrieved
         * from the snapshot (for example the desired behavior for server timestamps
         * that have not yet been set to their final value).
         * @returns The data at the specified field location or undefined if no such
         * field exists in the document.
         */
        // We are using `any` here to avoid an explicit cast by our users.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get(t, e = {}) {
            if (this._document) {
                const n = this._document.data.field(Nu("DocumentSnapshot.get", t));
                if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
            }
        }
    }

    /**
     * A `QueryDocumentSnapshot` contains data read from a document in your
     * Firestore database as part of a query. The document is guaranteed to exist
     * and its data can be extracted with `.data()` or `.get(<field>)` to get a
     * specific field.
     *
     * A `QueryDocumentSnapshot` offers the same API surface as a
     * `DocumentSnapshot`. Since query results contain only existing documents, the
     * `exists` property will always be true and `data()` will never return
     * 'undefined'.
     */ class $u extends xu {
        /**
         * Retrieves all fields in the document as an `Object`.
         *
         * By default, `FieldValue.serverTimestamp()` values that have not yet been
         * set to their final value will be returned as `null`. You can override
         * this by passing an options object.
         *
         * @override
         * @param options - An options object to configure how data is retrieved from
         * the snapshot (for example the desired behavior for server timestamps that
         * have not yet been set to their final value).
         * @returns An `Object` containing all fields in the document.
         */
        data(t = {}) {
            return super.data(t);
        }
    }

    /**
     * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
     * representing the results of a query. The documents can be accessed as an
     * array via the `docs` property or enumerated using the `forEach` method. The
     * number of documents can be determined via the `empty` and `size`
     * properties.
     */ class Fu {
        /** @hideconstructor */
        constructor(t, e, n, s) {
            this._firestore = t, this._userDataWriter = e, this._snapshot = s, this.metadata = new ku(s.hasPendingWrites, s.fromCache), 
            this.query = n;
        }
        /** An array of all the documents in the `QuerySnapshot`. */    get docs() {
            const t = [];
            return this.forEach((e => t.push(e))), t;
        }
        /** The number of documents in the `QuerySnapshot`. */    get size() {
            return this._snapshot.docs.size;
        }
        /** True if there are no documents in the `QuerySnapshot`. */    get empty() {
            return 0 === this.size;
        }
        /**
         * Enumerates all of the documents in the `QuerySnapshot`.
         *
         * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
         * each document in the snapshot.
         * @param thisArg - The `this` binding for the callback.
         */    forEach(t, e) {
            this._snapshot.docs.forEach((n => {
                t.call(e, new $u(this._firestore, this._userDataWriter, n.key, n, new ku(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
            }));
        }
        /**
         * Returns an array of the documents changes since the last snapshot. If this
         * is the first snapshot, all documents will be in the list as 'added'
         * changes.
         *
         * @param options - `SnapshotListenOptions` that control whether metadata-only
         * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
         * snapshot events.
         */    docChanges(t = {}) {
            const e = !!t.includeMetadataChanges;
            if (e && this._snapshot.excludesMetadataChanges) throw new j(K$1.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
            return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = 
            /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
            function(t, e) {
                if (t._snapshot.oldDocs.isEmpty()) {
                    let e = 0;
                    return t._snapshot.docChanges.map((n => ({
                        type: "added",
                        doc: new $u(t._firestore, t._userDataWriter, n.doc.key, n.doc, new ku(t._snapshot.mutatedKeys.has(n.doc.key), t._snapshot.fromCache), t.query.converter),
                        oldIndex: -1,
                        newIndex: e++
                    })));
                }
                {
                    // A `DocumentSet` that is updated incrementally as changes are applied to use
                    // to lookup the index of a document.
                    let n = t._snapshot.oldDocs;
                    return t._snapshot.docChanges.filter((t => e || 3 /* Metadata */ !== t.type)).map((e => {
                        const s = new $u(t._firestore, t._userDataWriter, e.doc.key, e.doc, new ku(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query.converter);
                        let i = -1, r = -1;
                        return 0 /* Added */ !== e.type && (i = n.indexOf(e.doc.key), n = n.delete(e.doc.key)), 
                        1 /* Removed */ !== e.type && (n = n.add(e.doc), r = n.indexOf(e.doc.key)), {
                            type: Ou(e.type),
                            doc: s,
                            oldIndex: i,
                            newIndex: r
                        };
                    }));
                }
            }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
        }
    }

    function Ou(t) {
        switch (t) {
          case 0 /* Added */ :
            return "added";

          case 2 /* Modified */ :
          case 3 /* Metadata */ :
            return "modified";

          case 1 /* Removed */ :
            return "removed";

          default:
            return L$1();
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Lu(t) {
        if (pe(t) && 0 === t.explicitOrderBy.length) throw new j(K$1.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }

    /**
     * A `QueryConstraint` is used to narrow the set of documents returned by a
     * Firestore query. `QueryConstraint`s are created by invoking {@link where},
     * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
     * endBefore:1}, {@link (endAt:1)}, {@link limit} or {@link limitToLast} and
     * can then be passed to {@link query} to create a new query instance that
     * also contains this `QueryConstraint`.
     */ class Bu {}

    /**
     * Creates a new immutable instance of {@link Query} that is extended to also include
     * additional query constraints.
     *
     * @param query - The {@link Query} instance to use as a base for the new constraints.
     * @param queryConstraints - The list of {@link QueryConstraint}s to apply.
     * @throws if any of the provided query constraints cannot be combined with the
     * existing or new constraints.
     */ function Uu(t, ...e) {
        for (const n of e) t = n._apply(t);
        return t;
    }

    class qu extends Bu {
        constructor(t, e, n) {
            super(), this.Ga = t, this.za = e, this.Ha = n, this.type = "where";
        }
        _apply(t) {
            const e = hu(t.firestore), n = function(t, e, n, s, i, r, o) {
                let a;
                if (i.isKeyField()) {
                    if ("array-contains" /* ARRAY_CONTAINS */ === r || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === r) throw new j(K$1.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on FieldPath.documentId().`);
                    if ("in" /* IN */ === r || "not-in" /* NOT_IN */ === r) {
                        sh(o, r);
                        const e = [];
                        for (const n of o) e.push(nh(s, t, n));
                        a = {
                            arrayValue: {
                                values: e
                            }
                        };
                    } else a = nh(s, t, o);
                } else "in" /* IN */ !== r && "not-in" /* NOT_IN */ !== r && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== r || sh(o, r), 
                a = Tu(n, e, o, 
                /* allowArrays= */ "in" /* IN */ === r || "not-in" /* NOT_IN */ === r);
                const c = Zt.create(i, r, a);
                return function(t, e) {
                    if (e.V()) {
                        const n = Ee(t);
                        if (null !== n && !n.isEqual(e.field)) throw new j(K$1.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);
                        const s = Te(t);
                        null !== s && ih(t, e.field, s);
                    }
                    const n = function(t, e) {
                        for (const n of t.filters) if (e.indexOf(n.op) >= 0) return n.op;
                        return null;
                    }(t, 
                    /**
     * Given an operator, returns the set of operators that cannot be used with it.
     *
     * Operators in a query must adhere to the following set of rules:
     * 1. Only one array operator is allowed.
     * 2. Only one disjunctive operator is allowed.
     * 3. `NOT_EQUAL` cannot be used with another `NOT_EQUAL` operator.
     * 4. `NOT_IN` cannot be used with array, disjunctive, or `NOT_EQUAL` operators.
     *
     * Array operators: `ARRAY_CONTAINS`, `ARRAY_CONTAINS_ANY`
     * Disjunctive operators: `IN`, `ARRAY_CONTAINS_ANY`, `NOT_IN`
     */
                    function(t) {
                        switch (t) {
                          case "!=" /* NOT_EQUAL */ :
                            return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                          case "array-contains" /* ARRAY_CONTAINS */ :
                            return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                          case "in" /* IN */ :
                            return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                          case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                            return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                          case "not-in" /* NOT_IN */ :
                            return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                          default:
                            return [];
                        }
                    }(e.op));
                    if (null !== n) 
                    // Special case when it's a duplicate op to give a slightly clearer error message.
                    throw n === e.op ? new j(K$1.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new j(K$1.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
                }(t, c), c;
            }(t._query, "where", e, t.firestore._databaseId, this.Ga, this.za, this.Ha);
            return new bc$1(t.firestore, t.converter, function(t, e) {
                const n = t.filters.concat([ e ]);
                return new _e(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
            }(t._query, n));
        }
    }

    /**
     * Creates a {@link QueryConstraint} that enforces that documents must contain the
     * specified field and that the value should satisfy the relation constraint
     * provided.
     *
     * @param fieldPath - The path to compare
     * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
     *   "&lt;=", "!=").
     * @param value - The value for comparison
     * @returns The created {@link Query}.
     */ function Ku(t, e, n) {
        const s = e, i = Nu("where", t);
        return new qu(i, s, n);
    }

    function nh(t, e, n) {
        if ("string" == typeof (n = getModularInstance(n))) {
            if ("" === n) throw new j(K$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!Ie(e) && -1 !== n.indexOf("/")) throw new j(K$1.INVALID_ARGUMENT, `Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
            const s = e.path.child(dt.fromString(n));
            if (!St.isDocumentKey(s)) throw new j(K$1.INVALID_ARGUMENT, `Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
            return Ot(t, new St(s));
        }
        if (n instanceof Pc$1) return Ot(t, n._key);
        throw new j(K$1.INVALID_ARGUMENT, `Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${pc$1(n)}.`);
    }

    /**
     * Validates that the value passed into a disjunctive filter satisfies all
     * array requirements.
     */ function sh(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new j(K$1.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
        if (t.length > 10) throw new j(K$1.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
    }

    function ih(t, e, n) {
        if (!n.isEqual(e)) throw new j(K$1.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Converts Firestore's internal types to the JavaScript types that we expose
     * to the user.
     *
     * @internal
     */ class rh {
        convertValue(t, e = "none") {
            switch (Dt(t)) {
              case 0 /* NullValue */ :
                return null;

              case 1 /* BooleanValue */ :
                return t.booleanValue;

              case 2 /* NumberValue */ :
                return Et(t.integerValue || t.doubleValue);

              case 3 /* TimestampValue */ :
                return this.convertTimestamp(t.timestampValue);

              case 4 /* ServerTimestampValue */ :
                return this.convertServerTimestamp(t, e);

              case 5 /* StringValue */ :
                return t.stringValue;

              case 6 /* BlobValue */ :
                return this.convertBytes(It(t.bytesValue));

              case 7 /* RefValue */ :
                return this.convertReference(t.referenceValue);

              case 8 /* GeoPointValue */ :
                return this.convertGeoPoint(t.geoPointValue);

              case 9 /* ArrayValue */ :
                return this.convertArray(t.arrayValue, e);

              case 10 /* ObjectValue */ :
                return this.convertObject(t.mapValue, e);

              default:
                throw L$1();
            }
        }
        convertObject(t, e) {
            const n = {};
            return ht(t.fields, ((t, s) => {
                n[t] = this.convertValue(s, e);
            })), n;
        }
        convertGeoPoint(t) {
            return new su(Et(t.latitude), Et(t.longitude));
        }
        convertArray(t, e) {
            return (t.values || []).map((t => this.convertValue(t, e)));
        }
        convertServerTimestamp(t, e) {
            switch (e) {
              case "previous":
                const n = Rt(t);
                return null == n ? null : this.convertValue(n, e);

              case "estimate":
                return this.convertTimestamp(Pt(t));

              default:
                return null;
            }
        }
        convertTimestamp(t) {
            const e = Tt(t);
            return new at(e.seconds, e.nanos);
        }
        convertDocumentKey(t, e) {
            const n = dt.fromString(t);
            B$1(As(n));
            const s = new dc$1(n.get(1), n.get(3)), i = new St(n.popFirst(5));
            return s.isEqual(e) || 
            // TODO(b/64130202): Somehow support foreign references.
            F$1(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), 
            i;
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Converts custom model object of type T into `DocumentData` by applying the
     * converter if it exists.
     *
     * This function is used when converting user objects to `DocumentData`
     * because we want to provide the user with a more specific error message if
     * their `set()` or fails due to invalid data originating from a `toFirestore()`
     * call.
     */ function oh(t, e, n) {
        let s;
        // Cast to `any` in order to satisfy the union type constraint on
        // toFirestore().
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, 
        s;
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
    // legacy SDK.
    /**
     * A reference to a transaction.
     *
     * The `Transaction` object passed to a transaction's `updateFunction` provides
     * the methods to read and write data within the transaction context. See
     * {@link runTransaction}.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Reads the document referred to by this `DocumentReference`.
     *
     * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
     * for data from the server, but it may return cached data or fail if you are
     * offline and the server cannot be reached. To specify this behavior, invoke
     * {@link getDocFromCache} or {@link getDocFromServer}.
     *
     * @param reference - The reference of the document to fetch.
     * @returns A Promise resolved with a `DocumentSnapshot` containing the
     * current document contents.
     */
    function hh(t) {
        t = Tc$1(t, Pc$1);
        const e = Tc$1(t.firestore, Oc$1);
        return rc$1(Bc$1(e), t._key).then((n => Rh(e, t, n)));
    }

    class lh extends rh {
        constructor(t) {
            super(), this.firestore = t;
        }
        convertBytes(t) {
            return new eu(t);
        }
        convertReference(t) {
            const e = this.convertDocumentKey(t, this.firestore._databaseId);
            return new Pc$1(this.firestore, /* converter= */ null, e);
        }
    }

    /**
     * Executes the query and returns the results as a `QuerySnapshot`.
     *
     * Note: `getDocs()` attempts to provide up-to-date data when possible by
     * waiting for data from the server, but it may return cached data or fail if
     * you are offline and the server cannot be reached. To specify this behavior,
     * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
     *
     * @returns A `Promise` that will be resolved with the results of the query.
     */ function wh(t) {
        t = Tc$1(t, bc$1);
        const e = Tc$1(t.firestore, Oc$1), n = Bc$1(e), s = new lh(e);
        return Lu(t._query), ac$1(n, t._query).then((n => new Fu(e, s, t, n)));
    }

    function gh(t, e, n) {
        t = Tc$1(t, Pc$1);
        const s = Tc$1(t.firestore, Oc$1), i = oh(t.converter, e, n);
        return Ah(s, [ lu(hu(s), "setDoc", t._key, i, null !== t.converter, n).toMutation(t._key, Je.none()) ]);
    }

    function yh(t, e, n, ...s) {
        t = Tc$1(t, Pc$1);
        const i = Tc$1(t.firestore, Oc$1), r = hu(i);
        let o;
        o = "string" == typeof (
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
        e = getModularInstance(e)) || e instanceof Zc$1 ? pu(r, "updateDoc", t._key, e, n, s) : yu(r, "updateDoc", t._key, e);
        return Ah(i, [ o.toMutation(t._key, Je.exists(!0)) ]);
    }

    /**
     * Deletes the document referred to by the specified `DocumentReference`.
     *
     * @param reference - A reference to the document to delete.
     * @returns A Promise resolved once the document has been successfully
     * deleted from the backend (note that it won't resolve while you're offline).
     */ function ph(t) {
        return Ah(Tc$1(t.firestore, Oc$1), [ new hn(t._key, Je.none()) ]);
    }

    /**
     * Add a new document to specified `CollectionReference` with the given data,
     * assigning it a document ID automatically.
     *
     * @param reference - A reference to the collection to add this document to.
     * @param data - An Object containing the data for the new document.
     * @returns A `Promise` resolved with a `DocumentReference` pointing to the
     * newly created document after it has been written to the backend (Note that it
     * won't resolve while you're offline).
     */ function Th(t, e) {
        const n = Tc$1(t.firestore, Oc$1), s = Dc$1(t), i = oh(t.converter, e);
        return Ah(n, [ lu(hu(t.firestore), "addDoc", s._key, i, null !== t.converter, {}).toMutation(s._key, Je.exists(!1)) ]).then((() => s));
    }

    function Eh(t, ...e) {
        var n, s, i;
        t = getModularInstance(t);
        let r = {
            includeMetadataChanges: !1
        }, o = 0;
        "object" != typeof e[o] || xc$1(e[o]) || (r = e[o], o++);
        const a = {
            includeMetadataChanges: r.includeMetadataChanges
        };
        if (xc$1(e[o])) {
            const t = e[o];
            e[o] = null === (n = t.next) || void 0 === n ? void 0 : n.bind(t), e[o + 1] = null === (s = t.error) || void 0 === s ? void 0 : s.bind(t), 
            e[o + 2] = null === (i = t.complete) || void 0 === i ? void 0 : i.bind(t);
        }
        let c, u, h;
        if (t instanceof Pc$1) u = Tc$1(t.firestore, Oc$1), h = ge(t._key.path), c = {
            next: n => {
                e[o] && e[o](Rh(u, t, n));
            },
            error: e[o + 1],
            complete: e[o + 2]
        }; else {
            const n = Tc$1(t, bc$1);
            u = Tc$1(n.firestore, Oc$1), h = n._query;
            const s = new lh(u);
            c = {
                next: t => {
                    e[o] && e[o](new Fu(u, s, n, t));
                },
                error: e[o + 1],
                complete: e[o + 2]
            }, Lu(t._query);
        }
        return function(t, e, n, s) {
            const i = new qa$1(s), r = new zo(e, i, n);
            return t.asyncQueue.enqueueAndForget((async () => Ko(await ec$1(t), r))), () => {
                i.na(), t.asyncQueue.enqueueAndForget((async () => jo(await ec$1(t), r)));
            };
        }(Bc$1(u), h, a, c);
    }

    /**
     * Locally writes `mutations` on the async queue.
     * @internal
     */ function Ah(t, e) {
        return function(t, e) {
            const n = new Q$1;
            return t.asyncQueue.enqueueAndForget((async () => ca(await tc$1(t), e, n))), n.promise;
        }(Bc$1(t), e);
    }

    /**
     * Converts a {@link ViewSnapshot} that contains the single document specified by `ref`
     * to a {@link DocumentSnapshot}.
     */ function Rh(t, e, n) {
        const s = n.docs.get(e._key), i = new lh(t);
        return new xu(t, i, e._key, s, new ku(n.hasPendingWrites, n.fromCache), e.converter);
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
     * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
     */ function vh() {
        return new fu("deleteField");
    }

    /**
     * Cloud Firestore
     *
     * @packageDocumentation
     */ !function(t, e = !0) {
        !function(t) {
            C$1 = t;
        }(SDK_VERSION), _registerComponent(new Component("firestore", ((t, {options: n}) => {
            const s = t.getProvider("app").getImmediate(), i = new Oc$1(s, new H$1(t.getProvider("auth-internal")), new Z$1(t.getProvider("app-check-internal")));
            return n = Object.assign({
                useFetchStreams: e
            }, n), i._setSettings(n), i;
        }), "PUBLIC")), registerVersion(S$1, "3.4.1", t), 
        // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
        registerVersion(S$1, "3.4.1", "esm2017");
    }();

    /**
     * Real-time updating mode.
     * @type Mode
     */
    (function (Mode) {
        Mode["Auto"] = "auto";
        Mode["On"] = "on";
        Mode["Off"] = "off";
    })(exports.Mode || (exports.Mode = {}));

    var isEqual = require('lodash.isequal');
    /**
     * Helper function which merges data into the source
     * and returns the new object.
     *
     * @param {Object} data - JSON data
     * @param {Object} fields - JSON data that supports field-paths
     * @return {Object} Result
     */
    function mergeUpdateData(data, fields, _hasContext) {
        var res = __assign({}, data);
        var canonicalDelete = vh();
        for (var key in fields) {
            if (fields.hasOwnProperty(key)) {
                var val = fields[key];
                var isDelete = canonicalDelete.isEqual
                    ? canonicalDelete.isEqual(val)
                    : isEqual(canonicalDelete, val);
                var paths = key.split('.');
                var dataVal = res;
                for (var i = 0; i < paths.length - 1; i++) {
                    if (dataVal[paths[i]] === undefined) {
                        if (isDelete) {
                            dataVal = undefined;
                            break;
                        }
                        dataVal[paths[i]] = {};
                    }
                    else {
                        dataVal[paths[i]] = __assign({}, dataVal[paths[i]]);
                    }
                    dataVal = dataVal[paths[i]];
                }
                if (isDelete) {
                    if (dataVal) {
                        delete dataVal[paths[paths.length - 1]];
                    }
                }
                else {
                    dataVal[paths[paths.length - 1]] = val;
                }
            }
        }
        return res;
    }
    function verifyMode(mode) {
        switch (mode) {
            case 'auto':
            case 'off':
            case 'on':
                return mode;
            default:
                throw new Error('Invalid mode mode: ' + mode);
        }
    }
    /**
     * Checks whether the provided value is a valid Firestore Timestamp or Date.
     *
     * Use this function in combination with schemas, in order to validate
     * that the field in the document is indeed a timestamp.
     *
     * @param {Object} val - Value to check
     * @return {Boolean}
     *
     * @example
     * import { isTimestamp } from 'firestorter';
     *
     * const TaskSchema = struct({
     *  name: 'string',
     *  startDate: isTimestamp,
     *  duration: 'number'
     * });
     *
     * const doc = new Document('tasks/mytask', {
     *   schema: TaskSchema
     * });
     * await doc.fetch();
     * console.log('startDate: ', doc.data.startDate.toDate());
     */
    function isTimestamp(val) {
        if (val instanceof Date) {
            return true;
        }
        return (typeof val === 'object' &&
            typeof val.seconds === 'number' &&
            typeof val.nanoseconds === 'number');
    }

    /**
     * @ignore
     * Creates an observable which calls addObserverRef &
     * releaseObserverRef methods on the passed-in delegate class.
     * Effectively, this allows Firestorter to track whether
     * a Collection/Document is observed and real-time updating
     * needs to be enabled on it.
     */
    function enhancedObservable(data, delegate) {
        var o = Array.isArray(data) ? mobx.observable.array(data) : mobx.observable.box(data);
        var isObserved = false;
        mobx.onBecomeUnobserved(o, undefined, function () {
            if (isObserved) {
                isObserved = false;
                delegate.releaseObserverRef();
            }
        });
        mobx.onBecomeObserved(o, undefined, function () {
            if (!isObserved) {
                isObserved = true;
                delegate.addObserverRef();
            }
        });
        return o;
    }

    var name$p = "firebase";
    var version$2 = "9.6.1";

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    registerVersion(name$p, version$2, 'app');

    var ModuleName = 'firestorter';
    var globalContext;
    /**
     * Initializes `firestorter` with the firebase-app.
     *
     * @param {Object} config - Configuration options
     * @param {Firebase} config.firebase - Firebase reference
     * @param {String|FirebaseApp} [config.app] - FirebaseApp to use (when omitted the default app is used)
     *
     * @example
     * import {initializeApp} from 'firebase/app';
     * import {initFirestorter, Collection, Document} from 'firestorter';
     *
     * // Initialize firebase app
     * const firebaseApp = initializeApp({...});
     *
     * // Initialize `firestorter`
     * initFirestorter({app: firebaseApp});
     *
     * // Create collection or document
     * const albums = new Collection('artists/Metallica/albums');
     * ...
     * const album = new Document('artists/Metallica/albums/BlackAlbum');
     * ...
     */
    function initFirestorter(config) {
        if (globalContext) {
            throw new Error('Firestorter already initialized, did you accidentally call `initFirestorter()` again?');
        }
        globalContext = makeFirestorterContext(config);
    }
    /**
     * If you need to use different firestore instances for different
     * collections, or otherwise want to avoid global state, you can
     * instead provide a "context" option when creating Document and
     * Collection instances.
     *
     * This function takes the same arguments as `initFirestorter` and returns
     * a context suitable for Document and Collection creation.
     *
     * @example
     * import * as firebase from 'firebase/app';
     * import 'firebase/firestore'
     * import * as firetest from '@firebase/testing'
     * import { makeFirestorterContext, Collection, Document } from "firestorter"
     *
     * function makeTestContext(fbtestArgs) {
     * 	 const app = firetest.initializeTestApp(fbtestArgs)
     *   return makeFirestorterContext({
     *     firestore,
     *     app,
     *   })
     * }
     *
     * // create collection or document without global state
     * test('collection and document using different apps', () => {
     *   const context1 = makeTestContext({ projectId: 'foo' })
     *   const context2 = makeTestContext({ projectId: 'bar' })
     *
     *   // Create collection or document
     *   const albums = new Collection('artists/Metallica/albums', {context: context1});
     *   ...
     *   const album = new Document('artists/Metallica/albums/BlackAlbum', {context: context2});
     *   ...
     * })
     */
    function makeFirestorterContext(config) {
        // Get app instance
        var firebaseApp = (config === null || config === void 0 ? void 0 : config.app)
            ? typeof config.app === 'string'
                ? getApp(config.app)
                : config.app
            : getApp();
        // Get firestore instance
        var firestore = (config === null || config === void 0 ? void 0 : config.firestore) || Lc$1(firebaseApp);
        if (!firestore) {
            throw new Error("getFirestore() returned `undefined`, did you forget `import 'firebase/firestore';` ?");
        }
        // Verify existence of firestore & fieldvalue
        try {
            vh();
        }
        catch (err) {
            throw new Error('Invalid `firebase` argument specified: `FieldValue.delete` does not exist');
        }
        return {
            app: firebaseApp,
            firestore: firestore,
        };
    }
    function getContext(obj) {
        if (obj === null || obj === void 0 ? void 0 : obj.context) {
            return obj.context;
        }
        if (globalContext) {
            return globalContext;
        }
        if (obj) {
            throw new Error("No context for " + obj + " or globally. Did you forget to call `initFirestorter` or pass {context: ...} option?");
        }
        throw new Error("No global Firestore context. Did you forget to call `initFirestorter` ?");
    }
    function contextWithProperty(key, obj) {
        try {
            var context = getContext(obj);
            if (context[key]) {
                return context;
            }
            throw new Error("Context does not contain " + key);
        }
        catch (err) {
            throw new Error(ModuleName + ": cannot get " + key + ": " + err);
        }
    }
    function getFirebaseApp(obj) {
        return contextWithProperty('app', obj).app;
    }
    function getFirestore(obj) {
        return contextWithProperty('firestore', obj).firestore;
    }

    var isEqual$1 = require('lodash.isequal');
    /**
     * @private
     */
    function resolveRef(value, hasContext) {
        if (typeof value === 'string') {
            return Dc$1(getFirestore(hasContext), value);
        }
        else if (typeof value === 'function') {
            return resolveRef(value(), hasContext);
        }
        else {
            return value;
        }
    }
    var EMPTY_OPTIONS = {};
    /**
     * Document represents a document stored in the firestore database.
     * Document is observable so that it can be efficiently linked to for instance
     * a React Component using `mobx-react`'s `observer` pattern. This ensures that
     * a component is only re-rendered when data that is accessed in the `render`
     * function has changed.
     *
     * @param {DocumentSource} [source] String-path, ref or function that returns a path or ref
     * @param {Object} [options] Configuration options
     * @param {String} [options.mode] See `Document.mode` (default: auto)
     * @param {Function} [options.schema] Superstruct schema for data validation
     * @param {firestore.DocumentSnapshot} [options.snapshot] Initial document snapshot
     * @param {firestore.SnapshotOptions} [options.snapshotOptions] Options that configure how data is retrieved from a snapshot
     * @param {boolean} [options.debug] Enables debug logging
     * @param {String} [options.debugName] Name to use when debug logging is enabled
     */
    var Document = /** @class */ (function () {
        function Document(source, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var schema = options.schema, snapshot = options.snapshot, snapshotOptions = options.snapshotOptions, mode = options.mode, debug = options.debug, debugName = options.debugName, context = options.context;
            this.debugInstanceName = debugName;
            this.sourceInput = source;
            this.ctx = context;
            this.refObservable = mobx.observable.box(resolveRef(source, this));
            this.docSchema = schema;
            this.isVerbose = debug || false;
            this.snapshotObservable = enhancedObservable(snapshot, this);
            this.snapshotOptions = snapshotOptions;
            this.collectionRefCount = 0;
            this.observedRefCount = 0;
            var data = snapshot ? snapshot.data(this.snapshotOptions) : undefined;
            if (data) {
                data = this._validateSchema(data);
            }
            this.dataObservable = enhancedObservable(data || EMPTY_OPTIONS, this);
            this.modeObservable = mobx.observable.box(verifyMode(mode || exports.Mode.Auto));
            this.isLoadingObservable = mobx.observable.box(false);
            this._updateSourceObserver();
            if (mode === exports.Mode.On) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
        }
        Object.defineProperty(Document.prototype, "schema", {
            /**
             * Returns the superstruct schema used to validate the
             * document, or undefined.
             *
             * @type {Function}
             */
            get: function () {
                return this.docSchema;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "data", {
            /**
             * Returns the data inside the firestore document.
             *
             * @type {Object}
             *
             * @example
             * todos.docs.map((doc) => {
             *   console.log(doc.data);
             *   // {
             *   //   finished: false
             *   //   text: 'Must do this'
             *   // }
             * });
             */
            get: function () {
                return this.dataObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "hasData", {
            /**
             * True whenever the document has fetched any data.
             *
             * @type {boolean}
             */
            get: function () {
                var snapshot = this.snapshot;
                return !!snapshot && snapshot.exists();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "ref", {
            /**
             * Firestore document reference.
             *
             * Use this property to get or set the
             * underlying document reference.
             *
             * Alternatively, you can also use `path` to change the
             * reference in more a readable way.
             *
             * @type {firestore.DocumentReference | Function}
             *
             * @example
             * const doc = new Document('albums/splinter');
             *
             * // Get the DocumentReference for `albums/splinter`
             * const ref = doc.ref;
             *
             * // Switch to another document
             * doc.ref = doc(getFirestore(), 'albums/americana');
             */
            get: function () {
                return this.refObservable.get();
            },
            set: function (ref) {
                this.source = ref;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "id", {
            /**
             * Id of the firestore document.
             *
             * To get the full-path of the document, use `path`.
             *
             * @type {string}
             */
            get: function () {
                var ref = this.refObservable.get();
                return ref ? ref.id : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "path", {
            /**
             * Path of the document (e.g. 'albums/blackAlbum').
             *
             * Use this property to switch to another document in
             * the back-end. Effectively, it is a more compact
             * and readable way of setting a new ref.
             *
             * @type {string | Function}
             *
             * @example
             * const doc = new Document('artists/Metallica');
             * ...
             * // Switch to another document in the back-end
             * doc.path = 'artists/EaglesOfDeathMetal';
             *
             * // Or, you can use a reactive function to link
             * // to the contents of another document.
             * const doc2 = new Document('settings/activeArtist');
             * doc.path = () => 'artists/' + doc2.data.artistId;
             */
            get: function () {
                var _a;
                // if we call toString() during initialization, eg to throw an error referring to this
                // document, this would throw an undefined error without the guard.
                var ref = (_a = this.refObservable) === null || _a === void 0 ? void 0 : _a.get();
                if (!ref) {
                    return undefined;
                }
                var path = ref.id;
                while (ref.parent) {
                    path = ref.parent.id + '/' + path;
                    ref = ref.parent;
                }
                return path;
            },
            set: function (documentPath) {
                this.source = documentPath;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "source", {
            /**
             * @private
             */
            get: function () {
                return this.sourceInput;
            },
            set: function (source) {
                var _this = this;
                if (this.collectionRefCount) {
                    throw new Error('Cannot change source on Document that is controlled by a Collection');
                }
                if (this.sourceInput === source) {
                    return;
                }
                this.sourceInput = source;
                this._updateSourceObserver();
                mobx.runInAction(function () {
                    _this.refObservable.set(resolveRef(source, _this));
                    _this._updateRealtimeUpdates(true);
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "mode", {
            /**
             * Real-time updating mode.
             *
             * Can be set to any of the following values:
             * - "auto" (enables real-time updating when the document becomes observed)
             * - "off" (no real-time updating, you need to call fetch explicitly)
             * - "on" (real-time updating is permanently enabled)
             *
             * @type {string}
             */
            get: function () {
                return this.modeObservable.get();
            },
            set: function (mode) {
                var _this = this;
                if (this.modeObservable.get() === mode) {
                    return;
                }
                verifyMode(mode);
                mobx.runInAction(function () {
                    _this.modeObservable.set(mode);
                    _this._updateRealtimeUpdates();
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "isActive", {
            /**
             * Returns true when the Document is actively listening
             * for changes in the firestore back-end.
             *
             * @type {boolean}
             */
            get: function () {
                return !!this.onSnapshotUnsubscribeFn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "snapshot", {
            /**
             * Underlying firestore snapshot.
             *
             * @type {firestore.DocumentSnapshot}
             */
            get: function () {
                return this.snapshotObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Updates one or more fields in the document.
         *
         * The update will fail if applied to a document that does
         * not exist.
         *
         * @param {Object} fields - Fields to update
         * @return {Promise}
         *
         * @example
         * await todoDoc.update({
         *   finished: true,
         *   text: 'O yeah, checked this one off',
         *   foo: {
         *     bar: 10
         *   }
         * });
         */
        Document.prototype.update = function (fields) {
            var ref = this.refObservable.get();
            if (this.docSchema) {
                if (!this.snapshot) {
                    console.warn(this.debugName + " - Unable to verify schema in .update() because the document has not been fetched yet");
                }
                else {
                    try {
                        this._validateSchema(mergeUpdateData(mobx.toJS(this.data), fields));
                    }
                    catch (err) {
                        return Promise.reject(err);
                    }
                }
            }
            return yh(ref, fields);
        };
        /**
         * Writes to the document.
         *
         * If the document does not exist yet, it will be created.
         * If you pass options, the provided data can be merged into
         * the existing document.
         *
         * @param {Object} data - An object of the fields and values for the document
         * @param {Object} [options] - Set behaviour options
         * @param {Boolean} [options.merge] - Set to `true` to only replace the values specified in the data argument. Fields omitted will remain untouched.
         * @return {Promise}
         *
         * @example
         * const todo = new Document('todos/mynewtodo');
         * await todo.set({
         *   finished: false,
         *   text: 'this is awesome'
         * });
         */
        Document.prototype.set = function (data, options) {
            if (this.docSchema) {
                try {
                    if (options === null || options === void 0 ? void 0 : options.merge) {
                        this._validateSchema(mergeUpdateData(mobx.toJS(this.data), data));
                    }
                    else {
                        this._validateSchema(data);
                    }
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
            return gh(this.refObservable.get(), data, options);
        };
        /**
         * Deletes the document in Firestore.
         *
         * Returns a promise that resolves once the document has been
         * successfully deleted from the backend (Note that it won't
         * resolve while you're offline).
         *
         * @return {Promise}
         */
        Document.prototype.delete = function () {
            return ph(this.refObservable.get());
        };
        /**
         * Fetches new data from firestore. Use this to manually fetch
         * new data when `mode` is set to 'off'.
         *
         * @return {Promise}
         * @fullfil {Document<T>} This document
         *
         * @example
         * const doc = new Document('albums/splinter');
         * await doc.fetch();
         * console.log('data: ', doc.data);
         */
        Document.prototype.fetch = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ref, snapshot_1, err_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.isVerbose) {
                                console.debug(this.debugName + " - fetching...");
                            }
                            if (this.collectionRefCount) {
                                throw new Error('Should not call fetch on Document that is controlled by a Collection');
                            }
                            if (this.isActive) {
                                throw new Error('Should not call fetch when real-time updating is active');
                            }
                            if (this.isLoadingObservable.get()) {
                                throw new Error('Fetch already in progress');
                            }
                            ref = this.refObservable.get();
                            if (!ref) {
                                throw new Error('No ref or path set on Document');
                            }
                            mobx.runInAction(function () {
                                _this._ready(false);
                                _this.isLoadingObservable.set(true);
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, hh(ref)];
                        case 2:
                            snapshot_1 = _a.sent();
                            mobx.runInAction(function () {
                                _this.isLoadingObservable.set(false);
                                _this._updateFromSnapshot(snapshot_1);
                                if (_this.isVerbose) {
                                    console.debug(_this.debugName + " - fetched: " + JSON.stringify(mobx.toJS(_this.data)));
                                }
                            });
                            this._ready(true);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            console.log(this.debugName + " - fetch failed: " + err_1.message);
                            mobx.runInAction(function () {
                                _this.isLoadingObservable.set(false);
                                _this._updateFromSnapshot(undefined);
                                _this._ready(true);
                            });
                            throw err_1;
                        case 4: return [2 /*return*/, this];
                    }
                });
            });
        };
        Object.defineProperty(Document.prototype, "isLoading", {
            /**
             * True when new data is being loaded.
             *
             * Loads are performed in these cases:
             *
             * - When real-time updating is started
             * - When a different `ref` or `path` is set
             * - When a `query` is set or cleared
             * - When `fetch` is explicitly called
             *
             * @type {boolean}
             *
             * @example
             * const doc = new Document('albums/splinter', {mode: 'off'});
             * console.log(doc.isLoading); 	// false
             * doc.fetch(); 								// start fetch
             * console.log(doc.isLoading); 	// true
             * await doc.ready(); 					// wait for fetch to complete
             * console.log(doc.isLoading); 	// false
             *
             * @example
             * const doc = new Document('albums/splinter');
             * console.log(doc.isLoading); 	// false
             * const dispose = autorun(() => {
             *   console.log(doc.data);			// start observing document data
             * });
             * console.log(doc.isLoading); 	// true
             * ...
             * dispose();										// stop observing document data
             * console.log(doc.isLoading); 	// false
             */
            get: function () {
                this.dataObservable.get(); // access data
                return this.isLoadingObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "isLoaded", {
            /**
             * True when a snapshot has been obtained from the Firestore
             * back-end. This property indicates whether an initial fetch/get call
             * to Firestore has completed processing. This doesn't however mean that data
             * is available, as the returned snapshot may contain a value indicating
             * that the document doesn't exist. Use `hasData` to check whether any
             * data was succesfully retrieved.
             *
             * @type {boolean}
             */
            get: function () {
                var snapshot = this.snapshot;
                return !!snapshot;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Promise that is resolved when the Document has
         * data ready to be consumed.
         *
         * Use this function to for instance wait for
         * the initial snapshot update to complete, or to wait
         * for fresh data after changing the path/ref.
         *
         * @return {Promise}
         *
         * @example
         * const doc = new Document('albums/splinter', {mode: 'on'});
         * await doc.ready();
         * console.log('data: ', doc.data);
         *
         * @example
         * const doc = new Document('albums/splinter', {mode: 'on'});
         * await doc.ready();
         * ...
         * // Changing the path causes a new snapshot update
         * doc.path = 'albums/americana';
         * await doc.ready();
         * console.log('data: ', doc.data);
         */
        Document.prototype.ready = function () {
            this.readyPromise = this.readyPromise || Promise.resolve();
            return this.readyPromise;
        };
        Document.prototype.toString = function () {
            return this.debugName;
        };
        Object.defineProperty(Document.prototype, "debugName", {
            /**
             * @private
             */
            get: function () {
                return (this.debugInstanceName || this.constructor.name) + " (" + this.path + ")";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "context", {
            /**
             * @private
             */
            get: function () {
                return this.ctx;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Called whenever a property of this class becomes observed.
         * @private
         */
        Document.prototype.addObserverRef = function () {
            var _this = this;
            if (this.isVerbose) {
                console.debug(this.debugName + " - addRef (" + (this.observedRefCount + 1) + ")");
            }
            var res = ++this.observedRefCount;
            if (res === 1) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
            return res;
        };
        /**
         * Called whenever a property of this class becomes un-observed.
         * @private
         */
        Document.prototype.releaseObserverRef = function () {
            var _this = this;
            if (this.isVerbose) {
                console.debug(this.debugName + " - releaseRef (" + (this.observedRefCount - 1) + ")");
            }
            var res = --this.observedRefCount;
            if (!res) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
            return res;
        };
        /**
         * ICollectionDocument
         * @private
         */
        Document.prototype.addCollectionRef = function () {
            return ++this.collectionRefCount;
        };
        Document.prototype.releaseCollectionRef = function () {
            return --this.collectionRefCount;
        };
        Document.prototype.updateFromCollectionSnapshot = function (snapshot) {
            return this._updateFromSnapshot(snapshot);
        };
        /**
         * @private
         */
        Document.prototype._updateFromSnapshot = function (snapshot) {
            var data = snapshot ? snapshot.data(this.snapshotOptions) : undefined;
            if (data) {
                data = this._validateSchema(data);
            }
            else {
                data = {};
            }
            this.snapshotObservable.set(snapshot);
            if (!isEqual$1(data, this.dataObservable.get())) {
                this.dataObservable.set(data);
            }
        };
        /**
         * @private
         */
        Document.prototype._ready = function (complete) {
            var _this = this;
            if (complete) {
                var readyResolve = this.readyResolveFn;
                if (readyResolve) {
                    this.readyResolveFn = undefined;
                    readyResolve();
                }
            }
            else if (!this.readyResolveFn) {
                this.readyPromise = new Promise(function (resolve) {
                    _this.readyResolveFn = resolve;
                });
            }
        };
        /**
         * @private
         */
        Document.prototype._onSnapshot = function (snapshot) {
            var _this = this;
            mobx.runInAction(function () {
                if (_this.isVerbose) {
                    console.debug(_this.debugName + " - onSnapshot");
                }
                _this.isLoadingObservable.set(false);
                try {
                    _this._updateFromSnapshot(snapshot);
                }
                catch (err) {
                    console.error(err.message);
                }
                _this._ready(true);
            });
        };
        /**
         * @private
         */
        Document.prototype._onSnapshotError = function (error) {
            console.warn(this.debugName + " - onSnapshotError: " + error.message);
        };
        /**
         * @private
         */
        Document.prototype._updateRealtimeUpdates = function (force) {
            var _this = this;
            var newActive = false;
            switch (this.modeObservable.get()) {
                case exports.Mode.Auto:
                    newActive = !!this.observedRefCount;
                    break;
                case exports.Mode.Off:
                    newActive = false;
                    break;
                case exports.Mode.On:
                    newActive = true;
                    break;
            }
            // Start/stop listening for snapshot updates
            if (this.collectionRefCount || !this.refObservable.get()) {
                newActive = false;
            }
            var active = !!this.onSnapshotUnsubscribeFn;
            if (newActive && (!active || force)) {
                if (this.isVerbose) {
                    console.debug(this.debugName + " - " + (active ? 're-' : '') + "start (" + this.modeObservable.get() + ":" + this.observedRefCount + ")");
                }
                this._ready(false);
                this.isLoadingObservable.set(true);
                if (this.onSnapshotUnsubscribeFn) {
                    this.onSnapshotUnsubscribeFn();
                }
                this.onSnapshotUnsubscribeFn = Eh(this.refObservable.get(), {
                    next: function (snapshot) { return _this._onSnapshot(snapshot); },
                    error: function (err) { return _this._onSnapshotError(err); },
                });
            }
            else if (!newActive && active) {
                if (this.isVerbose) {
                    console.debug(this.debugName + " - stop (" + this.modeObservable.get() + ":" + this.observedRefCount + ")");
                }
                this.onSnapshotUnsubscribeFn();
                this.onSnapshotUnsubscribeFn = undefined;
                if (this.isLoadingObservable.get()) {
                    this.isLoadingObservable.set(false);
                }
                this._ready(true);
            }
        };
        /**
         * @private
         */
        Document.prototype._updateSourceObserver = function () {
            var _this = this;
            if (this.sourceDisposerFn) {
                this.sourceDisposerFn();
                this.sourceDisposerFn = undefined;
            }
            if (typeof this.sourceInput === 'function') {
                this.sourceDisposerFn = mobx.reaction(function () { return _this.sourceInput(); }, function (value) {
                    mobx.runInAction(function () {
                        // TODO, check whether path has changed
                        _this.refObservable.set(resolveRef(value, _this));
                        _this._updateRealtimeUpdates(true);
                    });
                });
            }
        };
        /**
         * @private
         */
        Document.prototype._validateSchema = function (data) {
            if (!this.docSchema) {
                return data;
            }
            try {
                data = this.docSchema(data);
            }
            catch (err) {
                // console.log(JSON.stringify(err));
                throw new Error('Invalid value at "' +
                    err.path +
                    '" for ' +
                    (this.debugInstanceName || this.constructor.name) +
                    ' with id "' +
                    this.id +
                    '": ' +
                    err.message);
            }
            return data;
        };
        return Document;
    }());

    // * @param {Number} [options.limit] Maximum number of documents to fetch (see `Collection.limit`)
    /**
     * The Collection class lays at the heart of `firestorter`.
     * It represents a collection in Firestore and its queried data. It is
     * observable so that it can be efficiently linked to a React Component
     * using `mobx-react`'s `observer` pattern.
     *
     * Collection supports three modes of real-time updating:
     * - "auto" (real-time updating is enabled on demand) (default)
     * - "on" (real-time updating is permanently turned on)
     * - "off" (real-time updating is turned off, use `.fetch` explicitly)
     *
     * The "auto" mode ensures that Collection only communicates with
     * the firestore back-end whever the Collection is actually
     * rendered by a Component. This prevents unneccesary background
     * updates and leads to the best possible performance.
     *
     * When real-time updates are enabled, data is automatically fetched
     * from Firestore whenever it changes in the back-end (using `onSnapshot`).
     * This enables almost magical instant updates. When data is changed,
     * only those documents are updated that have actually changed. Document
     * objects are re-used where possible, and just their data is updated.
     * The same is true for the `docs` property. If no documents where
     * added, removed, re-ordered, then the `docs` property itself will not
     * change.
     *
     * Alternatively, you can keep real-time updates turned off and fetch
     * manually. This will update the Collection as efficiently as possible.
     * If nothing has changed on the back-end, no new Documents would be
     * created or modified.
     *
     * @param {CollectionSource} [source] String-path, ref or function that returns a path or ref
     * @param {Object} [options] Configuration options
     * @param {Function|Query} [options.query] See `Collection.query`
     * @param {String} [options.mode] See `Collection.mode`
     * @param {Function} [options.createDocument] Factory function for creating documents `(source, options) => new Document(source, options)`
     * @param {boolean} [options.minimizeUpdates] Enables additional algorithms to reduces updates to your app (e.g. when snapshots are received in rapid succession)
     * @param {boolean} [options.debug] Enables debug logging
     * @param {String} [options.debugName] Name to use when debug logging is enabled
     *
     * @example
     * import {Collection} from 'firestorter';
     *
     * // Create a collection using path (preferred)
     * const col = new Collection('artists/Metallica/albums');
     *
     * // Create a collection using a reference
     * const col2 = new Collection(collection(getFirestore(), 'todos'));
     *
     * // Create a collection and permanently start real-time updating
     * const col2 = new Collection('artists', {
     *   mode: 'on'
     * });
     *
     * // Create a collection with a query on it
     * const col3 = new Collection('artists', {
     *   query: (ref) => query(ref, orderBy('name', 'asc'))
     * });
     *
     * @example
     * // In manual mode, just call `fetch` explicitly
     * const col = new Collection('albums', {mode: 'off'});
     * col.fetch().then((collection) => {
     *   collection.docs.forEach((doc) => console.log(doc));
     * });
     *
     * // Yo can use the `isLoading` property to see whether a fetch
     * // is in progress
     * console.log(col.isLoading);
     */
    var Collection = /** @class */ (function () {
        // private _limit: any;
        // private _cursor: any;
        function Collection(source, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var query = options.query, createDocument = options.createDocument, mode = options.mode, 
            // limit,
            debug = options.debug, debugName = options.debugName, _a = options.minimizeUpdates, minimizeUpdates = _a === void 0 ? false : _a, _b = options.initialLocalSnapshotDetectTime, initialLocalSnapshotDetectTime = _b === void 0 ? 50 : _b, _c = options.initialLocalSnapshotDebounceTime, initialLocalSnapshotDebounceTime = _c === void 0 ? 1000 : _c, context = options.context;
            this.isVerbose = debug || false;
            this.debugInstanceName = debugName;
            this.isMinimizingUpdates = minimizeUpdates;
            this.initialLocalSnapshotDetectTime = initialLocalSnapshotDetectTime;
            this.initialLocalSnapshotDebounceTime = initialLocalSnapshotDebounceTime;
            this.docLookup = {};
            this.observedRefCount = 0;
            this.sourceInput = source;
            this.refObservable = mobx.observable.box(undefined);
            this.queryInput = query;
            this.queryRefObservable = mobx.observable.box(undefined);
            // this._limit = observable.box(limit || undefined);
            // this._cursor = observable.box(undefined);
            this.modeObservable = mobx.observable.box(verifyMode(mode || exports.Mode.Auto));
            this.isLoadingObservable = mobx.observable.box(false);
            this.isLoadedObservable = mobx.observable.box(false);
            this.hasDocsObservable = enhancedObservable(false, this);
            this.docsObservable = enhancedObservable([], this);
            this.ctx = context;
            if (createDocument) {
                this.createDocument = createDocument;
            }
            else {
                this.createDocument = function (docSource, docOptions) {
                    return new Document(docSource, docOptions);
                };
            }
            mobx.runInAction(function () { return _this._updateRealtimeUpdates(true, true); });
        }
        Object.defineProperty(Collection.prototype, "docs", {
            /**
             * Array of all the documents that have been fetched
             * from firestore.
             *
             * @type {Array}
             *
             * @example
             * collection.docs.forEach((doc) => {
             *   console.log(doc.data);
             * });
             */
            get: function () {
                return this.docsObservable;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "hasDocs", {
            /**
             * True whenever the docs array is not empty.
             *
             * @type {boolean}
             */
            get: function () {
                return this.hasDocsObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "ref", {
            /**
             * Firestore collection reference.
             *
             * Use this property to get or set the collection
             * reference. When set, a fetch to the new collection
             * is performed.
             *
             * Alternatively, you can also use `path` to change the
             * reference in more a readable way.
             *
             * @type {firestore.CollectionReference | Function}
             *
             * @example
             * const col = new Collection(collection(getFirestore(), 'albums/splinter/tracks'));
             * ...
             * // Switch to another collection
             * col.ref = collection(getFirestore(), 'albums/americana/tracks');
             */
            get: function () {
                var ref = this.refObservable.get();
                if (!this.refDisposerFn) {
                    ref = this._resolveRef(this.sourceInput);
                }
                return ref;
            },
            set: function (ref) {
                this.source = ref;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "id", {
            /**
             * Id of the Firestore collection (e.g. 'tracks').
             *
             * To get the full-path of the collection, use `path`.
             *
             * @type {string}
             */
            get: function () {
                var ref = this.ref;
                return ref ? ref.id : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "path", {
            /**
             * Path of the collection (e.g. 'albums/blackAlbum/tracks').
             *
             * Use this property to switch to another collection in
             * the back-end. Effectively, it is a more compact
             * and readable way of setting a new ref.
             *
             * @type {string | Function}
             *
             * @example
             * const col = new Collection('artists/Metallica/albums');
             * ...
             * // Switch to another collection in the back-end
             * col.path = 'artists/EaglesOfDeathMetal/albums';
             */
            get: function () {
                var ref = this.ref;
                if (!ref) {
                    return undefined;
                }
                var path = ref.id;
                while (ref.parent) {
                    path = ref.parent.id + '/' + path;
                    ref = ref.parent;
                }
                return path;
            },
            set: function (collectionPath) {
                this.source = collectionPath;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "source", {
            /**
             * @private
             */
            get: function () {
                return this.sourceInput;
            },
            set: function (source) {
                var _this = this;
                if (this.sourceInput === source) {
                    return;
                }
                mobx.runInAction(function () {
                    _this.sourceInput = source;
                    // Stop any reactions
                    if (_this.refDisposerFn) {
                        _this.refDisposerFn();
                        _this.refDisposerFn = undefined;
                    }
                    // Update real-time updating
                    _this._updateRealtimeUpdates(true);
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "query", {
            /**
             * Use this property to set any order-by, where,
             * limit or start/end criteria. When set, that query
             * is used to retrieve any data. When cleared (`undefined`),
             * the collection reference is used.
             *
             * The query can be a Function of the form
             * `(firestore.CollectionReference) => firestore.Query | null | undefined`.
             * Where returning `null` will result in an empty collection,
             * and returning `undefined` will revert to using the collection
             * reference (the entire collection).
             *
             * If the query function makes use of any observable values then
             * it will be re-run when those values change.
             *
             * query can be set to a direct Firestore `Query` object but this
             * is an uncommon usage.
             *
             * @type {firestore.Query | Function}
             *
             * @example
             * const todos = new Collection('todos');
             *
             * // Sort the collection
             * todos.query = (ref) => query(ref, orderBy('text', 'asc'));
             *
             * // Order, filter & limit
             * todos.query = (ref) => query(ref, where('finished', '==', false), orderBy('finished', 'asc').limit(20));
             *
             * // React to changes in observable and force empty collection when required
             * todos.query = (ref) => authStore.uid ? query(ref, where('owner', '==', authStore.uid)) : null;
             *
             * // Clear the query, will cause whole collection to be fetched
             * todos.query = undefined;
             */
            get: function () {
                return this.queryInput;
            },
            set: function (query) {
                var _this = this;
                if (this.queryInput === query) {
                    return;
                }
                mobx.runInAction(function () {
                    _this.queryInput = query;
                    // Stop any reactions
                    if (_this.refDisposerFn) {
                        _this.refDisposerFn();
                        _this.refDisposerFn = undefined;
                    }
                    // Update real-time updating
                    _this._updateRealtimeUpdates(undefined, true);
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "queryRef", {
            /**
             * @private
             * firestore.Query -> a valid query exists, use that
             * null -> the query function returned `null` to disable the collection
             * undefined -> no query defined, use collection ref instead
             */
            get: function () {
                return this.queryRefObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "mode", {
            /**
             * Real-time updating mode.
             *
             * Can be set to any of the following values:
             * - "auto" (enables real-time updating when the collection is observed)
             * - "off" (no real-time updating, you need to call fetch explicitly)
             * - "on" (real-time updating is permanently enabled)
             *
             * @type {string}
             */
            get: function () {
                return this.modeObservable.get();
            },
            set: function (mode) {
                var _this = this;
                if (this.modeObservable.get() === mode) {
                    return;
                }
                verifyMode(mode);
                mobx.runInAction(function () {
                    _this.modeObservable.set(mode);
                    _this._updateRealtimeUpdates();
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "isActive", {
            /**
             * Returns true when the Collection is actively listening
             * for changes in the firestore back-end.
             *
             * @type {boolean}
             */
            get: function () {
                return !!this.onSnapshotUnsubscribe;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Fetches new data from firestore. Use this to manually fetch
         * new data when `mode` is set to 'off'.
         *
         * @return {Promise}
         * @fulfil {Collection} - This collection
         * @reject {Error} - Error describing the cause of the problem
         *
         * @example
         * const col = new Collection('albums', 'off');
         * col.fetch().then(({docs}) => {
         *   docs.forEach(doc => console.log(doc));
         * });
         */
        Collection.prototype.fetch = function () {
            return __awaiter(this, void 0, void 0, function () {
                var colRef, queryRef, ref, snapshot_1, err_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.isVerbose) {
                                console.debug(this.debugName + " - fetching...");
                            }
                            if (this.isActive) {
                                throw new Error('Should not call fetch when real-time updating is active');
                            }
                            if (this.isLoadingObservable.get()) {
                                throw new Error('Fetch already in progress');
                            }
                            colRef = this._resolveRef(this.sourceInput);
                            queryRef = this._resolveQuery(colRef, this.queryInput);
                            ref = queryRef !== undefined ? queryRef : colRef;
                            if (!ref) {
                                throw new Error('No ref, path or query set on Collection');
                            }
                            mobx.runInAction(function () {
                                _this._ready(false);
                                _this.isLoadingObservable.set(true);
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, wh(ref)];
                        case 2:
                            snapshot_1 = _a.sent();
                            mobx.runInAction(function () {
                                _this.isLoadingObservable.set(false);
                                _this._updateFromSnapshot(snapshot_1);
                                if (_this.isVerbose) {
                                    console.debug(_this.debugName + " - fetched " + snapshot_1.docs.length + " documents");
                                }
                            });
                            this._ready(true);
                            return [2 /*return*/, this];
                        case 3:
                            err_1 = _a.sent();
                            console.log(this.debugName + " - fetch failed: " + err_1.message);
                            mobx.runInAction(function () {
                                _this.isLoadingObservable.set(false);
                                _this._updateFromSnapshot(undefined);
                                _this._ready(true);
                            });
                            throw err_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(Collection.prototype, "isLoading", {
            /**
             * True when new data is being loaded.
             *
             * Fetches are performed in these cases:
             *
             * - When real-time updating is started
             * - When a different `ref` or `path` is set
             * - When a `query` is set or cleared
             * - When `fetch` is explicitly called
             *
             * @type {boolean}
             *
             * @example
             * const col = new Collection('albums', {mode: 'off'});
             * console.log(col.isLoading);  // false
             * col.fetch();                 // start fetch
             * console.log(col.isLoading);  // true
             * await col.ready();           // wait for fetch to complete
             * console.log(col.isLoading);  // false
             *
             * @example
             * const col = new Collection('albums');
             * console.log(col.isLoading);  // false
             * const dispose = autorun(() => {
             *   console.log(col.docs);     // start observing collection data
             * });
             * console.log(col.isLoading);  // true
             * ...
             * dispose();                   // stop observing collection data
             * console.log(col.isLoading);  // false
             */
            get: function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @babel/no-unused-expressions
                this.docsObservable.length;
                return this.isLoadingObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "isLoaded", {
            /**
             * True when a query snapshot has been retrieved at least once.
             * This however does not mean that any documents have been retrieved,
             * as the number of returned document may have been 0.
             * Use `hasDocs` to check whether any documents have been retrieved.
             *
             * @type {boolean}
             */
            get: function () {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @babel/no-unused-expressions
                this.docsObservable.length;
                return this.isLoadedObservable.get();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Promise that is resolved when the Collection has
         * finished fetching its (initial) documents.
         *
         * Use this method to for instance wait for
         * the initial snapshot update to complete, or to wait
         * for fresh data after changing the path/ref.
         *
         * @return {Promise}
         *
         * @example
         * const col = new Collection('albums', {mode: 'on'});
         * await col.ready();
         * console.log('albums: ', col.docs);
         *
         * @example
         * const col = new Collection('artists/FooFighters/albums', {mode: 'on'});
         * await col.ready();
         * ...
         * // Changing the path causes a new snapshot update
         * col.path = 'artists/TheOffspring/albums';
         * await col.ready();
         * console.log('albums: ', col.docs);
         */
        Collection.prototype.ready = function () {
            this.readyPromise = this.readyPromise || Promise.resolve(null);
            return this.readyPromise;
        };
        /**
         * Add a new document to this collection with the specified
         * data, assigning it a document ID automatically.
         *
         * @param {Object} data - JSON data for the new document
         * @return {Promise}
         * @fulfil {Document} - The newly created document
         * @reject {Error} - Error, e.g. a schema validation error or Firestore error
         *
         * @example
         * const doc = await collection.add({
         *   finished: false,
         *   text: 'New todo',
         *   options: {
         *     highPrio: true
         *   }
         * });
         * console.log(doc.id); // print id of new document
         *
         * @example
         * // If you want to create a document with a custom Id, then
         * // use the Document class instead, like this
         * const docWithCustomId = new Document('todos/mytodoid');
         * await docWithCustomId.set({
         *   finished: false,
         *   text: 'New todo',
         * });
         */
        Collection.prototype.add = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var ref, ref2, snapshot;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ref = this.ref;
                            if (!ref) {
                                throw new Error('No valid collection reference');
                            }
                            // REVISIT: can we know to skip this if schemas not in use?
                            // Validate schema using a dummy snapshot
                            this.createDocument(undefined, {
                                context: this.context,
                                snapshot: {
                                    data: function () { return data; },
                                    exists: function () { return true; },
                                    get: function (fieldPath) { return data[fieldPath]; },
                                    id: '',
                                    metadata: undefined,
                                    ref: undefined,
                                },
                            });
                            return [4 /*yield*/, Th(ref, data)];
                        case 1:
                            ref2 = _a.sent();
                            return [4 /*yield*/, hh(ref2)];
                        case 2:
                            snapshot = _a.sent();
                            return [2 /*return*/, this.createDocument(snapshot.ref, {
                                    context: this.context,
                                    snapshot: snapshot,
                                })];
                    }
                });
            });
        };
        /**
         * Deletes all the documents in the collection or query.
         * @ignore
         * TODO - Not implemented yet
         */
        Collection.prototype.deleteAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ref;
                return __generator(this, function (_a) {
                    ref = this.ref;
                    if (!ref) {
                        throw new Error('No valid collection reference');
                    }
                    return [2 /*return*/];
                });
            });
        };
        Collection.prototype.toString = function () {
            return this.debugName;
        };
        Object.defineProperty(Collection.prototype, "debugName", {
            /**
             * @private
             */
            get: function () {
                return (this.debugInstanceName || this.constructor.name) + " (" + this.path + ")";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "context", {
            /**
             * @private
             */
            get: function () {
                return this.ctx;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Limit used for query pagination.
         */
        /* get limit(): ?number {
              return this._limit.get();
          }
          set limit(val: ?number) {
              this._limit.set(val || undefined);
          } */
        /**
         * Paginates to the start of the collection,
         * resetting any pagination cursor that exists.
         */
        /* paginateToStart() {
              this._cursor.set(undefined);
          } */
        /**
         * Paginates to the next page. This sets the cursor
         * to `startAfter` the last document.
         *
         * @return {Boolean} False in case pagination was not possible
         */
        /* paginateNext(): boolean {
              if (!this.canPaginateNext) return false;
              this._cursor.set({
                  type: 'startAfter',
                  value: this.docs[this.docs.length - 1].ref
              });
              return true;
          } */
        /**
         * Paginates to the previous page. This sets the cursor
         * to `endBefore` the first document in `docs`.
         *
         * @return {Boolean} False in case pagination was not possible
         */
        /* paginatePrevious(): boolean {
              if (!this.canPaginatePrevious) return false;
              if (!this.docs.length) {
                  this._cursor.set(undefined);
                  return true;
              }
              this._cursor.set({
                  type: 'endBefore',
                  value: this.docs[0].ref
              });
              return true;
          }
      
          get canPaginateNext(): boolean {
              if (!this.limit) return false;
              return this.docs.length >= this.limit;
          }
      
          get canPaginatePrevious(): boolean {
              if (!this.limit) return false;
              return this._cursor.get() ? true : false;
          } */
        /**
         * Called whenever a property of this class becomes observed.
         * @private
         */
        Collection.prototype.addObserverRef = function () {
            var _this = this;
            if (this.isVerbose) {
                console.debug(this.debugName + " - addRef (" + (this.observedRefCount + 1) + ")");
            }
            var res = ++this.observedRefCount;
            if (res === 1) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
            return res;
        };
        /**
         * Called whenever a property of this class becomes un-observed.
         * @private
         */
        Collection.prototype.releaseObserverRef = function () {
            var _this = this;
            if (this.isVerbose) {
                console.debug(this.debugName + " - releaseRef (" + (this.observedRefCount - 1) + ")");
            }
            var res = --this.observedRefCount;
            if (!res) {
                mobx.runInAction(function () { return _this._updateRealtimeUpdates(); });
            }
            return res;
        };
        Collection.prototype._ready = function (complete) {
            var _this = this;
            if (complete) {
                var readyResolve = this.readyResolveFn;
                if (readyResolve) {
                    this.readyResolveFn = undefined;
                    readyResolve();
                }
            }
            else if (!this.readyResolveFn) {
                this.readyPromise = new Promise(function (resolve) {
                    _this.readyResolveFn = resolve;
                });
            }
        };
        Collection.prototype._resolveRef = function (source) {
            if (this.sourceCache === source) {
                return this.sourceCacheRef;
            }
            var ref;
            if (typeof source === 'string') {
                ref = Vc$1(getFirestore(this), source);
            }
            else if (typeof source === 'function') {
                ref = this._resolveRef(source());
                return ref; // don't set cache in this case
            }
            else {
                ref = source;
            }
            this.sourceCache = source;
            this.sourceCacheRef = ref;
            return ref;
        };
        Collection.prototype._resolveQuery = function (collectionRef, query) {
            var ref = query;
            if (typeof query === 'function') {
                ref = query(collectionRef);
            }
            // Apply pagination cursor
            /* const cursor = this._cursor.get();
                if (cursor) {
                    ref = ref || collectionRef;
                    switch (cursor.type) {
                        case 'startAfter': ref = ref.startAfter(cursor.value); break;
                        case 'startAt': ref = ref.startAt(cursor.value); break;
                        case 'endBefore': ref = ref.endBefore(cursor.value); break;
                        case 'endAt': ref = ref.endAt(cursor.value); break;
                    }
                }
        
                // Apply fetch limit
                const limit = this.limit;
                if (limit) {
                    ref = ref || collectionRef;
                    ref = ref.limit(limit);
                } */
            return ref;
        };
        /**
         * @private
         */
        Collection.prototype._onSnapshot = function (snapshot) {
            var _this = this;
            // Firestore sometimes returns multiple snapshots initially.
            // The first one containing cached results, followed by a second
            // snapshot which was fetched from the cloud.
            if (this.initialLocalSnapshotDebounceTimer) {
                clearTimeout(this.initialLocalSnapshotDebounceTimer);
                this.initialLocalSnapshotDebounceTimer = undefined;
                if (this.isVerbose) {
                    console.debug(this.debugName + " - cancelling initial debounced snapshot, because a newer snapshot has been received");
                }
            }
            if (this.isMinimizingUpdates) {
                var timeElapsed = Date.now() - this.initialLocalSnapshotStartTime;
                this.initialLocalSnapshotStartTime = 0;
                if (timeElapsed >= 0 && timeElapsed < this.initialLocalSnapshotDetectTime) {
                    if (this.isVerbose) {
                        console.debug(this.debugName + " - local snapshot detected (" + timeElapsed + "ms < " + this.initialLocalSnapshotDetectTime + "ms threshold), debouncing " + this.initialLocalSnapshotDebounceTime + " msec...");
                    }
                    this.initialLocalSnapshotDebounceTimer = setTimeout(function () {
                        _this.initialLocalSnapshotDebounceTimer = undefined;
                        _this._onSnapshot(snapshot);
                    }, this.initialLocalSnapshotDebounceTime);
                    return;
                }
            }
            // Process snapshot
            mobx.runInAction(function () {
                if (_this.isVerbose) {
                    console.debug(_this.debugName + " - onSnapshot");
                }
                _this.isLoadingObservable.set(false);
                _this._updateFromSnapshot(snapshot);
                _this._ready(true);
            });
        };
        /**
         * @private
         */
        Collection.prototype._onSnapshotError = function (error) {
            console.warn(this.debugName + " - onSnapshotError: " + error.message);
        };
        /**
         * @private
         */
        Collection.prototype._updateFromSnapshot = function (snapshot) {
            var _this = this;
            var newDocs = [];
            if (snapshot) {
                snapshot.docs.forEach(function (docSnapshot) {
                    var doc = _this.docLookup[docSnapshot.id];
                    try {
                        if (doc) {
                            doc.updateFromCollectionSnapshot(docSnapshot);
                        }
                        else {
                            doc = _this.createDocument(docSnapshot.ref, {
                                context: _this.context,
                                snapshot: docSnapshot,
                            });
                            _this.docLookup[doc.id] = doc;
                        }
                        doc.addCollectionRef();
                        newDocs.push(doc);
                    }
                    catch (err) {
                        console.error(err.message);
                    }
                });
            }
            this.docsObservable.forEach(function (doc) {
                if (!doc.releaseCollectionRef()) {
                    delete _this.docLookup[doc.id || ''];
                }
            });
            this.hasDocsObservable.set(!!newDocs.length);
            this.isLoadedObservable.set(true);
            if (this.docsObservable.length !== newDocs.length) {
                this.docsObservable.replace(newDocs);
            }
            else {
                for (var i = 0, n = newDocs.length; i < n; i++) {
                    if (newDocs[i] !== this.docsObservable[i]) {
                        this.docsObservable.replace(newDocs);
                        break;
                    }
                }
            }
        };
        /**
         * @private
         */
        Collection.prototype._updateRealtimeUpdates = function (updateSourceRef, updateQueryRef) {
            var _this = this;
            var newActive = false;
            var active = !!this.onSnapshotUnsubscribe;
            switch (this.modeObservable.get()) {
                case exports.Mode.Auto:
                    newActive = !!this.observedRefCount;
                    break;
                case exports.Mode.Off:
                    newActive = false;
                    break;
                case exports.Mode.On:
                    newActive = true;
                    break;
            }
            // Update source & query ref if needed
            if (newActive && !active) {
                updateSourceRef = true;
                updateQueryRef = true;
            }
            if (updateSourceRef) {
                this.refObservable.set(this._resolveRef(this.sourceInput));
            }
            if (updateQueryRef) {
                this.queryRefObservable.set(this._resolveQuery(this.refObservable.get(), this.queryInput));
            }
            // Upon de-activation, stop any observed reactions or
            // snapshot listeners.
            if (!newActive) {
                if (this.refDisposerFn) {
                    this.refDisposerFn();
                    this.refDisposerFn = undefined;
                }
                this.onSnapshotRefCache = undefined;
                if (this.onSnapshotUnsubscribe) {
                    if (this.isVerbose) {
                        console.debug(this.debugName + " - stop (" + this.modeObservable.get() + ":" + this.observedRefCount + ")");
                    }
                    this.onSnapshotUnsubscribe();
                    this.onSnapshotUnsubscribe = undefined;
                    if (this.isLoadingObservable.get()) {
                        this.isLoadingObservable.set(false);
                    }
                    this._ready(true);
                }
                return;
            }
            // Start listening for ref-changes
            if (!this.refDisposerFn) {
                var initialSourceRef_1 = this.refObservable.get();
                var initialQueryRef_1 = this.queryRefObservable.get();
                this.refDisposerFn = mobx.reaction(function () {
                    var sourceRef = _this._resolveRef(_this.sourceInput);
                    var queryRef2 = _this._resolveQuery(sourceRef, _this.queryInput);
                    if (initialSourceRef_1) {
                        sourceRef = initialSourceRef_1;
                        queryRef2 = initialQueryRef_1;
                        initialSourceRef_1 = undefined;
                        initialQueryRef_1 = undefined;
                    }
                    return {
                        queryRef2: queryRef2,
                        sourceRef: sourceRef,
                    };
                }, function (_a) {
                    var sourceRef = _a.sourceRef, queryRef2 = _a.queryRef2;
                    mobx.runInAction(function () {
                        if (_this.refObservable.get() !== sourceRef ||
                            _this.queryRefObservable.get() !== queryRef2) {
                            _this.refObservable.set(sourceRef);
                            _this.queryRefObservable.set(queryRef2);
                            _this._updateRealtimeUpdates();
                        }
                    });
                });
            }
            // Resolve ref and check whether it has changed
            var queryRef = this.queryRefObservable.get();
            var ref = queryRef !== undefined ? queryRef : this.refObservable.get();
            if (this.onSnapshotRefCache === ref) {
                return;
            }
            this.onSnapshotRefCache = ref;
            // Stop any existing listener
            if (this.onSnapshotUnsubscribe) {
                this.onSnapshotUnsubscribe();
                this.onSnapshotUnsubscribe = undefined;
            }
            // If no valid ref exists, then clear the collection so no "old"
            // documents are visible.
            if (!ref) {
                if (this.docsObservable.length) {
                    this._updateFromSnapshot({
                        docChanges: function (options) {
                            return [];
                        },
                        docs: [],
                        empty: true,
                        forEach: function () { return true; },
                        metadata: undefined,
                        query: queryRef,
                        size: 0,
                    });
                }
                return;
            }
            // Start listener
            if (this.isVerbose) {
                console.debug(this.debugName + " - " + (active ? 're-' : '') + "start (" + this.modeObservable.get() + ":" + this.observedRefCount + ")");
            }
            this._ready(false);
            this.isLoadingObservable.set(true);
            this.initialLocalSnapshotStartTime = Date.now();
            this.onSnapshotUnsubscribe = Eh(ref, {
                next: function (snapshot) { return _this._onSnapshot(snapshot); },
                error: function (err) { return _this._onSnapshotError(err); },
            });
        };
        return Collection;
    }());

    var isEqual$2 = require('lodash.isequal');
    /**
     * Collection that aggregates documents from multiple queries into
     * a single, easy accessible collection.
     *
     * AggregateCollection is driven by the `queries` function, which defines what
     * queries should be executed on the Firestore cloud back-end. GeoQuery is
     * for instance a more specific use-case of a aggregated-collection using a range
     * of geo-hash queries.
     *
     * @param {CollectionSource} [source] String-path, ref or function that returns a path or ref
     * @param {Object} [options] Configuration options
     * @param {AggregateCollectionQueriesFn} [options.queries] See `AggregateCollection.queries`
     * @param {Function} [options.createDocument] Factory function for creating documents `(source, options) => new Document(source, options)`
     * @param {Function} [options.orderBy] Client side sort function
     * @param {Function} [options.filterBy] Client side filter function
     * @param {boolean} [options.debug] Enables debug logging
     * @param {String} [options.debugName] Name to use when debug logging is enabled
     *
     * @example
     * import {AggregateCollection} from 'firestorter';
     *
     * // Query all unfinished todos for a set of users
     * const userIds = ['pinky', 'brain'];
     * const col = new AggregateCollection('todos', {
     *   queries: () => userIds.map(userId => ({
     *     key: userId, // unique-key by which the query is re-used/cached
     *     query: (ref) => ref.where('userId', '==', userId).where('finished', '==', false)
     *   }))
     * });
     */
    var AggregateCollection = /** @class */ (function () {
        function AggregateCollection(source, options) {
            var _this = this;
            this.observedRefCount = 0;
            /**
             * @private
             */
            this._onCreateDocument = function (source, options) {
                if (!source) {
                    return _this.createDocument(source, options);
                }
                // @ts-ignore
                var doc = source.id ? _this.documentRecycleMap[source.id] : null;
                return doc || _this.createDocument(source, options);
            };
            mobx.makeObservable(this, {
                docs: mobx.computed,
            });
            this.collectionSource = source;
            if (options.createDocument) {
                this.createDocument = options.createDocument;
            }
            else {
                this.createDocument = function (docSource, docOptions) {
                    return new Document(docSource, docOptions);
                };
            }
            this.queriesFn = options.queries;
            this.orderBy = options.orderBy;
            this.filterBy = options.filterBy;
            this.debug = options.debug || false;
            this.debugInstanceName = options.debugName;
            this.collections = enhancedObservable([], this);
            this.prevCollections = [];
            this.collectionRecycleMap = {};
            this.documentRecycleMap = {};
            this.ctx = options.context;
        }
        Object.defineProperty(AggregateCollection.prototype, "docs", {
            /**
             * Array of all the documents that have been fetched
             * from firestore.
             *
             * @type {Array}
             *
             * @example
             * aggregateCollection.docs.forEach((doc) => {
             *   console.log(doc.data);
             * });
             */
            get: function () {
                var docs = [];
                // Aggregrate all docs from the queries
                var hasAllData = true;
                this.collections.forEach(function (col) {
                    if (col.isLoading) {
                        hasAllData = false;
                    }
                    col.docs.forEach(function (doc) { return docs.push(doc); });
                });
                // If new queries have been added but have not yet
                // completed loading, use the previous queries instead
                // (until) all data has loaded
                if (!hasAllData && this.prevCollections.length) {
                    // console.log('usingPrevQueries');
                    docs = [];
                    this.prevCollections.forEach(function (col) {
                        col.docs.forEach(function (doc) { return docs.push(doc); });
                    });
                }
                else if (hasAllData) {
                    // console.log('+++ ALL DATA AVAIL');
                    this.prevCollections = this.collections.slice(0);
                }
                // console.log('unfilteredDocs: ', docs.length);
                if (this.filterBy) {
                    docs = docs.filter(this.filterBy);
                }
                if (this.orderBy) {
                    docs.sort(this.orderBy);
                }
                // console.log('docs: ', docs.length);
                return docs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "hasDocs", {
            /**
             * True whenever any documents have been fetched.
             *
             * @type {boolean}
             */
            get: function () {
                return this.docs.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "cols", {
            /**
             * Array of all the collections inside this aggregate
             * collection.
             *
             * @type {Array}
             *
             * @example
             * aggregateCollection.cols.forEach((col) => {
             *   console.log(col.docs.length);
             * });
             */
            get: function () {
                return this.collections;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "queries", {
            /**
             * Queries function.
             *
             * @type {Function}
             */
            get: function () {
                return this.queriesFn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "isLoading", {
            /**
             * True when new data is being loaded.
             *
             * @type {boolean}
             */
            get: function () {
                return this.collections.reduce(function (acc, col) { return acc || col.isLoading; }, false);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "isLoaded", {
            /**
             * True when data for all underlying collections has been loaded.
             *
             * @type {boolean}
             */
            get: function () {
                return this.collections.reduce(function (acc, col) { return (acc ? col.isLoaded : false); }, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AggregateCollection.prototype, "debugName", {
            /**
             * @private
             */
            get: function () {
                return "" + (this.debugInstanceName || this.constructor.name);
            },
            enumerable: false,
            configurable: true
        });
        AggregateCollection.prototype.toString = function () {
            return this.debugName;
        };
        Object.defineProperty(AggregateCollection.prototype, "context", {
            /**
             * @private
             */
            get: function () {
                return this.ctx;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Called whenever a property of this class becomes observed.
         * @private
         */
        AggregateCollection.prototype.addObserverRef = function () {
            var _this = this;
            var res = ++this.observedRefCount;
            if (res === 1) {
                this.disposer = mobx.autorun(function () {
                    var queries = _this.queriesFn();
                    mobx.runInAction(function () { return _this._updateQueries(queries); });
                });
            }
            return res;
        };
        /**
         * Called whenever a property of this class becomes un-observed.
         * @private
         */
        AggregateCollection.prototype.releaseObserverRef = function () {
            var res = --this.observedRefCount;
            if (res <= 0) {
                if (this.disposer) {
                    this.disposer();
                    this.disposer = undefined;
                }
            }
            return res;
        };
        /**
         * @private
         */
        AggregateCollection.prototype._updateQueries = function (queries) {
            var _this = this;
            if (!queries) {
                return;
            }
            if (this.debug) {
                console.debug(this.debugName, 'updateQueries: ', queries);
            }
            // Copy all current documents into the document recyle map
            this.documentRecycleMap = {};
            Object.values(this.collectionRecycleMap).forEach(function (query) {
                query.docs.forEach(function (doc) {
                    _this.documentRecycleMap[doc.id] = doc;
                });
            });
            // console.log(Object.keys(this._documentRecycleMap));
            var cols = queries.map(function (query) {
                var col = _this.collectionRecycleMap[query.key];
                if (!col) {
                    col = new Collection(_this.collectionSource, {
                        createDocument: _this._onCreateDocument,
                        debug: _this.debug,
                        debugName: _this.debugName + '.col: ' + query.key,
                        query: function (ref) { return (ref ? query.query(ref) : ref); },
                    });
                }
                return col;
            });
            // Update the query recycle map
            this.collectionRecycleMap = {};
            cols.forEach(function (col, index) {
                var query = queries[index];
                _this.collectionRecycleMap[query.key] = col;
            });
            // Update the queries
            if (!isEqual$2(cols, this.collections.slice(0))) {
                this.collections.replace(cols);
            }
        };
        return AggregateCollection;
    }());

    // Taken from https://github.com/firebase/geofire-js/blob/master/src/utils.ts
    // Default geohash length
    var GEOHASH_PRECISION = 10;
    // Characters used in location geohashes
    var BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';
    // The meridional circumference of the earth in meters
    var EARTH_MERI_CIRCUMFERENCE = 40007860;
    // Length of a degree latitude at the equator
    var METERS_PER_DEGREE_LATITUDE = 110574;
    // Number of bits per geohash character
    var BITS_PER_CHAR = 5;
    // Maximum length of a geohash in bits
    var MAXIMUM_BITS_PRECISION = 22 * BITS_PER_CHAR;
    // Equatorial radius of the earth in meters
    var EARTH_EQ_RADIUS = 6378137.0;
    // The following value assumes a polar radius of
    // const EARTH_POL_RADIUS = 6356752.3;
    // The formulate to calculate E2 is
    // E2 == (EARTH_EQ_RADIUS^2-EARTH_POL_RADIUS^2)/(EARTH_EQ_RADIUS^2)
    // The exact value is used here to avoid rounding errors
    var E2 = 0.00669447819799;
    // Cutoff for rounding errors on double calculations
    var EPSILON = 1e-12;
    /*
    function fromGeoPoint(point: IGeoPoint): number[] {
        return [point.latitude, point.longitude];
    } */
    function toGeoPoint(location) {
        return {
            latitude: location[0],
            longitude: location[1],
        };
    }
    function log2(x) {
        return Math.log(x) / Math.log(2);
    }
    /**
     * Validates the inputted location and throws an error if it is invalid.
     * @private
     * @param {object} location The {latitude, longitude} to be verified.
     */
    function validateLatitude(latitude) {
        if (typeof latitude !== 'number' || isNaN(latitude)) {
            throw new Error('latitude must be a number');
        }
        else if (latitude < -90 || latitude > 90) {
            throw new Error('latitude must be within the range [-90, 90]');
        }
    }
    /**
     * @private
     */
    function validateLongitude(longitude) {
        if (typeof longitude !== 'number' || isNaN(longitude)) {
            throw new Error('longitude must be a number');
        }
        else if (longitude < -180 || longitude > 180) {
            throw new Error('longitude must be within the range [-180, 180]');
        }
    }
    /**
     * @private
     */
    function validateLocation(location) {
        try {
            if (!location) {
                throw new Error('location is empty');
            }
            validateLatitude(location.latitude);
            validateLongitude(location.longitude);
        }
        catch (err) {
            throw new Error("Invalid location \"" + location + "\": " + err.message);
        }
    }
    /**
     * @private
     */
    function validateRegion(region) {
        try {
            if (!region) {
                throw new Error('region is empty');
            }
            validateLatitude(region.latitude);
            validateLatitude(region.latitudeDelta);
            validateLongitude(region.longitude);
            validateLongitude(region.longitudeDelta);
        }
        catch (err) {
            throw new Error("Invalid region \"" + region + "\": " + err.message);
        }
    }
    /**
     * Validates the inputted geohash and throws an error if it is invalid.
     * @private
     * @param {string} geohash The geohash to be validated.
     */
    function validateGeohash(geohash) {
        var e_1, _a;
        var error;
        if (typeof geohash !== 'string') {
            error = 'geohash must be a string';
        }
        else if (geohash.length === 0) {
            error = 'geohash cannot be the empty string';
        }
        else {
            try {
                for (var geohash_1 = __values(geohash), geohash_1_1 = geohash_1.next(); !geohash_1_1.done; geohash_1_1 = geohash_1.next()) {
                    var letter = geohash_1_1.value;
                    if (BASE32.indexOf(letter) === -1) {
                        error = "geohash cannot contain '" + letter + "'";
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (geohash_1_1 && !geohash_1_1.done && (_a = geohash_1.return)) _a.call(geohash_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (typeof error !== 'undefined') {
            throw new Error("Invalid geohash '" + geohash + "': " + error);
        }
    }
    /**
     * Converts a region into its geo points (nortEast, southWest, etc..).
     *
     * @param {IGeoRegion} region The region to convert
     */
    function geoRegionToPoints(region) {
        var north = region.latitude - region.latitudeDelta * 0.5;
        var south = region.latitude + region.latitudeDelta * 0.5;
        var east = wrapLongitude(region.longitude + region.longitudeDelta * 0.5);
        var west = wrapLongitude(region.longitude - region.longitudeDelta * 0.5);
        return {
            northEast: { latitude: north, longitude: east },
            northWest: { latitude: north, longitude: west },
            southEast: { latitude: south, longitude: east },
            southWest: { latitude: south, longitude: west },
        };
    }
    /**
     * Converts degrees to radians.
     * @private
     * @param {number} degrees The number of degrees to be converted to radians.
     * @returns The number of radians equal to the inputted number of degrees.
     */
    function degreesToRadians(degrees) {
        if (typeof degrees !== 'number' || isNaN(degrees)) {
            throw new Error('Error: degrees must be a number');
        }
        return (degrees * Math.PI) / 180;
    }
    /**
     * Encodes a geographical position (latitude/longitude) into a geohash tile.
     *
     * @param {object} location The {latitude, longitude} to encode into a geohash.
     * @param {number} [precision] The length of the geohash to create. If no precision is specified, the
     * default precision of `10` is used.
     * @returns The geohash of the inputted location.
     */
    function encodeGeohash(location, precision) {
        if (precision === void 0) { precision = GEOHASH_PRECISION; }
        validateLocation(location);
        if (typeof precision !== 'undefined') {
            if (typeof precision !== 'number' || isNaN(precision)) {
                throw new Error('precision must be a number');
            }
            else if (precision <= 0) {
                throw new Error('precision must be greater than 0');
            }
            else if (precision > 22) {
                throw new Error('precision cannot be greater than 22');
            }
            else if (Math.round(precision) !== precision) {
                throw new Error('precision must be an integer');
            }
        }
        var latitudeRange = {
            max: 90,
            min: -90,
        };
        var longitudeRange = {
            max: 180,
            min: -180,
        };
        var hash = '';
        var hashVal = 0;
        var bits = 0;
        var even = 1;
        while (hash.length < precision) {
            var val = even ? location.longitude : location.latitude;
            var range = even ? longitudeRange : latitudeRange;
            var mid = (range.min + range.max) / 2;
            if (val > mid) {
                hashVal = (hashVal << 1) + 1;
                range.min = mid;
            }
            else {
                hashVal = (hashVal << 1) + 0;
                range.max = mid;
            }
            even = !even;
            if (bits < 4) {
                bits++;
            }
            else {
                bits = 0;
                hash += BASE32[hashVal];
                hashVal = 0;
            }
        }
        return hash;
    }
    /**
     * Decodes a geohash tile into a geographical position (latitude/longitude).
     *
     * @param {string} geohash - Geohash tile
     */
    function decodeGeohash(geohash) {
        validateGeohash(geohash);
        var evenBit = true;
        var latMin = -90;
        var latMax = 90;
        var lonMin = -180;
        var lonMax = 180;
        for (var i = 0; i < geohash.length; i++) {
            var chr = geohash.charAt(i);
            var idx = BASE32.indexOf(chr);
            if (idx < 0) {
                throw new Error('Invalid geohash');
            }
            for (var n = 4; n >= 0; n--) {
                var bitN = (idx >> n) & 1;
                if (evenBit) {
                    // longitude
                    var lonMid = (lonMin + lonMax) / 2;
                    if (bitN === 1) {
                        lonMin = lonMid;
                    }
                    else {
                        lonMax = lonMid;
                    }
                }
                else {
                    // latitude
                    var latMid = (latMin + latMax) / 2;
                    if (bitN === 1) {
                        latMin = latMid;
                    }
                    else {
                        latMax = latMid;
                    }
                }
                evenBit = !evenBit;
            }
        }
        return [
            { latitude: latMin, longitude: lonMin },
            { latitude: latMax, longitude: lonMax }, // ne
        ];
    }
    /**
     * Calculates the number of longitude degrees over a given distance and at a given latitude.
     *
     * @param {number} distance The distance to convert.
     * @param {number} latitude The latitude at which to calculate.
     * @returns The number of degrees the distance corresponds to.
     */
    function metersToLongitudeDegrees(distance, latitude) {
        var radians = degreesToRadians(latitude);
        var num = (Math.cos(radians) * EARTH_EQ_RADIUS * Math.PI) / 180;
        var denom = 1 / Math.sqrt(1 - E2 * Math.sin(radians) * Math.sin(radians));
        var deltaDeg = num * denom;
        if (deltaDeg < EPSILON) {
            return distance > 0 ? 360 : 0;
        }
        else {
            return Math.min(360, distance / deltaDeg);
        }
    }
    /**
     * Calculates the number of latitude degrees over a given distance.
     *
     * @param {number} distance The distance to convert.
     * @returns The number of degrees the distance corresponds to.
     */
    function metersToLatitudeDegrees(distance) {
        return distance / METERS_PER_DEGREE_LATITUDE;
    }
    /**
     * Calculates the bits necessary to reach a given resolution, in meters, for the longitude at a
     * given latitude.
     * @ignore
     * @param {number} resolution The desired resolution.
     * @param {number} latitude The latitude used in the conversion.
     * @return The bits necessary to reach a given resolution, in meters.
     */
    function longitudeBitsForResolution(resolution, latitude) {
        var degs = metersToLongitudeDegrees(resolution, latitude);
        return Math.abs(degs) > 0.000001 ? Math.max(1, log2(360 / degs)) : 1;
    }
    /**
     * Calculates the bits necessary to reach a given resolution, in meters, for the latitude.
     * @ignore
     * @param {number} resolution The bits necessary to reach a given resolution, in meters.
     * @returns Bits necessary to reach a given resolution, in meters, for the latitude.
     */
    function latitudeBitsForResolution(resolution) {
        return Math.min(log2(EARTH_MERI_CIRCUMFERENCE / 2 / resolution), MAXIMUM_BITS_PRECISION);
    }
    /**
     * Wraps the longitude to [-180,180].
     * @private
     * @param {number} longitude The longitude to wrap.
     * @returns longitude The resulting longitude.
     */
    function wrapLongitude(longitude) {
        if (longitude <= 180 && longitude >= -180) {
            return longitude;
        }
        var adjusted = longitude + 180;
        if (adjusted > 0) {
            return (adjusted % 360) - 180;
        }
        else {
            return 180 - (-adjusted % 360);
        }
    }
    /**
     * Calculates the maximum number of bits of a geohash to get a bounding box that is larger than a
     * given size at the given coordinate.
     * @ignore
     * @param {object} coordinate The coordinate as a {latitude, longitude}.
     * @param {number} size The size of the bounding box.
     * @returns The number of bits necessary for the geohash.
     */
    function boundingBoxBits(coordinate, size) {
        var latDeltaDegrees = size / METERS_PER_DEGREE_LATITUDE;
        var latitudeNorth = Math.min(90, coordinate.latitude + latDeltaDegrees);
        var latitudeSouth = Math.max(-90, coordinate.latitude - latDeltaDegrees);
        var bitsLat = Math.floor(latitudeBitsForResolution(size)) * 2;
        var bitsLongNorth = Math.floor(longitudeBitsForResolution(size, latitudeNorth)) * 2 - 1;
        var bitsLongSouth = Math.floor(longitudeBitsForResolution(size, latitudeSouth)) * 2 - 1;
        return Math.min(bitsLat, bitsLongNorth, bitsLongSouth, MAXIMUM_BITS_PRECISION);
    }
    function boundingBoxBitsForRegion(region) {
        var _a = geoRegionToPoints(region), northEast = _a.northEast, southEast = _a.southEast, northWest = _a.northWest, southWest = _a.southWest;
        var bitsLat = Math.floor(latitudeBitsForResolution(calculateGeoDistance(northEast, southEast) * 0.5)) * 2;
        var bitsLongNorth = Math.floor(longitudeBitsForResolution(calculateGeoDistance(northEast, northWest) * 0.5, northWest.latitude)) *
            2 -
            1;
        var bitsLongSouth = Math.floor(longitudeBitsForResolution(calculateGeoDistance(southEast, southWest) * 0.5, southWest.latitude)) *
            2 -
            1;
        return Math.min(bitsLat, bitsLongNorth, bitsLongSouth, MAXIMUM_BITS_PRECISION);
    }
    /**
     * Calculates eight points on the bounding box and the center of a given circle. At least one
     * geohash of these nine coordinates, truncated to a precision of at most radius, are guaranteed
     * to be prefixes of any geohash that lies within the circle.
     * @ignore
     * @param {object} center The center given as {latitude, longitude}.
     * @param {number} radius The radius of the circle in meters.
     * @returns The eight bounding box points.
     */
    function boundingBoxCoordinates(center, radius) {
        var latDegrees = radius / METERS_PER_DEGREE_LATITUDE;
        var latitudeNorth = Math.min(90, center.latitude + latDegrees);
        var latitudeSouth = Math.max(-90, center.latitude - latDegrees);
        var longDegsNorth = metersToLongitudeDegrees(radius, latitudeNorth);
        var longDegsSouth = metersToLongitudeDegrees(radius, latitudeSouth);
        var longDegs = Math.max(longDegsNorth, longDegsSouth);
        return [
            [center.latitude, center.longitude],
            [center.latitude, wrapLongitude(center.longitude - longDegs)],
            [center.latitude, wrapLongitude(center.longitude + longDegs)],
            [latitudeNorth, center.longitude],
            [latitudeNorth, wrapLongitude(center.longitude - longDegs)],
            [latitudeNorth, wrapLongitude(center.longitude + longDegs)],
            [latitudeSouth, center.longitude],
            [latitudeSouth, wrapLongitude(center.longitude - longDegs)],
            [latitudeSouth, wrapLongitude(center.longitude + longDegs)],
        ];
    }
    /**
     * Calculates eight points on the bounding box and the center of a region box. At least one
     * geohash of these nine coordinates, truncated to a precision of at most radius, are guaranteed
     * to be prefixes of any geohash that lies within the circle.
     * @ignore
     * @param {object} region The region given as {latitude, longitude, latitudeDelta, longitudeDelta}.
     * @returns The eight bounding box points.
     */
    function boundingBoxCoordinatesForRegion(region) {
        var _a = geoRegionToPoints(region), northEast = _a.northEast, northWest = _a.northWest, southWest = _a.southWest;
        return [
            [region.latitude, region.longitude],
            [region.latitude, northEast.longitude],
            [region.latitude, northWest.longitude],
            [northWest.latitude, region.longitude],
            [northWest.latitude, northEast.longitude],
            [northWest.latitude, northWest.longitude],
            [southWest.latitude, region.longitude],
            [southWest.latitude, northEast.longitude],
            [southWest.latitude, northWest.longitude],
        ];
    }
    /**
     * Calculates the bounding box query for a geohash with x bits precision.
     * @ignore
     * @param {string} geohash The geohash whose bounding box query to generate.
     * @param {number} bits The number of bits of precision.
     * @returns A [start, end] pair of geohashes.
     */
    function geohashQuery(geohash1, bits) {
        validateGeohash(geohash1);
        var precision = Math.ceil(bits / BITS_PER_CHAR);
        if (geohash1.length < precision) {
            return [geohash1, geohash1 + '~'];
        }
        var geohash = geohash1.substring(0, precision);
        var base = geohash.substring(0, geohash.length - 1);
        var lastValue = BASE32.indexOf(geohash.charAt(geohash.length - 1));
        var significantBits = bits - base.length * BITS_PER_CHAR;
        var unusedBits = BITS_PER_CHAR - significantBits;
        // delete unused bits
        var startValue = (lastValue >> unusedBits) << unusedBits;
        var endValue = startValue + (1 << unusedBits);
        if (endValue > 31) {
            return [base + BASE32[startValue], base + '~'];
        }
        else {
            return [base + BASE32[startValue], base + BASE32[endValue]];
        }
    }
    /**
     * Calculates a set of geohash queries to fully contain a given circle. A query is a [start, end] pair
     * where any geohash is guaranteed to be lexiographically larger then start and smaller than end.
     *
     * @param {object} center The center given as {latitude, longitude}.
     * @param {number} radius The radius of the circle in meters.
     * @return An array of geohashes containing a [start, end] pair.
     */
    function getGeohashesForRadius(center, radius) {
        validateLocation(center);
        var bits = Math.max(1, boundingBoxBits(center, radius));
        var precision = Math.ceil(bits / BITS_PER_CHAR);
        var coordinates = boundingBoxCoordinates(center, radius);
        var queries = coordinates.map(function (coordinate) {
            return geohashQuery(encodeGeohash(toGeoPoint(coordinate), precision), bits);
        });
        // remove duplicates
        return queries.filter(function (query, index) {
            return !queries.some(function (other, otherIndex) {
                return index > otherIndex && query[0] === other[0] && query[1] === other[1];
            });
        });
    }
    /**
     * Calculates a set of geohash queries to fully contain a given region box. A query is a [start, end] pair
     * where any geohash is guaranteed to be lexiographically larger then start and smaller than end.
     *
     * @param {object} region The region given as {latitude, longitude, latitudeDelta, longitudeDelta}.
     * @return An array of geohashes containing a [start, end] pair.
     */
    function getGeohashesForRegion(region) {
        validateRegion(region);
        var bits = Math.max(1, boundingBoxBitsForRegion(region));
        var precision = Math.ceil(bits / BITS_PER_CHAR);
        var coordinates = boundingBoxCoordinatesForRegion(region);
        var queries = coordinates.map(function (coordinate) {
            var geohash = encodeGeohash(toGeoPoint(coordinate), precision);
            var query = geohashQuery(geohash, bits);
            /* console.log(
                    geohash,
                    ", index: ",
                    index,
                    ", query: ",
                    query,
                    ", precision: ",
                    precision
                ); */
            return query;
        });
        // remove duplicates
        return queries.filter(function (query, index) {
            return !queries.some(function (other, otherIndex) {
                return index > otherIndex && query[0] === other[0] && query[1] === other[1];
            });
        });
    }
    /**
     * Flattens a query start-geohash; and end-geohash into all its individual geohash components.
     *
     * @param {string} geohash1 The geohash from range
     * @param {string} geohash2 The geohash to range
     */
    function flattenGeohashRange(geohash1, geohash2) {
        if (geohash1.length !== geohash2.length) {
            throw new Error('Geohash lengths must be the same');
        }
        var res = [geohash1];
        var hash = geohash1;
        while (hash < geohash2) {
            for (var i = geohash1.length - 1; i >= 0; i--) {
                var idx = BASE32.indexOf(hash.charAt(i));
                if (idx < BASE32.length - 1) {
                    hash = hash.substring(0, i) + BASE32[idx + 1] + hash.substring(i + 1);
                    if (hash < geohash2) {
                        res.push(hash);
                    }
                    break;
                }
                else {
                    hash = hash.substring(0, i) + BASE32[0] + hash.substring(i + 1);
                }
                if (hash >= geohash2) {
                    break;
                }
            }
        }
        return res;
    }
    /**
     * Flattens a set of geo-hash queries into a single array of geohash tiles.
     *
     * @param {string[][]} geohashes The geohashes array
     */
    function flattenGeohashes(geohashes) {
        var set = new Set();
        geohashes.forEach(function (a) { return flattenGeohashRange(a[0], a[1]).forEach(function (geohash) { return set.add(geohash); }); });
        return Array.from(set);
    }
    /**
     * Method which calculates the distance, in meters, between two locations,
     * via the Haversine formula. Note that this is approximate due to the fact that the
     * Earth's radius varies between 6356.752 km and 6378.137 km.
     *
     * @param {object} location1 The {latitude, longitude} of the first location.
     * @param {object} location2 The {latitude, longitude} of the second location.
     * @returns The distance, in meters, between the inputted locations.
     */
    function calculateGeoDistance(location1, location2) {
        validateLocation(location1);
        validateLocation(location2);
        var radius = 6371; // Earth's radius in kilometers
        var latDelta = degreesToRadians(location2.latitude - location1.latitude);
        var lonDelta = degreesToRadians(location2.longitude - location1.longitude);
        var a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
            Math.cos(degreesToRadians(location1.latitude)) *
                Math.cos(degreesToRadians(location2.latitude)) *
                Math.sin(lonDelta / 2) *
                Math.sin(lonDelta / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return radius * c * 1000;
    }
    function insideGeoRegion(point, region) {
        if (point.latitude < region.latitude - region.latitudeDelta * 0.5 ||
            point.latitude > region.latitude + region.latitudeDelta * 0.5) {
            return false;
        }
        // TODO - wrap longitude?
        if (point.longitude < region.longitude - region.longitudeDelta * 0.5 ||
            point.longitude > region.longitude + region.longitudeDelta * 0.5) {
            return false;
        }
        return true;
    }

    /**
     * GeoQuery makes it possible to perform efficient geographical based queries
     * with the use of geo-hashes.
     *
     * In order to use GeoQuery, each document needs a `geohash` field stored in the
     * root of the document. The value of the `geohash` field should be a geo-hash
     * encoded using `encodeGeohash`.
     *
     * @extends AggregateCollection
     * @param {CollectionSource} [source] String-path, ref or function that returns a path or ref
     * @param {Object} [options] Configuration options
     * @param {IGeoRegion} [options.region] See `GeoQuery.region`
     * @param {string} [options.fieldPath] Field to query on (default = `geohash`)
     *
     * @example
     *
     * const query = new GeoQuery('bookings', {
     *   region = {
     *     latitude: 51.45663,
     *     longitude: 5.223,
     *     latitudeDelta: 0.1,
     *     longitudeDelta: 0.1,
     *   }
     * });
     *
     * // Bookings needs to contain documents with a `geohash`
     * // field in the root, like this:
     * // {
     * //   ...
     * //   geohash: 'jhdb23'
     * //   ...
     * // }
     *
     * autorun(() => {
     *   query.docs.map(doc => console.log('doc: ', doc.id, doc.data));
     * });
     */
    var GeoQuery = /** @class */ (function (_super) {
        __extends(GeoQuery, _super);
        function GeoQuery(source, options) {
            var _this = this;
            var _a = options || {}, region = _a.region, _b = _a.fieldPath, fieldPath = _b === void 0 ? 'geohash' : _b, filterBy = _a.filterBy, otherOptions = __rest(_a, ["region", "fieldPath", "filterBy"]);
            var regionObservable = mobx.observable.box(region);
            _this = _super.call(this, source, __assign({ filterBy: filterBy
                    ? function (doc) {
                        var regionVal = regionObservable.get();
                        regionVal = typeof regionVal === 'function' ? regionVal() : regionVal;
                        return filterBy(doc, regionVal);
                    }
                    : undefined, queries: function () {
                    var regionVal = regionObservable.get();
                    regionVal = typeof regionVal === 'function' ? regionVal() : regionVal;
                    var geohashes = regionVal ? getGeohashesForRegion(regionVal) : undefined;
                    if (!geohashes) {
                        return null;
                    }
                    return geohashes.map(function (geohash) { return ({
                        geohash: geohash,
                        key: geohash[0] + "-" + geohash[1],
                        query: function (ref) {
                            return Uu(ref, Ku(fieldPath, '>=', geohash[0]), Ku(fieldPath, '<', geohash[1]));
                        },
                    }); });
                } }, otherOptions)) || this;
            _this.regionObservable = regionObservable;
            mobx.makeObservable(_this, {
                geohashes: mobx.computed,
            });
            return _this;
        }
        Object.defineProperty(GeoQuery.prototype, "region", {
            /**
             * Geographical region to query for.
             *
             * Use this property to get or set the region in which
             * to perform a aggregate geohash query.
             *
             * @type {GeoQueryRegion}
             *
             * @example
             * const query = new GeoQuery('bookings');
             *
             * // Bookings needs to contain documents with a `geohash`
             * // field in the root, like this:
             * // {
             * //   ...
             * //   geohash: 'jhdb23'
             * //   ...
             * // }
             *
             * ...
             * // Set the region to query for
             * query.region = {
             *   latitude: 51.45663,
             *   longitude: 5.223,
             *   latitudeDelta: 0.1,
             *   longitudeDelta: 0.1,
             * }
             */
            get: function () {
                return this.regionObservable.get();
            },
            set: function (val) {
                var _this = this;
                mobx.runInAction(function () { return _this.regionObservable.set(val); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeoQuery.prototype, "geohashes", {
            /**
             * Geo-hashes that are queries for the given region.
             *
             * @type {GeoQueryHash[]}
             *
             * @example
             * const query = new GeoQuery('bookings', {
             *   region: {
             *     latitude: 51.45663,
             *     longitude: 5.223,
             *     latitudeDelta: 0.1,
             *     longitudeDelta: 0.1
             *   }
             * });
             * ...
             * // Get the in-use geohashes
             * console.log(query.geohashes);
             * // [['todo', 'todo2], ...]
             */
            get: function () {
                var queries = this.queries();
                return queries ? queries.map(function (query) { return query.geohash; }) : [];
            },
            enumerable: false,
            configurable: true
        });
        return GeoQuery;
    }(AggregateCollection));

    exports.AggregateCollection = AggregateCollection;
    exports.Collection = Collection;
    exports.Document = Document;
    exports.GeoQuery = GeoQuery;
    exports.calculateGeoDistance = calculateGeoDistance;
    exports.decodeGeohash = decodeGeohash;
    exports.encodeGeohash = encodeGeohash;
    exports.flattenGeohashRange = flattenGeohashRange;
    exports.flattenGeohashes = flattenGeohashes;
    exports.geoRegionToPoints = geoRegionToPoints;
    exports.getFirebaseApp = getFirebaseApp;
    exports.getFirestore = getFirestore;
    exports.getGeohashesForRadius = getGeohashesForRadius;
    exports.getGeohashesForRegion = getGeohashesForRegion;
    exports.initFirestorter = initFirestorter;
    exports.insideGeoRegion = insideGeoRegion;
    exports.isTimestamp = isTimestamp;
    exports.makeFirestorterContext = makeFirestorterContext;
    exports.mergeUpdateData = mergeUpdateData;
    exports.metersToLatitudeDegrees = metersToLatitudeDegrees;
    exports.metersToLongitudeDegrees = metersToLongitudeDegrees;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
