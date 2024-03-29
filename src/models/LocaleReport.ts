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
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface LocaleReport
 */
export interface LocaleReport {
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    keysCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    translatedTranslationsPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    unverifiedTranslationsPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    reviewedTranslationsPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    untranslatedKeysPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    completedTranslationsCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    untranslatedKeysCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    unverifiedTranslationsCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    reviewedTranslationsCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    sourceWordCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    wordCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    wordCountUnverified?: number;
    /**
     * 
     * @type {number}
     * @memberof LocaleReport
     */
    wordCountMissing?: number;
    /**
     * 
     * @type {LocalePreview}
     * @memberof LocaleReport
     */
    locale?: LocalePreview;
}

export function LocaleReportFromJSON(json: any): LocaleReport {
    return LocaleReportFromJSONTyped(json, false);
}

export function LocaleReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocaleReport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keysCount': !exists(json, 'keys_count') ? undefined : json['keys_count'],
        'translatedTranslationsPercentage': !exists(json, 'translated_translations_percentage') ? undefined : json['translated_translations_percentage'],
        'unverifiedTranslationsPercentage': !exists(json, 'unverified_translations_percentage') ? undefined : json['unverified_translations_percentage'],
        'reviewedTranslationsPercentage': !exists(json, 'reviewed_translations_percentage') ? undefined : json['reviewed_translations_percentage'],
        'untranslatedKeysPercentage': !exists(json, 'untranslated_keys_percentage') ? undefined : json['untranslated_keys_percentage'],
        'completedTranslationsCount': !exists(json, 'completed_translations_count') ? undefined : json['completed_translations_count'],
        'untranslatedKeysCount': !exists(json, 'untranslated_keys_count') ? undefined : json['untranslated_keys_count'],
        'unverifiedTranslationsCount': !exists(json, 'unverified_translations_count') ? undefined : json['unverified_translations_count'],
        'reviewedTranslationsCount': !exists(json, 'reviewed_translations_count') ? undefined : json['reviewed_translations_count'],
        'sourceWordCount': !exists(json, 'source_word_count') ? undefined : json['source_word_count'],
        'wordCount': !exists(json, 'word_count') ? undefined : json['word_count'],
        'wordCountUnverified': !exists(json, 'word_count_unverified') ? undefined : json['word_count_unverified'],
        'wordCountMissing': !exists(json, 'word_count_missing') ? undefined : json['word_count_missing'],
        'locale': !exists(json, 'locale') ? undefined : LocalePreviewFromJSON(json['locale']),
    };
}

export function LocaleReportToJSON(value?: LocaleReport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'keys_count': value.keysCount,
        'translated_translations_percentage': value.translatedTranslationsPercentage,
        'unverified_translations_percentage': value.unverifiedTranslationsPercentage,
        'reviewed_translations_percentage': value.reviewedTranslationsPercentage,
        'untranslated_keys_percentage': value.untranslatedKeysPercentage,
        'completed_translations_count': value.completedTranslationsCount,
        'untranslated_keys_count': value.untranslatedKeysCount,
        'unverified_translations_count': value.unverifiedTranslationsCount,
        'reviewed_translations_count': value.reviewedTranslationsCount,
        'source_word_count': value.sourceWordCount,
        'word_count': value.wordCount,
        'word_count_unverified': value.wordCountUnverified,
        'word_count_missing': value.wordCountMissing,
        'locale': LocalePreviewToJSON(value.locale),
    };
}


