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
 * @interface TranslationUpdateParameters
 */
export interface TranslationUpdateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof TranslationUpdateParameters
     */
    branch?: string;
    /**
     * Translation content
     * @type {string}
     * @memberof TranslationUpdateParameters
     */
    content?: string;
    /**
     * Plural suffix. Can be one of: zero, one, two, few, many, other. Must be specified if the key associated to the translation is pluralized.
     * @type {string}
     * @memberof TranslationUpdateParameters
     */
    pluralSuffix?: string;
    /**
     * Indicates whether translation is unverified. Part of the [Advanced Workflows](https://support.phrase.com/hc/en-us/articles/5784094755484) feature.
     * @type {boolean}
     * @memberof TranslationUpdateParameters
     */
    unverified?: boolean;
    /**
     * Indicates whether translation is excluded.
     * @type {boolean}
     * @memberof TranslationUpdateParameters
     */
    excluded?: boolean;
    /**
     * Indicates whether the translation should be auto-translated. Responses with status 422 if provided for translation within a non-default locale or the project does not have the Autopilot feature enabled.
     * @type {boolean}
     * @memberof TranslationUpdateParameters
     */
    autotranslate?: boolean;
}

export function TranslationUpdateParametersFromJSON(json: any): TranslationUpdateParameters {
    return TranslationUpdateParametersFromJSONTyped(json, false);
}

export function TranslationUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'pluralSuffix': !exists(json, 'plural_suffix') ? undefined : json['plural_suffix'],
        'unverified': !exists(json, 'unverified') ? undefined : json['unverified'],
        'excluded': !exists(json, 'excluded') ? undefined : json['excluded'],
        'autotranslate': !exists(json, 'autotranslate') ? undefined : json['autotranslate'],
    };
}

export function TranslationUpdateParametersToJSON(value?: TranslationUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'content': value.content,
        'plural_suffix': value.pluralSuffix,
        'unverified': value.unverified,
        'excluded': value.excluded,
        'autotranslate': value.autotranslate,
    };
}


