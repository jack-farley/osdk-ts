/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The format of an archive file.
 *
 * Log Safety: SAFE
 */
export type ArchiveFileFormat = "ZIP";

/**
 * Log Safety: SAFE
 */
export interface AttachmentType {}

/**
 * Log Safety: SAFE
 */
export interface BooleanType {}

/**
 * Log Safety: SAFE
 */
export type ContentLength = string;

/**
 * Log Safety: SAFE
 */
export type ContentType = LooselyBrandedString<"ContentType">;

/**
 * The Foundry user who created this resource
 *
 * Log Safety: SAFE
 */
export type CreatedBy = PrincipalId;

/**
 * The time at which the resource was created.
 *
 * Log Safety: SAFE
 */
export type CreatedTime = string;

/**
 * Log Safety: SAFE
 */
export interface DateType {}

/**
 * The display name of the entity.
 *
 * Log Safety: UNSAFE
 */
export type DisplayName = LooselyBrandedString<"DisplayName">;

/**
 * A measurement of distance.
 *
 * Log Safety: UNSAFE
 */
export interface Distance {
  value: number;
  unit: DistanceUnit;
}

/**
 * Log Safety: SAFE
 */
export type DistanceUnit =
  | "MILLIMETERS"
  | "CENTIMETERS"
  | "METERS"
  | "KILOMETERS"
  | "INCHES"
  | "FEET"
  | "YARDS"
  | "MILES"
  | "NAUTICAL_MILES";

/**
 * Log Safety: SAFE
 */
export interface DoubleType {}

/**
 * A measurement of duration.
 *
 * Log Safety: SAFE
 */
export interface Duration {
  value: number;
  unit: TimeUnit;
}

/**
 * The path to a File within Foundry. Examples: my-file.txt, path/to/my-file.jpg, dataframe.snappy.parquet.
 *
 * Log Safety: UNSAFE
 */
export type FilePath = LooselyBrandedString<"FilePath">;

/**
 * Log Safety: SAFE
 */
export interface FloatType {}

/**
 * Log Safety: SAFE
 */
export interface IntegerType {}

/**
 * Log Safety: SAFE
 */
export interface LongType {}

/**
 * The ID of a security marking.
 *
 * Log Safety: SAFE
 */
export type MarkingId = string;

/**
 * The Resource Identifier (RID) of a Media Set
 *
 * Log Safety: SAFE
 */
export type MediaSetRid = LooselyBrandedString<"MediaSetRid">;

/**
 * Log Safety: SAFE
 */
export interface NullType {}

/**
 * Log Safety: SAFE
 */
export type OrganizationRid = LooselyBrandedString<"OrganizationRid">;

/**
 * The page size to use for the endpoint.
 *
 * Log Safety: SAFE
 */
export type PageSize = number;

/**
   * The page token indicates where to start paging. This should be omitted from the first page's request.
To fetch the next page, clients should take the value from the nextPageToken field of the previous response
and populate the next request's pageToken field with it.
   *
   * Log Safety: UNSAFE
   */
export type PageToken = LooselyBrandedString<"PageToken">;

/**
 * Enables the use of preview functionality.
 *
 * Log Safety: SAFE
 */
export type PreviewMode = boolean;

/**
 * The ID of a Foundry Group or User.
 *
 * Log Safety: SAFE
 */
export type PrincipalId = LooselyBrandedString<"PrincipalId">;

/**
 * Log Safety: SAFE
 */
export type PrincipalType = "USER" | "GROUP";

/**
   * Identifies which Realm a User or Group is a member of.
The palantir-internal-realm is used for Users or Groups that are created in Foundry by administrators and not associated with any SSO provider.
   *
   * Log Safety: UNSAFE
   */
export type Realm = LooselyBrandedString<"Realm">;

/**
 * The release status of the entity.
 *
 * Log Safety: SAFE
 */
export type ReleaseStatus = "ACTIVE" | "EXPERIMENTAL" | "DEPRECATED";

/**
 * The size of the file or attachment in bytes.
 *
 * Log Safety: SAFE
 */
export type SizeBytes = string;

/**
 * Log Safety: SAFE
 */
export interface StringType {}

/**
 * Log Safety: SAFE
 */
export type TimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS";

/**
 * Log Safety: SAFE
 */
export interface TimestampType {}

/**
 * Log Safety: SAFE
 */
export interface UnsupportedType {
  unsupportedType: string;
}

/**
 * The Foundry user who last updated this resource
 *
 * Log Safety: SAFE
 */
export type UpdatedBy = UserId;

/**
 * The time at which the resource was most recently updated.
 *
 * Log Safety: SAFE
 */
export type UpdatedTime = string;

/**
 * A Foundry User ID.
 *
 * Log Safety: SAFE
 */
export type UserId = string;

/**
 * A string representation of a java.time.ZoneId
 *
 * Log Safety: SAFE
 */
export type ZoneId = LooselyBrandedString<"ZoneId">;
