import { Link, useParams } from "react-router-dom"
import { AllCases } from "./components/AllCases"

import Page404 from "./page404";
import CurrentItemAbout from "./components/CurrentItemAbout";


export default function CurrentItem() {
    const { video_id } = useParams();

    const videoIndex = AllCases.findIndex(v => v.slug === video_id);

    if (videoIndex === -1) {
        return <Page404 />;
    }

    const video = AllCases[videoIndex];
    const prevVideo = AllCases[videoIndex - 1];
    const nextVideo = AllCases[videoIndex + 1];

    return (
        <section className="current-item">
            <div className="current-item-inner current-item-container">
                <div className="current-item__main-info">
                    <div className="current-item-preview">
                        <div className="current-item-video">
                            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0&playlist=dQw4w9WgXcQ&rel=0&modestbranding=1&playsinline=1" title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="current-item-intro">
                        <div className="current-item-title">
                            <h2>{video.title}</h2>
                        </div>
                        <div className="current-item-description">
                            <p className="p2">{video.full_description}</p>
                        </div>
                    </div>
                </div>
                <div className="current-item__about-info">
                    <div className="current-item-about-title">
                        <h1>About this project</h1>
                    </div>
                    <CurrentItemAbout currentItem={video} video_index={videoIndex} />
                </div>
            </div>

            <div className="current-item-links">
                <div className="prev-link">
                    {prevVideo && (
                        <Link className="current-item-link" to={`/projects/${prevVideo.slug}`}>
                            <h3>{prevVideo.title}</h3>
                        </Link>
                    )}
                </div>
                <div className="next-link">
                    {nextVideo && (
                        <Link className="current-item-link" to={`/projects/${nextVideo.slug}`}>
                            <h3>{nextVideo.title}</h3>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}