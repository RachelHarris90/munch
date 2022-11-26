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
              className="vendor-image"
              alt={listing.vendorName}
              src={listing.vendorImageURL}
            />
            <div>
              <p>{listing.vendorPhone}</p>
              <p>{listing.date}</p>
              <p>
                {listing.startTime} - {listing.endTime}
              </p>
              <p>{listing.address}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
