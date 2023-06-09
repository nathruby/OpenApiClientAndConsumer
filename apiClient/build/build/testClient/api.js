"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * apiClient
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersApi = exports.UsersApiFactory = exports.UsersApiFp = exports.UsersApiAxiosParamCreator = exports.TestsApi = exports.TestsApiFactory = exports.TestsApiFp = exports.TestsApiAxiosParamCreator = exports.UserStatusEnum = void 0;
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("./common");
// @ts-ignore
const base_1 = require("./base");
exports.UserStatusEnum = {
    Happy: 'Happy',
    Sad: 'Sad'
};
/**
 * TestsApi - axios parameter creator
 * @export
 */
const TestsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @param {number} testId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTest: (testId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'testId' is not null or undefined
            (0, common_1.assertParamExists)('getTest', 'testId', testId);
            const localVarPath = `/tests/{testId}`
                .replace(`{${"testId"}}`, encodeURIComponent(String(testId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.TestsApiAxiosParamCreator = TestsApiAxiosParamCreator;
/**
 * TestsApi - functional programming interface
 * @export
 */
const TestsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.TestsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @param {number} testId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTest(testId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getTest(testId, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
    };
};
exports.TestsApiFp = TestsApiFp;
/**
 * TestsApi - factory interface
 * @export
 */
const TestsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.TestsApiFp)(configuration);
    return {
        /**
         *
         * @param {number} testId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTest(testId, options) {
            return localVarFp.getTest(testId, options).then((request) => request(axios, basePath));
        },
    };
};
exports.TestsApiFactory = TestsApiFactory;
/**
 * TestsApi - object-oriented interface
 * @export
 * @class TestsApi
 * @extends {BaseAPI}
 */
class TestsApi extends base_1.BaseAPI {
    /**
     *
     * @param {number} testId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestsApi
     */
    getTest(testId, options) {
        return (0, exports.TestsApiFp)(this.configuration).getTest(testId, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.TestsApi = TestsApi;
/**
 * UsersApi - axios parameter creator
 * @export
 */
const UsersApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @param {PickUserEmailOrNameOrPhoneNumbers} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: (body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'body' is not null or undefined
            (0, common_1.assertParamExists)('createUser', 'body', body);
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(body, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @param {number} userId
         * @param {string} [name]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: (userId, name, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'userId' is not null or undefined
            (0, common_1.assertParamExists)('getUser', 'userId', userId);
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.UsersApiAxiosParamCreator = UsersApiAxiosParamCreator;
/**
 * UsersApi - functional programming interface
 * @export
 */
const UsersApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @param {PickUserEmailOrNameOrPhoneNumbers} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.createUser(body, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
        /**
         *
         * @param {number} userId
         * @param {string} [name]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(userId, name, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUser(userId, name, options);
                return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
    };
};
exports.UsersApiFp = UsersApiFp;
/**
 * UsersApi - factory interface
 * @export
 */
const UsersApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersApiFp)(configuration);
    return {
        /**
         *
         * @param {PickUserEmailOrNameOrPhoneNumbers} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(body, options) {
            return localVarFp.createUser(body, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @param {number} userId
         * @param {string} [name]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(userId, name, options) {
            return localVarFp.getUser(userId, name, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersApiFactory = UsersApiFactory;
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
class UsersApi extends base_1.BaseAPI {
    /**
     *
     * @param {PickUserEmailOrNameOrPhoneNumbers} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    createUser(body, options) {
        return (0, exports.UsersApiFp)(this.configuration).createUser(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} userId
     * @param {string} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUser(userId, name, options) {
        return (0, exports.UsersApiFp)(this.configuration).getUser(userId, name, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersApi = UsersApi;
