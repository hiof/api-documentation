# Page API

The API is available at [/api/v1/page/](http://hiof.no/api/v1/page/).


## GET

With GET you will be able to query the content from the our CMS NetEd. Required parameter is the ID of the page you want to display.

### GET parameters

**id**

Type: `int` Value should correspond with the page you want to

Example:

    $ curl -i "http://hiof.no/api/v1/page/?id=475"

**server**

Type: `string` Either www2 or www. Defaults to www if it is not defined.

Example:

    $ curl -i "http://hiof.no/api/v1/page/?id=18346&server=www2"
