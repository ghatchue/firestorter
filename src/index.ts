import AggregateCollection from './AggregateCollection';
import Collection from './Collection';
import Document from './Document';
import {
  decodeGeohash,
  encodeGeohash,
  getGeohashesForRadius,
  getGeohashesForRegion,
  flattenGeohashRange,
  flattenGeohashes,
  calculateGeoDistance,
  insideGeoRegion,
  geoRegionToPoints,
  metersToLatitudeDegrees,
  metersToLongitudeDegrees,
} from './GeoHash';
import GeoQuery from './GeoQuery';
import { Mode } from './Types';
import { mergeUpdateData, isTimestamp } from './Utils';

export * from './init';
export * from './compat';
// export * from './init/web'; // <-- This one might causes problems on RN

export {
  Collection,
  Document,
  AggregateCollection,
  mergeUpdateData,
  Mode,
  isTimestamp,
  // Geo queries
  GeoQuery,
  decodeGeohash,
  encodeGeohash,
  getGeohashesForRadius,
  getGeohashesForRegion,
  flattenGeohashRange,
  flattenGeohashes,
  calculateGeoDistance,
  insideGeoRegion,
  geoRegionToPoints,
  metersToLatitudeDegrees,
  metersToLongitudeDegrees,
};
export type {
  DocumentSource,
  IDocumentOptions,
  IDocument,
  ICollection,
  CollectionSource,
  CollectionQuery,
  ICollectionOptions,
  ICollectionDocument,
  IContext,
  IHasContext
} from './Types';
export type {
  AggregateCollectionOrderBy,
  AggregateCollectionFilterBy,
  IAggregateCollectionQuery,
  AggregateCollectionQueries,
  AggregateCollectionQueriesFn,
  IAggregateCollectionOptions,
} from './AggregateCollection';
export type { IGeoPoint, IGeoRegion, GeoHash } from './GeoHash';
export type { GeoQueryRegion, GeoQueryHash, IGeoQueryQuery, IGeoQueryOptions } from './GeoQuery';

export const ModuleName = 'firestorter';