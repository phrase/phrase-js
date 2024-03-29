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
    CustomMetadataPropertyCreate422ResponseErrorsInner,
    CustomMetadataPropertyCreate422ResponseErrorsInnerFromJSON,
    CustomMetadataPropertyCreate422ResponseErrorsInnerFromJSONTyped,
    CustomMetadataPropertyCreate422ResponseErrorsInnerToJSON,
} from './';

/**
 * 
 * @export
 * @interface CustomMetadataPropertyCreate422Response
 */
export interface CustomMetadataPropertyCreate422Response {
    /**
     * 
     * @type {string}
     * @memberof CustomMetadataPropertyCreate422Response
     */
    message?: string;
    /**
     * 
     * @type {Array<CustomMetadataPropertyCreate422ResponseErrorsInner>}
     * @memberof CustomMetadataPropertyCreate422Response
     */
    errors?: Array<CustomMetadataPropertyCreate422ResponseErrorsInner>;
}

export function CustomMetadataPropertyCreate422ResponseFromJSON(json: any): CustomMetadataPropertyCreate422Response {
    return CustomMetadataPropertyCreate422ResponseFromJSONTyped(json, false);
}

export function CustomMetadataPropertyCreate422ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomMetadataPropertyCreate422Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(CustomMetadataPropertyCreate422ResponseErrorsInnerFromJSON)),
    };
}

export function CustomMetadataPropertyCreate422ResponseToJSON(value?: CustomMetadataPropertyCreate422Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(CustomMetadataPropertyCreate422ResponseErrorsInnerToJSON)),
    };
}


