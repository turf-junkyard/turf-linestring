/**
 * Creates a {@link LineString} feature based on a
 * coordinate array. Properties can be added optionally.
 *
 * @module turf/linestring
 * @param {Array} coordinates an Array of coordinate pairs
 * @param {Object} properties an Object consisting of key-value pairs to add as properties
 * @return {LineString} a LineString feature
 * @example
 * var linestring1 = turf.linestring([[102.0, -10.0], [103.0, 1.0], [104.0, 0.0], [130.0, 4.0]])
 * var linestring2 = turf.linestring([[102.0, -10.0], [103.0, 1.0], [104.0, 0.0], [130.0, 4.0]],
 *   {name: 'line 1', distance: 145})
 * console.log(linestring1)
 * console.log(linestring2)
 */
module.exports = function(coordinates, properties){
  if(!coordinates) return new Error('No coordinates passed')
  return { 
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": coordinates
    },
    "properties": properties || {}
  };
}
