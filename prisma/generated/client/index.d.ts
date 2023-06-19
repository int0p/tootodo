
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
 * Model Todo
 * 
 */
export type Todo = {
  uid: string
  created_at: Date
  title: string
  done: boolean
}

/**
 * Model Memo
 * 
 */
export type Memo = {
  uid: string
  created_at: Date
  content: string
  isTodo: boolean
  isAsk: boolean
}

/**
 * Model studyRecord
 * 
 */
export type studyRecord = {
  uid: string
  created_at: Date
  todo_title: string
  todo_id: string
  startTime: Date
  endTime: Date
  studyMinutes: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Todos
 * const todos = await prisma.todo.findMany()
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
   * // Fetch zero or more Todos
   * const todos = await prisma.todo.findMany()
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
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<GlobalReject>;

  /**
   * `prisma.memo`: Exposes CRUD operations for the **Memo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memos
    * const memos = await prisma.memo.findMany()
    * ```
    */
  get memo(): Prisma.MemoDelegate<GlobalReject>;

  /**
   * `prisma.studyRecord`: Exposes CRUD operations for the **studyRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyRecords
    * const studyRecords = await prisma.studyRecord.findMany()
    * ```
    */
  get studyRecord(): Prisma.studyRecordDelegate<GlobalReject>;
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
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
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
    Todo: 'Todo',
    Memo: 'Memo',
    studyRecord: 'studyRecord'
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
   * Model Todo
   */


  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoMinAggregateOutputType = {
    uid: string | null
    created_at: Date | null
    title: string | null
    done: boolean | null
  }

  export type TodoMaxAggregateOutputType = {
    uid: string | null
    created_at: Date | null
    title: string | null
    done: boolean | null
  }

  export type TodoCountAggregateOutputType = {
    uid: number
    created_at: number
    title: number
    done: number
    _all: number
  }


  export type TodoMinAggregateInputType = {
    uid?: true
    created_at?: true
    title?: true
    done?: true
  }

  export type TodoMaxAggregateInputType = {
    uid?: true
    created_at?: true
    title?: true
    done?: true
  }

  export type TodoCountAggregateInputType = {
    uid?: true
    created_at?: true
    title?: true
    done?: true
    _all?: true
  }

  export type TodoAggregateArgs = {
    /**
     * Filter which Todo to aggregate.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: Enumerable<TodoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs = {
    where?: TodoWhereInput
    orderBy?: Enumerable<TodoOrderByWithAggregationInput>
    by: TodoScalarFieldEnum[]
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }


  export type TodoGroupByOutputType = {
    uid: string
    created_at: Date
    title: string
    done: boolean
    _count: TodoCountAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect = {
    uid?: boolean
    created_at?: boolean
    title?: boolean
    done?: boolean
  }


  export type TodoGetPayload<S extends boolean | null | undefined | TodoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Todo :
    S extends undefined ? never :
    S extends { include: any } & (TodoArgs | TodoFindManyArgs)
    ? Todo 
    : S extends { select: any } & (TodoArgs | TodoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Todo ? Todo[P] : never
  } 
      : Todo


  type TodoCountArgs = 
    Omit<TodoFindManyArgs, 'select' | 'include'> & {
      select?: TodoCountAggregateInputType | true
    }

  export interface TodoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TodoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TodoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Todo'> extends True ? Prisma__TodoClient<TodoGetPayload<T>> : Prisma__TodoClient<TodoGetPayload<T> | null, null>

    /**
     * Find one Todo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TodoFindUniqueOrThrowArgs>
    ): Prisma__TodoClient<TodoGetPayload<T>>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TodoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TodoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Todo'> extends True ? Prisma__TodoClient<TodoGetPayload<T>> : Prisma__TodoClient<TodoGetPayload<T> | null, null>

    /**
     * Find the first Todo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TodoFindFirstOrThrowArgs>
    ): Prisma__TodoClient<TodoGetPayload<T>>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const todoWithUidOnly = await prisma.todo.findMany({ select: { uid: true } })
     * 
    **/
    findMany<T extends TodoFindManyArgs>(
      args?: SelectSubset<T, TodoFindManyArgs>
    ): Prisma.PrismaPromise<Array<TodoGetPayload<T>>>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
    **/
    create<T extends TodoCreateArgs>(
      args: SelectSubset<T, TodoCreateArgs>
    ): Prisma__TodoClient<TodoGetPayload<T>>

    /**
     * Create many Todos.
     *     @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     *     @example
     *     // Create many Todos
     *     const todo = await prisma.todo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TodoCreateManyArgs>(
      args?: SelectSubset<T, TodoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
    **/
    delete<T extends TodoDeleteArgs>(
      args: SelectSubset<T, TodoDeleteArgs>
    ): Prisma__TodoClient<TodoGetPayload<T>>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TodoUpdateArgs>(
      args: SelectSubset<T, TodoUpdateArgs>
    ): Prisma__TodoClient<TodoGetPayload<T>>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TodoDeleteManyArgs>(
      args?: SelectSubset<T, TodoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TodoUpdateManyArgs>(
      args: SelectSubset<T, TodoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
    **/
    upsert<T extends TodoUpsertArgs>(
      args: SelectSubset<T, TodoUpsertArgs>
    ): Prisma__TodoClient<TodoGetPayload<T>>

    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
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
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TodoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Todo base type for findUnique actions
   */
  export type TodoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findUnique
   */
  export interface TodoFindUniqueArgs extends TodoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todo findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }


  /**
   * Todo base type for findFirst actions
   */
  export type TodoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: Enumerable<TodoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: Enumerable<TodoScalarFieldEnum>
  }

  /**
   * Todo findFirst
   */
  export interface TodoFindFirstArgs extends TodoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todo findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: Enumerable<TodoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: Enumerable<TodoScalarFieldEnum>
  }


  /**
   * Todo findMany
   */
  export type TodoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * Filter, which Todos to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: Enumerable<TodoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    distinct?: Enumerable<TodoScalarFieldEnum>
  }


  /**
   * Todo create
   */
  export type TodoCreateArgs = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * The data needed to create a Todo.
     */
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }


  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs = {
    /**
     * The data used to create many Todos.
     */
    data: Enumerable<TodoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Todo update
   */
  export type TodoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * The data needed to update a Todo.
     */
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     */
    where: TodoWhereUniqueInput
  }


  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs = {
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
  }


  /**
   * Todo upsert
   */
  export type TodoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * The filter to search for the Todo to update in case it exists.
     */
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     */
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }


  /**
   * Todo delete
   */
  export type TodoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
    /**
     * Filter which Todo to delete.
     */
    where: TodoWhereUniqueInput
  }


  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs = {
    /**
     * Filter which Todos to delete
     */
    where?: TodoWhereInput
  }


  /**
   * Todo without action
   */
  export type TodoArgs = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect | null
  }



  /**
   * Model Memo
   */


  export type AggregateMemo = {
    _count: MemoCountAggregateOutputType | null
    _min: MemoMinAggregateOutputType | null
    _max: MemoMaxAggregateOutputType | null
  }

  export type MemoMinAggregateOutputType = {
    uid: string | null
    created_at: Date | null
    content: string | null
    isTodo: boolean | null
    isAsk: boolean | null
  }

  export type MemoMaxAggregateOutputType = {
    uid: string | null
    created_at: Date | null
    content: string | null
    isTodo: boolean | null
    isAsk: boolean | null
  }

  export type MemoCountAggregateOutputType = {
    uid: number
    created_at: number
    content: number
    isTodo: number
    isAsk: number
    _all: number
  }


  export type MemoMinAggregateInputType = {
    uid?: true
    created_at?: true
    content?: true
    isTodo?: true
    isAsk?: true
  }

  export type MemoMaxAggregateInputType = {
    uid?: true
    created_at?: true
    content?: true
    isTodo?: true
    isAsk?: true
  }

  export type MemoCountAggregateInputType = {
    uid?: true
    created_at?: true
    content?: true
    isTodo?: true
    isAsk?: true
    _all?: true
  }

  export type MemoAggregateArgs = {
    /**
     * Filter which Memo to aggregate.
     */
    where?: MemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memos to fetch.
     */
    orderBy?: Enumerable<MemoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memos
    **/
    _count?: true | MemoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoMaxAggregateInputType
  }

  export type GetMemoAggregateType<T extends MemoAggregateArgs> = {
        [P in keyof T & keyof AggregateMemo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemo[P]>
      : GetScalarType<T[P], AggregateMemo[P]>
  }




  export type MemoGroupByArgs = {
    where?: MemoWhereInput
    orderBy?: Enumerable<MemoOrderByWithAggregationInput>
    by: MemoScalarFieldEnum[]
    having?: MemoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoCountAggregateInputType | true
    _min?: MemoMinAggregateInputType
    _max?: MemoMaxAggregateInputType
  }


  export type MemoGroupByOutputType = {
    uid: string
    created_at: Date
    content: string
    isTodo: boolean
    isAsk: boolean
    _count: MemoCountAggregateOutputType | null
    _min: MemoMinAggregateOutputType | null
    _max: MemoMaxAggregateOutputType | null
  }

  type GetMemoGroupByPayload<T extends MemoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MemoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoGroupByOutputType[P]>
            : GetScalarType<T[P], MemoGroupByOutputType[P]>
        }
      >
    >


  export type MemoSelect = {
    uid?: boolean
    created_at?: boolean
    content?: boolean
    isTodo?: boolean
    isAsk?: boolean
  }


  export type MemoGetPayload<S extends boolean | null | undefined | MemoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Memo :
    S extends undefined ? never :
    S extends { include: any } & (MemoArgs | MemoFindManyArgs)
    ? Memo 
    : S extends { select: any } & (MemoArgs | MemoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Memo ? Memo[P] : never
  } 
      : Memo


  type MemoCountArgs = 
    Omit<MemoFindManyArgs, 'select' | 'include'> & {
      select?: MemoCountAggregateInputType | true
    }

  export interface MemoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Memo that matches the filter.
     * @param {MemoFindUniqueArgs} args - Arguments to find a Memo
     * @example
     * // Get one Memo
     * const memo = await prisma.memo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MemoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Memo'> extends True ? Prisma__MemoClient<MemoGetPayload<T>> : Prisma__MemoClient<MemoGetPayload<T> | null, null>

    /**
     * Find one Memo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MemoFindUniqueOrThrowArgs} args - Arguments to find a Memo
     * @example
     * // Get one Memo
     * const memo = await prisma.memo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MemoFindUniqueOrThrowArgs>
    ): Prisma__MemoClient<MemoGetPayload<T>>

    /**
     * Find the first Memo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoFindFirstArgs} args - Arguments to find a Memo
     * @example
     * // Get one Memo
     * const memo = await prisma.memo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MemoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Memo'> extends True ? Prisma__MemoClient<MemoGetPayload<T>> : Prisma__MemoClient<MemoGetPayload<T> | null, null>

    /**
     * Find the first Memo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoFindFirstOrThrowArgs} args - Arguments to find a Memo
     * @example
     * // Get one Memo
     * const memo = await prisma.memo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MemoFindFirstOrThrowArgs>
    ): Prisma__MemoClient<MemoGetPayload<T>>

    /**
     * Find zero or more Memos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memos
     * const memos = await prisma.memo.findMany()
     * 
     * // Get first 10 Memos
     * const memos = await prisma.memo.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const memoWithUidOnly = await prisma.memo.findMany({ select: { uid: true } })
     * 
    **/
    findMany<T extends MemoFindManyArgs>(
      args?: SelectSubset<T, MemoFindManyArgs>
    ): Prisma.PrismaPromise<Array<MemoGetPayload<T>>>

    /**
     * Create a Memo.
     * @param {MemoCreateArgs} args - Arguments to create a Memo.
     * @example
     * // Create one Memo
     * const Memo = await prisma.memo.create({
     *   data: {
     *     // ... data to create a Memo
     *   }
     * })
     * 
    **/
    create<T extends MemoCreateArgs>(
      args: SelectSubset<T, MemoCreateArgs>
    ): Prisma__MemoClient<MemoGetPayload<T>>

    /**
     * Create many Memos.
     *     @param {MemoCreateManyArgs} args - Arguments to create many Memos.
     *     @example
     *     // Create many Memos
     *     const memo = await prisma.memo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MemoCreateManyArgs>(
      args?: SelectSubset<T, MemoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Memo.
     * @param {MemoDeleteArgs} args - Arguments to delete one Memo.
     * @example
     * // Delete one Memo
     * const Memo = await prisma.memo.delete({
     *   where: {
     *     // ... filter to delete one Memo
     *   }
     * })
     * 
    **/
    delete<T extends MemoDeleteArgs>(
      args: SelectSubset<T, MemoDeleteArgs>
    ): Prisma__MemoClient<MemoGetPayload<T>>

    /**
     * Update one Memo.
     * @param {MemoUpdateArgs} args - Arguments to update one Memo.
     * @example
     * // Update one Memo
     * const memo = await prisma.memo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemoUpdateArgs>(
      args: SelectSubset<T, MemoUpdateArgs>
    ): Prisma__MemoClient<MemoGetPayload<T>>

    /**
     * Delete zero or more Memos.
     * @param {MemoDeleteManyArgs} args - Arguments to filter Memos to delete.
     * @example
     * // Delete a few Memos
     * const { count } = await prisma.memo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemoDeleteManyArgs>(
      args?: SelectSubset<T, MemoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memos
     * const memo = await prisma.memo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemoUpdateManyArgs>(
      args: SelectSubset<T, MemoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Memo.
     * @param {MemoUpsertArgs} args - Arguments to update or create a Memo.
     * @example
     * // Update or create a Memo
     * const memo = await prisma.memo.upsert({
     *   create: {
     *     // ... data to create a Memo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memo we want to update
     *   }
     * })
    **/
    upsert<T extends MemoUpsertArgs>(
      args: SelectSubset<T, MemoUpsertArgs>
    ): Prisma__MemoClient<MemoGetPayload<T>>

    /**
     * Count the number of Memos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoCountArgs} args - Arguments to filter Memos to count.
     * @example
     * // Count the number of Memos
     * const count = await prisma.memo.count({
     *   where: {
     *     // ... the filter for the Memos we want to count
     *   }
     * })
    **/
    count<T extends MemoCountArgs>(
      args?: Subset<T, MemoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemoAggregateArgs>(args: Subset<T, MemoAggregateArgs>): Prisma.PrismaPromise<GetMemoAggregateType<T>>

    /**
     * Group by Memo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoGroupByArgs} args - Group by arguments.
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
      T extends MemoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoGroupByArgs['orderBy'] }
        : { orderBy?: MemoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Memo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MemoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Memo base type for findUnique actions
   */
  export type MemoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * Filter, which Memo to fetch.
     */
    where: MemoWhereUniqueInput
  }

  /**
   * Memo findUnique
   */
  export interface MemoFindUniqueArgs extends MemoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Memo findUniqueOrThrow
   */
  export type MemoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * Filter, which Memo to fetch.
     */
    where: MemoWhereUniqueInput
  }


  /**
   * Memo base type for findFirst actions
   */
  export type MemoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * Filter, which Memo to fetch.
     */
    where?: MemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memos to fetch.
     */
    orderBy?: Enumerable<MemoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memos.
     */
    cursor?: MemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memos.
     */
    distinct?: Enumerable<MemoScalarFieldEnum>
  }

  /**
   * Memo findFirst
   */
  export interface MemoFindFirstArgs extends MemoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Memo findFirstOrThrow
   */
  export type MemoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * Filter, which Memo to fetch.
     */
    where?: MemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memos to fetch.
     */
    orderBy?: Enumerable<MemoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memos.
     */
    cursor?: MemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memos.
     */
    distinct?: Enumerable<MemoScalarFieldEnum>
  }


  /**
   * Memo findMany
   */
  export type MemoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * Filter, which Memos to fetch.
     */
    where?: MemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memos to fetch.
     */
    orderBy?: Enumerable<MemoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memos.
     */
    cursor?: MemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memos.
     */
    skip?: number
    distinct?: Enumerable<MemoScalarFieldEnum>
  }


  /**
   * Memo create
   */
  export type MemoCreateArgs = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * The data needed to create a Memo.
     */
    data: XOR<MemoCreateInput, MemoUncheckedCreateInput>
  }


  /**
   * Memo createMany
   */
  export type MemoCreateManyArgs = {
    /**
     * The data used to create many Memos.
     */
    data: Enumerable<MemoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Memo update
   */
  export type MemoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * The data needed to update a Memo.
     */
    data: XOR<MemoUpdateInput, MemoUncheckedUpdateInput>
    /**
     * Choose, which Memo to update.
     */
    where: MemoWhereUniqueInput
  }


  /**
   * Memo updateMany
   */
  export type MemoUpdateManyArgs = {
    /**
     * The data used to update Memos.
     */
    data: XOR<MemoUpdateManyMutationInput, MemoUncheckedUpdateManyInput>
    /**
     * Filter which Memos to update
     */
    where?: MemoWhereInput
  }


  /**
   * Memo upsert
   */
  export type MemoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * The filter to search for the Memo to update in case it exists.
     */
    where: MemoWhereUniqueInput
    /**
     * In case the Memo found by the `where` argument doesn't exist, create a new Memo with this data.
     */
    create: XOR<MemoCreateInput, MemoUncheckedCreateInput>
    /**
     * In case the Memo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemoUpdateInput, MemoUncheckedUpdateInput>
  }


  /**
   * Memo delete
   */
  export type MemoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
    /**
     * Filter which Memo to delete.
     */
    where: MemoWhereUniqueInput
  }


  /**
   * Memo deleteMany
   */
  export type MemoDeleteManyArgs = {
    /**
     * Filter which Memos to delete
     */
    where?: MemoWhereInput
  }


  /**
   * Memo without action
   */
  export type MemoArgs = {
    /**
     * Select specific fields to fetch from the Memo
     */
    select?: MemoSelect | null
  }



  /**
   * Model studyRecord
   */


  export type AggregateStudyRecord = {
    _count: StudyRecordCountAggregateOutputType | null
    _avg: StudyRecordAvgAggregateOutputType | null
    _sum: StudyRecordSumAggregateOutputType | null
    _min: StudyRecordMinAggregateOutputType | null
    _max: StudyRecordMaxAggregateOutputType | null
  }

  export type StudyRecordAvgAggregateOutputType = {
    studyMinutes: number | null
  }

  export type StudyRecordSumAggregateOutputType = {
    studyMinutes: number | null
  }

  export type StudyRecordMinAggregateOutputType = {
    uid: string | null
    created_at: Date | null
    todo_title: string | null
    todo_id: string | null
    startTime: Date | null
    endTime: Date | null
    studyMinutes: number | null
  }

  export type StudyRecordMaxAggregateOutputType = {
    uid: string | null
    created_at: Date | null
    todo_title: string | null
    todo_id: string | null
    startTime: Date | null
    endTime: Date | null
    studyMinutes: number | null
  }

  export type StudyRecordCountAggregateOutputType = {
    uid: number
    created_at: number
    todo_title: number
    todo_id: number
    startTime: number
    endTime: number
    studyMinutes: number
    _all: number
  }


  export type StudyRecordAvgAggregateInputType = {
    studyMinutes?: true
  }

  export type StudyRecordSumAggregateInputType = {
    studyMinutes?: true
  }

  export type StudyRecordMinAggregateInputType = {
    uid?: true
    created_at?: true
    todo_title?: true
    todo_id?: true
    startTime?: true
    endTime?: true
    studyMinutes?: true
  }

  export type StudyRecordMaxAggregateInputType = {
    uid?: true
    created_at?: true
    todo_title?: true
    todo_id?: true
    startTime?: true
    endTime?: true
    studyMinutes?: true
  }

  export type StudyRecordCountAggregateInputType = {
    uid?: true
    created_at?: true
    todo_title?: true
    todo_id?: true
    startTime?: true
    endTime?: true
    studyMinutes?: true
    _all?: true
  }

  export type StudyRecordAggregateArgs = {
    /**
     * Filter which studyRecord to aggregate.
     */
    where?: studyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studyRecords to fetch.
     */
    orderBy?: Enumerable<studyRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned studyRecords
    **/
    _count?: true | StudyRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyRecordMaxAggregateInputType
  }

  export type GetStudyRecordAggregateType<T extends StudyRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyRecord[P]>
      : GetScalarType<T[P], AggregateStudyRecord[P]>
  }




  export type StudyRecordGroupByArgs = {
    where?: studyRecordWhereInput
    orderBy?: Enumerable<studyRecordOrderByWithAggregationInput>
    by: StudyRecordScalarFieldEnum[]
    having?: studyRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyRecordCountAggregateInputType | true
    _avg?: StudyRecordAvgAggregateInputType
    _sum?: StudyRecordSumAggregateInputType
    _min?: StudyRecordMinAggregateInputType
    _max?: StudyRecordMaxAggregateInputType
  }


  export type StudyRecordGroupByOutputType = {
    uid: string
    created_at: Date
    todo_title: string
    todo_id: string
    startTime: Date
    endTime: Date
    studyMinutes: number
    _count: StudyRecordCountAggregateOutputType | null
    _avg: StudyRecordAvgAggregateOutputType | null
    _sum: StudyRecordSumAggregateOutputType | null
    _min: StudyRecordMinAggregateOutputType | null
    _max: StudyRecordMaxAggregateOutputType | null
  }

  type GetStudyRecordGroupByPayload<T extends StudyRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StudyRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StudyRecordGroupByOutputType[P]>
        }
      >
    >


  export type studyRecordSelect = {
    uid?: boolean
    created_at?: boolean
    todo_title?: boolean
    todo_id?: boolean
    startTime?: boolean
    endTime?: boolean
    studyMinutes?: boolean
  }


  export type studyRecordGetPayload<S extends boolean | null | undefined | studyRecordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? studyRecord :
    S extends undefined ? never :
    S extends { include: any } & (studyRecordArgs | studyRecordFindManyArgs)
    ? studyRecord 
    : S extends { select: any } & (studyRecordArgs | studyRecordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof studyRecord ? studyRecord[P] : never
  } 
      : studyRecord


  type studyRecordCountArgs = 
    Omit<studyRecordFindManyArgs, 'select' | 'include'> & {
      select?: StudyRecordCountAggregateInputType | true
    }

  export interface studyRecordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one StudyRecord that matches the filter.
     * @param {studyRecordFindUniqueArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends studyRecordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, studyRecordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'studyRecord'> extends True ? Prisma__studyRecordClient<studyRecordGetPayload<T>> : Prisma__studyRecordClient<studyRecordGetPayload<T> | null, null>

    /**
     * Find one StudyRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {studyRecordFindUniqueOrThrowArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends studyRecordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, studyRecordFindUniqueOrThrowArgs>
    ): Prisma__studyRecordClient<studyRecordGetPayload<T>>

    /**
     * Find the first StudyRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studyRecordFindFirstArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends studyRecordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, studyRecordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'studyRecord'> extends True ? Prisma__studyRecordClient<studyRecordGetPayload<T>> : Prisma__studyRecordClient<studyRecordGetPayload<T> | null, null>

    /**
     * Find the first StudyRecord that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studyRecordFindFirstOrThrowArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends studyRecordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, studyRecordFindFirstOrThrowArgs>
    ): Prisma__studyRecordClient<studyRecordGetPayload<T>>

    /**
     * Find zero or more StudyRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studyRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyRecords
     * const studyRecords = await prisma.studyRecord.findMany()
     * 
     * // Get first 10 StudyRecords
     * const studyRecords = await prisma.studyRecord.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const studyRecordWithUidOnly = await prisma.studyRecord.findMany({ select: { uid: true } })
     * 
    **/
    findMany<T extends studyRecordFindManyArgs>(
      args?: SelectSubset<T, studyRecordFindManyArgs>
    ): Prisma.PrismaPromise<Array<studyRecordGetPayload<T>>>

    /**
     * Create a StudyRecord.
     * @param {studyRecordCreateArgs} args - Arguments to create a StudyRecord.
     * @example
     * // Create one StudyRecord
     * const StudyRecord = await prisma.studyRecord.create({
     *   data: {
     *     // ... data to create a StudyRecord
     *   }
     * })
     * 
    **/
    create<T extends studyRecordCreateArgs>(
      args: SelectSubset<T, studyRecordCreateArgs>
    ): Prisma__studyRecordClient<studyRecordGetPayload<T>>

    /**
     * Create many StudyRecords.
     *     @param {studyRecordCreateManyArgs} args - Arguments to create many StudyRecords.
     *     @example
     *     // Create many StudyRecords
     *     const studyRecord = await prisma.studyRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends studyRecordCreateManyArgs>(
      args?: SelectSubset<T, studyRecordCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudyRecord.
     * @param {studyRecordDeleteArgs} args - Arguments to delete one StudyRecord.
     * @example
     * // Delete one StudyRecord
     * const StudyRecord = await prisma.studyRecord.delete({
     *   where: {
     *     // ... filter to delete one StudyRecord
     *   }
     * })
     * 
    **/
    delete<T extends studyRecordDeleteArgs>(
      args: SelectSubset<T, studyRecordDeleteArgs>
    ): Prisma__studyRecordClient<studyRecordGetPayload<T>>

    /**
     * Update one StudyRecord.
     * @param {studyRecordUpdateArgs} args - Arguments to update one StudyRecord.
     * @example
     * // Update one StudyRecord
     * const studyRecord = await prisma.studyRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends studyRecordUpdateArgs>(
      args: SelectSubset<T, studyRecordUpdateArgs>
    ): Prisma__studyRecordClient<studyRecordGetPayload<T>>

    /**
     * Delete zero or more StudyRecords.
     * @param {studyRecordDeleteManyArgs} args - Arguments to filter StudyRecords to delete.
     * @example
     * // Delete a few StudyRecords
     * const { count } = await prisma.studyRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends studyRecordDeleteManyArgs>(
      args?: SelectSubset<T, studyRecordDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studyRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyRecords
     * const studyRecord = await prisma.studyRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends studyRecordUpdateManyArgs>(
      args: SelectSubset<T, studyRecordUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudyRecord.
     * @param {studyRecordUpsertArgs} args - Arguments to update or create a StudyRecord.
     * @example
     * // Update or create a StudyRecord
     * const studyRecord = await prisma.studyRecord.upsert({
     *   create: {
     *     // ... data to create a StudyRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyRecord we want to update
     *   }
     * })
    **/
    upsert<T extends studyRecordUpsertArgs>(
      args: SelectSubset<T, studyRecordUpsertArgs>
    ): Prisma__studyRecordClient<studyRecordGetPayload<T>>

    /**
     * Count the number of StudyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studyRecordCountArgs} args - Arguments to filter StudyRecords to count.
     * @example
     * // Count the number of StudyRecords
     * const count = await prisma.studyRecord.count({
     *   where: {
     *     // ... the filter for the StudyRecords we want to count
     *   }
     * })
    **/
    count<T extends studyRecordCountArgs>(
      args?: Subset<T, studyRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyRecordAggregateArgs>(args: Subset<T, StudyRecordAggregateArgs>): Prisma.PrismaPromise<GetStudyRecordAggregateType<T>>

    /**
     * Group by StudyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordGroupByArgs} args - Group by arguments.
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
      T extends StudyRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyRecordGroupByArgs['orderBy'] }
        : { orderBy?: StudyRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudyRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for studyRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__studyRecordClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * studyRecord base type for findUnique actions
   */
  export type studyRecordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * Filter, which studyRecord to fetch.
     */
    where: studyRecordWhereUniqueInput
  }

  /**
   * studyRecord findUnique
   */
  export interface studyRecordFindUniqueArgs extends studyRecordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * studyRecord findUniqueOrThrow
   */
  export type studyRecordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * Filter, which studyRecord to fetch.
     */
    where: studyRecordWhereUniqueInput
  }


  /**
   * studyRecord base type for findFirst actions
   */
  export type studyRecordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * Filter, which studyRecord to fetch.
     */
    where?: studyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studyRecords to fetch.
     */
    orderBy?: Enumerable<studyRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studyRecords.
     */
    cursor?: studyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studyRecords.
     */
    distinct?: Enumerable<StudyRecordScalarFieldEnum>
  }

  /**
   * studyRecord findFirst
   */
  export interface studyRecordFindFirstArgs extends studyRecordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * studyRecord findFirstOrThrow
   */
  export type studyRecordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * Filter, which studyRecord to fetch.
     */
    where?: studyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studyRecords to fetch.
     */
    orderBy?: Enumerable<studyRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studyRecords.
     */
    cursor?: studyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studyRecords.
     */
    distinct?: Enumerable<StudyRecordScalarFieldEnum>
  }


  /**
   * studyRecord findMany
   */
  export type studyRecordFindManyArgs = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * Filter, which studyRecords to fetch.
     */
    where?: studyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studyRecords to fetch.
     */
    orderBy?: Enumerable<studyRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing studyRecords.
     */
    cursor?: studyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studyRecords.
     */
    skip?: number
    distinct?: Enumerable<StudyRecordScalarFieldEnum>
  }


  /**
   * studyRecord create
   */
  export type studyRecordCreateArgs = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * The data needed to create a studyRecord.
     */
    data: XOR<studyRecordCreateInput, studyRecordUncheckedCreateInput>
  }


  /**
   * studyRecord createMany
   */
  export type studyRecordCreateManyArgs = {
    /**
     * The data used to create many studyRecords.
     */
    data: Enumerable<studyRecordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * studyRecord update
   */
  export type studyRecordUpdateArgs = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * The data needed to update a studyRecord.
     */
    data: XOR<studyRecordUpdateInput, studyRecordUncheckedUpdateInput>
    /**
     * Choose, which studyRecord to update.
     */
    where: studyRecordWhereUniqueInput
  }


  /**
   * studyRecord updateMany
   */
  export type studyRecordUpdateManyArgs = {
    /**
     * The data used to update studyRecords.
     */
    data: XOR<studyRecordUpdateManyMutationInput, studyRecordUncheckedUpdateManyInput>
    /**
     * Filter which studyRecords to update
     */
    where?: studyRecordWhereInput
  }


  /**
   * studyRecord upsert
   */
  export type studyRecordUpsertArgs = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * The filter to search for the studyRecord to update in case it exists.
     */
    where: studyRecordWhereUniqueInput
    /**
     * In case the studyRecord found by the `where` argument doesn't exist, create a new studyRecord with this data.
     */
    create: XOR<studyRecordCreateInput, studyRecordUncheckedCreateInput>
    /**
     * In case the studyRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studyRecordUpdateInput, studyRecordUncheckedUpdateInput>
  }


  /**
   * studyRecord delete
   */
  export type studyRecordDeleteArgs = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
    /**
     * Filter which studyRecord to delete.
     */
    where: studyRecordWhereUniqueInput
  }


  /**
   * studyRecord deleteMany
   */
  export type studyRecordDeleteManyArgs = {
    /**
     * Filter which studyRecords to delete
     */
    where?: studyRecordWhereInput
  }


  /**
   * studyRecord without action
   */
  export type studyRecordArgs = {
    /**
     * Select specific fields to fetch from the studyRecord
     */
    select?: studyRecordSelect | null
  }



  /**
   * Enums
   */

  export const MemoScalarFieldEnum: {
    uid: 'uid',
    created_at: 'created_at',
    content: 'content',
    isTodo: 'isTodo',
    isAsk: 'isAsk'
  };

  export type MemoScalarFieldEnum = (typeof MemoScalarFieldEnum)[keyof typeof MemoScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudyRecordScalarFieldEnum: {
    uid: 'uid',
    created_at: 'created_at',
    todo_title: 'todo_title',
    todo_id: 'todo_id',
    startTime: 'startTime',
    endTime: 'endTime',
    studyMinutes: 'studyMinutes'
  };

  export type StudyRecordScalarFieldEnum = (typeof StudyRecordScalarFieldEnum)[keyof typeof StudyRecordScalarFieldEnum]


  export const TodoScalarFieldEnum: {
    uid: 'uid',
    created_at: 'created_at',
    title: 'title',
    done: 'done'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type TodoWhereInput = {
    AND?: Enumerable<TodoWhereInput>
    OR?: Enumerable<TodoWhereInput>
    NOT?: Enumerable<TodoWhereInput>
    uid?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    title?: StringFilter | string
    done?: BoolFilter | boolean
  }

  export type TodoOrderByWithRelationInput = {
    uid?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    done?: SortOrder
  }

  export type TodoWhereUniqueInput = {
    uid?: string
  }

  export type TodoOrderByWithAggregationInput = {
    uid?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    done?: SortOrder
    _count?: TodoCountOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TodoScalarWhereWithAggregatesInput>
    OR?: Enumerable<TodoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TodoScalarWhereWithAggregatesInput>
    uid?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    done?: BoolWithAggregatesFilter | boolean
  }

  export type MemoWhereInput = {
    AND?: Enumerable<MemoWhereInput>
    OR?: Enumerable<MemoWhereInput>
    NOT?: Enumerable<MemoWhereInput>
    uid?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    content?: StringFilter | string
    isTodo?: BoolFilter | boolean
    isAsk?: BoolFilter | boolean
  }

  export type MemoOrderByWithRelationInput = {
    uid?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    isTodo?: SortOrder
    isAsk?: SortOrder
  }

  export type MemoWhereUniqueInput = {
    uid?: string
  }

  export type MemoOrderByWithAggregationInput = {
    uid?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    isTodo?: SortOrder
    isAsk?: SortOrder
    _count?: MemoCountOrderByAggregateInput
    _max?: MemoMaxOrderByAggregateInput
    _min?: MemoMinOrderByAggregateInput
  }

  export type MemoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MemoScalarWhereWithAggregatesInput>
    OR?: Enumerable<MemoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MemoScalarWhereWithAggregatesInput>
    uid?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    content?: StringWithAggregatesFilter | string
    isTodo?: BoolWithAggregatesFilter | boolean
    isAsk?: BoolWithAggregatesFilter | boolean
  }

  export type studyRecordWhereInput = {
    AND?: Enumerable<studyRecordWhereInput>
    OR?: Enumerable<studyRecordWhereInput>
    NOT?: Enumerable<studyRecordWhereInput>
    uid?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    todo_title?: StringFilter | string
    todo_id?: StringFilter | string
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    studyMinutes?: IntFilter | number
  }

  export type studyRecordOrderByWithRelationInput = {
    uid?: SortOrder
    created_at?: SortOrder
    todo_title?: SortOrder
    todo_id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    studyMinutes?: SortOrder
  }

  export type studyRecordWhereUniqueInput = {
    uid?: string
  }

  export type studyRecordOrderByWithAggregationInput = {
    uid?: SortOrder
    created_at?: SortOrder
    todo_title?: SortOrder
    todo_id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    studyMinutes?: SortOrder
    _count?: studyRecordCountOrderByAggregateInput
    _avg?: studyRecordAvgOrderByAggregateInput
    _max?: studyRecordMaxOrderByAggregateInput
    _min?: studyRecordMinOrderByAggregateInput
    _sum?: studyRecordSumOrderByAggregateInput
  }

  export type studyRecordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<studyRecordScalarWhereWithAggregatesInput>
    OR?: Enumerable<studyRecordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<studyRecordScalarWhereWithAggregatesInput>
    uid?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    todo_title?: StringWithAggregatesFilter | string
    todo_id?: StringWithAggregatesFilter | string
    startTime?: DateTimeWithAggregatesFilter | Date | string
    endTime?: DateTimeWithAggregatesFilter | Date | string
    studyMinutes?: IntWithAggregatesFilter | number
  }

  export type TodoCreateInput = {
    uid?: string
    created_at?: Date | string
    title: string
    done?: boolean
  }

  export type TodoUncheckedCreateInput = {
    uid?: string
    created_at?: Date | string
    title: string
    done?: boolean
  }

  export type TodoUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TodoUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TodoCreateManyInput = {
    uid?: string
    created_at?: Date | string
    title: string
    done?: boolean
  }

  export type TodoUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TodoUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemoCreateInput = {
    uid?: string
    created_at?: Date | string
    content: string
    isTodo?: boolean
    isAsk?: boolean
  }

  export type MemoUncheckedCreateInput = {
    uid?: string
    created_at?: Date | string
    content: string
    isTodo?: boolean
    isAsk?: boolean
  }

  export type MemoUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isTodo?: BoolFieldUpdateOperationsInput | boolean
    isAsk?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemoUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isTodo?: BoolFieldUpdateOperationsInput | boolean
    isAsk?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemoCreateManyInput = {
    uid?: string
    created_at?: Date | string
    content: string
    isTodo?: boolean
    isAsk?: boolean
  }

  export type MemoUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isTodo?: BoolFieldUpdateOperationsInput | boolean
    isAsk?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemoUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isTodo?: BoolFieldUpdateOperationsInput | boolean
    isAsk?: BoolFieldUpdateOperationsInput | boolean
  }

  export type studyRecordCreateInput = {
    uid?: string
    created_at?: Date | string
    todo_title: string
    todo_id: string
    startTime: Date | string
    endTime: Date | string
    studyMinutes: number
  }

  export type studyRecordUncheckedCreateInput = {
    uid?: string
    created_at?: Date | string
    todo_title: string
    todo_id: string
    startTime: Date | string
    endTime: Date | string
    studyMinutes: number
  }

  export type studyRecordUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo_title?: StringFieldUpdateOperationsInput | string
    todo_id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type studyRecordUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo_title?: StringFieldUpdateOperationsInput | string
    todo_id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type studyRecordCreateManyInput = {
    uid?: string
    created_at?: Date | string
    todo_title: string
    todo_id: string
    startTime: Date | string
    endTime: Date | string
    studyMinutes: number
  }

  export type studyRecordUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo_title?: StringFieldUpdateOperationsInput | string
    todo_id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type studyRecordUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo_title?: StringFieldUpdateOperationsInput | string
    todo_id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
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
    mode?: QueryMode
    not?: NestedStringFilter | string
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type TodoCountOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    done?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    done?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    done?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type MemoCountOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    isTodo?: SortOrder
    isAsk?: SortOrder
  }

  export type MemoMaxOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    isTodo?: SortOrder
    isAsk?: SortOrder
  }

  export type MemoMinOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    isTodo?: SortOrder
    isAsk?: SortOrder
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

  export type studyRecordCountOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    todo_title?: SortOrder
    todo_id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    studyMinutes?: SortOrder
  }

  export type studyRecordAvgOrderByAggregateInput = {
    studyMinutes?: SortOrder
  }

  export type studyRecordMaxOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    todo_title?: SortOrder
    todo_id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    studyMinutes?: SortOrder
  }

  export type studyRecordMinOrderByAggregateInput = {
    uid?: SortOrder
    created_at?: SortOrder
    todo_title?: SortOrder
    todo_id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    studyMinutes?: SortOrder
  }

  export type studyRecordSumOrderByAggregateInput = {
    studyMinutes?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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