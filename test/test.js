const assert = require('assert');
const userService = require('../src/services/user')
const userList = [
 {id: 1, name: "User 1"},
 {id: 2, name: "User 2"},
 {id: 3, name: "User 3"}
]


describe('filterItemsByID', function () {
 it('should return object if id is found', function () {
   user = userService._filterItemsByID(userList, 33)
   assert.equal(user.id, 3);
 });
 it('should return empty object if id is not found', function () {
   user = userService._filterItemsByID(userList, 4)
   assert.deepEqual(user, {});
 });
});
