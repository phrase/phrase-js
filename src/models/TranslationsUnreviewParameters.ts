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
 * @interface TranslationsUnreviewParameters
 */
export interface TranslationsUnreviewParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof TranslationsUnreviewParameters
     */
    branch?: string;
    /**
     * Specify a query to find translations by content (including wildcards).  *Note: Search is limited to 10000 results and may not include recently updated data (depending on the project size).*  The following qualifiers are supported in the query: * `id:translation_id,...` for queries on a comma-separated list of ids * `tags:XYZ` for tags on the translation * `unverified:{true|false}` for verification status * `excluded:{true|false}` for exclusion status * `updated_at:{>=|<=}2013-02-21T00:00:00Z` for date range queries  Find more examples [here](/en/api/strings/usage-examples). 
     * @type {string}
     * @memberof TranslationsUnreviewParameters
     */
    q?: string;
}

export function TranslationsUnreviewParametersFromJSON(json: any): TranslationsUnreviewParameters {
    return TranslationsUnreviewParametersFromJSONTyped(json, false);
}

export function TranslationsUnreviewParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationsUnreviewParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'q': !exists(json, 'q') ? undefined : json['q'],
    };
}

export function TranslationsUnreviewParametersToJSON(value?: TranslationsUnreviewParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'q': value.q,
    };
}


