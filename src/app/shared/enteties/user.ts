import { Role } from "./role";

export interface User {
    name: string;
    role: Role
}

export const DEFAULT_USER : User = {
name: "default-name",
role: "Customer"
}