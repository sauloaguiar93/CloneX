import { HomeHeader } from "@/components/home/home-header";
import { HomeFeed } from "@/components/home/home-feed";
import { TweetPost } from "@/components/tweet/tweet-post";

export default function Page(){
    return(
        <div>
            <HomeHeader />
            <TweetPost />
            <HomeFeed />
        </div>
    )
}