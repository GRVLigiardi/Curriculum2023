import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Gilles Renzo Vito  <br />
          LIGIARDI
        </SectionTitle>
        <SectionText>
        DevPassionate graduated in Web and Mobile Development. Born in France, living in Rosario Argentina, fluent in French, Spanish and English.
        </SectionText>
        <Button onClick={() => window.location = 'https://grv-timeline.netlify.app/'}>Timeline</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;