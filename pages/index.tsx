import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const IndexPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) =>
    filter ? property.category.includes(filter) : true
  );

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center py-10 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p className="text-lg">Discover amazing properties around the world!</p>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap justify-center gap-4 my-6">
        {["All", "Beachfront", "Countryside", "City Center", "Mountain View"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category === "All" ? "" : category)}
            className={`px-4 py-2 rounded-full ${
              filter === category || (filter === "" && category === "All")
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Listings */}
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProperties.map((property, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{property.name}</h2>
            <p>{property.address.city}, {property.address.country}</p>
            <p>Rating: {property.rating}</p>
            <p>Price: ${property.price}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {property.category.map((cat, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{cat}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default IndexPage;
