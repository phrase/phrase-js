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
 * @interface SpacesProjectsCreateParameters
 */
export interface SpacesProjectsCreateParameters {
    /**
     * Project ID to add or to the Space
     * @type {string}
     * @memberof SpacesProjectsCreateParameters
     */
    id: string;
}

export function SpacesProjectsCreateParametersFromJSON(json: any): SpacesProjectsCreateParameters {
    return SpacesProjectsCreateParametersFromJSONTyped(json, false);
}

export function SpacesProjectsCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpacesProjectsCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function SpacesProjectsCreateParametersToJSON(value?: SpacesProjectsCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


