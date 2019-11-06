const db = require('../data/db-config')

module.exports = {
//     //from Readme
        find,
        findById,
        findSteps,
        add,
        update,
        remove
 }

function find() {
    return db('schemes')
}

// `findById(id)`:
//   - Expects a scheme `id` as its only parameter.
//   - Resolve to a single scheme object.
//   - On an invalid `id`, resolves to `null`.

// select * from schemes
// where id = 1

function findById(id) {
    
    return db('schemes')
    .where({id: id})
    
    
}


// select steps.id, schemes.scheme_name, steps.step_number, steps.instructions
// from steps
// join schemes on steps.scheme_id = schemes.id
function findSteps(id){
    return db('steps')
    .join('schemes', 'steps.scheme_id','=','schemes.id')
    //scheme_id from steps, should = schemes.id
    .where({scheme_id: id})
    .select('steps.id','schemes.scheme_name','steps.step_number','steps.instructions')
}

function add(body){
    return db('schemes')
    .insert(body)
}

function update(changes, id){
    return db('schemes')
    .update(changes)
    .where({id: id})
}

function remove(id){
    return db('schemes')
    .delete(id)
    .where({id: id})
}