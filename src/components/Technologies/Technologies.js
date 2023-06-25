import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      After a <a className='LinkedText' href="https://github.com/GRVLigiardi/CobrArWeb">short-term course</a> I graduate in June 2023 as a <a className='LinkedText' href="https://www.francecompetences.fr/recherche/rncp/37674/">Full Stack Web and Mobile Developer</a> in France presenting the CobrAr Application Project.
      I created <a className='LinkedText' href="https://github.com/GRVLigiardi/CobrArWeb">CobrAr</a> using C# ASP.NET / SQL.<br />
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js / Bootstrap / Bootstrap Studio / Razor / Html / CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Graduated .NET C# Web and Mobile Developer. <br />
            Also experience with SQL Server, Node.js and MongoDB.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Balsamiq, Figma, Adobe XD.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;