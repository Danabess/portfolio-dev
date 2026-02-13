import { useParams } from "react-router-dom"
import { AllCases } from "./components/AllCasesList";

import Page404 from "./page404";


export default function CurrentItem() {
    const { video_id } = useParams();

    for (var i = 0; i < AllCases.length; i += 1) {
        if (AllCases[i].title == video_id) {
            return (
                <section className="current-page">
                    <div className="current-page-inner current-page-container">
                        Video name: {video_id}
                    </div>
                </section>
            )
        }
    }

    return (
        <Page404></Page404>
    )
}