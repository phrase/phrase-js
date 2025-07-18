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
 * @interface KeyPreview
 */
export interface KeyPreview {
    /**
     * 
     * @type {string}
     * @memberof KeyPreview
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof KeyPreview
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof KeyPreview
     */
    plural?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KeyPreview
     */
    useOrdinalRules?: boolean;
}

export function KeyPreviewFromJSON(json: any): KeyPreview {
    return KeyPreviewFromJSONTyped(json, false);
}

export function KeyPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyPreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'plural': !exists(json, 'plural') ? undefined : json['plural'],
        'useOrdinalRules': !exists(json, 'use_ordinal_rules') ? undefined : json['use_ordinal_rules'],
    };
}

export function KeyPreviewToJSON(value?: KeyPreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'plural': value.plural,
        'use_ordinal_rules': value.useOrdinalRules,
    };
}


