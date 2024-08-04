"use client";
import { use, useEffect, useState } from "react";
import React from "react";
import { Library, Loader } from "@googlemaps/js-api-loader";
import { useJsApiLoader } from "@react-google-maps/api";
import { Zoom } from "@mui/material";

const libs: Library[] = ["core", "maps", "places", "marker"];

const mapInfoCard = (title: string, content: string) => {
  return `  <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">${title}</h2>
      <p>${content}</p>
    </div>`;
};

// TODO: STYLE MAP AND AUTO COMPLETE

export default function Maps() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  // const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [repairServices, setRepairServices] = useState<string | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libs,
  });

  const mapRef = React.useRef<HTMLDivElement>(null);
  const placeAutocompleteRef = React.useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        // if (!place.geometry || !place.geometry.location) {
        //   return;
        // }
        setSelectedPlace(place.formatted_address as string);
        const position = place.geometry?.location;

        if (position) {
          setMarker(position, place.name as string);
          searchTailorServices(position);
        }
      });
    }
  }, [autocomplete]);

  useEffect(() => {
    if (repairServices && repairServices.length > 0) {
      const service = repairServices.split(",")[0];
      const position = new google.maps.LatLng(51.736099, 0.4798);
      setMarker(position, service);
    }
  });

  function setMarker(position: google.maps.LatLng, name: string) {
    if (!map) return;

    map.setCenter(position);
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Marker",
    });
    const infoCard = new google.maps.InfoWindow({
      position: position,
      content: mapInfoCard(name, selectedPlace!),
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
      //   name: ,
    };

    if (!map) return;

    const serviceRequest = new google.maps.places.PlacesService(
      map as google.maps.Map
    );
    serviceRequest.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const services = results.map((result) => result.name).join(", ");
        setRepairServices(services);
        console.log(services);
      } else {
        console.error("Places service error:", status);
      }
    });
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

    //   const position = result.geometry?.location;
    //   if (position) {
    //     if (result.name) {
    //       setMarker(position, result.name);
    //     }
    //   }
  }

  return (
    <div>
      <div>
        <input
          ref={placeAutocompleteRef}
          type="text"
          placeholder="Enter a location"
        />
        <label htmlFor="place">{selectedPlace}</label>
        {isLoaded ? (
          <div className="h-[600px] w-[600px]" ref={mapRef}></div>
        ) : (
          <div>Loading...</div>
        )}
        {repairServices && repairServices.length > 0 ? (
          <div>
            <p>{repairServices}</p>
          </div>
        ) : (
          <p>No tailoring services found.</p>
        )}
      </div>
    </div>
  );
}
