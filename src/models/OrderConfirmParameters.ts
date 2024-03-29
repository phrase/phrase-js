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
 * @interface OrderConfirmParameters
 */
export interface OrderConfirmParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof OrderConfirmParameters
     */
    branch?: string;
}

export function OrderConfirmParametersFromJSON(json: any): OrderConfirmParameters {
    return OrderConfirmParametersFromJSONTyped(json, false);
}

export function OrderConfirmParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderConfirmParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
    };
}

export function OrderConfirmParametersToJSON(value?: OrderConfirmParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
    };
}


