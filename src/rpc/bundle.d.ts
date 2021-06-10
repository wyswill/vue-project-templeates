import * as $protobuf from "protobufjs";
/** Namespace aha. */
export namespace aha {

    /** Represents an aha_service */
    class aha_service extends $protobuf.rpc.Service {

        /**
         * Constructs a new aha_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new aha_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): aha_service;

        /**
         * Calls FindOne.
         * @param request Addd message or plain object
         * @param callback Node-style callback called with the error, if any, and ADdRes
         */
        public findOne(request: aha.IAddd, callback: aha.aha_service.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request Addd message or plain object
         * @returns Promise
         */
        public findOne(request: aha.IAddd): Promise<aha.ADdRes>;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UserInfo
         */
        public login(request: aha.ILoginReq, callback: aha.aha_service.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         * @returns Promise
         */
        public login(request: aha.ILoginReq): Promise<aha.UserInfo>;
    }

    namespace aha_service {

        /**
         * Callback as used by {@link aha.aha_service#findOne}.
         * @param error Error, if any
         * @param [response] ADdRes
         */
        type FindOneCallback = (error: (Error|null), response?: aha.ADdRes) => void;

        /**
         * Callback as used by {@link aha.aha_service#login}.
         * @param error Error, if any
         * @param [response] UserInfo
         */
        type LoginCallback = (error: (Error|null), response?: aha.UserInfo) => void;
    }

    /** Properties of an Addd. */
    interface IAddd {

        /** Addd id */
        id?: (number|null);
    }

    /** Represents an Addd. */
    class Addd implements IAddd {

        /**
         * Constructs a new Addd.
         * @param [properties] Properties to set
         */
        constructor(properties?: aha.IAddd);

        /** Addd id. */
        public id: number;

        /**
         * Creates a new Addd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Addd instance
         */
        public static create(properties?: aha.IAddd): aha.Addd;

        /**
         * Encodes the specified Addd message. Does not implicitly {@link aha.Addd.verify|verify} messages.
         * @param message Addd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: aha.IAddd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Addd message, length delimited. Does not implicitly {@link aha.Addd.verify|verify} messages.
         * @param message Addd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: aha.IAddd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Addd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Addd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): aha.Addd;

        /**
         * Decodes an Addd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Addd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): aha.Addd;

        /**
         * Verifies an Addd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Addd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Addd
         */
        public static fromObject(object: { [k: string]: any }): aha.Addd;

        /**
         * Creates a plain object from an Addd message. Also converts values to other types if specified.
         * @param message Addd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: aha.Addd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Addd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ADdRes. */
    interface IADdRes {

        /** ADdRes id */
        id?: (number|null);

        /** ADdRes name */
        name?: (string|null);
    }

    /** Represents a ADdRes. */
    class ADdRes implements IADdRes {

        /**
         * Constructs a new ADdRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: aha.IADdRes);

        /** ADdRes id. */
        public id: number;

        /** ADdRes name. */
        public name: string;

        /**
         * Creates a new ADdRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADdRes instance
         */
        public static create(properties?: aha.IADdRes): aha.ADdRes;

        /**
         * Encodes the specified ADdRes message. Does not implicitly {@link aha.ADdRes.verify|verify} messages.
         * @param message ADdRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: aha.IADdRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADdRes message, length delimited. Does not implicitly {@link aha.ADdRes.verify|verify} messages.
         * @param message ADdRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: aha.IADdRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADdRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): aha.ADdRes;

        /**
         * Decodes a ADdRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): aha.ADdRes;

        /**
         * Verifies a ADdRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADdRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADdRes
         */
        public static fromObject(object: { [k: string]: any }): aha.ADdRes;

        /**
         * Creates a plain object from a ADdRes message. Also converts values to other types if specified.
         * @param message ADdRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: aha.ADdRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADdRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo name */
        name?: (string|null);

        /** UserInfo age */
        age?: (number|null);

        /** UserInfo mony */
        mony?: (number|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: aha.IUserInfo);

        /** UserInfo name. */
        public name?: (string|null);

        /** UserInfo age. */
        public age?: (number|null);

        /** UserInfo mony. */
        public mony?: (number|null);

        /** UserInfo _name. */
        public _name?: "name";

        /** UserInfo _age. */
        public _age?: "age";

        /** UserInfo _mony. */
        public _mony?: "mony";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: aha.IUserInfo): aha.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link aha.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: aha.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link aha.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: aha.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): aha.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): aha.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): aha.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: aha.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq userInfo */
        userInfo?: (aha.IUserInfo|null);

        /** LoginReq token */
        token?: (string[]|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: aha.ILoginReq);

        /** LoginReq userInfo. */
        public userInfo?: (aha.IUserInfo|null);

        /** LoginReq token. */
        public token: string[];

