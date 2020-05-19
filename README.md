## phrase/phrase-js@1.0.0

Phrase is a translation management platform for software projects. You can collaborate on language file translation with your team or order translations through our platform. The API allows you to import locale files, download locale files, tag keys or interact in other ways with the localization data stored in Phrase for your account.

## API Endpoint

```
https://api.phrase.com/v2/
```

The API is only accessible via HTTPS, the base URL is <code>https://api.phrase.com/</code>, and the current version is <code>v2</code> which results in the base URL for all requests: <code>https://api.phrase.com/v2/</code>.

## Usage

[curl](http://curl.haxx.se/) is used primarily to send requests to Phrase in the examples. On most you'll find a second variant using the [Phrase API v2 client](https://phrase.com/cli/) that might be more convenient to handle. For further information check its [documentation](https://help.phrase.com/help/phrase-in-your-terminal).

## Use of HTTP Verbs

Phrase API v2 tries to use the appropriate HTTP verb for accessing each endpoint according to REST specification where possible:

<div class=\"table-responsive\">
  <table class=\"basic-table\">
    <thead>
      <tr class=\"basic-table__row basic-table__row--header\">
        <th class=\"basic-table__cell basic-table__cell--header\">Verb</th>
        <th class=\"basic-table__cell basic-table__cell--header\">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class=\"basic-table__cell\">GET</td>
        <td class=\"basic-table__cell\">Retrieve one or multiple resources</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\">POST</td>
        <td class=\"basic-table__cell\">Create a resource</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\">PUT</td>
        <td class=\"basic-table__cell\">Update a resource</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\">PATCH</td>
        <td class=\"basic-table__cell\">Update a resource (partially)</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\">DELETE</td>
        <td class=\"basic-table__cell\">Delete a resource</td>
      </tr>
    </tbody>
  </table>
</div>


## Identification via User-Agent

You must include the User-Agent header with the name of your application or project. It might be a good idea to include some sort of contact information  as well, so that we can get in touch if necessary (e.g. to warn you about Rate-Limiting or badly formed requests). Examples of excellent User-Agent headers:

```
User-Agent: Frederiks Mobile App (frederik@phrase.com)
User-Agent: ACME Inc Python Client (http://example.com/contact)
```

If you don't send this header, you will receive a response with 400 Bad Request.


## Lists

When you request a list of resources, the API will typically only return an array of resources including their most important attributes. For a detailed representation of the resource you should request its detailed representation.

Lists are usually [paginated](#pagination).


## Parameters

Many endpoints support additional parameters, e.g. for pagination. When passing them in a GET request you can send them as HTTP query string parameters:

```
$ curl -u EMAIL_OR_ACCESS_TOKEN \"https://api.phrase.com/v2/projects?page=2\"
```

When performing a POST, PUT, PATCH or DELETE request, we recommend sending parameters that are not already included in the URL, as JSON body:

```
$ curl -H 'Content-Type: application/json' -d '{\"name\":\"My new project\"}' -u EMAIL_OR_ACCESS_TOKEN https://api.phrase.com/v2/projects
```

Encoding parameters as JSON means better support for types (boolean, integer) and usually better readability. Don't forget to set the correct Content-Type for your request.

*The Content-Type header is omitted in some of the following examples for better readbility.*


## Errors


### Request Errors

If a request contains invalid JSON or is missing a required parameter (besides resource attributes), the status `400 Bad Request` is returned:

```
{
  \"message\": \"JSON could not be parsed\"
}
```


### Validation Errors

When the validation for a resource fails, the status `422 Unprocessable Entity` is returned, along with information on the affected fields:

```
{
  \"message\": \"Validation Failed\",
  \"errors\": [
    {
      \"resource\": \"Project\",
      \"field\": \"name\",
      \"message\": \"can't be blank\"
    }
  ]
}
```


## Date Format

Times and dates are returned and expected in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) date format:

```
YYYY-MM-DDTHH:MM:SSZ
```

Instead of 'Z' for UTC time zone you can specify your time zone's locale offset using the following notation:

```
YYYY-MM-DDTHH:MM:SS¬±hh:mm
```

Example for CET (1 hour behind UTC):

```
2015-03-31T13:00+01:00
```

Please note that in HTTP headers, we will use the appropriate recommended date formats instead of ISO 8601.


## Authentication

<div class=\"alert alert-info\">For more detailed information on authentication, check out the <a href=\"#authentication\">API v2 Authentication Guide</a>.</div>

There are two different ways to authenticate when performing API requests:

* E-Mail and password
* Oauth Access Token


### E-Mail and password

To get started easily, you can use HTTP Basic authentication with your email and password:

```
$ curl -u username:password \"https://api.phrase.com/v2/projects\"
```


### OAuth via Access Tokens

You can create and manage access tokens in your [profile settings](https://app.phrase.com/settings/oauth_access_tokens) in Translation Center or via the [Authorizations API](#authorizations).

Simply pass the access token as the username of your request:

```
$ curl -u ACCESS_TOKEN: \"https://api.phrase.com/v2/projects\"
```

or send the access token via the `Authorization` header field:

```
$ curl -H \"Authorization: token ACCESS_TOKEN\" https://api.phrase.com/v2/projects
```

For more detailed information on authentication, check out the <a href=\"#authentication\">API v2 Authentication Guide</a>.

#### Send via parameter

As JSONP (and other) requests cannot send HTTP Basic Auth credentials, a special query parameter `access_token` can be used:

```
curl \"https://api.phrase.com/v2/projects?access_token=ACCESS_TOKEN\"
```

You should only use this transport method if sending the authentication via header or Basic authentication is not possible.

### Two-Factor-Authentication

Users with Two-Factor-Authentication enabled have to send a valid token along their request with certain authentication methods (such as Basic authentication). The necessity of a Two-Factor-Authentication token is indicated by the `X-PhraseApp-OTP: required; :MFA-type` header in the response. The `:MFA-type`field indicates the source of the token, e.g. `app` (refers to your Authenticator application):

```
X-PhraseApp-OTP: required; app
```

To provide a Two-Factor-Authentication token you can simply send it in the header of the request:

```
curl -H \"X-PhraseApp-OTP: MFA-TOKEN\" -u EMAIL https://api.phrase.com/v2/projects
```

Since Two-Factor-Authentication tokens usually expire quickly, we recommend using an alternative authentication method such as OAuth access tokens.

### Multiple Accounts

Some endpoints require the account ID to be specified if the authenticated user is a member of multiple accounts. You can find the eight-digit account ID inside <a href=\"https://app.phrase.com/\" target=\"_blank\">Translation Center</a> by switching to the desired account and then visiting the account details page. If required, you can specify the account just like a normal parameter within the request.

## Pagination

Endpoints that return a list or resources will usually return paginated results and include 25 items by default. To access further pages, use the `page` parameter:

```
$ curl -u EMAIL_OR_ACCESS_TOKEN \"https://api.phrase.com/v2/projects?page=2\"
```

Some endpoints also allow a custom page size by using the `per_page` parameter:

```
$ curl -u EMAIL_OR_ACCESS_TOKEN \"https://api.phrase.com/v2/projects?page=2&per_page=50\"
```

Unless specified otherwise in the description of the respective endpoint, `per_page` allows you to specify a page size up to 100 items.


## Link-Headers

We provide you with pagination URLs in the [Link Header field](http://tools.ietf.org/html/rfc5988). Make use of this information to avoid building pagination URLs yourself.

```
Link: <https://api.phrase.com/v2/projects?page=1>; rel=\"first\", <https://api.phrase.com/v2/projects?page=3>; rel=\"prev\", <https://api.phrase.com/v2/projects?page=5>; rel=\"next\", <https://api.phrase.com/v2/projects?page=9>; rel=\"last\"
```

Possible `rel` values are:

<div class=\"table-responsive\">
  <table class=\"basic-table\">
    <thead>
      <tr class=\"basic-table__row basic-table__row--header\">
        <th class=\"basic-table__cell basic-table__cell--header\">Value</th>
        <th class=\"basic-table__cell basic-table__cell--header\">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class=\"basic-table__cell\">next</td>
        <td class=\"basic-table__cell\">URL of the next page of results</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\">last</td>
        <td class=\"basic-table__cell\">URL of the last page of results</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\">first</td>
        <td class=\"basic-table__cell\">URL of the first page of results</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\">prev</td>
        <td class=\"basic-table__cell\">URL of the previous page of results</td>
      </tr>
    </tbody>
  </table>
</div>

## Rate Limiting

All API endpoints are subject to rate limiting to ensure good performance for all customers. The rate limit is calculated per user:

* 1000 requests per 5 minutes
* 4 concurrent (parallel) requests

For your convenience we send information on the current rate limit within the response headers:

<div class=\"table-responsive\">
  <table class=\"basic-table\">
    <thead>
      <tr class=\"basic-table__row basic-table__row--header\">
        <th class=\"basic-table__cell basic-table__cell--header\">Header</th>
        <th class=\"basic-table__cell basic-table__cell--header\">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class=\"basic-table__cell\" style=\"white-space: nowrap;\"><code>X-Rate-Limit-Limit</code></td>
        <td class=\"basic-table__cell\">Number of max requests allowed in the current time period</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\" style=\"white-space: nowrap;\"><code>X-Rate-Limit-Remaining</code></td>
        <td class=\"basic-table__cell\">Number of remaining requests in the current time period</td>
      </tr>
      <tr>
        <td class=\"basic-table__cell\" style=\"white-space: nowrap;\"><code>X-Rate-Limit-Reset</code></td>
        <td class=\"basic-table__cell\">Timestamp of end of current time period as UNIX timestamp</td>
      </tr>
    </tbody>
  </table>
</div>

If you should run into the rate limit, you will receive the HTTP status code `429: Too many requests`.

If you should need higher rate limits, [contact us](https://phrase.com/contact).


## Conditional GET requests / HTTP Caching

<div class=\"alert alert-info\"><p><strong>Note:</strong> Conditional GET requests are currently only supported for <a href=\"#locales_download\">locales#download</a> and <a href=\"#translations_index\">translations#index</a></p></div>

We will return an ETag or Last-Modified header with most GET requests. When you request a resource we recommend to store this value and submit them on subsequent requests as `If-Modified-Since` and `If-None-Match` headers. If the resource has not changed in the meantime, we will return the status `304 Not Modified` instead of rendering and returning the resource again. In most cases this is less time-consuming and makes your application/integration faster.

Please note that all conditional requests that return a response with status 304 don't count against your rate limits.

```
$ curl -i -u EMAIL_OR_ACCESS_TOKEN \"https://api.phrase.com/v2/projects/1234abcd1234abcdefefabcd1234efab/locales/en/download\"
HTTP/1.1 200 OK
ETag: \"abcd1234abcdefefabcd1234efab1234\"
Last-Modified: Wed, 28 Jan 2015 15:31:30 UTC
Status: 200 OK

$ curl -i -u EMAIL_OR_ACCESS_TOKEN \"https://api.phrase.com/v2/projects/1234abcd1234abcdefefabcd1234efab/locales/en/download\" -H 'If-None-Match: \"abcd1234abcdefefabcd1234efab1234\"'
HTTP/1.1 304 Not Modified
ETag: \"abcd1234abcdefefabcd1234efab1234\"
Last-Modified: Wed, 28 Jan 2015 15:31:30 UTC
Status: 304 Not Modified

$ curl -i -u EMAIL_OR_ACCESS_TOKEN \"https://api.phrase.com/v2/projects/1234abcd1234abcdefefabcd1234efab/locales/en/download\" -H \"If-Modified-Since: Wed, 28 Jan 2015 15:31:30 UTC\"
HTTP/1.1 304 Not Modified
Last-Modified: Wed, 28 Jan 2015 15:31:30 UTC
Status: 304 Not Modified
```


## JSONP

The Phrase API supports [JSONP](http://en.wikipedia.org/wiki/JSONP) for all GET requests in order to deal with cross-domain request issues. Just send a `?callback` parameter along with the request to specify the Javascript function name to be called with the response content:

```
$ curl \"https://api.phrase.com/v2/projects?callback=myFunction\"
```

The response will include the normal output for that endpoint, along with a `meta` section including header data:

```
myFunction({
  {
    \"meta\": {
      \"status\": 200,
      ...
    },
    \"data\": [
      {
        \"id\": \"1234abcd1234abc1234abcd1234abc\"
        ...
      }
    ]
  }
});
```

To authenticate a JSONP request, you can send a valid [access token](#authentication) as the `?access_token` parameter along the request:

```
$ curl \"https://api.phrase.com/v2/projects?callback=myFunction&access_token=ACCESS-TOKEN\"
```


## This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 1.0.0
- Build package: phrase/phrase-js
For more information, please visit [https://developers.phrase.com/api/](https://developers.phrase.com/api/)


This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Installation

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install phrase/phrase-js@1.0.0 --save
```

if you are using yarn set `.yarnrc` first

`@phrase:registry" "https://npm.pkg.github.com`

```
yarn install phrase/phrase-js@1.0.0
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```


## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```typescript
import {Configuration, SpacesApi} from "Phrase"

const configuration = new Configuration({apiKey: 'token API_TOKEN'})

const spaceApi = new SpacesApi(configuration)

let requestParameters = {
  accountId: 'ACCOUNT_ID'
}

spaceApi.spacesList(requestParameters).then(function (data) { console.log(data) })
```

## API Endpoints

All URIs are relative to *https://api.phrase.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountsApi* | **accountShow** | **GET** /accounts/{id} | Get a single account
*AccountsApi* | **accountsList** | **GET** /accounts | List accounts
*AuthorizationsApi* | **authorizationCreate** | **POST** /authorizations | Create an authorization
*AuthorizationsApi* | **authorizationDelete** | **DELETE** /authorizations/{id} | Delete an authorization
*AuthorizationsApi* | **authorizationShow** | **GET** /authorizations/{id} | Get a single authorization
*AuthorizationsApi* | **authorizationUpdate** | **PATCH** /authorizations/{id} | Update an authorization
*AuthorizationsApi* | **authorizationsList** | **GET** /authorizations | List authorizations
*BitbucketSyncApi* | **bitbucketSyncExport** | **POST** /bitbucket_syncs/{id}/export | Export from Phrase to Bitbucket
*BitbucketSyncApi* | **bitbucketSyncImport** | **POST** /bitbucket_syncs/{id}/import | Import to Phrase from Bitbucket
*BitbucketSyncApi* | **bitbucketSyncsList** | **GET** /bitbucket_syncs | List Bitbucket syncs
*BlacklistedKeysApi* | **blacklistedKeyCreate** | **POST** /projects/{project_id}/blacklisted_keys | Create a blacklisted key
*BlacklistedKeysApi* | **blacklistedKeyDelete** | **DELETE** /projects/{project_id}/blacklisted_keys/{id} | Delete a blacklisted key
*BlacklistedKeysApi* | **blacklistedKeyShow** | **GET** /projects/{project_id}/blacklisted_keys/{id} | Get a single blacklisted key
*BlacklistedKeysApi* | **blacklistedKeyUpdate** | **PATCH** /projects/{project_id}/blacklisted_keys/{id} | Update a blacklisted key
*BlacklistedKeysApi* | **blacklistedKeysList** | **GET** /projects/{project_id}/blacklisted_keys | List blacklisted keys
*BranchesApi* | **branchCompare** | **GET** /projects/{project_id}/branches/{name}/compare | Compare branches
*BranchesApi* | **branchCreate** | **POST** /projects/{project_id}/branches | Create a branch
*BranchesApi* | **branchDelete** | **DELETE** /projects/{project_id}/branches/{name} | Delete a branch
*BranchesApi* | **branchMerge** | **PATCH** /projects/{project_id}/branches/{name}/merge | Merge a branch
*BranchesApi* | **branchShow** | **GET** /projects/{project_id}/branches/{name} | Get a single branch
*BranchesApi* | **branchUpdate** | **PATCH** /projects/{project_id}/branches/{name} | Update a branch
*BranchesApi* | **branchesList** | **GET** /projects/{project_id}/branches | List branches
*CommentsApi* | **commentCreate** | **POST** /projects/{project_id}/keys/{key_id}/comments | Create a comment
*CommentsApi* | **commentDelete** | **DELETE** /projects/{project_id}/keys/{key_id}/comments/{id} | Delete a comment
*CommentsApi* | **commentMarkCheck** | **GET** /projects/{project_id}/keys/{key_id}/comments/{id}/read | Check if comment is read
*CommentsApi* | **commentMarkRead** | **PATCH** /projects/{project_id}/keys/{key_id}/comments/{id}/read | Mark a comment as read
*CommentsApi* | **commentMarkUnread** | **DELETE** /projects/{project_id}/keys/{key_id}/comments/{id}/read | Mark a comment as unread
*CommentsApi* | **commentShow** | **GET** /projects/{project_id}/keys/{key_id}/comments/{id} | Get a single comment
*CommentsApi* | **commentUpdate** | **PATCH** /projects/{project_id}/keys/{key_id}/comments/{id} | Update a comment
*CommentsApi* | **commentsList** | **GET** /projects/{project_id}/keys/{key_id}/comments | List comments
*DistributionsApi* | **distributionCreate** | **POST** /accounts/{account_id}/distributions | Create a distribution
*DistributionsApi* | **distributionDelete** | **DELETE** /accounts/{account_id}/distributions/{id} | Delete a distribution
*DistributionsApi* | **distributionShow** | **GET** /accounts/{account_id}/distributions/{id} | Get a single distribution
*DistributionsApi* | **distributionUpdate** | **PATCH** /accounts/{account_id}/distributions/{id} | Update a distribution
*DistributionsApi* | **distributionsList** | **GET** /accounts/{account_id}/distributions | List distributions
*FormatsApi* | **formatsList** | **GET** /formats | List formats
*GitLabSyncApi* | **gitlabSyncDelete** | **DELETE** /gitlab_syncs/{id} | Delete single Sync Setting
*GitLabSyncApi* | **gitlabSyncExport** | **POST** /gitlab_syncs/{gitlab_sync_id}/export | Export from Phrase to GitLab
*GitLabSyncApi* | **gitlabSyncHistory** | **GET** /gitlab_syncs/{gitlab_sync_id}/history | History of single Sync Setting
*GitLabSyncApi* | **gitlabSyncImport** | **POST** /gitlab_syncs/{gitlab_sync_id}/import | Import from GitLab to Phrase
*GitLabSyncApi* | **gitlabSyncList** | **GET** /gitlab_syncs | List GitLab syncs
*GitLabSyncApi* | **gitlabSyncShow** | **GET** /gitlab_syncs/{id} | Get single Sync Setting
*GitLabSyncApi* | **gitlabSyncUpdate** | **PUT** /gitlab_syncs/{id} | Update single Sync Setting
*GlossaryApi* | **glossariesList** | **GET** /accounts/{account_id}/glossaries | List glossaries
*GlossaryApi* | **glossaryCreate** | **POST** /accounts/{account_id}/glossaries | Create a glossary
*GlossaryApi* | **glossaryDelete** | **DELETE** /accounts/{account_id}/glossaries/{id} | Delete a glossary
*GlossaryApi* | **glossaryShow** | **GET** /accounts/{account_id}/glossaries/{id} | Get a single glossary
*GlossaryApi* | **glossaryUpdate** | **PATCH** /accounts/{account_id}/glossaries/{id} | Update a glossary
*GlossaryTermTranslationsApi* | **glossaryTermTranslationCreate** | **POST** /accounts/{account_id}/glossaries/{glossary_id}/terms/{term_id}/translations | Create a glossary term translation
*GlossaryTermTranslationsApi* | **glossaryTermTranslationDelete** | **DELETE** /accounts/{account_id}/glossaries/{glossary_id}/terms/{term_id}/translations/{id} | Delete a glossary term translation
*GlossaryTermTranslationsApi* | **glossaryTermTranslationUpdate** | **PATCH** /accounts/{account_id}/glossaries/{glossary_id}/terms/{term_id}/translations/{id} | Update a glossary term translation
*GlossaryTermsApi* | **glossaryTermCreate** | **POST** /accounts/{account_id}/glossaries/{glossary_id}/terms | Create a glossary term
*GlossaryTermsApi* | **glossaryTermDelete** | **DELETE** /accounts/{account_id}/glossaries/{glossary_id}/terms/{id} | Delete a glossary term
*GlossaryTermsApi* | **glossaryTermShow** | **GET** /accounts/{account_id}/glossaries/{glossary_id}/terms/{id} | Get a single glossary term
*GlossaryTermsApi* | **glossaryTermUpdate** | **PATCH** /accounts/{account_id}/glossaries/{glossary_id}/terms/{id} | Update a glossary term
*GlossaryTermsApi* | **glossaryTermsList** | **GET** /accounts/{account_id}/glossaries/{glossary_id}/terms | List glossary terms
*InvitationsApi* | **invitationCreate** | **POST** /accounts/{account_id}/invitations | Create a new invitation
*InvitationsApi* | **invitationDelete** | **DELETE** /accounts/{account_id}/invitations/{id} | Delete an invitation
*InvitationsApi* | **invitationResend** | **POST** /accounts/{account_id}/invitations/{id}/resend | Resend an invitation
*InvitationsApi* | **invitationShow** | **GET** /accounts/{account_id}/invitations/{id} | Get a single invitation
*InvitationsApi* | **invitationUpdate** | **PATCH** /accounts/{account_id}/invitations/{id} | Update an invitation
*InvitationsApi* | **invitationsList** | **GET** /accounts/{account_id}/invitations | List invitations
*JobLocalesApi* | **jobLocaleComplete** | **POST** /projects/{project_id}/jobs/{job_id}/locales/{id}/complete | Complete a job locale
*JobLocalesApi* | **jobLocaleDelete** | **DELETE** /projects/{project_id}/jobs/{job_id}/locales/{id} | Delete a job locale
*JobLocalesApi* | **jobLocaleReopen** | **POST** /projects/{project_id}/jobs/{job_id}/locales/{id}/reopen | Reopen a job locale
*JobLocalesApi* | **jobLocaleShow** | **GET** /projects/{project_id}/jobs/{job_id}/locale/{id} | Get a single job locale
*JobLocalesApi* | **jobLocaleUpdate** | **PATCH** /projects/{project_id}/jobs/{job_id}/locales/{id} | Update a job locale
*JobLocalesApi* | **jobLocalesCreate** | **POST** /projects/{project_id}/jobs/{job_id}/locales | Create a job locale
*JobLocalesApi* | **jobLocalesList** | **GET** /projects/{project_id}/jobs/{job_id}/locales | List job locales
*JobsApi* | **jobComplete** | **POST** /projects/{project_id}/jobs/{id}/complete | Complete a job
*JobsApi* | **jobCreate** | **POST** /projects/{project_id}/jobs | Create a job
*JobsApi* | **jobDelete** | **DELETE** /projects/{project_id}/jobs/{id} | Delete a job
*JobsApi* | **jobKeysCreate** | **POST** /projects/{project_id}/jobs/{id}/keys | Add keys to job
*JobsApi* | **jobKeysDelete** | **DELETE** /projects/{project_id}/jobs/{id}/keys | Remove keys from job
*JobsApi* | **jobReopen** | **POST** /projects/{project_id}/jobs/{id}/reopen | Reopen a job
*JobsApi* | **jobShow** | **GET** /projects/{project_id}/jobs/{id} | Get a single job
*JobsApi* | **jobStart** | **POST** /projects/{project_id}/jobs/{id}/start | Start a job
*JobsApi* | **jobUpdate** | **PATCH** /projects/{project_id}/jobs/{id} | Update a job
*JobsApi* | **jobsList** | **GET** /projects/{project_id}/jobs | List jobs
*KeysApi* | **keyCreate** | **POST** /projects/{project_id}/keys | Create a key
*KeysApi* | **keyDelete** | **DELETE** /projects/{project_id}/keys/{id} | Delete a key
*KeysApi* | **keyShow** | **GET** /projects/{project_id}/keys/{id} | Get a single key
*KeysApi* | **keyUpdate** | **PATCH** /projects/{project_id}/keys/{id} | Update a key
*KeysApi* | **keysDelete** | **DELETE** /projects/{project_id}/keys | Delete collection of keys
*KeysApi* | **keysList** | **GET** /projects/{project_id}/keys | List keys
*KeysApi* | **keysSearch** | **POST** /projects/{project_id}/keys/search | Search keys
*KeysApi* | **keysTag** | **PATCH** /projects/{project_id}/keys/tag | Add tags to collection of keys
*KeysApi* | **keysUntag** | **PATCH** /projects/{project_id}/keys/untag | Remove tags from collection of keys
*LocalesApi* | **localeCreate** | **POST** /projects/{project_id}/locales | Create a locale
*LocalesApi* | **localeDelete** | **DELETE** /projects/{project_id}/locales/{id} | Delete a locale
*LocalesApi* | **localeDownload** | **GET** /projects/{project_id}/locales/{id}/download | Download a locale
*LocalesApi* | **localeShow** | **GET** /projects/{project_id}/locales/{id} | Get a single locale
*LocalesApi* | **localeUpdate** | **PATCH** /projects/{project_id}/locales/{id} | Update a locale
*LocalesApi* | **localesList** | **GET** /projects/{project_id}/locales | List locales
*MembersApi* | **memberDelete** | **DELETE** /accounts/{account_id}/members/{id} | Remove a user from the account
*MembersApi* | **memberShow** | **GET** /accounts/{account_id}/members/{id} | Get single member
*MembersApi* | **memberUpdate** | **PATCH** /accounts/{account_id}/members/{id} | Update a member
*MembersApi* | **membersList** | **GET** /accounts/{account_id}/members | List members
*OrdersApi* | **orderConfirm** | **PATCH** /projects/{project_id}/orders/{id}/confirm | Confirm an order
*OrdersApi* | **orderCreate** | **POST** /projects/{project_id}/orders | Create a new order
*OrdersApi* | **orderDelete** | **DELETE** /projects/{project_id}/orders/{id} | Cancel an order
*OrdersApi* | **orderShow** | **GET** /projects/{project_id}/orders/{id} | Get a single order
*OrdersApi* | **ordersList** | **GET** /projects/{project_id}/orders | List orders
*ProjectsApi* | **projectCreate** | **POST** /projects | Create a project
*ProjectsApi* | **projectDelete** | **DELETE** /projects/{id} | Delete a project
*ProjectsApi* | **projectShow** | **GET** /projects/{id} | Get a single project
*ProjectsApi* | **projectUpdate** | **PATCH** /projects/{id} | Update a project
*ProjectsApi* | **projectsList** | **GET** /projects | List projects
*ReleasesApi* | **releaseCreate** | **POST** /accounts/{account_id}/distributions/{distribution_id}/releases | Create a release
*ReleasesApi* | **releaseDelete** | **DELETE** /accounts/{account_id}/distributions/{distribution_id}/releases/{id} | Delete a release
*ReleasesApi* | **releasePublish** | **POST** /accounts/{account_id}/distributions/{distribution_id}/releases/{id}/publish | Publish a release
*ReleasesApi* | **releaseShow** | **GET** /accounts/{account_id}/distributions/{distribution_id}/releases/{id} | Get a single release
*ReleasesApi* | **releaseUpdate** | **PATCH** /accounts/{account_id}/distributions/{distribution_id}/releases/{id} | Update a release
*ReleasesApi* | **releasesList** | **GET** /accounts/{account_id}/distributions/{distribution_id}/releases | List releases
*ScreenshotMarkersApi* | **screenshotMarkerCreate** | **POST** /projects/{project_id}/screenshots/{screenshot_id}/markers | Create a screenshot marker
*ScreenshotMarkersApi* | **screenshotMarkerDelete** | **DELETE** /projects/{project_id}/screenshots/{screenshot_id}/markers | Delete a screenshot marker
*ScreenshotMarkersApi* | **screenshotMarkerShow** | **GET** /projects/{project_id}/screenshots/{screenshot_id}/markers/{id} | Get a single screenshot marker
*ScreenshotMarkersApi* | **screenshotMarkerUpdate** | **PATCH** /projects/{project_id}/screenshots/{screenshot_id}/markers | Update a screenshot marker
*ScreenshotMarkersApi* | **screenshotMarkersList** | **GET** /projects/{project_id}/screenshots/{id}/markers | List screenshot markers
*ScreenshotsApi* | **screenshotCreate** | **POST** /projects/{project_id}/screenshots | Create a screenshot
*ScreenshotsApi* | **screenshotDelete** | **DELETE** /projects/{project_id}/screenshots/{id} | Delete a screenshot
*ScreenshotsApi* | **screenshotShow** | **GET** /projects/{project_id}/screenshots/{id} | Get a single screenshot
*ScreenshotsApi* | **screenshotUpdate** | **PATCH** /projects/{project_id}/screenshots/{id} | Update a screenshot
*ScreenshotsApi* | **screenshotsList** | **GET** /projects/{project_id}/screenshots | List screenshots
*SpacesApi* | **spaceCreate** | **POST** /accounts/{account_id}/spaces | Create a Space
*SpacesApi* | **spaceDelete** | **DELETE** /accounts/{account_id}/spaces/{id} | Delete Space
*SpacesApi* | **spaceShow** | **GET** /accounts/{account_id}/spaces/{id} | Get Space
*SpacesApi* | **spaceUpdate** | **PATCH** /accounts/{account_id}/spaces/{id} | Update Space
*SpacesApi* | **spacesList** | **GET** /accounts/{account_id}/spaces | List Spaces
*SpacesApi* | **spacesProjectsCreate** | **POST** /accounts/{account_id}/spaces/{space_id}/projects | Add Project
*SpacesApi* | **spacesProjectsDelete** | **DELETE** /accounts/{account_id}/spaces/{space_id}/projects/{id} | Remove Project
*SpacesApi* | **spacesProjectsList** | **GET** /accounts/{account_id}/spaces/{space_id}/projects | List Projects
*StyleGuidesApi* | **styleguideCreate** | **POST** /projects/{project_id}/styleguides | Create a style guide
*StyleGuidesApi* | **styleguideDelete** | **DELETE** /projects/{project_id}/styleguides/{id} | Delete a style guide
*StyleGuidesApi* | **styleguideShow** | **GET** /projects/{project_id}/styleguides/{id} | Get a single style guide
*StyleGuidesApi* | **styleguideUpdate** | **PATCH** /projects/{project_id}/styleguides/{id} | Update a style guide
*StyleGuidesApi* | **styleguidesList** | **GET** /projects/{project_id}/styleguides | List style guides
*TagsApi* | **tagCreate** | **POST** /projects/{project_id}/tags | Create a tag
*TagsApi* | **tagDelete** | **DELETE** /projects/{project_id}/tags/{name} | Delete a tag
*TagsApi* | **tagShow** | **GET** /projects/{project_id}/tags/{name} | Get a single tag
*TagsApi* | **tagsList** | **GET** /projects/{project_id}/tags | List tags
*TranslationsApi* | **translationCreate** | **POST** /projects/{project_id}/translations | Create a translation
*TranslationsApi* | **translationExclude** | **PATCH** /projects/{project_id}/translations/{id}/exclude | Exclude a translation from export
*TranslationsApi* | **translationInclude** | **PATCH** /projects/{project_id}/translations/{id}/include | Revoke exclusion of a translation in export
*TranslationsApi* | **translationReview** | **PATCH** /projects/{project_id}/translations/{id}/review | Review a translation
*TranslationsApi* | **translationShow** | **GET** /projects/{project_id}/translations/{id} | Get a single translation
*TranslationsApi* | **translationUnverify** | **PATCH** /projects/{project_id}/translations/{id}/unverify | Mark a translation as unverified
*TranslationsApi* | **translationUpdate** | **PATCH** /projects/{project_id}/translations/{id} | Update a translation
*TranslationsApi* | **translationVerify** | **PATCH** /projects/{project_id}/translations/{id}/verify | Verify a translation
*TranslationsApi* | **translationsByKey** | **GET** /projects/{project_id}/keys/{key_id}/translations | List translations by key
*TranslationsApi* | **translationsByLocale** | **GET** /projects/{project_id}/locales/{locale_id}/translations | List translations by locale
*TranslationsApi* | **translationsExclude** | **PATCH** /projects/{project_id}/translations/exclude | Set exclude from export flag on translations selected by query
*TranslationsApi* | **translationsInclude** | **PATCH** /projects/{project_id}/translations/include | Remove exlude from import flag from translations selected by query
*TranslationsApi* | **translationsList** | **GET** /projects/{project_id}/translations | List all translations
*TranslationsApi* | **translationsReview** | **PATCH** /projects/{project_id}/translations/review | Review translations selected by query
*TranslationsApi* | **translationsSearch** | **POST** /projects/{project_id}/translations/search | Search translations
*TranslationsApi* | **translationsUnverify** | **PATCH** /projects/{project_id}/translations/unverify | Mark translations selected by query as unverified
*TranslationsApi* | **translationsVerify** | **PATCH** /projects/{project_id}/translations/verify | Verify translations selected by query
*UploadsApi* | **uploadCreate** | **POST** /projects/{project_id}/uploads | Upload a new file
*UploadsApi* | **uploadShow** | **GET** /projects/{project_id}/uploads/{id} | View upload details
*UploadsApi* | **uploadsList** | **GET** /projects/{project_id}/uploads | List uploads
*UsersApi* | **showUser** | **GET** /user | Show current User
*VersionsHistoryApi* | **versionShow** | **GET** /projects/{project_id}/translations/{translation_id}/versions/{id} | Get a single version
*VersionsHistoryApi* | **versionsList** | **GET** /projects/{project_id}/translations/{translation_id}/versions | List all versions
*WebhooksApi* | **webhookCreate** | **POST** /projects/{project_id}/webhooks | Create a webhook
*WebhooksApi* | **webhookDelete** | **DELETE** /projects/{project_id}/webhooks/{id} | Delete a webhook
*WebhooksApi* | **webhookShow** | **GET** /projects/{project_id}/webhooks/{id} | Get a single webhook
*WebhooksApi* | **webhookTest** | **POST** /projects/{project_id}/webhooks/{id}/test | Test a webhook
*WebhooksApi* | **webhookUpdate** | **PATCH** /projects/{project_id}/webhooks/{id} | Update a webhook
*WebhooksApi* | **webhooksList** | **GET** /projects/{project_id}/webhooks | List webhooks


## Author

support@phrase.com

