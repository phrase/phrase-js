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
     * Specify a query to find translations by content (including wildcards).<br><br> The following qualifiers are supported in the query:<br> <ul>   <li><code>id:translation_id,...</code> for queries on a comma-separated list of ids</li>   <li><code>tags:XYZ</code> for tags on the translation</li>   <li><code>unverified:{true|false}</code> for verification status</li>   <li><code>excluded:{true|false}</code> for exclusion status</li>   <li><code>updated_at:{>=|<=}2013-02-21T00:00:00Z</code> for date range queries</li> </ul> Find more examples <a href=\"#overview--usage-examples\">here</a>. 
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


