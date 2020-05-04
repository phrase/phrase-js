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
 * @interface JobPreview
 */
export interface JobPreview {
    /**
     * 
     * @type {string}
     * @memberof JobPreview
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof JobPreview
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof JobPreview
     */
    state?: string;
}

export function JobPreviewFromJSON(json: any): JobPreview {
    return JobPreviewFromJSONTyped(json, false);
}

export function JobPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobPreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function JobPreviewToJSON(value?: JobPreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'state': value.state,
    };
}


