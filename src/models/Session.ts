export interface Session {
    id: string;
    refreshToken: string;
    userId: string;
    token: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
