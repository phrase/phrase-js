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
 * @interface AffectedCount
 */
export interface AffectedCount {
    /**
     * 
     * @type {number}
     * @memberof AffectedCount
     */
    recordsAffected?: number;
}

export function AffectedCountFromJSON(json: any): AffectedCount {
    return AffectedCountFromJSONTyped(json, false);
}

export function AffectedCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): AffectedCount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordsAffected': !exists(json, 'records_affected') ? undefined : json['records_affected'],
    };
}

export function AffectedCountToJSON(value?: AffectedCount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'records_affected': value.recordsAffected,
    };
}


