import type { AllCasesType } from "./AllCases";

export default function CurrentItemAbout({ currentItem, className, video_index }: { currentItem: AllCasesType, className?: string, video_index: number }) {
    const currentItemAbout = currentItem.about;

    switch (video_index) {

        case 2:
            return (
                <div className={`current-item-about-content ${className ? className : ""}`}>
                    <div className="third-block about-content-block">
                        <div className="third-block-item block-item">
                            <div className="third-block-images block-item-images split-images">
                                <div className="split-images-item">
                                    <img src={currentItemAbout.images.image_5} alt="Third block image" />
                                </div>
                                <div className="split-images-item">
                                    <img src={currentItemAbout.images.image_6} alt="Third block image" />
                                </div>
                            </div>
                            <div className="third-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_5}</p>
                            </div>
                        </div>
                    </div>
                    <div className="first-block about-content-block">
                        <div className="first-block-item block-item">
                            <div className="first-block-images block-item-images">
                                <img src={currentItemAbout.images.image_1} alt="First block image" />
                            </div>
                            <div className="first-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="second-block about-content-block">
                        <div className="second-block-item block-item">
                            <div className="second-block-images block-item-images">
                                <img src={currentItemAbout.images.image_2} alt="Second block image" />
                            </div>
                            <div className="second-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_2}</p>
                            </div>
                        </div>
                        <div className="second-block-item block-item">
                            <div className="second-block-images block-item-images">
                                <img src={currentItemAbout.images.image_3} alt="Second block image" />
                            </div>
                            <div className="second-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_3}</p>
                            </div>
                        </div>
                        <div className="second-block-item block-item">
                            <div className="second-block-images block-item-images">
                                <img src={currentItemAbout.images.image_4} alt="Second block image" />
                            </div>
                            <div className="second-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )

        default:
            return (
                <div className={`current-item-about-content ${className ? className : ""}`}>
                    <div className="first-block about-content-block">
                        <div className="first-block-item block-item">
                            <div className="first-block-images block-item-images">
                                <img src={currentItemAbout.images.image_1} alt="First block image" />
                            </div>
                            <div className="first-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="second-block about-content-block">
                        <div className="second-block-item block-item">
                            <div className="second-block-images block-item-images">
                                <img src={currentItemAbout.images.image_2} alt="Second block image" />
                            </div>
                            <div className="second-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_2}</p>
                            </div>
                        </div>
                        <div className="second-block-item block-item">
                            <div className="second-block-images block-item-images">
                                <img src={currentItemAbout.images.image_3} alt="Second block image" />
                            </div>
                            <div className="second-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_3}</p>
                            </div>
                        </div>
                        <div className="second-block-item block-item">
                            <div className="second-block-images block-item-images">
                                <img src={currentItemAbout.images.image_4} alt="Second block image" />
                            </div>
                            <div className="second-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_4}</p>
                            </div>
                        </div>
                    </div>
                    <div className="third-block about-content-block">
                        <div className="third-block-item block-item">
                            <div className="third-block-images block-item-images split-images">
                                <div className="split-images-item">
                                    <img src={currentItemAbout.images.image_5} alt="Third block image" />
                                </div>
                                <div className="split-images-item">
                                    <img src={currentItemAbout.images.image_6} alt="Third block image" />
                                </div>
                            </div>
                            <div className="third-block-paragraphs block-item-paragraphs">
                                <p className="p2">{currentItemAbout.paragraphs.paragraph_5}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}