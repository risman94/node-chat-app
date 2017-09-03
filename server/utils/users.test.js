const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'risman',
			room: 'javascript'
		}, {
			id: '2',
			name: 'rio',
			room: 'python'
		}, {
			id: '3',
			name: 'ririn',
			room: 'javascript'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '/#29393jwjns929',
			name: 'risman',
			room: 'developers room'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userId = '1';
		var user = users.removeUser(userId);
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		var userId = '99';
		var user = users.removeUser(userId);
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '2';
		var user = users.getUser(userId);
		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		var userId = '99';
		var user = users.getUser(userId);
		expect(user).toNotExist();
	});

	it('should return names for javascript', () => {
		var userList = users.getUserList('javascript');

		expect(userList).toEqual(['risman', 'ririn']);
	});

	it('should return names for python', () => {
		var userList = users.getUserList('python');

		expect(userList).toEqual(['rio']);
	});
});