import { NextRouter } from "next/router";

export const extractPath = (router: NextRouter): string[] => {
  const { pathname } = router;
  if (pathname === '/') {
    return ['home'];
  } else {
    const paths = pathname.split('/');
    paths[0] = 'home';
    return paths;
  }
};