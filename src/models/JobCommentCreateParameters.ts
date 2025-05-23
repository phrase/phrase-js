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
 * @interface JobCommentCreateParameters
 */
export interface JobCommentCreateParameters {
    /**
     * Job comment message
     * @type {string}
     * @memberof JobCommentCreateParameters
     */
    message?: string;
    /**
     * Branch name for the job
     * @type {string}
     * @memberof JobCommentCreateParameters
     */
    branch?: string;
}

export function JobCommentCreateParametersFromJSON(json: any): JobCommentCreateParameters {
    return JobCommentCreateParametersFromJSONTyped(json, false);
}

export function JobCommentCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobCommentCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
    };
}

export function JobCommentCreateParametersToJSON(value?: JobCommentCreateParameters | null): any {
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


