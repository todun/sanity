module.exports = function documentHasErrors(doc) {
  if (typeof doc._id !== 'undefined' && typeof doc._id !== 'string') {
    return `Document contained an invalid "_id" property - must be a string`
  }

  if (typeof doc._type !== 'string') {
    return `Document did not contain required "_type" property of type string`
  }

  return null
}
