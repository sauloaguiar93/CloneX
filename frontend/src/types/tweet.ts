import { User } from "./user";

export type Tweet = {
    id: number;
    content: string;
    user: User;
    body: string;
    image?: string;
    likeCount: number;
    commentCount: number;
    retweetCount: number;
    liked: boolean;
    retweeted: boolean;
    dataPost: Date;
}