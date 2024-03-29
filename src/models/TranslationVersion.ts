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
 * @interface TranslationVersion
 */
export interface TranslationVersion {
    /**
     * 
     * @type {string}
     * @memberof TranslationVersion
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationVersion
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationVersion
     */
    pluralSuffix?: string;
    /**
     * 
     * @type {KeyPreview}
     * @memberof TranslationVersion
     */
    key?: KeyPreview;
    /**
     * 
     * @type {LocalePreview}
     * @memberof TranslationVersion
     */
    locale?: LocalePreview;
    /**
     * 
     * @type {Date}
     * @memberof TranslationVersion
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TranslationVersion
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TranslationVersion
     */
    changedAt?: Date;
}

export function TranslationVersionFromJSON(json: any): TranslationVersion {
    return TranslationVersionFromJSONTyped(json, false);
}

export function TranslationVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'pluralSuffix': !exists(json, 'plural_suffix') ? undefined : json['plural_suffix'],
        'key': !exists(json, 'key') ? undefined : KeyPreviewFromJSON(json['key']),
        'locale': !exists(json, 'locale') ? undefined : LocalePreviewFromJSON(json['locale']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'changedAt': !exists(json, 'changed_at') ? undefined : (new Date(json['changed_at'])),
    };
}

export function TranslationVersionToJSON(value?: TranslationVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'content': value.content,
        'plural_suffix': value.pluralSuffix,
        'key': KeyPreviewToJSON(value.key),
        'locale': LocalePreviewToJSON(value.locale),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'changed_at': value.changedAt === undefined ? undefined : (value.changedAt.toISOString()),
    };
}


