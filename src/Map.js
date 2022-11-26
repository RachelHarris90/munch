// import { Wrapper } from "@googlemaps/react-wrapper";
// import React from "react";

// const render = (status) => {
//   return <h1>{status}</h1>;
// };

// export const Map = () => {
//   const ref = React.useRef(null);
//   const [map, setMap] = React.useState();

//   React.useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);

//   return (
//     <Wrapper apiKey={"AIzaSyCutbkwi3dtdAxCUhaIMJBf4KscMTzxK5I"} render={render}>
//       <div ref={ref} />;
//     </Wrapper>
//   );
// };
