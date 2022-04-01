
import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-choropleth";

function Choro(props) {
  const { map } = useLeaflet();

    if (Object.keys(props.geojson).length > 0) {
      L.choropleth(props.geojson, {
        style:(feature) => {
          let style = {
            fillOpacity: 1,
            fillColor: "black",
            color: "white",
            weight: 2,
            opacity: 1,
            texture: "circle"
            
          };
          switch (feature.properties.Símbolo_U) {
            case "Q2-m":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF4E1",
                color: "black",
                weight: 2,
                opacity: 1,
                texture: "circle"
                
              };
              break;
            case "Q-al":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF4E9",
                color: "black",
                "border-bottom": "solid 1px grey",
                width: "100%",
                height: "50px",
                weight: 2,
                opacity: 1,
                texture: "line"

              };
              break;
              case "Q2-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF4E9",
                color: "#73B2FD",
                width: "100%",
                height: "50px",
                weight: 2,
                opacity: 1,
                texture: "line"
              };
              break;
              case "K2-Vu7":
              style = {
                fillOpacity: 1,
                fillColor: "#b9d15e",
                color: "#ff00c5",
                width: "100%",
                height: "50px",
                weight: 2,
                opacity: 1
              };
              break;
              case "n3n4-Vm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF164",
                color: "#73B2FD",
                width: "100%",
                height: "50px",
                weight: 2,
                opacity: 1
              };
              break;
              case "N1-VCm":
              style = {
                fillOpacity: 1,
                fillColor: "#ff9650",
                color: "#FF9650",
                width: "100%",
                height: "50px",
                weight: 2,
                opacity: 1
              };
              break;
              case "e9n1-Vf":
              style = {
                fillOpacity: 1,
                fillColor: "#FFEF42",
                color: "#FF5500",
                width: "100%",
                height: "50px",
                weight: 2,
                opacity: 1
              };
              break;
            case "N2-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "orange",
                color: "#fff",
                weight: 2,
                opacity: 1
              };
              break;
            case "k2k6-Sm7":
              style = {
                fillOpacity: 1,
                fillColor: "#E5E78F",
                color: "#41AA54",
                weight: 2,
                opacity: 1
              };
              break;
            case "n4n6-Hi":
              style = {
                fillOpacity: 1,
                fillColor: "pink",
                color: "yelllow",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q-p":
              style = {
                fillOpacity: 1,
                fillColor: "orange",
                color: "green",
                weight: 2,
                opacity: 1
              };
              break;
            case "PP-Mmg1":
              style = {
                fillOpacity: 1,
                fillColor: "#ff69b4",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "J1J2-VCct":
              style = {
                fillOpacity: 1,
                fillColor: "#82CEEC",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "n3n5-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF274",
                color: "#CDAA66",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Vm7":
              style = {
                fillOpacity: 1,
                fillColor: "#B9D15E",
                color: "#F400BC",
                weight: 2,
                opacity: 1
              };
              break;
            case "T-Mbg3":
              style = {
                fillOpacity: 1,
                fillColor: "#954B97",
                color: "#E4C5E1",
                weight: 2,
                opacity: 1
              };
              break;
            case "E1-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#F7B67D",
                color: "#894444",
                weight: 2,
                opacity: 1
              };
              break;
            case "O-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#07FBF0",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q-t":
              style = {
                fillOpacity: 1,
                fillColor: "#eee8aa",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "MP-Pf1":
              style = {
                fillOpacity: 1,
                fillColor: "#d2691e",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "MP-Mmbg1":
              style = {
                fillOpacity: 1,
                fillColor: "#f4a460",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "NP-VCc":
              style = {
                fillOpacity: 1,
                fillColor: "#cd853f",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "NP-Pm":
              style = {
                fillOpacity: 1,
                fillColor: "#bc8f8f",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "N1-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#FFEC00",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "e6e9-Sct":
              style = {
                fillOpacity: 1,
                fillColor: "#F9C080",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b1k1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#B7D58F",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q-ca":
              style = {
                fillOpacity: 1,
                fillColor: "#eee8aa",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "E3N1-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#ffd700",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q-e":
              style = {
                fillOpacity: 1,
                fillColor: "#f0e68c",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q1-ca":
              style = {
                fillOpacity: 1,
                fillColor: "#fffacd",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "k6E1-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#D3C2A8",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "k5E1-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#BAA173",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "N2Q1-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#B9BAA9",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "E1-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#fddeb2",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b1-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#AABC80",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "DC-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#D1AD6B",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "k1k4-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#DAE182",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "E3N1-Sct":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF164",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "NP3-Pf":
              style = {
                fillOpacity: 1,
                fillColor: "#E64C00",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b6k6-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#D0DC77",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "MP3NP1-Mag2":
              style = {
                fillOpacity: 1,
                fillColor: "#FAC080",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "N1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFEC00",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "T-Mmg3":
              style = {
                fillOpacity: 1,
                fillColor: "#954B97",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Mbg8":
              style = {
                fillOpacity: 1,
                fillColor: "#B9D15E",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b1b2-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#ABCF83",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "J2J3-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#BCE3F9",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "J1-Sct":
              style = {
                fillOpacity: 1,
                fillColor: "#00AFE8",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "J-Vf":
              style = {
                fillOpacity: 1,
                fillColor: "#00AFE3",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#9FC86D",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b2k1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#C3DA99",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            /////////////7
            case "J-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#00AADD",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
                ////////////////////
              };
              break;
            case "k2k6-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#E5E78F",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "E2n1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FBD6B7",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#9FC86D",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b6k2-Mmbg":
              style = {
                fillOpacity: 1,
                fillColor: "#C5D76A",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Pu8":
              style = {
                fillOpacity: 1,
                fillColor: "#B9D15F",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "E2-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#F9C189",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "εO-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#92AB72",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#B9D15E",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "N1-St":
              style = {
                fillOpacity: 1,
                fillColor: "#FFEC00",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b5k6-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#D0DC77",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "E1-St":
              style = {
                fillOpacity: 1,
                fillColor: "#F7B67D",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "k6E1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#fbca8c",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "J2J3-VCc":
              style = {
                fillOpacity: 1,
                fillColor: "#95CADF",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b2-Vf":
              style = {
                fillOpacity: 1,
                fillColor: "#ABCF83",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "D2D3-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#F5E3B5",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "C-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#6EAEB4",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "PT-VCm":
              style = {
                fillOpacity: 1,
                fillColor: "#954B97",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "P-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#E45C41",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "εO-Mbg":
              style = {
                fillOpacity: 1,
                fillColor: "#92AB72",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "J-Hf":
              style = {
                fillOpacity: 1,
                fillColor: "#00AFE3",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q-g":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF49A",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "T-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#954B97",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "N2-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF6B1",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "n6n7-St":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF8C7",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "n6n7-S":
              style = {
                fillOpacity: 1,
                fillColor: "#92AB72",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "b4k1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#CDE0A4",
                height: "10px",
                "background-color": "red",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q2-l":
              style = {
                fillOpacity: 1,
                fillColor: "#FBF1EA",
                height: "10px",
  
                color: "#73B2FF",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF1C3",
                height: "10px",
                color: "#73B2FF",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "e3e4-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#F7B88F",
                height: "10px",
                color: "#FEE6AA",
                weight: 2,
                opacity: 1
              };
              break;
            case "n6n7-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF8C7",
                height: "10px",
                color: "#CDAA66",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "n3n5-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF274",
                height: "10px",
                color: "#CDAA66",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "e5e6-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF274",
                height: "10px",
                color: "#CDAA66",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "e5e6-St":
              style = {
                fillOpacity: 1,
                fillColor: "#F8C19C",
                height: "10px",
                color: "#FFFFCC",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "n3n5-St":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF274",
                height: "10px",
                color: "#CDAA66",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "e8n2-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFE8C0",
                height: "10px",
                color: "#FD9A52",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "n6n7-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF8C7",
                height: "10px",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "n5n6-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF48E",
                height: "10px",
                color: "#CDAA82",
                weight: 2,
                opacity: 1
              };
              break;
            case "n3n4-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF164",
                height: "10px",
                color: "#CDAA66",
                weight: 2,
                opacity: 1
              };
              break;
            case "E2-Hi":
              style = {
                fillOpacity: 1,
                fillColor: "#F9C189",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q1-l":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF1C3",
                height: "10px",
                color: "#73B2FF",
                weight: 2,
                opacity: 1
              };
              break;
            case "e8n2-St":
              style = {
                fillOpacity: 1,
                fillColor: "#FFE8C0",
                height: "10px",
                color: "#FD9A52",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Pm":
              style = {
                fillOpacity: 1,
                fillColor: "#9FC86D",
                height: "10px",
                color: "#4C009C",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Pu":
              style = {
                fillOpacity: 1,
                fillColor: "#9FC86D",
                height: "10px",
                color: "#8700CD",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-VCm":
              style = {
                fillOpacity: 1,
                fillColor: "#9FC86D",
                height: "10px",
                color: "#FFFFCC",
                weight: 2,
                opacity: 1
              };
              break;
            case "C-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#6EAEB4",
                height: "10px",
                color: "#DCF0DC",
                weight: 2,
                opacity: 1
              };
              break;
            case "T-Pf":
              style = {
                fillOpacity: 1,
                fillColor: "#954B97",
                height: "10px",
                color: "#FEE692",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "K1-Pf":
              style = {
                fillOpacity: 1,
                fillColor: "#9FC86D",
                height: "10px",
                color: "#FFFF00",
                weight: 2,
                opacity: 1
              };
              break;
            case "P-Pf":
              style = {
                fillOpacity: 1,
                fillColor: "#E45C41",
                height: "10px",
                color: "#FFFFDE",
                weight: 2,
                opacity: 1
              };
              break;
            case "S4D1-Mbg":
              style = {
                fillOpacity: 1,
                fillColor: "#B8D9BF",
                height: "10px",
                color: "#70A800",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "b1?b4-Sct":
              style = {
                fillOpacity: 1,
                fillColor: "#B7D58F",
                height: "10px",
                color: "#46B478",
                weight: 2,
                opacity: 1
              };
              break;
            case "J3-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#BCE3F9",
                height: "10px",
                color: "#BCE3F9",
                weight: 2,
                opacity: 1
              };
              break;
            case "b4b6-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#CDE0A4",
                height: "10px",
                color: "#46B478",
                weight: 2,
                opacity: 1
              };
              break;
            case "OS1-Mbg":
              style = {
                fillOpacity: 1,
                fillColor: "#009982",
                height: "10px",
                color: "#BFE6CF",
                weight: 2,
                opacity: 1
              };
              break;
            case "OS1-Pf":
              style = {
                fillOpacity: 1,
                fillColor: "#009982",
                height: "10px",
                color: "#BFE6CF",
                weight: 2,
                opacity: 1
              };
              break;
            case "OS1-Mmg":
              style = {
                fillOpacity: 1,
                fillColor: "#009982",
                height: "10px",
                color: "#BFE6CF",
                weight: 2,
                opacity: 1
              };
              break;
            case "b2b5-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#C3DA99",
                height: "10px",
                color: "#46B478",
                weight: 2,
                opacity: 1
              };
              break;
            case "b5b6-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#D8E5B0",
                height: "10px",
                color: "#46B478",
                weight: 2,
                opacity: 1
              };
              break;
            case "b5k1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#D8E5B0",
                height: "10px",
                color: "#46B478",
                weight: 2,
                opacity: 1
              };
              break;
            case "k1k6-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#E5E78F",
                height: "10px",
                color: "#41AA54",
                weight: 2,
                opacity: 1
              };
              break;
            case "C2P-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#E45C41",
                height: "10px",
                color: "#FFFFDE",
                weight: 2,
                opacity: 1
              };
              break;
            case "b1-Sct":
              style = {
                fillOpacity: 1,
                fillColor: "#9EC979",
                height: "10px",
                color: "#46B478",
                weight: 2,
                opacity: 1
              };
              break;
            case "b6-Vf":
              style = {
                fillOpacity: 1,
                fillColor: "#D8E5B0",
                height: "10px",
                color: "#0A6E00",
                weight: 2,
                opacity: 1
              };
              break;
            case "b2b6-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#C3DA99",
                height: "10px",
                color: "#46B478",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "N2Q1-VCc":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF0B9",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "k1?k5?-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#DAE182",
                height: "10px",
                color: "#41AA54",
                weight: 2,
                opacity: 1
              };
              break;
            case "n4n6-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF381",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "e8n3-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#FBD6B7",
                height: "10px",
                color: "black",
                weight: 2,
                opacity: 1
              };
              break;
            case "e6e8-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#F9C189",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "N2-p":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF6B1",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "N2-Vi":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF6B1",
                height: "10px",
                color: "#FF8149",
                weight: 2,
                opacity: 1
              };
              break;
            case "PZ-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#A8C5A8",
                height: "10px",
                color: "#0A6E00",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "J-VCc":
              style = {
                fillOpacity: 1,
                fillColor: "#00AFE3",
                height: "10px",
                color: "#E2F4E0",
                weight: 2,
                opacity: 1
              };
              break;
            case "b5b6-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#D8E5B0",
                height: "10px",
                color: "#46B478",
                weight: 2,
                opacity: 1
              };
              break;
            case "b6k5-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#DAE182",
                height: "10px",
                color: "#41AA54",
                weight: 2,
                opacity: 1
              };
              break;
            case "e6e9-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#FDDEB2",
                height: "10px",
                color: "#FDDEB2",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "Q-vc":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF49A",
                height: "10px",
                color: "#FD9A52",
                weight: 2,
                opacity: 1
              };
              break;
            case "n1n2-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#FFEF42",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "Q-Vi":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF49A",
                height: "10px",
                color: "#FD9A52",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "E1E2-VCm":
              style = {
                fillOpacity: 1,
                fillColor: "#F9C189",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "n1n2-Hi":
              style = {
                fillOpacity: 1,
                fillColor: "#FFEF42",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "E3-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#FACA96",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "n2n3-Hi":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF054",
                height: "10px",
                color: "#FFAC36",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "N2-VCc":
              style = {
                fillOpacity: 1,
                fillColor: "#FFF6B1",
                height: "10px",
                color: "#FF5500",
                weight: 2,
                opacity: 1
              };
              break;
  
            
  
            case "e6e7-VCm":
              style = {
                fillOpacity: 1,
                fillColor: "#faccaa",
                height: "10px",
                color: "#ff5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "n1n2-St":
              style = {
                fillOpacity: 1,
                fillColor: "#ffef42",
                height: "10px",
                color: "#cdaa66",
                weight: 2,
                opacity: 1
              };
              break;
            case "n4n5-Vm":
              style = {
                fillOpacity: 1,
                fillColor: "#fff381",
                height: "10px",
                color: "#ff5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Pu7":
              style = {
                fillOpacity: 1,
                fillColor: "#b9d15e",
                height: "10px",
                color: "#8700cd",
                weight: 2,
                opacity: 1
              };
              break;
            case "n4n5-Pi":
              style = {
                fillOpacity: 1,
                fillColor: "#fff381",
                height: "10px",
                color: "#ff5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "N1-VCc":
              style = {
                fillOpacity: 1,
                fillColor: "#ffec00",
                height: "10px",
                color: "#ff5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-VCm5":
              style = {
                fillOpacity: 1,
                fillColor: "#9fc86d",
                height: "10px",
                color: "#ffffcc",
                weight: 2,
                opacity: 1
              };
              break;
            case "n6n7-VCc":
              style = {
                fillOpacity: 1,
                fillColor: "#fff8c7",
                height: "10px",
                color: "#ff5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Pf7":
              style = {
                fillOpacity: 1,
                fillColor: "#b9d15e",
                height: "10px",
                color: "#ff00c5",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Pm7":
              style = {
                fillOpacity: 1,
                fillColor: "#b9d15e",
                height: "10px",
                color: "#8700cd",
                weight: 2,
                opacity: 1
              };
              break;
            case "E3-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#faca96",
                height: "10px",
                color: "#8700cd",
                weight: 2,
                opacity: 1
              };
              break;
            case "n1?n5?-VCc":
              style = {
                fillOpacity: 1,
                fillColor: "#fff054",
                height: "10px",
                color: "#ff5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Mbg6":
              style = {
                fillOpacity: 1,
                fillColor: "#9fc86d",
                height: "10px",
                color: "#ffffcc",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "T-Mag3":
              style = {
                fillOpacity: 1,
                fillColor: "#954b97",
                height: "10px",
                color: "#e4c5e1",
                weight: 2,
                opacity: 1
              };
              break;
            case "O-Pf4":
              style = {
                fillOpacity: 1,
                fillColor: "#009982",
                height: "10px",
                color: "#bfe6cf",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Sct":
              style = {
                fillOpacity: 1,
                fillColor: "#9fc86d",
                height: "10px",
                color: "#e6f5e1",
                weight: 2,
                opacity: 1
              };
              break;
  
            case "K1-Mmg6":
              style = {
                fillOpacity: 1,
                fillColor: "#9fc86d",
                height: "10px",
                color: "#ffffcc",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Pu6":
              style = {
                fillOpacity: 1,
                fillColor: "#9fc86d",
                height: "10px",
                color: "#4c009c",
                weight: 2,
                opacity: 1
              };
              break;
            case "T-Pm":
              style = {
                fillOpacity: 1,
                fillColor: "#954b97",
                height: "10px",
                color: "#fee692",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Vf7":
              style = {
                fillOpacity: 1,
                fillColor: "#b9d15e",
                height: "10px",
                color: "#ff00c5",
                weight: 2,
                opacity: 1
              };
              break;
            case "E3-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#faca96",
                height: "10px",
                color: "#ffffcc",
                weight: 2,
                opacity: 1
              };
              break;
            case "E3-St":
              style = {
                fillOpacity: 1,
                fillColor: "#faca96",
                height: "10px",
                color: "#ffffcc",
                weight: 2,
                opacity: 1
              };
              break;
            case "e6e7-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#faccaa",
                height: "10px",
                color: "#ffffcc",
                weight: 2,
                opacity: 1
              };
              break;
            case "k1?k5-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#dae182",
                height: "10px",
                color: "#41aa54",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q2-Vm":
              style = {
                fillOpacity: 1,
                fillColor: "#fff4e9",
                height: "10px",
                color: "#fd9a52",
                weight: 2,
                opacity: 1
              };
              break;
            case "b6k1?-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#d8e5b0",
                height: "10px",
                color: "#46b478",
                weight: 2,
                opacity: 1
              };
              break;
            case "PZ-Mm":
              style = {
                fillOpacity: 1,
                fillColor: "#a8c5a8",
                height: "10px",
                color: "#0a6e00",
                weight: 2,
                opacity: 1
              };
              break;
            case "T-Pu3":
              style = {
                fillOpacity: 1,
                fillColor: "#954b97",
                height: "10px",
                color: "#fee692",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Mmg":
              style = {
                fillOpacity: 1,
                fillColor: "#9fc86d",
                height: "10px",
                color: "#0a6e00",
                weight: 2,
                opacity: 1
              };
              break;
            case "T-Mmbg3":
              style = {
                fillOpacity: 1,
                fillColor: "#954b97",
                height: "10px",
                color: "#e4c5e1",
                weight: 2,
                opacity: 1
              };
              break;
            case "ρT-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#5fc3e1",
                height: "10px",
                color: "#e2f4e0",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q2-vc":
              style = {
                fillOpacity: 1,
                fillColor: "#fff4e9",
                height: "10px",
                color: "#fd9a52",
                weight: 2,
                opacity: 1
              };
              break;
            case "E2-Pm":
              style = {
                fillOpacity: 1,
                fillColor: "#f9c189",
                height: "10px",
                color: "#ff5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "T3-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#c5a5ce",
                height: "10px",
                color: "#812b92",
                weight: 2,
                opacity: 1
              };
              break;
            case "T?-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#954b97",
                height: "10px",
                color: "#000000",
                weight: 2,
                opacity: 1
              };
              break;
            case "b4?b6-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#cde0a4",
                height: "10px",
                color: "#46b478",
                weight: 2,
                opacity: 1
              };
              break;
            case "b5?k6-Sctm":
              style = {
                fillOpacity: 1,
                fillColor: "#d0dc77",
                height: "10px",
                color: "#41aa54",
                weight: 2,
                opacity: 1
              };
              break;
            case "Embalse":
              style = {
                fillOpacity: 1,
                fillColor: "#aad3df",
                height: "10px",
                color: "#00c5ff",
                weight: 2,
                opacity: 1
              };
              break;
            case "b2b6-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#c3da99",
                height: "10px",
                color: "#46b478",
                weight: 2,
                opacity: 1
              };
              break;
            case "k6-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#f9f1a6",
                height: "10px",
                color: "#41aa54",
                weight: 2,
                opacity: 1
              };
              break;
            case "O1-Pf":
              style = {
                fillOpacity: 1,
                fillColor: "#00a082",
                height: "10px",
                color: "#bfe6cf",
                weight: 2,
                opacity: 1
              };
              break;
            case "b1b5-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#b7d58f",
                height: "10px",
                color: "#46b478",
                weight: 2,
                opacity: 1
              };
              break;
            case "b6?k1-Sm":
              style = {
                fillOpacity: 1,
                fillColor: "#d8e5b0",
                height: "10px",
                color: "#41aa54",
                weight: 2,
                opacity: 1
              };
              break;
            case "E1-Pm":
              style = {
                fillOpacity: 1,
                fillColor: "#f7b67d",
                height: "10px",
                color: "#894444",
                weight: 2,
                opacity: 1
              };
              break;
            case "k5k6-Map":
              style = {
                fillOpacity: 1,
                fillColor: "#f9f1a6",
                height: "10px",
                color: "#41aa54",
                weight: 2,
                opacity: 1
              };
              break;
            case "Q1-Hi":
              style = {
                fillOpacity: 1,
                fillColor: "#fff1c3",
                height: "10px",
                color: "#ff5500",
                weight: 2,
                opacity: 1
              };
              break;
            case "T-Mm":
              style = {
                fillOpacity: 1,
                fillColor: "#954b97",
                height: "10px",
                color: "#e4c5e1",
                weight: 2,
                opacity: 1
              };
              break;
            case "b6k1-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#d8e5b0",
                height: "10px",
                color: "#46b478",
                weight: 2,
                opacity: 1
              };
              break;
            case "b1b2-Stm":
              style = {
                fillOpacity: 1,
                fillColor: "#abcf83",
                height: "10px",
                color: "#46b478",
                weight: 2,
                opacity: 1
              };
              break;
            case "K2-Pm8":
              style = {
                fillOpacity: 1,
                fillColor: "#b9d15e",
                height: "10px",
                color: "#c500ff",
                weight: 2,
                opacity: 1
              };
              break;
            case "Laguna":
              style = {
                fillOpacity: 1,
                fillColor: "",
                height: "10px",
                color: "#00c5ff",
                weight: 2,
                opacity: 1
              };
              break;
            case "n1n2-Sc":
              style = {
                fillOpacity: 1,
                fillColor: "#ffef42",
                height: "10px",
                color: "#000000",
                weight: 2,
                opacity: 1
              };
              break;
            case "K1-Mag":
              style = {
                fillOpacity: 1,
                fillColor: "#9fc86d",
                height: "10px",
                color: "#0a6e00",
                weight: 2,
                opacity: 1
              };
              break;
            case "DC1-Mmg4":
              style = {
                fillOpacity: 1,
                fillColor: "#f5e3b5",
                height: "10px",
                color: "#aa640a",
                weight: 2,
                opacity: 1
              };
              break;
            case "DC1-Mbg4":
              style = {
                fillOpacity: 1,
                fillColor: "#f5e3b5",
                height: "10px",
                color: "#aa650f",
                weight: 2,
                opacity: 1
              };
              break;
              default:
        /* code */
        break;
          }
          return style;
        
        },
        
        onEachFeature: function (feature, layer) {
          const {
            OBJECTID_1,
            Símbolo_U,
            Descripcion,
            Edad,
            UG_integra,
            Comentario,
            SHAPE_AREA,
            SHAPE_LEN
          } = feature.properties;
          layer.bindPopup(
            `<h3 class = "infoboxHeader"> Mapa Geologico Colombiano</h3><TABLE BORDER="1" CELLSPACING="1" WIDTH="300 COlOR="Green"">
          
            <TR><TD BGCOLOR="#70F989">OBJETIVED_1</TD> <TD>${OBJECTID_1}</TD></TR>
             <TR><TD BGCOLOR="#70F989">Simbolo_U</TD> <TD>${Símbolo_U}</TD></TR>
             <TR><TD BGCOLOR="#70F989">Descripcion</TD> <TD>${Descripcion}</TD>
             <TR><TD BGCOLOR="#70F989">Edad</TD> <TD>${Edad}</TD>
             <TR><TD BGCOLOR="#70F989">UG_integra</TD> <TD>${UG_integra}</TD>
             <TR><TD BGCOLOR="#70F989">Comentario</TD> <TD>${Comentario}</TD>
             <TR><TD BGCOLOR="#70F989">SHAPE_AREA</TD> <TD>${SHAPE_AREA}</TD>
             <TR><TD BGCOLOR="#70F989">SHAPE_LEN</TD> <TD>${SHAPE_LEN}</TD>
             </TABLE>`
          );
          // feature.properties.incidents.toLocaleString() +
          // " incidents"
        }
      }).addTo(map);
    }


  return null;
}

export default Choro;
