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
import {
    KeyPreview,
    KeyPreviewFromJSON,
    KeyPreviewFromJSONTyped,
    KeyPreviewToJSON,
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface Translation
 */
export interface Translation {
    /**
     * 
     * @type {string}
     * @memberof Translation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Translation
     */
    content?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Translation
     */
    unverified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Translation
     */
    excluded?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Translation
     */
    pluralSuffix?: string;
    /**
     * 
     * @type {KeyPreview}
     * @memberof Translation
     */
    key?: KeyPreview;
    /**
     * 
     * @type {LocalePreview}
     * @memberof Translation
     */
    locale?: LocalePreview;
    /**
     * 
     * @type {Array<string>}
     * @memberof Translation
     */
    placeholders?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Translation
     */
    state?: string;
    /**
     * 
     * @type {Date}
     * @memberof Translation
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Translation
     */
    updatedAt?: Date;
}

export function TranslationFromJSON(json: any): Translation {
    return TranslationFromJSONTyped(json, false);
}

export function TranslationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Translation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'unverified': !exists(json, 'unverified') ? undefined : json['unverified'],
        'excluded': !exists(json, 'excluded') ? undefined : json['excluded'],
        'pluralSuffix': !exists(json, 'plural_suffix') ? undefined : json['plural_suffix'],
        'key': !exists(json, 'key') ? undefined : KeyPreviewFromJSON(json['key']),
        'locale': !exists(json, 'locale') ? undefined : LocalePreviewFromJSON(json['locale']),
        'placeholders': !exists(json, 'placeholders') ? undefined : json['placeholders'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function TranslationToJSON(value?: Translation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'content': value.content,
        'unverified': value.unverified,
        'excluded': value.excluded,
        'plural_suffix': value.pluralSuffix,
        'key': KeyPreviewToJSON(value.key),
        'locale': LocalePreviewToJSON(value.locale),
        'placeholders': value.placeholders,
        'state': value.state,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


