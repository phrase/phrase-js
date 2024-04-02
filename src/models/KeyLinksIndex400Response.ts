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
 * @interface KeyLinksIndex400Response
 */
export interface KeyLinksIndex400Response {
    /**
     * 
     * @type {string}
     * @memberof KeyLinksIndex400Response
     */
    message?: string;
}

export function KeyLinksIndex400ResponseFromJSON(json: any): KeyLinksIndex400Response {
    return KeyLinksIndex400ResponseFromJSONTyped(json, false);
}

export function KeyLinksIndex400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyLinksIndex400Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function KeyLinksIndex400ResponseToJSON(value?: KeyLinksIndex400Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}


