db.createUser({
    user: 'root',
    pwd: 'abc123',
    roles: [
      {
        role: 'readWrite',
        db: 'admin',
      },
    ],
  });