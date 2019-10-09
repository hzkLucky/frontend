import localforage from 'localforage'

const cache = {
     setItem : (itemName, value) => {
       return new Promise((resolve, reject) => {
           localforage.setItem( itemName, value).then( value => {
               resolve(value)
           }).catch(err => {
               reject('err' + err)
           })
       })
    },
    getItem: (itemName) => {
        return new Promise((resolve, reject) => {
            localforage.getItem(itemName).then( data => {
                resolve( data )
            }).catch( err => {
                reject( 'err' + err )
            })
        })
    },
    removeItem: (itemName) => {
        return new Promise( (resolve, reject) => {
            localforage.removeItem(itemName).then( data => {
                resolve( data )
            }).catch( err => {
                reject( 'err' + err )
            })
        })
    }
}

export default cache
