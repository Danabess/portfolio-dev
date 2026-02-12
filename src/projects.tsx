import AllCasesList from "./components/AllCasesList";

function Projects() {
    return (
        <section className="projects">
            <div className="projects-inner projects-container">
                <div className="projects-title">
                    <h1 className="uppercase">All Cases</h1>
                </div>
                <div className="projects-content">
                    <AllCasesList></AllCasesList>
                </div>
            </div>
        </section>
    )
}


export default Projects;