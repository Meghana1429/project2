var cache="c1";
this.addEventListener("install",function(event){
	event.waitUntil{
		caches.open(cache1).then(cache=>{
			cache.addAll([
				])
		})
	}
})


this.addEventListener('fetch',function(event)
{
	event.respondwith(
		cache.open(cache1).then(function(cache)){
			return.cache.match(event.request).then(function(res){
				return res || fetch(event.request).then(function(regres){
					cache.put(event.request,regres.clone());
				})
})
		
