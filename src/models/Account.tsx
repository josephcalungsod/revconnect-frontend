import { Role } from "./Role";

export interface Account {
    accountId?: number,
    accountName: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    role: Role
    isDisabled: boolean
}