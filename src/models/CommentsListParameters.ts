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
 * @interface CommentsListParameters
 */
export interface CommentsListParameters {
    /**
     * Specify the branch to use
     * @type {string}
     * @memberof CommentsListParameters
     */
    branch?: string;
    /**
     * Search query for comment messages
     * @type {string}
     * @memberof CommentsListParameters
     */
    query?: string;
    /**
     * Search comments by their assigned locales
     * @type {Array<string>}
     * @memberof CommentsListParameters
     */
    localeIds?: Array<string>;
    /**
     * Specify filters to find comments by
     * @type {Array<string>}
     * @memberof CommentsListParameters
     */
    filters?: Array<string>;
    /**
     * Specify ordering of comments
     * @type {string}
     * @memberof CommentsListParameters
     */
    order?: string;
}

export function CommentsListParametersFromJSON(json: any): CommentsListParameters {
    return CommentsListParametersFromJSONTyped(json, false);
}

export function CommentsListParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsListParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'query': !exists(json, 'query') ? undefined : json['query'],
        'localeIds': !exists(json, 'locale_ids') ? undefined : json['locale_ids'],
        'filters': !exists(json, 'filters') ? undefined : json['filters'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function CommentsListParametersToJSON(value?: CommentsListParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'query': value.query,
        'locale_ids': value.localeIds,
        'filters': value.filters,
        'order': value.order,
    };
}


