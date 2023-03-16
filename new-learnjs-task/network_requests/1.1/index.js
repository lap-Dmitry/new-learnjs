// Получите данные о пользователях GitHub
async function getUsers(names) {
    let jobs = [];

    for (let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
                return null;
            }
        );
        jobs.push(job);
    }

    let results = await Promise.all(jobs);

    return results;
}

describe("getUsers", function () {

    it("gets users from GitHub", async function () {
        let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
        assert.equal(users[0].login, 'iliakan');
        assert.equal(users[1].login, 'remy');
        assert.equal(users[2], null);
    });

});