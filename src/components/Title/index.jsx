import './index.css'
import {Helmet} from "react-helmet";
import useEventListener from '@use-it/event-listener'

const Title = () => {
    const ENTER_KEY = ['13', 'Enter'];
    let randomN = Math.floor(Math.random() * 1000);
    document.getElementById("root").style.height = "100vh";
    document.getElementById("root").style.overflowY = "hidden";
    let counterClick = 0;

    const handleClick = async event => {
        counterClick++;
        console.log(counterClick);
        const box = event.currentTarget;
        const container = event.currentTarget.parentElement;
        if (counterClick >= 2) {
            document.getElementById("root").style.height = "100%";
            document.location.hash = "#main";
            setTimeout(() => {
                container.style.display = 'none';
                box.style.display = 'none';
            }, 700);
        } else {
            document.getElementById("blinkId").style.display = "none";
            document.getElementById(`line1${randomN}`).style.display = "inline";
            document.getElementById(`line2${randomN}`).style.display = "inline";
            document.getElementById(`line3${randomN}`).style.display = "inline";
            if (counterClick >= 2) {
                document.getElementById("root").style.height = "100%";
                document.location.hash = "#main";
                setTimeout(() => {
                    container.style.display = 'none';
                    box.style.display = 'none';
                    document.getElementById(`line1${randomN}`).style.display = "none";
                    document.getElementById(`line2${randomN}`).style.display = "none";
                    document.getElementById(`line3${randomN}`).style.display = "none";
                }, 700);
            } else {
                let timeout = 1700;

                function meow(elId, strP) {
                    let i1 = 0;
                    let newString1 = "";
                    let stringL = strP;
                    timeout += stringL.length * 60;
                    const printStr = setInterval(function () {
                        newString1 += stringL[i1++];
                        document.getElementById(elId).innerHTML = newString1 + "</br>";
                        if (i1 >= stringL.length) {
                            clearInterval(printStr);
                        }
                    }, 60);
                }

                document.getElementById(`line3${randomN}`).style.color = "#ec4e17";
                setTimeout(() => {
                    meow(`line3${randomN}`, "Meow")
                    document.getElementById(`line2${randomN}`).style.color = "#99ec8f";
                    timeout += 5000;
                }, 5000);
                setTimeout(() => {
                    document.getElementById(`line1${randomN}`).style.color = "#99ec8f";
                    meow(`line2${randomN}`, "Rendering a result")
                    timeout += 3000;
                }, 3000)
                timeout += 3000;
                meow(`line1${randomN}`, "Building an optimized output")

                setTimeout(() => {
                    document.getElementById("root").style.height = "100%";
                    document.location.hash = "#main";
                }, timeout)
                setTimeout(() => {
                    container.style.display = 'none';
                    box.style.display = 'none';
                }, timeout + 700);
            }
        }
    }

    // setting title
    function setTitle() {
        let t = document.location.href.split('/');

        switch (t[3]) {
            case "projects#main":
            case "projects":
                return "Projects";
            case "bookmarks#main":
            case "bookmarks":
                return "Bookmarks";
            case "contacts#main":
            case "contacts":
                return "Contact";
            case "creation#main":
            case "creation":
                return "Creation";
            default:
                return "404";
        }
    }

    // animation
    let i = 0;
    let string = "cd " + setTitle() + "/ ";
    let newString = "";
    const printStr = setInterval(function () {
        newString += string[i++];
        document.getElementById("code").innerHTML = newString + "</br>";
        if (i >= string.length) {
            clearInterval(printStr);
        }
    }, 100);

    // checking if link has #main
    const hrefChecker = document.location.href.split('#');
    let disableWriter = {};
    if (hrefChecker[hrefChecker.length - 1] === 'main') {
        document.getElementById("root").style.height = "100%";
        disableWriter = {display: 'none'}
    }

    function handler({ key }) {
        if (ENTER_KEY.includes(String(key))) {
            document.getElementById("clicker").click()
        }
    }
    useEventListener('keydown', handler);

    return (
        <>
            <Helmet>
                <title>{setTitle() + ` - krvvko`}</title>
            </Helmet>
            <div className="creation-header" style={disableWriter}>
                <a className="creation-header-a" id="clicker" onClick={handleClick}>
                    <div className="main-anim-container">
                        <div className="anim-container">
                            <h3 className="root-anim">root@krvvko-me:~#</h3>
                            <div className="code-blink-js">
                                <h3 id="code"></h3>
                                <h3 id="blinkId" className="blink">|</h3>
                            </div>
                        </div>
                        <h3 className="anim-lines" style={{display: "none"}} id={'line1' + randomN}></h3>
                        <h3 className="anim-lines" style={{display: "none"}} id={'line2' + randomN}></h3>
                        <h3 className="anim-lines" style={{display: "none"}} id={'line3' + randomN}></h3>
                        <div className="anim-container invisible">
                            <h3 className="root-anim">root@krvvko-me:~#</h3>
                            <h3>cd {setTitle()}/|</h3>
                        </div>
                    </div>

                </a>
            </div>
        </>
    )
}

export default Title;