# Page API

The API is available at [/api/v1/page/](http://hiof.no/api/v1/page/).


## GET

With GET you will be able to query the content from the our CMS NetEd. Required parameter is the ID of the page you want to display.

    $ curl -i "http://hiof.no/api/v1/page/"

### GET Options

**id**

Type: `intr` Values could be `single` if you want data only one studyprogram code. This value require courseId.

**server**

Type: `string` Unique identifier for each course. Find the correct courseId in the index query. This value is required on template=single.

Example:

    $ curl -i "http://hiof.no/api/v1/page/?courseId=spl&template=single"
