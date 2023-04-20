import { User } from '../models/user'
import { test, expect } from 'vitest'

test('it should be ok', () => {
  const user = new User()

  user.name = 'John'

  expect(user.name).toEqual('John')
})