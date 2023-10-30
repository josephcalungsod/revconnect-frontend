import { Account } from "./Account";

export interface Comment {
    id?: number,
    account: Account,
    comment: string
}