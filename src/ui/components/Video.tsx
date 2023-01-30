import { useRef, useState, useEffect } from "react"
import { HiPause, HiPlay } from "react-icons/hi2";


export default function Video() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [played, setPlayed] = useState<boolean>(true)

    const handlePlayed = () => setPlayed(!played);

    // Pausar e despausar o video
    useEffect(() => {
        if(videoRef.current){
            played ? videoRef.current.play() : videoRef.current.pause()
        }
    }, [played])

    return(
        <div className="absolute">
            <div className="bg-black h-full w-full z-20 absolute top-0 bottom-0 opacity-40">
                <button onClick={handlePlayed} className="absolute right-[25%] bottom-1">
                    <i>
                        {played ? <HiPause /> : <HiPlay />}
                    </i>
                </button>   
            </div>
            <video src="zion.mp4" loop width="100%" height="100%" ref={videoRef} autoPlay muted>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}