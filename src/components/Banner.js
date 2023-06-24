import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeliting] =useState(false);
    const toRotate = ["FullStack Developer", "Java/Python Dev", "Web/Movile Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText) {
            setIsDeliting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeliting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Welcome to my Portafolio</span>
                        <h1>{`Hi I'm Johan `}<span className="wrap">{text}</span></h1>
                        <p>Computer and systems engineer with experience in Java Full Stack development, web designer and capable in Java, Python, JavaScript, HTML and CSS programming and various frameworks such as Spring, Django, Angular, React, React Native as well as SQL, MySQL and MongoDB Proficient in object oriented programming, microservices and cloud development. Familiar with agile methodologies and the use of modern tools and platforms such as Docker and Github.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}