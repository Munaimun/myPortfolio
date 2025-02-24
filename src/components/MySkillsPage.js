import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  min-height: 100vh; /* Allows scrolling */
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 80vw; /* Full width on smaller screens */
    height: auto;
    margin-bottom: 2rem;
  }
`


const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        Experties
                    </Title>

                    <Description>
                        I love to write code that is clear, simple, and powerful.
                    </Description>

                    <Description>
                        <strong>Languages</strong>
                        <ul>
                            <li>
                                JavaScript, TypeScript, Python
                            </li>
                        </ul>
                    </Description>

                    <Description>
                        <strong>Databases</strong>
                        <ul>
                            <li>
                                MySQL, Firebase, MongoDB
                            </li>
                        </ul>
                    </Description>

                    <Description>
                        <strong>Problem Solving</strong>
                        <ul>
                            <li>
                                <a href='https://github.com/Munaimun/Problem_Solving' target='block'>LeetCode</a>
                            </li>

                        </ul>
                    </Description>

                </Main>


                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend Developer
                    </Title>
                    {/* <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description> */}
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            React.js, Next.js, HTML, CSS, Tailwind CSS, Styled Components
                        </p>
                    </Description>

                    <Description>
                        <strong>Backend</strong>
                        <p>
                            REST APIs, Node.js(basic)
                        </p>
                    </Description>


                    <Description>
                        <strong>Tools & Platforms</strong>
                        <p>
                            Context API, Redux, Git, GitHub, Jira, Figma
                        </p>
                    </Description>


                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
