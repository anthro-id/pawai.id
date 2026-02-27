// Courtesy of Tabler Icons

export const IconPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeWidth={2}>
    <title>Pin</title>
    
    <path stroke={"none"} d="M0 0h24v24H0z" fill="none"/>

    <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
  </svg>
);

export const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <title>Globe</title>
    
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);

export const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <title>Phone</title>
    
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  </svg>
);

export const IconArrowLeft = (props: Record<"w" | "h", number>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.w} height={props.h} viewBox="4 5 16 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <title>Arrow (Left)</title>
    
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 12l14 0" />
    <path d="M5 12l6 6" />
    <path d="M5 12l6 -6" />
  </svg>
);

export const IconArrowRight = (props: Record<"w" | "h", number>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.w} height={props.h} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="4 5 16 14">
    <title>Arrow (Right)</title>
    
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" /><path d="M13 18l6 -6" />
    <path d="M13 6l6 6" />
  </svg>
);

export const IconPatreon = (props: Record<"w" | "h", number>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.w} height={props.h} viewBox={`0 0 24 24`} fill="currentColor">
    <title>Patreon Logo</title>
    
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7.462 3.1c2.615 -1.268 6.226 -1.446 9.063 -.503c2.568 .853 4.471 3.175 4.475 5.81c.004 3.061 -1.942 5.492 -4.896 6.243c-1.693 .43 -2.338 .75 -2.942 1.582c-.238 .328 -.45 .745 -.796 1.533l-.22 .5c-1.146 2.601 -2.156 3.762 -4.236 3.735c-2.232 -.03 -3.603 -1.742 -4.313 -4.48c-.458 -1.768 -.617 -3.808 -.594 -5.876c.044 -3.993 1.42 -7.072 4.46 -8.545z" />
  </svg>
);