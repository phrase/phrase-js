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
 * @interface JobLocaleReopenParameters
 */
export interface JobLocaleReopenParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobLocaleReopenParameters
     */
    branch?: string;
}

export function JobLocaleReopenParametersFromJSON(json: any): JobLocaleReopenParameters {
    return JobLocaleReopenParametersFromJSONTyped(json, false);
}

export function JobLocaleReopenParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobLocaleReopenParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
    };
}

export function JobLocaleReopenParametersToJSON(value?: JobLocaleReopenParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
    };
}


