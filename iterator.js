const integers = function* (){
	let i = 0;
	while(true){
		yield i++;
	}
};


const take = function*(max, iterator) {
  let i = 0;
  while (i < max) {
    i = iterator.next().value;
    yield i;
  }
}
