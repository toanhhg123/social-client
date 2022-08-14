export interface User {
    id?: string;
    userName: string;
    password?: string;
    slug: string;
    profilePicture?: string;
    coverPicture?: string;
    about?: string;
    livesin?: string;
    wordAt?: string;
    relationship?: string;
    followers?: Array<string>;
    following?: Array<string>;
}
