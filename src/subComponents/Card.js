import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';

const Box = styled(motion.li)`
  /* width: 100% allows the Grid to define the size, 
     max-width prevents it from becoming too huge on wide screens */
  width: 100%;
  max-width: 22rem; 
  min-height: 460px;
  background-color: #818589;
  color: ${props => props.theme.body};
  padding: 1.2rem; /* Reduced padding */
  border-radius: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  }
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: calc(0.9em + 0.5vw); /* Slightly smaller */
  margin-bottom: 0.8rem;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 160px; /* Reduced image height for a smaller card profile */
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 0.8rem;
  border: 1px solid transparent;

  ${Box}:hover & {
    border: 1px solid ${props => props.theme.text};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.p`
  font-size: calc(0.75em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  line-height: 1.4;
  /* Limits description height to keep cards uniform */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.8rem;

  ${Box}:hover & {
    border-top: 2px solid ${props => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 0.6rem;
  font-size: calc(0.65em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
`;

const Link = styled.a`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.4rem 1.5rem;
  border-radius: 0 0 0 40px;
  font-size: calc(0.8em + 0.3vw);
  font-weight: 600;

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  
  svg {
    fill: ${props => props.theme.body};
  }

  ${Box}:hover & {
    svg {
      fill: ${props => props.theme.text};
    }
  }
`;

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: 'spring', duration: 0.5 }
  }
};

const Card = (props) => {
  const { id, name, image, description, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <TopContent>
        <Title>{name}</Title>
        <ImageBox>
          <img src={image} alt={name} />
        </ImageBox>
        <Description>{description}</Description>
        <Tags>
          {tags.map((t, index) => (
            <Tag key={index}>#{t}</Tag>
          ))}
        </Tags>
      </TopContent>

      <Footer>
        <Link href={demo} target="_blank" rel="noreferrer">
          Visit
        </Link>
        <Git href={github} target="_blank" rel="noreferrer">
          <Github width={25} height={25} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;