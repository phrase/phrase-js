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
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface TranslationVersionWithUser1
 */
export interface TranslationVersionWithUser1 {
    /**
     * 
     * @type {UserPreview}
     * @memberof TranslationVersionWithUser1
     */
    user?: UserPreview;
}

export function TranslationVersionWithUser1FromJSON(json: any): TranslationVersionWithUser1 {
    return TranslationVersionWithUser1FromJSONTyped(json, false);
}

export function TranslationVersionWithUser1FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationVersionWithUser1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : UserPreviewFromJSON(json['user']),
    };
}

export function TranslationVersionWithUser1ToJSON(value?: TranslationVersionWithUser1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserPreviewToJSON(value.user),
    };
}


