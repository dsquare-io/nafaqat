/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/activities": {
    /** List Activity */
    get: operations["ListActivity"];
  };
  "/api/activities/{activity_uid}/comments": {
    /** List Comment */
    get: operations["ListComment"];
    /** Create Comment */
    post: operations["CreateComment"];
  };
  "/api/activities/{activity_uid}/comments/{comment_uid}": {
    /** Destroy Comment */
    delete: operations["DestroyComment"];
  };
  "/api/authn/password": {
    /** Password Login */
    post: operations["PasswordLogin"];
  };
  "/api/authn/refresh": {
    /** Refresh Access Token */
    post: operations["RefreshAccessToken"];
  };
  "/api/currencies": {
    /** List Currency */
    get: operations["ListCurrency"];
  };
  "/api/friends": {
    /** List Friend */
    get: operations["ListFriend"];
    /** Create Friend */
    post: operations["CreateFriend"];
  };
  "/api/friends/{friend_uid}": {
    /** Retrieve Friend */
    get: operations["RetrieveFriend"];
  };
  "/api/friends/{friend_uid}/expenses": {
    /** List Friend Expense */
    get: operations["ListFriendExpense"];
  };
  "/api/groups": {
    /** List Group */
    get: operations["ListGroup"];
    /** Create Group */
    post: operations["CreateGroup"];
  };
  "/api/groups/{group_uid}": {
    /** Retrieve Group */
    get: operations["RetrieveGroup"];
    /** Update Group */
    put: operations["UpdateGroup"];
    /** Partial Update Group */
    patch: operations["PartialUpdateGroup"];
  };
  "/api/groups/{group_uid}/expenses": {
    /** List Group Expense */
    get: operations["ListGroupExpense"];
  };
  "/api/groups/{group_uid}/members/{member_uid}": {
    /** Destroy Group Membership */
    delete: operations["DestroyGroupMembership"];
  };
  "/api/groups/members": {
    /** Create Bulk Group Membership */
    post: operations["CreateBulkGroupMembership"];
  };
  "/api/mfa/challenge/{device_type}": {
    /** Challenge Mfa Device */
    post: operations["ChallengeMfaDevice"];
  };
  "/api/mfa/confirm/{device_type}": {
    /** Confirm Mfa Device */
    post: operations["ConfirmMfaDevice"];
  };
  "/api/mfa/device/{device_type}:{id}": {
    /** Destroy Mfa Device */
    delete: operations["DestroyMfaDevice"];
  };
  "/api/mfa/devices": {
    /** List Mfa Device */
    get: operations["ListMfaDevice"];
  };
  "/api/mfa/enable/{device_type}": {
    /** Enable Mfa Device */
    post: operations["EnableMfaDevice"];
  };
  "/api/mfa/static": {
    /** List Mfa Static Code */
    get: operations["ListMfaStaticCode"];
    /** Mfa Static Code */
    post: operations["MfaStaticCode"];
  };
  "/api/mfa/verify/{device_type}": {
    /** Verify Mfa Device */
    post: operations["VerifyMfaDevice"];
  };
  "/api/user/currency": {
    /** Retrieve Currency Preference */
    get: operations["RetrieveCurrencyPreference"];
    /** Update Currency Preference */
    put: operations["UpdateCurrencyPreference"];
  };
  "/api/user/forget": {
    /** Forget Password */
    post: operations["ForgetPassword"];
  };
  "/api/user/outstanding-balance": {
    /** Retrieve User Outstanding Balance */
    get: operations["RetrieveUserOutstandingBalance"];
  };
  "/api/user/password": {
    /** Change Password */
    post: operations["ChangePassword"];
  };
  "/api/user/profile": {
    /** Retrieve Profile */
    get: operations["RetrieveProfile"];
    /** Update Profile */
    put: operations["UpdateProfile"];
    /** Partial Update Profile */
    patch: operations["PartialUpdateProfile"];
  };
  "/api/user/reset": {
    /** Reset Password */
    post: operations["ResetPassword"];
  };
  "/api/user/verify-email": {
    /** Verify Email */
    post: operations["VerifyEmail"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    AccessToken: import('./components/schemas.d.ts').AccessToken;
    Activity: import('./components/schemas.d.ts').Activity;
    AggregatedOutstandingBalance: import('./components/schemas.d.ts').AggregatedOutstandingBalance;
    AuthTokenData: import('./components/schemas.d.ts').AuthTokenData;
    AuthenticateUser: import('./components/schemas.d.ts').AuthenticateUser;
    AvailableDevice: import('./components/schemas.d.ts').AvailableDevice;
    BulkCreateGroupMembership: import('./components/schemas.d.ts').BulkCreateGroupMembership;
    ChallengeMfaDeviceResponse: import('./components/schemas.d.ts').ChallengeMfaDeviceResponse;
    ChangePassword: import('./components/schemas.d.ts').ChangePassword;
    Comment: import('./components/schemas.d.ts').Comment;
    Country: import('./components/schemas.d.ts').Country;
    CreateFriendship: import('./components/schemas.d.ts').CreateFriendship;
    Currency: import('./components/schemas.d.ts').Currency;
    Device: import('./components/schemas.d.ts').Device;
    EmailVerification: import('./components/schemas.d.ts').EmailVerification;
    EnableMfaDeviceRequest: import('./components/schemas.d.ts').EnableMfaDeviceRequest;
    EnableMfaDeviceResponse: import('./components/schemas.d.ts').EnableMfaDeviceResponse;
    Error: import('./components/schemas.d.ts').Error;
    Expense: import('./components/schemas.d.ts').Expense;
    ExpenseRow: import('./components/schemas.d.ts').ExpenseRow;
    ExpenseShare: import('./components/schemas.d.ts').ExpenseShare;
    ExtendedGroup: import('./components/schemas.d.ts').ExtendedGroup;
    ForgetPassword: import('./components/schemas.d.ts').ForgetPassword;
    Friend: import('./components/schemas.d.ts').Friend;
    FriendOutstandingBalance: import('./components/schemas.d.ts').FriendOutstandingBalance;
    Group: import('./components/schemas.d.ts').Group;
    GroupOutstandingBalance: import('./components/schemas.d.ts').GroupOutstandingBalance;
    MfaToken: import('./components/schemas.d.ts').MfaToken;
    NotFound: import('./components/schemas.d.ts').NotFound;
    OutstandingBalance: import('./components/schemas.d.ts').OutstandingBalance;
    PaginatedActivityList: import('./components/schemas.d.ts').PaginatedActivityList;
    PaginatedCommentList: import('./components/schemas.d.ts').PaginatedCommentList;
    PaginatedExpenseList: import('./components/schemas.d.ts').PaginatedExpenseList;
    PaginatedFriendList: import('./components/schemas.d.ts').PaginatedFriendList;
    PaginatedGroupList: import('./components/schemas.d.ts').PaginatedGroupList;
    PatchedExtendedGroup: import('./components/schemas.d.ts').PatchedExtendedGroup;
    PatchedUser: import('./components/schemas.d.ts').PatchedUser;
    RefreshAccessToken: import('./components/schemas.d.ts').RefreshAccessToken;
    ResetPassword: import('./components/schemas.d.ts').ResetPassword;
    SimpleCurrency: import('./components/schemas.d.ts').SimpleCurrency;
    SimpleGroup: import('./components/schemas.d.ts').SimpleGroup;
    SimpleUser: import('./components/schemas.d.ts').SimpleUser;
    Target: import('./components/schemas.d.ts').Target;
    User: import('./components/schemas.d.ts').User;
    UserCurrency: import('./components/schemas.d.ts').UserCurrency;
    UserDeviceInfo: import('./components/schemas.d.ts').UserDeviceInfo;
    UserOutstandingBalance: import('./components/schemas.d.ts').UserOutstandingBalance;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** List Activity */
  ListActivity: {
    parameters: {
      query?: {
        /** @description Number of results to return per page. */
        limit?: number;
        /** @description The initial index from which to return the results. */
        offset?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').PaginatedActivityList;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** List Comment */
  ListComment: {
    parameters: {
      query?: {
        /** @description Number of results to return per page. */
        limit?: number;
        /** @description The initial index from which to return the results. */
        offset?: number;
      };
      path: {
        activity_uid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').PaginatedCommentList;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Create Comment */
  CreateComment: {
    parameters: {
      path: {
        activity_uid: string;
      };
    };
    requestBody: {
      content: {
        "application/json": import('./components/schemas').Comment;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Destroy Comment */
  DestroyComment: {
    parameters: {
      path: {
        activity_uid: string;
        comment_uid: string;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Password Login */
  PasswordLogin: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').AuthenticateUser;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AuthTokenData;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
    };
  };
  /** Refresh Access Token */
  RefreshAccessToken: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').RefreshAccessToken;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AccessToken;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
    };
  };
  /** List Currency */
  ListCurrency: {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').Currency[];
        };
      };
    };
  };
  /** List Friend */
  ListFriend: {
    parameters: {
      query?: {
        /** @description Number of results to return per page. */
        limit?: number;
        /** @description The initial index from which to return the results. */
        offset?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').PaginatedFriendList;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Create Friend */
  CreateFriend: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').CreateFriendship;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Retrieve Friend */
  RetrieveFriend: {
    parameters: {
      path: {
        friend_uid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').Friend;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Friend Expense */
  ListFriendExpense: {
    parameters: {
      query?: {
        /** @description Number of results to return per page. */
        limit?: number;
        /** @description The initial index from which to return the results. */
        offset?: number;
      };
      path: {
        friend_uid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').PaginatedExpenseList;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Group */
  ListGroup: {
    parameters: {
      query?: {
        /** @description Number of results to return per page. */
        limit?: number;
        /** @description The initial index from which to return the results. */
        offset?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').PaginatedGroupList;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Create Group */
  CreateGroup: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').Group;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Retrieve Group */
  RetrieveGroup: {
    parameters: {
      path: {
        group_uid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ExtendedGroup;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Update Group */
  UpdateGroup: {
    parameters: {
      path: {
        group_uid: string;
      };
    };
    requestBody: {
      content: {
        "application/json": import('./components/schemas').ExtendedGroup;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Partial Update Group */
  PartialUpdateGroup: {
    parameters: {
      path: {
        group_uid: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": import('./components/schemas').PatchedExtendedGroup;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Group Expense */
  ListGroupExpense: {
    parameters: {
      query?: {
        /** @description Number of results to return per page. */
        limit?: number;
        /** @description The initial index from which to return the results. */
        offset?: number;
      };
      path: {
        group_uid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').PaginatedExpenseList;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Destroy Group Membership */
  DestroyGroupMembership: {
    parameters: {
      path: {
        group_uid: string;
        member_uid: string;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Create Bulk Group Membership */
  CreateBulkGroupMembership: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').BulkCreateGroupMembership;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Challenge Mfa Device */
  ChallengeMfaDevice: {
    parameters: {
      path: {
        device_type: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ChallengeMfaDeviceResponse;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Confirm Mfa Device */
  ConfirmMfaDevice: {
    parameters: {
      path: {
        device_type: string;
      };
    };
    requestBody: {
      content: {
        "application/json": import('./components/schemas').MfaToken;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').MfaToken;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Destroy Mfa Device */
  DestroyMfaDevice: {
    parameters: {
      path: {
        device_type: string;
        id: number;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Mfa Device */
  ListMfaDevice: {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').UserDeviceInfo;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Enable Mfa Device */
  EnableMfaDevice: {
    parameters: {
      path: {
        device_type: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": import('./components/schemas').EnableMfaDeviceRequest;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').EnableMfaDeviceResponse;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Mfa Static Code */
  ListMfaStaticCode: {
    responses: {
      200: {
        content: {
          "application/json": string[];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Mfa Static Code */
  MfaStaticCode: {
    responses: {
      200: {
        content: {
          "application/json": string[];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Verify Mfa Device */
  VerifyMfaDevice: {
    parameters: {
      path: {
        device_type: string;
      };
    };
    requestBody: {
      content: {
        "application/json": import('./components/schemas').MfaToken;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AuthTokenData;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Retrieve Currency Preference */
  RetrieveCurrencyPreference: {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').Currency;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Update Currency Preference */
  UpdateCurrencyPreference: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').UserCurrency;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').UserCurrency;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Forget Password */
  ForgetPassword: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').ForgetPassword;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ForgetPassword;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Retrieve User Outstanding Balance */
  RetrieveUserOutstandingBalance: {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').UserOutstandingBalance;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Change Password */
  ChangePassword: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').ChangePassword;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ChangePassword;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Retrieve Profile */
  RetrieveProfile: {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').User;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Update Profile */
  UpdateProfile: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').User;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Partial Update Profile */
  PartialUpdateProfile: {
    requestBody?: {
      content: {
        "application/json": import('./components/schemas').PatchedUser;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Reset Password */
  ResetPassword: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').ResetPassword;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AuthTokenData;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Verify Email */
  VerifyEmail: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').EmailVerification;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').EmailVerification;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
}
