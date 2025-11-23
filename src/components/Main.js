import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
// import { YinYang } from './AllSvgs'
import signature from "../assets/svg/Signature.svg"
import leetcode from "../assets/Images/LeetCode_Logo_black_with_text.svg"
import codeforces from "../assets/Images/Codeforces_logo.svg"
import codechef from "../assets/Images/CodeChef_Logo.svg"
import Intro from './Intro'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 45%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 45%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 4s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`
const Profiles = styled.div`
  position: absolute;
  top: 3rem;
  left: 11rem; // you might adjust this for smaller screens
  display: flex;
  gap: 1rem;
  z-index: 1;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.theme.text};
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;

    img {
      width: 100%;
      max-width: 70px; // max size for larger screens
      height: auto;    // maintain aspect ratio
    }

    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease;
    }
  }

  // Responsive adjustments
  @media (max-width: 768px) {
    left: 2rem;
    gap: 0.5rem;

    a img {
      max-width: 50px;
    }
  }

  @media (max-width: 480px) {
    top: 2rem;
    flex-direction: column;
    gap: 0.5rem;

    a img {
      max-width: 40px;
    }
  }
`



const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv click={click} />

            <Profiles>
                <motion.a
                    href="https://leetcode.com/munaimun"
                    target="_blank"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { type: 'spring', duration: 1.5, delay: 1.2 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img src={leetcode} alt="LeetCode" />
                </motion.a>

                <motion.a
                    href="https://codeforces.com/profile/munaimun_1948"
                    target="_blank"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { type: 'spring', duration: 1.5, delay: 1.4 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img src={codeforces} alt="Codeforces" />
                </motion.a>

                <motion.a
                    href="https://www.codechef.com/users/bruce_wayne23"
                    target="_blank"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { type: 'spring', duration: 1.5, delay: 1.6 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img src={codechef} alt="CodeChef" />
                </motion.a>
            </Profiles>



            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />

                {/* rotating logo */}
                <Center click={click}>
                    <img src={signature} alt='signature' onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span>click here ☝️</span>
                    <h3>Code is like humor. When you have to explain it, it’s bad.</h3>
                </Center>

                <Contact target="_blank" href="mailto:munaimunz@gmail.com">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        Say hi..
                    </motion.h2>
                </Contact>

                <BLOG to="/blog">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Blog
                    </motion.h2>
                </BLOG>

                <WORK to="/work" click={+click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Projects
                    </motion.h2>
                </WORK>

                <BottomBar>
                    <ABOUT to="/about" click={+click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About.
                        </motion.h2>
                    </ABOUT>

                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills.
                        </motion.h2>
                    </SKILLS>

                </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main
