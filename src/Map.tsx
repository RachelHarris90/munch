// import React from "react";

// interface IMap {
//   mapType: google.maps.MapTypeId;
//   mapTypeControl?: boolean;
// }

// type GoogleLatLng = google.maps.LatLng;
// type GoogleMap = google.maps.Map;

// export const Map: React.FC<{}> = () => {
//   const ref = React.useRef<HTMLDivElement>(null);
//   const [map, setMap] = React.useState<GoogleMap>();

//   const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
//     if (ref.current) {
//       setMap(
//         new google.maps.Map(ref.current, {
//           zoom: zoomLevel,
//           center: address,
//           // mapTypeControl: mapTypeControl,
//           streetViewControl: false,
//           rotateControl: false,
//           scaleControl: true,
//           fullscreenControl: false,
//           panControl: false,
//           gestureHandling: "cooperative",
//           // mapTypeId: mapType,
//           draggableCursor: "pointer",
//         })
//       );
//     }
//   };

//   const defaultMapStart = (): void => {
//     const defaultAddress = new google.maps.LatLng(65.166013499, 13.3698147);
//     initMap(4, defaultAddress);
//   };

//   const startMap = (): void => {
//     if (!map) {
//       defaultMapStart();
//     }
//   };

//   React.useEffect(startMap, [map]);

//   return (
//     <div className="map-container">
//       <div ref={ref} className="map-container__map"></div>
//     </div>
//   );
// };
