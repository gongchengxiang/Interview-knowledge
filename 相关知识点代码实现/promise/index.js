
class Promise {
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onResolvedCallBacks = []
        this.onRejectedCallBacks = []

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.value = value
                this.state = 'fulfilled'
                this.onResolvedCallBacks.forEach(onResolved => onResolved())
            }
        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.reason = reason
                this.state = 'rejected'
                this.onRejectedCallBacks.forEach(onRejected => onRejected())
            }
        }
        try {
            executor(resolve,reject)
        } catch (err) {
            reject(err)
        }
    }

    then(onResolved, onRejected) {
        const promise = new Promise((resolve,reject) => {
            if (this.state === 'pending') {
                this.onResolvedCallBacks.push(() => {
                    setTimeout(() => {
                        try {
                            const onResolvedResult = onResolved(this.value)
                            checkResolveValue(promise,onResolvedResult,resolve,reject)
                        }catch(err){
                            reject(err)
                        }
                    })
                })
                this.onRejectedCallBacks.push(() => {
                    setTimeout(() => {
                        try {
                            const onRejectedResult = onRejected(this.reason)
                            checkResolveValue(promise,onRejectedResult,resolve,reject)
                        }catch(err){
                            reject(err)
                        }
                    })
                })
            } else if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const onResolvedResult = onResolved(this.value)
                        checkResolveValue(promise,onResolvedResult,resolve,reject)
                    }catch(err){
                        reject(err)
                    }
                })
            } else if (this.state == 'rejected') {
                setTimeout(() => {
                    try {
                        const onRejectedResult = onRejected(this.reason)
                        checkResolveValue(promise,onRejectedResult,resolve,reject)
                    }catch(err){
                        reject(err)
                    }
                })
            }
        })
        return promise
    }

    catch(onRejected) {
        return this.then(null,onRejected)
    }

    finally(callback) {
        return this.then(() => {
            callback()
        }).catch(() => {
            callback()
        })
    }

    static resolve(value) {
        return new Promise((resolve,reject) => {
            if (value &&( typeof value === 'object'||typeof value === 'function')) {
                try {
                    if (typeof value.then == 'function') {
                        value.then((res) => {
                            resolve(res)
                        }, err => {
                            reject(err)
                        })
                    }
                } catch (err) { 
                    reject(err)
                }
            } else {
                resolve(value)
            }
        })
    }
    static reject(value) {
        return new Promise((resolve,reject) => {
            reject(value)
        })
    }
    // ???????????????????????????????????????promise?????????????????????????????????
    static all(promises) {
        if (promises && typeof promises[Symbol.iterator] == 'function') {
            return new Promise((resolve,reject) => {
                const res = []
                let count = 0
            })
        } else {
            return Promise.reject(new Error('??????????????????????????????'))
        }
    }
    // ????????????????????????????????????????????????promise
    static any(promises) { }
    // ??????????????????????????????
    static race(promises) {
        if (promises && typeof promises[Symbol.iterator] == 'function') {
            return new Promise
        } else {
            return Promise.reject(new Error('??????????????????????????????'))
        }
    }
    
    static allSettled(promises) { }

}

function checkResolveValue(promise,onResolvedResult,resolve,reject) {
    if (promise === onResolvedResult) {
        return reject(new Error('?????????'))
    } else {
        if (onResolvedResult && (typeof onResolvedResult === 'object' || typeof onResolvedResult === 'function')) {
            try {
                if (typeof onResolvedResult.then === 'function') {
                    onResolvedResult.then(res => {
                        checkResolveValue(promise,res,resolve,reject)
                    }, err => {
                        reject(err)
                    })
                } else {
                    resolve(onResolvedResult)
                }
            } catch (err) {
                reject(err)
            }
        } else {
            resolve(onResolvedResult)
        }
    }
}