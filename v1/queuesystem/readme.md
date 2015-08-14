# Queuesystem API

The API is available at [/api/v1/queuesystem/](http://hiof.no/api/v1/queuesystem/).


## GET

With GET you will be able to query the current queue status for both campuses at the same time.

    $ curl -i http://hiof.no/api/v1/queuesystem/

## POST overview

The POST request is used for updating the current queue number.

### POST parameters

**currentNumber**

Type: `string` Values should be 1 and up.

**secret**

Type: `string` The value is manually checked against a hash of the value. The campusId will be identified from the unique passphrase.
