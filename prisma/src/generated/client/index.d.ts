
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model events
 * 
 */
export type events = {
  id: number
  title: string
  notifievent: string
  clubname: string
  img: string
}

/**
 * Model authorcraft
 * 
 */
export type authorcraft = {
  id: number
  title: string
  timendata: Date
  venue: string
  eventdetail: string
}

/**
 * Model aura
 * 
 */
export type aura = {
  id: number
  title: string
  timendata: Date
  venue: string
  eventdetail: string
}

/**
 * Model tallem
 * 
 */
export type tallem = {
  id: number
  title: string
  timendata: Date
  venue: string
  eventdetail: string
}

/**
 * Model csi
 * 
 */
export type csi = {
  id: number
  title: string
  timendata: Date
  venue: string
  eventdetail: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.events.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.events.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<GlobalReject>;

  /**
   * `prisma.authorcraft`: Exposes CRUD operations for the **authorcraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authorcrafts
    * const authorcrafts = await prisma.authorcraft.findMany()
    * ```
    */
  get authorcraft(): Prisma.authorcraftDelegate<GlobalReject>;

  /**
   * `prisma.aura`: Exposes CRUD operations for the **aura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auras
    * const auras = await prisma.aura.findMany()
    * ```
    */
  get aura(): Prisma.auraDelegate<GlobalReject>;

  /**
   * `prisma.tallem`: Exposes CRUD operations for the **tallem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tallems
    * const tallems = await prisma.tallem.findMany()
    * ```
    */
  get tallem(): Prisma.tallemDelegate<GlobalReject>;

  /**
   * `prisma.csi`: Exposes CRUD operations for the **csi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Csis
    * const csis = await prisma.csi.findMany()
    * ```
    */
  get csi(): Prisma.csiDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.14.1
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    events: 'events',
    authorcraft: 'authorcraft',
    aura: 'aura',
    tallem: 'tallem',
    csi: 'csi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model events
   */


  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    title: string | null
    notifievent: string | null
    clubname: string | null
    img: string | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    notifievent: string | null
    clubname: string | null
    img: string | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    title: number
    notifievent: number
    clubname: number
    img: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    title?: true
    notifievent?: true
    clubname?: true
    img?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    title?: true
    notifievent?: true
    clubname?: true
    img?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    title?: true
    notifievent?: true
    clubname?: true
    img?: true
    _all?: true
  }

  export type EventsAggregateArgs = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: Enumerable<eventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs = {
    where?: eventsWhereInput
    orderBy?: Enumerable<eventsOrderByWithAggregationInput>
    by: EventsScalarFieldEnum[]
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }


  export type EventsGroupByOutputType = {
    id: number
    title: string
    notifievent: string
    clubname: string
    img: string
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect = {
    id?: boolean
    title?: boolean
    notifievent?: boolean
    clubname?: boolean
    img?: boolean
  }


  export type eventsGetPayload<S extends boolean | null | undefined | eventsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? events :
    S extends undefined ? never :
    S extends { include: any } & (eventsArgs | eventsFindManyArgs)
    ? events 
    : S extends { select: any } & (eventsArgs | eventsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof events ? events[P] : never
  } 
      : events


  type eventsCountArgs = 
    Omit<eventsFindManyArgs, 'select' | 'include'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends eventsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, eventsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'events'> extends True ? Prisma__eventsClient<eventsGetPayload<T>> : Prisma__eventsClient<eventsGetPayload<T> | null, null>

    /**
     * Find one Events that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, eventsFindUniqueOrThrowArgs>
    ): Prisma__eventsClient<eventsGetPayload<T>>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends eventsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, eventsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'events'> extends True ? Prisma__eventsClient<eventsGetPayload<T>> : Prisma__eventsClient<eventsGetPayload<T> | null, null>

    /**
     * Find the first Events that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, eventsFindFirstOrThrowArgs>
    ): Prisma__eventsClient<eventsGetPayload<T>>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends eventsFindManyArgs>(
      args?: SelectSubset<T, eventsFindManyArgs>
    ): Prisma.PrismaPromise<Array<eventsGetPayload<T>>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
    **/
    create<T extends eventsCreateArgs>(
      args: SelectSubset<T, eventsCreateArgs>
    ): Prisma__eventsClient<eventsGetPayload<T>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
    **/
    delete<T extends eventsDeleteArgs>(
      args: SelectSubset<T, eventsDeleteArgs>
    ): Prisma__eventsClient<eventsGetPayload<T>>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends eventsUpdateArgs>(
      args: SelectSubset<T, eventsUpdateArgs>
    ): Prisma__eventsClient<eventsGetPayload<T>>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends eventsDeleteManyArgs>(
      args?: SelectSubset<T, eventsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends eventsUpdateManyArgs>(
      args: SelectSubset<T, eventsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
    **/
    upsert<T extends eventsUpsertArgs>(
      args: SelectSubset<T, eventsUpsertArgs>
    ): Prisma__eventsClient<eventsGetPayload<T>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
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
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__eventsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * events base type for findUnique actions
   */
  export type eventsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUnique
   */
  export interface eventsFindUniqueArgs extends eventsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events base type for findFirst actions
   */
  export type eventsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: Enumerable<eventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: Enumerable<EventsScalarFieldEnum>
  }

  /**
   * events findFirst
   */
  export interface eventsFindFirstArgs extends eventsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: Enumerable<eventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * events findMany
   */
  export type eventsFindManyArgs = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: Enumerable<eventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * events create
   */
  export type eventsCreateArgs = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }


  /**
   * events update
   */
  export type eventsUpdateArgs = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
  }


  /**
   * events upsert
   */
  export type eventsUpsertArgs = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }


  /**
   * events delete
   */
  export type eventsDeleteArgs = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
  }


  /**
   * events without action
   */
  export type eventsArgs = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect | null
  }



  /**
   * Model authorcraft
   */


  export type AggregateAuthorcraft = {
    _count: AuthorcraftCountAggregateOutputType | null
    _avg: AuthorcraftAvgAggregateOutputType | null
    _sum: AuthorcraftSumAggregateOutputType | null
    _min: AuthorcraftMinAggregateOutputType | null
    _max: AuthorcraftMaxAggregateOutputType | null
  }

  export type AuthorcraftAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorcraftSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorcraftMinAggregateOutputType = {
    id: number | null
    title: string | null
    timendata: Date | null
    venue: string | null
    eventdetail: string | null
  }

  export type AuthorcraftMaxAggregateOutputType = {
    id: number | null
    title: string | null
    timendata: Date | null
    venue: string | null
    eventdetail: string | null
  }

  export type AuthorcraftCountAggregateOutputType = {
    id: number
    title: number
    timendata: number
    venue: number
    eventdetail: number
    _all: number
  }


  export type AuthorcraftAvgAggregateInputType = {
    id?: true
  }

  export type AuthorcraftSumAggregateInputType = {
    id?: true
  }

  export type AuthorcraftMinAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
  }

  export type AuthorcraftMaxAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
  }

  export type AuthorcraftCountAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
    _all?: true
  }

  export type AuthorcraftAggregateArgs = {
    /**
     * Filter which authorcraft to aggregate.
     */
    where?: authorcraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorcrafts to fetch.
     */
    orderBy?: Enumerable<authorcraftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorcraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorcrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorcrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authorcrafts
    **/
    _count?: true | AuthorcraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorcraftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorcraftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorcraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorcraftMaxAggregateInputType
  }

  export type GetAuthorcraftAggregateType<T extends AuthorcraftAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorcraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorcraft[P]>
      : GetScalarType<T[P], AggregateAuthorcraft[P]>
  }




  export type AuthorcraftGroupByArgs = {
    where?: authorcraftWhereInput
    orderBy?: Enumerable<authorcraftOrderByWithAggregationInput>
    by: AuthorcraftScalarFieldEnum[]
    having?: authorcraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorcraftCountAggregateInputType | true
    _avg?: AuthorcraftAvgAggregateInputType
    _sum?: AuthorcraftSumAggregateInputType
    _min?: AuthorcraftMinAggregateInputType
    _max?: AuthorcraftMaxAggregateInputType
  }


  export type AuthorcraftGroupByOutputType = {
    id: number
    title: string
    timendata: Date
    venue: string
    eventdetail: string
    _count: AuthorcraftCountAggregateOutputType | null
    _avg: AuthorcraftAvgAggregateOutputType | null
    _sum: AuthorcraftSumAggregateOutputType | null
    _min: AuthorcraftMinAggregateOutputType | null
    _max: AuthorcraftMaxAggregateOutputType | null
  }

  type GetAuthorcraftGroupByPayload<T extends AuthorcraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AuthorcraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorcraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorcraftGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorcraftGroupByOutputType[P]>
        }
      >
    >


  export type authorcraftSelect = {
    id?: boolean
    title?: boolean
    timendata?: boolean
    venue?: boolean
    eventdetail?: boolean
  }


  export type authorcraftGetPayload<S extends boolean | null | undefined | authorcraftArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? authorcraft :
    S extends undefined ? never :
    S extends { include: any } & (authorcraftArgs | authorcraftFindManyArgs)
    ? authorcraft 
    : S extends { select: any } & (authorcraftArgs | authorcraftFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof authorcraft ? authorcraft[P] : never
  } 
      : authorcraft


  type authorcraftCountArgs = 
    Omit<authorcraftFindManyArgs, 'select' | 'include'> & {
      select?: AuthorcraftCountAggregateInputType | true
    }

  export interface authorcraftDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Authorcraft that matches the filter.
     * @param {authorcraftFindUniqueArgs} args - Arguments to find a Authorcraft
     * @example
     * // Get one Authorcraft
     * const authorcraft = await prisma.authorcraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authorcraftFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, authorcraftFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'authorcraft'> extends True ? Prisma__authorcraftClient<authorcraftGetPayload<T>> : Prisma__authorcraftClient<authorcraftGetPayload<T> | null, null>

    /**
     * Find one Authorcraft that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {authorcraftFindUniqueOrThrowArgs} args - Arguments to find a Authorcraft
     * @example
     * // Get one Authorcraft
     * const authorcraft = await prisma.authorcraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends authorcraftFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, authorcraftFindUniqueOrThrowArgs>
    ): Prisma__authorcraftClient<authorcraftGetPayload<T>>

    /**
     * Find the first Authorcraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorcraftFindFirstArgs} args - Arguments to find a Authorcraft
     * @example
     * // Get one Authorcraft
     * const authorcraft = await prisma.authorcraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authorcraftFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, authorcraftFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'authorcraft'> extends True ? Prisma__authorcraftClient<authorcraftGetPayload<T>> : Prisma__authorcraftClient<authorcraftGetPayload<T> | null, null>

    /**
     * Find the first Authorcraft that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorcraftFindFirstOrThrowArgs} args - Arguments to find a Authorcraft
     * @example
     * // Get one Authorcraft
     * const authorcraft = await prisma.authorcraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends authorcraftFindFirstOrThrowArgs>(
      args?: SelectSubset<T, authorcraftFindFirstOrThrowArgs>
    ): Prisma__authorcraftClient<authorcraftGetPayload<T>>

    /**
     * Find zero or more Authorcrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorcraftFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authorcrafts
     * const authorcrafts = await prisma.authorcraft.findMany()
     * 
     * // Get first 10 Authorcrafts
     * const authorcrafts = await prisma.authorcraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorcraftWithIdOnly = await prisma.authorcraft.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends authorcraftFindManyArgs>(
      args?: SelectSubset<T, authorcraftFindManyArgs>
    ): Prisma.PrismaPromise<Array<authorcraftGetPayload<T>>>

    /**
     * Create a Authorcraft.
     * @param {authorcraftCreateArgs} args - Arguments to create a Authorcraft.
     * @example
     * // Create one Authorcraft
     * const Authorcraft = await prisma.authorcraft.create({
     *   data: {
     *     // ... data to create a Authorcraft
     *   }
     * })
     * 
    **/
    create<T extends authorcraftCreateArgs>(
      args: SelectSubset<T, authorcraftCreateArgs>
    ): Prisma__authorcraftClient<authorcraftGetPayload<T>>

    /**
     * Delete a Authorcraft.
     * @param {authorcraftDeleteArgs} args - Arguments to delete one Authorcraft.
     * @example
     * // Delete one Authorcraft
     * const Authorcraft = await prisma.authorcraft.delete({
     *   where: {
     *     // ... filter to delete one Authorcraft
     *   }
     * })
     * 
    **/
    delete<T extends authorcraftDeleteArgs>(
      args: SelectSubset<T, authorcraftDeleteArgs>
    ): Prisma__authorcraftClient<authorcraftGetPayload<T>>

    /**
     * Update one Authorcraft.
     * @param {authorcraftUpdateArgs} args - Arguments to update one Authorcraft.
     * @example
     * // Update one Authorcraft
     * const authorcraft = await prisma.authorcraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authorcraftUpdateArgs>(
      args: SelectSubset<T, authorcraftUpdateArgs>
    ): Prisma__authorcraftClient<authorcraftGetPayload<T>>

    /**
     * Delete zero or more Authorcrafts.
     * @param {authorcraftDeleteManyArgs} args - Arguments to filter Authorcrafts to delete.
     * @example
     * // Delete a few Authorcrafts
     * const { count } = await prisma.authorcraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authorcraftDeleteManyArgs>(
      args?: SelectSubset<T, authorcraftDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorcrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorcraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authorcrafts
     * const authorcraft = await prisma.authorcraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authorcraftUpdateManyArgs>(
      args: SelectSubset<T, authorcraftUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authorcraft.
     * @param {authorcraftUpsertArgs} args - Arguments to update or create a Authorcraft.
     * @example
     * // Update or create a Authorcraft
     * const authorcraft = await prisma.authorcraft.upsert({
     *   create: {
     *     // ... data to create a Authorcraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authorcraft we want to update
     *   }
     * })
    **/
    upsert<T extends authorcraftUpsertArgs>(
      args: SelectSubset<T, authorcraftUpsertArgs>
    ): Prisma__authorcraftClient<authorcraftGetPayload<T>>

    /**
     * Count the number of Authorcrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorcraftCountArgs} args - Arguments to filter Authorcrafts to count.
     * @example
     * // Count the number of Authorcrafts
     * const count = await prisma.authorcraft.count({
     *   where: {
     *     // ... the filter for the Authorcrafts we want to count
     *   }
     * })
    **/
    count<T extends authorcraftCountArgs>(
      args?: Subset<T, authorcraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorcraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authorcraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorcraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorcraftAggregateArgs>(args: Subset<T, AuthorcraftAggregateArgs>): Prisma.PrismaPromise<GetAuthorcraftAggregateType<T>>

    /**
     * Group by Authorcraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorcraftGroupByArgs} args - Group by arguments.
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
      T extends AuthorcraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorcraftGroupByArgs['orderBy'] }
        : { orderBy?: AuthorcraftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuthorcraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorcraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for authorcraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__authorcraftClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * authorcraft base type for findUnique actions
   */
  export type authorcraftFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * Filter, which authorcraft to fetch.
     */
    where: authorcraftWhereUniqueInput
  }

  /**
   * authorcraft findUnique
   */
  export interface authorcraftFindUniqueArgs extends authorcraftFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * authorcraft findUniqueOrThrow
   */
  export type authorcraftFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * Filter, which authorcraft to fetch.
     */
    where: authorcraftWhereUniqueInput
  }


  /**
   * authorcraft base type for findFirst actions
   */
  export type authorcraftFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * Filter, which authorcraft to fetch.
     */
    where?: authorcraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorcrafts to fetch.
     */
    orderBy?: Enumerable<authorcraftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authorcrafts.
     */
    cursor?: authorcraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorcrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorcrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authorcrafts.
     */
    distinct?: Enumerable<AuthorcraftScalarFieldEnum>
  }

  /**
   * authorcraft findFirst
   */
  export interface authorcraftFindFirstArgs extends authorcraftFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * authorcraft findFirstOrThrow
   */
  export type authorcraftFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * Filter, which authorcraft to fetch.
     */
    where?: authorcraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorcrafts to fetch.
     */
    orderBy?: Enumerable<authorcraftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authorcrafts.
     */
    cursor?: authorcraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorcrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorcrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authorcrafts.
     */
    distinct?: Enumerable<AuthorcraftScalarFieldEnum>
  }


  /**
   * authorcraft findMany
   */
  export type authorcraftFindManyArgs = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * Filter, which authorcrafts to fetch.
     */
    where?: authorcraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorcrafts to fetch.
     */
    orderBy?: Enumerable<authorcraftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authorcrafts.
     */
    cursor?: authorcraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorcrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorcrafts.
     */
    skip?: number
    distinct?: Enumerable<AuthorcraftScalarFieldEnum>
  }


  /**
   * authorcraft create
   */
  export type authorcraftCreateArgs = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * The data needed to create a authorcraft.
     */
    data: XOR<authorcraftCreateInput, authorcraftUncheckedCreateInput>
  }


  /**
   * authorcraft update
   */
  export type authorcraftUpdateArgs = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * The data needed to update a authorcraft.
     */
    data: XOR<authorcraftUpdateInput, authorcraftUncheckedUpdateInput>
    /**
     * Choose, which authorcraft to update.
     */
    where: authorcraftWhereUniqueInput
  }


  /**
   * authorcraft updateMany
   */
  export type authorcraftUpdateManyArgs = {
    /**
     * The data used to update authorcrafts.
     */
    data: XOR<authorcraftUpdateManyMutationInput, authorcraftUncheckedUpdateManyInput>
    /**
     * Filter which authorcrafts to update
     */
    where?: authorcraftWhereInput
  }


  /**
   * authorcraft upsert
   */
  export type authorcraftUpsertArgs = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * The filter to search for the authorcraft to update in case it exists.
     */
    where: authorcraftWhereUniqueInput
    /**
     * In case the authorcraft found by the `where` argument doesn't exist, create a new authorcraft with this data.
     */
    create: XOR<authorcraftCreateInput, authorcraftUncheckedCreateInput>
    /**
     * In case the authorcraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorcraftUpdateInput, authorcraftUncheckedUpdateInput>
  }


  /**
   * authorcraft delete
   */
  export type authorcraftDeleteArgs = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
    /**
     * Filter which authorcraft to delete.
     */
    where: authorcraftWhereUniqueInput
  }


  /**
   * authorcraft deleteMany
   */
  export type authorcraftDeleteManyArgs = {
    /**
     * Filter which authorcrafts to delete
     */
    where?: authorcraftWhereInput
  }


  /**
   * authorcraft without action
   */
  export type authorcraftArgs = {
    /**
     * Select specific fields to fetch from the authorcraft
     */
    select?: authorcraftSelect | null
  }



  /**
   * Model aura
   */


  export type AggregateAura = {
    _count: AuraCountAggregateOutputType | null
    _avg: AuraAvgAggregateOutputType | null
    _sum: AuraSumAggregateOutputType | null
    _min: AuraMinAggregateOutputType | null
    _max: AuraMaxAggregateOutputType | null
  }

  export type AuraAvgAggregateOutputType = {
    id: number | null
  }

  export type AuraSumAggregateOutputType = {
    id: number | null
  }

  export type AuraMinAggregateOutputType = {
    id: number | null
    title: string | null
    timendata: Date | null
    venue: string | null
    eventdetail: string | null
  }

  export type AuraMaxAggregateOutputType = {
    id: number | null
    title: string | null
    timendata: Date | null
    venue: string | null
    eventdetail: string | null
  }

  export type AuraCountAggregateOutputType = {
    id: number
    title: number
    timendata: number
    venue: number
    eventdetail: number
    _all: number
  }


  export type AuraAvgAggregateInputType = {
    id?: true
  }

  export type AuraSumAggregateInputType = {
    id?: true
  }

  export type AuraMinAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
  }

  export type AuraMaxAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
  }

  export type AuraCountAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
    _all?: true
  }

  export type AuraAggregateArgs = {
    /**
     * Filter which aura to aggregate.
     */
    where?: auraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auras to fetch.
     */
    orderBy?: Enumerable<auraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auras
    **/
    _count?: true | AuraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuraMaxAggregateInputType
  }

  export type GetAuraAggregateType<T extends AuraAggregateArgs> = {
        [P in keyof T & keyof AggregateAura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAura[P]>
      : GetScalarType<T[P], AggregateAura[P]>
  }




  export type AuraGroupByArgs = {
    where?: auraWhereInput
    orderBy?: Enumerable<auraOrderByWithAggregationInput>
    by: AuraScalarFieldEnum[]
    having?: auraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuraCountAggregateInputType | true
    _avg?: AuraAvgAggregateInputType
    _sum?: AuraSumAggregateInputType
    _min?: AuraMinAggregateInputType
    _max?: AuraMaxAggregateInputType
  }


  export type AuraGroupByOutputType = {
    id: number
    title: string
    timendata: Date
    venue: string
    eventdetail: string
    _count: AuraCountAggregateOutputType | null
    _avg: AuraAvgAggregateOutputType | null
    _sum: AuraSumAggregateOutputType | null
    _min: AuraMinAggregateOutputType | null
    _max: AuraMaxAggregateOutputType | null
  }

  type GetAuraGroupByPayload<T extends AuraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AuraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuraGroupByOutputType[P]>
            : GetScalarType<T[P], AuraGroupByOutputType[P]>
        }
      >
    >


  export type auraSelect = {
    id?: boolean
    title?: boolean
    timendata?: boolean
    venue?: boolean
    eventdetail?: boolean
  }


  export type auraGetPayload<S extends boolean | null | undefined | auraArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? aura :
    S extends undefined ? never :
    S extends { include: any } & (auraArgs | auraFindManyArgs)
    ? aura 
    : S extends { select: any } & (auraArgs | auraFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof aura ? aura[P] : never
  } 
      : aura


  type auraCountArgs = 
    Omit<auraFindManyArgs, 'select' | 'include'> & {
      select?: AuraCountAggregateInputType | true
    }

  export interface auraDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Aura that matches the filter.
     * @param {auraFindUniqueArgs} args - Arguments to find a Aura
     * @example
     * // Get one Aura
     * const aura = await prisma.aura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auraFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auraFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'aura'> extends True ? Prisma__auraClient<auraGetPayload<T>> : Prisma__auraClient<auraGetPayload<T> | null, null>

    /**
     * Find one Aura that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auraFindUniqueOrThrowArgs} args - Arguments to find a Aura
     * @example
     * // Get one Aura
     * const aura = await prisma.aura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auraFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, auraFindUniqueOrThrowArgs>
    ): Prisma__auraClient<auraGetPayload<T>>

    /**
     * Find the first Aura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auraFindFirstArgs} args - Arguments to find a Aura
     * @example
     * // Get one Aura
     * const aura = await prisma.aura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auraFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auraFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'aura'> extends True ? Prisma__auraClient<auraGetPayload<T>> : Prisma__auraClient<auraGetPayload<T> | null, null>

    /**
     * Find the first Aura that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auraFindFirstOrThrowArgs} args - Arguments to find a Aura
     * @example
     * // Get one Aura
     * const aura = await prisma.aura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auraFindFirstOrThrowArgs>(
      args?: SelectSubset<T, auraFindFirstOrThrowArgs>
    ): Prisma__auraClient<auraGetPayload<T>>

    /**
     * Find zero or more Auras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auras
     * const auras = await prisma.aura.findMany()
     * 
     * // Get first 10 Auras
     * const auras = await prisma.aura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auraWithIdOnly = await prisma.aura.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends auraFindManyArgs>(
      args?: SelectSubset<T, auraFindManyArgs>
    ): Prisma.PrismaPromise<Array<auraGetPayload<T>>>

    /**
     * Create a Aura.
     * @param {auraCreateArgs} args - Arguments to create a Aura.
     * @example
     * // Create one Aura
     * const Aura = await prisma.aura.create({
     *   data: {
     *     // ... data to create a Aura
     *   }
     * })
     * 
    **/
    create<T extends auraCreateArgs>(
      args: SelectSubset<T, auraCreateArgs>
    ): Prisma__auraClient<auraGetPayload<T>>

    /**
     * Delete a Aura.
     * @param {auraDeleteArgs} args - Arguments to delete one Aura.
     * @example
     * // Delete one Aura
     * const Aura = await prisma.aura.delete({
     *   where: {
     *     // ... filter to delete one Aura
     *   }
     * })
     * 
    **/
    delete<T extends auraDeleteArgs>(
      args: SelectSubset<T, auraDeleteArgs>
    ): Prisma__auraClient<auraGetPayload<T>>

    /**
     * Update one Aura.
     * @param {auraUpdateArgs} args - Arguments to update one Aura.
     * @example
     * // Update one Aura
     * const aura = await prisma.aura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auraUpdateArgs>(
      args: SelectSubset<T, auraUpdateArgs>
    ): Prisma__auraClient<auraGetPayload<T>>

    /**
     * Delete zero or more Auras.
     * @param {auraDeleteManyArgs} args - Arguments to filter Auras to delete.
     * @example
     * // Delete a few Auras
     * const { count } = await prisma.aura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auraDeleteManyArgs>(
      args?: SelectSubset<T, auraDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auras
     * const aura = await prisma.aura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auraUpdateManyArgs>(
      args: SelectSubset<T, auraUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aura.
     * @param {auraUpsertArgs} args - Arguments to update or create a Aura.
     * @example
     * // Update or create a Aura
     * const aura = await prisma.aura.upsert({
     *   create: {
     *     // ... data to create a Aura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aura we want to update
     *   }
     * })
    **/
    upsert<T extends auraUpsertArgs>(
      args: SelectSubset<T, auraUpsertArgs>
    ): Prisma__auraClient<auraGetPayload<T>>

    /**
     * Count the number of Auras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auraCountArgs} args - Arguments to filter Auras to count.
     * @example
     * // Count the number of Auras
     * const count = await prisma.aura.count({
     *   where: {
     *     // ... the filter for the Auras we want to count
     *   }
     * })
    **/
    count<T extends auraCountArgs>(
      args?: Subset<T, auraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuraAggregateArgs>(args: Subset<T, AuraAggregateArgs>): Prisma.PrismaPromise<GetAuraAggregateType<T>>

    /**
     * Group by Aura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuraGroupByArgs} args - Group by arguments.
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
      T extends AuraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuraGroupByArgs['orderBy'] }
        : { orderBy?: AuraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for aura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auraClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * aura base type for findUnique actions
   */
  export type auraFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * Filter, which aura to fetch.
     */
    where: auraWhereUniqueInput
  }

  /**
   * aura findUnique
   */
  export interface auraFindUniqueArgs extends auraFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aura findUniqueOrThrow
   */
  export type auraFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * Filter, which aura to fetch.
     */
    where: auraWhereUniqueInput
  }


  /**
   * aura base type for findFirst actions
   */
  export type auraFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * Filter, which aura to fetch.
     */
    where?: auraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auras to fetch.
     */
    orderBy?: Enumerable<auraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auras.
     */
    cursor?: auraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auras.
     */
    distinct?: Enumerable<AuraScalarFieldEnum>
  }

  /**
   * aura findFirst
   */
  export interface auraFindFirstArgs extends auraFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aura findFirstOrThrow
   */
  export type auraFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * Filter, which aura to fetch.
     */
    where?: auraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auras to fetch.
     */
    orderBy?: Enumerable<auraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auras.
     */
    cursor?: auraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auras.
     */
    distinct?: Enumerable<AuraScalarFieldEnum>
  }


  /**
   * aura findMany
   */
  export type auraFindManyArgs = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * Filter, which auras to fetch.
     */
    where?: auraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auras to fetch.
     */
    orderBy?: Enumerable<auraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auras.
     */
    cursor?: auraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auras.
     */
    skip?: number
    distinct?: Enumerable<AuraScalarFieldEnum>
  }


  /**
   * aura create
   */
  export type auraCreateArgs = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * The data needed to create a aura.
     */
    data: XOR<auraCreateInput, auraUncheckedCreateInput>
  }


  /**
   * aura update
   */
  export type auraUpdateArgs = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * The data needed to update a aura.
     */
    data: XOR<auraUpdateInput, auraUncheckedUpdateInput>
    /**
     * Choose, which aura to update.
     */
    where: auraWhereUniqueInput
  }


  /**
   * aura updateMany
   */
  export type auraUpdateManyArgs = {
    /**
     * The data used to update auras.
     */
    data: XOR<auraUpdateManyMutationInput, auraUncheckedUpdateManyInput>
    /**
     * Filter which auras to update
     */
    where?: auraWhereInput
  }


  /**
   * aura upsert
   */
  export type auraUpsertArgs = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * The filter to search for the aura to update in case it exists.
     */
    where: auraWhereUniqueInput
    /**
     * In case the aura found by the `where` argument doesn't exist, create a new aura with this data.
     */
    create: XOR<auraCreateInput, auraUncheckedCreateInput>
    /**
     * In case the aura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auraUpdateInput, auraUncheckedUpdateInput>
  }


  /**
   * aura delete
   */
  export type auraDeleteArgs = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
    /**
     * Filter which aura to delete.
     */
    where: auraWhereUniqueInput
  }


  /**
   * aura deleteMany
   */
  export type auraDeleteManyArgs = {
    /**
     * Filter which auras to delete
     */
    where?: auraWhereInput
  }


  /**
   * aura without action
   */
  export type auraArgs = {
    /**
     * Select specific fields to fetch from the aura
     */
    select?: auraSelect | null
  }



  /**
   * Model tallem
   */


  export type AggregateTallem = {
    _count: TallemCountAggregateOutputType | null
    _avg: TallemAvgAggregateOutputType | null
    _sum: TallemSumAggregateOutputType | null
    _min: TallemMinAggregateOutputType | null
    _max: TallemMaxAggregateOutputType | null
  }

  export type TallemAvgAggregateOutputType = {
    id: number | null
  }

  export type TallemSumAggregateOutputType = {
    id: number | null
  }

  export type TallemMinAggregateOutputType = {
    id: number | null
    title: string | null
    timendata: Date | null
    venue: string | null
    eventdetail: string | null
  }

  export type TallemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    timendata: Date | null
    venue: string | null
    eventdetail: string | null
  }

  export type TallemCountAggregateOutputType = {
    id: number
    title: number
    timendata: number
    venue: number
    eventdetail: number
    _all: number
  }


  export type TallemAvgAggregateInputType = {
    id?: true
  }

  export type TallemSumAggregateInputType = {
    id?: true
  }

  export type TallemMinAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
  }

  export type TallemMaxAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
  }

  export type TallemCountAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
    _all?: true
  }

  export type TallemAggregateArgs = {
    /**
     * Filter which tallem to aggregate.
     */
    where?: tallemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tallems to fetch.
     */
    orderBy?: Enumerable<tallemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tallemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tallems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tallems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tallems
    **/
    _count?: true | TallemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TallemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TallemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TallemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TallemMaxAggregateInputType
  }

  export type GetTallemAggregateType<T extends TallemAggregateArgs> = {
        [P in keyof T & keyof AggregateTallem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTallem[P]>
      : GetScalarType<T[P], AggregateTallem[P]>
  }




  export type TallemGroupByArgs = {
    where?: tallemWhereInput
    orderBy?: Enumerable<tallemOrderByWithAggregationInput>
    by: TallemScalarFieldEnum[]
    having?: tallemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TallemCountAggregateInputType | true
    _avg?: TallemAvgAggregateInputType
    _sum?: TallemSumAggregateInputType
    _min?: TallemMinAggregateInputType
    _max?: TallemMaxAggregateInputType
  }


  export type TallemGroupByOutputType = {
    id: number
    title: string
    timendata: Date
    venue: string
    eventdetail: string
    _count: TallemCountAggregateOutputType | null
    _avg: TallemAvgAggregateOutputType | null
    _sum: TallemSumAggregateOutputType | null
    _min: TallemMinAggregateOutputType | null
    _max: TallemMaxAggregateOutputType | null
  }

  type GetTallemGroupByPayload<T extends TallemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TallemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TallemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TallemGroupByOutputType[P]>
            : GetScalarType<T[P], TallemGroupByOutputType[P]>
        }
      >
    >


  export type tallemSelect = {
    id?: boolean
    title?: boolean
    timendata?: boolean
    venue?: boolean
    eventdetail?: boolean
  }


  export type tallemGetPayload<S extends boolean | null | undefined | tallemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tallem :
    S extends undefined ? never :
    S extends { include: any } & (tallemArgs | tallemFindManyArgs)
    ? tallem 
    : S extends { select: any } & (tallemArgs | tallemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof tallem ? tallem[P] : never
  } 
      : tallem


  type tallemCountArgs = 
    Omit<tallemFindManyArgs, 'select' | 'include'> & {
      select?: TallemCountAggregateInputType | true
    }

  export interface tallemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tallem that matches the filter.
     * @param {tallemFindUniqueArgs} args - Arguments to find a Tallem
     * @example
     * // Get one Tallem
     * const tallem = await prisma.tallem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tallemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tallemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tallem'> extends True ? Prisma__tallemClient<tallemGetPayload<T>> : Prisma__tallemClient<tallemGetPayload<T> | null, null>

    /**
     * Find one Tallem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tallemFindUniqueOrThrowArgs} args - Arguments to find a Tallem
     * @example
     * // Get one Tallem
     * const tallem = await prisma.tallem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tallemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tallemFindUniqueOrThrowArgs>
    ): Prisma__tallemClient<tallemGetPayload<T>>

    /**
     * Find the first Tallem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tallemFindFirstArgs} args - Arguments to find a Tallem
     * @example
     * // Get one Tallem
     * const tallem = await prisma.tallem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tallemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tallemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tallem'> extends True ? Prisma__tallemClient<tallemGetPayload<T>> : Prisma__tallemClient<tallemGetPayload<T> | null, null>

    /**
     * Find the first Tallem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tallemFindFirstOrThrowArgs} args - Arguments to find a Tallem
     * @example
     * // Get one Tallem
     * const tallem = await prisma.tallem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tallemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tallemFindFirstOrThrowArgs>
    ): Prisma__tallemClient<tallemGetPayload<T>>

    /**
     * Find zero or more Tallems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tallemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tallems
     * const tallems = await prisma.tallem.findMany()
     * 
     * // Get first 10 Tallems
     * const tallems = await prisma.tallem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tallemWithIdOnly = await prisma.tallem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tallemFindManyArgs>(
      args?: SelectSubset<T, tallemFindManyArgs>
    ): Prisma.PrismaPromise<Array<tallemGetPayload<T>>>

    /**
     * Create a Tallem.
     * @param {tallemCreateArgs} args - Arguments to create a Tallem.
     * @example
     * // Create one Tallem
     * const Tallem = await prisma.tallem.create({
     *   data: {
     *     // ... data to create a Tallem
     *   }
     * })
     * 
    **/
    create<T extends tallemCreateArgs>(
      args: SelectSubset<T, tallemCreateArgs>
    ): Prisma__tallemClient<tallemGetPayload<T>>

    /**
     * Delete a Tallem.
     * @param {tallemDeleteArgs} args - Arguments to delete one Tallem.
     * @example
     * // Delete one Tallem
     * const Tallem = await prisma.tallem.delete({
     *   where: {
     *     // ... filter to delete one Tallem
     *   }
     * })
     * 
    **/
    delete<T extends tallemDeleteArgs>(
      args: SelectSubset<T, tallemDeleteArgs>
    ): Prisma__tallemClient<tallemGetPayload<T>>

    /**
     * Update one Tallem.
     * @param {tallemUpdateArgs} args - Arguments to update one Tallem.
     * @example
     * // Update one Tallem
     * const tallem = await prisma.tallem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tallemUpdateArgs>(
      args: SelectSubset<T, tallemUpdateArgs>
    ): Prisma__tallemClient<tallemGetPayload<T>>

    /**
     * Delete zero or more Tallems.
     * @param {tallemDeleteManyArgs} args - Arguments to filter Tallems to delete.
     * @example
     * // Delete a few Tallems
     * const { count } = await prisma.tallem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tallemDeleteManyArgs>(
      args?: SelectSubset<T, tallemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tallems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tallemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tallems
     * const tallem = await prisma.tallem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tallemUpdateManyArgs>(
      args: SelectSubset<T, tallemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tallem.
     * @param {tallemUpsertArgs} args - Arguments to update or create a Tallem.
     * @example
     * // Update or create a Tallem
     * const tallem = await prisma.tallem.upsert({
     *   create: {
     *     // ... data to create a Tallem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tallem we want to update
     *   }
     * })
    **/
    upsert<T extends tallemUpsertArgs>(
      args: SelectSubset<T, tallemUpsertArgs>
    ): Prisma__tallemClient<tallemGetPayload<T>>

    /**
     * Count the number of Tallems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tallemCountArgs} args - Arguments to filter Tallems to count.
     * @example
     * // Count the number of Tallems
     * const count = await prisma.tallem.count({
     *   where: {
     *     // ... the filter for the Tallems we want to count
     *   }
     * })
    **/
    count<T extends tallemCountArgs>(
      args?: Subset<T, tallemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TallemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tallem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TallemAggregateArgs>(args: Subset<T, TallemAggregateArgs>): Prisma.PrismaPromise<GetTallemAggregateType<T>>

    /**
     * Group by Tallem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallemGroupByArgs} args - Group by arguments.
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
      T extends TallemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TallemGroupByArgs['orderBy'] }
        : { orderBy?: TallemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TallemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTallemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tallem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tallemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tallem base type for findUnique actions
   */
  export type tallemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * Filter, which tallem to fetch.
     */
    where: tallemWhereUniqueInput
  }

  /**
   * tallem findUnique
   */
  export interface tallemFindUniqueArgs extends tallemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tallem findUniqueOrThrow
   */
  export type tallemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * Filter, which tallem to fetch.
     */
    where: tallemWhereUniqueInput
  }


  /**
   * tallem base type for findFirst actions
   */
  export type tallemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * Filter, which tallem to fetch.
     */
    where?: tallemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tallems to fetch.
     */
    orderBy?: Enumerable<tallemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tallems.
     */
    cursor?: tallemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tallems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tallems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tallems.
     */
    distinct?: Enumerable<TallemScalarFieldEnum>
  }

  /**
   * tallem findFirst
   */
  export interface tallemFindFirstArgs extends tallemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tallem findFirstOrThrow
   */
  export type tallemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * Filter, which tallem to fetch.
     */
    where?: tallemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tallems to fetch.
     */
    orderBy?: Enumerable<tallemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tallems.
     */
    cursor?: tallemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tallems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tallems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tallems.
     */
    distinct?: Enumerable<TallemScalarFieldEnum>
  }


  /**
   * tallem findMany
   */
  export type tallemFindManyArgs = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * Filter, which tallems to fetch.
     */
    where?: tallemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tallems to fetch.
     */
    orderBy?: Enumerable<tallemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tallems.
     */
    cursor?: tallemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tallems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tallems.
     */
    skip?: number
    distinct?: Enumerable<TallemScalarFieldEnum>
  }


  /**
   * tallem create
   */
  export type tallemCreateArgs = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * The data needed to create a tallem.
     */
    data: XOR<tallemCreateInput, tallemUncheckedCreateInput>
  }


  /**
   * tallem update
   */
  export type tallemUpdateArgs = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * The data needed to update a tallem.
     */
    data: XOR<tallemUpdateInput, tallemUncheckedUpdateInput>
    /**
     * Choose, which tallem to update.
     */
    where: tallemWhereUniqueInput
  }


  /**
   * tallem updateMany
   */
  export type tallemUpdateManyArgs = {
    /**
     * The data used to update tallems.
     */
    data: XOR<tallemUpdateManyMutationInput, tallemUncheckedUpdateManyInput>
    /**
     * Filter which tallems to update
     */
    where?: tallemWhereInput
  }


  /**
   * tallem upsert
   */
  export type tallemUpsertArgs = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * The filter to search for the tallem to update in case it exists.
     */
    where: tallemWhereUniqueInput
    /**
     * In case the tallem found by the `where` argument doesn't exist, create a new tallem with this data.
     */
    create: XOR<tallemCreateInput, tallemUncheckedCreateInput>
    /**
     * In case the tallem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tallemUpdateInput, tallemUncheckedUpdateInput>
  }


  /**
   * tallem delete
   */
  export type tallemDeleteArgs = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
    /**
     * Filter which tallem to delete.
     */
    where: tallemWhereUniqueInput
  }


  /**
   * tallem deleteMany
   */
  export type tallemDeleteManyArgs = {
    /**
     * Filter which tallems to delete
     */
    where?: tallemWhereInput
  }


  /**
   * tallem without action
   */
  export type tallemArgs = {
    /**
     * Select specific fields to fetch from the tallem
     */
    select?: tallemSelect | null
  }



  /**
   * Model csi
   */


  export type AggregateCsi = {
    _count: CsiCountAggregateOutputType | null
    _avg: CsiAvgAggregateOutputType | null
    _sum: CsiSumAggregateOutputType | null
    _min: CsiMinAggregateOutputType | null
    _max: CsiMaxAggregateOutputType | null
  }

  export type CsiAvgAggregateOutputType = {
    id: number | null
  }

  export type CsiSumAggregateOutputType = {
    id: number | null
  }

  export type CsiMinAggregateOutputType = {
    id: number | null
    title: string | null
    timendata: Date | null
    venue: string | null
    eventdetail: string | null
  }

  export type CsiMaxAggregateOutputType = {
    id: number | null
    title: string | null
    timendata: Date | null
    venue: string | null
    eventdetail: string | null
  }

  export type CsiCountAggregateOutputType = {
    id: number
    title: number
    timendata: number
    venue: number
    eventdetail: number
    _all: number
  }


  export type CsiAvgAggregateInputType = {
    id?: true
  }

  export type CsiSumAggregateInputType = {
    id?: true
  }

  export type CsiMinAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
  }

  export type CsiMaxAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
  }

  export type CsiCountAggregateInputType = {
    id?: true
    title?: true
    timendata?: true
    venue?: true
    eventdetail?: true
    _all?: true
  }

  export type CsiAggregateArgs = {
    /**
     * Filter which csi to aggregate.
     */
    where?: csiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csis to fetch.
     */
    orderBy?: Enumerable<csiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: csiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned csis
    **/
    _count?: true | CsiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CsiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CsiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CsiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CsiMaxAggregateInputType
  }

  export type GetCsiAggregateType<T extends CsiAggregateArgs> = {
        [P in keyof T & keyof AggregateCsi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCsi[P]>
      : GetScalarType<T[P], AggregateCsi[P]>
  }




  export type CsiGroupByArgs = {
    where?: csiWhereInput
    orderBy?: Enumerable<csiOrderByWithAggregationInput>
    by: CsiScalarFieldEnum[]
    having?: csiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CsiCountAggregateInputType | true
    _avg?: CsiAvgAggregateInputType
    _sum?: CsiSumAggregateInputType
    _min?: CsiMinAggregateInputType
    _max?: CsiMaxAggregateInputType
  }


  export type CsiGroupByOutputType = {
    id: number
    title: string
    timendata: Date
    venue: string
    eventdetail: string
    _count: CsiCountAggregateOutputType | null
    _avg: CsiAvgAggregateOutputType | null
    _sum: CsiSumAggregateOutputType | null
    _min: CsiMinAggregateOutputType | null
    _max: CsiMaxAggregateOutputType | null
  }

  type GetCsiGroupByPayload<T extends CsiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CsiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CsiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CsiGroupByOutputType[P]>
            : GetScalarType<T[P], CsiGroupByOutputType[P]>
        }
      >
    >


  export type csiSelect = {
    id?: boolean
    title?: boolean
    timendata?: boolean
    venue?: boolean
    eventdetail?: boolean
  }


  export type csiGetPayload<S extends boolean | null | undefined | csiArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? csi :
    S extends undefined ? never :
    S extends { include: any } & (csiArgs | csiFindManyArgs)
    ? csi 
    : S extends { select: any } & (csiArgs | csiFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof csi ? csi[P] : never
  } 
      : csi


  type csiCountArgs = 
    Omit<csiFindManyArgs, 'select' | 'include'> & {
      select?: CsiCountAggregateInputType | true
    }

  export interface csiDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Csi that matches the filter.
     * @param {csiFindUniqueArgs} args - Arguments to find a Csi
     * @example
     * // Get one Csi
     * const csi = await prisma.csi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends csiFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, csiFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'csi'> extends True ? Prisma__csiClient<csiGetPayload<T>> : Prisma__csiClient<csiGetPayload<T> | null, null>

    /**
     * Find one Csi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {csiFindUniqueOrThrowArgs} args - Arguments to find a Csi
     * @example
     * // Get one Csi
     * const csi = await prisma.csi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends csiFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, csiFindUniqueOrThrowArgs>
    ): Prisma__csiClient<csiGetPayload<T>>

    /**
     * Find the first Csi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csiFindFirstArgs} args - Arguments to find a Csi
     * @example
     * // Get one Csi
     * const csi = await prisma.csi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends csiFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, csiFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'csi'> extends True ? Prisma__csiClient<csiGetPayload<T>> : Prisma__csiClient<csiGetPayload<T> | null, null>

    /**
     * Find the first Csi that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csiFindFirstOrThrowArgs} args - Arguments to find a Csi
     * @example
     * // Get one Csi
     * const csi = await prisma.csi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends csiFindFirstOrThrowArgs>(
      args?: SelectSubset<T, csiFindFirstOrThrowArgs>
    ): Prisma__csiClient<csiGetPayload<T>>

    /**
     * Find zero or more Csis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Csis
     * const csis = await prisma.csi.findMany()
     * 
     * // Get first 10 Csis
     * const csis = await prisma.csi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const csiWithIdOnly = await prisma.csi.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends csiFindManyArgs>(
      args?: SelectSubset<T, csiFindManyArgs>
    ): Prisma.PrismaPromise<Array<csiGetPayload<T>>>

    /**
     * Create a Csi.
     * @param {csiCreateArgs} args - Arguments to create a Csi.
     * @example
     * // Create one Csi
     * const Csi = await prisma.csi.create({
     *   data: {
     *     // ... data to create a Csi
     *   }
     * })
     * 
    **/
    create<T extends csiCreateArgs>(
      args: SelectSubset<T, csiCreateArgs>
    ): Prisma__csiClient<csiGetPayload<T>>

    /**
     * Delete a Csi.
     * @param {csiDeleteArgs} args - Arguments to delete one Csi.
     * @example
     * // Delete one Csi
     * const Csi = await prisma.csi.delete({
     *   where: {
     *     // ... filter to delete one Csi
     *   }
     * })
     * 
    **/
    delete<T extends csiDeleteArgs>(
      args: SelectSubset<T, csiDeleteArgs>
    ): Prisma__csiClient<csiGetPayload<T>>

    /**
     * Update one Csi.
     * @param {csiUpdateArgs} args - Arguments to update one Csi.
     * @example
     * // Update one Csi
     * const csi = await prisma.csi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends csiUpdateArgs>(
      args: SelectSubset<T, csiUpdateArgs>
    ): Prisma__csiClient<csiGetPayload<T>>

    /**
     * Delete zero or more Csis.
     * @param {csiDeleteManyArgs} args - Arguments to filter Csis to delete.
     * @example
     * // Delete a few Csis
     * const { count } = await prisma.csi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends csiDeleteManyArgs>(
      args?: SelectSubset<T, csiDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Csis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Csis
     * const csi = await prisma.csi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends csiUpdateManyArgs>(
      args: SelectSubset<T, csiUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Csi.
     * @param {csiUpsertArgs} args - Arguments to update or create a Csi.
     * @example
     * // Update or create a Csi
     * const csi = await prisma.csi.upsert({
     *   create: {
     *     // ... data to create a Csi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Csi we want to update
     *   }
     * })
    **/
    upsert<T extends csiUpsertArgs>(
      args: SelectSubset<T, csiUpsertArgs>
    ): Prisma__csiClient<csiGetPayload<T>>

    /**
     * Count the number of Csis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csiCountArgs} args - Arguments to filter Csis to count.
     * @example
     * // Count the number of Csis
     * const count = await prisma.csi.count({
     *   where: {
     *     // ... the filter for the Csis we want to count
     *   }
     * })
    **/
    count<T extends csiCountArgs>(
      args?: Subset<T, csiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CsiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Csi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CsiAggregateArgs>(args: Subset<T, CsiAggregateArgs>): Prisma.PrismaPromise<GetCsiAggregateType<T>>

    /**
     * Group by Csi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsiGroupByArgs} args - Group by arguments.
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
      T extends CsiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CsiGroupByArgs['orderBy'] }
        : { orderBy?: CsiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CsiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCsiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for csi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__csiClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * csi base type for findUnique actions
   */
  export type csiFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * Filter, which csi to fetch.
     */
    where: csiWhereUniqueInput
  }

  /**
   * csi findUnique
   */
  export interface csiFindUniqueArgs extends csiFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * csi findUniqueOrThrow
   */
  export type csiFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * Filter, which csi to fetch.
     */
    where: csiWhereUniqueInput
  }


  /**
   * csi base type for findFirst actions
   */
  export type csiFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * Filter, which csi to fetch.
     */
    where?: csiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csis to fetch.
     */
    orderBy?: Enumerable<csiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for csis.
     */
    cursor?: csiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of csis.
     */
    distinct?: Enumerable<CsiScalarFieldEnum>
  }

  /**
   * csi findFirst
   */
  export interface csiFindFirstArgs extends csiFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * csi findFirstOrThrow
   */
  export type csiFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * Filter, which csi to fetch.
     */
    where?: csiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csis to fetch.
     */
    orderBy?: Enumerable<csiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for csis.
     */
    cursor?: csiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of csis.
     */
    distinct?: Enumerable<CsiScalarFieldEnum>
  }


  /**
   * csi findMany
   */
  export type csiFindManyArgs = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * Filter, which csis to fetch.
     */
    where?: csiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csis to fetch.
     */
    orderBy?: Enumerable<csiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing csis.
     */
    cursor?: csiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csis.
     */
    skip?: number
    distinct?: Enumerable<CsiScalarFieldEnum>
  }


  /**
   * csi create
   */
  export type csiCreateArgs = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * The data needed to create a csi.
     */
    data: XOR<csiCreateInput, csiUncheckedCreateInput>
  }


  /**
   * csi update
   */
  export type csiUpdateArgs = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * The data needed to update a csi.
     */
    data: XOR<csiUpdateInput, csiUncheckedUpdateInput>
    /**
     * Choose, which csi to update.
     */
    where: csiWhereUniqueInput
  }


  /**
   * csi updateMany
   */
  export type csiUpdateManyArgs = {
    /**
     * The data used to update csis.
     */
    data: XOR<csiUpdateManyMutationInput, csiUncheckedUpdateManyInput>
    /**
     * Filter which csis to update
     */
    where?: csiWhereInput
  }


  /**
   * csi upsert
   */
  export type csiUpsertArgs = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * The filter to search for the csi to update in case it exists.
     */
    where: csiWhereUniqueInput
    /**
     * In case the csi found by the `where` argument doesn't exist, create a new csi with this data.
     */
    create: XOR<csiCreateInput, csiUncheckedCreateInput>
    /**
     * In case the csi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<csiUpdateInput, csiUncheckedUpdateInput>
  }


  /**
   * csi delete
   */
  export type csiDeleteArgs = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
    /**
     * Filter which csi to delete.
     */
    where: csiWhereUniqueInput
  }


  /**
   * csi deleteMany
   */
  export type csiDeleteManyArgs = {
    /**
     * Filter which csis to delete
     */
    where?: csiWhereInput
  }


  /**
   * csi without action
   */
  export type csiArgs = {
    /**
     * Select specific fields to fetch from the csi
     */
    select?: csiSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AuraScalarFieldEnum: {
    id: 'id',
    title: 'title',
    timendata: 'timendata',
    venue: 'venue',
    eventdetail: 'eventdetail'
  };

  export type AuraScalarFieldEnum = (typeof AuraScalarFieldEnum)[keyof typeof AuraScalarFieldEnum]


  export const AuthorcraftScalarFieldEnum: {
    id: 'id',
    title: 'title',
    timendata: 'timendata',
    venue: 'venue',
    eventdetail: 'eventdetail'
  };

  export type AuthorcraftScalarFieldEnum = (typeof AuthorcraftScalarFieldEnum)[keyof typeof AuthorcraftScalarFieldEnum]


  export const CsiScalarFieldEnum: {
    id: 'id',
    title: 'title',
    timendata: 'timendata',
    venue: 'venue',
    eventdetail: 'eventdetail'
  };

  export type CsiScalarFieldEnum = (typeof CsiScalarFieldEnum)[keyof typeof CsiScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    notifievent: 'notifievent',
    clubname: 'clubname',
    img: 'img'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TallemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    timendata: 'timendata',
    venue: 'venue',
    eventdetail: 'eventdetail'
  };

  export type TallemScalarFieldEnum = (typeof TallemScalarFieldEnum)[keyof typeof TallemScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type eventsWhereInput = {
    AND?: Enumerable<eventsWhereInput>
    OR?: Enumerable<eventsWhereInput>
    NOT?: Enumerable<eventsWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    notifievent?: StringFilter | string
    clubname?: StringFilter | string
    img?: StringFilter | string
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    notifievent?: SortOrder
    clubname?: SortOrder
    img?: SortOrder
  }

  export type eventsWhereUniqueInput = {
    id?: number
  }

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    notifievent?: SortOrder
    clubname?: SortOrder
    img?: SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<eventsScalarWhereWithAggregatesInput>
    OR?: Enumerable<eventsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<eventsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    notifievent?: StringWithAggregatesFilter | string
    clubname?: StringWithAggregatesFilter | string
    img?: StringWithAggregatesFilter | string
  }

  export type authorcraftWhereInput = {
    AND?: Enumerable<authorcraftWhereInput>
    OR?: Enumerable<authorcraftWhereInput>
    NOT?: Enumerable<authorcraftWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    timendata?: DateTimeFilter | Date | string
    venue?: StringFilter | string
    eventdetail?: StringFilter | string
  }

  export type authorcraftOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type authorcraftWhereUniqueInput = {
    id?: number
  }

  export type authorcraftOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
    _count?: authorcraftCountOrderByAggregateInput
    _avg?: authorcraftAvgOrderByAggregateInput
    _max?: authorcraftMaxOrderByAggregateInput
    _min?: authorcraftMinOrderByAggregateInput
    _sum?: authorcraftSumOrderByAggregateInput
  }

  export type authorcraftScalarWhereWithAggregatesInput = {
    AND?: Enumerable<authorcraftScalarWhereWithAggregatesInput>
    OR?: Enumerable<authorcraftScalarWhereWithAggregatesInput>
    NOT?: Enumerable<authorcraftScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    timendata?: DateTimeWithAggregatesFilter | Date | string
    venue?: StringWithAggregatesFilter | string
    eventdetail?: StringWithAggregatesFilter | string
  }

  export type auraWhereInput = {
    AND?: Enumerable<auraWhereInput>
    OR?: Enumerable<auraWhereInput>
    NOT?: Enumerable<auraWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    timendata?: DateTimeFilter | Date | string
    venue?: StringFilter | string
    eventdetail?: StringFilter | string
  }

  export type auraOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type auraWhereUniqueInput = {
    id?: number
  }

  export type auraOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
    _count?: auraCountOrderByAggregateInput
    _avg?: auraAvgOrderByAggregateInput
    _max?: auraMaxOrderByAggregateInput
    _min?: auraMinOrderByAggregateInput
    _sum?: auraSumOrderByAggregateInput
  }

  export type auraScalarWhereWithAggregatesInput = {
    AND?: Enumerable<auraScalarWhereWithAggregatesInput>
    OR?: Enumerable<auraScalarWhereWithAggregatesInput>
    NOT?: Enumerable<auraScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    timendata?: DateTimeWithAggregatesFilter | Date | string
    venue?: StringWithAggregatesFilter | string
    eventdetail?: StringWithAggregatesFilter | string
  }

  export type tallemWhereInput = {
    AND?: Enumerable<tallemWhereInput>
    OR?: Enumerable<tallemWhereInput>
    NOT?: Enumerable<tallemWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    timendata?: DateTimeFilter | Date | string
    venue?: StringFilter | string
    eventdetail?: StringFilter | string
  }

  export type tallemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type tallemWhereUniqueInput = {
    id?: number
  }

  export type tallemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
    _count?: tallemCountOrderByAggregateInput
    _avg?: tallemAvgOrderByAggregateInput
    _max?: tallemMaxOrderByAggregateInput
    _min?: tallemMinOrderByAggregateInput
    _sum?: tallemSumOrderByAggregateInput
  }

  export type tallemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tallemScalarWhereWithAggregatesInput>
    OR?: Enumerable<tallemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tallemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    timendata?: DateTimeWithAggregatesFilter | Date | string
    venue?: StringWithAggregatesFilter | string
    eventdetail?: StringWithAggregatesFilter | string
  }

  export type csiWhereInput = {
    AND?: Enumerable<csiWhereInput>
    OR?: Enumerable<csiWhereInput>
    NOT?: Enumerable<csiWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    timendata?: DateTimeFilter | Date | string
    venue?: StringFilter | string
    eventdetail?: StringFilter | string
  }

  export type csiOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type csiWhereUniqueInput = {
    id?: number
  }

  export type csiOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
    _count?: csiCountOrderByAggregateInput
    _avg?: csiAvgOrderByAggregateInput
    _max?: csiMaxOrderByAggregateInput
    _min?: csiMinOrderByAggregateInput
    _sum?: csiSumOrderByAggregateInput
  }

  export type csiScalarWhereWithAggregatesInput = {
    AND?: Enumerable<csiScalarWhereWithAggregatesInput>
    OR?: Enumerable<csiScalarWhereWithAggregatesInput>
    NOT?: Enumerable<csiScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    timendata?: DateTimeWithAggregatesFilter | Date | string
    venue?: StringWithAggregatesFilter | string
    eventdetail?: StringWithAggregatesFilter | string
  }

  export type eventsCreateInput = {
    title: string
    notifievent: string
    clubname: string
    img: string
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    title: string
    notifievent: string
    clubname: string
    img: string
  }

  export type eventsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    notifievent?: StringFieldUpdateOperationsInput | string
    clubname?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    notifievent?: StringFieldUpdateOperationsInput | string
    clubname?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type eventsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    notifievent?: StringFieldUpdateOperationsInput | string
    clubname?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    notifievent?: StringFieldUpdateOperationsInput | string
    clubname?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type authorcraftCreateInput = {
    title: string
    timendata: Date | string
    venue: string
    eventdetail: string
  }

  export type authorcraftUncheckedCreateInput = {
    id?: number
    title: string
    timendata: Date | string
    venue: string
    eventdetail: string
  }

  export type authorcraftUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type authorcraftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type authorcraftUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type authorcraftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type auraCreateInput = {
    title: string
    timendata: Date | string
    venue: string
    eventdetail: string
  }

  export type auraUncheckedCreateInput = {
    id?: number
    title: string
    timendata: Date | string
    venue: string
    eventdetail: string
  }

  export type auraUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type auraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type auraUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type auraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type tallemCreateInput = {
    title: string
    timendata: Date | string
    venue: string
    eventdetail: string
  }

  export type tallemUncheckedCreateInput = {
    id?: number
    title: string
    timendata: Date | string
    venue: string
    eventdetail: string
  }

  export type tallemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type tallemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type tallemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type tallemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type csiCreateInput = {
    title: string
    timendata: Date | string
    venue: string
    eventdetail: string
  }

  export type csiUncheckedCreateInput = {
    id?: number
    title: string
    timendata: Date | string
    venue: string
    eventdetail: string
  }

  export type csiUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type csiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type csiUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type csiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    timendata?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    eventdetail?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notifievent?: SortOrder
    clubname?: SortOrder
    img?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notifievent?: SortOrder
    clubname?: SortOrder
    img?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notifievent?: SortOrder
    clubname?: SortOrder
    img?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type authorcraftCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type authorcraftAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authorcraftMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type authorcraftMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type authorcraftSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type auraCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type auraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auraMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type auraMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type auraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tallemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type tallemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tallemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type tallemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type tallemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type csiCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type csiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type csiMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type csiMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timendata?: SortOrder
    venue?: SortOrder
    eventdetail?: SortOrder
  }

  export type csiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
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