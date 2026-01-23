
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model LearningPath
 * 
 */
export type LearningPath = $Result.DefaultSelection<Prisma.$LearningPathPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model QuestionOption
 * 
 */
export type QuestionOption = $Result.DefaultSelection<Prisma.$QuestionOptionPayload>
/**
 * Model QuestionAnswer
 * 
 */
export type QuestionAnswer = $Result.DefaultSelection<Prisma.$QuestionAnswerPayload>
/**
 * Model QuizSubmission
 * 
 */
export type QuizSubmission = $Result.DefaultSelection<Prisma.$QuizSubmissionPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Progress
 * 
 */
export type Progress = $Result.DefaultSelection<Prisma.$ProgressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STUDENT: 'STUDENT',
  INSTRUCTOR: 'INSTRUCTOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DifficultyLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT'
};

export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel]


export const QuestionType: {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  TRUE_FALSE: 'TRUE_FALSE',
  SHORT_ANSWER: 'SHORT_ANSWER'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningPath`: Exposes CRUD operations for the **LearningPath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningPaths
    * const learningPaths = await prisma.learningPath.findMany()
    * ```
    */
  get learningPath(): Prisma.LearningPathDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionOption`: Exposes CRUD operations for the **QuestionOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionOptions
    * const questionOptions = await prisma.questionOption.findMany()
    * ```
    */
  get questionOption(): Prisma.QuestionOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionAnswer`: Exposes CRUD operations for the **QuestionAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionAnswers
    * const questionAnswers = await prisma.questionAnswer.findMany()
    * ```
    */
  get questionAnswer(): Prisma.QuestionAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizSubmission`: Exposes CRUD operations for the **QuizSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizSubmissions
    * const quizSubmissions = await prisma.quizSubmission.findMany()
    * ```
    */
  get quizSubmission(): Prisma.QuizSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progress`: Exposes CRUD operations for the **Progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresses
    * const progresses = await prisma.progress.findMany()
    * ```
    */
  get progress(): Prisma.ProgressDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    UserProfile: 'UserProfile',
    LearningPath: 'LearningPath',
    Module: 'Module',
    Lesson: 'Lesson',
    Quiz: 'Quiz',
    Question: 'Question',
    QuestionOption: 'QuestionOption',
    QuestionAnswer: 'QuestionAnswer',
    QuizSubmission: 'QuizSubmission',
    Enrollment: 'Enrollment',
    Progress: 'Progress'
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
      modelProps: "user" | "userProfile" | "learningPath" | "module" | "lesson" | "quiz" | "question" | "questionOption" | "questionAnswer" | "quizSubmission" | "enrollment" | "progress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      LearningPath: {
        payload: Prisma.$LearningPathPayload<ExtArgs>
        fields: Prisma.LearningPathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningPathFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningPathFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          findFirst: {
            args: Prisma.LearningPathFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningPathFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          findMany: {
            args: Prisma.LearningPathFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>[]
          }
          create: {
            args: Prisma.LearningPathCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          createMany: {
            args: Prisma.LearningPathCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningPathCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>[]
          }
          delete: {
            args: Prisma.LearningPathDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          update: {
            args: Prisma.LearningPathUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          deleteMany: {
            args: Prisma.LearningPathDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningPathUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningPathUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>[]
          }
          upsert: {
            args: Prisma.LearningPathUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          aggregate: {
            args: Prisma.LearningPathAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningPath>
          }
          groupBy: {
            args: Prisma.LearningPathGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningPathGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningPathCountArgs<ExtArgs>
            result: $Utils.Optional<LearningPathCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionOption: {
        payload: Prisma.$QuestionOptionPayload<ExtArgs>
        fields: Prisma.QuestionOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          findFirst: {
            args: Prisma.QuestionOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          findMany: {
            args: Prisma.QuestionOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[]
          }
          create: {
            args: Prisma.QuestionOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          createMany: {
            args: Prisma.QuestionOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[]
          }
          delete: {
            args: Prisma.QuestionOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          update: {
            args: Prisma.QuestionOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          aggregate: {
            args: Prisma.QuestionOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionOption>
          }
          groupBy: {
            args: Prisma.QuestionOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionOptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionOptionCountAggregateOutputType> | number
          }
        }
      }
      QuestionAnswer: {
        payload: Prisma.$QuestionAnswerPayload<ExtArgs>
        fields: Prisma.QuestionAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          findFirst: {
            args: Prisma.QuestionAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          findMany: {
            args: Prisma.QuestionAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>[]
          }
          create: {
            args: Prisma.QuestionAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          createMany: {
            args: Prisma.QuestionAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>[]
          }
          delete: {
            args: Prisma.QuestionAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          update: {
            args: Prisma.QuestionAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          deleteMany: {
            args: Prisma.QuestionAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>[]
          }
          upsert: {
            args: Prisma.QuestionAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          aggregate: {
            args: Prisma.QuestionAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionAnswer>
          }
          groupBy: {
            args: Prisma.QuestionAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionAnswerCountAggregateOutputType> | number
          }
        }
      }
      QuizSubmission: {
        payload: Prisma.$QuizSubmissionPayload<ExtArgs>
        fields: Prisma.QuizSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          findFirst: {
            args: Prisma.QuizSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          findMany: {
            args: Prisma.QuizSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>[]
          }
          create: {
            args: Prisma.QuizSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          createMany: {
            args: Prisma.QuizSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>[]
          }
          delete: {
            args: Prisma.QuizSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          update: {
            args: Prisma.QuizSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.QuizSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.QuizSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          aggregate: {
            args: Prisma.QuizSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizSubmission>
          }
          groupBy: {
            args: Prisma.QuizSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizSubmissionCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Progress: {
        payload: Prisma.$ProgressPayload<ExtArgs>
        fields: Prisma.ProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          findFirst: {
            args: Prisma.ProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          findMany: {
            args: Prisma.ProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          create: {
            args: Prisma.ProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          createMany: {
            args: Prisma.ProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          delete: {
            args: Prisma.ProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          update: {
            args: Prisma.ProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          deleteMany: {
            args: Prisma.ProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          upsert: {
            args: Prisma.ProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          aggregate: {
            args: Prisma.ProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgress>
          }
          groupBy: {
            args: Prisma.ProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressCountAggregateOutputType> | number
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
    user?: UserOmit
    userProfile?: UserProfileOmit
    learningPath?: LearningPathOmit
    module?: ModuleOmit
    lesson?: LessonOmit
    quiz?: QuizOmit
    question?: QuestionOmit
    questionOption?: QuestionOptionOmit
    questionAnswer?: QuestionAnswerOmit
    quizSubmission?: QuizSubmissionOmit
    enrollment?: EnrollmentOmit
    progress?: ProgressOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    enrollments: number
    progress: number
    submissions: number
    createdPaths: number
    createdModules: number
    createdLessons: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    progress?: boolean | UserCountOutputTypeCountProgressArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    createdPaths?: boolean | UserCountOutputTypeCountCreatedPathsArgs
    createdModules?: boolean | UserCountOutputTypeCountCreatedModulesArgs
    createdLessons?: boolean | UserCountOutputTypeCountCreatedLessonsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningPathWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LearningPathCountOutputType
   */

  export type LearningPathCountOutputType = {
    modules: number
    enrollments: number
    quizzes: number
  }

  export type LearningPathCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | LearningPathCountOutputTypeCountModulesArgs
    enrollments?: boolean | LearningPathCountOutputTypeCountEnrollmentsArgs
    quizzes?: boolean | LearningPathCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCountOutputType
     */
    select?: LearningPathCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    lessons: number
    quizzes: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | ModuleCountOutputTypeCountLessonsArgs
    quizzes?: boolean | ModuleCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    progress: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | LessonCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    submissions: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    submissions?: boolean | QuizCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSubmissionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    options: number
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuestionCountOutputTypeCountOptionsArgs
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionOptionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAnswerWhereInput
  }


  /**
   * Count Type QuizSubmissionCountOutputType
   */

  export type QuizSubmissionCountOutputType = {
    answers: number
  }

  export type QuizSubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuizSubmissionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuizSubmissionCountOutputType without action
   */
  export type QuizSubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmissionCountOutputType
     */
    select?: QuizSubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizSubmissionCountOutputType without action
   */
  export type QuizSubmissionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    firstName: number
    lastName: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    createdPaths?: boolean | User$createdPathsArgs<ExtArgs>
    createdModules?: boolean | User$createdModulesArgs<ExtArgs>
    createdLessons?: boolean | User$createdLessonsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "firstName" | "lastName" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    createdPaths?: boolean | User$createdPathsArgs<ExtArgs>
    createdModules?: boolean | User$createdModulesArgs<ExtArgs>
    createdLessons?: boolean | User$createdLessonsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      progress: Prisma.$ProgressPayload<ExtArgs>[]
      submissions: Prisma.$QuizSubmissionPayload<ExtArgs>[]
      createdPaths: Prisma.$LearningPathPayload<ExtArgs>[]
      createdModules: Prisma.$ModulePayload<ExtArgs>[]
      createdLessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      firstName: string | null
      lastName: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdPaths<T extends User$createdPathsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdPathsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdModules<T extends User$createdModulesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdLessons<T extends User$createdLessonsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdLessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    where?: QuizSubmissionWhereInput
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    cursor?: QuizSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * User.createdPaths
   */
  export type User$createdPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    where?: LearningPathWhereInput
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    cursor?: LearningPathWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }

  /**
   * User.createdModules
   */
  export type User$createdModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * User.createdLessons
   */
  export type User$createdLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    points: number | null
    currentStreak: number | null
    totalLessonsCompleted: number | null
    totalQuizzesPassed: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    points: number | null
    currentStreak: number | null
    totalLessonsCompleted: number | null
    totalQuizzesPassed: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    avatar: string | null
    points: number | null
    currentStreak: number | null
    totalLessonsCompleted: number | null
    totalQuizzesPassed: number | null
    badges: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    avatar: string | null
    points: number | null
    currentStreak: number | null
    totalLessonsCompleted: number | null
    totalQuizzesPassed: number | null
    badges: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    avatar: number
    points: number
    currentStreak: number
    totalLessonsCompleted: number
    totalQuizzesPassed: number
    badges: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    points?: true
    currentStreak?: true
    totalLessonsCompleted?: true
    totalQuizzesPassed?: true
  }

  export type UserProfileSumAggregateInputType = {
    points?: true
    currentStreak?: true
    totalLessonsCompleted?: true
    totalQuizzesPassed?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    avatar?: true
    points?: true
    currentStreak?: true
    totalLessonsCompleted?: true
    totalQuizzesPassed?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    avatar?: true
    points?: true
    currentStreak?: true
    totalLessonsCompleted?: true
    totalQuizzesPassed?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    avatar?: true
    points?: true
    currentStreak?: true
    totalLessonsCompleted?: true
    totalQuizzesPassed?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    bio: string | null
    avatar: string | null
    points: number
    currentStreak: number
    totalLessonsCompleted: number
    totalQuizzesPassed: number
    badges: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    avatar?: boolean
    points?: boolean
    currentStreak?: boolean
    totalLessonsCompleted?: boolean
    totalQuizzesPassed?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    avatar?: boolean
    points?: boolean
    currentStreak?: boolean
    totalLessonsCompleted?: boolean
    totalQuizzesPassed?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    avatar?: boolean
    points?: boolean
    currentStreak?: boolean
    totalLessonsCompleted?: boolean
    totalQuizzesPassed?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    avatar?: boolean
    points?: boolean
    currentStreak?: boolean
    totalLessonsCompleted?: boolean
    totalQuizzesPassed?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "avatar" | "points" | "currentStreak" | "totalLessonsCompleted" | "totalQuizzesPassed" | "badges" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string | null
      avatar: string | null
      points: number
      currentStreak: number
      totalLessonsCompleted: number
      totalQuizzesPassed: number
      badges: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly avatar: FieldRef<"UserProfile", 'String'>
    readonly points: FieldRef<"UserProfile", 'Int'>
    readonly currentStreak: FieldRef<"UserProfile", 'Int'>
    readonly totalLessonsCompleted: FieldRef<"UserProfile", 'Int'>
    readonly totalQuizzesPassed: FieldRef<"UserProfile", 'Int'>
    readonly badges: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model LearningPath
   */

  export type AggregateLearningPath = {
    _count: LearningPathCountAggregateOutputType | null
    _avg: LearningPathAvgAggregateOutputType | null
    _sum: LearningPathSumAggregateOutputType | null
    _min: LearningPathMinAggregateOutputType | null
    _max: LearningPathMaxAggregateOutputType | null
  }

  export type LearningPathAvgAggregateOutputType = {
    estimatedHours: number | null
  }

  export type LearningPathSumAggregateOutputType = {
    estimatedHours: number | null
  }

  export type LearningPathMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.DifficultyLevel | null
    icon: string | null
    creatorId: string | null
    isPublished: boolean | null
    estimatedHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningPathMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.DifficultyLevel | null
    icon: string | null
    creatorId: string | null
    isPublished: boolean | null
    estimatedHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningPathCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    icon: number
    creatorId: number
    isPublished: number
    estimatedHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningPathAvgAggregateInputType = {
    estimatedHours?: true
  }

  export type LearningPathSumAggregateInputType = {
    estimatedHours?: true
  }

  export type LearningPathMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    icon?: true
    creatorId?: true
    isPublished?: true
    estimatedHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningPathMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    icon?: true
    creatorId?: true
    isPublished?: true
    estimatedHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningPathCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    icon?: true
    creatorId?: true
    isPublished?: true
    estimatedHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningPathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPath to aggregate.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningPaths
    **/
    _count?: true | LearningPathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningPathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningPathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningPathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningPathMaxAggregateInputType
  }

  export type GetLearningPathAggregateType<T extends LearningPathAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningPath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningPath[P]>
      : GetScalarType<T[P], AggregateLearningPath[P]>
  }




  export type LearningPathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningPathWhereInput
    orderBy?: LearningPathOrderByWithAggregationInput | LearningPathOrderByWithAggregationInput[]
    by: LearningPathScalarFieldEnum[] | LearningPathScalarFieldEnum
    having?: LearningPathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningPathCountAggregateInputType | true
    _avg?: LearningPathAvgAggregateInputType
    _sum?: LearningPathSumAggregateInputType
    _min?: LearningPathMinAggregateInputType
    _max?: LearningPathMaxAggregateInputType
  }

  export type LearningPathGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon: string | null
    creatorId: string
    isPublished: boolean
    estimatedHours: number | null
    createdAt: Date
    updatedAt: Date
    _count: LearningPathCountAggregateOutputType | null
    _avg: LearningPathAvgAggregateOutputType | null
    _sum: LearningPathSumAggregateOutputType | null
    _min: LearningPathMinAggregateOutputType | null
    _max: LearningPathMaxAggregateOutputType | null
  }

  type GetLearningPathGroupByPayload<T extends LearningPathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningPathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningPathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningPathGroupByOutputType[P]>
            : GetScalarType<T[P], LearningPathGroupByOutputType[P]>
        }
      >
    >


  export type LearningPathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    icon?: boolean
    creatorId?: boolean
    isPublished?: boolean
    estimatedHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    modules?: boolean | LearningPath$modulesArgs<ExtArgs>
    enrollments?: boolean | LearningPath$enrollmentsArgs<ExtArgs>
    quizzes?: boolean | LearningPath$quizzesArgs<ExtArgs>
    _count?: boolean | LearningPathCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningPath"]>

  export type LearningPathSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    icon?: boolean
    creatorId?: boolean
    isPublished?: boolean
    estimatedHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningPath"]>

  export type LearningPathSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    icon?: boolean
    creatorId?: boolean
    isPublished?: boolean
    estimatedHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningPath"]>

  export type LearningPathSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    icon?: boolean
    creatorId?: boolean
    isPublished?: boolean
    estimatedHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningPathOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "icon" | "creatorId" | "isPublished" | "estimatedHours" | "createdAt" | "updatedAt", ExtArgs["result"]["learningPath"]>
  export type LearningPathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    modules?: boolean | LearningPath$modulesArgs<ExtArgs>
    enrollments?: boolean | LearningPath$enrollmentsArgs<ExtArgs>
    quizzes?: boolean | LearningPath$quizzesArgs<ExtArgs>
    _count?: boolean | LearningPathCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LearningPathIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningPathIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningPathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningPath"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      modules: Prisma.$ModulePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.DifficultyLevel
      icon: string | null
      creatorId: string
      isPublished: boolean
      estimatedHours: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningPath"]>
    composites: {}
  }

  type LearningPathGetPayload<S extends boolean | null | undefined | LearningPathDefaultArgs> = $Result.GetResult<Prisma.$LearningPathPayload, S>

  type LearningPathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningPathFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningPathCountAggregateInputType | true
    }

  export interface LearningPathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningPath'], meta: { name: 'LearningPath' } }
    /**
     * Find zero or one LearningPath that matches the filter.
     * @param {LearningPathFindUniqueArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningPathFindUniqueArgs>(args: SelectSubset<T, LearningPathFindUniqueArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningPath that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningPathFindUniqueOrThrowArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningPathFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningPathFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningPath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindFirstArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningPathFindFirstArgs>(args?: SelectSubset<T, LearningPathFindFirstArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningPath that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindFirstOrThrowArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningPathFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningPathFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningPaths
     * const learningPaths = await prisma.learningPath.findMany()
     * 
     * // Get first 10 LearningPaths
     * const learningPaths = await prisma.learningPath.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningPathWithIdOnly = await prisma.learningPath.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningPathFindManyArgs>(args?: SelectSubset<T, LearningPathFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningPath.
     * @param {LearningPathCreateArgs} args - Arguments to create a LearningPath.
     * @example
     * // Create one LearningPath
     * const LearningPath = await prisma.learningPath.create({
     *   data: {
     *     // ... data to create a LearningPath
     *   }
     * })
     * 
     */
    create<T extends LearningPathCreateArgs>(args: SelectSubset<T, LearningPathCreateArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningPaths.
     * @param {LearningPathCreateManyArgs} args - Arguments to create many LearningPaths.
     * @example
     * // Create many LearningPaths
     * const learningPath = await prisma.learningPath.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningPathCreateManyArgs>(args?: SelectSubset<T, LearningPathCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningPaths and returns the data saved in the database.
     * @param {LearningPathCreateManyAndReturnArgs} args - Arguments to create many LearningPaths.
     * @example
     * // Create many LearningPaths
     * const learningPath = await prisma.learningPath.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningPaths and only return the `id`
     * const learningPathWithIdOnly = await prisma.learningPath.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningPathCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningPathCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningPath.
     * @param {LearningPathDeleteArgs} args - Arguments to delete one LearningPath.
     * @example
     * // Delete one LearningPath
     * const LearningPath = await prisma.learningPath.delete({
     *   where: {
     *     // ... filter to delete one LearningPath
     *   }
     * })
     * 
     */
    delete<T extends LearningPathDeleteArgs>(args: SelectSubset<T, LearningPathDeleteArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningPath.
     * @param {LearningPathUpdateArgs} args - Arguments to update one LearningPath.
     * @example
     * // Update one LearningPath
     * const learningPath = await prisma.learningPath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningPathUpdateArgs>(args: SelectSubset<T, LearningPathUpdateArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningPaths.
     * @param {LearningPathDeleteManyArgs} args - Arguments to filter LearningPaths to delete.
     * @example
     * // Delete a few LearningPaths
     * const { count } = await prisma.learningPath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningPathDeleteManyArgs>(args?: SelectSubset<T, LearningPathDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningPaths
     * const learningPath = await prisma.learningPath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningPathUpdateManyArgs>(args: SelectSubset<T, LearningPathUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPaths and returns the data updated in the database.
     * @param {LearningPathUpdateManyAndReturnArgs} args - Arguments to update many LearningPaths.
     * @example
     * // Update many LearningPaths
     * const learningPath = await prisma.learningPath.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningPaths and only return the `id`
     * const learningPathWithIdOnly = await prisma.learningPath.updateManyAndReturn({
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
    updateManyAndReturn<T extends LearningPathUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningPathUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningPath.
     * @param {LearningPathUpsertArgs} args - Arguments to update or create a LearningPath.
     * @example
     * // Update or create a LearningPath
     * const learningPath = await prisma.learningPath.upsert({
     *   create: {
     *     // ... data to create a LearningPath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningPath we want to update
     *   }
     * })
     */
    upsert<T extends LearningPathUpsertArgs>(args: SelectSubset<T, LearningPathUpsertArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCountArgs} args - Arguments to filter LearningPaths to count.
     * @example
     * // Count the number of LearningPaths
     * const count = await prisma.learningPath.count({
     *   where: {
     *     // ... the filter for the LearningPaths we want to count
     *   }
     * })
    **/
    count<T extends LearningPathCountArgs>(
      args?: Subset<T, LearningPathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningPathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningPathAggregateArgs>(args: Subset<T, LearningPathAggregateArgs>): Prisma.PrismaPromise<GetLearningPathAggregateType<T>>

    /**
     * Group by LearningPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathGroupByArgs} args - Group by arguments.
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
      T extends LearningPathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningPathGroupByArgs['orderBy'] }
        : { orderBy?: LearningPathGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningPathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningPathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningPath model
   */
  readonly fields: LearningPathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningPath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningPathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modules<T extends LearningPath$modulesArgs<ExtArgs> = {}>(args?: Subset<T, LearningPath$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends LearningPath$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, LearningPath$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends LearningPath$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, LearningPath$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LearningPath model
   */
  interface LearningPathFieldRefs {
    readonly id: FieldRef<"LearningPath", 'String'>
    readonly title: FieldRef<"LearningPath", 'String'>
    readonly description: FieldRef<"LearningPath", 'String'>
    readonly difficulty: FieldRef<"LearningPath", 'DifficultyLevel'>
    readonly icon: FieldRef<"LearningPath", 'String'>
    readonly creatorId: FieldRef<"LearningPath", 'String'>
    readonly isPublished: FieldRef<"LearningPath", 'Boolean'>
    readonly estimatedHours: FieldRef<"LearningPath", 'Int'>
    readonly createdAt: FieldRef<"LearningPath", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningPath", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningPath findUnique
   */
  export type LearningPathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath findUniqueOrThrow
   */
  export type LearningPathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath findFirst
   */
  export type LearningPathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPaths.
     */
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }

  /**
   * LearningPath findFirstOrThrow
   */
  export type LearningPathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPaths.
     */
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }

  /**
   * LearningPath findMany
   */
  export type LearningPathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPaths to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }

  /**
   * LearningPath create
   */
  export type LearningPathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningPath.
     */
    data: XOR<LearningPathCreateInput, LearningPathUncheckedCreateInput>
  }

  /**
   * LearningPath createMany
   */
  export type LearningPathCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningPaths.
     */
    data: LearningPathCreateManyInput | LearningPathCreateManyInput[]
  }

  /**
   * LearningPath createManyAndReturn
   */
  export type LearningPathCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * The data used to create many LearningPaths.
     */
    data: LearningPathCreateManyInput | LearningPathCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningPath update
   */
  export type LearningPathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningPath.
     */
    data: XOR<LearningPathUpdateInput, LearningPathUncheckedUpdateInput>
    /**
     * Choose, which LearningPath to update.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath updateMany
   */
  export type LearningPathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningPaths.
     */
    data: XOR<LearningPathUpdateManyMutationInput, LearningPathUncheckedUpdateManyInput>
    /**
     * Filter which LearningPaths to update
     */
    where?: LearningPathWhereInput
    /**
     * Limit how many LearningPaths to update.
     */
    limit?: number
  }

  /**
   * LearningPath updateManyAndReturn
   */
  export type LearningPathUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * The data used to update LearningPaths.
     */
    data: XOR<LearningPathUpdateManyMutationInput, LearningPathUncheckedUpdateManyInput>
    /**
     * Filter which LearningPaths to update
     */
    where?: LearningPathWhereInput
    /**
     * Limit how many LearningPaths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningPath upsert
   */
  export type LearningPathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningPath to update in case it exists.
     */
    where: LearningPathWhereUniqueInput
    /**
     * In case the LearningPath found by the `where` argument doesn't exist, create a new LearningPath with this data.
     */
    create: XOR<LearningPathCreateInput, LearningPathUncheckedCreateInput>
    /**
     * In case the LearningPath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningPathUpdateInput, LearningPathUncheckedUpdateInput>
  }

  /**
   * LearningPath delete
   */
  export type LearningPathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter which LearningPath to delete.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath deleteMany
   */
  export type LearningPathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPaths to delete
     */
    where?: LearningPathWhereInput
    /**
     * Limit how many LearningPaths to delete.
     */
    limit?: number
  }

  /**
   * LearningPath.modules
   */
  export type LearningPath$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * LearningPath.enrollments
   */
  export type LearningPath$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * LearningPath.quizzes
   */
  export type LearningPath$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * LearningPath without action
   */
  export type LearningPathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    order: number | null
    duration: number | null
  }

  export type ModuleSumAggregateOutputType = {
    order: number | null
    duration: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    order: number | null
    pathId: string | null
    creatorId: string | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    order: number | null
    pathId: string | null
    creatorId: string | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    description: number
    order: number
    pathId: number
    creatorId: number
    duration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    order?: true
    duration?: true
  }

  export type ModuleSumAggregateInputType = {
    order?: true
    duration?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    pathId?: true
    creatorId?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    pathId?: true
    creatorId?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    pathId?: true
    creatorId?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    title: string
    description: string | null
    order: number
    pathId: string
    creatorId: string
    duration: number | null
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    pathId?: boolean
    creatorId?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lessons?: boolean | Module$lessonsArgs<ExtArgs>
    quizzes?: boolean | Module$quizzesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    pathId?: boolean
    creatorId?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    pathId?: boolean
    creatorId?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    pathId?: boolean
    creatorId?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "order" | "pathId" | "creatorId" | "duration" | "createdAt" | "updatedAt", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lessons?: boolean | Module$lessonsArgs<ExtArgs>
    quizzes?: boolean | Module$quizzesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      path: Prisma.$LearningPathPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      order: number
      pathId: string
      creatorId: string
      duration: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    path<T extends LearningPathDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LearningPathDefaultArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Module$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Module$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends Module$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Module$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly title: FieldRef<"Module", 'String'>
    readonly description: FieldRef<"Module", 'String'>
    readonly order: FieldRef<"Module", 'Int'>
    readonly pathId: FieldRef<"Module", 'String'>
    readonly creatorId: FieldRef<"Module", 'String'>
    readonly duration: FieldRef<"Module", 'Int'>
    readonly createdAt: FieldRef<"Module", 'DateTime'>
    readonly updatedAt: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.lessons
   */
  export type Module$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Module.quizzes
   */
  export type Module$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    order: number | null
    duration: number | null
  }

  export type LessonSumAggregateOutputType = {
    order: number | null
    duration: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    order: number | null
    moduleId: string | null
    creatorId: string | null
    duration: number | null
    difficulty: $Enums.DifficultyLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    order: number | null
    moduleId: string | null
    creatorId: string | null
    duration: number | null
    difficulty: $Enums.DifficultyLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    content: number
    order: number
    moduleId: number
    creatorId: number
    duration: number
    difficulty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    order?: true
    duration?: true
  }

  export type LessonSumAggregateInputType = {
    order?: true
    duration?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    order?: true
    moduleId?: true
    creatorId?: true
    duration?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    order?: true
    moduleId?: true
    creatorId?: true
    duration?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    order?: true
    moduleId?: true
    creatorId?: true
    duration?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    title: string
    content: string
    order: number
    moduleId: string
    creatorId: string
    duration: number | null
    difficulty: $Enums.DifficultyLevel | null
    createdAt: Date
    updatedAt: Date
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    moduleId?: boolean
    creatorId?: boolean
    duration?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    progress?: boolean | Lesson$progressArgs<ExtArgs>
    quiz?: boolean | Lesson$quizArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    moduleId?: boolean
    creatorId?: boolean
    duration?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    moduleId?: boolean
    creatorId?: boolean
    duration?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    moduleId?: boolean
    creatorId?: boolean
    duration?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "order" | "moduleId" | "creatorId" | "duration" | "difficulty" | "createdAt" | "updatedAt", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    progress?: boolean | Lesson$progressArgs<ExtArgs>
    quiz?: boolean | Lesson$quizArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      progress: Prisma.$ProgressPayload<ExtArgs>[]
      quiz: Prisma.$QuizPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      order: number
      moduleId: string
      creatorId: string
      duration: number | null
      difficulty: $Enums.DifficultyLevel | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progress<T extends Lesson$progressArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quiz<T extends Lesson$quizArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$quizArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly content: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly moduleId: FieldRef<"Lesson", 'String'>
    readonly creatorId: FieldRef<"Lesson", 'String'>
    readonly duration: FieldRef<"Lesson", 'Int'>
    readonly difficulty: FieldRef<"Lesson", 'DifficultyLevel'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
    readonly updatedAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.progress
   */
  export type Lesson$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Lesson.quiz
   */
  export type Lesson$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    passingScore: number | null
    timeLimit: number | null
  }

  export type QuizSumAggregateOutputType = {
    passingScore: number | null
    timeLimit: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    pathId: string | null
    moduleId: string | null
    lessonId: string | null
    passingScore: number | null
    timeLimit: number | null
    retakeable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    pathId: string | null
    moduleId: string | null
    lessonId: string | null
    passingScore: number | null
    timeLimit: number | null
    retakeable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    description: number
    pathId: number
    moduleId: number
    lessonId: number
    passingScore: number
    timeLimit: number
    retakeable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    passingScore?: true
    timeLimit?: true
  }

  export type QuizSumAggregateInputType = {
    passingScore?: true
    timeLimit?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pathId?: true
    moduleId?: true
    lessonId?: true
    passingScore?: true
    timeLimit?: true
    retakeable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pathId?: true
    moduleId?: true
    lessonId?: true
    passingScore?: true
    timeLimit?: true
    retakeable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pathId?: true
    moduleId?: true
    lessonId?: true
    passingScore?: true
    timeLimit?: true
    retakeable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    title: string
    description: string | null
    pathId: string | null
    moduleId: string | null
    lessonId: string | null
    passingScore: number
    timeLimit: number | null
    retakeable: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pathId?: boolean
    moduleId?: boolean
    lessonId?: boolean
    passingScore?: boolean
    timeLimit?: boolean
    retakeable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    path?: boolean | Quiz$pathArgs<ExtArgs>
    module?: boolean | Quiz$moduleArgs<ExtArgs>
    lesson?: boolean | Quiz$lessonArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    submissions?: boolean | Quiz$submissionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pathId?: boolean
    moduleId?: boolean
    lessonId?: boolean
    passingScore?: boolean
    timeLimit?: boolean
    retakeable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    path?: boolean | Quiz$pathArgs<ExtArgs>
    module?: boolean | Quiz$moduleArgs<ExtArgs>
    lesson?: boolean | Quiz$lessonArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pathId?: boolean
    moduleId?: boolean
    lessonId?: boolean
    passingScore?: boolean
    timeLimit?: boolean
    retakeable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    path?: boolean | Quiz$pathArgs<ExtArgs>
    module?: boolean | Quiz$moduleArgs<ExtArgs>
    lesson?: boolean | Quiz$lessonArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    pathId?: boolean
    moduleId?: boolean
    lessonId?: boolean
    passingScore?: boolean
    timeLimit?: boolean
    retakeable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "pathId" | "moduleId" | "lessonId" | "passingScore" | "timeLimit" | "retakeable" | "createdAt" | "updatedAt", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    path?: boolean | Quiz$pathArgs<ExtArgs>
    module?: boolean | Quiz$moduleArgs<ExtArgs>
    lesson?: boolean | Quiz$lessonArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    submissions?: boolean | Quiz$submissionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    path?: boolean | Quiz$pathArgs<ExtArgs>
    module?: boolean | Quiz$moduleArgs<ExtArgs>
    lesson?: boolean | Quiz$lessonArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    path?: boolean | Quiz$pathArgs<ExtArgs>
    module?: boolean | Quiz$moduleArgs<ExtArgs>
    lesson?: boolean | Quiz$lessonArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      path: Prisma.$LearningPathPayload<ExtArgs> | null
      module: Prisma.$ModulePayload<ExtArgs> | null
      lesson: Prisma.$LessonPayload<ExtArgs> | null
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      submissions: Prisma.$QuizSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      pathId: string | null
      moduleId: string | null
      lessonId: string | null
      passingScore: number
      timeLimit: number | null
      retakeable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    path<T extends Quiz$pathArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$pathArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    module<T extends Quiz$moduleArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$moduleArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lesson<T extends Quiz$lessonArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$lessonArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Quiz$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly description: FieldRef<"Quiz", 'String'>
    readonly pathId: FieldRef<"Quiz", 'String'>
    readonly moduleId: FieldRef<"Quiz", 'String'>
    readonly lessonId: FieldRef<"Quiz", 'String'>
    readonly passingScore: FieldRef<"Quiz", 'Int'>
    readonly timeLimit: FieldRef<"Quiz", 'Int'>
    readonly retakeable: FieldRef<"Quiz", 'Boolean'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly updatedAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.path
   */
  export type Quiz$pathArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    where?: LearningPathWhereInput
  }

  /**
   * Quiz.module
   */
  export type Quiz$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
  }

  /**
   * Quiz.lesson
   */
  export type Quiz$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz.submissions
   */
  export type Quiz$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    where?: QuizSubmissionWhereInput
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    cursor?: QuizSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    order: number | null
    points: number | null
  }

  export type QuestionSumAggregateOutputType = {
    order: number | null
    points: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    quizId: string | null
    type: $Enums.QuestionType | null
    text: string | null
    order: number | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
    type: $Enums.QuestionType | null
    text: string | null
    order: number | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    quizId: number
    type: number
    text: number
    order: number
    points: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    order?: true
    points?: true
  }

  export type QuestionSumAggregateInputType = {
    order?: true
    points?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    quizId?: true
    type?: true
    text?: true
    order?: true
    points?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    quizId?: true
    type?: true
    text?: true
    order?: true
    points?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    quizId?: true
    type?: true
    text?: true
    order?: true
    points?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    quizId: string
    type: $Enums.QuestionType
    text: string
    order: number
    points: number
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    type?: boolean
    text?: boolean
    order?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    type?: boolean
    text?: boolean
    order?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    type?: boolean
    text?: boolean
    order?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    quizId?: boolean
    type?: boolean
    text?: boolean
    order?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "type" | "text" | "order" | "points" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      options: Prisma.$QuestionOptionPayload<ExtArgs>[]
      answers: Prisma.$QuestionAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
      type: $Enums.QuestionType
      text: string
      order: number
      points: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Question$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly quizId: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'QuestionType'>
    readonly text: FieldRef<"Question", 'String'>
    readonly order: FieldRef<"Question", 'Int'>
    readonly points: FieldRef<"Question", 'Int'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.options
   */
  export type Question$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    where?: QuestionOptionWhereInput
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    cursor?: QuestionOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    where?: QuestionAnswerWhereInput
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    cursor?: QuestionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionOption
   */

  export type AggregateQuestionOption = {
    _count: QuestionOptionCountAggregateOutputType | null
    _avg: QuestionOptionAvgAggregateOutputType | null
    _sum: QuestionOptionSumAggregateOutputType | null
    _min: QuestionOptionMinAggregateOutputType | null
    _max: QuestionOptionMaxAggregateOutputType | null
  }

  export type QuestionOptionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuestionOptionSumAggregateOutputType = {
    order: number | null
  }

  export type QuestionOptionMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    text: string | null
    isCorrect: boolean | null
    order: number | null
  }

  export type QuestionOptionMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    text: string | null
    isCorrect: boolean | null
    order: number | null
  }

  export type QuestionOptionCountAggregateOutputType = {
    id: number
    questionId: number
    text: number
    isCorrect: number
    order: number
    _all: number
  }


  export type QuestionOptionAvgAggregateInputType = {
    order?: true
  }

  export type QuestionOptionSumAggregateInputType = {
    order?: true
  }

  export type QuestionOptionMinAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    order?: true
  }

  export type QuestionOptionMaxAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    order?: true
  }

  export type QuestionOptionCountAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    order?: true
    _all?: true
  }

  export type QuestionOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionOption to aggregate.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionOptions
    **/
    _count?: true | QuestionOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionOptionMaxAggregateInputType
  }

  export type GetQuestionOptionAggregateType<T extends QuestionOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionOption[P]>
      : GetScalarType<T[P], AggregateQuestionOption[P]>
  }




  export type QuestionOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionOptionWhereInput
    orderBy?: QuestionOptionOrderByWithAggregationInput | QuestionOptionOrderByWithAggregationInput[]
    by: QuestionOptionScalarFieldEnum[] | QuestionOptionScalarFieldEnum
    having?: QuestionOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionOptionCountAggregateInputType | true
    _avg?: QuestionOptionAvgAggregateInputType
    _sum?: QuestionOptionSumAggregateInputType
    _min?: QuestionOptionMinAggregateInputType
    _max?: QuestionOptionMaxAggregateInputType
  }

  export type QuestionOptionGroupByOutputType = {
    id: string
    questionId: string
    text: string
    isCorrect: boolean
    order: number
    _count: QuestionOptionCountAggregateOutputType | null
    _avg: QuestionOptionAvgAggregateOutputType | null
    _sum: QuestionOptionSumAggregateOutputType | null
    _min: QuestionOptionMinAggregateOutputType | null
    _max: QuestionOptionMaxAggregateOutputType | null
  }

  type GetQuestionOptionGroupByPayload<T extends QuestionOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionOptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionOptionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    order?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>

  export type QuestionOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    order?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>

  export type QuestionOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    order?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>

  export type QuestionOptionSelectScalar = {
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    order?: boolean
  }

  export type QuestionOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "text" | "isCorrect" | "order", ExtArgs["result"]["questionOption"]>
  export type QuestionOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuestionOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuestionOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $QuestionOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionOption"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      text: string
      isCorrect: boolean
      order: number
    }, ExtArgs["result"]["questionOption"]>
    composites: {}
  }

  type QuestionOptionGetPayload<S extends boolean | null | undefined | QuestionOptionDefaultArgs> = $Result.GetResult<Prisma.$QuestionOptionPayload, S>

  type QuestionOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionOptionCountAggregateInputType | true
    }

  export interface QuestionOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionOption'], meta: { name: 'QuestionOption' } }
    /**
     * Find zero or one QuestionOption that matches the filter.
     * @param {QuestionOptionFindUniqueArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionOptionFindUniqueArgs>(args: SelectSubset<T, QuestionOptionFindUniqueArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionOptionFindUniqueOrThrowArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindFirstArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionOptionFindFirstArgs>(args?: SelectSubset<T, QuestionOptionFindFirstArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindFirstOrThrowArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionOptions
     * const questionOptions = await prisma.questionOption.findMany()
     * 
     * // Get first 10 QuestionOptions
     * const questionOptions = await prisma.questionOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionOptionWithIdOnly = await prisma.questionOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionOptionFindManyArgs>(args?: SelectSubset<T, QuestionOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionOption.
     * @param {QuestionOptionCreateArgs} args - Arguments to create a QuestionOption.
     * @example
     * // Create one QuestionOption
     * const QuestionOption = await prisma.questionOption.create({
     *   data: {
     *     // ... data to create a QuestionOption
     *   }
     * })
     * 
     */
    create<T extends QuestionOptionCreateArgs>(args: SelectSubset<T, QuestionOptionCreateArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionOptions.
     * @param {QuestionOptionCreateManyArgs} args - Arguments to create many QuestionOptions.
     * @example
     * // Create many QuestionOptions
     * const questionOption = await prisma.questionOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionOptionCreateManyArgs>(args?: SelectSubset<T, QuestionOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionOptions and returns the data saved in the database.
     * @param {QuestionOptionCreateManyAndReturnArgs} args - Arguments to create many QuestionOptions.
     * @example
     * // Create many QuestionOptions
     * const questionOption = await prisma.questionOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionOptions and only return the `id`
     * const questionOptionWithIdOnly = await prisma.questionOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionOption.
     * @param {QuestionOptionDeleteArgs} args - Arguments to delete one QuestionOption.
     * @example
     * // Delete one QuestionOption
     * const QuestionOption = await prisma.questionOption.delete({
     *   where: {
     *     // ... filter to delete one QuestionOption
     *   }
     * })
     * 
     */
    delete<T extends QuestionOptionDeleteArgs>(args: SelectSubset<T, QuestionOptionDeleteArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionOption.
     * @param {QuestionOptionUpdateArgs} args - Arguments to update one QuestionOption.
     * @example
     * // Update one QuestionOption
     * const questionOption = await prisma.questionOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionOptionUpdateArgs>(args: SelectSubset<T, QuestionOptionUpdateArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionOptions.
     * @param {QuestionOptionDeleteManyArgs} args - Arguments to filter QuestionOptions to delete.
     * @example
     * // Delete a few QuestionOptions
     * const { count } = await prisma.questionOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionOptionDeleteManyArgs>(args?: SelectSubset<T, QuestionOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionOptions
     * const questionOption = await prisma.questionOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionOptionUpdateManyArgs>(args: SelectSubset<T, QuestionOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionOptions and returns the data updated in the database.
     * @param {QuestionOptionUpdateManyAndReturnArgs} args - Arguments to update many QuestionOptions.
     * @example
     * // Update many QuestionOptions
     * const questionOption = await prisma.questionOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionOptions and only return the `id`
     * const questionOptionWithIdOnly = await prisma.questionOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionOption.
     * @param {QuestionOptionUpsertArgs} args - Arguments to update or create a QuestionOption.
     * @example
     * // Update or create a QuestionOption
     * const questionOption = await prisma.questionOption.upsert({
     *   create: {
     *     // ... data to create a QuestionOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionOption we want to update
     *   }
     * })
     */
    upsert<T extends QuestionOptionUpsertArgs>(args: SelectSubset<T, QuestionOptionUpsertArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionCountArgs} args - Arguments to filter QuestionOptions to count.
     * @example
     * // Count the number of QuestionOptions
     * const count = await prisma.questionOption.count({
     *   where: {
     *     // ... the filter for the QuestionOptions we want to count
     *   }
     * })
    **/
    count<T extends QuestionOptionCountArgs>(
      args?: Subset<T, QuestionOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionOptionAggregateArgs>(args: Subset<T, QuestionOptionAggregateArgs>): Prisma.PrismaPromise<GetQuestionOptionAggregateType<T>>

    /**
     * Group by QuestionOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionGroupByArgs} args - Group by arguments.
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
      T extends QuestionOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionOptionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionOption model
   */
  readonly fields: QuestionOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionOption model
   */
  interface QuestionOptionFieldRefs {
    readonly id: FieldRef<"QuestionOption", 'String'>
    readonly questionId: FieldRef<"QuestionOption", 'String'>
    readonly text: FieldRef<"QuestionOption", 'String'>
    readonly isCorrect: FieldRef<"QuestionOption", 'Boolean'>
    readonly order: FieldRef<"QuestionOption", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QuestionOption findUnique
   */
  export type QuestionOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption findUniqueOrThrow
   */
  export type QuestionOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption findFirst
   */
  export type QuestionOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionOptions.
     */
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption findFirstOrThrow
   */
  export type QuestionOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionOptions.
     */
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption findMany
   */
  export type QuestionOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOptions to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption create
   */
  export type QuestionOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionOption.
     */
    data: XOR<QuestionOptionCreateInput, QuestionOptionUncheckedCreateInput>
  }

  /**
   * QuestionOption createMany
   */
  export type QuestionOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionOptions.
     */
    data: QuestionOptionCreateManyInput | QuestionOptionCreateManyInput[]
  }

  /**
   * QuestionOption createManyAndReturn
   */
  export type QuestionOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionOptions.
     */
    data: QuestionOptionCreateManyInput | QuestionOptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionOption update
   */
  export type QuestionOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionOption.
     */
    data: XOR<QuestionOptionUpdateInput, QuestionOptionUncheckedUpdateInput>
    /**
     * Choose, which QuestionOption to update.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption updateMany
   */
  export type QuestionOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionOptions.
     */
    data: XOR<QuestionOptionUpdateManyMutationInput, QuestionOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuestionOptions to update
     */
    where?: QuestionOptionWhereInput
    /**
     * Limit how many QuestionOptions to update.
     */
    limit?: number
  }

  /**
   * QuestionOption updateManyAndReturn
   */
  export type QuestionOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * The data used to update QuestionOptions.
     */
    data: XOR<QuestionOptionUpdateManyMutationInput, QuestionOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuestionOptions to update
     */
    where?: QuestionOptionWhereInput
    /**
     * Limit how many QuestionOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionOption upsert
   */
  export type QuestionOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionOption to update in case it exists.
     */
    where: QuestionOptionWhereUniqueInput
    /**
     * In case the QuestionOption found by the `where` argument doesn't exist, create a new QuestionOption with this data.
     */
    create: XOR<QuestionOptionCreateInput, QuestionOptionUncheckedCreateInput>
    /**
     * In case the QuestionOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionOptionUpdateInput, QuestionOptionUncheckedUpdateInput>
  }

  /**
   * QuestionOption delete
   */
  export type QuestionOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter which QuestionOption to delete.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption deleteMany
   */
  export type QuestionOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionOptions to delete
     */
    where?: QuestionOptionWhereInput
    /**
     * Limit how many QuestionOptions to delete.
     */
    limit?: number
  }

  /**
   * QuestionOption without action
   */
  export type QuestionOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionAnswer
   */

  export type AggregateQuestionAnswer = {
    _count: QuestionAnswerCountAggregateOutputType | null
    _min: QuestionAnswerMinAggregateOutputType | null
    _max: QuestionAnswerMaxAggregateOutputType | null
  }

  export type QuestionAnswerMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    submissionId: string | null
    selectedOptionId: string | null
    isCorrect: boolean | null
  }

  export type QuestionAnswerMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    submissionId: string | null
    selectedOptionId: string | null
    isCorrect: boolean | null
  }

  export type QuestionAnswerCountAggregateOutputType = {
    id: number
    questionId: number
    submissionId: number
    selectedOptionId: number
    isCorrect: number
    _all: number
  }


  export type QuestionAnswerMinAggregateInputType = {
    id?: true
    questionId?: true
    submissionId?: true
    selectedOptionId?: true
    isCorrect?: true
  }

  export type QuestionAnswerMaxAggregateInputType = {
    id?: true
    questionId?: true
    submissionId?: true
    selectedOptionId?: true
    isCorrect?: true
  }

  export type QuestionAnswerCountAggregateInputType = {
    id?: true
    questionId?: true
    submissionId?: true
    selectedOptionId?: true
    isCorrect?: true
    _all?: true
  }

  export type QuestionAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAnswer to aggregate.
     */
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     */
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionAnswers
    **/
    _count?: true | QuestionAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionAnswerMaxAggregateInputType
  }

  export type GetQuestionAnswerAggregateType<T extends QuestionAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionAnswer[P]>
      : GetScalarType<T[P], AggregateQuestionAnswer[P]>
  }




  export type QuestionAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAnswerWhereInput
    orderBy?: QuestionAnswerOrderByWithAggregationInput | QuestionAnswerOrderByWithAggregationInput[]
    by: QuestionAnswerScalarFieldEnum[] | QuestionAnswerScalarFieldEnum
    having?: QuestionAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionAnswerCountAggregateInputType | true
    _min?: QuestionAnswerMinAggregateInputType
    _max?: QuestionAnswerMaxAggregateInputType
  }

  export type QuestionAnswerGroupByOutputType = {
    id: string
    questionId: string
    submissionId: string
    selectedOptionId: string | null
    isCorrect: boolean
    _count: QuestionAnswerCountAggregateOutputType | null
    _min: QuestionAnswerMinAggregateOutputType | null
    _max: QuestionAnswerMaxAggregateOutputType | null
  }

  type GetQuestionAnswerGroupByPayload<T extends QuestionAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionAnswerGroupByOutputType[P]>
        }
      >
    >


  export type QuestionAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    submissionId?: boolean
    selectedOptionId?: boolean
    isCorrect?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    submission?: boolean | QuizSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAnswer"]>

  export type QuestionAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    submissionId?: boolean
    selectedOptionId?: boolean
    isCorrect?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    submission?: boolean | QuizSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAnswer"]>

  export type QuestionAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    submissionId?: boolean
    selectedOptionId?: boolean
    isCorrect?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    submission?: boolean | QuizSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAnswer"]>

  export type QuestionAnswerSelectScalar = {
    id?: boolean
    questionId?: boolean
    submissionId?: boolean
    selectedOptionId?: boolean
    isCorrect?: boolean
  }

  export type QuestionAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "submissionId" | "selectedOptionId" | "isCorrect", ExtArgs["result"]["questionAnswer"]>
  export type QuestionAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    submission?: boolean | QuizSubmissionDefaultArgs<ExtArgs>
  }
  export type QuestionAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    submission?: boolean | QuizSubmissionDefaultArgs<ExtArgs>
  }
  export type QuestionAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    submission?: boolean | QuizSubmissionDefaultArgs<ExtArgs>
  }

  export type $QuestionAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionAnswer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      submission: Prisma.$QuizSubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      submissionId: string
      selectedOptionId: string | null
      isCorrect: boolean
    }, ExtArgs["result"]["questionAnswer"]>
    composites: {}
  }

  type QuestionAnswerGetPayload<S extends boolean | null | undefined | QuestionAnswerDefaultArgs> = $Result.GetResult<Prisma.$QuestionAnswerPayload, S>

  type QuestionAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionAnswerCountAggregateInputType | true
    }

  export interface QuestionAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionAnswer'], meta: { name: 'QuestionAnswer' } }
    /**
     * Find zero or one QuestionAnswer that matches the filter.
     * @param {QuestionAnswerFindUniqueArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionAnswerFindUniqueArgs>(args: SelectSubset<T, QuestionAnswerFindUniqueArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionAnswerFindUniqueOrThrowArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindFirstArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionAnswerFindFirstArgs>(args?: SelectSubset<T, QuestionAnswerFindFirstArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindFirstOrThrowArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionAnswers
     * const questionAnswers = await prisma.questionAnswer.findMany()
     * 
     * // Get first 10 QuestionAnswers
     * const questionAnswers = await prisma.questionAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionAnswerWithIdOnly = await prisma.questionAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionAnswerFindManyArgs>(args?: SelectSubset<T, QuestionAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionAnswer.
     * @param {QuestionAnswerCreateArgs} args - Arguments to create a QuestionAnswer.
     * @example
     * // Create one QuestionAnswer
     * const QuestionAnswer = await prisma.questionAnswer.create({
     *   data: {
     *     // ... data to create a QuestionAnswer
     *   }
     * })
     * 
     */
    create<T extends QuestionAnswerCreateArgs>(args: SelectSubset<T, QuestionAnswerCreateArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionAnswers.
     * @param {QuestionAnswerCreateManyArgs} args - Arguments to create many QuestionAnswers.
     * @example
     * // Create many QuestionAnswers
     * const questionAnswer = await prisma.questionAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionAnswerCreateManyArgs>(args?: SelectSubset<T, QuestionAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionAnswers and returns the data saved in the database.
     * @param {QuestionAnswerCreateManyAndReturnArgs} args - Arguments to create many QuestionAnswers.
     * @example
     * // Create many QuestionAnswers
     * const questionAnswer = await prisma.questionAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionAnswers and only return the `id`
     * const questionAnswerWithIdOnly = await prisma.questionAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionAnswer.
     * @param {QuestionAnswerDeleteArgs} args - Arguments to delete one QuestionAnswer.
     * @example
     * // Delete one QuestionAnswer
     * const QuestionAnswer = await prisma.questionAnswer.delete({
     *   where: {
     *     // ... filter to delete one QuestionAnswer
     *   }
     * })
     * 
     */
    delete<T extends QuestionAnswerDeleteArgs>(args: SelectSubset<T, QuestionAnswerDeleteArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionAnswer.
     * @param {QuestionAnswerUpdateArgs} args - Arguments to update one QuestionAnswer.
     * @example
     * // Update one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionAnswerUpdateArgs>(args: SelectSubset<T, QuestionAnswerUpdateArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionAnswers.
     * @param {QuestionAnswerDeleteManyArgs} args - Arguments to filter QuestionAnswers to delete.
     * @example
     * // Delete a few QuestionAnswers
     * const { count } = await prisma.questionAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionAnswerDeleteManyArgs>(args?: SelectSubset<T, QuestionAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionAnswers
     * const questionAnswer = await prisma.questionAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionAnswerUpdateManyArgs>(args: SelectSubset<T, QuestionAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAnswers and returns the data updated in the database.
     * @param {QuestionAnswerUpdateManyAndReturnArgs} args - Arguments to update many QuestionAnswers.
     * @example
     * // Update many QuestionAnswers
     * const questionAnswer = await prisma.questionAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionAnswers and only return the `id`
     * const questionAnswerWithIdOnly = await prisma.questionAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionAnswer.
     * @param {QuestionAnswerUpsertArgs} args - Arguments to update or create a QuestionAnswer.
     * @example
     * // Update or create a QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.upsert({
     *   create: {
     *     // ... data to create a QuestionAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionAnswer we want to update
     *   }
     * })
     */
    upsert<T extends QuestionAnswerUpsertArgs>(args: SelectSubset<T, QuestionAnswerUpsertArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerCountArgs} args - Arguments to filter QuestionAnswers to count.
     * @example
     * // Count the number of QuestionAnswers
     * const count = await prisma.questionAnswer.count({
     *   where: {
     *     // ... the filter for the QuestionAnswers we want to count
     *   }
     * })
    **/
    count<T extends QuestionAnswerCountArgs>(
      args?: Subset<T, QuestionAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAnswerAggregateArgs>(args: Subset<T, QuestionAnswerAggregateArgs>): Prisma.PrismaPromise<GetQuestionAnswerAggregateType<T>>

    /**
     * Group by QuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerGroupByArgs} args - Group by arguments.
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
      T extends QuestionAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionAnswerGroupByArgs['orderBy'] }
        : { orderBy?: QuestionAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionAnswer model
   */
  readonly fields: QuestionAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends QuizSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSubmissionDefaultArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionAnswer model
   */
  interface QuestionAnswerFieldRefs {
    readonly id: FieldRef<"QuestionAnswer", 'String'>
    readonly questionId: FieldRef<"QuestionAnswer", 'String'>
    readonly submissionId: FieldRef<"QuestionAnswer", 'String'>
    readonly selectedOptionId: FieldRef<"QuestionAnswer", 'String'>
    readonly isCorrect: FieldRef<"QuestionAnswer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * QuestionAnswer findUnique
   */
  export type QuestionAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswer to fetch.
     */
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer findUniqueOrThrow
   */
  export type QuestionAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswer to fetch.
     */
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer findFirst
   */
  export type QuestionAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswer to fetch.
     */
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     */
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAnswers.
     */
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAnswers.
     */
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAnswer findFirstOrThrow
   */
  export type QuestionAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswer to fetch.
     */
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     */
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAnswers.
     */
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAnswers.
     */
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAnswer findMany
   */
  export type QuestionAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswers to fetch.
     */
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     */
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionAnswers.
     */
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     */
    skip?: number
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAnswer create
   */
  export type QuestionAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionAnswer.
     */
    data: XOR<QuestionAnswerCreateInput, QuestionAnswerUncheckedCreateInput>
  }

  /**
   * QuestionAnswer createMany
   */
  export type QuestionAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionAnswers.
     */
    data: QuestionAnswerCreateManyInput | QuestionAnswerCreateManyInput[]
  }

  /**
   * QuestionAnswer createManyAndReturn
   */
  export type QuestionAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionAnswers.
     */
    data: QuestionAnswerCreateManyInput | QuestionAnswerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionAnswer update
   */
  export type QuestionAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionAnswer.
     */
    data: XOR<QuestionAnswerUpdateInput, QuestionAnswerUncheckedUpdateInput>
    /**
     * Choose, which QuestionAnswer to update.
     */
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer updateMany
   */
  export type QuestionAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionAnswers.
     */
    data: XOR<QuestionAnswerUpdateManyMutationInput, QuestionAnswerUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAnswers to update
     */
    where?: QuestionAnswerWhereInput
    /**
     * Limit how many QuestionAnswers to update.
     */
    limit?: number
  }

  /**
   * QuestionAnswer updateManyAndReturn
   */
  export type QuestionAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * The data used to update QuestionAnswers.
     */
    data: XOR<QuestionAnswerUpdateManyMutationInput, QuestionAnswerUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAnswers to update
     */
    where?: QuestionAnswerWhereInput
    /**
     * Limit how many QuestionAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionAnswer upsert
   */
  export type QuestionAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionAnswer to update in case it exists.
     */
    where: QuestionAnswerWhereUniqueInput
    /**
     * In case the QuestionAnswer found by the `where` argument doesn't exist, create a new QuestionAnswer with this data.
     */
    create: XOR<QuestionAnswerCreateInput, QuestionAnswerUncheckedCreateInput>
    /**
     * In case the QuestionAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionAnswerUpdateInput, QuestionAnswerUncheckedUpdateInput>
  }

  /**
   * QuestionAnswer delete
   */
  export type QuestionAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter which QuestionAnswer to delete.
     */
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer deleteMany
   */
  export type QuestionAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAnswers to delete
     */
    where?: QuestionAnswerWhereInput
    /**
     * Limit how many QuestionAnswers to delete.
     */
    limit?: number
  }

  /**
   * QuestionAnswer without action
   */
  export type QuestionAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
  }


  /**
   * Model QuizSubmission
   */

  export type AggregateQuizSubmission = {
    _count: QuizSubmissionCountAggregateOutputType | null
    _avg: QuizSubmissionAvgAggregateOutputType | null
    _sum: QuizSubmissionSumAggregateOutputType | null
    _min: QuizSubmissionMinAggregateOutputType | null
    _max: QuizSubmissionMaxAggregateOutputType | null
  }

  export type QuizSubmissionAvgAggregateOutputType = {
    score: number | null
    maxScore: number | null
    percentage: number | null
    timeSpent: number | null
  }

  export type QuizSubmissionSumAggregateOutputType = {
    score: number | null
    maxScore: number | null
    percentage: number | null
    timeSpent: number | null
  }

  export type QuizSubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    score: number | null
    maxScore: number | null
    percentage: number | null
    passed: boolean | null
    timeSpent: number | null
    submittedAt: Date | null
    updatedAt: Date | null
  }

  export type QuizSubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    score: number | null
    maxScore: number | null
    percentage: number | null
    passed: boolean | null
    timeSpent: number | null
    submittedAt: Date | null
    updatedAt: Date | null
  }

  export type QuizSubmissionCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    score: number
    maxScore: number
    percentage: number
    passed: number
    timeSpent: number
    submittedAt: number
    updatedAt: number
    _all: number
  }


  export type QuizSubmissionAvgAggregateInputType = {
    score?: true
    maxScore?: true
    percentage?: true
    timeSpent?: true
  }

  export type QuizSubmissionSumAggregateInputType = {
    score?: true
    maxScore?: true
    percentage?: true
    timeSpent?: true
  }

  export type QuizSubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    maxScore?: true
    percentage?: true
    passed?: true
    timeSpent?: true
    submittedAt?: true
    updatedAt?: true
  }

  export type QuizSubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    maxScore?: true
    percentage?: true
    passed?: true
    timeSpent?: true
    submittedAt?: true
    updatedAt?: true
  }

  export type QuizSubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    maxScore?: true
    percentage?: true
    passed?: true
    timeSpent?: true
    submittedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSubmission to aggregate.
     */
    where?: QuizSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSubmissions to fetch.
     */
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizSubmissions
    **/
    _count?: true | QuizSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizSubmissionMaxAggregateInputType
  }

  export type GetQuizSubmissionAggregateType<T extends QuizSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizSubmission[P]>
      : GetScalarType<T[P], AggregateQuizSubmission[P]>
  }




  export type QuizSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSubmissionWhereInput
    orderBy?: QuizSubmissionOrderByWithAggregationInput | QuizSubmissionOrderByWithAggregationInput[]
    by: QuizSubmissionScalarFieldEnum[] | QuizSubmissionScalarFieldEnum
    having?: QuizSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizSubmissionCountAggregateInputType | true
    _avg?: QuizSubmissionAvgAggregateInputType
    _sum?: QuizSubmissionSumAggregateInputType
    _min?: QuizSubmissionMinAggregateInputType
    _max?: QuizSubmissionMaxAggregateInputType
  }

  export type QuizSubmissionGroupByOutputType = {
    id: string
    userId: string
    quizId: string
    score: number | null
    maxScore: number | null
    percentage: number | null
    passed: boolean
    timeSpent: number | null
    submittedAt: Date
    updatedAt: Date
    _count: QuizSubmissionCountAggregateOutputType | null
    _avg: QuizSubmissionAvgAggregateOutputType | null
    _sum: QuizSubmissionSumAggregateOutputType | null
    _min: QuizSubmissionMinAggregateOutputType | null
    _max: QuizSubmissionMaxAggregateOutputType | null
  }

  type GetQuizSubmissionGroupByPayload<T extends QuizSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type QuizSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    maxScore?: boolean
    percentage?: boolean
    passed?: boolean
    timeSpent?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    answers?: boolean | QuizSubmission$answersArgs<ExtArgs>
    _count?: boolean | QuizSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSubmission"]>

  export type QuizSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    maxScore?: boolean
    percentage?: boolean
    passed?: boolean
    timeSpent?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSubmission"]>

  export type QuizSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    maxScore?: boolean
    percentage?: boolean
    passed?: boolean
    timeSpent?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSubmission"]>

  export type QuizSubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    maxScore?: boolean
    percentage?: boolean
    passed?: boolean
    timeSpent?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
  }

  export type QuizSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizId" | "score" | "maxScore" | "percentage" | "passed" | "timeSpent" | "submittedAt" | "updatedAt", ExtArgs["result"]["quizSubmission"]>
  export type QuizSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    answers?: boolean | QuizSubmission$answersArgs<ExtArgs>
    _count?: boolean | QuizSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizSubmission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
      answers: Prisma.$QuestionAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizId: string
      score: number | null
      maxScore: number | null
      percentage: number | null
      passed: boolean
      timeSpent: number | null
      submittedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizSubmission"]>
    composites: {}
  }

  type QuizSubmissionGetPayload<S extends boolean | null | undefined | QuizSubmissionDefaultArgs> = $Result.GetResult<Prisma.$QuizSubmissionPayload, S>

  type QuizSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizSubmissionCountAggregateInputType | true
    }

  export interface QuizSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizSubmission'], meta: { name: 'QuizSubmission' } }
    /**
     * Find zero or one QuizSubmission that matches the filter.
     * @param {QuizSubmissionFindUniqueArgs} args - Arguments to find a QuizSubmission
     * @example
     * // Get one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizSubmissionFindUniqueArgs>(args: SelectSubset<T, QuizSubmissionFindUniqueArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizSubmissionFindUniqueOrThrowArgs} args - Arguments to find a QuizSubmission
     * @example
     * // Get one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionFindFirstArgs} args - Arguments to find a QuizSubmission
     * @example
     * // Get one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizSubmissionFindFirstArgs>(args?: SelectSubset<T, QuizSubmissionFindFirstArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionFindFirstOrThrowArgs} args - Arguments to find a QuizSubmission
     * @example
     * // Get one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizSubmissions
     * const quizSubmissions = await prisma.quizSubmission.findMany()
     * 
     * // Get first 10 QuizSubmissions
     * const quizSubmissions = await prisma.quizSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizSubmissionWithIdOnly = await prisma.quizSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizSubmissionFindManyArgs>(args?: SelectSubset<T, QuizSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizSubmission.
     * @param {QuizSubmissionCreateArgs} args - Arguments to create a QuizSubmission.
     * @example
     * // Create one QuizSubmission
     * const QuizSubmission = await prisma.quizSubmission.create({
     *   data: {
     *     // ... data to create a QuizSubmission
     *   }
     * })
     * 
     */
    create<T extends QuizSubmissionCreateArgs>(args: SelectSubset<T, QuizSubmissionCreateArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizSubmissions.
     * @param {QuizSubmissionCreateManyArgs} args - Arguments to create many QuizSubmissions.
     * @example
     * // Create many QuizSubmissions
     * const quizSubmission = await prisma.quizSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizSubmissionCreateManyArgs>(args?: SelectSubset<T, QuizSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizSubmissions and returns the data saved in the database.
     * @param {QuizSubmissionCreateManyAndReturnArgs} args - Arguments to create many QuizSubmissions.
     * @example
     * // Create many QuizSubmissions
     * const quizSubmission = await prisma.quizSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizSubmissions and only return the `id`
     * const quizSubmissionWithIdOnly = await prisma.quizSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizSubmission.
     * @param {QuizSubmissionDeleteArgs} args - Arguments to delete one QuizSubmission.
     * @example
     * // Delete one QuizSubmission
     * const QuizSubmission = await prisma.quizSubmission.delete({
     *   where: {
     *     // ... filter to delete one QuizSubmission
     *   }
     * })
     * 
     */
    delete<T extends QuizSubmissionDeleteArgs>(args: SelectSubset<T, QuizSubmissionDeleteArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizSubmission.
     * @param {QuizSubmissionUpdateArgs} args - Arguments to update one QuizSubmission.
     * @example
     * // Update one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizSubmissionUpdateArgs>(args: SelectSubset<T, QuizSubmissionUpdateArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizSubmissions.
     * @param {QuizSubmissionDeleteManyArgs} args - Arguments to filter QuizSubmissions to delete.
     * @example
     * // Delete a few QuizSubmissions
     * const { count } = await prisma.quizSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizSubmissionDeleteManyArgs>(args?: SelectSubset<T, QuizSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizSubmissions
     * const quizSubmission = await prisma.quizSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizSubmissionUpdateManyArgs>(args: SelectSubset<T, QuizSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSubmissions and returns the data updated in the database.
     * @param {QuizSubmissionUpdateManyAndReturnArgs} args - Arguments to update many QuizSubmissions.
     * @example
     * // Update many QuizSubmissions
     * const quizSubmission = await prisma.quizSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizSubmissions and only return the `id`
     * const quizSubmissionWithIdOnly = await prisma.quizSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizSubmission.
     * @param {QuizSubmissionUpsertArgs} args - Arguments to update or create a QuizSubmission.
     * @example
     * // Update or create a QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.upsert({
     *   create: {
     *     // ... data to create a QuizSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizSubmission we want to update
     *   }
     * })
     */
    upsert<T extends QuizSubmissionUpsertArgs>(args: SelectSubset<T, QuizSubmissionUpsertArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionCountArgs} args - Arguments to filter QuizSubmissions to count.
     * @example
     * // Count the number of QuizSubmissions
     * const count = await prisma.quizSubmission.count({
     *   where: {
     *     // ... the filter for the QuizSubmissions we want to count
     *   }
     * })
    **/
    count<T extends QuizSubmissionCountArgs>(
      args?: Subset<T, QuizSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizSubmissionAggregateArgs>(args: Subset<T, QuizSubmissionAggregateArgs>): Prisma.PrismaPromise<GetQuizSubmissionAggregateType<T>>

    /**
     * Group by QuizSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionGroupByArgs} args - Group by arguments.
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
      T extends QuizSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: QuizSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizSubmission model
   */
  readonly fields: QuizSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends QuizSubmission$answersArgs<ExtArgs> = {}>(args?: Subset<T, QuizSubmission$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizSubmission model
   */
  interface QuizSubmissionFieldRefs {
    readonly id: FieldRef<"QuizSubmission", 'String'>
    readonly userId: FieldRef<"QuizSubmission", 'String'>
    readonly quizId: FieldRef<"QuizSubmission", 'String'>
    readonly score: FieldRef<"QuizSubmission", 'Int'>
    readonly maxScore: FieldRef<"QuizSubmission", 'Int'>
    readonly percentage: FieldRef<"QuizSubmission", 'Float'>
    readonly passed: FieldRef<"QuizSubmission", 'Boolean'>
    readonly timeSpent: FieldRef<"QuizSubmission", 'Int'>
    readonly submittedAt: FieldRef<"QuizSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizSubmission findUnique
   */
  export type QuizSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmission to fetch.
     */
    where: QuizSubmissionWhereUniqueInput
  }

  /**
   * QuizSubmission findUniqueOrThrow
   */
  export type QuizSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmission to fetch.
     */
    where: QuizSubmissionWhereUniqueInput
  }

  /**
   * QuizSubmission findFirst
   */
  export type QuizSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmission to fetch.
     */
    where?: QuizSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSubmissions to fetch.
     */
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSubmissions.
     */
    cursor?: QuizSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSubmissions.
     */
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * QuizSubmission findFirstOrThrow
   */
  export type QuizSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmission to fetch.
     */
    where?: QuizSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSubmissions to fetch.
     */
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSubmissions.
     */
    cursor?: QuizSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSubmissions.
     */
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * QuizSubmission findMany
   */
  export type QuizSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmissions to fetch.
     */
    where?: QuizSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSubmissions to fetch.
     */
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizSubmissions.
     */
    cursor?: QuizSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSubmissions.
     */
    skip?: number
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * QuizSubmission create
   */
  export type QuizSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizSubmission.
     */
    data: XOR<QuizSubmissionCreateInput, QuizSubmissionUncheckedCreateInput>
  }

  /**
   * QuizSubmission createMany
   */
  export type QuizSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizSubmissions.
     */
    data: QuizSubmissionCreateManyInput | QuizSubmissionCreateManyInput[]
  }

  /**
   * QuizSubmission createManyAndReturn
   */
  export type QuizSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizSubmissions.
     */
    data: QuizSubmissionCreateManyInput | QuizSubmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSubmission update
   */
  export type QuizSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizSubmission.
     */
    data: XOR<QuizSubmissionUpdateInput, QuizSubmissionUncheckedUpdateInput>
    /**
     * Choose, which QuizSubmission to update.
     */
    where: QuizSubmissionWhereUniqueInput
  }

  /**
   * QuizSubmission updateMany
   */
  export type QuizSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizSubmissions.
     */
    data: XOR<QuizSubmissionUpdateManyMutationInput, QuizSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSubmissions to update
     */
    where?: QuizSubmissionWhereInput
    /**
     * Limit how many QuizSubmissions to update.
     */
    limit?: number
  }

  /**
   * QuizSubmission updateManyAndReturn
   */
  export type QuizSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update QuizSubmissions.
     */
    data: XOR<QuizSubmissionUpdateManyMutationInput, QuizSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSubmissions to update
     */
    where?: QuizSubmissionWhereInput
    /**
     * Limit how many QuizSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSubmission upsert
   */
  export type QuizSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizSubmission to update in case it exists.
     */
    where: QuizSubmissionWhereUniqueInput
    /**
     * In case the QuizSubmission found by the `where` argument doesn't exist, create a new QuizSubmission with this data.
     */
    create: XOR<QuizSubmissionCreateInput, QuizSubmissionUncheckedCreateInput>
    /**
     * In case the QuizSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizSubmissionUpdateInput, QuizSubmissionUncheckedUpdateInput>
  }

  /**
   * QuizSubmission delete
   */
  export type QuizSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter which QuizSubmission to delete.
     */
    where: QuizSubmissionWhereUniqueInput
  }

  /**
   * QuizSubmission deleteMany
   */
  export type QuizSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSubmissions to delete
     */
    where?: QuizSubmissionWhereInput
    /**
     * Limit how many QuizSubmissions to delete.
     */
    limit?: number
  }

  /**
   * QuizSubmission.answers
   */
  export type QuizSubmission$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    where?: QuestionAnswerWhereInput
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    cursor?: QuestionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * QuizSubmission without action
   */
  export type QuizSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    percentage: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    percentage: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pathId: string | null
    completed: boolean | null
    percentage: number | null
    enrolledAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pathId: string | null
    completed: boolean | null
    percentage: number | null
    enrolledAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    userId: number
    pathId: number
    completed: number
    percentage: number
    enrolledAt: number
    completedAt: number
    updatedAt: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    percentage?: true
  }

  export type EnrollmentSumAggregateInputType = {
    percentage?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    userId?: true
    pathId?: true
    completed?: true
    percentage?: true
    enrolledAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    userId?: true
    pathId?: true
    completed?: true
    percentage?: true
    enrolledAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    userId?: true
    pathId?: true
    completed?: true
    percentage?: true
    enrolledAt?: true
    completedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    userId: string
    pathId: string
    completed: boolean
    percentage: number
    enrolledAt: Date
    completedAt: Date | null
    updatedAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pathId?: boolean
    completed?: boolean
    percentage?: boolean
    enrolledAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pathId?: boolean
    completed?: boolean
    percentage?: boolean
    enrolledAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pathId?: boolean
    completed?: boolean
    percentage?: boolean
    enrolledAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    userId?: boolean
    pathId?: boolean
    completed?: boolean
    percentage?: boolean
    enrolledAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pathId" | "completed" | "percentage" | "enrolledAt" | "completedAt" | "updatedAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | LearningPathDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      path: Prisma.$LearningPathPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pathId: string
      completed: boolean
      percentage: number
      enrolledAt: Date
      completedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    path<T extends LearningPathDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LearningPathDefaultArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly userId: FieldRef<"Enrollment", 'String'>
    readonly pathId: FieldRef<"Enrollment", 'String'>
    readonly completed: FieldRef<"Enrollment", 'Boolean'>
    readonly percentage: FieldRef<"Enrollment", 'Float'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
    readonly completedAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Progress
   */

  export type AggregateProgress = {
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  export type ProgressAvgAggregateOutputType = {
    views: number | null
  }

  export type ProgressSumAggregateOutputType = {
    views: number | null
  }

  export type ProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    completed: boolean | null
    views: number | null
    firstViewedAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type ProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    completed: boolean | null
    views: number | null
    firstViewedAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type ProgressCountAggregateOutputType = {
    id: number
    userId: number
    lessonId: number
    completed: number
    views: number
    firstViewedAt: number
    completedAt: number
    updatedAt: number
    _all: number
  }


  export type ProgressAvgAggregateInputType = {
    views?: true
  }

  export type ProgressSumAggregateInputType = {
    views?: true
  }

  export type ProgressMinAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    completed?: true
    views?: true
    firstViewedAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type ProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    completed?: true
    views?: true
    firstViewedAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type ProgressCountAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    completed?: true
    views?: true
    firstViewedAt?: true
    completedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progress to aggregate.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresses
    **/
    _count?: true | ProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressMaxAggregateInputType
  }

  export type GetProgressAggregateType<T extends ProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgress[P]>
      : GetScalarType<T[P], AggregateProgress[P]>
  }




  export type ProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithAggregationInput | ProgressOrderByWithAggregationInput[]
    by: ProgressScalarFieldEnum[] | ProgressScalarFieldEnum
    having?: ProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressCountAggregateInputType | true
    _avg?: ProgressAvgAggregateInputType
    _sum?: ProgressSumAggregateInputType
    _min?: ProgressMinAggregateInputType
    _max?: ProgressMaxAggregateInputType
  }

  export type ProgressGroupByOutputType = {
    id: string
    userId: string
    lessonId: string
    completed: boolean
    views: number
    firstViewedAt: Date
    completedAt: Date | null
    updatedAt: Date
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  type GetProgressGroupByPayload<T extends ProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressGroupByOutputType[P]>
        }
      >
    >


  export type ProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    completed?: boolean
    views?: boolean
    firstViewedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    completed?: boolean
    views?: boolean
    firstViewedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    completed?: boolean
    views?: boolean
    firstViewedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    completed?: boolean
    views?: boolean
    firstViewedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
  }

  export type ProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lessonId" | "completed" | "views" | "firstViewedAt" | "completedAt" | "updatedAt", ExtArgs["result"]["progress"]>
  export type ProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type ProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type ProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $ProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lessonId: string
      completed: boolean
      views: number
      firstViewedAt: Date
      completedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["progress"]>
    composites: {}
  }

  type ProgressGetPayload<S extends boolean | null | undefined | ProgressDefaultArgs> = $Result.GetResult<Prisma.$ProgressPayload, S>

  type ProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressCountAggregateInputType | true
    }

  export interface ProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progress'], meta: { name: 'Progress' } }
    /**
     * Find zero or one Progress that matches the filter.
     * @param {ProgressFindUniqueArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressFindUniqueArgs>(args: SelectSubset<T, ProgressFindUniqueArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressFindUniqueOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressFindFirstArgs>(args?: SelectSubset<T, ProgressFindFirstArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresses
     * const progresses = await prisma.progress.findMany()
     * 
     * // Get first 10 Progresses
     * const progresses = await prisma.progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressWithIdOnly = await prisma.progress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressFindManyArgs>(args?: SelectSubset<T, ProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progress.
     * @param {ProgressCreateArgs} args - Arguments to create a Progress.
     * @example
     * // Create one Progress
     * const Progress = await prisma.progress.create({
     *   data: {
     *     // ... data to create a Progress
     *   }
     * })
     * 
     */
    create<T extends ProgressCreateArgs>(args: SelectSubset<T, ProgressCreateArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresses.
     * @param {ProgressCreateManyArgs} args - Arguments to create many Progresses.
     * @example
     * // Create many Progresses
     * const progress = await prisma.progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressCreateManyArgs>(args?: SelectSubset<T, ProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresses and returns the data saved in the database.
     * @param {ProgressCreateManyAndReturnArgs} args - Arguments to create many Progresses.
     * @example
     * // Create many Progresses
     * const progress = await prisma.progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresses and only return the `id`
     * const progressWithIdOnly = await prisma.progress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progress.
     * @param {ProgressDeleteArgs} args - Arguments to delete one Progress.
     * @example
     * // Delete one Progress
     * const Progress = await prisma.progress.delete({
     *   where: {
     *     // ... filter to delete one Progress
     *   }
     * })
     * 
     */
    delete<T extends ProgressDeleteArgs>(args: SelectSubset<T, ProgressDeleteArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progress.
     * @param {ProgressUpdateArgs} args - Arguments to update one Progress.
     * @example
     * // Update one Progress
     * const progress = await prisma.progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressUpdateArgs>(args: SelectSubset<T, ProgressUpdateArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresses.
     * @param {ProgressDeleteManyArgs} args - Arguments to filter Progresses to delete.
     * @example
     * // Delete a few Progresses
     * const { count } = await prisma.progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressDeleteManyArgs>(args?: SelectSubset<T, ProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressUpdateManyArgs>(args: SelectSubset<T, ProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses and returns the data updated in the database.
     * @param {ProgressUpdateManyAndReturnArgs} args - Arguments to update many Progresses.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresses and only return the `id`
     * const progressWithIdOnly = await prisma.progress.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progress.
     * @param {ProgressUpsertArgs} args - Arguments to update or create a Progress.
     * @example
     * // Update or create a Progress
     * const progress = await prisma.progress.upsert({
     *   create: {
     *     // ... data to create a Progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progress we want to update
     *   }
     * })
     */
    upsert<T extends ProgressUpsertArgs>(args: SelectSubset<T, ProgressUpsertArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressCountArgs} args - Arguments to filter Progresses to count.
     * @example
     * // Count the number of Progresses
     * const count = await prisma.progress.count({
     *   where: {
     *     // ... the filter for the Progresses we want to count
     *   }
     * })
    **/
    count<T extends ProgressCountArgs>(
      args?: Subset<T, ProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressAggregateArgs>(args: Subset<T, ProgressAggregateArgs>): Prisma.PrismaPromise<GetProgressAggregateType<T>>

    /**
     * Group by Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressGroupByArgs} args - Group by arguments.
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
      T extends ProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressGroupByArgs['orderBy'] }
        : { orderBy?: ProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progress model
   */
  readonly fields: ProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Progress model
   */
  interface ProgressFieldRefs {
    readonly id: FieldRef<"Progress", 'String'>
    readonly userId: FieldRef<"Progress", 'String'>
    readonly lessonId: FieldRef<"Progress", 'String'>
    readonly completed: FieldRef<"Progress", 'Boolean'>
    readonly views: FieldRef<"Progress", 'Int'>
    readonly firstViewedAt: FieldRef<"Progress", 'DateTime'>
    readonly completedAt: FieldRef<"Progress", 'DateTime'>
    readonly updatedAt: FieldRef<"Progress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Progress findUnique
   */
  export type ProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress findUniqueOrThrow
   */
  export type ProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress findFirst
   */
  export type ProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress findFirstOrThrow
   */
  export type ProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress findMany
   */
  export type ProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progresses to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress create
   */
  export type ProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a Progress.
     */
    data: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
  }

  /**
   * Progress createMany
   */
  export type ProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresses.
     */
    data: ProgressCreateManyInput | ProgressCreateManyInput[]
  }

  /**
   * Progress createManyAndReturn
   */
  export type ProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * The data used to create many Progresses.
     */
    data: ProgressCreateManyInput | ProgressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progress update
   */
  export type ProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a Progress.
     */
    data: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
    /**
     * Choose, which Progress to update.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress updateMany
   */
  export type ProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresses.
     */
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyInput>
    /**
     * Filter which Progresses to update
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to update.
     */
    limit?: number
  }

  /**
   * Progress updateManyAndReturn
   */
  export type ProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * The data used to update Progresses.
     */
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyInput>
    /**
     * Filter which Progresses to update
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progress upsert
   */
  export type ProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the Progress to update in case it exists.
     */
    where: ProgressWhereUniqueInput
    /**
     * In case the Progress found by the `where` argument doesn't exist, create a new Progress with this data.
     */
    create: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
    /**
     * In case the Progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
  }

  /**
   * Progress delete
   */
  export type ProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter which Progress to delete.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress deleteMany
   */
  export type ProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresses to delete
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to delete.
     */
    limit?: number
  }

  /**
   * Progress without action
   */
  export type ProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    avatar: 'avatar',
    points: 'points',
    currentStreak: 'currentStreak',
    totalLessonsCompleted: 'totalLessonsCompleted',
    totalQuizzesPassed: 'totalQuizzesPassed',
    badges: 'badges',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const LearningPathScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    icon: 'icon',
    creatorId: 'creatorId',
    isPublished: 'isPublished',
    estimatedHours: 'estimatedHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningPathScalarFieldEnum = (typeof LearningPathScalarFieldEnum)[keyof typeof LearningPathScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    order: 'order',
    pathId: 'pathId',
    creatorId: 'creatorId',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    order: 'order',
    moduleId: 'moduleId',
    creatorId: 'creatorId',
    duration: 'duration',
    difficulty: 'difficulty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    pathId: 'pathId',
    moduleId: 'moduleId',
    lessonId: 'lessonId',
    passingScore: 'passingScore',
    timeLimit: 'timeLimit',
    retakeable: 'retakeable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    type: 'type',
    text: 'text',
    order: 'order',
    points: 'points',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionOptionScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    text: 'text',
    isCorrect: 'isCorrect',
    order: 'order'
  };

  export type QuestionOptionScalarFieldEnum = (typeof QuestionOptionScalarFieldEnum)[keyof typeof QuestionOptionScalarFieldEnum]


  export const QuestionAnswerScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    submissionId: 'submissionId',
    selectedOptionId: 'selectedOptionId',
    isCorrect: 'isCorrect'
  };

  export type QuestionAnswerScalarFieldEnum = (typeof QuestionAnswerScalarFieldEnum)[keyof typeof QuestionAnswerScalarFieldEnum]


  export const QuizSubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    score: 'score',
    maxScore: 'maxScore',
    percentage: 'percentage',
    passed: 'passed',
    timeSpent: 'timeSpent',
    submittedAt: 'submittedAt',
    updatedAt: 'updatedAt'
  };

  export type QuizSubmissionScalarFieldEnum = (typeof QuizSubmissionScalarFieldEnum)[keyof typeof QuizSubmissionScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pathId: 'pathId',
    completed: 'completed',
    percentage: 'percentage',
    enrolledAt: 'enrolledAt',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const ProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    completed: 'completed',
    views: 'views',
    firstViewedAt: 'firstViewedAt',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt'
  };

  export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    progress?: ProgressListRelationFilter
    submissions?: QuizSubmissionListRelationFilter
    createdPaths?: LearningPathListRelationFilter
    createdModules?: ModuleListRelationFilter
    createdLessons?: LessonListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    progress?: ProgressOrderByRelationAggregateInput
    submissions?: QuizSubmissionOrderByRelationAggregateInput
    createdPaths?: LearningPathOrderByRelationAggregateInput
    createdModules?: ModuleOrderByRelationAggregateInput
    createdLessons?: LessonOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    progress?: ProgressListRelationFilter
    submissions?: QuizSubmissionListRelationFilter
    createdPaths?: LearningPathListRelationFilter
    createdModules?: ModuleListRelationFilter
    createdLessons?: LessonListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    bio?: StringNullableFilter<"UserProfile"> | string | null
    avatar?: StringNullableFilter<"UserProfile"> | string | null
    points?: IntFilter<"UserProfile"> | number
    currentStreak?: IntFilter<"UserProfile"> | number
    totalLessonsCompleted?: IntFilter<"UserProfile"> | number
    totalQuizzesPassed?: IntFilter<"UserProfile"> | number
    badges?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalQuizzesPassed?: SortOrder
    badges?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    bio?: StringNullableFilter<"UserProfile"> | string | null
    avatar?: StringNullableFilter<"UserProfile"> | string | null
    points?: IntFilter<"UserProfile"> | number
    currentStreak?: IntFilter<"UserProfile"> | number
    totalLessonsCompleted?: IntFilter<"UserProfile"> | number
    totalQuizzesPassed?: IntFilter<"UserProfile"> | number
    badges?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalQuizzesPassed?: SortOrder
    badges?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    points?: IntWithAggregatesFilter<"UserProfile"> | number
    currentStreak?: IntWithAggregatesFilter<"UserProfile"> | number
    totalLessonsCompleted?: IntWithAggregatesFilter<"UserProfile"> | number
    totalQuizzesPassed?: IntWithAggregatesFilter<"UserProfile"> | number
    badges?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type LearningPathWhereInput = {
    AND?: LearningPathWhereInput | LearningPathWhereInput[]
    OR?: LearningPathWhereInput[]
    NOT?: LearningPathWhereInput | LearningPathWhereInput[]
    id?: StringFilter<"LearningPath"> | string
    title?: StringFilter<"LearningPath"> | string
    description?: StringFilter<"LearningPath"> | string
    difficulty?: EnumDifficultyLevelFilter<"LearningPath"> | $Enums.DifficultyLevel
    icon?: StringNullableFilter<"LearningPath"> | string | null
    creatorId?: StringFilter<"LearningPath"> | string
    isPublished?: BoolFilter<"LearningPath"> | boolean
    estimatedHours?: IntNullableFilter<"LearningPath"> | number | null
    createdAt?: DateTimeFilter<"LearningPath"> | Date | string
    updatedAt?: DateTimeFilter<"LearningPath"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    modules?: ModuleListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    quizzes?: QuizListRelationFilter
  }

  export type LearningPathOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    icon?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    modules?: ModuleOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type LearningPathWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningPathWhereInput | LearningPathWhereInput[]
    OR?: LearningPathWhereInput[]
    NOT?: LearningPathWhereInput | LearningPathWhereInput[]
    title?: StringFilter<"LearningPath"> | string
    description?: StringFilter<"LearningPath"> | string
    difficulty?: EnumDifficultyLevelFilter<"LearningPath"> | $Enums.DifficultyLevel
    icon?: StringNullableFilter<"LearningPath"> | string | null
    creatorId?: StringFilter<"LearningPath"> | string
    isPublished?: BoolFilter<"LearningPath"> | boolean
    estimatedHours?: IntNullableFilter<"LearningPath"> | number | null
    createdAt?: DateTimeFilter<"LearningPath"> | Date | string
    updatedAt?: DateTimeFilter<"LearningPath"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    modules?: ModuleListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    quizzes?: QuizListRelationFilter
  }, "id">

  export type LearningPathOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    icon?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningPathCountOrderByAggregateInput
    _avg?: LearningPathAvgOrderByAggregateInput
    _max?: LearningPathMaxOrderByAggregateInput
    _min?: LearningPathMinOrderByAggregateInput
    _sum?: LearningPathSumOrderByAggregateInput
  }

  export type LearningPathScalarWhereWithAggregatesInput = {
    AND?: LearningPathScalarWhereWithAggregatesInput | LearningPathScalarWhereWithAggregatesInput[]
    OR?: LearningPathScalarWhereWithAggregatesInput[]
    NOT?: LearningPathScalarWhereWithAggregatesInput | LearningPathScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningPath"> | string
    title?: StringWithAggregatesFilter<"LearningPath"> | string
    description?: StringWithAggregatesFilter<"LearningPath"> | string
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"LearningPath"> | $Enums.DifficultyLevel
    icon?: StringNullableWithAggregatesFilter<"LearningPath"> | string | null
    creatorId?: StringWithAggregatesFilter<"LearningPath"> | string
    isPublished?: BoolWithAggregatesFilter<"LearningPath"> | boolean
    estimatedHours?: IntNullableWithAggregatesFilter<"LearningPath"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LearningPath"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningPath"> | Date | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
    pathId?: StringFilter<"Module"> | string
    creatorId?: StringFilter<"Module"> | string
    duration?: IntNullableFilter<"Module"> | number | null
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    path?: XOR<LearningPathScalarRelationFilter, LearningPathWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    lessons?: LessonListRelationFilter
    quizzes?: QuizListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    pathId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    path?: LearningPathOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    title?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
    pathId?: StringFilter<"Module"> | string
    creatorId?: StringFilter<"Module"> | string
    duration?: IntNullableFilter<"Module"> | number | null
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    path?: XOR<LearningPathScalarRelationFilter, LearningPathWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    lessons?: LessonListRelationFilter
    quizzes?: QuizListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    pathId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    title?: StringWithAggregatesFilter<"Module"> | string
    description?: StringNullableWithAggregatesFilter<"Module"> | string | null
    order?: IntWithAggregatesFilter<"Module"> | number
    pathId?: StringWithAggregatesFilter<"Module"> | string
    creatorId?: StringWithAggregatesFilter<"Module"> | string
    duration?: IntNullableWithAggregatesFilter<"Module"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    moduleId?: StringFilter<"Lesson"> | string
    creatorId?: StringFilter<"Lesson"> | string
    duration?: IntNullableFilter<"Lesson"> | number | null
    difficulty?: EnumDifficultyLevelNullableFilter<"Lesson"> | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    progress?: ProgressListRelationFilter
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    module?: ModuleOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    progress?: ProgressOrderByRelationAggregateInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    moduleId?: StringFilter<"Lesson"> | string
    creatorId?: StringFilter<"Lesson"> | string
    duration?: IntNullableFilter<"Lesson"> | number | null
    difficulty?: EnumDifficultyLevelNullableFilter<"Lesson"> | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    progress?: ProgressListRelationFilter
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    content?: StringWithAggregatesFilter<"Lesson"> | string
    order?: IntWithAggregatesFilter<"Lesson"> | number
    moduleId?: StringWithAggregatesFilter<"Lesson"> | string
    creatorId?: StringWithAggregatesFilter<"Lesson"> | string
    duration?: IntNullableWithAggregatesFilter<"Lesson"> | number | null
    difficulty?: EnumDifficultyLevelNullableWithAggregatesFilter<"Lesson"> | $Enums.DifficultyLevel | null
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    pathId?: StringNullableFilter<"Quiz"> | string | null
    moduleId?: StringNullableFilter<"Quiz"> | string | null
    lessonId?: StringNullableFilter<"Quiz"> | string | null
    passingScore?: IntFilter<"Quiz"> | number
    timeLimit?: IntNullableFilter<"Quiz"> | number | null
    retakeable?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    path?: XOR<LearningPathNullableScalarRelationFilter, LearningPathWhereInput> | null
    module?: XOR<ModuleNullableScalarRelationFilter, ModuleWhereInput> | null
    lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    questions?: QuestionListRelationFilter
    submissions?: QuizSubmissionListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    pathId?: SortOrderInput | SortOrder
    moduleId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    passingScore?: SortOrder
    timeLimit?: SortOrderInput | SortOrder
    retakeable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    path?: LearningPathOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    submissions?: QuizSubmissionOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lessonId?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    pathId?: StringNullableFilter<"Quiz"> | string | null
    moduleId?: StringNullableFilter<"Quiz"> | string | null
    passingScore?: IntFilter<"Quiz"> | number
    timeLimit?: IntNullableFilter<"Quiz"> | number | null
    retakeable?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    path?: XOR<LearningPathNullableScalarRelationFilter, LearningPathWhereInput> | null
    module?: XOR<ModuleNullableScalarRelationFilter, ModuleWhereInput> | null
    lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    questions?: QuestionListRelationFilter
    submissions?: QuizSubmissionListRelationFilter
  }, "id" | "lessonId">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    pathId?: SortOrderInput | SortOrder
    moduleId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    passingScore?: SortOrder
    timeLimit?: SortOrderInput | SortOrder
    retakeable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringWithAggregatesFilter<"Quiz"> | string
    description?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    pathId?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    moduleId?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    lessonId?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    passingScore?: IntWithAggregatesFilter<"Quiz"> | number
    timeLimit?: IntNullableWithAggregatesFilter<"Quiz"> | number | null
    retakeable?: BoolWithAggregatesFilter<"Quiz"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    quizId?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    points?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: QuestionOptionListRelationFilter
    answers?: QuestionAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    options?: QuestionOptionOrderByRelationAggregateInput
    answers?: QuestionAnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    quizId?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    points?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: QuestionOptionListRelationFilter
    answers?: QuestionAnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    quizId?: StringWithAggregatesFilter<"Question"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType
    text?: StringWithAggregatesFilter<"Question"> | string
    order?: IntWithAggregatesFilter<"Question"> | number
    points?: IntWithAggregatesFilter<"Question"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type QuestionOptionWhereInput = {
    AND?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    OR?: QuestionOptionWhereInput[]
    NOT?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    id?: StringFilter<"QuestionOption"> | string
    questionId?: StringFilter<"QuestionOption"> | string
    text?: StringFilter<"QuestionOption"> | string
    isCorrect?: BoolFilter<"QuestionOption"> | boolean
    order?: IntFilter<"QuestionOption"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type QuestionOptionOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type QuestionOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId_order?: QuestionOptionQuestionIdOrderCompoundUniqueInput
    AND?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    OR?: QuestionOptionWhereInput[]
    NOT?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    questionId?: StringFilter<"QuestionOption"> | string
    text?: StringFilter<"QuestionOption"> | string
    isCorrect?: BoolFilter<"QuestionOption"> | boolean
    order?: IntFilter<"QuestionOption"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "questionId_order">

  export type QuestionOptionOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
    _count?: QuestionOptionCountOrderByAggregateInput
    _avg?: QuestionOptionAvgOrderByAggregateInput
    _max?: QuestionOptionMaxOrderByAggregateInput
    _min?: QuestionOptionMinOrderByAggregateInput
    _sum?: QuestionOptionSumOrderByAggregateInput
  }

  export type QuestionOptionScalarWhereWithAggregatesInput = {
    AND?: QuestionOptionScalarWhereWithAggregatesInput | QuestionOptionScalarWhereWithAggregatesInput[]
    OR?: QuestionOptionScalarWhereWithAggregatesInput[]
    NOT?: QuestionOptionScalarWhereWithAggregatesInput | QuestionOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionOption"> | string
    questionId?: StringWithAggregatesFilter<"QuestionOption"> | string
    text?: StringWithAggregatesFilter<"QuestionOption"> | string
    isCorrect?: BoolWithAggregatesFilter<"QuestionOption"> | boolean
    order?: IntWithAggregatesFilter<"QuestionOption"> | number
  }

  export type QuestionAnswerWhereInput = {
    AND?: QuestionAnswerWhereInput | QuestionAnswerWhereInput[]
    OR?: QuestionAnswerWhereInput[]
    NOT?: QuestionAnswerWhereInput | QuestionAnswerWhereInput[]
    id?: StringFilter<"QuestionAnswer"> | string
    questionId?: StringFilter<"QuestionAnswer"> | string
    submissionId?: StringFilter<"QuestionAnswer"> | string
    selectedOptionId?: StringNullableFilter<"QuestionAnswer"> | string | null
    isCorrect?: BoolFilter<"QuestionAnswer"> | boolean
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    submission?: XOR<QuizSubmissionScalarRelationFilter, QuizSubmissionWhereInput>
  }

  export type QuestionAnswerOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    submissionId?: SortOrder
    selectedOptionId?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    question?: QuestionOrderByWithRelationInput
    submission?: QuizSubmissionOrderByWithRelationInput
  }

  export type QuestionAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionAnswerWhereInput | QuestionAnswerWhereInput[]
    OR?: QuestionAnswerWhereInput[]
    NOT?: QuestionAnswerWhereInput | QuestionAnswerWhereInput[]
    questionId?: StringFilter<"QuestionAnswer"> | string
    submissionId?: StringFilter<"QuestionAnswer"> | string
    selectedOptionId?: StringNullableFilter<"QuestionAnswer"> | string | null
    isCorrect?: BoolFilter<"QuestionAnswer"> | boolean
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    submission?: XOR<QuizSubmissionScalarRelationFilter, QuizSubmissionWhereInput>
  }, "id">

  export type QuestionAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    submissionId?: SortOrder
    selectedOptionId?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    _count?: QuestionAnswerCountOrderByAggregateInput
    _max?: QuestionAnswerMaxOrderByAggregateInput
    _min?: QuestionAnswerMinOrderByAggregateInput
  }

  export type QuestionAnswerScalarWhereWithAggregatesInput = {
    AND?: QuestionAnswerScalarWhereWithAggregatesInput | QuestionAnswerScalarWhereWithAggregatesInput[]
    OR?: QuestionAnswerScalarWhereWithAggregatesInput[]
    NOT?: QuestionAnswerScalarWhereWithAggregatesInput | QuestionAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionAnswer"> | string
    questionId?: StringWithAggregatesFilter<"QuestionAnswer"> | string
    submissionId?: StringWithAggregatesFilter<"QuestionAnswer"> | string
    selectedOptionId?: StringNullableWithAggregatesFilter<"QuestionAnswer"> | string | null
    isCorrect?: BoolWithAggregatesFilter<"QuestionAnswer"> | boolean
  }

  export type QuizSubmissionWhereInput = {
    AND?: QuizSubmissionWhereInput | QuizSubmissionWhereInput[]
    OR?: QuizSubmissionWhereInput[]
    NOT?: QuizSubmissionWhereInput | QuizSubmissionWhereInput[]
    id?: StringFilter<"QuizSubmission"> | string
    userId?: StringFilter<"QuizSubmission"> | string
    quizId?: StringFilter<"QuizSubmission"> | string
    score?: IntNullableFilter<"QuizSubmission"> | number | null
    maxScore?: IntNullableFilter<"QuizSubmission"> | number | null
    percentage?: FloatNullableFilter<"QuizSubmission"> | number | null
    passed?: BoolFilter<"QuizSubmission"> | boolean
    timeSpent?: IntNullableFilter<"QuizSubmission"> | number | null
    submittedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    answers?: QuestionAnswerListRelationFilter
  }

  export type QuizSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrderInput | SortOrder
    maxScore?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    passed?: SortOrder
    timeSpent?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    answers?: QuestionAnswerOrderByRelationAggregateInput
  }

  export type QuizSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizSubmissionWhereInput | QuizSubmissionWhereInput[]
    OR?: QuizSubmissionWhereInput[]
    NOT?: QuizSubmissionWhereInput | QuizSubmissionWhereInput[]
    userId?: StringFilter<"QuizSubmission"> | string
    quizId?: StringFilter<"QuizSubmission"> | string
    score?: IntNullableFilter<"QuizSubmission"> | number | null
    maxScore?: IntNullableFilter<"QuizSubmission"> | number | null
    percentage?: FloatNullableFilter<"QuizSubmission"> | number | null
    passed?: BoolFilter<"QuizSubmission"> | boolean
    timeSpent?: IntNullableFilter<"QuizSubmission"> | number | null
    submittedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    answers?: QuestionAnswerListRelationFilter
  }, "id">

  export type QuizSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrderInput | SortOrder
    maxScore?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    passed?: SortOrder
    timeSpent?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizSubmissionCountOrderByAggregateInput
    _avg?: QuizSubmissionAvgOrderByAggregateInput
    _max?: QuizSubmissionMaxOrderByAggregateInput
    _min?: QuizSubmissionMinOrderByAggregateInput
    _sum?: QuizSubmissionSumOrderByAggregateInput
  }

  export type QuizSubmissionScalarWhereWithAggregatesInput = {
    AND?: QuizSubmissionScalarWhereWithAggregatesInput | QuizSubmissionScalarWhereWithAggregatesInput[]
    OR?: QuizSubmissionScalarWhereWithAggregatesInput[]
    NOT?: QuizSubmissionScalarWhereWithAggregatesInput | QuizSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizSubmission"> | string
    userId?: StringWithAggregatesFilter<"QuizSubmission"> | string
    quizId?: StringWithAggregatesFilter<"QuizSubmission"> | string
    score?: IntNullableWithAggregatesFilter<"QuizSubmission"> | number | null
    maxScore?: IntNullableWithAggregatesFilter<"QuizSubmission"> | number | null
    percentage?: FloatNullableWithAggregatesFilter<"QuizSubmission"> | number | null
    passed?: BoolWithAggregatesFilter<"QuizSubmission"> | boolean
    timeSpent?: IntNullableWithAggregatesFilter<"QuizSubmission"> | number | null
    submittedAt?: DateTimeWithAggregatesFilter<"QuizSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizSubmission"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    pathId?: StringFilter<"Enrollment"> | string
    completed?: BoolFilter<"Enrollment"> | boolean
    percentage?: FloatFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    completedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    path?: XOR<LearningPathScalarRelationFilter, LearningPathWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pathId?: SortOrder
    completed?: SortOrder
    percentage?: SortOrder
    enrolledAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    path?: LearningPathOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_pathId?: EnrollmentUserIdPathIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: StringFilter<"Enrollment"> | string
    pathId?: StringFilter<"Enrollment"> | string
    completed?: BoolFilter<"Enrollment"> | boolean
    percentage?: FloatFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    completedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    path?: XOR<LearningPathScalarRelationFilter, LearningPathWhereInput>
  }, "id" | "userId_pathId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pathId?: SortOrder
    completed?: SortOrder
    percentage?: SortOrder
    enrolledAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    userId?: StringWithAggregatesFilter<"Enrollment"> | string
    pathId?: StringWithAggregatesFilter<"Enrollment"> | string
    completed?: BoolWithAggregatesFilter<"Enrollment"> | boolean
    percentage?: FloatWithAggregatesFilter<"Enrollment"> | number
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Enrollment"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type ProgressWhereInput = {
    AND?: ProgressWhereInput | ProgressWhereInput[]
    OR?: ProgressWhereInput[]
    NOT?: ProgressWhereInput | ProgressWhereInput[]
    id?: StringFilter<"Progress"> | string
    userId?: StringFilter<"Progress"> | string
    lessonId?: StringFilter<"Progress"> | string
    completed?: BoolFilter<"Progress"> | boolean
    views?: IntFilter<"Progress"> | number
    firstViewedAt?: DateTimeFilter<"Progress"> | Date | string
    completedAt?: DateTimeNullableFilter<"Progress"> | Date | string | null
    updatedAt?: DateTimeFilter<"Progress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type ProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    views?: SortOrder
    firstViewedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type ProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_lessonId?: ProgressUserIdLessonIdCompoundUniqueInput
    AND?: ProgressWhereInput | ProgressWhereInput[]
    OR?: ProgressWhereInput[]
    NOT?: ProgressWhereInput | ProgressWhereInput[]
    userId?: StringFilter<"Progress"> | string
    lessonId?: StringFilter<"Progress"> | string
    completed?: BoolFilter<"Progress"> | boolean
    views?: IntFilter<"Progress"> | number
    firstViewedAt?: DateTimeFilter<"Progress"> | Date | string
    completedAt?: DateTimeNullableFilter<"Progress"> | Date | string | null
    updatedAt?: DateTimeFilter<"Progress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "userId_lessonId">

  export type ProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    views?: SortOrder
    firstViewedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ProgressCountOrderByAggregateInput
    _avg?: ProgressAvgOrderByAggregateInput
    _max?: ProgressMaxOrderByAggregateInput
    _min?: ProgressMinOrderByAggregateInput
    _sum?: ProgressSumOrderByAggregateInput
  }

  export type ProgressScalarWhereWithAggregatesInput = {
    AND?: ProgressScalarWhereWithAggregatesInput | ProgressScalarWhereWithAggregatesInput[]
    OR?: ProgressScalarWhereWithAggregatesInput[]
    NOT?: ProgressScalarWhereWithAggregatesInput | ProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Progress"> | string
    userId?: StringWithAggregatesFilter<"Progress"> | string
    lessonId?: StringWithAggregatesFilter<"Progress"> | string
    completed?: BoolWithAggregatesFilter<"Progress"> | boolean
    views?: IntWithAggregatesFilter<"Progress"> | number
    firstViewedAt?: DateTimeWithAggregatesFilter<"Progress"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Progress"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Progress"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathUncheckedCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleUncheckedCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUncheckedUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUncheckedUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    bio?: string | null
    avatar?: string | null
    points?: number
    currentStreak?: number
    totalLessonsCompleted?: number
    totalQuizzesPassed?: number
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bio?: string | null
    avatar?: string | null
    points?: number
    currentStreak?: number
    totalLessonsCompleted?: number
    totalQuizzesPassed?: number
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalQuizzesPassed?: IntFieldUpdateOperationsInput | number
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalQuizzesPassed?: IntFieldUpdateOperationsInput | number
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    bio?: string | null
    avatar?: string | null
    points?: number
    currentStreak?: number
    totalLessonsCompleted?: number
    totalQuizzesPassed?: number
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalQuizzesPassed?: IntFieldUpdateOperationsInput | number
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalQuizzesPassed?: IntFieldUpdateOperationsInput | number
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedPathsInput
    modules?: ModuleCreateNestedManyWithoutPathInput
    enrollments?: EnrollmentCreateNestedManyWithoutPathInput
    quizzes?: QuizCreateNestedManyWithoutPathInput
  }

  export type LearningPathUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    creatorId: string
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutPathInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutPathInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutPathInput
  }

  export type LearningPathUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedPathsNestedInput
    modules?: ModuleUpdateManyWithoutPathNestedInput
    enrollments?: EnrollmentUpdateManyWithoutPathNestedInput
    quizzes?: QuizUpdateManyWithoutPathNestedInput
  }

  export type LearningPathUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutPathNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutPathNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutPathNestedInput
  }

  export type LearningPathCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    creatorId: string
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningPathUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    path: LearningPathCreateNestedOneWithoutModulesInput
    creator: UserCreateNestedOneWithoutCreatedModulesInput
    lessons?: LessonCreateNestedManyWithoutModuleInput
    quizzes?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    pathId: string
    creatorId: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneRequiredWithoutModulesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedModulesNestedInput
    lessons?: LessonUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    pathId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    pathId: string
    creatorId: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    pathId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    title: string
    content: string
    order: number
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutLessonsInput
    creator: UserCreateNestedOneWithoutCreatedLessonsInput
    progress?: ProgressCreateNestedManyWithoutLessonInput
    quiz?: QuizCreateNestedOneWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    order: number
    moduleId: string
    creatorId: string
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: ProgressUncheckedCreateNestedManyWithoutLessonInput
    quiz?: QuizUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutLessonsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedLessonsNestedInput
    progress?: ProgressUpdateManyWithoutLessonNestedInput
    quiz?: QuizUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: ProgressUncheckedUpdateManyWithoutLessonNestedInput
    quiz?: QuizUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    title: string
    content: string
    order: number
    moduleId: string
    creatorId: string
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    path?: LearningPathCreateNestedOneWithoutQuizzesInput
    module?: ModuleCreateNestedOneWithoutQuizzesInput
    lesson?: LessonCreateNestedOneWithoutQuizInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    pathId?: string | null
    moduleId?: string | null
    lessonId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneWithoutQuizzesNestedInput
    module?: ModuleUpdateOneWithoutQuizzesNestedInput
    lesson?: LessonUpdateOneWithoutQuizNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    pathId?: string | null
    moduleId?: string | null
    lessonId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: QuestionOptionCreateNestedManyWithoutQuestionInput
    answers?: QuestionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    quizId: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: QuestionOptionUpdateManyWithoutQuestionNestedInput
    answers?: QuestionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    quizId: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionOptionCreateInput = {
    id?: string
    text: string
    isCorrect: boolean
    order: number
    question: QuestionCreateNestedOneWithoutOptionsInput
  }

  export type QuestionOptionUncheckedCreateInput = {
    id?: string
    questionId: string
    text: string
    isCorrect: boolean
    order: number
  }

  export type QuestionOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type QuestionOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionOptionCreateManyInput = {
    id?: string
    questionId: string
    text: string
    isCorrect: boolean
    order: number
  }

  export type QuestionOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionAnswerCreateInput = {
    id?: string
    selectedOptionId?: string | null
    isCorrect?: boolean
    question: QuestionCreateNestedOneWithoutAnswersInput
    submission: QuizSubmissionCreateNestedOneWithoutAnswersInput
  }

  export type QuestionAnswerUncheckedCreateInput = {
    id?: string
    questionId: string
    submissionId: string
    selectedOptionId?: string | null
    isCorrect?: boolean
  }

  export type QuestionAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    submission?: QuizSubmissionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type QuestionAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionAnswerCreateManyInput = {
    id?: string
    questionId: string
    submissionId: string
    selectedOptionId?: string | null
    isCorrect?: boolean
  }

  export type QuestionAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizSubmissionCreateInput = {
    id?: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    quiz: QuizCreateNestedOneWithoutSubmissionsInput
    answers?: QuestionAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    quizId: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    answers?: QuestionAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutSubmissionsNestedInput
    answers?: QuestionAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: QuestionAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionCreateManyInput = {
    id?: string
    userId: string
    quizId: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    id?: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
    path: LearningPathCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    userId: string
    pathId: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    path?: LearningPathUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pathId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    userId: string
    pathId: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pathId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressCreateInput = {
    id?: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
    lesson: LessonCreateNestedOneWithoutProgressInput
  }

  export type ProgressUncheckedCreateInput = {
    id?: string
    userId: string
    lessonId: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput
  }

  export type ProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressCreateManyInput = {
    id?: string
    userId: string
    lessonId: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type ProgressListRelationFilter = {
    every?: ProgressWhereInput
    some?: ProgressWhereInput
    none?: ProgressWhereInput
  }

  export type QuizSubmissionListRelationFilter = {
    every?: QuizSubmissionWhereInput
    some?: QuizSubmissionWhereInput
    none?: QuizSubmissionWhereInput
  }

  export type LearningPathListRelationFilter = {
    every?: LearningPathWhereInput
    some?: LearningPathWhereInput
    none?: LearningPathWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningPathOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalQuizzesPassed?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    points?: SortOrder
    currentStreak?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalQuizzesPassed?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalQuizzesPassed?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalQuizzesPassed?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    points?: SortOrder
    currentStreak?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalQuizzesPassed?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[]
    notIn?: $Enums.DifficultyLevel[]
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningPathCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    icon?: SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    estimatedHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningPathAvgOrderByAggregateInput = {
    estimatedHours?: SortOrder
  }

  export type LearningPathMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    icon?: SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    estimatedHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningPathMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    icon?: SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    estimatedHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningPathSumOrderByAggregateInput = {
    estimatedHours?: SortOrder
  }

  export type EnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[]
    notIn?: $Enums.DifficultyLevel[]
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LearningPathScalarRelationFilter = {
    is?: LearningPathWhereInput
    isNot?: LearningPathWhereInput
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    pathId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    order?: SortOrder
    duration?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    pathId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    pathId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    order?: SortOrder
    duration?: SortOrder
  }

  export type EnumDifficultyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.DifficultyLevel[] | null
    notIn?: $Enums.DifficultyLevel[] | null
    not?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel> | $Enums.DifficultyLevel | null
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type QuizNullableScalarRelationFilter = {
    is?: QuizWhereInput | null
    isNot?: QuizWhereInput | null
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    order?: SortOrder
    duration?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
    creatorId?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    order?: SortOrder
    duration?: SortOrder
  }

  export type EnumDifficultyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.DifficultyLevel[] | null
    notIn?: $Enums.DifficultyLevel[] | null
    not?: NestedEnumDifficultyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel>
  }

  export type LearningPathNullableScalarRelationFilter = {
    is?: LearningPathWhereInput | null
    isNot?: LearningPathWhereInput | null
  }

  export type ModuleNullableScalarRelationFilter = {
    is?: ModuleWhereInput | null
    isNot?: ModuleWhereInput | null
  }

  export type LessonNullableScalarRelationFilter = {
    is?: LessonWhereInput | null
    isNot?: LessonWhereInput | null
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pathId?: SortOrder
    moduleId?: SortOrder
    lessonId?: SortOrder
    passingScore?: SortOrder
    timeLimit?: SortOrder
    retakeable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    passingScore?: SortOrder
    timeLimit?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pathId?: SortOrder
    moduleId?: SortOrder
    lessonId?: SortOrder
    passingScore?: SortOrder
    timeLimit?: SortOrder
    retakeable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pathId?: SortOrder
    moduleId?: SortOrder
    lessonId?: SortOrder
    passingScore?: SortOrder
    timeLimit?: SortOrder
    retakeable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    passingScore?: SortOrder
    timeLimit?: SortOrder
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuestionOptionListRelationFilter = {
    every?: QuestionOptionWhereInput
    some?: QuestionOptionWhereInput
    none?: QuestionOptionWhereInput
  }

  export type QuestionAnswerListRelationFilter = {
    every?: QuestionAnswerWhereInput
    some?: QuestionAnswerWhereInput
    none?: QuestionAnswerWhereInput
  }

  export type QuestionOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    order?: SortOrder
    points?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    order?: SortOrder
    points?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type QuestionOptionQuestionIdOrderCompoundUniqueInput = {
    questionId: string
    order: number
  }

  export type QuestionOptionCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
  }

  export type QuestionOptionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
  }

  export type QuestionOptionMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
  }

  export type QuestionOptionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuizSubmissionScalarRelationFilter = {
    is?: QuizSubmissionWhereInput
    isNot?: QuizSubmissionWhereInput
  }

  export type QuestionAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    submissionId?: SortOrder
    selectedOptionId?: SortOrder
    isCorrect?: SortOrder
  }

  export type QuestionAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    submissionId?: SortOrder
    selectedOptionId?: SortOrder
    isCorrect?: SortOrder
  }

  export type QuestionAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    submissionId?: SortOrder
    selectedOptionId?: SortOrder
    isCorrect?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuizSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    passed?: SortOrder
    timeSpent?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    timeSpent?: SortOrder
  }

  export type QuizSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    passed?: SortOrder
    timeSpent?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    passed?: SortOrder
    timeSpent?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSubmissionSumOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    timeSpent?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnrollmentUserIdPathIdCompoundUniqueInput = {
    userId: string
    pathId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pathId?: SortOrder
    completed?: SortOrder
    percentage?: SortOrder
    enrolledAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pathId?: SortOrder
    completed?: SortOrder
    percentage?: SortOrder
    enrolledAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pathId?: SortOrder
    completed?: SortOrder
    percentage?: SortOrder
    enrolledAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type ProgressUserIdLessonIdCompoundUniqueInput = {
    userId: string
    lessonId: string
  }

  export type ProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    views?: SortOrder
    firstViewedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressAvgOrderByAggregateInput = {
    views?: SortOrder
  }

  export type ProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    views?: SortOrder
    firstViewedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    views?: SortOrder
    firstViewedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressSumOrderByAggregateInput = {
    views?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type QuizSubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizSubmissionCreateWithoutUserInput, QuizSubmissionUncheckedCreateWithoutUserInput> | QuizSubmissionCreateWithoutUserInput[] | QuizSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutUserInput | QuizSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: QuizSubmissionCreateManyUserInputEnvelope
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
  }

  export type LearningPathCreateNestedManyWithoutCreatorInput = {
    create?: XOR<LearningPathCreateWithoutCreatorInput, LearningPathUncheckedCreateWithoutCreatorInput> | LearningPathCreateWithoutCreatorInput[] | LearningPathUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LearningPathCreateOrConnectWithoutCreatorInput | LearningPathCreateOrConnectWithoutCreatorInput[]
    createMany?: LearningPathCreateManyCreatorInputEnvelope
    connect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
  }

  export type ModuleCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ModuleCreateWithoutCreatorInput, ModuleUncheckedCreateWithoutCreatorInput> | ModuleCreateWithoutCreatorInput[] | ModuleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCreatorInput | ModuleCreateOrConnectWithoutCreatorInput[]
    createMany?: ModuleCreateManyCreatorInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type LessonCreateNestedManyWithoutCreatorInput = {
    create?: XOR<LessonCreateWithoutCreatorInput, LessonUncheckedCreateWithoutCreatorInput> | LessonCreateWithoutCreatorInput[] | LessonUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCreatorInput | LessonCreateOrConnectWithoutCreatorInput[]
    createMany?: LessonCreateManyCreatorInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type QuizSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizSubmissionCreateWithoutUserInput, QuizSubmissionUncheckedCreateWithoutUserInput> | QuizSubmissionCreateWithoutUserInput[] | QuizSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutUserInput | QuizSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: QuizSubmissionCreateManyUserInputEnvelope
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
  }

  export type LearningPathUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<LearningPathCreateWithoutCreatorInput, LearningPathUncheckedCreateWithoutCreatorInput> | LearningPathCreateWithoutCreatorInput[] | LearningPathUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LearningPathCreateOrConnectWithoutCreatorInput | LearningPathCreateOrConnectWithoutCreatorInput[]
    createMany?: LearningPathCreateManyCreatorInputEnvelope
    connect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ModuleCreateWithoutCreatorInput, ModuleUncheckedCreateWithoutCreatorInput> | ModuleCreateWithoutCreatorInput[] | ModuleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCreatorInput | ModuleCreateOrConnectWithoutCreatorInput[]
    createMany?: ModuleCreateManyCreatorInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<LessonCreateWithoutCreatorInput, LessonUncheckedCreateWithoutCreatorInput> | LessonCreateWithoutCreatorInput[] | LessonUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCreatorInput | LessonCreateOrConnectWithoutCreatorInput[]
    createMany?: LessonCreateManyCreatorInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutUserInput | ProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutUserInput | ProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutUserInput | ProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type QuizSubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutUserInput, QuizSubmissionUncheckedCreateWithoutUserInput> | QuizSubmissionCreateWithoutUserInput[] | QuizSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutUserInput | QuizSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: QuizSubmissionUpsertWithWhereUniqueWithoutUserInput | QuizSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizSubmissionCreateManyUserInputEnvelope
    set?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    disconnect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    delete?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    update?: QuizSubmissionUpdateWithWhereUniqueWithoutUserInput | QuizSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizSubmissionUpdateManyWithWhereWithoutUserInput | QuizSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
  }

  export type LearningPathUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<LearningPathCreateWithoutCreatorInput, LearningPathUncheckedCreateWithoutCreatorInput> | LearningPathCreateWithoutCreatorInput[] | LearningPathUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LearningPathCreateOrConnectWithoutCreatorInput | LearningPathCreateOrConnectWithoutCreatorInput[]
    upsert?: LearningPathUpsertWithWhereUniqueWithoutCreatorInput | LearningPathUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: LearningPathCreateManyCreatorInputEnvelope
    set?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    disconnect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    delete?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    connect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    update?: LearningPathUpdateWithWhereUniqueWithoutCreatorInput | LearningPathUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: LearningPathUpdateManyWithWhereWithoutCreatorInput | LearningPathUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: LearningPathScalarWhereInput | LearningPathScalarWhereInput[]
  }

  export type ModuleUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ModuleCreateWithoutCreatorInput, ModuleUncheckedCreateWithoutCreatorInput> | ModuleCreateWithoutCreatorInput[] | ModuleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCreatorInput | ModuleCreateOrConnectWithoutCreatorInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCreatorInput | ModuleUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ModuleCreateManyCreatorInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCreatorInput | ModuleUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCreatorInput | ModuleUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type LessonUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<LessonCreateWithoutCreatorInput, LessonUncheckedCreateWithoutCreatorInput> | LessonCreateWithoutCreatorInput[] | LessonUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCreatorInput | LessonCreateOrConnectWithoutCreatorInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCreatorInput | LessonUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: LessonCreateManyCreatorInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCreatorInput | LessonUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCreatorInput | LessonUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutUserInput | ProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutUserInput | ProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutUserInput | ProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type QuizSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutUserInput, QuizSubmissionUncheckedCreateWithoutUserInput> | QuizSubmissionCreateWithoutUserInput[] | QuizSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutUserInput | QuizSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: QuizSubmissionUpsertWithWhereUniqueWithoutUserInput | QuizSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizSubmissionCreateManyUserInputEnvelope
    set?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    disconnect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    delete?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    update?: QuizSubmissionUpdateWithWhereUniqueWithoutUserInput | QuizSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizSubmissionUpdateManyWithWhereWithoutUserInput | QuizSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
  }

  export type LearningPathUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<LearningPathCreateWithoutCreatorInput, LearningPathUncheckedCreateWithoutCreatorInput> | LearningPathCreateWithoutCreatorInput[] | LearningPathUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LearningPathCreateOrConnectWithoutCreatorInput | LearningPathCreateOrConnectWithoutCreatorInput[]
    upsert?: LearningPathUpsertWithWhereUniqueWithoutCreatorInput | LearningPathUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: LearningPathCreateManyCreatorInputEnvelope
    set?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    disconnect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    delete?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    connect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    update?: LearningPathUpdateWithWhereUniqueWithoutCreatorInput | LearningPathUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: LearningPathUpdateManyWithWhereWithoutCreatorInput | LearningPathUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: LearningPathScalarWhereInput | LearningPathScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ModuleCreateWithoutCreatorInput, ModuleUncheckedCreateWithoutCreatorInput> | ModuleCreateWithoutCreatorInput[] | ModuleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCreatorInput | ModuleCreateOrConnectWithoutCreatorInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCreatorInput | ModuleUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ModuleCreateManyCreatorInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCreatorInput | ModuleUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCreatorInput | ModuleUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<LessonCreateWithoutCreatorInput, LessonUncheckedCreateWithoutCreatorInput> | LessonCreateWithoutCreatorInput[] | LessonUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCreatorInput | LessonCreateOrConnectWithoutCreatorInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCreatorInput | LessonUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: LessonCreateManyCreatorInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCreatorInput | LessonUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCreatorInput | LessonUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutCreatedPathsInput = {
    create?: XOR<UserCreateWithoutCreatedPathsInput, UserUncheckedCreateWithoutCreatedPathsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPathsInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedManyWithoutPathInput = {
    create?: XOR<ModuleCreateWithoutPathInput, ModuleUncheckedCreateWithoutPathInput> | ModuleCreateWithoutPathInput[] | ModuleUncheckedCreateWithoutPathInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutPathInput | ModuleCreateOrConnectWithoutPathInput[]
    createMany?: ModuleCreateManyPathInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutPathInput = {
    create?: XOR<EnrollmentCreateWithoutPathInput, EnrollmentUncheckedCreateWithoutPathInput> | EnrollmentCreateWithoutPathInput[] | EnrollmentUncheckedCreateWithoutPathInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPathInput | EnrollmentCreateOrConnectWithoutPathInput[]
    createMany?: EnrollmentCreateManyPathInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutPathInput = {
    create?: XOR<QuizCreateWithoutPathInput, QuizUncheckedCreateWithoutPathInput> | QuizCreateWithoutPathInput[] | QuizUncheckedCreateWithoutPathInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutPathInput | QuizCreateOrConnectWithoutPathInput[]
    createMany?: QuizCreateManyPathInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutPathInput = {
    create?: XOR<ModuleCreateWithoutPathInput, ModuleUncheckedCreateWithoutPathInput> | ModuleCreateWithoutPathInput[] | ModuleUncheckedCreateWithoutPathInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutPathInput | ModuleCreateOrConnectWithoutPathInput[]
    createMany?: ModuleCreateManyPathInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutPathInput = {
    create?: XOR<EnrollmentCreateWithoutPathInput, EnrollmentUncheckedCreateWithoutPathInput> | EnrollmentCreateWithoutPathInput[] | EnrollmentUncheckedCreateWithoutPathInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPathInput | EnrollmentCreateOrConnectWithoutPathInput[]
    createMany?: EnrollmentCreateManyPathInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutPathInput = {
    create?: XOR<QuizCreateWithoutPathInput, QuizUncheckedCreateWithoutPathInput> | QuizCreateWithoutPathInput[] | QuizUncheckedCreateWithoutPathInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutPathInput | QuizCreateOrConnectWithoutPathInput[]
    createMany?: QuizCreateManyPathInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type EnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreatedPathsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedPathsInput, UserUncheckedCreateWithoutCreatedPathsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPathsInput
    upsert?: UserUpsertWithoutCreatedPathsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedPathsInput, UserUpdateWithoutCreatedPathsInput>, UserUncheckedUpdateWithoutCreatedPathsInput>
  }

  export type ModuleUpdateManyWithoutPathNestedInput = {
    create?: XOR<ModuleCreateWithoutPathInput, ModuleUncheckedCreateWithoutPathInput> | ModuleCreateWithoutPathInput[] | ModuleUncheckedCreateWithoutPathInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutPathInput | ModuleCreateOrConnectWithoutPathInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutPathInput | ModuleUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: ModuleCreateManyPathInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutPathInput | ModuleUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutPathInput | ModuleUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutPathNestedInput = {
    create?: XOR<EnrollmentCreateWithoutPathInput, EnrollmentUncheckedCreateWithoutPathInput> | EnrollmentCreateWithoutPathInput[] | EnrollmentUncheckedCreateWithoutPathInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPathInput | EnrollmentCreateOrConnectWithoutPathInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutPathInput | EnrollmentUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: EnrollmentCreateManyPathInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutPathInput | EnrollmentUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutPathInput | EnrollmentUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutPathNestedInput = {
    create?: XOR<QuizCreateWithoutPathInput, QuizUncheckedCreateWithoutPathInput> | QuizCreateWithoutPathInput[] | QuizUncheckedCreateWithoutPathInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutPathInput | QuizCreateOrConnectWithoutPathInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutPathInput | QuizUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: QuizCreateManyPathInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutPathInput | QuizUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutPathInput | QuizUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutPathNestedInput = {
    create?: XOR<ModuleCreateWithoutPathInput, ModuleUncheckedCreateWithoutPathInput> | ModuleCreateWithoutPathInput[] | ModuleUncheckedCreateWithoutPathInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutPathInput | ModuleCreateOrConnectWithoutPathInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutPathInput | ModuleUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: ModuleCreateManyPathInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutPathInput | ModuleUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutPathInput | ModuleUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutPathNestedInput = {
    create?: XOR<EnrollmentCreateWithoutPathInput, EnrollmentUncheckedCreateWithoutPathInput> | EnrollmentCreateWithoutPathInput[] | EnrollmentUncheckedCreateWithoutPathInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPathInput | EnrollmentCreateOrConnectWithoutPathInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutPathInput | EnrollmentUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: EnrollmentCreateManyPathInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutPathInput | EnrollmentUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutPathInput | EnrollmentUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutPathNestedInput = {
    create?: XOR<QuizCreateWithoutPathInput, QuizUncheckedCreateWithoutPathInput> | QuizCreateWithoutPathInput[] | QuizUncheckedCreateWithoutPathInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutPathInput | QuizCreateOrConnectWithoutPathInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutPathInput | QuizUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: QuizCreateManyPathInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutPathInput | QuizUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutPathInput | QuizUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type LearningPathCreateNestedOneWithoutModulesInput = {
    create?: XOR<LearningPathCreateWithoutModulesInput, LearningPathUncheckedCreateWithoutModulesInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutModulesInput
    connect?: LearningPathWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedModulesInput = {
    create?: XOR<UserCreateWithoutCreatedModulesInput, UserUncheckedCreateWithoutCreatedModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedModulesInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutModuleInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutModuleInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type LearningPathUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<LearningPathCreateWithoutModulesInput, LearningPathUncheckedCreateWithoutModulesInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutModulesInput
    upsert?: LearningPathUpsertWithoutModulesInput
    connect?: LearningPathWhereUniqueInput
    update?: XOR<XOR<LearningPathUpdateToOneWithWhereWithoutModulesInput, LearningPathUpdateWithoutModulesInput>, LearningPathUncheckedUpdateWithoutModulesInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedModulesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedModulesInput, UserUncheckedCreateWithoutCreatedModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedModulesInput
    upsert?: UserUpsertWithoutCreatedModulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedModulesInput, UserUpdateWithoutCreatedModulesInput>, UserUncheckedUpdateWithoutCreatedModulesInput>
  }

  export type LessonUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutModuleInput | LessonUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutModuleInput | LessonUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutModuleInput | LessonUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutModuleNestedInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutModuleInput | QuizUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutModuleInput | QuizUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutModuleInput | QuizUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutModuleInput | LessonUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutModuleInput | LessonUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutModuleInput | LessonUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutModuleInput | QuizUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutModuleInput | QuizUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutModuleInput | QuizUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutLessonsInput = {
    create?: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLessonsInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedLessonsInput = {
    create?: XOR<UserCreateWithoutCreatedLessonsInput, UserUncheckedCreateWithoutCreatedLessonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLessonsInput
    connect?: UserWhereUniqueInput
  }

  export type ProgressCreateNestedManyWithoutLessonInput = {
    create?: XOR<ProgressCreateWithoutLessonInput, ProgressUncheckedCreateWithoutLessonInput> | ProgressCreateWithoutLessonInput[] | ProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutLessonInput | ProgressCreateOrConnectWithoutLessonInput[]
    createMany?: ProgressCreateManyLessonInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type QuizCreateNestedOneWithoutLessonInput = {
    create?: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLessonInput
    connect?: QuizWhereUniqueInput
  }

  export type ProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<ProgressCreateWithoutLessonInput, ProgressUncheckedCreateWithoutLessonInput> | ProgressCreateWithoutLessonInput[] | ProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutLessonInput | ProgressCreateOrConnectWithoutLessonInput[]
    createMany?: ProgressCreateManyLessonInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedOneWithoutLessonInput = {
    create?: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLessonInput
    connect?: QuizWhereUniqueInput
  }

  export type NullableEnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel | null
  }

  export type ModuleUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLessonsInput
    upsert?: ModuleUpsertWithoutLessonsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutLessonsInput, ModuleUpdateWithoutLessonsInput>, ModuleUncheckedUpdateWithoutLessonsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedLessonsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedLessonsInput, UserUncheckedCreateWithoutCreatedLessonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLessonsInput
    upsert?: UserUpsertWithoutCreatedLessonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedLessonsInput, UserUpdateWithoutCreatedLessonsInput>, UserUncheckedUpdateWithoutCreatedLessonsInput>
  }

  export type ProgressUpdateManyWithoutLessonNestedInput = {
    create?: XOR<ProgressCreateWithoutLessonInput, ProgressUncheckedCreateWithoutLessonInput> | ProgressCreateWithoutLessonInput[] | ProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutLessonInput | ProgressCreateOrConnectWithoutLessonInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutLessonInput | ProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: ProgressCreateManyLessonInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutLessonInput | ProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutLessonInput | ProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type QuizUpdateOneWithoutLessonNestedInput = {
    create?: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLessonInput
    upsert?: QuizUpsertWithoutLessonInput
    disconnect?: QuizWhereInput | boolean
    delete?: QuizWhereInput | boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutLessonInput, QuizUpdateWithoutLessonInput>, QuizUncheckedUpdateWithoutLessonInput>
  }

  export type ProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<ProgressCreateWithoutLessonInput, ProgressUncheckedCreateWithoutLessonInput> | ProgressCreateWithoutLessonInput[] | ProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutLessonInput | ProgressCreateOrConnectWithoutLessonInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutLessonInput | ProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: ProgressCreateManyLessonInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutLessonInput | ProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutLessonInput | ProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type QuizUncheckedUpdateOneWithoutLessonNestedInput = {
    create?: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLessonInput
    upsert?: QuizUpsertWithoutLessonInput
    disconnect?: QuizWhereInput | boolean
    delete?: QuizWhereInput | boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutLessonInput, QuizUpdateWithoutLessonInput>, QuizUncheckedUpdateWithoutLessonInput>
  }

  export type LearningPathCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<LearningPathCreateWithoutQuizzesInput, LearningPathUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutQuizzesInput
    connect?: LearningPathWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<ModuleCreateWithoutQuizzesInput, ModuleUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutQuizzesInput
    connect?: ModuleWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutQuizInput = {
    create?: XOR<LessonCreateWithoutQuizInput, LessonUncheckedCreateWithoutQuizInput>
    connectOrCreate?: LessonCreateOrConnectWithoutQuizInput
    connect?: LessonWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizSubmissionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput> | QuizSubmissionCreateWithoutQuizInput[] | QuizSubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutQuizInput | QuizSubmissionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizSubmissionCreateManyQuizInputEnvelope
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput> | QuizSubmissionCreateWithoutQuizInput[] | QuizSubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutQuizInput | QuizSubmissionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizSubmissionCreateManyQuizInputEnvelope
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
  }

  export type LearningPathUpdateOneWithoutQuizzesNestedInput = {
    create?: XOR<LearningPathCreateWithoutQuizzesInput, LearningPathUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutQuizzesInput
    upsert?: LearningPathUpsertWithoutQuizzesInput
    disconnect?: LearningPathWhereInput | boolean
    delete?: LearningPathWhereInput | boolean
    connect?: LearningPathWhereUniqueInput
    update?: XOR<XOR<LearningPathUpdateToOneWithWhereWithoutQuizzesInput, LearningPathUpdateWithoutQuizzesInput>, LearningPathUncheckedUpdateWithoutQuizzesInput>
  }

  export type ModuleUpdateOneWithoutQuizzesNestedInput = {
    create?: XOR<ModuleCreateWithoutQuizzesInput, ModuleUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutQuizzesInput
    upsert?: ModuleUpsertWithoutQuizzesInput
    disconnect?: ModuleWhereInput | boolean
    delete?: ModuleWhereInput | boolean
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutQuizzesInput, ModuleUpdateWithoutQuizzesInput>, ModuleUncheckedUpdateWithoutQuizzesInput>
  }

  export type LessonUpdateOneWithoutQuizNestedInput = {
    create?: XOR<LessonCreateWithoutQuizInput, LessonUncheckedCreateWithoutQuizInput>
    connectOrCreate?: LessonCreateOrConnectWithoutQuizInput
    upsert?: LessonUpsertWithoutQuizInput
    disconnect?: LessonWhereInput | boolean
    delete?: LessonWhereInput | boolean
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutQuizInput, LessonUpdateWithoutQuizInput>, LessonUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizSubmissionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput> | QuizSubmissionCreateWithoutQuizInput[] | QuizSubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutQuizInput | QuizSubmissionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput | QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizSubmissionCreateManyQuizInputEnvelope
    set?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    disconnect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    delete?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    update?: QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput | QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizSubmissionUpdateManyWithWhereWithoutQuizInput | QuizSubmissionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput> | QuizSubmissionCreateWithoutQuizInput[] | QuizSubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutQuizInput | QuizSubmissionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput | QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizSubmissionCreateManyQuizInputEnvelope
    set?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    disconnect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    delete?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    update?: QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput | QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizSubmissionUpdateManyWithWhereWithoutQuizInput | QuizSubmissionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type QuestionOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
  }

  export type QuestionAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput> | QuestionAnswerCreateWithoutQuestionInput[] | QuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutQuestionInput | QuestionAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
  }

  export type QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
  }

  export type QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput> | QuestionAnswerCreateWithoutQuestionInput[] | QuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutQuestionInput | QuestionAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput | QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    set?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    disconnect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    delete?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    update?: QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput | QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionOptionUpdateManyWithWhereWithoutQuestionInput | QuestionOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
  }

  export type QuestionAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput> | QuestionAnswerCreateWithoutQuestionInput[] | QuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutQuestionInput | QuestionAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput | QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope
    set?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    disconnect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    delete?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    update?: QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput | QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionAnswerUpdateManyWithWhereWithoutQuestionInput | QuestionAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
  }

  export type QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput | QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    set?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    disconnect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    delete?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    update?: QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput | QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionOptionUpdateManyWithWhereWithoutQuestionInput | QuestionOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
  }

  export type QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput> | QuestionAnswerCreateWithoutQuestionInput[] | QuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutQuestionInput | QuestionAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput | QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope
    set?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    disconnect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    delete?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    update?: QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput | QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionAnswerUpdateManyWithWhereWithoutQuestionInput | QuestionAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuestionUpsertWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutOptionsInput, QuestionUpdateWithoutOptionsInput>, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuizSubmissionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuizSubmissionCreateWithoutAnswersInput, QuizSubmissionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutAnswersInput
    connect?: QuizSubmissionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuizSubmissionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutAnswersInput, QuizSubmissionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutAnswersInput
    upsert?: QuizSubmissionUpsertWithoutAnswersInput
    connect?: QuizSubmissionWhereUniqueInput
    update?: XOR<XOR<QuizSubmissionUpdateToOneWithWhereWithoutAnswersInput, QuizSubmissionUpdateWithoutAnswersInput>, QuizSubmissionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSubmissionsInput
    connect?: QuizWhereUniqueInput
  }

  export type QuestionAnswerCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<QuestionAnswerCreateWithoutSubmissionInput, QuestionAnswerUncheckedCreateWithoutSubmissionInput> | QuestionAnswerCreateWithoutSubmissionInput[] | QuestionAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutSubmissionInput | QuestionAnswerCreateOrConnectWithoutSubmissionInput[]
    createMany?: QuestionAnswerCreateManySubmissionInputEnvelope
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
  }

  export type QuestionAnswerUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<QuestionAnswerCreateWithoutSubmissionInput, QuestionAnswerUncheckedCreateWithoutSubmissionInput> | QuestionAnswerCreateWithoutSubmissionInput[] | QuestionAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutSubmissionInput | QuestionAnswerCreateOrConnectWithoutSubmissionInput[]
    createMany?: QuestionAnswerCreateManySubmissionInputEnvelope
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type QuizUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSubmissionsInput
    upsert?: QuizUpsertWithoutSubmissionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutSubmissionsInput, QuizUpdateWithoutSubmissionsInput>, QuizUncheckedUpdateWithoutSubmissionsInput>
  }

  export type QuestionAnswerUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutSubmissionInput, QuestionAnswerUncheckedCreateWithoutSubmissionInput> | QuestionAnswerCreateWithoutSubmissionInput[] | QuestionAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutSubmissionInput | QuestionAnswerCreateOrConnectWithoutSubmissionInput[]
    upsert?: QuestionAnswerUpsertWithWhereUniqueWithoutSubmissionInput | QuestionAnswerUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: QuestionAnswerCreateManySubmissionInputEnvelope
    set?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    disconnect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    delete?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    update?: QuestionAnswerUpdateWithWhereUniqueWithoutSubmissionInput | QuestionAnswerUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: QuestionAnswerUpdateManyWithWhereWithoutSubmissionInput | QuestionAnswerUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
  }

  export type QuestionAnswerUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutSubmissionInput, QuestionAnswerUncheckedCreateWithoutSubmissionInput> | QuestionAnswerCreateWithoutSubmissionInput[] | QuestionAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutSubmissionInput | QuestionAnswerCreateOrConnectWithoutSubmissionInput[]
    upsert?: QuestionAnswerUpsertWithWhereUniqueWithoutSubmissionInput | QuestionAnswerUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: QuestionAnswerCreateManySubmissionInputEnvelope
    set?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    disconnect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    delete?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    update?: QuestionAnswerUpdateWithWhereUniqueWithoutSubmissionInput | QuestionAnswerUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: QuestionAnswerUpdateManyWithWhereWithoutSubmissionInput | QuestionAnswerUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type LearningPathCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<LearningPathCreateWithoutEnrollmentsInput, LearningPathUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutEnrollmentsInput
    connect?: LearningPathWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type LearningPathUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<LearningPathCreateWithoutEnrollmentsInput, LearningPathUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutEnrollmentsInput
    upsert?: LearningPathUpsertWithoutEnrollmentsInput
    connect?: LearningPathWhereUniqueInput
    update?: XOR<XOR<LearningPathUpdateToOneWithWhereWithoutEnrollmentsInput, LearningPathUpdateWithoutEnrollmentsInput>, LearningPathUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutProgressInput = {
    create?: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput
    connect?: LessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput
    upsert?: LessonUpsertWithoutProgressInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutProgressInput, LessonUpdateWithoutProgressInput>, LessonUncheckedUpdateWithoutProgressInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[]
    notIn?: $Enums.DifficultyLevel[]
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[]
    notIn?: $Enums.DifficultyLevel[]
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDifficultyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.DifficultyLevel[] | null
    notIn?: $Enums.DifficultyLevel[] | null
    not?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel> | $Enums.DifficultyLevel | null
  }

  export type NestedEnumDifficultyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.DifficultyLevel[] | null
    notIn?: $Enums.DifficultyLevel[] | null
    not?: NestedEnumDifficultyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    avatar?: string | null
    points?: number
    currentStreak?: number
    totalLessonsCompleted?: number
    totalQuizzesPassed?: number
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    avatar?: string | null
    points?: number
    currentStreak?: number
    totalLessonsCompleted?: number
    totalQuizzesPassed?: number
    badges?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateWithoutUserInput = {
    id?: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    path: LearningPathCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: string
    pathId: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
  }

  export type ProgressCreateWithoutUserInput = {
    id?: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutProgressInput
  }

  export type ProgressUncheckedCreateWithoutUserInput = {
    id?: string
    lessonId: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ProgressCreateOrConnectWithoutUserInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput>
  }

  export type ProgressCreateManyUserInputEnvelope = {
    data: ProgressCreateManyUserInput | ProgressCreateManyUserInput[]
  }

  export type QuizSubmissionCreateWithoutUserInput = {
    id?: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutSubmissionsInput
    answers?: QuestionAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    quizId: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    answers?: QuestionAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionCreateOrConnectWithoutUserInput = {
    where: QuizSubmissionWhereUniqueInput
    create: XOR<QuizSubmissionCreateWithoutUserInput, QuizSubmissionUncheckedCreateWithoutUserInput>
  }

  export type QuizSubmissionCreateManyUserInputEnvelope = {
    data: QuizSubmissionCreateManyUserInput | QuizSubmissionCreateManyUserInput[]
  }

  export type LearningPathCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleCreateNestedManyWithoutPathInput
    enrollments?: EnrollmentCreateNestedManyWithoutPathInput
    quizzes?: QuizCreateNestedManyWithoutPathInput
  }

  export type LearningPathUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutPathInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutPathInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutPathInput
  }

  export type LearningPathCreateOrConnectWithoutCreatorInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutCreatorInput, LearningPathUncheckedCreateWithoutCreatorInput>
  }

  export type LearningPathCreateManyCreatorInputEnvelope = {
    data: LearningPathCreateManyCreatorInput | LearningPathCreateManyCreatorInput[]
  }

  export type ModuleCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    path: LearningPathCreateNestedOneWithoutModulesInput
    lessons?: LessonCreateNestedManyWithoutModuleInput
    quizzes?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    pathId: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutCreatorInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutCreatorInput, ModuleUncheckedCreateWithoutCreatorInput>
  }

  export type ModuleCreateManyCreatorInputEnvelope = {
    data: ModuleCreateManyCreatorInput | ModuleCreateManyCreatorInput[]
  }

  export type LessonCreateWithoutCreatorInput = {
    id?: string
    title: string
    content: string
    order: number
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutLessonsInput
    progress?: ProgressCreateNestedManyWithoutLessonInput
    quiz?: QuizCreateNestedOneWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    content: string
    order: number
    moduleId: string
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: ProgressUncheckedCreateNestedManyWithoutLessonInput
    quiz?: QuizUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCreatorInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCreatorInput, LessonUncheckedCreateWithoutCreatorInput>
  }

  export type LessonCreateManyCreatorInputEnvelope = {
    data: LessonCreateManyCreatorInput | LessonCreateManyCreatorInput[]
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalQuizzesPassed?: IntFieldUpdateOperationsInput | number
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalQuizzesPassed?: IntFieldUpdateOperationsInput | number
    badges?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    pathId?: StringFilter<"Enrollment"> | string
    completed?: BoolFilter<"Enrollment"> | boolean
    percentage?: FloatFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    completedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type ProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutUserInput, ProgressUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutUserInput, ProgressUncheckedUpdateWithoutUserInput>
  }

  export type ProgressUpdateManyWithWhereWithoutUserInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressScalarWhereInput = {
    AND?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
    OR?: ProgressScalarWhereInput[]
    NOT?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
    id?: StringFilter<"Progress"> | string
    userId?: StringFilter<"Progress"> | string
    lessonId?: StringFilter<"Progress"> | string
    completed?: BoolFilter<"Progress"> | boolean
    views?: IntFilter<"Progress"> | number
    firstViewedAt?: DateTimeFilter<"Progress"> | Date | string
    completedAt?: DateTimeNullableFilter<"Progress"> | Date | string | null
    updatedAt?: DateTimeFilter<"Progress"> | Date | string
  }

  export type QuizSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizSubmissionWhereUniqueInput
    update: XOR<QuizSubmissionUpdateWithoutUserInput, QuizSubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<QuizSubmissionCreateWithoutUserInput, QuizSubmissionUncheckedCreateWithoutUserInput>
  }

  export type QuizSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizSubmissionWhereUniqueInput
    data: XOR<QuizSubmissionUpdateWithoutUserInput, QuizSubmissionUncheckedUpdateWithoutUserInput>
  }

  export type QuizSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: QuizSubmissionScalarWhereInput
    data: XOR<QuizSubmissionUpdateManyMutationInput, QuizSubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizSubmissionScalarWhereInput = {
    AND?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
    OR?: QuizSubmissionScalarWhereInput[]
    NOT?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
    id?: StringFilter<"QuizSubmission"> | string
    userId?: StringFilter<"QuizSubmission"> | string
    quizId?: StringFilter<"QuizSubmission"> | string
    score?: IntNullableFilter<"QuizSubmission"> | number | null
    maxScore?: IntNullableFilter<"QuizSubmission"> | number | null
    percentage?: FloatNullableFilter<"QuizSubmission"> | number | null
    passed?: BoolFilter<"QuizSubmission"> | boolean
    timeSpent?: IntNullableFilter<"QuizSubmission"> | number | null
    submittedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
  }

  export type LearningPathUpsertWithWhereUniqueWithoutCreatorInput = {
    where: LearningPathWhereUniqueInput
    update: XOR<LearningPathUpdateWithoutCreatorInput, LearningPathUncheckedUpdateWithoutCreatorInput>
    create: XOR<LearningPathCreateWithoutCreatorInput, LearningPathUncheckedCreateWithoutCreatorInput>
  }

  export type LearningPathUpdateWithWhereUniqueWithoutCreatorInput = {
    where: LearningPathWhereUniqueInput
    data: XOR<LearningPathUpdateWithoutCreatorInput, LearningPathUncheckedUpdateWithoutCreatorInput>
  }

  export type LearningPathUpdateManyWithWhereWithoutCreatorInput = {
    where: LearningPathScalarWhereInput
    data: XOR<LearningPathUpdateManyMutationInput, LearningPathUncheckedUpdateManyWithoutCreatorInput>
  }

  export type LearningPathScalarWhereInput = {
    AND?: LearningPathScalarWhereInput | LearningPathScalarWhereInput[]
    OR?: LearningPathScalarWhereInput[]
    NOT?: LearningPathScalarWhereInput | LearningPathScalarWhereInput[]
    id?: StringFilter<"LearningPath"> | string
    title?: StringFilter<"LearningPath"> | string
    description?: StringFilter<"LearningPath"> | string
    difficulty?: EnumDifficultyLevelFilter<"LearningPath"> | $Enums.DifficultyLevel
    icon?: StringNullableFilter<"LearningPath"> | string | null
    creatorId?: StringFilter<"LearningPath"> | string
    isPublished?: BoolFilter<"LearningPath"> | boolean
    estimatedHours?: IntNullableFilter<"LearningPath"> | number | null
    createdAt?: DateTimeFilter<"LearningPath"> | Date | string
    updatedAt?: DateTimeFilter<"LearningPath"> | Date | string
  }

  export type ModuleUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutCreatorInput, ModuleUncheckedUpdateWithoutCreatorInput>
    create: XOR<ModuleCreateWithoutCreatorInput, ModuleUncheckedCreateWithoutCreatorInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutCreatorInput, ModuleUncheckedUpdateWithoutCreatorInput>
  }

  export type ModuleUpdateManyWithWhereWithoutCreatorInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
    pathId?: StringFilter<"Module"> | string
    creatorId?: StringFilter<"Module"> | string
    duration?: IntNullableFilter<"Module"> | number | null
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
  }

  export type LessonUpsertWithWhereUniqueWithoutCreatorInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCreatorInput, LessonUncheckedUpdateWithoutCreatorInput>
    create: XOR<LessonCreateWithoutCreatorInput, LessonUncheckedCreateWithoutCreatorInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCreatorInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCreatorInput, LessonUncheckedUpdateWithoutCreatorInput>
  }

  export type LessonUpdateManyWithWhereWithoutCreatorInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCreatorInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    moduleId?: StringFilter<"Lesson"> | string
    creatorId?: StringFilter<"Lesson"> | string
    duration?: IntNullableFilter<"Lesson"> | number | null
    difficulty?: EnumDifficultyLevelNullableFilter<"Lesson"> | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathUncheckedCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleUncheckedCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUncheckedUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUncheckedUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutCreatedPathsInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionCreateNestedManyWithoutUserInput
    createdModules?: ModuleCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedPathsInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutUserInput
    createdModules?: ModuleUncheckedCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedPathsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedPathsInput, UserUncheckedCreateWithoutCreatedPathsInput>
  }

  export type ModuleCreateWithoutPathInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedModulesInput
    lessons?: LessonCreateNestedManyWithoutModuleInput
    quizzes?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutPathInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    creatorId: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutPathInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutPathInput, ModuleUncheckedCreateWithoutPathInput>
  }

  export type ModuleCreateManyPathInputEnvelope = {
    data: ModuleCreateManyPathInput | ModuleCreateManyPathInput[]
  }

  export type EnrollmentCreateWithoutPathInput = {
    id?: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutPathInput = {
    id?: string
    userId: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutPathInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutPathInput, EnrollmentUncheckedCreateWithoutPathInput>
  }

  export type EnrollmentCreateManyPathInputEnvelope = {
    data: EnrollmentCreateManyPathInput | EnrollmentCreateManyPathInput[]
  }

  export type QuizCreateWithoutPathInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    module?: ModuleCreateNestedOneWithoutQuizzesInput
    lesson?: LessonCreateNestedOneWithoutQuizInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutPathInput = {
    id?: string
    title: string
    description?: string | null
    moduleId?: string | null
    lessonId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutPathInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutPathInput, QuizUncheckedCreateWithoutPathInput>
  }

  export type QuizCreateManyPathInputEnvelope = {
    data: QuizCreateManyPathInput | QuizCreateManyPathInput[]
  }

  export type UserUpsertWithoutCreatedPathsInput = {
    update: XOR<UserUpdateWithoutCreatedPathsInput, UserUncheckedUpdateWithoutCreatedPathsInput>
    create: XOR<UserCreateWithoutCreatedPathsInput, UserUncheckedCreateWithoutCreatedPathsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedPathsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedPathsInput, UserUncheckedUpdateWithoutCreatedPathsInput>
  }

  export type UserUpdateWithoutCreatedPathsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutUserNestedInput
    createdModules?: ModuleUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedPathsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutUserNestedInput
    createdModules?: ModuleUncheckedUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ModuleUpsertWithWhereUniqueWithoutPathInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutPathInput, ModuleUncheckedUpdateWithoutPathInput>
    create: XOR<ModuleCreateWithoutPathInput, ModuleUncheckedCreateWithoutPathInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutPathInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutPathInput, ModuleUncheckedUpdateWithoutPathInput>
  }

  export type ModuleUpdateManyWithWhereWithoutPathInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutPathInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutPathInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutPathInput, EnrollmentUncheckedUpdateWithoutPathInput>
    create: XOR<EnrollmentCreateWithoutPathInput, EnrollmentUncheckedCreateWithoutPathInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutPathInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutPathInput, EnrollmentUncheckedUpdateWithoutPathInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutPathInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutPathInput>
  }

  export type QuizUpsertWithWhereUniqueWithoutPathInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutPathInput, QuizUncheckedUpdateWithoutPathInput>
    create: XOR<QuizCreateWithoutPathInput, QuizUncheckedCreateWithoutPathInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutPathInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutPathInput, QuizUncheckedUpdateWithoutPathInput>
  }

  export type QuizUpdateManyWithWhereWithoutPathInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutPathInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    pathId?: StringNullableFilter<"Quiz"> | string | null
    moduleId?: StringNullableFilter<"Quiz"> | string | null
    lessonId?: StringNullableFilter<"Quiz"> | string | null
    passingScore?: IntFilter<"Quiz"> | number
    timeLimit?: IntNullableFilter<"Quiz"> | number | null
    retakeable?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type LearningPathCreateWithoutModulesInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedPathsInput
    enrollments?: EnrollmentCreateNestedManyWithoutPathInput
    quizzes?: QuizCreateNestedManyWithoutPathInput
  }

  export type LearningPathUncheckedCreateWithoutModulesInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    creatorId: string
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutPathInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutPathInput
  }

  export type LearningPathCreateOrConnectWithoutModulesInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutModulesInput, LearningPathUncheckedCreateWithoutModulesInput>
  }

  export type UserCreateWithoutCreatedModulesInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedModulesInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathUncheckedCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedModulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedModulesInput, UserUncheckedCreateWithoutCreatedModulesInput>
  }

  export type LessonCreateWithoutModuleInput = {
    id?: string
    title: string
    content: string
    order: number
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedLessonsInput
    progress?: ProgressCreateNestedManyWithoutLessonInput
    quiz?: QuizCreateNestedOneWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutModuleInput = {
    id?: string
    title: string
    content: string
    order: number
    creatorId: string
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: ProgressUncheckedCreateNestedManyWithoutLessonInput
    quiz?: QuizUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutModuleInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput>
  }

  export type LessonCreateManyModuleInputEnvelope = {
    data: LessonCreateManyModuleInput | LessonCreateManyModuleInput[]
  }

  export type QuizCreateWithoutModuleInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    path?: LearningPathCreateNestedOneWithoutQuizzesInput
    lesson?: LessonCreateNestedOneWithoutQuizInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutModuleInput = {
    id?: string
    title: string
    description?: string | null
    pathId?: string | null
    lessonId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutModuleInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput>
  }

  export type QuizCreateManyModuleInputEnvelope = {
    data: QuizCreateManyModuleInput | QuizCreateManyModuleInput[]
  }

  export type LearningPathUpsertWithoutModulesInput = {
    update: XOR<LearningPathUpdateWithoutModulesInput, LearningPathUncheckedUpdateWithoutModulesInput>
    create: XOR<LearningPathCreateWithoutModulesInput, LearningPathUncheckedCreateWithoutModulesInput>
    where?: LearningPathWhereInput
  }

  export type LearningPathUpdateToOneWithWhereWithoutModulesInput = {
    where?: LearningPathWhereInput
    data: XOR<LearningPathUpdateWithoutModulesInput, LearningPathUncheckedUpdateWithoutModulesInput>
  }

  export type LearningPathUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedPathsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutPathNestedInput
    quizzes?: QuizUpdateManyWithoutPathNestedInput
  }

  export type LearningPathUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutPathNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutPathNestedInput
  }

  export type UserUpsertWithoutCreatedModulesInput = {
    update: XOR<UserUpdateWithoutCreatedModulesInput, UserUncheckedUpdateWithoutCreatedModulesInput>
    create: XOR<UserCreateWithoutCreatedModulesInput, UserUncheckedCreateWithoutCreatedModulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedModulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedModulesInput, UserUncheckedUpdateWithoutCreatedModulesInput>
  }

  export type UserUpdateWithoutCreatedModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUncheckedUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type LessonUpsertWithWhereUniqueWithoutModuleInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutModuleInput, LessonUncheckedUpdateWithoutModuleInput>
    create: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutModuleInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutModuleInput, LessonUncheckedUpdateWithoutModuleInput>
  }

  export type LessonUpdateManyWithWhereWithoutModuleInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutModuleInput>
  }

  export type QuizUpsertWithWhereUniqueWithoutModuleInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutModuleInput, QuizUncheckedUpdateWithoutModuleInput>
    create: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutModuleInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutModuleInput, QuizUncheckedUpdateWithoutModuleInput>
  }

  export type QuizUpdateManyWithWhereWithoutModuleInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutModuleInput>
  }

  export type ModuleCreateWithoutLessonsInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    path: LearningPathCreateNestedOneWithoutModulesInput
    creator: UserCreateNestedOneWithoutCreatedModulesInput
    quizzes?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutLessonsInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    pathId: string
    creatorId: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutLessonsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
  }

  export type UserCreateWithoutCreatedLessonsInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedLessonsInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathUncheckedCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedLessonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedLessonsInput, UserUncheckedCreateWithoutCreatedLessonsInput>
  }

  export type ProgressCreateWithoutLessonInput = {
    id?: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type ProgressUncheckedCreateWithoutLessonInput = {
    id?: string
    userId: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ProgressCreateOrConnectWithoutLessonInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutLessonInput, ProgressUncheckedCreateWithoutLessonInput>
  }

  export type ProgressCreateManyLessonInputEnvelope = {
    data: ProgressCreateManyLessonInput | ProgressCreateManyLessonInput[]
  }

  export type QuizCreateWithoutLessonInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    path?: LearningPathCreateNestedOneWithoutQuizzesInput
    module?: ModuleCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutLessonInput = {
    id?: string
    title: string
    description?: string | null
    pathId?: string | null
    moduleId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutLessonInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
  }

  export type ModuleUpsertWithoutLessonsInput = {
    update: XOR<ModuleUpdateWithoutLessonsInput, ModuleUncheckedUpdateWithoutLessonsInput>
    create: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutLessonsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutLessonsInput, ModuleUncheckedUpdateWithoutLessonsInput>
  }

  export type ModuleUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneRequiredWithoutModulesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedModulesNestedInput
    quizzes?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    pathId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserUpsertWithoutCreatedLessonsInput = {
    update: XOR<UserUpdateWithoutCreatedLessonsInput, UserUncheckedUpdateWithoutCreatedLessonsInput>
    create: XOR<UserCreateWithoutCreatedLessonsInput, UserUncheckedCreateWithoutCreatedLessonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedLessonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedLessonsInput, UserUncheckedUpdateWithoutCreatedLessonsInput>
  }

  export type UserUpdateWithoutCreatedLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUncheckedUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutLessonInput, ProgressUncheckedUpdateWithoutLessonInput>
    create: XOR<ProgressCreateWithoutLessonInput, ProgressUncheckedCreateWithoutLessonInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutLessonInput, ProgressUncheckedUpdateWithoutLessonInput>
  }

  export type ProgressUpdateManyWithWhereWithoutLessonInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutLessonInput>
  }

  export type QuizUpsertWithoutLessonInput = {
    update: XOR<QuizUpdateWithoutLessonInput, QuizUncheckedUpdateWithoutLessonInput>
    create: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutLessonInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutLessonInput, QuizUncheckedUpdateWithoutLessonInput>
  }

  export type QuizUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneWithoutQuizzesNestedInput
    module?: ModuleUpdateOneWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type LearningPathCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedPathsInput
    modules?: ModuleCreateNestedManyWithoutPathInput
    enrollments?: EnrollmentCreateNestedManyWithoutPathInput
  }

  export type LearningPathUncheckedCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    creatorId: string
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutPathInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutPathInput
  }

  export type LearningPathCreateOrConnectWithoutQuizzesInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutQuizzesInput, LearningPathUncheckedCreateWithoutQuizzesInput>
  }

  export type ModuleCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    path: LearningPathCreateNestedOneWithoutModulesInput
    creator: UserCreateNestedOneWithoutCreatedModulesInput
    lessons?: LessonCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    pathId: string
    creatorId: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutQuizzesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutQuizzesInput, ModuleUncheckedCreateWithoutQuizzesInput>
  }

  export type LessonCreateWithoutQuizInput = {
    id?: string
    title: string
    content: string
    order: number
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutLessonsInput
    creator: UserCreateNestedOneWithoutCreatedLessonsInput
    progress?: ProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutQuizInput = {
    id?: string
    title: string
    content: string
    order: number
    moduleId: string
    creatorId: string
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: ProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutQuizInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutQuizInput, LessonUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    id?: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuestionOptionCreateNestedManyWithoutQuestionInput
    answers?: QuestionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
  }

  export type QuizSubmissionCreateWithoutQuizInput = {
    id?: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    answers?: QuestionAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    answers?: QuestionAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionCreateOrConnectWithoutQuizInput = {
    where: QuizSubmissionWhereUniqueInput
    create: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput>
  }

  export type QuizSubmissionCreateManyQuizInputEnvelope = {
    data: QuizSubmissionCreateManyQuizInput | QuizSubmissionCreateManyQuizInput[]
  }

  export type LearningPathUpsertWithoutQuizzesInput = {
    update: XOR<LearningPathUpdateWithoutQuizzesInput, LearningPathUncheckedUpdateWithoutQuizzesInput>
    create: XOR<LearningPathCreateWithoutQuizzesInput, LearningPathUncheckedCreateWithoutQuizzesInput>
    where?: LearningPathWhereInput
  }

  export type LearningPathUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: LearningPathWhereInput
    data: XOR<LearningPathUpdateWithoutQuizzesInput, LearningPathUncheckedUpdateWithoutQuizzesInput>
  }

  export type LearningPathUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedPathsNestedInput
    modules?: ModuleUpdateManyWithoutPathNestedInput
    enrollments?: EnrollmentUpdateManyWithoutPathNestedInput
  }

  export type LearningPathUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutPathNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutPathNestedInput
  }

  export type ModuleUpsertWithoutQuizzesInput = {
    update: XOR<ModuleUpdateWithoutQuizzesInput, ModuleUncheckedUpdateWithoutQuizzesInput>
    create: XOR<ModuleCreateWithoutQuizzesInput, ModuleUncheckedCreateWithoutQuizzesInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutQuizzesInput, ModuleUncheckedUpdateWithoutQuizzesInput>
  }

  export type ModuleUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneRequiredWithoutModulesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedModulesNestedInput
    lessons?: LessonUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    pathId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type LessonUpsertWithoutQuizInput = {
    update: XOR<LessonUpdateWithoutQuizInput, LessonUncheckedUpdateWithoutQuizInput>
    create: XOR<LessonCreateWithoutQuizInput, LessonUncheckedCreateWithoutQuizInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutQuizInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutQuizInput, LessonUncheckedUpdateWithoutQuizInput>
  }

  export type LessonUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutLessonsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedLessonsNestedInput
    progress?: ProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: ProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    quizId?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    points?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizSubmissionWhereUniqueInput
    update: XOR<QuizSubmissionUpdateWithoutQuizInput, QuizSubmissionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput>
  }

  export type QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizSubmissionWhereUniqueInput
    data: XOR<QuizSubmissionUpdateWithoutQuizInput, QuizSubmissionUncheckedUpdateWithoutQuizInput>
  }

  export type QuizSubmissionUpdateManyWithWhereWithoutQuizInput = {
    where: QuizSubmissionScalarWhereInput
    data: XOR<QuizSubmissionUpdateManyMutationInput, QuizSubmissionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    path?: LearningPathCreateNestedOneWithoutQuizzesInput
    module?: ModuleCreateNestedOneWithoutQuizzesInput
    lesson?: LessonCreateNestedOneWithoutQuizInput
    submissions?: QuizSubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    pathId?: string | null
    moduleId?: string | null
    lessonId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionOptionCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
    order: number
  }

  export type QuestionOptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
    order: number
  }

  export type QuestionOptionCreateOrConnectWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    create: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionOptionCreateManyQuestionInputEnvelope = {
    data: QuestionOptionCreateManyQuestionInput | QuestionOptionCreateManyQuestionInput[]
  }

  export type QuestionAnswerCreateWithoutQuestionInput = {
    id?: string
    selectedOptionId?: string | null
    isCorrect?: boolean
    submission: QuizSubmissionCreateNestedOneWithoutAnswersInput
  }

  export type QuestionAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    submissionId: string
    selectedOptionId?: string | null
    isCorrect?: boolean
  }

  export type QuestionAnswerCreateOrConnectWithoutQuestionInput = {
    where: QuestionAnswerWhereUniqueInput
    create: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionAnswerCreateManyQuestionInputEnvelope = {
    data: QuestionAnswerCreateManyQuestionInput | QuestionAnswerCreateManyQuestionInput[]
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneWithoutQuizzesNestedInput
    module?: ModuleUpdateOneWithoutQuizzesNestedInput
    lesson?: LessonUpdateOneWithoutQuizNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    update: XOR<QuestionOptionUpdateWithoutQuestionInput, QuestionOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    data: XOR<QuestionOptionUpdateWithoutQuestionInput, QuestionOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionOptionScalarWhereInput
    data: XOR<QuestionOptionUpdateManyMutationInput, QuestionOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionOptionScalarWhereInput = {
    AND?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
    OR?: QuestionOptionScalarWhereInput[]
    NOT?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
    id?: StringFilter<"QuestionOption"> | string
    questionId?: StringFilter<"QuestionOption"> | string
    text?: StringFilter<"QuestionOption"> | string
    isCorrect?: BoolFilter<"QuestionOption"> | boolean
    order?: IntFilter<"QuestionOption"> | number
  }

  export type QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionAnswerWhereUniqueInput
    update: XOR<QuestionAnswerUpdateWithoutQuestionInput, QuestionAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionAnswerWhereUniqueInput
    data: XOR<QuestionAnswerUpdateWithoutQuestionInput, QuestionAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionAnswerScalarWhereInput
    data: XOR<QuestionAnswerUpdateManyMutationInput, QuestionAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionAnswerScalarWhereInput = {
    AND?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
    OR?: QuestionAnswerScalarWhereInput[]
    NOT?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
    id?: StringFilter<"QuestionAnswer"> | string
    questionId?: StringFilter<"QuestionAnswer"> | string
    submissionId?: StringFilter<"QuestionAnswer"> | string
    selectedOptionId?: StringNullableFilter<"QuestionAnswer"> | string | null
    isCorrect?: BoolFilter<"QuestionAnswer"> | boolean
  }

  export type QuestionCreateWithoutOptionsInput = {
    id?: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    answers?: QuestionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    quizId: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutOptionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
  }

  export type QuestionUpsertWithoutOptionsInput = {
    update: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: QuestionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: QuestionOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    quizId: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuizSubmissionCreateWithoutAnswersInput = {
    id?: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    quiz: QuizCreateNestedOneWithoutSubmissionsInput
  }

  export type QuizSubmissionUncheckedCreateWithoutAnswersInput = {
    id?: string
    userId: string
    quizId: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizSubmissionCreateOrConnectWithoutAnswersInput = {
    where: QuizSubmissionWhereUniqueInput
    create: XOR<QuizSubmissionCreateWithoutAnswersInput, QuizSubmissionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: QuestionOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizSubmissionUpsertWithoutAnswersInput = {
    update: XOR<QuizSubmissionUpdateWithoutAnswersInput, QuizSubmissionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuizSubmissionCreateWithoutAnswersInput, QuizSubmissionUncheckedCreateWithoutAnswersInput>
    where?: QuizSubmissionWhereInput
  }

  export type QuizSubmissionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuizSubmissionWhereInput
    data: XOR<QuizSubmissionUpdateWithoutAnswersInput, QuizSubmissionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuizSubmissionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type QuizSubmissionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathUncheckedCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleUncheckedCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type QuizCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    path?: LearningPathCreateNestedOneWithoutQuizzesInput
    module?: ModuleCreateNestedOneWithoutQuizzesInput
    lesson?: LessonCreateNestedOneWithoutQuizInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    pathId?: string | null
    moduleId?: string | null
    lessonId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutSubmissionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
  }

  export type QuestionAnswerCreateWithoutSubmissionInput = {
    id?: string
    selectedOptionId?: string | null
    isCorrect?: boolean
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type QuestionAnswerUncheckedCreateWithoutSubmissionInput = {
    id?: string
    questionId: string
    selectedOptionId?: string | null
    isCorrect?: boolean
  }

  export type QuestionAnswerCreateOrConnectWithoutSubmissionInput = {
    where: QuestionAnswerWhereUniqueInput
    create: XOR<QuestionAnswerCreateWithoutSubmissionInput, QuestionAnswerUncheckedCreateWithoutSubmissionInput>
  }

  export type QuestionAnswerCreateManySubmissionInputEnvelope = {
    data: QuestionAnswerCreateManySubmissionInput | QuestionAnswerCreateManySubmissionInput[]
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUncheckedUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUncheckedUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type QuizUpsertWithoutSubmissionsInput = {
    update: XOR<QuizUpdateWithoutSubmissionsInput, QuizUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutSubmissionsInput, QuizUncheckedUpdateWithoutSubmissionsInput>
  }

  export type QuizUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneWithoutQuizzesNestedInput
    module?: ModuleUpdateOneWithoutQuizzesNestedInput
    lesson?: LessonUpdateOneWithoutQuizNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuestionAnswerUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: QuestionAnswerWhereUniqueInput
    update: XOR<QuestionAnswerUpdateWithoutSubmissionInput, QuestionAnswerUncheckedUpdateWithoutSubmissionInput>
    create: XOR<QuestionAnswerCreateWithoutSubmissionInput, QuestionAnswerUncheckedCreateWithoutSubmissionInput>
  }

  export type QuestionAnswerUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: QuestionAnswerWhereUniqueInput
    data: XOR<QuestionAnswerUpdateWithoutSubmissionInput, QuestionAnswerUncheckedUpdateWithoutSubmissionInput>
  }

  export type QuestionAnswerUpdateManyWithWhereWithoutSubmissionInput = {
    where: QuestionAnswerScalarWhereInput
    data: XOR<QuestionAnswerUpdateManyMutationInput, QuestionAnswerUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathUncheckedCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleUncheckedCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type LearningPathCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedPathsInput
    modules?: ModuleCreateNestedManyWithoutPathInput
    quizzes?: QuizCreateNestedManyWithoutPathInput
  }

  export type LearningPathUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    creatorId: string
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutPathInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutPathInput
  }

  export type LearningPathCreateOrConnectWithoutEnrollmentsInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutEnrollmentsInput, LearningPathUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUncheckedUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUncheckedUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type LearningPathUpsertWithoutEnrollmentsInput = {
    update: XOR<LearningPathUpdateWithoutEnrollmentsInput, LearningPathUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<LearningPathCreateWithoutEnrollmentsInput, LearningPathUncheckedCreateWithoutEnrollmentsInput>
    where?: LearningPathWhereInput
  }

  export type LearningPathUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: LearningPathWhereInput
    data: XOR<LearningPathUpdateWithoutEnrollmentsInput, LearningPathUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type LearningPathUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedPathsNestedInput
    modules?: ModuleUpdateManyWithoutPathNestedInput
    quizzes?: QuizUpdateManyWithoutPathNestedInput
  }

  export type LearningPathUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutPathNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutPathNestedInput
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    email: string
    username: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutUserInput
    createdPaths?: LearningPathUncheckedCreateNestedManyWithoutCreatorInput
    createdModules?: ModuleUncheckedCreateNestedManyWithoutCreatorInput
    createdLessons?: LessonUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type LessonCreateWithoutProgressInput = {
    id?: string
    title: string
    content: string
    order: number
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutLessonsInput
    creator: UserCreateNestedOneWithoutCreatedLessonsInput
    quiz?: QuizCreateNestedOneWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutProgressInput = {
    id?: string
    title: string
    content: string
    order: number
    moduleId: string
    creatorId: string
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutProgressInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutUserNestedInput
    createdPaths?: LearningPathUncheckedUpdateManyWithoutCreatorNestedInput
    createdModules?: ModuleUncheckedUpdateManyWithoutCreatorNestedInput
    createdLessons?: LessonUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type LessonUpsertWithoutProgressInput = {
    update: XOR<LessonUpdateWithoutProgressInput, LessonUncheckedUpdateWithoutProgressInput>
    create: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutProgressInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutProgressInput, LessonUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutLessonsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedLessonsNestedInput
    quiz?: QuizUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type EnrollmentCreateManyUserInput = {
    id?: string
    pathId: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ProgressCreateManyUserInput = {
    id?: string
    lessonId: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type QuizSubmissionCreateManyUserInput = {
    id?: string
    quizId: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningPathCreateManyCreatorInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.DifficultyLevel
    icon?: string | null
    isPublished?: boolean
    estimatedHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    pathId: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonCreateManyCreatorInput = {
    id?: string
    title: string
    content: string
    order: number
    moduleId: string
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput
  }

  export type ProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutSubmissionsNestedInput
    answers?: QuestionAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: QuestionAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUpdateManyWithoutPathNestedInput
    enrollments?: EnrollmentUpdateManyWithoutPathNestedInput
    quizzes?: QuizUpdateManyWithoutPathNestedInput
  }

  export type LearningPathUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutPathNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutPathNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutPathNestedInput
  }

  export type LearningPathUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneRequiredWithoutModulesNestedInput
    lessons?: LessonUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    pathId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    pathId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutLessonsNestedInput
    progress?: ProgressUpdateManyWithoutLessonNestedInput
    quiz?: QuizUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: ProgressUncheckedUpdateManyWithoutLessonNestedInput
    quiz?: QuizUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateManyPathInput = {
    id?: string
    title: string
    description?: string | null
    order: number
    creatorId: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateManyPathInput = {
    id?: string
    userId: string
    completed?: boolean
    percentage?: number
    enrolledAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type QuizCreateManyPathInput = {
    id?: string
    title: string
    description?: string | null
    moduleId?: string | null
    lessonId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedModulesNestedInput
    lessons?: LessonUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneWithoutQuizzesNestedInput
    lesson?: LessonUpdateOneWithoutQuizNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyModuleInput = {
    id?: string
    title: string
    content: string
    order: number
    creatorId: string
    duration?: number | null
    difficulty?: $Enums.DifficultyLevel | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateManyModuleInput = {
    id?: string
    title: string
    description?: string | null
    pathId?: string | null
    lessonId?: string | null
    passingScore?: number
    timeLimit?: number | null
    retakeable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedLessonsNestedInput
    progress?: ProgressUpdateManyWithoutLessonNestedInput
    quiz?: QuizUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: ProgressUncheckedUpdateManyWithoutLessonNestedInput
    quiz?: QuizUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: LearningPathUpdateOneWithoutQuizzesNestedInput
    lesson?: LessonUpdateOneWithoutQuizNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    retakeable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressCreateManyLessonInput = {
    id?: string
    userId: string
    completed?: boolean
    views?: number
    firstViewedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ProgressUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type ProgressUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    firstViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyQuizInput = {
    id?: string
    type: $Enums.QuestionType
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizSubmissionCreateManyQuizInput = {
    id?: string
    userId: string
    score?: number | null
    maxScore?: number | null
    percentage?: number | null
    passed?: boolean
    timeSpent?: number | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuestionOptionUpdateManyWithoutQuestionNestedInput
    answers?: QuestionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSubmissionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    answers?: QuestionAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: QuestionAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionOptionCreateManyQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
    order: number
  }

  export type QuestionAnswerCreateManyQuestionInput = {
    id?: string
    submissionId: string
    selectedOptionId?: string | null
    isCorrect?: boolean
  }

  export type QuestionOptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionOptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    submission?: QuizSubmissionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type QuestionAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionAnswerCreateManySubmissionInput = {
    id?: string
    questionId: string
    selectedOptionId?: string | null
    isCorrect?: boolean
  }

  export type QuestionAnswerUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type QuestionAnswerUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionAnswerUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
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