const name = [
  'Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella',
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope'
]

const searchName = (query, limit, callback)=> {
  const nama = name.filter((names) => names.toLowerCase().indexOf(query.toLowerCase()) > -1)
  if (nama.length > limit) {
    nama.length = limit
    callback(nama)
  } else {
    callback(nama)
  }
}

const showName = (namamu) => {
  console.log(namamu)
}

searchName('an', 2, showName)
