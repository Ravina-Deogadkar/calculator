
export class FetchAPI{
	static async postData(url = ``, data = {}, passRefreshToken = false) {

        // if (!passRefreshToken)//if api is called for refreshing token then do not check token expiration.
        //     await this.checkTokenExpire();

        // Default options are marked with *
        const header = {
            "Content-Type": "application/json; charset=utf-8",
        };

        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: header,
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then(function (response) {
				console.log(response);
                if (response.status === 401) {
                    throw new Error("Unauthorized");
                }

                if (response.ok)
                    return response.json();
                else {
                    console.error("Error in : " + url + " - Status Code : " + response.status);
                    return response.json();
                }
            }); // parses response to JSON
    };

}