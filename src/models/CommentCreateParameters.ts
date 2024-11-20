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
 * @interface CommentCreateParameters
 */
export interface CommentCreateParameters {
    /**
     * Comment message
     * @type {string}
     * @memberof CommentCreateParameters
     */
    message: string;
    /**
     * specify the branch to use
     * @type {string}
     * @memberof CommentCreateParameters
     */
    branch?: string;
    /**
     * specify the locales for the comment
     * @type {Array<string>}
     * @memberof CommentCreateParameters
     */
    localeIds?: Array<string>;
}

export function CommentCreateParametersFromJSON(json: any): CommentCreateParameters {
    return CommentCreateParametersFromJSONTyped(json, false);
}

export function CommentCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'localeIds': !exists(json, 'locale_ids') ? undefined : json['locale_ids'],
    };
}

export function CommentCreateParametersToJSON(value?: CommentCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'branch': value.branch,
        'locale_ids': value.localeIds,
    };
}


