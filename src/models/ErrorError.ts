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
 * @interface ErrorError
 */
export interface ErrorError {
    /**
     * 
     * @type {string}
     * @memberof ErrorError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorError
     */
    code?: string;
}

export function ErrorErrorFromJSON(json: any): ErrorError {
    return ErrorErrorFromJSONTyped(json, false);
}

export function ErrorErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function ErrorErrorToJSON(value?: ErrorError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'code': value.code,
    };
}


