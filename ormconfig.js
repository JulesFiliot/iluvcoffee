/* eslint-disable prettier/prettier */
module.exports = {
	type: 'postgres',
	host: '192.168.0.22',
	port: 5432,
	username: 'postgres',
	password: 'pass123',
	database: 'postgres',
	entities: ['dist/**/*.entity.js'],
	migrations: ['dist/migrations/*.js'],
	cli: {
		migrationsDir: 'src/migrations',
	},
};
