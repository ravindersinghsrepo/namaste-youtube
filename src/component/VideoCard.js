export default function VideoCard({info}){
    const{snippet , statistics} = info
    const{channelTitle , title , thumbnails} = snippet;
    return(
        
        <div className="p-2 m-2 w-72 shadow-lg ">
            <img src={thumbnails.medium.url}
            className="rounded-xl"
            />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
            </div>
        
    )
}