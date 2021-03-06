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
import {
    KeyPreview,
    KeyPreviewFromJSON,
    KeyPreviewFromJSONTyped,
    KeyPreviewToJSON,
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface JobDetails1
 */
export interface JobDetails1 {
    /**
     * 
     * @type {UserPreview}
     * @memberof JobDetails1
     */
    owner?: UserPreview;
    /**
     * 
     * @type {string}
     * @memberof JobDetails1
     */
    jobTagName?: string;
    /**
     * 
     * @type {Array<LocalePreview>}
     * @memberof JobDetails1
     */
    locales?: Array<LocalePreview>;
    /**
     * 
     * @type {Array<KeyPreview>}
     * @memberof JobDetails1
     */
    keys?: Array<KeyPreview>;
}

export function JobDetails1FromJSON(json: any): JobDetails1 {
    return JobDetails1FromJSONTyped(json, false);
}

export function JobDetails1FromJSONTyped(json: any, ignoreDiscriminator: boolean): JobDetails1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'owner': !exists(json, 'owner') ? undefined : UserPreviewFromJSON(json['owner']),
        'jobTagName': !exists(json, 'job_tag_name') ? undefined : json['job_tag_name'],
        'locales': !exists(json, 'locales') ? undefined : ((json['locales'] as Array<any>).map(LocalePreviewFromJSON)),
        'keys': !exists(json, 'keys') ? undefined : ((json['keys'] as Array<any>).map(KeyPreviewFromJSON)),
    };
}

export function JobDetails1ToJSON(value?: JobDetails1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'owner': UserPreviewToJSON(value.owner),
        'job_tag_name': value.jobTagName,
        'locales': value.locales === undefined ? undefined : ((value.locales as Array<any>).map(LocalePreviewToJSON)),
        'keys': value.keys === undefined ? undefined : ((value.keys as Array<any>).map(KeyPreviewToJSON)),
    };
}


