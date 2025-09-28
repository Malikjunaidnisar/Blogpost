async function getSinglePost(){
	document.cookie = 'userpost=;expires=Thu, 01 Jan 1970 00:00:00 UTC;'
	let cookie = document.cookie
	
   
	let [name,data] = cookie.split('=')
	
	str= JSON.parse(data)
	let heading = document.getElementById("heading")
	heading.textContent=str.title
	let child = `<div><p>${str.title}</p>
				<p>${str.content}</p></div>`
	let parent = document.getElementById('list')
	parent.innerHTML +=  child
	
}

getSinglePost()
