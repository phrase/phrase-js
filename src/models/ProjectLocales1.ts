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
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProjectLocales1
 */
export interface ProjectLocales1 {
    /**
     * 
     * @type {Array<LocalePreview>}
     * @memberof ProjectLocales1
     */
    locales?: Array<LocalePreview>;
}

export function ProjectLocales1FromJSON(json: any): ProjectLocales1 {
    return ProjectLocales1FromJSONTyped(json, false);
}

export function ProjectLocales1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectLocales1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locales': !exists(json, 'locales') ? undefined : ((json['locales'] as Array<any>).map(LocalePreviewFromJSON)),
    };
}

export function ProjectLocales1ToJSON(value?: ProjectLocales1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locales': value.locales === undefined ? undefined : ((value.locales as Array<any>).map(LocalePreviewToJSON)),
    };
}


