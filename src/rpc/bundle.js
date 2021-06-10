/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.aha = (function() {

    /**
     * Namespace aha.
     * @exports aha
     * @namespace
     */
    var aha = {};

    aha.aha_service = (function() {

        /**
         * Constructs a new aha_service service.
         * @memberof aha
         * @classdesc Represents an aha_service
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function aha_service(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (aha_service.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = aha_service;

        /**
         * Creates new aha_service service using the specified rpc implementation.
         * @function create
         * @memberof aha.aha_service
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {aha_service} RPC service. Useful where requests and/or responses are streamed.
         */
        aha_service.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link aha.aha_service#findOne}.
         * @memberof aha.aha_service
         * @typedef FindOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {aha.ADdRes} [response] ADdRes
         */

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof aha.aha_service
         * @instance
         * @param {aha.IAddd} request Addd message or plain object
         * @param {aha.aha_service.FindOneCallback} callback Node-style callback called with the error, if any, and ADdRes
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(aha_service.prototype.findOne = function findOne(request, callback) {
            return this.rpcCall(findOne, $root.aha.Addd, $root.aha.ADdRes, request, callback);
        }, "name", { value: "FindOne" });

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof aha.aha_service
         * @instance
         * @param {aha.IAddd} request Addd message or plain object
         * @returns {Promise<aha.ADdRes>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link aha.aha_service#login}.
         * @memberof aha.aha_service
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {aha.UserInfo} [response] UserInfo
         */

        /**
         * Calls Login.
         * @function login
         * @memberof aha.aha_service
         * @instance
         * @param {aha.ILoginReq} request LoginReq message or plain object
         * @param {aha.aha_service.LoginCallback} callback Node-style callback called with the error, if any, and UserInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(aha_service.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.aha.LoginReq, $root.aha.UserInfo, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof aha.aha_service
         * @instance
         * @param {aha.ILoginReq} request LoginReq message or plain object
         * @returns {Promise<aha.UserInfo>} Promise
         * @variation 2
         */

        return aha_service;
    })();

    aha.Addd = (function() {

        /**
         * Properties of an Addd.
         * @memberof aha
         * @interface IAddd
         * @property {number|null} [id] Addd id
         */

        /**
         * Constructs a new Addd.
         * @memberof aha
         * @classdesc Represents an Addd.
         * @implements IAddd
         * @constructor
         * @param {aha.IAddd=} [properties] Properties to set
         */
        function Addd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Addd id.
         * @member {number} id
         * @memberof aha.Addd
         * @instance
         */
        Addd.prototype.id = 0;

        /**
         * Creates a new Addd instance using the specified properties.
         * @function create
         * @memberof aha.Addd
         * @static
         * @param {aha.IAddd=} [properties] Properties to set
         * @returns {aha.Addd} Addd instance
         */
        Addd.create = function create(properties) {
            return new Addd(properties);
        };

        /**
         * Encodes the specified Addd message. Does not implicitly {@link aha.Addd.verify|verify} messages.
         * @function encode
         * @memberof aha.Addd
         * @static
         * @param {aha.IAddd} message Addd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Addd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified Addd message, length delimited. Does not implicitly {@link aha.Addd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aha.Addd
         * @static
         * @param {aha.IAddd} message Addd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Addd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Addd message from the specified reader or buffer.
         * @function decode
         * @memberof aha.Addd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aha.Addd} Addd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Addd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aha.Addd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Addd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aha.Addd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aha.Addd} Addd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Addd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Addd message.
         * @function verify
         * @memberof aha.Addd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Addd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates an Addd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aha.Addd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aha.Addd} Addd
         */
        Addd.fromObject = function fromObject(object) {
            if (object instanceof $root.aha.Addd)
                return object;
            var message = new $root.aha.Addd();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from an Addd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aha.Addd
         * @static
         * @param {aha.Addd} message Addd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Addd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this Addd to JSON.
         * @function toJSON
         * @memberof aha.Addd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Addd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Addd;
    })();

    aha.ADdRes = (function() {

        /**
         * Properties of a ADdRes.
         * @memberof aha
         * @interface IADdRes
         * @property {number|null} [id] ADdRes id
         * @property {string|null} [name] ADdRes name
         */

        /**
         * Constructs a new ADdRes.
         * @memberof aha
         * @classdesc Represents a ADdRes.
         * @implements IADdRes
         * @constructor
         * @param {aha.IADdRes=} [properties] Properties to set
         */
        function ADdRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ADdRes id.
         * @member {number} id
         * @memberof aha.ADdRes
         * @instance
         */
        ADdRes.prototype.id = 0;

        /**
         * ADdRes name.
         * @member {string} name
         * @memberof aha.ADdRes
         * @instance
         */
        ADdRes.prototype.name = "";

        /**
         * Creates a new ADdRes instance using the specified properties.
         * @function create
         * @memberof aha.ADdRes
         * @static
         * @param {aha.IADdRes=} [properties] Properties to set
         * @returns {aha.ADdRes} ADdRes instance
         */
        ADdRes.create = function create(properties) {
            return new ADdRes(properties);
        };

        /**
         * Encodes the specified ADdRes message. Does not implicitly {@link aha.ADdRes.verify|verify} messages.
         * @function encode
         * @memberof aha.ADdRes
         * @static
         * @param {aha.IADdRes} message ADdRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADdRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ADdRes message, length delimited. Does not implicitly {@link aha.ADdRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aha.ADdRes
         * @static
         * @param {aha.IADdRes} message ADdRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADdRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ADdRes message from the specified reader or buffer.
         * @function decode
         * @memberof aha.ADdRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aha.ADdRes} ADdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADdRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aha.ADdRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ADdRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aha.ADdRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aha.ADdRes} ADdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADdRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ADdRes message.
         * @function verify
         * @memberof aha.ADdRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ADdRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a ADdRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aha.ADdRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aha.ADdRes} ADdRes
         */
        ADdRes.fromObject = function fromObject(object) {
            if (object instanceof $root.aha.ADdRes)
                return object;
            var message = new $root.aha.ADdRes();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ADdRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aha.ADdRes
         * @static
         * @param {aha.ADdRes} message ADdRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ADdRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ADdRes to JSON.
         * @function toJSON
         * @memberof aha.ADdRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ADdRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ADdRes;
    })();

    aha.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof aha
         * @interface IUserInfo
         * @property {string|null} [name] UserInfo name
         * @property {number|null} [age] UserInfo age
         * @property {number|null} [mony] UserInfo mony
         */

        /**
         * Constructs a new UserInfo.
         * @memberof aha
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {aha.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo name.
         * @member {string|null|undefined} name
         * @memberof aha.UserInfo
         * @instance
         */
        UserInfo.prototype.name = null;

        /**
         * UserInfo age.
         * @member {number|null|undefined} age
         * @memberof aha.UserInfo
         * @instance
         */
        UserInfo.prototype.age = null;

        /**
         * UserInfo mony.
         * @member {number|null|undefined} mony
         * @memberof aha.UserInfo
         * @instance
         */
        UserInfo.prototype.mony = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * UserInfo _name.
         * @member {"name"|undefined} _name
         * @memberof aha.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _age.
         * @member {"age"|undefined} _age
         * @memberof aha.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_age", {
            get: $util.oneOfGetter($oneOfFields = ["age"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _mony.
         * @member {"mony"|undefined} _mony
         * @memberof aha.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_mony", {
            get: $util.oneOfGetter($oneOfFields = ["mony"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof aha.UserInfo
         * @static
         * @param {aha.IUserInfo=} [properties] Properties to set
         * @returns {aha.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link aha.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof aha.UserInfo
         * @static
         * @param {aha.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.age);
            if (message.mony != null && Object.hasOwnProperty.call(message, "mony"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mony);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link aha.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aha.UserInfo
         * @static
         * @param {aha.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof aha.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aha.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aha.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.age = reader.int32();
                    break;
                case 3:
                    message.mony = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aha.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aha.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof aha.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.name != null && message.hasOwnProperty("name")) {
                properties._name = 1;
                if (!$util.isString(message.name))
                    return "name: string expected";
            }
            if (message.age != null && message.hasOwnProperty("age")) {
                properties._age = 1;
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            }
            if (message.mony != null && message.hasOwnProperty("mony")) {
                properties._mony = 1;
                if (!$util.isInteger(message.mony))
                    return "mony: integer expected";
            }
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aha.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aha.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.aha.UserInfo)
                return object;
            var message = new $root.aha.UserInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.age != null)
                message.age = object.age | 0;
            if (object.mony != null)
                message.mony = object.mony | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aha.UserInfo
         * @static
         * @param {aha.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.name != null && message.hasOwnProperty("name")) {
                object.name = message.name;
                if (options.oneofs)
                    object._name = "name";
            }
            if (message.age != null && message.hasOwnProperty("age")) {
                object.age = message.age;
                if (options.oneofs)
                    object._age = "age";
            }
            if (message.mony != null && message.hasOwnProperty("mony")) {
                object.mony = message.mony;
                if (options.oneofs)
                    object._mony = "mony";
            }
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof aha.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    aha.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof aha
         * @interface ILoginReq
         * @property {aha.IUserInfo|null} [userInfo] LoginReq userInfo
         * @property {Array.<string>|null} [token] LoginReq token
         */

        /**
         * Constructs a new LoginReq.
         * @memberof aha
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {aha.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            this.token = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq userInfo.
         * @member {aha.IUserInfo|null|undefined} userInfo
         * @memberof aha.LoginReq
         * @instance
         */
        LoginReq.prototype.userInfo = null;

        /**
         * LoginReq token.
         * @member {Array.<string>} token
         * @memberof aha.LoginReq
         * @instance
         */
        LoginReq.prototype.token = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * LoginReq _userInfo.
         * @member {"userInfo"|undefined} _userInfo
         * @memberof aha.LoginReq
         * @instance
         */
        Object.defineProperty(LoginReq.prototype, "_userInfo", {
            get: $util.oneOfGetter($oneOfFields = ["userInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof aha.LoginReq
         * @static
         * @param {aha.ILoginReq=} [properties] Properties to set
         * @returns {aha.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link aha.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof aha.LoginReq
         * @static
         * @param {aha.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.aha.UserInfo.encode(message.userInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.token != null && message.token.length)
                for (var i = 0; i < message.token.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token[i]);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link aha.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aha.LoginReq
         * @static
         * @param {aha.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof aha.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aha.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aha.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userInfo = $root.aha.UserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.token && message.token.length))
                        message.token = [];
                    message.token.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aha.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aha.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof aha.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                properties._userInfo = 1;
                {
                    var error = $root.aha.UserInfo.verify(message.userInfo);
                    if (error)
                        return "userInfo." + error;
                }
            }
            if (message.token != null && message.hasOwnProperty("token")) {
                if (!Array.isArray(message.token))
                    return "token: array expected";
                for (var i = 0; i < message.token.length; ++i)
                    if (!$util.isString(message.token[i]))
                        return "token: string[] expected";
            }
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aha.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aha.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.aha.LoginReq)
                return object;
            var message = new $root.aha.LoginReq();
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".aha.LoginReq.userInfo: object expected");
                message.userInfo = $root.aha.UserInfo.fromObject(object.userInfo);
            }
            if (object.token) {
                if (!Array.isArray(object.token))
                    throw TypeError(".aha.LoginReq.token: array expected");
                message.token = [];
                for (var i = 0; i < object.token.length; ++i)
                    message.token[i] = String(object.token[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aha.LoginReq
         * @static
         * @param {aha.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.token = [];
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                object.userInfo = $root.aha.UserInfo.toObject(message.userInfo, options);
                if (options.oneofs)
                    object._userInfo = "userInfo";
            }
            if (message.token && message.token.length) {
                object.token = [];
                for (var j = 0; j < message.token.length; ++j)
                    object.token[j] = message.token[j];
            }
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof aha.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    aha.LoginRsp = (function() {

        /**
         * Properties of a LoginRsp.
         * @memberof aha
         * @interface ILoginRsp
         */

        /**
         * Constructs a new LoginRsp.
         * @memberof aha
         * @classdesc Represents a LoginRsp.
         * @implements ILoginRsp
         * @constructor
         * @param {aha.ILoginRsp=} [properties] Properties to set
         */
        function LoginRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LoginRsp instance using the specified properties.
         * @function create
         * @memberof aha.LoginRsp
         * @static
         * @param {aha.ILoginRsp=} [properties] Properties to set
         * @returns {aha.LoginRsp} LoginRsp instance
         */
        LoginRsp.create = function create(properties) {
            return new LoginRsp(properties);
        };

        /**
         * Encodes the specified LoginRsp message. Does not implicitly {@link aha.LoginRsp.verify|verify} messages.
         * @function encode
         * @memberof aha.LoginRsp
         * @static
         * @param {aha.ILoginRsp} message LoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LoginRsp message, length delimited. Does not implicitly {@link aha.LoginRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aha.LoginRsp
         * @static
         * @param {aha.ILoginRsp} message LoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRsp message from the specified reader or buffer.
         * @function decode
         * @memberof aha.LoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aha.LoginRsp} LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aha.LoginRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aha.LoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aha.LoginRsp} LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRsp message.
         * @function verify
         * @memberof aha.LoginRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LoginRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aha.LoginRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aha.LoginRsp} LoginRsp
         */
        LoginRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.aha.LoginRsp)
                return object;
            return new $root.aha.LoginRsp();
        };

        /**
         * Creates a plain object from a LoginRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aha.LoginRsp
         * @static
         * @param {aha.LoginRsp} message LoginRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRsp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LoginRsp to JSON.
         * @function toJSON
         * @memberof aha.LoginRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRsp;
    })();

    return aha;
})();

$root.hero = (function() {

    /**
     * Namespace hero.
     * @exports hero
     * @namespace
     */
    var hero = {};

    hero.hero_service = (function() {

        /**
         * Constructs a new hero_service service.
         * @memberof hero
         * @classdesc Represents a hero_service
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function hero_service(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (hero_service.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = hero_service;

        /**
         * Creates new hero_service service using the specified rpc implementation.
         * @function create
         * @memberof hero.hero_service
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {hero_service} RPC service. Useful where requests and/or responses are streamed.
         */
        hero_service.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link hero.hero_service#test}.
         * @memberof hero.hero_service
         * @typedef TestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {hero.Hero} [response] Hero
         */

        /**
         * Calls Test.
         * @function test
         * @memberof hero.hero_service
         * @instance
         * @param {hero.Itest} request test message or plain object
         * @param {hero.hero_service.TestCallback} callback Node-style callback called with the error, if any, and Hero
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(hero_service.prototype.test = function test(request, callback) {
            return this.rpcCall(test, $root.hero.test, $root.hero.Hero, request, callback);
        }, "name", { value: "Test" });

        /**
         * Calls Test.
         * @function test
         * @memberof hero.hero_service
         * @instance
         * @param {hero.Itest} request test message or plain object
         * @returns {Promise<hero.Hero>} Promise
         * @variation 2
         */

        return hero_service;
    })();

    hero.HeroById = (function() {

        /**
         * Properties of a HeroById.
         * @memberof hero
         * @interface IHeroById
         * @property {number|null} [id] HeroById id
         */

        /**
         * Constructs a new HeroById.
         * @memberof hero
         * @classdesc Represents a HeroById.
         * @implements IHeroById
         * @constructor
         * @param {hero.IHeroById=} [properties] Properties to set
         */
        function HeroById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroById id.
         * @member {number} id
         * @memberof hero.HeroById
         * @instance
         */
        HeroById.prototype.id = 0;

        /**
         * Creates a new HeroById instance using the specified properties.
         * @function create
         * @memberof hero.HeroById
         * @static
         * @param {hero.IHeroById=} [properties] Properties to set
         * @returns {hero.HeroById} HeroById instance
         */
        HeroById.create = function create(properties) {
            return new HeroById(properties);
        };

        /**
         * Encodes the specified HeroById message. Does not implicitly {@link hero.HeroById.verify|verify} messages.
         * @function encode
         * @memberof hero.HeroById
         * @static
         * @param {hero.IHeroById} message HeroById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified HeroById message, length delimited. Does not implicitly {@link hero.HeroById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hero.HeroById
         * @static
         * @param {hero.IHeroById} message HeroById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroById message from the specified reader or buffer.
         * @function decode
         * @memberof hero.HeroById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hero.HeroById} HeroById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hero.HeroById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hero.HeroById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hero.HeroById} HeroById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroById message.
         * @function verify
         * @memberof hero.HeroById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a HeroById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hero.HeroById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hero.HeroById} HeroById
         */
        HeroById.fromObject = function fromObject(object) {
            if (object instanceof $root.hero.HeroById)
                return object;
            var message = new $root.hero.HeroById();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hero.HeroById
         * @static
         * @param {hero.HeroById} message HeroById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this HeroById to JSON.
         * @function toJSON
         * @memberof hero.HeroById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        HeroById.Userinfo = (function() {

            /**
             * Properties of a Userinfo.
             * @memberof hero.HeroById
             * @interface IUserinfo
             * @property {string|null} [name] Userinfo name
             * @property {number|null} [age] Userinfo age
             */

            /**
             * Constructs a new Userinfo.
             * @memberof hero.HeroById
             * @classdesc Represents a Userinfo.
             * @implements IUserinfo
             * @constructor
             * @param {hero.HeroById.IUserinfo=} [properties] Properties to set
             */
            function Userinfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Userinfo name.
             * @member {string} name
             * @memberof hero.HeroById.Userinfo
             * @instance
             */
            Userinfo.prototype.name = "";

            /**
             * Userinfo age.
             * @member {number} age
             * @memberof hero.HeroById.Userinfo
             * @instance
             */
            Userinfo.prototype.age = 0;

            /**
             * Creates a new Userinfo instance using the specified properties.
             * @function create
             * @memberof hero.HeroById.Userinfo
             * @static
             * @param {hero.HeroById.IUserinfo=} [properties] Properties to set
             * @returns {hero.HeroById.Userinfo} Userinfo instance
             */
            Userinfo.create = function create(properties) {
                return new Userinfo(properties);
            };

            /**
             * Encodes the specified Userinfo message. Does not implicitly {@link hero.HeroById.Userinfo.verify|verify} messages.
             * @function encode
             * @memberof hero.HeroById.Userinfo
             * @static
             * @param {hero.HeroById.IUserinfo} message Userinfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Userinfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.age);
                return writer;
            };

            /**
             * Encodes the specified Userinfo message, length delimited. Does not implicitly {@link hero.HeroById.Userinfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof hero.HeroById.Userinfo
             * @static
             * @param {hero.HeroById.IUserinfo} message Userinfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Userinfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Userinfo message from the specified reader or buffer.
             * @function decode
             * @memberof hero.HeroById.Userinfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {hero.HeroById.Userinfo} Userinfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Userinfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hero.HeroById.Userinfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.age = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Userinfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof hero.HeroById.Userinfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {hero.HeroById.Userinfo} Userinfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Userinfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Userinfo message.
             * @function verify
             * @memberof hero.HeroById.Userinfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Userinfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.age != null && message.hasOwnProperty("age"))
                    if (!$util.isInteger(message.age))
                        return "age: integer expected";
                return null;
            };

            /**
             * Creates a Userinfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof hero.HeroById.Userinfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {hero.HeroById.Userinfo} Userinfo
             */
            Userinfo.fromObject = function fromObject(object) {
                if (object instanceof $root.hero.HeroById.Userinfo)
                    return object;
                var message = new $root.hero.HeroById.Userinfo();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.age != null)
                    message.age = object.age | 0;
                return message;
            };

            /**
             * Creates a plain object from a Userinfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof hero.HeroById.Userinfo
             * @static
             * @param {hero.HeroById.Userinfo} message Userinfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Userinfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.age = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.age != null && message.hasOwnProperty("age"))
                    object.age = message.age;
                return object;
            };

            /**
             * Converts this Userinfo to JSON.
             * @function toJSON
             * @memberof hero.HeroById.Userinfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Userinfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Userinfo;
        })();

        return HeroById;
    })();

    hero.test = (function() {

        /**
         * Properties of a test.
         * @memberof hero
         * @interface Itest
         * @property {hero.HeroById.IUserinfo|null} [info] test info
         */

        /**
         * Constructs a new test.
         * @memberof hero
         * @classdesc Represents a test.
         * @implements Itest
         * @constructor
         * @param {hero.Itest=} [properties] Properties to set
         */
        function test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * test info.
         * @member {hero.HeroById.IUserinfo|null|undefined} info
         * @memberof hero.test
         * @instance
         */
        test.prototype.info = null;

        /**
         * Creates a new test instance using the specified properties.
         * @function create
         * @memberof hero.test
         * @static
         * @param {hero.Itest=} [properties] Properties to set
         * @returns {hero.test} test instance
         */
        test.create = function create(properties) {
            return new test(properties);
        };

        /**
         * Encodes the specified test message. Does not implicitly {@link hero.test.verify|verify} messages.
         * @function encode
         * @memberof hero.test
         * @static
         * @param {hero.Itest} message test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                $root.hero.HeroById.Userinfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified test message, length delimited. Does not implicitly {@link hero.test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hero.test
         * @static
         * @param {hero.Itest} message test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a test message from the specified reader or buffer.
         * @function decode
         * @memberof hero.test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hero.test} test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hero.test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = $root.hero.HeroById.Userinfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hero.test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hero.test} test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a test message.
         * @function verify
         * @memberof hero.test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.hero.HeroById.Userinfo.verify(message.info);
                if (error)
                    return "info." + error;
            }
            return null;
        };

        /**
         * Creates a test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hero.test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hero.test} test
         */
        test.fromObject = function fromObject(object) {
            if (object instanceof $root.hero.test)
                return object;
            var message = new $root.hero.test();
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".hero.test.info: object expected");
                message.info = $root.hero.HeroById.Userinfo.fromObject(object.info);
            }
            return message;
        };

        /**
         * Creates a plain object from a test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hero.test
         * @static
         * @param {hero.test} message test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.info = null;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.hero.HeroById.Userinfo.toObject(message.info, options);
            return object;
        };

        /**
         * Converts this test to JSON.
         * @function toJSON
         * @memberof hero.test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return test;
    })();

    hero.Hero = (function() {

        /**
         * Properties of a Hero.
         * @memberof hero
         * @interface IHero
         * @property {number|null} [id] Hero id
         * @property {string|null} [name] Hero name
         */

        /**
         * Constructs a new Hero.
         * @memberof hero
         * @classdesc Represents a Hero.
         * @implements IHero
         * @constructor
         * @param {hero.IHero=} [properties] Properties to set
         */
        function Hero(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Hero id.
         * @member {number} id
         * @memberof hero.Hero
         * @instance
         */
        Hero.prototype.id = 0;

        /**
         * Hero name.
         * @member {string} name
         * @memberof hero.Hero
         * @instance
         */
        Hero.prototype.name = "";

        /**
         * Creates a new Hero instance using the specified properties.
         * @function create
         * @memberof hero.Hero
         * @static
         * @param {hero.IHero=} [properties] Properties to set
         * @returns {hero.Hero} Hero instance
         */
        Hero.create = function create(properties) {
            return new Hero(properties);
        };

        /**
         * Encodes the specified Hero message. Does not implicitly {@link hero.Hero.verify|verify} messages.
         * @function encode
         * @memberof hero.Hero
         * @static
         * @param {hero.IHero} message Hero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hero.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link hero.Hero.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hero.Hero
         * @static
         * @param {hero.IHero} message Hero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hero.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @function decode
         * @memberof hero.Hero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hero.Hero} Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hero.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hero.Hero();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Hero message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hero.Hero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hero.Hero} Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hero.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Hero message.
         * @function verify
         * @memberof hero.Hero
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Hero.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Hero message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hero.Hero
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hero.Hero} Hero
         */
        Hero.fromObject = function fromObject(object) {
            if (object instanceof $root.hero.Hero)
                return object;
            var message = new $root.hero.Hero();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Hero message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hero.Hero
         * @static
         * @param {hero.Hero} message Hero
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Hero.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Hero to JSON.
         * @function toJSON
         * @memberof hero.Hero
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hero.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Hero;
    })();

    return hero;
})();

module.exports = $root;
