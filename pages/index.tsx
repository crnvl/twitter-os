import { NextPage } from "next"
import SiteEmbedding from "../components/SiteEmbedding"
import Tweet from "../components/Tweet"

const Home: NextPage = () => (
    <>
        <SiteEmbedding>
            <Tweet
                avatarUrl={"https://pbs.twimg.com/profile_images/1575945230905376777/oe_ParwW_bigger.jpg"}
                username={"angelsflyinhell"}
                handle={"@angelsflyinhell"}
                text={"Elon musk groesster clown EUW, nichtmal gelogen"}
                attachments={['https://i1.sndcdn.com/artworks-4GINLJt0qRrErZIN-h48h3g-t500x500.jpg']}
                date={"20m"}
                retweets={69}
                likes={420}
                comments={8} />
            <Tweet
                avatarUrl={"https://pbs.twimg.com/profile_images/1574757862752010242/DeuWNd0z_x96.jpg"}
                username={"Elon Hater #2"}
                handle={"@fvckelon42"}
                text={"Bruh this is so much better than twitter, i can even edit my tweets lmaoo get fucked elon"}
                attachments={[]}
                date={"20m"}
                retweets={3}
                likes={5}
                comments={1} />
            <Tweet
                avatarUrl={"https://www.bundesregierung.de/resource/image/1991322/16x9/1023/575/42b49fc71975ae93570ac2bf79bb176e/Xo/2021-12-14-lebenslauf-olaf-scholz.jpg"}
                username={"Olaf Scholz"}
                handle={"@bundeskanzler"}
                text={"Deutschland sollte sich nicht mehr auf Twitter bewegen. Das hier ist viel besser 🚫🧢"}
                attachments={[]}
                date={"20m"}
                retweets={429}
                likes={242}
                comments={232} />
        </SiteEmbedding>
    </>
)

export default Home
