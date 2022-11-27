import listings from "./listings.json";
import React from "react";

export const List = () => {
  return (
    <ul className="unstyled">
      {listings.map((listing) => (
        <li className="card m-3">
          <header className="fs-4 m-1">{listing.vendorName}</header>
          <div className="listing-content">
            <img
              className="vendor-image w-80 m-2"
              alt={listing.vendorName}
              src={listing.vendorImageURL}
            />
            <p>
              {listing.date} from {listing.startTime} to {listing.endTime}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${listing.latitude},${listing.longitude}`}
            >
              {listing.address}
            </a>
            <p>{listing.vendorPhone}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
