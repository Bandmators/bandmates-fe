import styled from '@emotion/styled';

import { InstrumentType } from '@/types/instrument';

import Instrument from '../Instrument';

interface WorkMatesProps {
  bands: InstrumentType[];
}

const WorkBands = ({ bands }: WorkMatesProps) => {
  return (
    <WorkBandList>
      {bands.map(band => (
        <WorkMateListItem key={band}>
          <Instrument variant={band} />
        </WorkMateListItem>
      ))}
    </WorkBandList>
  );
};
export default WorkBands;

const WorkBandList = styled.ul`
  margin: 0px;
  padding: 0px;
`;
const WorkMateListItem = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
`;
