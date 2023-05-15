import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { VNode } from 'preact';
import { render } from 'preact-render-to-string';
import { useEffect, useRef } from 'preact/hooks';

interface LeafletMapProps {
  class?: string;
  markerLatLng: [number, number];
  popup: VNode;
}

export default function LeafletMap({
  class: className,
  markerLatLng,
  popup,
}: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: markerLatLng,
      zoom: 13,
      zoomControl: false,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    const marker = L.marker(markerLatLng).addTo(map);
    marker.bindPopup(render(popup)).openPopup();
  }, []);
  return <div ref={mapRef} class={className}></div>;
}
