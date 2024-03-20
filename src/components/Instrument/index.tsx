import styled from '@emotion/styled';

import { instrument } from '@/constants/instrument';
import { InstrumentType } from '@/types/instrument';

interface InstrumentProps {
  variant: InstrumentType;
}

const Instrument = ({ variant }: InstrumentProps) => {
  const getCode = () => {
    const code = instrument.find(item => item.name === variant);
    return code ? `#${code.code}` : 'var(--primary)';
  };

  return <InstrumentTag code={getCode()}>{variant}</InstrumentTag>;
};

export default Instrument;

const InstrumentTag = styled.span<{ code: string }>`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  &::before {
    width: 4px;
    height: 4px;
    content: ' ';
    display: inline-block;
    background-color: ${({ code }) => code};
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;
