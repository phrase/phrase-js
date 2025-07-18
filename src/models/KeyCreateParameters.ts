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
 * @interface KeyCreateParameters
 */
export interface KeyCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof KeyCreateParameters
     */
    branch?: string;
    /**
     * Key name
     * @type {string}
     * @memberof KeyCreateParameters
     */
    name: string;
    /**
     * Key description (usually includes contextual information for translators)
     * @type {string}
     * @memberof KeyCreateParameters
     */
    description?: string;
    /**
     * Indicates whether key supports pluralization
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    plural?: boolean;
    /**
     * Indicates whether key uses ordinal rules for pluralization
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    useOrdinalRules?: boolean;
    /**
     * Plural name for the key (used in some file formats, e.g. Gettext)
     * @type {string}
     * @memberof KeyCreateParameters
     */
    namePlural?: string;
    /**
     * Type of the key. Can be one of the following: string, number, boolean, array, markdown.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    dataType?: string;
    /**
     * List of tags separated by comma to be associated with the key.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    tags?: string;
    /**
     * Max. number of characters translations for this key can have.
     * @type {number}
     * @memberof KeyCreateParameters
     */
    maxCharactersAllowed?: number;
    /**
     * Screenshot/image for the key. This parameter is deprecated. Please use the Screenshots endpoint instead.
     * @type {Blob}
     * @memberof KeyCreateParameters
     */
    screenshot?: Blob;
    /**
     * Indicates whether the screenshot will be deleted. This parameter is deprecated. Please use the Screenshots endpoint instead.
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    removeScreenshot?: boolean;
    /**
     * Indicates whether the key should be exported as \"unformatted\". Supported by Android XML and other formats.
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    unformatted?: boolean;
    /**
     * Creates a translation in the default locale with the specified content
     * @type {string}
     * @memberof KeyCreateParameters
     */
    defaultTranslationContent?: string;
    /**
     * Indicates whether the key should be autotranslated to other locales based on the copy provided in `default_translation_content`.
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    autotranslate?: boolean;
    /**
     * Indicates whether the key should be exported with \"xml:space=preserve\". Supported by several XML-based formats.
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    xmlSpacePreserve?: boolean;
    /**
     * Original file attribute. Used in some formats, e.g. XLIFF.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    originalFile?: string;
    /**
     * NSStringLocalizedFormatKey attribute. Used in .stringsdict format.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    localizedFormatString?: string;
    /**
     * NSStringLocalizedFormatKey attribute. Used in .stringsdict format.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    localizedFormatKey?: string;
    /**
     * Custom metadata property name and value pairs to be associated with key.
     * @type {object}
     * @memberof KeyCreateParameters
     */
    customMetadata?: object;
}

export function KeyCreateParametersFromJSON(json: any): KeyCreateParameters {
    return KeyCreateParametersFromJSONTyped(json, false);
}

export function KeyCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'plural': !exists(json, 'plural') ? undefined : json['plural'],
        'useOrdinalRules': !exists(json, 'use_ordinal_rules') ? undefined : json['use_ordinal_rules'],
        'namePlural': !exists(json, 'name_plural') ? undefined : json['name_plural'],
        'dataType': !exists(json, 'data_type') ? undefined : json['data_type'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'maxCharactersAllowed': !exists(json, 'max_characters_allowed') ? undefined : json['max_characters_allowed'],
        'screenshot': !exists(json, 'screenshot') ? undefined : json['screenshot'],
        'removeScreenshot': !exists(json, 'remove_screenshot') ? undefined : json['remove_screenshot'],
        'unformatted': !exists(json, 'unformatted') ? undefined : json['unformatted'],
        'defaultTranslationContent': !exists(json, 'default_translation_content') ? undefined : json['default_translation_content'],
        'autotranslate': !exists(json, 'autotranslate') ? undefined : json['autotranslate'],
        'xmlSpacePreserve': !exists(json, 'xml_space_preserve') ? undefined : json['xml_space_preserve'],
        'originalFile': !exists(json, 'original_file') ? undefined : json['original_file'],
        'localizedFormatString': !exists(json, 'localized_format_string') ? undefined : json['localized_format_string'],
        'localizedFormatKey': !exists(json, 'localized_format_key') ? undefined : json['localized_format_key'],
        'customMetadata': !exists(json, 'custom_metadata') ? undefined : json['custom_metadata'],
    };
}

export function KeyCreateParametersToJSON(value?: KeyCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'name': value.name,
        'description': value.description,
        'plural': value.plural,
        'use_ordinal_rules': value.useOrdinalRules,
        'name_plural': value.namePlural,
        'data_type': value.dataType,
        'tags': value.tags,
        'max_characters_allowed': value.maxCharactersAllowed,
        'screenshot': value.screenshot,
        'remove_screenshot': value.removeScreenshot,
        'unformatted': value.unformatted,
        'default_translation_content': value.defaultTranslationContent,
        'autotranslate': value.autotranslate,
        'xml_space_preserve': value.xmlSpacePreserve,
        'original_file': value.originalFile,
        'localized_format_string': value.localizedFormatString,
        'localized_format_key': value.localizedFormatKey,
        'custom_metadata': value.customMetadata,
    };
}


