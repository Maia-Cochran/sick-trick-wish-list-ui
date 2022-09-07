const fetchAll = () => {
    return fetch(`http://localhost:3001/api/v1/tricks/`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

const getAllData = (data) => {
    const result = Promise.all([fetchAll(data)])
    .then(res => {
        return res
    })
    return result
}

export { getAllData }