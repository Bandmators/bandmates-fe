import { instrument } from '@/constants/instrument';

export type InstrumentType = (typeof instrument)[number]['name'];
