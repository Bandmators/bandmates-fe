import { instrument } from '@/constant/instrument';

export type InstrumentType = (typeof instrument)[number]['name'];
