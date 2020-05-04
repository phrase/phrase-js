/* tslint:disable */
/* eslint-disable */
/**
 * Phrase API Reference
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
        'branch': value.branch,
    };
}


