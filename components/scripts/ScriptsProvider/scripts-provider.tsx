import { Tawkto } from '../Tawkto/tawkto';

type IScriptsProvider = {
  tawktoSrc?: string;
};

export function ScriptsProvider({ tawktoSrc }: IScriptsProvider) {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return tawktoSrc ? <Tawkto source={tawktoSrc} /> : null;
}
