const compose = (...funcs) => Comp => {
  return funcs.reduceRight((prevRes, fn) => fn(prevRes), Comp);
};

export default compose;
