"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Library } from "@googlemaps/js-api-loader";
import { useJsApiLoader } from "@react-google-maps/api";
import { IoBusinessSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const libs: Library[] = ["core", "maps", "places", "marker"];

const mapInfoCard = (title: string, content: string) => {
  return `  <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">${title}</h2>
      <p>${content}</p>
    </div>`;
};

export default function Maps() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  // const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [repairServices, setRepairServices] = useState<
    { name: string | undefined; address: string | undefined }[] | null
  >(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libs,
  });

  const mapRef = React.useRef<HTMLDivElement>(null);
  const placeAutocompleteRef = React.useRef<HTMLInputElement>(null);

  //   generate map
  useEffect(() => {
    if (isLoaded) {
      const mapOptions = {
        center: { lat: 51.736099, lng: 0.4798 },
        Zoom: 8,
        mapId: "MY_MAP_ID",
      };
      const map = new google.maps.Map(
        mapRef.current as HTMLDivElement,
        mapOptions
      );
      const englandBounds = new google.maps.LatLngBounds();
      new google.maps.LatLng({
        lat: 50.15112486684287,
        lng: -5.393000436196274,
      });
      new google.maps.LatLng({
        lat: 54.48496079722625,
        lng: -0.8226880266706461,
      });

      const autocomplete = new google.maps.places.Autocomplete(
        placeAutocompleteRef.current as HTMLInputElement,
        {
          bounds: englandBounds,
          fields: ["formatted_address", "geometry", "name"],
          componentRestrictions: { country: "uk" },
        }
      );

      setAutocomplete(autocomplete);
      setMap(map);
    }
  }, [isLoaded]);

  //   autocomplete

  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        setSelectedPlace(place.formatted_address as string);
        const position = place.geometry?.location;

        if (position) {
          searchTailorServices(position);
          if (map) {
            map.setCenter(position);
          }
        }
      });
    }
  }, [autocomplete, map]);

  //   search for tailoring services
  //   useEffect(() => {
  //     if (repairServices && repairServices.length > 0) {
  //       const service = repairServices[0]?.name?.split(",")[0];
  //       const position = new google.maps.LatLng(51.736099, 0.4798);
  //       setMarker(position, service);
  //     }
  //   });

  function setMarker(position: google.maps.LatLng, name: string | undefined) {
    if (!map) return;

    map.setCenter(position);
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Marker",
    });
    const infoCard = new google.maps.InfoWindow({
      position: position,
      content: mapInfoCard(name || "", selectedPlace!),
      maxWidth: 200,
    });
    infoCard.open({
      map: map,
      anchor: marker,
    });
  }

  function searchTailorServices(position: google.maps.LatLng) {
    const service = [
      "tailor",
      "seamstress",
      "alterations",
      "tailoring",
      "clothing repair",
      "clothing alterations",
    ];
    const request = {
      location: position,
      radius: 5000,
      query: service.join(" OR "),
    };

    if (!map) return;

    const serviceRequest = new google.maps.places.PlacesService(
      map as google.maps.Map
    );
    serviceRequest.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const servicesWithAddresses = results.map((result) => ({
          name: result.name,
          address: result.formatted_address,
        }));
        setRepairServices(servicesWithAddresses);
        console.log(servicesWithAddresses);
      } else {
        console.error("Places service error:", status);
      }
    });

    serviceRequest.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        results.forEach((result) => {
          if (result.geometry) {
            const marker = new google.maps.marker.AdvancedMarkerElement({
              position: result.geometry.location,
              map: map,
              title: result.name,
            });
          }
        });
      } else {
        console.error("Places service error:", status);
      }
    });

    // serviceRequest.textSearch(request, (results, status) => {
    //   if (status === google.maps.places.PlacesServiceStatus.OK && results) {
    //     const services = results.map((result) =>

    //         result.name).join(", ");
    //     setRepairServices(services);
    //     console.log(services);
    //   } else {
    //     console.error("Places service error:", status);
    //   }
    // });
  }

  function displayTailoringServices(results: google.maps.places.PlaceResult[]) {
    results.forEach((result) => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: result.geometry?.location,
        title: result.name,
      });
      marker.addListener("click", () => {
        const infoCard = new google.maps.InfoWindow({
          content: mapInfoCard(
            result.name as string,
            result.vicinity as string
          ),
          maxWidth: 200,
        });
        infoCard.open({
          map: map,
          anchor: marker,
        });
      });
    });
  }

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <h3 className="md:pt-8 pb-4">
            Enter your location to find local repair and alteration services
          </h3>

          <input
            ref={placeAutocompleteRef}
            type="text"
            placeholder="Enter a location"
            className="outline outline-smokeGrey rounded-md p-2 w-full"
          />
          <label htmlFor="place">
            Showing Results For <b>{selectedPlace} </b>
          </label>
        </div>
        {repairServices && repairServices.length > 0 ? (
          <div className="flex flex-col max-w-2xl items-start mb-8">
            {repairServices.map((service, index) => (
              <ul className="w-full" key={index}>
                <li className="border-b py-2">
                  <div className="text-start flex p-1">
                    <IoBusinessSharp className="h-4 w-4 mt-1 mr-1" />
                    <p>
                      <b>Business-</b>
                      {service.name}
                    </p>
                  </div>
                  <div className="text-start flex p-1">
                    <FaLocationDot className="h-4 w-4 mt-1 mr-1" />

                    <p>
                      <b>Address-</b>
                      {service.address}
                    </p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        ) : (
          <p>Search to see results</p>
        )}
        {isLoaded ? (
          <div
            className="md:h-[600px] md:w-[600px] h-[350px] w-[350px] mx-auto"
            ref={mapRef}
          ></div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
