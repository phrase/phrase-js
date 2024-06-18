/* tslint:disable */
/* eslint-disable */
/**
 * Phrase Strings API Reference
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@phrase.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReleaseCreateParameters
 */
export interface ReleaseCreateParameters {
    /**
     * Description of the release
     * @type {string}
     * @memberof ReleaseCreateParameters
     */
    description?: string;
    /**
     * List of platforms the release should support.
     * @type {Array<string>}
     * @memberof ReleaseCreateParameters
     */
    platforms?: Array<string>;
    /**
     * List of locale ids that will be included in the release. If empty, distribution locales will be used
     * @type {Array<string>}
     * @memberof ReleaseCreateParameters
     */
    localeIds?: Array<string>;
    /**
     * Only include tagged keys in the release. For a key to be included it must be tagged with all tags provided
     * @type {Array<string>}
     * @memberof ReleaseCreateParameters
     */
    tags?: Array<string>;
    /**
     * Minimum version of the app that the release supports in semver format
     * @type {string}
     * @memberof ReleaseCreateParameters
     */
    appMinVersion?: string;
    /**
     * Maximum version of the app that the release supports in semver format
     * @type {string}
     * @memberof ReleaseCreateParameters
     */
    appMaxVersion?: string;
    /**
     * Branch used for release
     * @type {string}
     * @memberof ReleaseCreateParameters
     */
    branch?: string;
}

export function ReleaseCreateParametersFromJSON(json: any): ReleaseCreateParameters {
    return ReleaseCreateParametersFromJSONTyped(json, false);
}

export function ReleaseCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReleaseCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'platforms': !exists(json, 'platforms') ? undefined : json['platforms'],
        'localeIds': !exists(json, 'locale_ids') ? undefined : json['locale_ids'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'appMinVersion': !exists(json, 'app_min_version') ? undefined : json['app_min_version'],
        'appMaxVersion': !exists(json, 'app_max_version') ? undefined : json['app_max_version'],
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
    };
}

export function ReleaseCreateParametersToJSON(value?: ReleaseCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'platforms': value.platforms,
        'locale_ids': value.localeIds,
        'tags': value.tags,
        'app_min_version': value.appMinVersion,
        'app_max_version': value.appMaxVersion,
        'branch': value.branch,
    };
}


