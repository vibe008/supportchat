
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model StaffPresence
 * 
 */
export type StaffPresence = $Result.DefaultSelection<Prisma.$StaffPresencePayload>
/**
 * Model ChatQueue
 * 
 */
export type ChatQueue = $Result.DefaultSelection<Prisma.$ChatQueuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChatStatus: {
  OPEN: 'OPEN',
  ASSIGNED: 'ASSIGNED',
  TICKET_CREATED: 'TICKET_CREATED',
  IN_PROGRESS: 'IN_PROGRESS',
  CLOSED: 'CLOSED'
};

export type ChatStatus = (typeof ChatStatus)[keyof typeof ChatStatus]

}

export type ChatStatus = $Enums.ChatStatus

export const ChatStatus: typeof $Enums.ChatStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChatSessions
 * const chatSessions = await prisma.chatSession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ChatSessions
   * const chatSessions = await prisma.chatSession.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffPresence`: Exposes CRUD operations for the **StaffPresence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffPresences
    * const staffPresences = await prisma.staffPresence.findMany()
    * ```
    */
  get staffPresence(): Prisma.StaffPresenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatQueue`: Exposes CRUD operations for the **ChatQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatQueues
    * const chatQueues = await prisma.chatQueue.findMany()
    * ```
    */
  get chatQueue(): Prisma.ChatQueueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ChatSession: 'ChatSession',
    Message: 'Message',
    StaffPresence: 'StaffPresence',
    ChatQueue: 'ChatQueue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chatSession" | "message" | "staffPresence" | "chatQueue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      StaffPresence: {
        payload: Prisma.$StaffPresencePayload<ExtArgs>
        fields: Prisma.StaffPresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffPresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffPresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>
          }
          findFirst: {
            args: Prisma.StaffPresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffPresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>
          }
          findMany: {
            args: Prisma.StaffPresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>[]
          }
          create: {
            args: Prisma.StaffPresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>
          }
          createMany: {
            args: Prisma.StaffPresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffPresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>[]
          }
          delete: {
            args: Prisma.StaffPresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>
          }
          update: {
            args: Prisma.StaffPresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>
          }
          deleteMany: {
            args: Prisma.StaffPresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffPresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffPresenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>[]
          }
          upsert: {
            args: Prisma.StaffPresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPresencePayload>
          }
          aggregate: {
            args: Prisma.StaffPresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffPresence>
          }
          groupBy: {
            args: Prisma.StaffPresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffPresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffPresenceCountArgs<ExtArgs>
            result: $Utils.Optional<StaffPresenceCountAggregateOutputType> | number
          }
        }
      }
      ChatQueue: {
        payload: Prisma.$ChatQueuePayload<ExtArgs>
        fields: Prisma.ChatQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>
          }
          findFirst: {
            args: Prisma.ChatQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>
          }
          findMany: {
            args: Prisma.ChatQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>[]
          }
          create: {
            args: Prisma.ChatQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>
          }
          createMany: {
            args: Prisma.ChatQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>[]
          }
          delete: {
            args: Prisma.ChatQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>
          }
          update: {
            args: Prisma.ChatQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>
          }
          deleteMany: {
            args: Prisma.ChatQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>[]
          }
          upsert: {
            args: Prisma.ChatQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatQueuePayload>
          }
          aggregate: {
            args: Prisma.ChatQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatQueue>
          }
          groupBy: {
            args: Prisma.ChatQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatQueueCountArgs<ExtArgs>
            result: $Utils.Optional<ChatQueueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chatSession?: ChatSessionOmit
    message?: MessageOmit
    staffPresence?: StaffPresenceOmit
    chatQueue?: ChatQueueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    agentId: string | null
    ticketId: string | null
    status: $Enums.ChatStatus | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userName: string | null
    userEmail: string | null
    userCode: string | null
    userType: string | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    agentId: string | null
    ticketId: string | null
    status: $Enums.ChatStatus | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userName: string | null
    userEmail: string | null
    userCode: string | null
    userType: string | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    userId: number
    agentId: number
    ticketId: number
    status: number
    assignedAt: number
    createdAt: number
    updatedAt: number
    userName: number
    userEmail: number
    userCode: number
    userType: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    userId?: true
    agentId?: true
    ticketId?: true
    status?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
    userName?: true
    userEmail?: true
    userCode?: true
    userType?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    agentId?: true
    ticketId?: true
    status?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
    userName?: true
    userEmail?: true
    userCode?: true
    userType?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    userId?: true
    agentId?: true
    ticketId?: true
    status?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
    userName?: true
    userEmail?: true
    userCode?: true
    userType?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    userId: string
    agentId: string | null
    ticketId: string | null
    status: $Enums.ChatStatus
    assignedAt: Date | null
    createdAt: Date
    updatedAt: Date | null
    userName: string | null
    userEmail: string | null
    userCode: string | null
    userType: string | null
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    agentId?: boolean
    ticketId?: boolean
    status?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userName?: boolean
    userEmail?: boolean
    userCode?: boolean
    userType?: boolean
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    chatQueue?: boolean | ChatSession$chatQueueArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    agentId?: boolean
    ticketId?: boolean
    status?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userName?: boolean
    userEmail?: boolean
    userCode?: boolean
    userType?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    agentId?: boolean
    ticketId?: boolean
    status?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userName?: boolean
    userEmail?: boolean
    userCode?: boolean
    userType?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    agentId?: boolean
    ticketId?: boolean
    status?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userName?: boolean
    userEmail?: boolean
    userCode?: boolean
    userType?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "agentId" | "ticketId" | "status" | "assignedAt" | "createdAt" | "updatedAt" | "userName" | "userEmail" | "userCode" | "userType", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    chatQueue?: boolean | ChatSession$chatQueueArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      chatQueue: Prisma.$ChatQueuePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      agentId: string | null
      ticketId: string | null
      status: $Enums.ChatStatus
      assignedAt: Date | null
      createdAt: Date
      updatedAt: Date | null
      userName: string | null
      userEmail: string | null
      userCode: string | null
      userType: string | null
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatQueue<T extends ChatSession$chatQueueArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$chatQueueArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly userId: FieldRef<"ChatSession", 'String'>
    readonly agentId: FieldRef<"ChatSession", 'String'>
    readonly ticketId: FieldRef<"ChatSession", 'String'>
    readonly status: FieldRef<"ChatSession", 'ChatStatus'>
    readonly assignedAt: FieldRef<"ChatSession", 'DateTime'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatSession", 'DateTime'>
    readonly userName: FieldRef<"ChatSession", 'String'>
    readonly userEmail: FieldRef<"ChatSession", 'String'>
    readonly userCode: FieldRef<"ChatSession", 'String'>
    readonly userType: FieldRef<"ChatSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * ChatSession.chatQueue
   */
  export type ChatSession$chatQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    where?: ChatQueueWhereInput
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    chatSessionId: string | null
    senderId: string | null
    senderType: string | null
    message: string | null
    type: string | null
    status: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    chatSessionId: string | null
    senderId: string | null
    senderType: string | null
    message: string | null
    type: string | null
    status: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatSessionId: number
    senderId: number
    senderType: number
    message: number
    type: number
    status: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    chatSessionId?: true
    senderId?: true
    senderType?: true
    message?: true
    type?: true
    status?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatSessionId?: true
    senderId?: true
    senderType?: true
    message?: true
    type?: true
    status?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatSessionId?: true
    senderId?: true
    senderType?: true
    message?: true
    type?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    chatSessionId: string
    senderId: string
    senderType: string
    message: string
    type: string
    status: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatSessionId?: boolean
    senderId?: boolean
    senderType?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatSessionId?: boolean
    senderId?: boolean
    senderType?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatSessionId?: boolean
    senderId?: boolean
    senderType?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    chatSessionId?: boolean
    senderId?: boolean
    senderType?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatSessionId" | "senderId" | "senderType" | "message" | "type" | "status" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chatSession: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatSessionId: string
      senderId: string
      senderType: string
      message: string
      type: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatSession<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly chatSessionId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly senderType: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly type: FieldRef<"Message", 'String'>
    readonly status: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model StaffPresence
   */

  export type AggregateStaffPresence = {
    _count: StaffPresenceCountAggregateOutputType | null
    _min: StaffPresenceMinAggregateOutputType | null
    _max: StaffPresenceMaxAggregateOutputType | null
  }

  export type StaffPresenceMinAggregateOutputType = {
    id: string | null
    staffId: string | null
    email: string | null
    name: string | null
    socketId: string | null
    status: string | null
    lastSeen: Date | null
    updatedAt: Date | null
    role: string | null
    isSuperAdmin: boolean | null
    departmentId: string | null
    subDepartmentId: string | null
  }

  export type StaffPresenceMaxAggregateOutputType = {
    id: string | null
    staffId: string | null
    email: string | null
    name: string | null
    socketId: string | null
    status: string | null
    lastSeen: Date | null
    updatedAt: Date | null
    role: string | null
    isSuperAdmin: boolean | null
    departmentId: string | null
    subDepartmentId: string | null
  }

  export type StaffPresenceCountAggregateOutputType = {
    id: number
    staffId: number
    email: number
    name: number
    socketId: number
    status: number
    lastSeen: number
    updatedAt: number
    role: number
    permissions: number
    isSuperAdmin: number
    departmentId: number
    subDepartmentId: number
    _all: number
  }


  export type StaffPresenceMinAggregateInputType = {
    id?: true
    staffId?: true
    email?: true
    name?: true
    socketId?: true
    status?: true
    lastSeen?: true
    updatedAt?: true
    role?: true
    isSuperAdmin?: true
    departmentId?: true
    subDepartmentId?: true
  }

  export type StaffPresenceMaxAggregateInputType = {
    id?: true
    staffId?: true
    email?: true
    name?: true
    socketId?: true
    status?: true
    lastSeen?: true
    updatedAt?: true
    role?: true
    isSuperAdmin?: true
    departmentId?: true
    subDepartmentId?: true
  }

  export type StaffPresenceCountAggregateInputType = {
    id?: true
    staffId?: true
    email?: true
    name?: true
    socketId?: true
    status?: true
    lastSeen?: true
    updatedAt?: true
    role?: true
    permissions?: true
    isSuperAdmin?: true
    departmentId?: true
    subDepartmentId?: true
    _all?: true
  }

  export type StaffPresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffPresence to aggregate.
     */
    where?: StaffPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPresences to fetch.
     */
    orderBy?: StaffPresenceOrderByWithRelationInput | StaffPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffPresences
    **/
    _count?: true | StaffPresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffPresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffPresenceMaxAggregateInputType
  }

  export type GetStaffPresenceAggregateType<T extends StaffPresenceAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffPresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffPresence[P]>
      : GetScalarType<T[P], AggregateStaffPresence[P]>
  }




  export type StaffPresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffPresenceWhereInput
    orderBy?: StaffPresenceOrderByWithAggregationInput | StaffPresenceOrderByWithAggregationInput[]
    by: StaffPresenceScalarFieldEnum[] | StaffPresenceScalarFieldEnum
    having?: StaffPresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffPresenceCountAggregateInputType | true
    _min?: StaffPresenceMinAggregateInputType
    _max?: StaffPresenceMaxAggregateInputType
  }

  export type StaffPresenceGroupByOutputType = {
    id: string
    staffId: string
    email: string
    name: string
    socketId: string | null
    status: string
    lastSeen: Date
    updatedAt: Date
    role: string
    permissions: string[]
    isSuperAdmin: boolean
    departmentId: string | null
    subDepartmentId: string | null
    _count: StaffPresenceCountAggregateOutputType | null
    _min: StaffPresenceMinAggregateOutputType | null
    _max: StaffPresenceMaxAggregateOutputType | null
  }

  type GetStaffPresenceGroupByPayload<T extends StaffPresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffPresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffPresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffPresenceGroupByOutputType[P]>
            : GetScalarType<T[P], StaffPresenceGroupByOutputType[P]>
        }
      >
    >


  export type StaffPresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    email?: boolean
    name?: boolean
    socketId?: boolean
    status?: boolean
    lastSeen?: boolean
    updatedAt?: boolean
    role?: boolean
    permissions?: boolean
    isSuperAdmin?: boolean
    departmentId?: boolean
    subDepartmentId?: boolean
  }, ExtArgs["result"]["staffPresence"]>

  export type StaffPresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    email?: boolean
    name?: boolean
    socketId?: boolean
    status?: boolean
    lastSeen?: boolean
    updatedAt?: boolean
    role?: boolean
    permissions?: boolean
    isSuperAdmin?: boolean
    departmentId?: boolean
    subDepartmentId?: boolean
  }, ExtArgs["result"]["staffPresence"]>

  export type StaffPresenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    email?: boolean
    name?: boolean
    socketId?: boolean
    status?: boolean
    lastSeen?: boolean
    updatedAt?: boolean
    role?: boolean
    permissions?: boolean
    isSuperAdmin?: boolean
    departmentId?: boolean
    subDepartmentId?: boolean
  }, ExtArgs["result"]["staffPresence"]>

  export type StaffPresenceSelectScalar = {
    id?: boolean
    staffId?: boolean
    email?: boolean
    name?: boolean
    socketId?: boolean
    status?: boolean
    lastSeen?: boolean
    updatedAt?: boolean
    role?: boolean
    permissions?: boolean
    isSuperAdmin?: boolean
    departmentId?: boolean
    subDepartmentId?: boolean
  }

  export type StaffPresenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "email" | "name" | "socketId" | "status" | "lastSeen" | "updatedAt" | "role" | "permissions" | "isSuperAdmin" | "departmentId" | "subDepartmentId", ExtArgs["result"]["staffPresence"]>

  export type $StaffPresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffPresence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staffId: string
      email: string
      name: string
      socketId: string | null
      status: string
      lastSeen: Date
      updatedAt: Date
      role: string
      permissions: string[]
      isSuperAdmin: boolean
      departmentId: string | null
      subDepartmentId: string | null
    }, ExtArgs["result"]["staffPresence"]>
    composites: {}
  }

  type StaffPresenceGetPayload<S extends boolean | null | undefined | StaffPresenceDefaultArgs> = $Result.GetResult<Prisma.$StaffPresencePayload, S>

  type StaffPresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffPresenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffPresenceCountAggregateInputType | true
    }

  export interface StaffPresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffPresence'], meta: { name: 'StaffPresence' } }
    /**
     * Find zero or one StaffPresence that matches the filter.
     * @param {StaffPresenceFindUniqueArgs} args - Arguments to find a StaffPresence
     * @example
     * // Get one StaffPresence
     * const staffPresence = await prisma.staffPresence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffPresenceFindUniqueArgs>(args: SelectSubset<T, StaffPresenceFindUniqueArgs<ExtArgs>>): Prisma__StaffPresenceClient<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffPresence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffPresenceFindUniqueOrThrowArgs} args - Arguments to find a StaffPresence
     * @example
     * // Get one StaffPresence
     * const staffPresence = await prisma.staffPresence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffPresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffPresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffPresenceClient<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffPresence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPresenceFindFirstArgs} args - Arguments to find a StaffPresence
     * @example
     * // Get one StaffPresence
     * const staffPresence = await prisma.staffPresence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffPresenceFindFirstArgs>(args?: SelectSubset<T, StaffPresenceFindFirstArgs<ExtArgs>>): Prisma__StaffPresenceClient<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffPresence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPresenceFindFirstOrThrowArgs} args - Arguments to find a StaffPresence
     * @example
     * // Get one StaffPresence
     * const staffPresence = await prisma.staffPresence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffPresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffPresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffPresenceClient<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffPresences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffPresences
     * const staffPresences = await prisma.staffPresence.findMany()
     * 
     * // Get first 10 StaffPresences
     * const staffPresences = await prisma.staffPresence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffPresenceWithIdOnly = await prisma.staffPresence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffPresenceFindManyArgs>(args?: SelectSubset<T, StaffPresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffPresence.
     * @param {StaffPresenceCreateArgs} args - Arguments to create a StaffPresence.
     * @example
     * // Create one StaffPresence
     * const StaffPresence = await prisma.staffPresence.create({
     *   data: {
     *     // ... data to create a StaffPresence
     *   }
     * })
     * 
     */
    create<T extends StaffPresenceCreateArgs>(args: SelectSubset<T, StaffPresenceCreateArgs<ExtArgs>>): Prisma__StaffPresenceClient<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffPresences.
     * @param {StaffPresenceCreateManyArgs} args - Arguments to create many StaffPresences.
     * @example
     * // Create many StaffPresences
     * const staffPresence = await prisma.staffPresence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffPresenceCreateManyArgs>(args?: SelectSubset<T, StaffPresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffPresences and returns the data saved in the database.
     * @param {StaffPresenceCreateManyAndReturnArgs} args - Arguments to create many StaffPresences.
     * @example
     * // Create many StaffPresences
     * const staffPresence = await prisma.staffPresence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffPresences and only return the `id`
     * const staffPresenceWithIdOnly = await prisma.staffPresence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffPresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffPresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffPresence.
     * @param {StaffPresenceDeleteArgs} args - Arguments to delete one StaffPresence.
     * @example
     * // Delete one StaffPresence
     * const StaffPresence = await prisma.staffPresence.delete({
     *   where: {
     *     // ... filter to delete one StaffPresence
     *   }
     * })
     * 
     */
    delete<T extends StaffPresenceDeleteArgs>(args: SelectSubset<T, StaffPresenceDeleteArgs<ExtArgs>>): Prisma__StaffPresenceClient<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffPresence.
     * @param {StaffPresenceUpdateArgs} args - Arguments to update one StaffPresence.
     * @example
     * // Update one StaffPresence
     * const staffPresence = await prisma.staffPresence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffPresenceUpdateArgs>(args: SelectSubset<T, StaffPresenceUpdateArgs<ExtArgs>>): Prisma__StaffPresenceClient<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffPresences.
     * @param {StaffPresenceDeleteManyArgs} args - Arguments to filter StaffPresences to delete.
     * @example
     * // Delete a few StaffPresences
     * const { count } = await prisma.staffPresence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffPresenceDeleteManyArgs>(args?: SelectSubset<T, StaffPresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffPresences
     * const staffPresence = await prisma.staffPresence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffPresenceUpdateManyArgs>(args: SelectSubset<T, StaffPresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffPresences and returns the data updated in the database.
     * @param {StaffPresenceUpdateManyAndReturnArgs} args - Arguments to update many StaffPresences.
     * @example
     * // Update many StaffPresences
     * const staffPresence = await prisma.staffPresence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffPresences and only return the `id`
     * const staffPresenceWithIdOnly = await prisma.staffPresence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffPresenceUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffPresenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffPresence.
     * @param {StaffPresenceUpsertArgs} args - Arguments to update or create a StaffPresence.
     * @example
     * // Update or create a StaffPresence
     * const staffPresence = await prisma.staffPresence.upsert({
     *   create: {
     *     // ... data to create a StaffPresence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffPresence we want to update
     *   }
     * })
     */
    upsert<T extends StaffPresenceUpsertArgs>(args: SelectSubset<T, StaffPresenceUpsertArgs<ExtArgs>>): Prisma__StaffPresenceClient<$Result.GetResult<Prisma.$StaffPresencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPresenceCountArgs} args - Arguments to filter StaffPresences to count.
     * @example
     * // Count the number of StaffPresences
     * const count = await prisma.staffPresence.count({
     *   where: {
     *     // ... the filter for the StaffPresences we want to count
     *   }
     * })
    **/
    count<T extends StaffPresenceCountArgs>(
      args?: Subset<T, StaffPresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffPresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffPresenceAggregateArgs>(args: Subset<T, StaffPresenceAggregateArgs>): Prisma.PrismaPromise<GetStaffPresenceAggregateType<T>>

    /**
     * Group by StaffPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffPresenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffPresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffPresenceGroupByArgs['orderBy'] }
        : { orderBy?: StaffPresenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffPresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffPresence model
   */
  readonly fields: StaffPresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffPresence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffPresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffPresence model
   */
  interface StaffPresenceFieldRefs {
    readonly id: FieldRef<"StaffPresence", 'String'>
    readonly staffId: FieldRef<"StaffPresence", 'String'>
    readonly email: FieldRef<"StaffPresence", 'String'>
    readonly name: FieldRef<"StaffPresence", 'String'>
    readonly socketId: FieldRef<"StaffPresence", 'String'>
    readonly status: FieldRef<"StaffPresence", 'String'>
    readonly lastSeen: FieldRef<"StaffPresence", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffPresence", 'DateTime'>
    readonly role: FieldRef<"StaffPresence", 'String'>
    readonly permissions: FieldRef<"StaffPresence", 'String[]'>
    readonly isSuperAdmin: FieldRef<"StaffPresence", 'Boolean'>
    readonly departmentId: FieldRef<"StaffPresence", 'String'>
    readonly subDepartmentId: FieldRef<"StaffPresence", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StaffPresence findUnique
   */
  export type StaffPresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * Filter, which StaffPresence to fetch.
     */
    where: StaffPresenceWhereUniqueInput
  }

  /**
   * StaffPresence findUniqueOrThrow
   */
  export type StaffPresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * Filter, which StaffPresence to fetch.
     */
    where: StaffPresenceWhereUniqueInput
  }

  /**
   * StaffPresence findFirst
   */
  export type StaffPresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * Filter, which StaffPresence to fetch.
     */
    where?: StaffPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPresences to fetch.
     */
    orderBy?: StaffPresenceOrderByWithRelationInput | StaffPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffPresences.
     */
    cursor?: StaffPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPresences.
     */
    distinct?: StaffPresenceScalarFieldEnum | StaffPresenceScalarFieldEnum[]
  }

  /**
   * StaffPresence findFirstOrThrow
   */
  export type StaffPresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * Filter, which StaffPresence to fetch.
     */
    where?: StaffPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPresences to fetch.
     */
    orderBy?: StaffPresenceOrderByWithRelationInput | StaffPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffPresences.
     */
    cursor?: StaffPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffPresences.
     */
    distinct?: StaffPresenceScalarFieldEnum | StaffPresenceScalarFieldEnum[]
  }

  /**
   * StaffPresence findMany
   */
  export type StaffPresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * Filter, which StaffPresences to fetch.
     */
    where?: StaffPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffPresences to fetch.
     */
    orderBy?: StaffPresenceOrderByWithRelationInput | StaffPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffPresences.
     */
    cursor?: StaffPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffPresences.
     */
    skip?: number
    distinct?: StaffPresenceScalarFieldEnum | StaffPresenceScalarFieldEnum[]
  }

  /**
   * StaffPresence create
   */
  export type StaffPresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * The data needed to create a StaffPresence.
     */
    data: XOR<StaffPresenceCreateInput, StaffPresenceUncheckedCreateInput>
  }

  /**
   * StaffPresence createMany
   */
  export type StaffPresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffPresences.
     */
    data: StaffPresenceCreateManyInput | StaffPresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffPresence createManyAndReturn
   */
  export type StaffPresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * The data used to create many StaffPresences.
     */
    data: StaffPresenceCreateManyInput | StaffPresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffPresence update
   */
  export type StaffPresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * The data needed to update a StaffPresence.
     */
    data: XOR<StaffPresenceUpdateInput, StaffPresenceUncheckedUpdateInput>
    /**
     * Choose, which StaffPresence to update.
     */
    where: StaffPresenceWhereUniqueInput
  }

  /**
   * StaffPresence updateMany
   */
  export type StaffPresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffPresences.
     */
    data: XOR<StaffPresenceUpdateManyMutationInput, StaffPresenceUncheckedUpdateManyInput>
    /**
     * Filter which StaffPresences to update
     */
    where?: StaffPresenceWhereInput
    /**
     * Limit how many StaffPresences to update.
     */
    limit?: number
  }

  /**
   * StaffPresence updateManyAndReturn
   */
  export type StaffPresenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * The data used to update StaffPresences.
     */
    data: XOR<StaffPresenceUpdateManyMutationInput, StaffPresenceUncheckedUpdateManyInput>
    /**
     * Filter which StaffPresences to update
     */
    where?: StaffPresenceWhereInput
    /**
     * Limit how many StaffPresences to update.
     */
    limit?: number
  }

  /**
   * StaffPresence upsert
   */
  export type StaffPresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * The filter to search for the StaffPresence to update in case it exists.
     */
    where: StaffPresenceWhereUniqueInput
    /**
     * In case the StaffPresence found by the `where` argument doesn't exist, create a new StaffPresence with this data.
     */
    create: XOR<StaffPresenceCreateInput, StaffPresenceUncheckedCreateInput>
    /**
     * In case the StaffPresence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffPresenceUpdateInput, StaffPresenceUncheckedUpdateInput>
  }

  /**
   * StaffPresence delete
   */
  export type StaffPresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
    /**
     * Filter which StaffPresence to delete.
     */
    where: StaffPresenceWhereUniqueInput
  }

  /**
   * StaffPresence deleteMany
   */
  export type StaffPresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffPresences to delete
     */
    where?: StaffPresenceWhereInput
    /**
     * Limit how many StaffPresences to delete.
     */
    limit?: number
  }

  /**
   * StaffPresence without action
   */
  export type StaffPresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffPresence
     */
    select?: StaffPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffPresence
     */
    omit?: StaffPresenceOmit<ExtArgs> | null
  }


  /**
   * Model ChatQueue
   */

  export type AggregateChatQueue = {
    _count: ChatQueueCountAggregateOutputType | null
    _avg: ChatQueueAvgAggregateOutputType | null
    _sum: ChatQueueSumAggregateOutputType | null
    _min: ChatQueueMinAggregateOutputType | null
    _max: ChatQueueMaxAggregateOutputType | null
  }

  export type ChatQueueAvgAggregateOutputType = {
    priority: number | null
  }

  export type ChatQueueSumAggregateOutputType = {
    priority: number | null
  }

  export type ChatQueueMinAggregateOutputType = {
    id: string | null
    chatSessionId: string | null
    priority: number | null
    assignedTo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatQueueMaxAggregateOutputType = {
    id: string | null
    chatSessionId: string | null
    priority: number | null
    assignedTo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatQueueCountAggregateOutputType = {
    id: number
    chatSessionId: number
    priority: number
    assignedTo: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatQueueAvgAggregateInputType = {
    priority?: true
  }

  export type ChatQueueSumAggregateInputType = {
    priority?: true
  }

  export type ChatQueueMinAggregateInputType = {
    id?: true
    chatSessionId?: true
    priority?: true
    assignedTo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatQueueMaxAggregateInputType = {
    id?: true
    chatSessionId?: true
    priority?: true
    assignedTo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatQueueCountAggregateInputType = {
    id?: true
    chatSessionId?: true
    priority?: true
    assignedTo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatQueue to aggregate.
     */
    where?: ChatQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatQueues to fetch.
     */
    orderBy?: ChatQueueOrderByWithRelationInput | ChatQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatQueues
    **/
    _count?: true | ChatQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatQueueMaxAggregateInputType
  }

  export type GetChatQueueAggregateType<T extends ChatQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateChatQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatQueue[P]>
      : GetScalarType<T[P], AggregateChatQueue[P]>
  }




  export type ChatQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatQueueWhereInput
    orderBy?: ChatQueueOrderByWithAggregationInput | ChatQueueOrderByWithAggregationInput[]
    by: ChatQueueScalarFieldEnum[] | ChatQueueScalarFieldEnum
    having?: ChatQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatQueueCountAggregateInputType | true
    _avg?: ChatQueueAvgAggregateInputType
    _sum?: ChatQueueSumAggregateInputType
    _min?: ChatQueueMinAggregateInputType
    _max?: ChatQueueMaxAggregateInputType
  }

  export type ChatQueueGroupByOutputType = {
    id: string
    chatSessionId: string
    priority: number
    assignedTo: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ChatQueueCountAggregateOutputType | null
    _avg: ChatQueueAvgAggregateOutputType | null
    _sum: ChatQueueSumAggregateOutputType | null
    _min: ChatQueueMinAggregateOutputType | null
    _max: ChatQueueMaxAggregateOutputType | null
  }

  type GetChatQueueGroupByPayload<T extends ChatQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatQueueGroupByOutputType[P]>
            : GetScalarType<T[P], ChatQueueGroupByOutputType[P]>
        }
      >
    >


  export type ChatQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatSessionId?: boolean
    priority?: boolean
    assignedTo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatQueue"]>

  export type ChatQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatSessionId?: boolean
    priority?: boolean
    assignedTo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatQueue"]>

  export type ChatQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatSessionId?: boolean
    priority?: boolean
    assignedTo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatQueue"]>

  export type ChatQueueSelectScalar = {
    id?: boolean
    chatSessionId?: boolean
    priority?: boolean
    assignedTo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatSessionId" | "priority" | "assignedTo" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["chatQueue"]>
  export type ChatQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatQueueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $ChatQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatQueue"
    objects: {
      chatSession: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatSessionId: string
      priority: number
      assignedTo: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatQueue"]>
    composites: {}
  }

  type ChatQueueGetPayload<S extends boolean | null | undefined | ChatQueueDefaultArgs> = $Result.GetResult<Prisma.$ChatQueuePayload, S>

  type ChatQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatQueueCountAggregateInputType | true
    }

  export interface ChatQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatQueue'], meta: { name: 'ChatQueue' } }
    /**
     * Find zero or one ChatQueue that matches the filter.
     * @param {ChatQueueFindUniqueArgs} args - Arguments to find a ChatQueue
     * @example
     * // Get one ChatQueue
     * const chatQueue = await prisma.chatQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatQueueFindUniqueArgs>(args: SelectSubset<T, ChatQueueFindUniqueArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatQueueFindUniqueOrThrowArgs} args - Arguments to find a ChatQueue
     * @example
     * // Get one ChatQueue
     * const chatQueue = await prisma.chatQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatQueueFindFirstArgs} args - Arguments to find a ChatQueue
     * @example
     * // Get one ChatQueue
     * const chatQueue = await prisma.chatQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatQueueFindFirstArgs>(args?: SelectSubset<T, ChatQueueFindFirstArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatQueueFindFirstOrThrowArgs} args - Arguments to find a ChatQueue
     * @example
     * // Get one ChatQueue
     * const chatQueue = await prisma.chatQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatQueues
     * const chatQueues = await prisma.chatQueue.findMany()
     * 
     * // Get first 10 ChatQueues
     * const chatQueues = await prisma.chatQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatQueueWithIdOnly = await prisma.chatQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatQueueFindManyArgs>(args?: SelectSubset<T, ChatQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatQueue.
     * @param {ChatQueueCreateArgs} args - Arguments to create a ChatQueue.
     * @example
     * // Create one ChatQueue
     * const ChatQueue = await prisma.chatQueue.create({
     *   data: {
     *     // ... data to create a ChatQueue
     *   }
     * })
     * 
     */
    create<T extends ChatQueueCreateArgs>(args: SelectSubset<T, ChatQueueCreateArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatQueues.
     * @param {ChatQueueCreateManyArgs} args - Arguments to create many ChatQueues.
     * @example
     * // Create many ChatQueues
     * const chatQueue = await prisma.chatQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatQueueCreateManyArgs>(args?: SelectSubset<T, ChatQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatQueues and returns the data saved in the database.
     * @param {ChatQueueCreateManyAndReturnArgs} args - Arguments to create many ChatQueues.
     * @example
     * // Create many ChatQueues
     * const chatQueue = await prisma.chatQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatQueues and only return the `id`
     * const chatQueueWithIdOnly = await prisma.chatQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatQueue.
     * @param {ChatQueueDeleteArgs} args - Arguments to delete one ChatQueue.
     * @example
     * // Delete one ChatQueue
     * const ChatQueue = await prisma.chatQueue.delete({
     *   where: {
     *     // ... filter to delete one ChatQueue
     *   }
     * })
     * 
     */
    delete<T extends ChatQueueDeleteArgs>(args: SelectSubset<T, ChatQueueDeleteArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatQueue.
     * @param {ChatQueueUpdateArgs} args - Arguments to update one ChatQueue.
     * @example
     * // Update one ChatQueue
     * const chatQueue = await prisma.chatQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatQueueUpdateArgs>(args: SelectSubset<T, ChatQueueUpdateArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatQueues.
     * @param {ChatQueueDeleteManyArgs} args - Arguments to filter ChatQueues to delete.
     * @example
     * // Delete a few ChatQueues
     * const { count } = await prisma.chatQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatQueueDeleteManyArgs>(args?: SelectSubset<T, ChatQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatQueues
     * const chatQueue = await prisma.chatQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatQueueUpdateManyArgs>(args: SelectSubset<T, ChatQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatQueues and returns the data updated in the database.
     * @param {ChatQueueUpdateManyAndReturnArgs} args - Arguments to update many ChatQueues.
     * @example
     * // Update many ChatQueues
     * const chatQueue = await prisma.chatQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatQueues and only return the `id`
     * const chatQueueWithIdOnly = await prisma.chatQueue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatQueue.
     * @param {ChatQueueUpsertArgs} args - Arguments to update or create a ChatQueue.
     * @example
     * // Update or create a ChatQueue
     * const chatQueue = await prisma.chatQueue.upsert({
     *   create: {
     *     // ... data to create a ChatQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatQueue we want to update
     *   }
     * })
     */
    upsert<T extends ChatQueueUpsertArgs>(args: SelectSubset<T, ChatQueueUpsertArgs<ExtArgs>>): Prisma__ChatQueueClient<$Result.GetResult<Prisma.$ChatQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatQueueCountArgs} args - Arguments to filter ChatQueues to count.
     * @example
     * // Count the number of ChatQueues
     * const count = await prisma.chatQueue.count({
     *   where: {
     *     // ... the filter for the ChatQueues we want to count
     *   }
     * })
    **/
    count<T extends ChatQueueCountArgs>(
      args?: Subset<T, ChatQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatQueueAggregateArgs>(args: Subset<T, ChatQueueAggregateArgs>): Prisma.PrismaPromise<GetChatQueueAggregateType<T>>

    /**
     * Group by ChatQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatQueueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatQueueGroupByArgs['orderBy'] }
        : { orderBy?: ChatQueueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatQueue model
   */
  readonly fields: ChatQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatSession<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatQueue model
   */
  interface ChatQueueFieldRefs {
    readonly id: FieldRef<"ChatQueue", 'String'>
    readonly chatSessionId: FieldRef<"ChatQueue", 'String'>
    readonly priority: FieldRef<"ChatQueue", 'Int'>
    readonly assignedTo: FieldRef<"ChatQueue", 'String'>
    readonly status: FieldRef<"ChatQueue", 'String'>
    readonly createdAt: FieldRef<"ChatQueue", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatQueue findUnique
   */
  export type ChatQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * Filter, which ChatQueue to fetch.
     */
    where: ChatQueueWhereUniqueInput
  }

  /**
   * ChatQueue findUniqueOrThrow
   */
  export type ChatQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * Filter, which ChatQueue to fetch.
     */
    where: ChatQueueWhereUniqueInput
  }

  /**
   * ChatQueue findFirst
   */
  export type ChatQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * Filter, which ChatQueue to fetch.
     */
    where?: ChatQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatQueues to fetch.
     */
    orderBy?: ChatQueueOrderByWithRelationInput | ChatQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatQueues.
     */
    cursor?: ChatQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatQueues.
     */
    distinct?: ChatQueueScalarFieldEnum | ChatQueueScalarFieldEnum[]
  }

  /**
   * ChatQueue findFirstOrThrow
   */
  export type ChatQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * Filter, which ChatQueue to fetch.
     */
    where?: ChatQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatQueues to fetch.
     */
    orderBy?: ChatQueueOrderByWithRelationInput | ChatQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatQueues.
     */
    cursor?: ChatQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatQueues.
     */
    distinct?: ChatQueueScalarFieldEnum | ChatQueueScalarFieldEnum[]
  }

  /**
   * ChatQueue findMany
   */
  export type ChatQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * Filter, which ChatQueues to fetch.
     */
    where?: ChatQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatQueues to fetch.
     */
    orderBy?: ChatQueueOrderByWithRelationInput | ChatQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatQueues.
     */
    cursor?: ChatQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatQueues.
     */
    skip?: number
    distinct?: ChatQueueScalarFieldEnum | ChatQueueScalarFieldEnum[]
  }

  /**
   * ChatQueue create
   */
  export type ChatQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatQueue.
     */
    data: XOR<ChatQueueCreateInput, ChatQueueUncheckedCreateInput>
  }

  /**
   * ChatQueue createMany
   */
  export type ChatQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatQueues.
     */
    data: ChatQueueCreateManyInput | ChatQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatQueue createManyAndReturn
   */
  export type ChatQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * The data used to create many ChatQueues.
     */
    data: ChatQueueCreateManyInput | ChatQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatQueue update
   */
  export type ChatQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatQueue.
     */
    data: XOR<ChatQueueUpdateInput, ChatQueueUncheckedUpdateInput>
    /**
     * Choose, which ChatQueue to update.
     */
    where: ChatQueueWhereUniqueInput
  }

  /**
   * ChatQueue updateMany
   */
  export type ChatQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatQueues.
     */
    data: XOR<ChatQueueUpdateManyMutationInput, ChatQueueUncheckedUpdateManyInput>
    /**
     * Filter which ChatQueues to update
     */
    where?: ChatQueueWhereInput
    /**
     * Limit how many ChatQueues to update.
     */
    limit?: number
  }

  /**
   * ChatQueue updateManyAndReturn
   */
  export type ChatQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * The data used to update ChatQueues.
     */
    data: XOR<ChatQueueUpdateManyMutationInput, ChatQueueUncheckedUpdateManyInput>
    /**
     * Filter which ChatQueues to update
     */
    where?: ChatQueueWhereInput
    /**
     * Limit how many ChatQueues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatQueue upsert
   */
  export type ChatQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatQueue to update in case it exists.
     */
    where: ChatQueueWhereUniqueInput
    /**
     * In case the ChatQueue found by the `where` argument doesn't exist, create a new ChatQueue with this data.
     */
    create: XOR<ChatQueueCreateInput, ChatQueueUncheckedCreateInput>
    /**
     * In case the ChatQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatQueueUpdateInput, ChatQueueUncheckedUpdateInput>
  }

  /**
   * ChatQueue delete
   */
  export type ChatQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
    /**
     * Filter which ChatQueue to delete.
     */
    where: ChatQueueWhereUniqueInput
  }

  /**
   * ChatQueue deleteMany
   */
  export type ChatQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatQueues to delete
     */
    where?: ChatQueueWhereInput
    /**
     * Limit how many ChatQueues to delete.
     */
    limit?: number
  }

  /**
   * ChatQueue without action
   */
  export type ChatQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatQueue
     */
    select?: ChatQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatQueue
     */
    omit?: ChatQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatQueueInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    agentId: 'agentId',
    ticketId: 'ticketId',
    status: 'status',
    assignedAt: 'assignedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userName: 'userName',
    userEmail: 'userEmail',
    userCode: 'userCode',
    userType: 'userType'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatSessionId: 'chatSessionId',
    senderId: 'senderId',
    senderType: 'senderType',
    message: 'message',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const StaffPresenceScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    email: 'email',
    name: 'name',
    socketId: 'socketId',
    status: 'status',
    lastSeen: 'lastSeen',
    updatedAt: 'updatedAt',
    role: 'role',
    permissions: 'permissions',
    isSuperAdmin: 'isSuperAdmin',
    departmentId: 'departmentId',
    subDepartmentId: 'subDepartmentId'
  };

  export type StaffPresenceScalarFieldEnum = (typeof StaffPresenceScalarFieldEnum)[keyof typeof StaffPresenceScalarFieldEnum]


  export const ChatQueueScalarFieldEnum: {
    id: 'id',
    chatSessionId: 'chatSessionId',
    priority: 'priority',
    assignedTo: 'assignedTo',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatQueueScalarFieldEnum = (typeof ChatQueueScalarFieldEnum)[keyof typeof ChatQueueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ChatStatus'
   */
  export type EnumChatStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatStatus'>
    


  /**
   * Reference to a field of type 'ChatStatus[]'
   */
  export type ListEnumChatStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    agentId?: StringNullableFilter<"ChatSession"> | string | null
    ticketId?: StringNullableFilter<"ChatSession"> | string | null
    status?: EnumChatStatusFilter<"ChatSession"> | $Enums.ChatStatus
    assignedAt?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    userName?: StringNullableFilter<"ChatSession"> | string | null
    userEmail?: StringNullableFilter<"ChatSession"> | string | null
    userCode?: StringNullableFilter<"ChatSession"> | string | null
    userType?: StringNullableFilter<"ChatSession"> | string | null
    messages?: MessageListRelationFilter
    chatQueue?: XOR<ChatQueueNullableScalarRelationFilter, ChatQueueWhereInput> | null
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    ticketId?: SortOrderInput | SortOrder
    status?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    userEmail?: SortOrderInput | SortOrder
    userCode?: SortOrderInput | SortOrder
    userType?: SortOrderInput | SortOrder
    messages?: MessageOrderByRelationAggregateInput
    chatQueue?: ChatQueueOrderByWithRelationInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    userId?: StringFilter<"ChatSession"> | string
    agentId?: StringNullableFilter<"ChatSession"> | string | null
    ticketId?: StringNullableFilter<"ChatSession"> | string | null
    status?: EnumChatStatusFilter<"ChatSession"> | $Enums.ChatStatus
    assignedAt?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ChatSession"> | Date | string | null
    userName?: StringNullableFilter<"ChatSession"> | string | null
    userEmail?: StringNullableFilter<"ChatSession"> | string | null
    userCode?: StringNullableFilter<"ChatSession"> | string | null
    userType?: StringNullableFilter<"ChatSession"> | string | null
    messages?: MessageListRelationFilter
    chatQueue?: XOR<ChatQueueNullableScalarRelationFilter, ChatQueueWhereInput> | null
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    ticketId?: SortOrderInput | SortOrder
    status?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    userEmail?: SortOrderInput | SortOrder
    userCode?: SortOrderInput | SortOrder
    userType?: SortOrderInput | SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    userId?: StringWithAggregatesFilter<"ChatSession"> | string
    agentId?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    ticketId?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    status?: EnumChatStatusWithAggregatesFilter<"ChatSession"> | $Enums.ChatStatus
    assignedAt?: DateTimeNullableWithAggregatesFilter<"ChatSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ChatSession"> | Date | string | null
    userName?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    userEmail?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    userCode?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    userType?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    chatSessionId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    senderType?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    type?: StringFilter<"Message"> | string
    status?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chatSession?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    chatSession?: ChatSessionOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatSessionId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    senderType?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    type?: StringFilter<"Message"> | string
    status?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chatSession?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    chatSessionId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    senderType?: StringWithAggregatesFilter<"Message"> | string
    message?: StringWithAggregatesFilter<"Message"> | string
    type?: StringWithAggregatesFilter<"Message"> | string
    status?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type StaffPresenceWhereInput = {
    AND?: StaffPresenceWhereInput | StaffPresenceWhereInput[]
    OR?: StaffPresenceWhereInput[]
    NOT?: StaffPresenceWhereInput | StaffPresenceWhereInput[]
    id?: StringFilter<"StaffPresence"> | string
    staffId?: StringFilter<"StaffPresence"> | string
    email?: StringFilter<"StaffPresence"> | string
    name?: StringFilter<"StaffPresence"> | string
    socketId?: StringNullableFilter<"StaffPresence"> | string | null
    status?: StringFilter<"StaffPresence"> | string
    lastSeen?: DateTimeFilter<"StaffPresence"> | Date | string
    updatedAt?: DateTimeFilter<"StaffPresence"> | Date | string
    role?: StringFilter<"StaffPresence"> | string
    permissions?: StringNullableListFilter<"StaffPresence">
    isSuperAdmin?: BoolFilter<"StaffPresence"> | boolean
    departmentId?: StringNullableFilter<"StaffPresence"> | string | null
    subDepartmentId?: StringNullableFilter<"StaffPresence"> | string | null
  }

  export type StaffPresenceOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    socketId?: SortOrderInput | SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isSuperAdmin?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    subDepartmentId?: SortOrderInput | SortOrder
  }

  export type StaffPresenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    staffId?: string
    AND?: StaffPresenceWhereInput | StaffPresenceWhereInput[]
    OR?: StaffPresenceWhereInput[]
    NOT?: StaffPresenceWhereInput | StaffPresenceWhereInput[]
    email?: StringFilter<"StaffPresence"> | string
    name?: StringFilter<"StaffPresence"> | string
    socketId?: StringNullableFilter<"StaffPresence"> | string | null
    status?: StringFilter<"StaffPresence"> | string
    lastSeen?: DateTimeFilter<"StaffPresence"> | Date | string
    updatedAt?: DateTimeFilter<"StaffPresence"> | Date | string
    role?: StringFilter<"StaffPresence"> | string
    permissions?: StringNullableListFilter<"StaffPresence">
    isSuperAdmin?: BoolFilter<"StaffPresence"> | boolean
    departmentId?: StringNullableFilter<"StaffPresence"> | string | null
    subDepartmentId?: StringNullableFilter<"StaffPresence"> | string | null
  }, "id" | "staffId">

  export type StaffPresenceOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    socketId?: SortOrderInput | SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isSuperAdmin?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    subDepartmentId?: SortOrderInput | SortOrder
    _count?: StaffPresenceCountOrderByAggregateInput
    _max?: StaffPresenceMaxOrderByAggregateInput
    _min?: StaffPresenceMinOrderByAggregateInput
  }

  export type StaffPresenceScalarWhereWithAggregatesInput = {
    AND?: StaffPresenceScalarWhereWithAggregatesInput | StaffPresenceScalarWhereWithAggregatesInput[]
    OR?: StaffPresenceScalarWhereWithAggregatesInput[]
    NOT?: StaffPresenceScalarWhereWithAggregatesInput | StaffPresenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffPresence"> | string
    staffId?: StringWithAggregatesFilter<"StaffPresence"> | string
    email?: StringWithAggregatesFilter<"StaffPresence"> | string
    name?: StringWithAggregatesFilter<"StaffPresence"> | string
    socketId?: StringNullableWithAggregatesFilter<"StaffPresence"> | string | null
    status?: StringWithAggregatesFilter<"StaffPresence"> | string
    lastSeen?: DateTimeWithAggregatesFilter<"StaffPresence"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffPresence"> | Date | string
    role?: StringWithAggregatesFilter<"StaffPresence"> | string
    permissions?: StringNullableListFilter<"StaffPresence">
    isSuperAdmin?: BoolWithAggregatesFilter<"StaffPresence"> | boolean
    departmentId?: StringNullableWithAggregatesFilter<"StaffPresence"> | string | null
    subDepartmentId?: StringNullableWithAggregatesFilter<"StaffPresence"> | string | null
  }

  export type ChatQueueWhereInput = {
    AND?: ChatQueueWhereInput | ChatQueueWhereInput[]
    OR?: ChatQueueWhereInput[]
    NOT?: ChatQueueWhereInput | ChatQueueWhereInput[]
    id?: StringFilter<"ChatQueue"> | string
    chatSessionId?: StringFilter<"ChatQueue"> | string
    priority?: IntFilter<"ChatQueue"> | number
    assignedTo?: StringNullableFilter<"ChatQueue"> | string | null
    status?: StringFilter<"ChatQueue"> | string
    createdAt?: DateTimeFilter<"ChatQueue"> | Date | string
    updatedAt?: DateTimeFilter<"ChatQueue"> | Date | string
    chatSession?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }

  export type ChatQueueOrderByWithRelationInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatSession?: ChatSessionOrderByWithRelationInput
  }

  export type ChatQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatSessionId?: string
    AND?: ChatQueueWhereInput | ChatQueueWhereInput[]
    OR?: ChatQueueWhereInput[]
    NOT?: ChatQueueWhereInput | ChatQueueWhereInput[]
    priority?: IntFilter<"ChatQueue"> | number
    assignedTo?: StringNullableFilter<"ChatQueue"> | string | null
    status?: StringFilter<"ChatQueue"> | string
    createdAt?: DateTimeFilter<"ChatQueue"> | Date | string
    updatedAt?: DateTimeFilter<"ChatQueue"> | Date | string
    chatSession?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }, "id" | "chatSessionId">

  export type ChatQueueOrderByWithAggregationInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatQueueCountOrderByAggregateInput
    _avg?: ChatQueueAvgOrderByAggregateInput
    _max?: ChatQueueMaxOrderByAggregateInput
    _min?: ChatQueueMinOrderByAggregateInput
    _sum?: ChatQueueSumOrderByAggregateInput
  }

  export type ChatQueueScalarWhereWithAggregatesInput = {
    AND?: ChatQueueScalarWhereWithAggregatesInput | ChatQueueScalarWhereWithAggregatesInput[]
    OR?: ChatQueueScalarWhereWithAggregatesInput[]
    NOT?: ChatQueueScalarWhereWithAggregatesInput | ChatQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatQueue"> | string
    chatSessionId?: StringWithAggregatesFilter<"ChatQueue"> | string
    priority?: IntWithAggregatesFilter<"ChatQueue"> | number
    assignedTo?: StringNullableWithAggregatesFilter<"ChatQueue"> | string | null
    status?: StringWithAggregatesFilter<"ChatQueue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatQueue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatQueue"> | Date | string
  }

  export type ChatSessionCreateInput = {
    id?: string
    userId: string
    agentId?: string | null
    ticketId?: string | null
    status?: $Enums.ChatStatus
    assignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userName?: string | null
    userEmail?: string | null
    userCode?: string | null
    userType?: string | null
    messages?: MessageCreateNestedManyWithoutChatSessionInput
    chatQueue?: ChatQueueCreateNestedOneWithoutChatSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    userId: string
    agentId?: string | null
    ticketId?: string | null
    status?: $Enums.ChatStatus
    assignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userName?: string | null
    userEmail?: string | null
    userCode?: string | null
    userType?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChatSessionInput
    chatQueue?: ChatQueueUncheckedCreateNestedOneWithoutChatSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutChatSessionNestedInput
    chatQueue?: ChatQueueUpdateOneWithoutChatSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutChatSessionNestedInput
    chatQueue?: ChatQueueUncheckedUpdateOneWithoutChatSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    userId: string
    agentId?: string | null
    ticketId?: string | null
    status?: $Enums.ChatStatus
    assignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userName?: string | null
    userEmail?: string | null
    userCode?: string | null
    userType?: string | null
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateInput = {
    id?: string
    senderId: string
    senderType: string
    message: string
    type?: string
    status?: string
    createdAt?: Date | string
    chatSession: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    chatSessionId: string
    senderId: string
    senderType: string
    message: string
    type?: string
    status?: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatSession?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatSessionId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    chatSessionId: string
    senderId: string
    senderType: string
    message: string
    type?: string
    status?: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatSessionId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffPresenceCreateInput = {
    id?: string
    staffId: string
    email: string
    name: string
    socketId?: string | null
    status?: string
    lastSeen?: Date | string
    updatedAt?: Date | string
    role: string
    permissions?: StaffPresenceCreatepermissionsInput | string[]
    isSuperAdmin?: boolean
    departmentId?: string | null
    subDepartmentId?: string | null
  }

  export type StaffPresenceUncheckedCreateInput = {
    id?: string
    staffId: string
    email: string
    name: string
    socketId?: string | null
    status?: string
    lastSeen?: Date | string
    updatedAt?: Date | string
    role: string
    permissions?: StaffPresenceCreatepermissionsInput | string[]
    isSuperAdmin?: boolean
    departmentId?: string | null
    subDepartmentId?: string | null
  }

  export type StaffPresenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StaffPresenceUpdatepermissionsInput | string[]
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPresenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StaffPresenceUpdatepermissionsInput | string[]
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPresenceCreateManyInput = {
    id?: string
    staffId: string
    email: string
    name: string
    socketId?: string | null
    status?: string
    lastSeen?: Date | string
    updatedAt?: Date | string
    role: string
    permissions?: StaffPresenceCreatepermissionsInput | string[]
    isSuperAdmin?: boolean
    departmentId?: string | null
    subDepartmentId?: string | null
  }

  export type StaffPresenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StaffPresenceUpdatepermissionsInput | string[]
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffPresenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StaffPresenceUpdatepermissionsInput | string[]
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatQueueCreateInput = {
    id?: string
    priority?: number
    assignedTo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatSession: ChatSessionCreateNestedOneWithoutChatQueueInput
  }

  export type ChatQueueUncheckedCreateInput = {
    id?: string
    chatSessionId: string
    priority?: number
    assignedTo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatSession?: ChatSessionUpdateOneRequiredWithoutChatQueueNestedInput
  }

  export type ChatQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatSessionId?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatQueueCreateManyInput = {
    id?: string
    chatSessionId: string
    priority?: number
    assignedTo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatSessionId?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumChatStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatStatusFilter<$PrismaModel> | $Enums.ChatStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ChatQueueNullableScalarRelationFilter = {
    is?: ChatQueueWhereInput | null
    isNot?: ChatQueueWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userCode?: SortOrder
    userType?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userCode?: SortOrder
    userType?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userCode?: SortOrder
    userType?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumChatStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChatStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatStatusFilter<$PrismaModel>
    _max?: NestedEnumChatStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StaffPresenceCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    socketId?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isSuperAdmin?: SortOrder
    departmentId?: SortOrder
    subDepartmentId?: SortOrder
  }

  export type StaffPresenceMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    socketId?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    isSuperAdmin?: SortOrder
    departmentId?: SortOrder
    subDepartmentId?: SortOrder
  }

  export type StaffPresenceMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    socketId?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    isSuperAdmin?: SortOrder
    departmentId?: SortOrder
    subDepartmentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ChatQueueCountOrderByAggregateInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatQueueAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type ChatQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatQueueMinOrderByAggregateInput = {
    id?: SortOrder
    chatSessionId?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatQueueSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MessageCreateNestedManyWithoutChatSessionInput = {
    create?: XOR<MessageCreateWithoutChatSessionInput, MessageUncheckedCreateWithoutChatSessionInput> | MessageCreateWithoutChatSessionInput[] | MessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatSessionInput | MessageCreateOrConnectWithoutChatSessionInput[]
    createMany?: MessageCreateManyChatSessionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatQueueCreateNestedOneWithoutChatSessionInput = {
    create?: XOR<ChatQueueCreateWithoutChatSessionInput, ChatQueueUncheckedCreateWithoutChatSessionInput>
    connectOrCreate?: ChatQueueCreateOrConnectWithoutChatSessionInput
    connect?: ChatQueueWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutChatSessionInput = {
    create?: XOR<MessageCreateWithoutChatSessionInput, MessageUncheckedCreateWithoutChatSessionInput> | MessageCreateWithoutChatSessionInput[] | MessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatSessionInput | MessageCreateOrConnectWithoutChatSessionInput[]
    createMany?: MessageCreateManyChatSessionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatQueueUncheckedCreateNestedOneWithoutChatSessionInput = {
    create?: XOR<ChatQueueCreateWithoutChatSessionInput, ChatQueueUncheckedCreateWithoutChatSessionInput>
    connectOrCreate?: ChatQueueCreateOrConnectWithoutChatSessionInput
    connect?: ChatQueueWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumChatStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChatStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutChatSessionNestedInput = {
    create?: XOR<MessageCreateWithoutChatSessionInput, MessageUncheckedCreateWithoutChatSessionInput> | MessageCreateWithoutChatSessionInput[] | MessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatSessionInput | MessageCreateOrConnectWithoutChatSessionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatSessionInput | MessageUpsertWithWhereUniqueWithoutChatSessionInput[]
    createMany?: MessageCreateManyChatSessionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatSessionInput | MessageUpdateWithWhereUniqueWithoutChatSessionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatSessionInput | MessageUpdateManyWithWhereWithoutChatSessionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatQueueUpdateOneWithoutChatSessionNestedInput = {
    create?: XOR<ChatQueueCreateWithoutChatSessionInput, ChatQueueUncheckedCreateWithoutChatSessionInput>
    connectOrCreate?: ChatQueueCreateOrConnectWithoutChatSessionInput
    upsert?: ChatQueueUpsertWithoutChatSessionInput
    disconnect?: ChatQueueWhereInput | boolean
    delete?: ChatQueueWhereInput | boolean
    connect?: ChatQueueWhereUniqueInput
    update?: XOR<XOR<ChatQueueUpdateToOneWithWhereWithoutChatSessionInput, ChatQueueUpdateWithoutChatSessionInput>, ChatQueueUncheckedUpdateWithoutChatSessionInput>
  }

  export type MessageUncheckedUpdateManyWithoutChatSessionNestedInput = {
    create?: XOR<MessageCreateWithoutChatSessionInput, MessageUncheckedCreateWithoutChatSessionInput> | MessageCreateWithoutChatSessionInput[] | MessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatSessionInput | MessageCreateOrConnectWithoutChatSessionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatSessionInput | MessageUpsertWithWhereUniqueWithoutChatSessionInput[]
    createMany?: MessageCreateManyChatSessionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatSessionInput | MessageUpdateWithWhereUniqueWithoutChatSessionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatSessionInput | MessageUpdateManyWithWhereWithoutChatSessionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatQueueUncheckedUpdateOneWithoutChatSessionNestedInput = {
    create?: XOR<ChatQueueCreateWithoutChatSessionInput, ChatQueueUncheckedCreateWithoutChatSessionInput>
    connectOrCreate?: ChatQueueCreateOrConnectWithoutChatSessionInput
    upsert?: ChatQueueUpsertWithoutChatSessionInput
    disconnect?: ChatQueueWhereInput | boolean
    delete?: ChatQueueWhereInput | boolean
    connect?: ChatQueueWhereUniqueInput
    update?: XOR<XOR<ChatQueueUpdateToOneWithWhereWithoutChatSessionInput, ChatQueueUpdateWithoutChatSessionInput>, ChatQueueUncheckedUpdateWithoutChatSessionInput>
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type StaffPresenceCreatepermissionsInput = {
    set: string[]
  }

  export type StaffPresenceUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChatSessionCreateNestedOneWithoutChatQueueInput = {
    create?: XOR<ChatSessionCreateWithoutChatQueueInput, ChatSessionUncheckedCreateWithoutChatQueueInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutChatQueueInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatSessionUpdateOneRequiredWithoutChatQueueNestedInput = {
    create?: XOR<ChatSessionCreateWithoutChatQueueInput, ChatSessionUncheckedCreateWithoutChatQueueInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutChatQueueInput
    upsert?: ChatSessionUpsertWithoutChatQueueInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutChatQueueInput, ChatSessionUpdateWithoutChatQueueInput>, ChatSessionUncheckedUpdateWithoutChatQueueInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumChatStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatStatusFilter<$PrismaModel> | $Enums.ChatStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumChatStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChatStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatStatusFilter<$PrismaModel>
    _max?: NestedEnumChatStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MessageCreateWithoutChatSessionInput = {
    id?: string
    senderId: string
    senderType: string
    message: string
    type?: string
    status?: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutChatSessionInput = {
    id?: string
    senderId: string
    senderType: string
    message: string
    type?: string
    status?: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatSessionInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatSessionInput, MessageUncheckedCreateWithoutChatSessionInput>
  }

  export type MessageCreateManyChatSessionInputEnvelope = {
    data: MessageCreateManyChatSessionInput | MessageCreateManyChatSessionInput[]
    skipDuplicates?: boolean
  }

  export type ChatQueueCreateWithoutChatSessionInput = {
    id?: string
    priority?: number
    assignedTo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatQueueUncheckedCreateWithoutChatSessionInput = {
    id?: string
    priority?: number
    assignedTo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatQueueCreateOrConnectWithoutChatSessionInput = {
    where: ChatQueueWhereUniqueInput
    create: XOR<ChatQueueCreateWithoutChatSessionInput, ChatQueueUncheckedCreateWithoutChatSessionInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChatSessionInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatSessionInput, MessageUncheckedUpdateWithoutChatSessionInput>
    create: XOR<MessageCreateWithoutChatSessionInput, MessageUncheckedCreateWithoutChatSessionInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatSessionInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatSessionInput, MessageUncheckedUpdateWithoutChatSessionInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatSessionInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatSessionInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    chatSessionId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    senderType?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    type?: StringFilter<"Message"> | string
    status?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ChatQueueUpsertWithoutChatSessionInput = {
    update: XOR<ChatQueueUpdateWithoutChatSessionInput, ChatQueueUncheckedUpdateWithoutChatSessionInput>
    create: XOR<ChatQueueCreateWithoutChatSessionInput, ChatQueueUncheckedCreateWithoutChatSessionInput>
    where?: ChatQueueWhereInput
  }

  export type ChatQueueUpdateToOneWithWhereWithoutChatSessionInput = {
    where?: ChatQueueWhereInput
    data: XOR<ChatQueueUpdateWithoutChatSessionInput, ChatQueueUncheckedUpdateWithoutChatSessionInput>
  }

  export type ChatQueueUpdateWithoutChatSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatQueueUncheckedUpdateWithoutChatSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    userId: string
    agentId?: string | null
    ticketId?: string | null
    status?: $Enums.ChatStatus
    assignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userName?: string | null
    userEmail?: string | null
    userCode?: string | null
    userType?: string | null
    chatQueue?: ChatQueueCreateNestedOneWithoutChatSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    agentId?: string | null
    ticketId?: string | null
    status?: $Enums.ChatStatus
    assignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userName?: string | null
    userEmail?: string | null
    userCode?: string | null
    userType?: string | null
    chatQueue?: ChatQueueUncheckedCreateNestedOneWithoutChatSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    chatQueue?: ChatQueueUpdateOneWithoutChatSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    chatQueue?: ChatQueueUncheckedUpdateOneWithoutChatSessionNestedInput
  }

  export type ChatSessionCreateWithoutChatQueueInput = {
    id?: string
    userId: string
    agentId?: string | null
    ticketId?: string | null
    status?: $Enums.ChatStatus
    assignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userName?: string | null
    userEmail?: string | null
    userCode?: string | null
    userType?: string | null
    messages?: MessageCreateNestedManyWithoutChatSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutChatQueueInput = {
    id?: string
    userId: string
    agentId?: string | null
    ticketId?: string | null
    status?: $Enums.ChatStatus
    assignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userName?: string | null
    userEmail?: string | null
    userCode?: string | null
    userType?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChatSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutChatQueueInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutChatQueueInput, ChatSessionUncheckedCreateWithoutChatQueueInput>
  }

  export type ChatSessionUpsertWithoutChatQueueInput = {
    update: XOR<ChatSessionUpdateWithoutChatQueueInput, ChatSessionUncheckedUpdateWithoutChatQueueInput>
    create: XOR<ChatSessionCreateWithoutChatQueueInput, ChatSessionUncheckedCreateWithoutChatQueueInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutChatQueueInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutChatQueueInput, ChatSessionUncheckedUpdateWithoutChatQueueInput>
  }

  export type ChatSessionUpdateWithoutChatQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutChatSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutChatQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutChatSessionNestedInput
  }

  export type MessageCreateManyChatSessionInput = {
    id?: string
    senderId: string
    senderType: string
    message: string
    type?: string
    status?: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutChatSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutChatSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}