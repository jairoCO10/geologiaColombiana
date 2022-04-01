import { Map, TileLayer, LayersControl, withLeaflet, ScaleControl, FeatureGroup, WMSTileLayer } from "react-leaflet";
import React, { Component } from "react";
import L from "leaflet";
import Choro from "./Mapa";
import Test from "./test";
import FullscreenControl from "react-leaflet-fullscreen";
import PrintControlDefault from "react-leaflet-easyprint";
const PrintControl = withLeaflet(PrintControlDefault);

const MAP_PROVIDERS = {
  google: {
    satellite: "Google Satellite",
    roadmap: "Google Roadmap"
  },
  osm: "OpenStreetMap",
  yandex: {
    satellite: "Yandex Satellite",
    roadmap: "Yandex Roadmap"
  },
  mapbox: "Mapbox"
};

const tiles = [
  {
    attribution: "&copy; Google",
    name: MAP_PROVIDERS.google.satellite,
    checked: false,
    url: "//mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
    crs: L.CRS.EPSG3857
  },
  {
    attribution: "&copy; Google",
    name: MAP_PROVIDERS.google.roadmap,
    checked: true,
    url: "//mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    crs: L.CRS.EPSG3857
  },
  {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    name: MAP_PROVIDERS.osm,
    checked: false,
    url: "https://srvags.sgc.gov.co/arcgis/rest/services/Atlas_Geologico_2015/Atlas_Geologico_Colombiano_2015/MapServer/export?dpi=96&amp;transparent=true&amp;format=png8&amp;bbox=-8868508.174734218%2C-193316.6222711962%2C-7227252.3033953495%2C985648.1019990488&amp;bboxSR=102100&amp;imageSR=102100&amp;size=671%2C482&amp;f=image",
    crs: L.CRS.EPSG3857
  },

];

class App extends Component {
  state = { geojson: {} };
  

  fetch1() {
    fetch("https://rawcdn.githack.com/jairoCO10/mapaGeologicoColombiano/15ec6273e49c1045735be9810e2d4088b191a389/grupo2/mapa%20geologico%20grande2.geojson"
    )
      .then((response) => response.json())
      .then((json) => this.setState({ geojson: json }))
      .then(console.log);
  }

  fetch2() {
    fetch("https://rawcdn.githack.com/jairoCO10/mapaGeologicoColombiano/15ec6273e49c1045735be9810e2d4088b191a389/grupo2/mapa%20geologico%20grande1.geojson"
    )
      .then((response) => response.json())
      .then((json) => this.setState({ geojson: json }))
      .then(console.log);

  }

  componentDidMount() {
    this.fetch1();
    this.fetch2()
  }
  // fetchData = () => {
  //    fetch(
  //      "https://rawcdn.githack.com/jairoCO10/mapaGeomastic/8bb32f50ec1deda349062d0569723977bd9d95be/database/mapa1.geojson"
  //    )
  //      .then((response) => response.json())
  //      .then((geojson) => {
  //        this.setState({ geojson, loaded: 2 });
  //      });
  //  };

  render() {
    return <Leaf geojson={this.state.geojson} />;
  }
}

class Leaf extends Component {
  render() {
    const position = [4.9897471840457, -73.13893127441406];

    return (
      <Map center={position} zoom={6} style={{ height: "100vh" }}>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FullscreenControl position="topleft" />
        <Test />
        <LayersControl position="bottomright">
          {tiles.map(({ attribution, checked, name, subdomains, url }) => {
            const tileLayerProps = {
              attribution,
              url,
              name
            };
            if (subdomains) {
              tileLayerProps.subdomains = subdomains;
            }
            return (
              <LayersControl.BaseLayer
                checked={!!checked}
                key={name}
                name={name}>
                <TileLayer maxNativeZoom={19} {...tileLayerProps} />

              </LayersControl.BaseLayer>
            );
          })}
          <LayersControl.Overlay name="Mapa Geologico" >
            <FeatureGroup>
              {/* <WMSTileLayer
              
              url="http://srvags.sgc.gov.co/arcgis/services/Atlas_Geologico_Colombiano/Atlas_Geologico_Colombia/MapServer/WMSServer"
              pane= 'pane_UnidadCronoestratigrfica_1'
              format= 'image/png'
              uppercase= {true}
              transparent= {true}
              continuousWorld= {true}
              tiled= {true}
              info_format= 'text/html'
              opacity= {1}
              identify= {false}
              attribution= ''
            /> */}
            


              <TileLayer
              attribution=""
              url="http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"/> 
              <TileLayer
                attribution=""
                url="https://www.colombiaenmapas.gov.co/?e=-84.46818979765041,-14.094687432873325,-15.474049172668742,23.281027561376582,4686&b=igac&l=85&u=0&t=33&servicio=85"/>
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
        <PrintControl
          position="topleft"
          sizeModes={["A4Portrait", "A4Landscape"]}
          hideControlContainer={true}
          title="Export as PNG"
          exportOnly
        />
        <ScaleControl />
        <Choro 
        geojson={this.props.geojson} 
        fillColor= "purple" 
        color="yellow" />
      </Map>
    );
  }
}

export default App;