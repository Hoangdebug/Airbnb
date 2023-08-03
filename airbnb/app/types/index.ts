import { User } from "next-auth";

export type SafeUser = Omit <
    User,
    "createdAt" | "updateAt" | "emailVerified"
> & {
    createdAt: String;
    updateAt: String;
    emailVerified: String | null
}