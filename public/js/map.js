mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: listing.geometry.coordinates, // starting position [lng, lat]
      zoom: 10 // starting zoom
    });

const marker1 = new mapboxgl.Marker({ color: "red"})
.setLngLat(listing.geometry.coordinates)
.setPopup( new mapboxgl.Popup({offset: 25 })
.setHTML(`<h6><b>${listing.location}</b></h6><p>Exact Location!</p>`))
.addTo(map);