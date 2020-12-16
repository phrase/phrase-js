## phrase-js@1.0.10

Phrase is a translation management platform for software projects. You can collaborate on language file translation with your team or order translations through our platform. The API allows you to import locale files, download locale files, tag keys or interact in other ways with the localization data stored in Phrase for your account.

## This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 1.0.10
- Build package: phrase-js
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
npm install phrase-js@1.0.10 --save
```

if you are using yarn


```
yarn install phrase-js@1.0.10
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```


## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```typescript
import {Configuration, SpacesApi} from "phrase-js"

const configuration = new Configuration({apiKey: 'token API_TOKEN'})

const spaceApi = new SpacesApi(configuration)

let requestParameters = {
  accountId: 'ACCOUNT_ID'
}

spaceApi.spacesList(requestParameters).then(function (data) { console.log(data) })
```

## Getting Started in Node.js

This package is using window and FormData so make sure to have polyfills for it

here is the example package.json

```
{
  "name": "openapi_typescript_test",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "start": "tsc && node dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^14.0.1",
    "form-data": "^3.0.0",
    "node-fetch": "^2.6.0",
    "phrase-js": "^1.0.10"
  },
  "devDependencies": {
    "tslint": "^5.20.1",
    "typescript": "^3.9.2"
  }
}
```

and you can use it as follows

```
import {Configuration, SpacesApi} from "phrase-js"
var FormData = require("form-data")
var fetch = require("node-fetch")


const globalAny: any = global;
globalAny.window = {
  fetch
}
globalAny.FormData = FormData

const configuration = new Configuration({apiKey: 'token API_TOKEN'})

const spaceApi = new SpacesApi(configuration)

let requestParameters = {
  accountId: 'YOUR_ACCOUNT_ID'
}

spaceApi.spacesList(requestParameters).then(function (data) {console.log(data)})
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
*DocumentsApi* | **documentDelete** | **DELETE** /projects/{project_id}/documents/{id} | Delete document
*DocumentsApi* | **documentsList** | **GET** /projects/{project_id}/documents | List documents
*FormatsApi* | **formatsList** | **GET** /formats | List formats
*GitHubSyncApi* | **githubSyncExport** | **POST** /github_syncs/export | Export from Phrase to GitHub
*GitHubSyncApi* | **githubSyncImport** | **POST** /github_syncs/import | Import to Phrase from GitHub
*GitLabSyncApi* | **gitlabSyncDelete** | **DELETE** /gitlab_syncs/{id} | Delete single Sync Setting
*GitLabSyncApi* | **gitlabSyncExport** | **POST** /gitlab_syncs/{gitlab_sync_id}/export | Export from Phrase to GitLab
*GitLabSyncApi* | **gitlabSyncHistory** | **GET** /gitlab_syncs/{gitlab_sync_id}/history | History of single Sync Setting
*GitLabSyncApi* | **gitlabSyncImport** | **POST** /gitlab_syncs/{gitlab_sync_id}/import | Import from GitLab to Phrase
*GitLabSyncApi* | **gitlabSyncList** | **GET** /gitlab_syncs | List GitLab syncs
*GitLabSyncApi* | **gitlabSyncShow** | **GET** /gitlab_syncs/{id} | Get single Sync Setting
*GitLabSyncApi* | **gitlabSyncUpdate** | **PUT** /gitlab_syncs/{id} | Update single Sync Setting
*GlossariesApi* | **glossariesList** | **GET** /accounts/{account_id}/glossaries | List glossaries
*GlossariesApi* | **glossaryCreate** | **POST** /accounts/{account_id}/glossaries | Create a glossary
*GlossariesApi* | **glossaryDelete** | **DELETE** /accounts/{account_id}/glossaries/{id} | Delete a glossary
*GlossariesApi* | **glossaryShow** | **GET** /accounts/{account_id}/glossaries/{id} | Get a single glossary
*GlossariesApi* | **glossaryUpdate** | **PATCH** /accounts/{account_id}/glossaries/{id} | Update a glossary
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
*JobsApi* | **jobsByAccount** | **GET** /accounts/{account_id}/jobs | List account jobs
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
*MembersApi* | **memberUpdateSettings** | **PATCH** /projects/{project_id}/members/{id} | Update a member\&#39;s project settings
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
*TeamsApi* | **teamCreate** | **POST** /accounts/{account_id}/teams | Create a Team
*TeamsApi* | **teamDelete** | **DELETE** /accounts/{account_id}/teams/{team_id} | Delete Team
*TeamsApi* | **teamShow** | **GET** /accounts/{account_id}/teams/{team_id} | Get Team
*TeamsApi* | **teamUpdate** | **PATCH** /accounts/{account_id}/teams/{team_id} | Update Team
*TeamsApi* | **teamsList** | **GET** /accounts/{account_id}/teams | List Teams
*TeamsApi* | **teamsProjectsCreate** | **POST** /accounts/{account_id}/teams/{team_id}/projects | Add Project
*TeamsApi* | **teamsProjectsDelete** | **DELETE** /accounts/{account_id}/teams/{team_id}/projects/{id} | Remove Project
*TeamsApi* | **teamsSpacesCreate** | **POST** /accounts/{account_id}/teams/{team_id}/spaces | Add Space
*TeamsApi* | **teamsSpacesDelete** | **DELETE** /accounts/{account_id}/teams/{team_id}/spaces/{id} | Remove Space
*TeamsApi* | **teamsUsersCreate** | **POST** /accounts/{account_id}/teams/{team_id}/users | Add User
*TeamsApi* | **teamsUsersDelete** | **DELETE** /accounts/{account_id}/teams/{team_id}/users/{id} | Remove User
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

