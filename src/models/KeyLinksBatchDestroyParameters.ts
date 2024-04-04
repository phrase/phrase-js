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
 * @interface KeyLinksBatchDestroyParameters
 */
export interface KeyLinksBatchDestroyParameters {
    /**
     * The IDs of the child keys to unlink from the parent key.
     * @type {Array<string>}
     * @memberof KeyLinksBatchDestroyParameters
     */
    childKeyIds: Array<string>;
}

export function KeyLinksBatchDestroyParametersFromJSON(json: any): KeyLinksBatchDestroyParameters {
    return KeyLinksBatchDestroyParametersFromJSONTyped(json, false);
}

export function KeyLinksBatchDestroyParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyLinksBatchDestroyParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'childKeyIds': json['child_key_ids'],
    };
}

export function KeyLinksBatchDestroyParametersToJSON(value?: KeyLinksBatchDestroyParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'child_key_ids': value.childKeyIds,
    };
}

