type SiteEmbeddingProps = {
    children: React.ReactNode;
};

export default function SiteEmbedding(props: SiteEmbeddingProps) {
    return <>
        <div className="h-screen w-screen bg-black">
            <div className="top-0 h-16 w-screen">
                {/* upper bar */}
                <div className="flex h-full w-screen items-center px-4 justify-between">
                    <div className="h-12 w-12 float-left bg-white rounded-full">
                        <img className="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1575945230905376777/oe_ParwW_bigger.jpg" alt="avatar" />
                    </div>
                    <div className="h-12 w-4/5 float-left">
                        <input className="h-12 w-full rounded-full px-4 font-bold text-white bg-black border" type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="flex w-full h-full text-white flex-col">
                {/* content */}
                {props.children}
            </div>
            <div className="fixed bottom-0 h-16 w-screen bg-black">
                {/* footer */}
                <div className="flex w-full h-full justify-between items-center text-white px-12">
                    <a href="#" className="h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </a>
                    <a href="#" className="h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                    <a href="#" className="h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    </>
}