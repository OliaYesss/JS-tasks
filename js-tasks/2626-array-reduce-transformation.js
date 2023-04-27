/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  if (!nums.length) {
      return init
  }

  for (let i = 0; i < nums.length; i++) {
      console.log(init)
      init = fn(init, nums[i])
      console.log('AFTER:', init)
  }

  return init
};

//OR 

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  val = init
  
  if (!nums.length) {
      return val
  }

  for (let i = 0; i < nums.length; i++) {
      console.log(val)
      val = fn(val, nums[i])
      console.log('AFTER:', val)
  }

  return val
};