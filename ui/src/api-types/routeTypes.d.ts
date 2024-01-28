/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/currency/all": {
    get: operations["list-currency"];
  };
  "/api/friend/all": {
    get: operations["list-friend"];
  };
  "/api/friend/invite": {
    post: operations["invite-friend"];
  };
  "/api/group/{group}": {
    get: operations["retrieve-group"];
    put: operations["update-group"];
    patch: operations["partial-update-group"];
  };
  "/api/group/{group}/members/{member}": {
    delete: operations["destroy-group-membership"];
  };
  "/api/group/all": {
    get: operations["list-group"];
    post: operations["create-group"];
  };
  "/api/group/members": {
    post: operations["create-bulk-group-membership"];
  };
  "/api/mfa/challenge/{device}": {
    post: operations["challenge-mfa-device"];
  };
  "/api/mfa/confirm/{device}": {
    post: operations["confirm-mfa-device"];
  };
  "/api/mfa/device/{device}:{id}": {
    delete: operations["destroy-mfa-device"];
  };
  "/api/mfa/devices": {
    get: operations["list-mfa-device"];
  };
  "/api/mfa/enable/{device}": {
    post: operations["enable-mfa-device"];
  };
  "/api/mfa/static": {
    get: operations["list-mfa-static-code"];
    post: operations["mfa-static-code"];
  };
  "/api/mfa/verify/{device}": {
    post: operations["verify-mfa-device"];
  };
  "/api/user/authenticate": {
    post: operations["authenticate-user"];
  };
  "/api/user/forget": {
    post: operations["forget-password"];
  };
  "/api/user/logout": {
    post: operations["logout"];
  };
  "/api/user/password": {
    post: operations["change-password"];
  };
  "/api/user/profile": {
    get: operations["user-profile"];
    put: operations["update-user-profile"];
    patch: operations["partial-update-user-profile"];
  };
  "/api/user/reset": {
    post: operations["reset-password"];
  };
  "/api/user/verify-email": {
    post: operations["email-verification"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    AuthenticateUser: import('./components/schemas.d.ts').AuthenticateUser;
    AuthenticateUserBadRequest: import('./components/schemas.d.ts').AuthenticateUserBadRequest;
    AvailableDevice: import('./components/schemas.d.ts').AvailableDevice;
    BulkCreateGroupMembership: import('./components/schemas.d.ts').BulkCreateGroupMembership;
    ChallengeMfaDeviceResponse: import('./components/schemas.d.ts').ChallengeMfaDeviceResponse;
    ChangePassword: import('./components/schemas.d.ts').ChangePassword;
    ChangePasswordBadRequest: import('./components/schemas.d.ts').ChangePasswordBadRequest;
    ConfirmMfaDeviceBadRequest: import('./components/schemas.d.ts').ConfirmMfaDeviceBadRequest;
    Country: import('./components/schemas.d.ts').Country;
    CreateBulkGroupMembershipBadRequest: import('./components/schemas.d.ts').CreateBulkGroupMembershipBadRequest;
    CreateGroupBadRequest: import('./components/schemas.d.ts').CreateGroupBadRequest;
    Currency: import('./components/schemas.d.ts').Currency;
    Device: import('./components/schemas.d.ts').Device;
    EmailVerification: import('./components/schemas.d.ts').EmailVerification;
    EmailVerificationBadRequest: import('./components/schemas.d.ts').EmailVerificationBadRequest;
    EnableMfaDeviceBadRequest: import('./components/schemas.d.ts').EnableMfaDeviceBadRequest;
    EnableMfaDeviceRequest: import('./components/schemas.d.ts').EnableMfaDeviceRequest;
    EnableMfaDeviceResponse: import('./components/schemas.d.ts').EnableMfaDeviceResponse;
    ForgetPassword: import('./components/schemas.d.ts').ForgetPassword;
    ForgetPasswordBadRequest: import('./components/schemas.d.ts').ForgetPasswordBadRequest;
    Friend: import('./components/schemas.d.ts').Friend;
    FriendOutstandingBalance: import('./components/schemas.d.ts').FriendOutstandingBalance;
    FriendWithOutstandingBalance: import('./components/schemas.d.ts').FriendWithOutstandingBalance;
    GroupDetail: import('./components/schemas.d.ts').GroupDetail;
    GroupMemberOutstandingBalance: import('./components/schemas.d.ts').GroupMemberOutstandingBalance;
    GroupWithOutstandingBalance: import('./components/schemas.d.ts').GroupWithOutstandingBalance;
    InviteFriend: import('./components/schemas.d.ts').InviteFriend;
    InviteFriendBadRequest: import('./components/schemas.d.ts').InviteFriendBadRequest;
    MfaToken: import('./components/schemas.d.ts').MfaToken;
    NotFoundError: import('./components/schemas.d.ts').NotFoundError;
    PaginatedFriendWithOutstandingBalanceList: import('./components/schemas.d.ts').PaginatedFriendWithOutstandingBalanceList;
    PaginatedGroupWithOutstandingBalanceList: import('./components/schemas.d.ts').PaginatedGroupWithOutstandingBalanceList;
    PartialUpdateGroupBadRequest: import('./components/schemas.d.ts').PartialUpdateGroupBadRequest;
    PartialUpdateUserProfileBadRequest: import('./components/schemas.d.ts').PartialUpdateUserProfileBadRequest;
    PatchedGroupDetail: import('./components/schemas.d.ts').PatchedGroupDetail;
    PatchedUserProfile: import('./components/schemas.d.ts').PatchedUserProfile;
    ResetPassword: import('./components/schemas.d.ts').ResetPassword;
    ResetPasswordBadRequest: import('./components/schemas.d.ts').ResetPasswordBadRequest;
    UnauthorizedError: import('./components/schemas.d.ts').UnauthorizedError;
    UpdateGroupBadRequest: import('./components/schemas.d.ts').UpdateGroupBadRequest;
    UpdateUserProfileBadRequest: import('./components/schemas.d.ts').UpdateUserProfileBadRequest;
    UserDeviceInfo: import('./components/schemas.d.ts').UserDeviceInfo;
    UserProfile: import('./components/schemas.d.ts').UserProfile;
    VerifyMfaDeviceBadRequest: import('./components/schemas.d.ts').VerifyMfaDeviceBadRequest;
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

  "list-currency": {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').Currency[];
        };
      };
    };
  };
  "list-friend": {
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
          "application/json": import('./components/schemas').PaginatedFriendWithOutstandingBalanceList;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "invite-friend": {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').InviteFriend;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      400: {
        content: {
          "application/json": import('./components/schemas').InviteFriendBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "retrieve-group": {
    parameters: {
      path: {
        group: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').GroupDetail;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "update-group": {
    parameters: {
      path: {
        group: string;
      };
    };
    requestBody: {
      content: {
        "application/json": import('./components/schemas').GroupDetail;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      400: {
        content: {
          "application/json": import('./components/schemas').UpdateGroupBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "partial-update-group": {
    parameters: {
      path: {
        group: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": import('./components/schemas').PatchedGroupDetail;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      400: {
        content: {
          "application/json": import('./components/schemas').PartialUpdateGroupBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "destroy-group-membership": {
    parameters: {
      path: {
        group: string;
        member: string;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "list-group": {
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
          "application/json": import('./components/schemas').PaginatedGroupWithOutstandingBalanceList;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "create-group": {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').GroupWithOutstandingBalance;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      400: {
        content: {
          "application/json": import('./components/schemas').CreateGroupBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "create-bulk-group-membership": {
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
      400: {
        content: {
          "application/json": import('./components/schemas').CreateBulkGroupMembershipBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "challenge-mfa-device": {
    parameters: {
      path: {
        device: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ChallengeMfaDeviceResponse;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "confirm-mfa-device": {
    parameters: {
      path: {
        device: string;
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
      400: {
        content: {
          "application/json": import('./components/schemas').ConfirmMfaDeviceBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "destroy-mfa-device": {
    parameters: {
      path: {
        device: string;
        id: number;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "list-mfa-device": {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').UserDeviceInfo;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "enable-mfa-device": {
    parameters: {
      path: {
        device: string;
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
      400: {
        content: {
          "application/json": import('./components/schemas').EnableMfaDeviceBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "list-mfa-static-code": {
    responses: {
      200: {
        content: {
          "application/json": string[];
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "mfa-static-code": {
    responses: {
      200: {
        content: {
          "application/json": string[];
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "verify-mfa-device": {
    parameters: {
      path: {
        device: string;
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
      400: {
        content: {
          "application/json": import('./components/schemas').VerifyMfaDeviceBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFoundError;
        };
      };
    };
  };
  "authenticate-user": {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').AuthenticateUser;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AuthenticateUser;
        };
      };
      400: {
        content: {
          "application/json": import('./components/schemas').AuthenticateUserBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "forget-password": {
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
      400: {
        content: {
          "application/json": import('./components/schemas').ForgetPasswordBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  logout: {
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "change-password": {
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
      400: {
        content: {
          "application/json": import('./components/schemas').ChangePasswordBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "user-profile": {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').UserProfile;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "update-user-profile": {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').UserProfile;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      400: {
        content: {
          "application/json": import('./components/schemas').UpdateUserProfileBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "partial-update-user-profile": {
    requestBody?: {
      content: {
        "application/json": import('./components/schemas').PatchedUserProfile;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      400: {
        content: {
          "application/json": import('./components/schemas').PartialUpdateUserProfileBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "reset-password": {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').ResetPassword;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ResetPassword;
        };
      };
      400: {
        content: {
          "application/json": import('./components/schemas').ResetPasswordBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
  "email-verification": {
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
      400: {
        content: {
          "application/json": import('./components/schemas').EmailVerificationBadRequest;
        };
      };
      401: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
      403: {
        content: {
          "application/json": import('./components/schemas').UnauthorizedError;
        };
      };
    };
  };
}
