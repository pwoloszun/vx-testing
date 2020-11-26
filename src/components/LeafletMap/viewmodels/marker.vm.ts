import { LatLng } from './lat-lng.interface';
import { L } from './leaflet.interface';

const HIGHLIGHTED_ICON = 'img/marker-icon-2x.png';

export type MarkerEventListener = (obj: LatLng) => void;

const ICONS = {
  default: new L.Icon.Default(),
  highlighted: new L.icon({
    iconUrl: HIGHLIGHTED_ICON,
    iconSize: [50, 82],
    iconAnchor: [25, 82],
    popupAnchor: [-3, -76],
  })
};

export class MarkerViewModel {
  private marker: any;
  private object: LatLng;

  constructor(leafletMarker: any, object: any) {
    this.marker = leafletMarker;
    this.object = object;
  }

  on(eventName: string, listenerFn: MarkerEventListener): void {
    this.marker.on(eventName, () => {
      listenerFn(this.object);
    });
  }

  toggleHighlight(isHighlighted: boolean): void {
    this.marker.setIcon(isHighlighted ? ICONS.highlighted : ICONS.default);
  }

  isMatching(object: LatLng): boolean {
    return this.object === object;
  }
}
