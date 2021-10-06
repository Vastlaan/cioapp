import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  position: relative;
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding:${p=>p.padding?p.padding:'0'};
  background-color: ${p=>p.backgroundColor?p.backgroundColor:'transparent'};
`

export const ContainerNarrow = styled.div`
  max-width: 1384px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p)=>p.color?p.color:'transparent'};
  padding: 0;
`
export const SectionNarrowAnimated = styled.section`
  max-width: 1384px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p)=>p.color?p.color:'transparent'};
  padding: 1.4rem;
  transform: translateY(100px);
  opacity: 0;
  visibility: hidden;
`