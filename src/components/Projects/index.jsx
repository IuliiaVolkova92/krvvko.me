import ExperienceTable from "../ExperienceTable";
import './index.css';
import "github-repo-display-react/dist/index.css"
import BestProjects from "../BestProjects";
import Cd from "../Cd";
import Title from "../Title";
import GithubRepos from "../GithubRepos";

const Projects = () => {

    let start = new Date("11/3/2020");
    let now = new Date(Date.now());

    let imProgr = Math.round((now - start) / 1000 / 60 / 60 / 24 / 365) + " Years";

    return (
        <div className="d-container">
            <Title />

            <h1 id="main">Projects</h1>

            <span className="date">Oct 12, 2022</span>

            <p>
                How long has it been since I became a programmer? Good question, by my count (okay, not mine),
                I've been in programming for about <a href="/creation" className="default-link">{imProgr}</a> now. All this time I have been practicing in old and new
                languages and frameworks for me. The branch of programming in which I practice is frontend development.
                Here are some of my best projects, that required effort and time:
            </p>

            <BestProjects />
            <div className="div-separator"></div>

            <p>**All the usages examples and explanations you can find <a href="/creation" className="default-link">here</a>.</p>

            <h2>My Experience</h2>

            <p>
                As I already noted, my experience is constantly growing, and with the help of this ingenious table, and no less ingenious computing
                functions, you can track how much time has passed since you started learning a particular language / framework
            </p>

            <div className="exp-table">
                <ExperienceTable/>
            </div>

            <div className="div-separator"></div>

            <p>
                And in fact, it's hard to believe that <span style={{color: 'var(--headline-color)'}}>{Math.round((now - start) / 1000 / 60 / 60 / 24)}</span> days have already passed since the beginning of the immersion in the magical world, being
                in which thoughts never leave my head: "Where is the mistake?", Or "It's not me who is stupid, but the compiler does not understand me."
            </p>
            <br/>
            <p>Startlingly.</p>

            <h2>My GitHub</h2>

            <p>Here are my most starred GitHub projects, the display of which is also located in <a href="/creation" className="default-link">Creation</a> page.</p>

            <GithubRepos
                sortBy="stars"
                reposAmount={6}
            />
            <div className="div-separator"></div>

            <p>
                Most programmers use Git
                technology for group/own projects, as it has many more advantages than just keeping their code
                locally on the device, or on other file sharing sites. I did not become an exception, and I also
                keep most of my projects related to programming on GitHub
            </p>

            <Cd />
        </div>
    );

}

export default Projects;