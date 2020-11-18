/* tslint:disable */
/* eslint-disable */
/**
 * Phrase API Reference
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
 * @interface WebhookCreateParameters
 */
export interface WebhookCreateParameters {
    /**
     * Callback URL to send requests to
     * @type {string}
     * @memberof WebhookCreateParameters
     */
    callbackUrl?: string;
    /**
     * Webhook secret used to calculate signature. If empty, the default project secret will be used.
     * @type {string}
     * @memberof WebhookCreateParameters
     */
    secret?: string;
    /**
     * Webhook description
     * @type {string}
     * @memberof WebhookCreateParameters
     */
    description?: string;
    /**
     * List of event names to trigger the webhook (separated by comma)
     * @type {string}
     * @memberof WebhookCreateParameters
     */
    events?: string;
    /**
     * Whether webhook is active or inactive
     * @type {boolean}
     * @memberof WebhookCreateParameters
     */
    active?: boolean;
}

export function WebhookCreateParametersFromJSON(json: any): WebhookCreateParameters {
    return WebhookCreateParametersFromJSONTyped(json, false);
}

export function WebhookCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'callbackUrl': !exists(json, 'callback_url') ? undefined : json['callback_url'],
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'events': !exists(json, 'events') ? undefined : json['events'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function WebhookCreateParametersToJSON(value?: WebhookCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'callback_url': value.callbackUrl,
        'secret': value.secret,
        'description': value.description,
        'events': value.events,
        'active': value.active,
    };
}


