# VTuber Database [![Build Status](https://travis-ci.com/bilibili-dd-center/vdb.svg?branch=master)](https://travis-ci.com/bilibili-dd-center/vdb)

The Vitual Youtuber Name List Database.

We are looking forward to create a database with all vtubers.

### Usage:

json file can be download from: `https://vdb.vtbs.moe/json/list.json`, [https://vdb.vtbs.moe/json/list.json](https://vdb.vtbs.moe/json/list.json)

* `meta`: `Object` Metadata.

  * `UUID_NAMESPACE`: (`String`) The UUID namespace, currently is `9e880107-dd14-4f7d-a04c-4b2bf8d9db7d`.

  * `linkSyntax`: (`Object`) by replace `{id}` with the `id` of the platform, it generates a url to the platform

    For example, bilibili id is `349991143`, where `linkSyntax.bilibili` is `https://space.bilibili.com/{id}`, So `https://space.bilibili.com/349991143` will be the url

* `vtbs`: (`Array[Object]`) Contains all Vtuber

  * `uuid`: (`String`) The uuid generated from the namecpace and file in `/vtbs` name
  * `type`: (`String`) Type, can be `vtuber`, `group` or `unknow`
  * `bot`: (`Boolean`) robot vtuber/vup
  * `accounts`: (`Array[Object]`)
    * `id`: (`String`) The account identifier of that platform
    * `type`: (`String`) `official` or `relay`
    * `platform`: (`String`) Can be `youtube`, `twitter`, `bilibili`, `userlocal`, or something else
  * `name`: (`Object`)
    * `default`: (`String`) the default language of name
    * `cn`: (`String`) Chinese name
    * `jp`: (`String`) Japanese name
    * `en`: (`String`) English name
    * ...

### File structure:

* `/backup`: some script and list from elsewhere

* `/config`: the config file

  * `/config/index.js`:  the main config file

    * UUID_NAMESPACE: The current UUID namespace

    * linkSyntax: the link syntax

* `/syntax`: syntax guides

  * `/syntax/list.json`: A very minimal list.json example

* `/test`: test files

  * `/test/repeat.js`: test for duplicated official accounts

* `/vtbs`: all vtubers in human readable/editable format

* `index.js`: The database generator, return promise

* `generator.js`: write the database to json file

### Extra

uuid of each vtuber is generated with uuid v5 from the uuid namespace and the vtuber data filename located in `/vtbs`

### Contribution

Node.js is required for some process

if Node.js is installed, you can use `npm install` to install nessasery packages.

* Fork it
* Pull request

#### Add/Update Vtuber

Add or edit files in `/vtbs`,

`.js` or `.json` file are both ok, a example of json file will be `/vtbs/774.json`,

if possable, run unit test by `npm test`.

#### Add/Update Social Media Platform linkSyntax

Edit `/config/index.js`.