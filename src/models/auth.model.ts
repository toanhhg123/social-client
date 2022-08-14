import { Session } from './Session';
import { User } from './../myData';
export interface AuthRespone {
    user: User;
    session: Session;
    token: string;
}
