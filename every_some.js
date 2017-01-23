function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function everySubmittedUser(submittedUsers) {
            return goodUsers.some(function someGoodUsers(goodUsers) {
                return goodUsers.id === submittedUsers.id;
            });
        });
    };
}

module.exports = checkUsersValid