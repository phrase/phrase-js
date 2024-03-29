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
} from './';

/**
 * Error field for when the request completely fails
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {ErrorError}
     * @memberof ModelError
     */
    error?: ErrorError;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ErrorErrorFromJSON(json['error']),
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ErrorErrorToJSON(value.error),
    };
}


