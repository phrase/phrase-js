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
 * @interface TranslationsSearchParameters
 */
export interface TranslationsSearchParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof TranslationsSearchParameters
     */
    branch?: string;
    /**
     * Sort criteria. Can be one of: key_name, created_at, updated_at.
     * @type {string}
     * @memberof TranslationsSearchParameters
     */
    sort?: string;
    /**
     * Order direction. Can be one of: asc, desc.
     * @type {string}
     * @memberof TranslationsSearchParameters
     */
    order?: string;
    /**
     * q_description_placeholder
     * @type {string}
     * @memberof TranslationsSearchParameters
     */
    q?: string;
}

export function TranslationsSearchParametersFromJSON(json: any): TranslationsSearchParameters {
    return TranslationsSearchParametersFromJSONTyped(json, false);
}

export function TranslationsSearchParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationsSearchParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'q': !exists(json, 'q') ? undefined : json['q'],
    };
}

export function TranslationsSearchParametersToJSON(value?: TranslationsSearchParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'sort': value.sort,
        'order': value.order,
        'q': value.q,
    };
}


