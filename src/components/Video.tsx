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
        <div className="relative">
            <div className="bg-black h-full w-full top-0 bottom-0 z-10 absolute opacity-40">
                <button onClick={handlePlayed} className="text-white text-3xl absolute bottom-2 right-2">
                    <i>
                        {played ? <HiPause /> : <HiPlay />}
                    </i>
                </button>
            </div>
            <div>
                <video src="zion.mp4" loop ref={videoRef} autoPlay muted >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}