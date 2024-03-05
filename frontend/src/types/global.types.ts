export interface User {
  email: string;
  name : string;
  points : string;
  roles: Role[];
  _id: string;
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
