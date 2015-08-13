# Semesterstart API

The API is available at [/api/v1/semesterstart/](http://hiof.no/api/v1/semesterstart/).


## GET

With GET you will be able to query the current queue status for both campuses at the same time.

    $ curl -i "http://hiof.no/api/v1/semesterstart/"

### GET Options

**template**

Type: `string` Values could be `single` if you want data only one studyprogram code. This value require courseId.

**courseId**

Type: `string` Unique identifier for each course. Find the correct courseId in the index query. This value is required on template=single.

Example:

    $ curl -i "http://hiof.no/api/v1/semesterstart/?courseId=spl&template=single"
