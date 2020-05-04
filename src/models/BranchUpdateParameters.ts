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
 * @interface BranchUpdateParameters
 */
export interface BranchUpdateParameters {
    /**
     * Name of the branch
     * @type {string}
     * @memberof BranchUpdateParameters
     */
    name?: string;
}

export function BranchUpdateParametersFromJSON(json: any): BranchUpdateParameters {
    return BranchUpdateParametersFromJSONTyped(json, false);
}

export function BranchUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): BranchUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function BranchUpdateParametersToJSON(value?: BranchUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