        /** LoginReq _userInfo. */
        public _userInfo?: "userInfo";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: aha.ILoginReq): aha.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link aha.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: aha.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link aha.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: aha.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): aha.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): aha.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): aha.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: aha.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRsp. */
    interface ILoginRsp {
    }

    /** Represents a LoginRsp. */
    class LoginRsp implements ILoginRsp {

        /**
         * Constructs a new LoginRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: aha.ILoginRsp);

        /**
         * Creates a new LoginRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRsp instance
         */
        public static create(properties?: aha.ILoginRsp): aha.LoginRsp;

        /**
         * Encodes the specified LoginRsp message. Does not implicitly {@link aha.LoginRsp.verify|verify} messages.
         * @param message LoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: aha.ILoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRsp message, length delimited. Does not implicitly {@link aha.LoginRsp.verify|verify} messages.
         * @param message LoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: aha.ILoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): aha.LoginRsp;

        /**
         * Decodes a LoginRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): aha.LoginRsp;

        /**
         * Verifies a LoginRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRsp
         */
        public static fromObject(object: { [k: string]: any }): aha.LoginRsp;

        /**
         * Creates a plain object from a LoginRsp message. Also converts values to other types if specified.
         * @param message LoginRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: aha.LoginRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace hero. */
export namespace hero {

    /** Represents a hero_service */
    class hero_service extends $protobuf.rpc.Service {

        /**
         * Constructs a new hero_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new hero_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): hero_service;

        /**
         * Calls Test.
         * @param request test message or plain object
         * @param callback Node-style callback called with the error, if any, and Hero
         */
        public test(request: hero.Itest, callback: hero.hero_service.TestCallback): void;

        /**
         * Calls Test.
         * @param request test message or plain object
         * @returns Promise
         */
        public test(request: hero.Itest): Promise<hero.Hero>;
    }

    namespace hero_service {

        /**
         * Callback as used by {@link hero.hero_service#test}.
         * @param error Error, if any
         * @param [response] Hero
         */
        type TestCallback = (error: (Error|null), response?: hero.Hero) => void;
    }

    /** Properties of a HeroById. */
    interface IHeroById {

        /** HeroById id */
        id?: (number|null);
    }

    /** Represents a HeroById. */
    class HeroById implements IHeroById {

        /**
         * Constructs a new HeroById.
         * @param [properties] Properties to set
         */
        constructor(properties?: hero.IHeroById);

        /** HeroById id. */
        public id: number;

        /**
         * Creates a new HeroById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroById instance
         */
        public static create(properties?: hero.IHeroById): hero.HeroById;

        /**
         * Encodes the specified HeroById message. Does not implicitly {@link hero.HeroById.verify|verify} messages.
         * @param message HeroById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hero.IHeroById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroById message, length delimited. Does not implicitly {@link hero.HeroById.verify|verify} messages.
         * @param message HeroById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hero.IHeroById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.HeroById;

        /**
         * Decodes a HeroById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.HeroById;

        /**
         * Verifies a HeroById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroById
         */
        public static fromObject(object: { [k: string]: any }): hero.HeroById;

        /**
         * Creates a plain object from a HeroById message. Also converts values to other types if specified.
         * @param message HeroById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hero.HeroById, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace HeroById {

        /** Properties of a Userinfo. */
        interface IUserinfo {

            /** Userinfo name */
            name?: (string|null);

            /** Userinfo age */
            age?: (number|null);
        }

        /** Represents a Userinfo. */
        class Userinfo implements IUserinfo {

            /**
             * Constructs a new Userinfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: hero.HeroById.IUserinfo);

            /** Userinfo name. */
            public name: string;

            /** Userinfo age. */
            public age: number;

            /**
             * Creates a new Userinfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Userinfo instance
             */
            public static create(properties?: hero.HeroById.IUserinfo): hero.HeroById.Userinfo;

            /**
             * Encodes the specified Userinfo message. Does not implicitly {@link hero.HeroById.Userinfo.verify|verify} messages.
             * @param message Userinfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: hero.HeroById.IUserinfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Userinfo message, length delimited. Does not implicitly {@link hero.HeroById.Userinfo.verify|verify} messages.
             * @param message Userinfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: hero.HeroById.IUserinfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Userinfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Userinfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.HeroById.Userinfo;

            /**
             * Decodes a Userinfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Userinfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.HeroById.Userinfo;

            /**
             * Verifies a Userinfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Userinfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Userinfo
             */
            public static fromObject(object: { [k: string]: any }): hero.HeroById.Userinfo;

            /**
             * Creates a plain object from a Userinfo message. Also converts values to other types if specified.
             * @param message Userinfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: hero.HeroById.Userinfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Userinfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a test. */
    interface Itest {

        /** test info */
        info?: (hero.HeroById.IUserinfo|null);
    }

    /** Represents a test. */
    class test implements Itest {

        /**
         * Constructs a new test.
         * @param [properties] Properties to set
         */
        constructor(properties?: hero.Itest);

        /** test info. */
        public info?: (hero.HeroById.IUserinfo|null);

        /**
         * Creates a new test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns test instance
         */
        public static create(properties?: hero.Itest): hero.test;

        /**
         * Encodes the specified test message. Does not implicitly {@link hero.test.verify|verify} messages.
         * @param message test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hero.Itest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified test message, length delimited. Does not implicitly {@link hero.test.verify|verify} messages.
         * @param message test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hero.Itest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.test;

        /**
         * Decodes a test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.test;

        /**
         * Verifies a test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns test
         */
        public static fromObject(object: { [k: string]: any }): hero.test;

        /**
         * Creates a plain object from a test message. Also converts values to other types if specified.
         * @param message test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hero.test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hero. */
    interface IHero {

        /** Hero id */
        id?: (number|null);

        /** Hero name */
        name?: (string|null);
    }

    /** Represents a Hero. */
    class Hero implements IHero {

        /**
         * Constructs a new Hero.
         * @param [properties] Properties to set
         */
        constructor(properties?: hero.IHero);

        /** Hero id. */
        public id: number;

        /** Hero name. */
        public name: string;

        /**
         * Creates a new Hero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hero instance
         */
        public static create(properties?: hero.IHero): hero.Hero;

        /**
         * Encodes the specified Hero message. Does not implicitly {@link hero.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hero.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link hero.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hero.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.Hero;

        /**
         * Decodes a Hero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.Hero;

        /**
         * Verifies a Hero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hero message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hero
         */
        public static fromObject(object: { [k: string]: any }): hero.Hero;

        /**
         * Creates a plain object from a Hero message. Also converts values to other types if specified.
         * @param message Hero
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hero.Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hero to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
