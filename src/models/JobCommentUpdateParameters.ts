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
 * @interface JobCommentUpdateParameters
 */
export interface JobCommentUpdateParameters {
    /**
     * Comment message
     * @type {string}
     * @memberof JobCommentUpdateParameters
     */
    message?: string;
    /**
     * Branch name for the job
     * @type {string}
     * @memberof JobCommentUpdateParameters
     */
    branch?: string;
}

export function JobCommentUpdateParametersFromJSON(json: any): JobCommentUpdateParameters {
    return JobCommentUpdateParametersFromJSONTyped(json, false);
}

export function JobCommentUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobCommentUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
    };
}

export function JobCommentUpdateParametersToJSON(value?: JobCommentUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'branch': value.branch,
    };
}


