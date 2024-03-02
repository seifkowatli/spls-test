export interface User {
  username: string;
  roles: Role[];
}

export interface Role {
  permissions: string[];
}

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}
