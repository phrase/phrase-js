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
 * @interface TranslationsVerifyParameters
 */
export interface TranslationsVerifyParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof TranslationsVerifyParameters
     */
    branch?: string;
    /**
     * q_description_placeholder
     * @type {string}
     * @memberof TranslationsVerifyParameters
     */
    q?: string;
    /**
     * Sort criteria. Can be one of: key_name, created_at, updated_at.
     * @type {string}
     * @memberof TranslationsVerifyParameters
     */
    sort?: string;
    /**
     * Order direction. Can be one of: asc, desc.
     * @type {string}
     * @memberof TranslationsVerifyParameters
     */
    order?: string;
}

export function TranslationsVerifyParametersFromJSON(json: any): TranslationsVerifyParameters {
    return TranslationsVerifyParametersFromJSONTyped(json, false);
}

export function TranslationsVerifyParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationsVerifyParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'q': !exists(json, 'q') ? undefined : json['q'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function TranslationsVerifyParametersToJSON(value?: TranslationsVerifyParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'q': value.q,
        'sort': value.sort,
        'order': value.order,
    };
}


