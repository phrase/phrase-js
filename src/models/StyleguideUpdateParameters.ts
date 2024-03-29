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
 * @interface StyleguideUpdateParameters
 */
export interface StyleguideUpdateParameters {
    /**
     * Style guide title
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    title?: string;
    /**
     * Audience description
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    audience?: string;
    /**
     * Can be one of: not_specified, children, teenager, young_adults, adults, old_adults.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    targetAudience?: string;
    /**
     * Can be one of: not_specified, first_person_singular, second_person_singular, third_person_singular_masculine, third_person_singular_feminine, third_person_singular_neuter, first_person_plural, second_person_plural, third_person_plural.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    grammaticalPerson?: string;
    /**
     * Can be one of: not_specified, popular, technical, fictional.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    vocabularyType?: string;
    /**
     * Description of the business
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    business?: string;
    /**
     * Company branding to remain consistent.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    companyBranding?: string;
    /**
     * Formatting requirements and character limitations.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    formatting?: string;
    /**
     * List of terms and/or phrases that need to be translated consistently.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    glossaryTerms?: string;
    /**
     * Formal or informal pronouns, consistent conjugation, grammatical gender
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    grammarConsistency?: string;
    /**
     * Can be one of: Cultural/Conversational, Literal, Neutral.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    literalTranslation?: string;
    /**
     * Tone requirement descriptions
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    overallTone?: string;
    /**
     * Provide links to sample product pages, FAQ pages, etc. to give the translator a point of reference. You can also provide past translations. Even snippets or short paragraphs are helpful for maintaining consistency.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    samples?: string;
}

export function StyleguideUpdateParametersFromJSON(json: any): StyleguideUpdateParameters {
    return StyleguideUpdateParametersFromJSONTyped(json, false);
}

export function StyleguideUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): StyleguideUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'audience': !exists(json, 'audience') ? undefined : json['audience'],
        'targetAudience': !exists(json, 'target_audience') ? undefined : json['target_audience'],
        'grammaticalPerson': !exists(json, 'grammatical_person') ? undefined : json['grammatical_person'],
        'vocabularyType': !exists(json, 'vocabulary_type') ? undefined : json['vocabulary_type'],
        'business': !exists(json, 'business') ? undefined : json['business'],
        'companyBranding': !exists(json, 'company_branding') ? undefined : json['company_branding'],
        'formatting': !exists(json, 'formatting') ? undefined : json['formatting'],
        'glossaryTerms': !exists(json, 'glossary_terms') ? undefined : json['glossary_terms'],
        'grammarConsistency': !exists(json, 'grammar_consistency') ? undefined : json['grammar_consistency'],
        'literalTranslation': !exists(json, 'literal_translation') ? undefined : json['literal_translation'],
        'overallTone': !exists(json, 'overall_tone') ? undefined : json['overall_tone'],
        'samples': !exists(json, 'samples') ? undefined : json['samples'],
    };
}

export function StyleguideUpdateParametersToJSON(value?: StyleguideUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'audience': value.audience,
        'target_audience': value.targetAudience,
        'grammatical_person': value.grammaticalPerson,
        'vocabulary_type': value.vocabularyType,
        'business': value.business,
        'company_branding': value.companyBranding,
        'formatting': value.formatting,
        'glossary_terms': value.glossaryTerms,
        'grammar_consistency': value.grammarConsistency,
        'literal_translation': value.literalTranslation,
        'overall_tone': value.overallTone,
        'samples': value.samples,
    };
}


