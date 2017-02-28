/**
 * Created by wangrui on 2017/2/16.
 */

function test (z) {
    console.log(Object.prototype.toString.call(2));
    console.log(Object.prototype.toString.call(''));
    Object.prototype.toString.call(2) // "[object Number]"
    Object.prototype.toString.call('') // "[object String]"
    Object.prototype.toString.call(true) // "[object Boolean]"
    Object.prototype.toString.call(undefined) // "[object Undefined]"
    Object.prototype.toString.call(null) // "[object Null]"
    Object.prototype.toString.call(Math) // "[object Math]"
    Object.prototype.toString.call({}) // "[object Object]"
    Object.prototype.toString.call([]) // "[object Array]"

}

