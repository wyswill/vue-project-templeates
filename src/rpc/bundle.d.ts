import * as $protobuf from "protobufjs";
/** Namespace hero. */
export namespace hero {

    /** Represents a HeroesService */
    class HeroesService extends $protobuf.rpc.Service {

        /**
         * Constructs a new HeroesService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new HeroesService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HeroesService;

        /**
         * Calls FindOne.
         * @param request HeroById message or plain object
         * @param callback Node-style callback called with the error, if any, and Hero
         */
        public findOne(request: hero.IHeroById, callback: hero.HeroesService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request HeroById message or plain object
         * @returns Promise
         */
        public findOne(request: hero.IHeroById): Promise<hero.Hero>;
    }

    namespace HeroesService {

        /**
         * Callback as used by {@link hero.HeroesService#findOne}.
         * @param error Error, if any
         * @param [response] Hero
         */
        type FindOneCallback = (error: (Error|null), response?: hero.Hero) => void;
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
