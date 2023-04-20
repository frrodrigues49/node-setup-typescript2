interface User {
    name: string
    age: number
}

function saveUser (user: User) {
  console.log('🚀 ~ file: server.ts:7 ~ saveUser ~ user:', user)
}

saveUser({
  name: 'Fagner Roberto',
  age: 41
})
