import { NavLink, useParams } from "react-router-dom"
import { AllCases } from "./components/AllCases"

import Page404 from "./page404";
import CurrentItemAbout from "./components/CurrentItemAbout";
import { WebSiteName } from "./App";


export default function CurrentItem() {
    const { video_id } = useParams();

    for (var i = 0; i < AllCases.length; i += 1) {
        if (AllCases[i].title == video_id) {
            const video = AllCases[i];
            const video_index = i;

            return (
                <section className="current-item">
                    <div className="current-item-inner current-item-container">
                        <div className="current-item__main-info">
                            <div className="current-item-preview">
                                <img src={video.content} alt="" />
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
                            <CurrentItemAbout currentItem={video} video_index={video_index}></CurrentItemAbout>
                        </div>
                    </div>

                    <div className="current-item-links">
                        <div className="prev-link">
                            {
                                AllCases[i - 1]
                                    ? (
                                        <NavLink to={`${WebSiteName}/projects/${AllCases[i - 1].title}`}>
                                            <h3>
                                                {AllCases[i - 1].title}
                                            </h3>
                                        </NavLink>
                                    )
                                    : ""
                            }
                        </div>
                        <div className="next-link">
                            {
                                AllCases[i + 1]
                                    ? (
                                        <NavLink to={`${WebSiteName}/projects/${AllCases[i + 1].title}`}>
                                            <h3>
                                                {AllCases[i + 1].title}
                                            </h3>
                                        </NavLink>
                                    )
                                    : ""
                            }
                        </div>
                    </div>
                </section>
            )
        }
    }

    return (
        <Page404></Page404>
    )

}