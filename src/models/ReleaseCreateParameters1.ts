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
 * @interface ReleaseCreateParameters1
 */
export interface ReleaseCreateParameters1 {
    /**
     * Cron schedule for the scheduler. Read more about the format of this field at https://en.wikipedia.org/wiki/Cron
     * @type {string}
     * @memberof ReleaseCreateParameters1
     */
    cronSchedule?: string;
    /**
     * Time zone for the scheduler
     * @type {string}
     * @memberof ReleaseCreateParameters1
     */
    timeZone?: string;
    /**
     * List of locale ids that will be included in the release.
     * @type {Array<string>}
     * @memberof ReleaseCreateParameters1
     */
    localeIds?: Array<string>;
    /**
     * Only include tagged keys in the release. For a key to be included it must be tagged with all tags provided
     * @type {Array<string>}
     * @memberof ReleaseCreateParameters1
     */
    tags?: Array<string>;
    /**
     * Branch used for release
     * @type {string}
     * @memberof ReleaseCreateParameters1
     */
    branch?: string;
    /**
     * The created releases will be available only for apps with version greater or equal to this value
     * @type {string}
     * @memberof ReleaseCreateParameters1
     */
    appMinVersion?: string;
    /**
     * The created releases will be available only for apps with version less or equal to this value
     * @type {string}
     * @memberof ReleaseCreateParameters1
     */
    appMaxVersion?: string;
}

export function ReleaseCreateParameters1FromJSON(json: any): ReleaseCreateParameters1 {
    return ReleaseCreateParameters1FromJSONTyped(json, false);
}

export function ReleaseCreateParameters1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ReleaseCreateParameters1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cronSchedule': !exists(json, 'cron_schedule') ? undefined : json['cron_schedule'],
        'timeZone': !exists(json, 'time_zone') ? undefined : json['time_zone'],
        'localeIds': !exists(json, 'locale_ids') ? undefined : json['locale_ids'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'appMinVersion': !exists(json, 'app_min_version') ? undefined : json['app_min_version'],
        'appMaxVersion': !exists(json, 'app_max_version') ? undefined : json['app_max_version'],
    };
}

export function ReleaseCreateParameters1ToJSON(value?: ReleaseCreateParameters1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cron_schedule': value.cronSchedule,
        'time_zone': value.timeZone,
        'locale_ids': value.localeIds,
        'tags': value.tags,
        'branch': value.branch,
        'app_min_version': value.appMinVersion,
        'app_max_version': value.appMaxVersion,
    };
}


