export interface Post {
    id: string;
    userId: string;
    desc: string;
    likes: Array<string>;
    image: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
