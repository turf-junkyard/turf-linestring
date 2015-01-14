/**
 * Creates a {@link LineString} feature based on a
 * coordinate array. Properties can be added optionally.
 *
 * @module turf/linestring
 * @param {Array} coordinates an Array of coordinate pairs
 * @param {Object} properties an Object consisting of key-value pairs to add as properties
 * @return {LineString} a LineString feature
 * @example
 * var linestring1 = turf.linestring([
 *	[-21.964416, 64.148203],
 *	[-21.956176, 64.141316],
 *	[-21.93901, 64.135924],
 *	[-21.927337, 64.136673]
 * ]);
 * var linestring2 = turf.linestring([
 *	[-21.929054, 64.127985],
 *	[-21.912918, 64.134726],
 *	[-21.916007, 64.141016],
 * 	[-21.930084, 64.14446]
 * ], {name: 'line 1', distance: 145});
 *
 * //=linestring1
 *
 * //=linestring2
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
