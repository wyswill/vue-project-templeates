/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.hero = (function() {

    /**
     * Namespace hero.
     * @exports hero
     * @namespace
     */
    var hero = {};

    hero.HeroesService = (function() {

        /**
         * Constructs a new HeroesService service.
         * @memberof hero
         * @classdesc Represents a HeroesService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function HeroesService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (HeroesService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = HeroesService;

        /**
         * Creates new HeroesService service using the specified rpc implementation.
         * @function create
         * @memberof hero.HeroesService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {HeroesService} RPC service. Useful where requests and/or responses are streamed.
         */
        HeroesService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link hero.HeroesService#findOne}.
         * @memberof hero.HeroesService
         * @typedef FindOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {hero.Hero} [response] Hero
         */

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof hero.HeroesService
         * @instance
         * @param {hero.IHeroById} request HeroById message or plain object
         * @param {hero.HeroesService.FindOneCallback} callback Node-style callback called with the error, if any, and Hero
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HeroesService.prototype.findOne = function findOne(request, callback) {
            return this.rpcCall(findOne, $root.hero.HeroById, $root.hero.Hero, request, callback);
        }, "name", { value: "FindOne" });

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof hero.HeroesService
         * @instance
         * @param {hero.IHeroById} request HeroById message or plain object
         * @returns {Promise<hero.Hero>} Promise
         * @variation 2
         */

        return HeroesService;
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

        return HeroById;
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
