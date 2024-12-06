import { Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { feedSchema } from "../schemas/feed";
import { findTweetFeed } from "../services/tweet";
import { getUserFollowing } from "../services/user";


export const getFeed = async (req: ExtendedRequest, res: Response) => {
    const safeData = feedSchema.safeParse(req.query);
    if(!safeData.success) {
        return res.json({ error: safeData.error.flatten().fieldErrors });
    }

    let perPage = 2;
    let currentPage = safeData.data.page ?? 0;
    const following = await getUserFollowing(req.userSlug as string);
    const tweets = await findTweetFeed(following, currentPage, perPage);

    return res.json({ tweets, page: currentPage })
}