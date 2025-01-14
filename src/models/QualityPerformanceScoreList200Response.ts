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
    ErrorError,
    ErrorErrorFromJSON,
    ErrorErrorFromJSONTyped,
    ErrorErrorToJSON,
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
    QualityPerformanceScoreList200ResponseAnyOf,
    QualityPerformanceScoreList200ResponseAnyOfFromJSON,
    QualityPerformanceScoreList200ResponseAnyOfFromJSONTyped,
    QualityPerformanceScoreList200ResponseAnyOfToJSON,
    QualityPerformanceScoreList200ResponseAnyOfData,
    QualityPerformanceScoreList200ResponseAnyOfDataFromJSON,
    QualityPerformanceScoreList200ResponseAnyOfDataFromJSONTyped,
    QualityPerformanceScoreList200ResponseAnyOfDataToJSON,
    QualityPerformanceScoreList200ResponseAnyOfErrorsInner,
    QualityPerformanceScoreList200ResponseAnyOfErrorsInnerFromJSON,
    QualityPerformanceScoreList200ResponseAnyOfErrorsInnerFromJSONTyped,
    QualityPerformanceScoreList200ResponseAnyOfErrorsInnerToJSON,
} from './';

/**
 * 
 * @export
 * @interface QualityPerformanceScoreList200Response
 */
export interface QualityPerformanceScoreList200Response {
    /**
     * 
     * @type {ErrorError}
     * @memberof QualityPerformanceScoreList200Response
     */
    error?: ErrorError;
    /**
     * 
     * @type {QualityPerformanceScoreList200ResponseAnyOfData}
     * @memberof QualityPerformanceScoreList200Response
     */
    data?: QualityPerformanceScoreList200ResponseAnyOfData;
    /**
     * Array of errors for any failing translation IDs
     * @type {Array<QualityPerformanceScoreList200ResponseAnyOfErrorsInner>}
     * @memberof QualityPerformanceScoreList200Response
     */
    errors?: Array<QualityPerformanceScoreList200ResponseAnyOfErrorsInner>;
}

export function QualityPerformanceScoreList200ResponseFromJSON(json: any): QualityPerformanceScoreList200Response {
    return QualityPerformanceScoreList200ResponseFromJSONTyped(json, false);
}

export function QualityPerformanceScoreList200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): QualityPerformanceScoreList200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ErrorErrorFromJSON(json['error']),
        'data': !exists(json, 'data') ? undefined : QualityPerformanceScoreList200ResponseAnyOfDataFromJSON(json['data']),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(QualityPerformanceScoreList200ResponseAnyOfErrorsInnerFromJSON)),
    };
}

export function QualityPerformanceScoreList200ResponseToJSON(value?: QualityPerformanceScoreList200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ErrorErrorToJSON(value.error),
        'data': QualityPerformanceScoreList200ResponseAnyOfDataToJSON(value.data),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(QualityPerformanceScoreList200ResponseAnyOfErrorsInnerToJSON)),
    };
}


