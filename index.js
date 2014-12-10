module.exports = function(coordinates, properties){
  if(!coordinates) return new Error('No coordinates passed')
  return { 
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": coordinates
    },
    "properties": properties
  };
}
