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
 * @interface QualityPerformanceScoreListRequest
 */
export interface QualityPerformanceScoreListRequest {
    /**
     * Translation ids you want to get the quality performance score for
     * @type {Array<string>}
     * @memberof QualityPerformanceScoreListRequest
     */
    translationIds?: Array<string>;
}

export function QualityPerformanceScoreListRequestFromJSON(json: any): QualityPerformanceScoreListRequest {
    return QualityPerformanceScoreListRequestFromJSONTyped(json, false);
}

export function QualityPerformanceScoreListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): QualityPerformanceScoreListRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'translationIds': !exists(json, 'translation_ids') ? undefined : json['translation_ids'],
    };
}

export function QualityPerformanceScoreListRequestToJSON(value?: QualityPerformanceScoreListRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'translation_ids': value.translationIds,
    };
}

