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
 * @interface LocalePreview
 */
export interface LocalePreview {
    /**
     * 
     * @type {string}
     * @memberof LocalePreview
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LocalePreview
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof LocalePreview
     */
    code?: string;
}

export function LocalePreviewFromJSON(json: any): LocalePreview {
    return LocalePreviewFromJSONTyped(json, false);
}

export function LocalePreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocalePreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function LocalePreviewToJSON(value?: LocalePreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
    };
}


