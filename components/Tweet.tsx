type TweetProps = {
    avatarUrl: string;
    username: string;
    handle: string;
    text: string;
    attachments: string[];
    date: string;
    retweets: number;
    likes: number;
    comments: number;
}

export default function Tweet({ avatarUrl, username, handle, text, attachments, date, retweets, likes, comments }: TweetProps) {
    return <>
        <div className="w-screen h-fit py-2 px-4 border-b border-gray-900">
            <div className="flex">
                <img className="h-12 w-12 rounded-full object-cover" src={avatarUrl} alt="avatar" />
                <div className="flex flex-col pl-4 w-full">
                    <div className="flex">
                        <h2 className="font-bold">{username}</h2>
                        <h2 className="px-1 text-gray-400">{handle}</h2>
                    </div>
                    <div className="flex">
                        {text}
                    </div>
                    <div>
                        {attachments.map((attachment) => {
                            return <img className="rounded-xl my-4 w-full" src={attachment} alt="attachment" />
                        })}
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly py-2 px-12 text-gray-400">
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    {comments}
                </div>
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>
                    {retweets}
                </div>
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    {likes}
                </div>
            </div>
        </div>
    </>
}