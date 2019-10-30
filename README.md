# VTuber Database [![Build Status](https://travis-ci.com/dd-center/vdb.svg?branch=master)](https://travis-ci.com/dd-center/vdb)
[![All Contributors](https://img.shields.io/badge/all_contributors-41-orange.svg?style=flat-square)](#contributors-)

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

`.json` format,

if possable, run unit test by `npm test`.

#### Add/Update Social Media Platform linkSyntax

Edit `/config/index.js`.
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/simon300000"><img src="https://avatars1.githubusercontent.com/u/12656264?v=4" width="72px;" alt="simon3000"/><br /><sub><b>simon3000</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=simon300000" title="Code">💻</a> <a href="#content-simon300000" title="Content">🖋</a></td>
    <td align="center"><a href="http://qaq.gd"><img src="https://avatars3.githubusercontent.com/u/2290026?v=4" width="72px;" alt="brainbush"/><br /><sub><b>brainbush</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=brainbush" title="Code">💻</a> <a href="#content-brainbush" title="Content">🖋</a></td>
    <td align="center"><a href="https://faithtown.tech"><img src="https://avatars3.githubusercontent.com/u/20179549?v=4" width="72px;" alt="Afanyiyu"/><br /><sub><b>Afanyiyu</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=Afanyiyu" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/miragora123"><img src="https://avatars2.githubusercontent.com/u/41156138?v=4" width="72px;" alt="miragora123"/><br /><sub><b>miragora123</b></sub></a><br /><a href="#content-miragora123" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/makiscarle"><img src="https://avatars3.githubusercontent.com/u/54412846?v=4" width="72px;" alt="makiscarle"/><br /><sub><b>makiscarle</b></sub></a><br /><a href="#content-makiscarle" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/yfk2012"><img src="https://avatars0.githubusercontent.com/u/53398439?v=4" width="72px;" alt="yfk2012"/><br /><sub><b>yfk2012</b></sub></a><br /><a href="#content-yfk2012" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/yamisight"><img src="https://avatars2.githubusercontent.com/u/54345477?v=4" width="72px;" alt="yamisight"/><br /><sub><b>yamisight</b></sub></a><br /><a href="#content-yamisight" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kevinmiao907"><img src="https://avatars2.githubusercontent.com/u/32000679?v=4" width="72px;" alt="kevinmiao907"/><br /><sub><b>kevinmiao907</b></sub></a><br /><a href="#content-kevinmiao907" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/huan-guang"><img src="https://avatars1.githubusercontent.com/u/48501931?v=4" width="72px;" alt="幻光灵风"/><br /><sub><b>幻光灵风</b></sub></a><br /><a href="#content-huan-guang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/GCyingmanji"><img src="https://avatars2.githubusercontent.com/u/54054372?v=4" width="72px;" alt="GCyingmanji"/><br /><sub><b>GCyingmanji</b></sub></a><br /><a href="#content-GCyingmanji" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/JoshuaHiroko"><img src="https://avatars2.githubusercontent.com/u/54072825?v=4" width="72px;" alt="JoshuaHiroko"/><br /><sub><b>JoshuaHiroko</b></sub></a><br /><a href="#content-JoshuaHiroko" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/NeroArc"><img src="https://avatars1.githubusercontent.com/u/49861997?v=4" width="72px;" alt="NeroArc"/><br /><sub><b>NeroArc</b></sub></a><br /><a href="#content-NeroArc" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/IzumiNanaya"><img src="https://avatars1.githubusercontent.com/u/53500939?v=4" width="72px;" alt="IzumiNanaya"/><br /><sub><b>IzumiNanaya</b></sub></a><br /><a href="#content-IzumiNanaya" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/NekodakeRise"><img src="https://avatars2.githubusercontent.com/u/54005076?v=4" width="72px;" alt="NekodakeRise"/><br /><sub><b>NekodakeRise</b></sub></a><br /><a href="#content-NekodakeRise" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/SlagerZ"><img src="https://avatars2.githubusercontent.com/u/31960814?v=4" width="72px;" alt="SlagerZ"/><br /><sub><b>SlagerZ</b></sub></a><br /><a href="#content-SlagerZ" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ZTMC"><img src="https://avatars2.githubusercontent.com/u/11673073?v=4" width="72px;" alt="Z - The Magical Color"/><br /><sub><b>Z - The Magical Color</b></sub></a><br /><a href="#content-ZTMC" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/yuqingyuci"><img src="https://avatars0.githubusercontent.com/u/53669894?v=4" width="72px;" alt="yuqingyuci"/><br /><sub><b>yuqingyuci</b></sub></a><br /><a href="#content-yuqingyuci" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/morykudo"><img src="https://avatars1.githubusercontent.com/u/53271042?v=4" width="72px;" alt="morykudo"/><br /><sub><b>morykudo</b></sub></a><br /><a href="#content-morykudo" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/fubuki1057"><img src="https://avatars0.githubusercontent.com/u/53498430?v=4" width="72px;" alt="fubuki1057"/><br /><sub><b>fubuki1057</b></sub></a><br /><a href="#content-fubuki1057" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/AwAw565"><img src="https://avatars1.githubusercontent.com/u/53491343?v=4" width="72px;" alt="AwAw565"/><br /><sub><b>AwAw565</b></sub></a><br /><a href="#content-AwAw565" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/aa610817338"><img src="https://avatars0.githubusercontent.com/u/53430484?v=4" width="72px;" alt="aa610817338"/><br /><sub><b>aa610817338</b></sub></a><br /><a href="#content-aa610817338" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/bb610817338"><img src="https://avatars3.githubusercontent.com/u/51133708?v=4" width="72px;" alt="bb610817338"/><br /><sub><b>bb610817338</b></sub></a><br /><a href="#content-bb610817338" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/sliddqdidkfa"><img src="https://avatars2.githubusercontent.com/u/53249459?v=4" width="72px;" alt="sliddqdidkfa"/><br /><sub><b>sliddqdidkfa</b></sub></a><br /><a href="#content-sliddqdidkfa" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/C-JIUJIE"><img src="https://avatars3.githubusercontent.com/u/26102177?v=4" width="72px;" alt="C-JIUJIE"/><br /><sub><b>C-JIUJIE</b></sub></a><br /><a href="#content-C-JIUJIE" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/992939504"><img src="https://avatars0.githubusercontent.com/u/14029071?v=4" width="72px;" alt="992939504"/><br /><sub><b>992939504</b></sub></a><br /><a href="#content-992939504" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/289788042"><img src="https://avatars1.githubusercontent.com/u/54934416?v=4" width="72px;" alt="289788042"/><br /><sub><b>289788042</b></sub></a><br /><a href="#content-289788042" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/AFatOtaku"><img src="https://avatars0.githubusercontent.com/u/37997501?v=4" width="72px;" alt="AFatOtaku"/><br /><sub><b>AFatOtaku</b></sub></a><br /><a href="#content-AFatOtaku" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/wudifeixue"><img src="https://avatars2.githubusercontent.com/u/7316929?v=4" width="72px;" alt="Curtis Xiao"/><br /><sub><b>Curtis Xiao</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=wudifeixue" title="Code">💻</a> <a href="#content-wudifeixue" title="Content">🖋</a></td>
    <td align="center"><a href="http://blog.thiece.cn/"><img src="https://avatars3.githubusercontent.com/u/5725831?v=4" width="72px;" alt="Thiece"/><br /><sub><b>Thiece</b></sub></a><br /><a href="#content-Thiece" title="Content">🖋</a></td>
    <td align="center"><a href="http://miraclexyz.github.io"><img src="https://avatars2.githubusercontent.com/u/30370926?v=4" width="72px;" alt="Yuzhang Xie"/><br /><sub><b>Yuzhang Xie</b></sub></a><br /><a href="#content-MiracleXYZ" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/example123"><img src="https://avatars3.githubusercontent.com/u/87628?v=4" width="72px;" alt="example123"/><br /><sub><b>example123</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=example123" title="Code">💻</a> <a href="#content-example123" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/shugen002"><img src="https://avatars1.githubusercontent.com/u/10257291?v=4" width="72px;" alt="shugen002"/><br /><sub><b>shugen002</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=shugen002" title="Code">💻</a> <a href="#content-shugen002" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://sparanoid.com"><img src="https://avatars0.githubusercontent.com/u/96356?v=4" width="72px;" alt="Tunghsiao Liu"/><br /><sub><b>Tunghsiao Liu</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=sparanoid" title="Code">💻</a> <a href="#content-sparanoid" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/yuyuyzl"><img src="https://avatars3.githubusercontent.com/u/14276008?v=4" width="72px;" alt="yuzhongliang22"/><br /><sub><b>yuzhongliang22</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=yuyuyzl" title="Code">💻</a> <a href="#content-yuyuyzl" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/baolan-zifu"><img src="https://avatars0.githubusercontent.com/u/20073620?v=4" width="72px;" alt="Takaranoao"/><br /><sub><b>Takaranoao</b></sub></a><br /><a href="#content-baolan-zifu" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ghostmiaojun"><img src="https://avatars1.githubusercontent.com/u/51529364?v=4" width="72px;" alt="ghostmiaojun"/><br /><sub><b>ghostmiaojun</b></sub></a><br /><a href="#content-ghostmiaojun" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/IOP1473"><img src="https://avatars1.githubusercontent.com/u/41325343?v=4" width="72px;" alt="IOP1473"/><br /><sub><b>IOP1473</b></sub></a><br /><a href="#content-IOP1473" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/sxuweil28kvw"><img src="https://avatars3.githubusercontent.com/u/10825865?v=4" width="72px;" alt="sxuweil28kvw"/><br /><sub><b>sxuweil28kvw</b></sub></a><br /><a href="#content-sxuweil28kvw" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/PoiDaisuki"><img src="https://avatars3.githubusercontent.com/u/48427092?v=4" width="72px;" alt="PoiDaisuki"/><br /><sub><b>PoiDaisuki</b></sub></a><br /><a href="#content-PoiDaisuki" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/NciyuandeAK"><img src="https://avatars2.githubusercontent.com/u/54472479?v=4" width="72px;" alt="NciyuandeAK"/><br /><sub><b>NciyuandeAK</b></sub></a><br /><a href="#content-NciyuandeAK" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/peng233163"><img src="https://avatars0.githubusercontent.com/u/38469578?v=4" width="72px;" alt="peng233163"/><br /><sub><b>peng233163</b></sub></a><br /><a href="#content-peng233163" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
