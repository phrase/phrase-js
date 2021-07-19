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
 * @interface JobTemplatePreview
 */
export interface JobTemplatePreview {
    /**
     * 
     * @type {string}
     * @memberof JobTemplatePreview
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof JobTemplatePreview
     */
    name?: string;
}

export function JobTemplatePreviewFromJSON(json: any): JobTemplatePreview {
    return JobTemplatePreviewFromJSONTyped(json, false);
}

export function JobTemplatePreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplatePreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function JobTemplatePreviewToJSON(value?: JobTemplatePreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


